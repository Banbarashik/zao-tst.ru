import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET(
  req: Request,
  { params }: { params: { path: string[] } },
) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // Join path segments: ["subfolder", "mymodel.zip"] → "subfolder/mymodel.zip"
  const relativePath = params.path.join("/");
  const filePath = path.join(process.cwd(), "private-models", relativePath);

  // Prevent path traversal attacks (e.g. "../../etc/passwd")
  const baseDir = path.join(process.cwd(), "private-models");
  if (!filePath.startsWith(baseDir)) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  if (!fs.existsSync(filePath)) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  const file = fs.readFileSync(filePath);
  return new NextResponse(file, {
    headers: {
      "Content-Type": "application/zip",
      "Content-Disposition": `attachment; filename="${params.path.at(-1)}"`,
    },
  });
}
