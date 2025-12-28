import { BaseEntity } from "../base/base.entity";
import { DefaultFieldSchema } from "../field/field.entity";

export type MemberDataValue = string | number | boolean | Date | null | undefined;

/**
 * 회원 데이터 명세
 */
export class Member extends BaseEntity implements DefaultFieldSchema {
  constructor() {
    super();

    this.name = "";
  }

  name: string;
  address: string | undefined;
  memo: string | undefined;
  job: "개발자" | "PO" | "디자이너" | undefined;
  marketingAgree: boolean | undefined;

  // 추후 Custom Filed 기능이 추가되었을 때 dynamic하게 필드 추가 가능
  [key: string]: MemberDataValue;
}

export const DEFAULT_MEMBERS: Member[] = [
  {
    id: crypto.randomUUID(),
    name: "John Doe",
    address: "서울 강남구",
    memo: "외국인",
    createdAt: new Date("2024-10-02"),
    job: "개발자",
    marketingAgree: true,
  },
  {
    id: crypto.randomUUID(),
    name: "Foo Bar",
    address: "서울 강남구",
    memo: "한국인",
    createdAt: new Date("2024-10-01"),
    job: "PO",
    marketingAgree: false,
  },
];
