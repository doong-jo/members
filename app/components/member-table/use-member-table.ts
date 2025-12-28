import { useSuspenseFields } from "@/app/data-access/field/use-fields";
import { MemberDataValue } from "@/app/data-access/member/member.entity";
import { useSuspenseAllMembers } from "@/app/data-access/member/use-members";

export const useSuspenseMemberTable = () => {
  const { data: fields } = useSuspenseFields();
  const { data: members } = useSuspenseAllMembers();

  // member 객체를 memberValue 객체 배열로 변환
  const membersByField = members.map((member) => {
    return Object.entries(member).reduce(
      (acc, [key, value]) => {
        acc[key] = value;
        return acc;
      },
      {} as Record<string, MemberDataValue>,
    );
  });

  return {
    fields,
    membersByField,
  };
};
