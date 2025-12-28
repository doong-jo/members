import { BaseEntity } from "../base/base.entity";
import { DefaultFieldSchema } from "../field/field.entity";

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
  [key: string]: string | number | boolean | Date | null | undefined;
}
