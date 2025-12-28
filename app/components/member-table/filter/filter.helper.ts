import { Field } from "@/app/data-access/field/field.entity";
import { MemberDataValue } from "@/app/data-access/member/member.entity";

import { serializeValue } from "../member-table.helper";

/**
 * 필드별 중복 제거한 값을 반환
 */
export function getUniqueValuesByField(
  fields: Field[],
  membersByField: Record<string, MemberDataValue>[],
) {
  const uniqueValuesByField: Record<string, MemberDataValue[]> = {};

  fields.forEach((field) => {
    const uniqueValues = new Set<MemberDataValue>();

    membersByField.forEach((member) => {
      const value = serializeValue(member[field.key]);
      uniqueValues.add(value);
    });

    uniqueValuesByField[field.key] = Array.from(uniqueValues);
  });

  return uniqueValuesByField;
}

/**
 * 필터링된 멤버를 반환
 */
export function filterMembers(
  membersByField: Record<string, MemberDataValue>[],
  filters: Record<string, Set<string>>,
) {
  const activeFilters = Object.entries(filters).filter(([, set]) => set.size > 0);

  if (activeFilters.length === 0) return membersByField;

  return membersByField.filter((member) =>
    activeFilters.every(([fieldKey, selectedKeys]) =>
      selectedKeys.has(serializeValue(member[fieldKey])),
    ),
  );
}
