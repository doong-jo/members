import { Member } from "@/app/data-access/member/member.entity";

import { Row } from "../shared/table/entities/row.entity";

/**
 * member 객체를 Row 객체 배열로 변환
 */
export function mapMemberToRows(member: Member): Row[] {
  // field controller에서 모든 필드 조회하고 member 객체의 필드와 매칭
  /**
   * const cells = fields.map((field) => ({
   *  ...,
   *  value: member[field.key]
   * })
   */

  return [];
}
