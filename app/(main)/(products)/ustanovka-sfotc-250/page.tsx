import { sfotcOperatingModes } from "@/data/sfotcOperatingModes";

import { SfotcOperatingModeTable } from "@/components/general_pages/SfotcOperatingModeTable";

export default function SFOTC250Page() {
  const table = sfotcOperatingModes.find(
    (mode) => mode.id === "sfotc-250-17000",
  )!;

  return (
    <div className="@container w-full lg:overflow-x-auto">
      <SfotcOperatingModeTable table={table} />
    </div>
  );
}
