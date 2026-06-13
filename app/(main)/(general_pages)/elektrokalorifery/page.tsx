import sfoWiringTablesData from "@/data/sfoWiringTables.json";

import Image from "next/image";

import type { SfoWiringSchema } from "@/types/sfoWiringSchema";

import Spoiler from "@/components/ui/spoiler";
import { SfoWiringTable } from "@/components/general_pages/SfoWiringTable";

export default function ElektrokaloriferyPage() {
  return (
    <ol className="space-y-12">
      <li className="space-y-4">
        <div className="flex w-full flex-col gap-3 sm:flex-row sm:gap-0">
          <div className="relative aspect-20/9 w-full">
            <Image
              src="/img/kalorifer_sfo-16.png"
              alt="Подключение фазных термостойких проводов в коробе СФО-16"
              title="Схема подключения фазных блоков электрокалорифера СФО-16"
              fill
            />
          </div>
          <div className="relative aspect-20/9 w-full">
            <Image
              src="/img/kalorifer_sfo-16_electro.png"
              alt="Подключение нулевого провода к шине ТЭНов СФО-16"
              title="Схема подключения нейтральной стороны калорифера СФО-16"
              fill
            />
          </div>
        </div>
        <Spoiler title="Принципиально-монтажная схема СФО-16">
          <SfoWiringTable
            schema={sfoWiringTablesData["СФО-16"] as SfoWiringSchema}
          />
        </Spoiler>
      </li>

      <li className="space-y-4">
        <div className="flex w-full flex-col gap-3 sm:flex-row sm:gap-0">
          <div className="relative aspect-2/1 w-full">
            <Image
              src="/img/kalorifer_sfo-25.png"
              alt="Подключение фазных термостойких проводов в коробе СФО-25"
              title="Схема подключения фазных блоков электрокалорифера СФО-25"
              fill
            />
          </div>
          <div className="relative aspect-2/1 w-full">
            <Image
              src="/img/kalorifer_sfo-25_electro.png"
              alt="Подключение нулевого провода к шине ТЭНов СФО-25"
              title="Схема подключения нейтральной стороны калорифера СФО-25"
              fill
            />
          </div>
        </div>
        <Spoiler title="Принципиально-монтажная схема СФО-25">
          <SfoWiringTable
            schema={sfoWiringTablesData["СФО-25"] as SfoWiringSchema}
          />
        </Spoiler>
      </li>

      <li className="space-y-4">
        <div className="flex w-full flex-col gap-3 sm:flex-row sm:gap-0">
          <div className="relative aspect-5/3 w-full">
            <Image
              src="/img/kalorifer_sfo-40.png"
              alt="Подключение фазных термостойких проводов в коробе СФО-40"
              title="Схема подключения фазных блоков электрокалорифера СФО-40"
              fill
            />
          </div>
          <div className="relative aspect-5/3 w-full">
            <Image
              src="/img/kalorifer_sfo-40_electro.png"
              alt="Подключение нулевого провода к шине ТЭНов СФО-40"
              title="Схема подключения нейтральной стороны калорифера СФО-40"
              fill
            />
          </div>
        </div>
        <Spoiler title="Принципиально-монтажная схема СФО-40">
          <SfoWiringTable
            schema={sfoWiringTablesData["СФО-40"] as SfoWiringSchema}
          />
        </Spoiler>
      </li>

      <li className="space-y-4">
        <div className="flex w-full flex-col gap-3 sm:flex-row sm:gap-0">
          <div className="relative aspect-20/13 w-full">
            <Image
              src="/img/kalorifer_sfo-60.png"
              alt="Подключение фазных термостойких проводов в коробе СФО-60"
              title="Схема подключения фазных блоков электрокалорифера СФО-60"
              fill
            />
          </div>
          <div className="relative aspect-20/13 w-full">
            <Image
              src="/img/kalorifer_sfo-60_electro.png"
              alt="Подключение нулевого провода к шине ТЭНов СФО-60"
              title="Схема подключения нейтральной стороны калорифера СФО-60"
              fill
            />
          </div>
        </div>
        <Spoiler title="Принципиально-монтажная схема СФО-60">
          <SfoWiringTable
            schema={sfoWiringTablesData["СФО-60"] as SfoWiringSchema}
          />
        </Spoiler>
      </li>

      <li className="space-y-4">
        <div className="flex w-full flex-col gap-3 sm:flex-row sm:gap-0">
          <div className="relative aspect-10/7 w-full">
            <Image
              src="/img/kalorifer_sfo-100.png"
              alt="Подключение фазных термостойких проводов в коробе СФО-100"
              title="Схема подключения фазных блоков электрокалорифера СФО-100"
              fill
            />
          </div>
          <div className="relative aspect-10/7 w-full">
            <Image
              src="/img/kalorifer_sfo-100_electro.png"
              alt="Подключение нулевого провода к шине ТЭНов СФО-100"
              title="Схема подключения нейтральной стороны калорифера СФО-100"
              fill
            />
          </div>
        </div>
        <Spoiler title="Принципиально-монтажная схема СФО-100">
          <SfoWiringTable
            schema={sfoWiringTablesData["СФО-100"] as SfoWiringSchema}
          />
        </Spoiler>
      </li>

      <li className="space-y-4">
        <div className="flex w-full flex-col gap-3 sm:flex-row sm:gap-0">
          <div className="relative aspect-4/3 w-full">
            <Image
              src="/img/kalorifer_sfo-160.png"
              alt="Подключение фазных термостойких проводов в коробе СФО-160"
              title="Схема подключения фазных блоков электрокалорифера СФО-160"
              fill
            />
          </div>
          <div className="relative aspect-4/3 w-full">
            <Image
              src="/img/kalorifer_sfo-160_electro.png"
              alt="Подключение нулевого провода к шине ТЭНов СФО-160"
              title="Схема подключения нейтральной стороны калорифера СФО-160"
              fill
            />
          </div>
        </div>
        <Spoiler title="Принципиально-монтажная схема СФО-160">
          <SfoWiringTable
            schema={sfoWiringTablesData["СФО-160"] as SfoWiringSchema}
          />
        </Spoiler>
      </li>

      <li className="space-y-4">
        <div className="flex w-full flex-col gap-3 sm:flex-row sm:gap-0">
          <div className="relative aspect-10/9 w-full">
            <Image
              src="/img/kalorifer_sfo-250.png"
              alt="Подключение фазных термостойких проводов в коробе СФО-250"
              title="Схема подключения фазных блоков электрокалорифера СФО-250"
              fill
            />
          </div>
          <div className="relative aspect-10/9 w-full">
            <Image
              src="/img/kalorifer_sfo-250_electro.png"
              alt="Подключение нулевого провода к шине ТЭНов СФО-250"
              title="Схема подключения нейтральной стороны калорифера СФО-250"
              fill
            />
          </div>
        </div>
        <Spoiler title="Принципиально-монтажная схема СФО-250">
          <SfoWiringTable
            schema={sfoWiringTablesData["СФО-250"] as SfoWiringSchema}
          />
        </Spoiler>
      </li>
    </ol>
  );
}
