import { Checkbox } from "antd";
import { format } from "date-fns";

import { MemberDataValue } from "@/app/data-access/member/member.entity";

import { serializeValue } from "../member-table.helper";

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
  uniqueValues,
  selectedKeys,
  onChange,
}: {
  uniqueValues: MemberDataValue[];
  selectedKeys: Set<string>;
  onChange: (selectedKeys: Set<string>) => void;
}) {
  const handleChange = (value: MemberDataValue, checked: boolean) => {
    const key = serializeValue(value);
    const next = new Set(selectedKeys);

    if (checked) {
      next.add(key);
    } else {
      next.delete(key);
    }

    onChange(next);
  };

  return (
    <div className="min-w-[134px] rounded-[10px] p-2 [box-shadow:0px_6px_16px_0px_#00000014]">
      {uniqueValues.map((value) => {
        const key = serializeValue(value);
        return (
          <div key={key} className="flex items-center gap-2 px-[5px] py-3">
            <Checkbox
              checked={selectedKeys.has(key)}
              onChange={(e) => handleChange(value, e.target.checked)}
            />
            <span>{formatFilterValue(value)}</span>
          </div>
        );
      })}
    </div>
  );
}
