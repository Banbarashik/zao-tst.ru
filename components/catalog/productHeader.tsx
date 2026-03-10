import Link from "next/link";

export default function ProductHeader({
  text,
  modelLinks,
}: {
  text: string;
  modelLinks: {
    text: string;
    url: string;
  }[];
}) {
  return (
    <div className="mb-4 flex items-center justify-between gap-4">
      <h1 className="text-xl font-bold uppercase">{text}</h1>
      <Link
        href="#"
        className="bg-accent rounded-md px-3 py-2 text-sm font-semibold"
      >
        Скачать 3D-модель
      </Link>
    </div>
  );
}
