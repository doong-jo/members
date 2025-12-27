import { BaseMember } from "./member.entity";

export interface CreateMemberDto extends Partial<BaseMember> {
  [key: string]: string | number | boolean | Date | null | undefined;
}

export interface UpdateMemberDto extends Partial<BaseMember> {
  [key: string]: string | number | boolean | Date | null | undefined;
}

export interface DeleteMemberDto {
  id: string;
}

export interface GetMemberDto {
  [key: string]: string | number | boolean | Date | null | undefined;
}

export interface GetListMembersDto {
  members: GetMemberDto[];
}
