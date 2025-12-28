import { Field } from "@/app/data-access/field/field.entity";
import { MemberDataValue } from "@/app/data-access/member/member.entity";

export type Row = Field & {
  value: MemberDataValue;
};
