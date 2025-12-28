import { useMutation, useSuspenseQuery, UseSuspenseQueryOptions } from "@tanstack/react-query";

import { MemberController } from "./member.controller";
import { Member } from "./member.entity";

/**
 * 모든 회원 조회
 */
export const useSuspenseAllMembers = (queryOptions?: UseSuspenseQueryOptions<Member[], Error>) => {
  return useSuspenseQuery<Member[], Error>({
    queryKey: ["allMembers"],
    queryFn: async () => MemberController.getInstance().getAllMembers(),
    ...queryOptions,
  });
};

/**
 * 회원 조회
 */
export const useSuspenseMemberById = (
  id: string,
  queryOptions?: UseSuspenseQueryOptions<Member | null, Error>,
) => {
  return useSuspenseQuery<Member | null, Error>({
    queryKey: ["memberById", id],
    queryFn: async () => MemberController.getInstance().getMemberById(id) || null,
    ...queryOptions,
  });
};

/**
 * 회원 업데이트
 */
export const useUpdateMemberById = (
  id: string,
  member: Member,
  queryOptions?: UseSuspenseQueryOptions<Member, Error>,
) => {
  return useMutation<Member, Error>({
    mutationKey: ["updateMemberById", id],
    mutationFn: async () => MemberController.getInstance().updateMember(member),
    ...queryOptions,
  });
};

/**
 * 회원 삭제
 */
export const useDeleteMemberById = (
  id: string,
  queryOptions?: UseSuspenseQueryOptions<void, Error>,
) => {
  return useMutation<void, Error>({
    mutationKey: ["deleteMemberById", id],
    mutationFn: async () => MemberController.getInstance().deleteMemberById(id),
    ...queryOptions,
  });
};
