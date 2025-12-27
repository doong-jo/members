import { CreateMemberDto, DeleteMemberDto } from "./member.dto";
import { Member } from "./member.entity";

/**
 * 회원 데이터의 비즈니스 로직 구현
 */
export class MemberService {
  constructor() {}

  createMember(member: CreateMemberDto): Member {
    const newMember = new Member();
    Object.assign(newMember, member);

    // storage에 저장
    // StorageService.setItem(newMember.id, newMember);

    return newMember;
  }

  updateMember(member: Member): Member {
    // storage에 저장
    // StorageService.setItem(member.id, member);
    const updatedMember = new Member();
    Object.assign(updatedMember, member);

    return updatedMember;
  }

  getListMembers(): Member[] {
    // storage에서 목록 조회

    return [];
  }

  deleteMember(member: DeleteMemberDto): void {
    // storage에서 삭제
    // StorageService.removeItem(member.id);
  }
}
