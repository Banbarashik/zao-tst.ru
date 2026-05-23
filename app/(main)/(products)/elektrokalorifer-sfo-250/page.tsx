import { SFOOperatingParameterTables } from "@/data/SFOOperatingParameterTables";

import { SFOOperatingParameterTable } from "@/components/catalog/SFO/SFOOperatingParameterTable";

export default function SFO250Page() {
  return (
    <>
      <SFOOperatingParameterTable
        data={SFOOperatingParameterTables.sfo250.airflow12000.fullPower}
      />
    </>
  );
}
