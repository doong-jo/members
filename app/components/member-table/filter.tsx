import { useState } from "react";
import { Checkbox } from "antd";
import { format } from "date-fns";

import { MemberDataValue } from "@/app/data-access/member/member.entity";

function formatFilterValue(value: MemberDataValue): string {
  if (value === undefined || value === null) {
    return "";
  }

  if (typeof value === "boolean") {
    return value ? "선택됨" : "선택 안함";
  }

  if (value instanceof Date) {
    return format(value, "yyyy-MM-dd");
  }

  return value.toString();
}

export function Filter({
  values,
  onFilterChange,
}: {
  values: MemberDataValue[];
  onFilterChange: (values: MemberDataValue[]) => void;
}) {
  // distinct values
  const distinctValues = [...new Set(values)];

  const [checkedValues, setCheckedValues] = useState<MemberDataValue[]>([]);

  const handleFilterChange = (value: MemberDataValue, checked: boolean) => {
    if (checked) {
      setCheckedValues([...checkedValues, value]);
    } else {
      setCheckedValues(checkedValues.filter((v) => v !== value));
    }
    // onFilterChange([...checkedValues, value]);
  };

  return (
    <div className="min-w-[134px] rounded-[10px] p-2 [box-shadow:0px_6px_16px_0px_#00000014]">
      {distinctValues.map((value) => (
        <div
          key={value?.toString()}
          className="flex items-center gap-2 px-[5px] py-3"
          onClick={() => handleFilterChange(value, !checkedValues.includes(value))}
        >
          <Checkbox
            checked={checkedValues.includes(value)}
            onChange={(e) => handleFilterChange(value, e.target.checked)}
          />
          <span>{formatFilterValue(value)}</span>
        </div>
      ))}
    </div>
  );
}
