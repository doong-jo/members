import {
  useMutation,
  UseMutationOptions,
  useSuspenseQuery,
  UseSuspenseQueryOptions,
} from "@tanstack/react-query";

import { MemberController } from "./member.controller";
import { CreateMemberDto, UpdateMemberDto } from "./member.dto";
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
 * 회원 생성
 */
export const useCreateMember = (
  queryOptions?: UseMutationOptions<Member, Error, CreateMemberDto>,
) => {
  return useMutation<Member, Error, CreateMemberDto>({
    mutationKey: ["createMember"],
    mutationFn: async (member: CreateMemberDto) =>
      MemberController.getInstance().createMember(member),
    ...queryOptions,
  });
};

/**
 * 회원 업데이트
 */
export const useUpdateMember = (
  queryOptions?: UseMutationOptions<Member, Error, UpdateMemberDto>,
) => {
  return useMutation<Member, Error, UpdateMemberDto>({
    mutationKey: ["updateMember"],
    mutationFn: async (member: UpdateMemberDto) =>
      MemberController.getInstance().updateMember(member),
    ...queryOptions,
  });
};

/**
 * 회원 삭제
 */
export const useDeleteMemberById = (queryOptions?: UseMutationOptions<void, Error, string>) => {
  return useMutation<void, Error, string>({
    mutationKey: ["deleteMemberById"],
    mutationFn: async (id: string) => MemberController.getInstance().deleteMemberById(id),
    ...queryOptions,
  });
};
