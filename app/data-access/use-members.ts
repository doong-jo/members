import {
  CreateMemberDto,
  DeleteMemberDto,
  GetListMembersDto,
  UpdateMemberDto,
} from "./member.dto";

export function useMember() {
  const createMember = (member: CreateMemberDto) => {
    return member;
  };

  const updateMember = (member: UpdateMemberDto) => {
    return member;
  };

  const deleteMember = (member: DeleteMemberDto) => {
    return member;
  };

  const getMembers = (member: GetListMembersDto) => {
    return member;
  };

  return {
    createMember,
    updateMember,
    deleteMember,
    getMembers,
  };
}
