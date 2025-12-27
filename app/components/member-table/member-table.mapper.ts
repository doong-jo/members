import { Member } from "@/app/data-access/member.entity";

import { Row } from "../shared/table/row.entity";

/**
 * member.entity를 BaseMemberTableRows 타입으로 변환
 */
export function mapMemberToTable(member: Member): Row {
  return { label: "name", type: "text", required: true, value: member.id };
}
