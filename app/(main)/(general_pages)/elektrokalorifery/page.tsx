import sfoWiringTablesData from "@/data/sfoWiringTables.json";

import Image from "next/image";

import type { SfoWiringSchema } from "@/types/sfoWiringSchema";

import { SfoWiringTable } from "@/components/general_pages/SfoWiringTable";

export default function ElektrokaloriferyPage() {
  return (
    <>
      <SfoWiringTable
        schema={sfoWiringTablesData["СФО-16"] as SfoWiringSchema}
      />
      <SfoWiringTable
        schema={sfoWiringTablesData["СФО-25"] as SfoWiringSchema}
      />
      <SfoWiringTable
        schema={sfoWiringTablesData["СФО-40"] as SfoWiringSchema}
      />
      <SfoWiringTable
        schema={sfoWiringTablesData["СФО-60"] as SfoWiringSchema}
      />
      <SfoWiringTable
        schema={sfoWiringTablesData["СФО-100"] as SfoWiringSchema}
      />
      <SfoWiringTable
        schema={sfoWiringTablesData["СФО-160"] as SfoWiringSchema}
      />
      <SfoWiringTable
        schema={sfoWiringTablesData["СФО-250"] as SfoWiringSchema}
      />
      <div className="flex w-full flex-col gap-3 sm:flex-row sm:gap-0">
        <div className="relative aspect-20/9 w-full">
          <Image src="/img/kalorifer_sfo-16.png" alt="" title="" fill />
        </div>
        <div className="relative aspect-20/9 w-full">
          <Image src="/img/kalorifer_sfo-16_electro.png" alt="" title="" fill />
        </div>
      </div>
      <div className="flex w-full flex-col gap-3 sm:flex-row sm:gap-0">
        <div className="relative aspect-2/1 w-full">
          <Image src="/img/kalorifer_sfo-25.png" alt="" title="" fill />
        </div>
        <div className="relative aspect-2/1 w-full">
          <Image src="/img/kalorifer_sfo-25_electro.png" alt="" title="" fill />
        </div>
      </div>
      <div className="flex w-full flex-col gap-3 sm:flex-row sm:gap-0">
        <div className="relative aspect-5/3 w-full">
          <Image src="/img/kalorifer_sfo-40.png" alt="" title="" fill />
        </div>
        <div className="relative aspect-5/3 w-full">
          <Image src="/img/kalorifer_sfo-40_electro.png" alt="" title="" fill />
        </div>
      </div>
      <div className="flex w-full flex-col gap-3 sm:flex-row sm:gap-0">
        <div className="relative aspect-20/13 w-full">
          <Image src="/img/kalorifer_sfo-60.png" alt="" title="" fill />
        </div>
        <div className="relative aspect-20/13 w-full">
          <Image src="/img/kalorifer_sfo-60_electro.png" alt="" title="" fill />
        </div>
      </div>
      <div className="flex w-full flex-col gap-3 sm:flex-row sm:gap-0">
        <div className="relative aspect-10/7 w-full">
          <Image src="/img/kalorifer_sfo-100.png" alt="" title="" fill />
        </div>
        <div className="relative aspect-10/7 w-full">
          <Image
            src="/img/kalorifer_sfo-100_electro.png"
            alt=""
            title=""
            fill
          />
        </div>
      </div>
      <div className="flex w-full flex-col gap-3 sm:flex-row sm:gap-0">
        <div className="relative aspect-4/3 w-full">
          <Image src="/img/kalorifer_sfo-160.png" alt="" title="" fill />
        </div>
        <div className="relative aspect-4/3 w-full">
          <Image
            src="/img/kalorifer_sfo-160_electro.png"
            alt=""
            title=""
            fill
          />
        </div>
      </div>
      <div className="flex w-full flex-col gap-3 sm:flex-row sm:gap-0">
        <div className="relative aspect-10/9 w-full">
          <Image src="/img/kalorifer_sfo-250.png" alt="" title="" fill />
        </div>
        <div className="relative aspect-10/9 w-full">
          <Image
            src="/img/kalorifer_sfo-250_electro.png"
            alt=""
            title=""
            fill
          />
        </div>
      </div>
    </>
  );
}
