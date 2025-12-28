import { StorageService } from "../storage/storage.service";
import { CreateMemberDto } from "./member.dto";
import { Member } from "./member.entity";

/**
 * 회원 데이터의 비즈니스 로직 구현
 */
export class MemberService {
  constructor(private readonly storageService: StorageService) {}

  createMember(member: CreateMemberDto): Member {
    const newMember = new Member();
    Object.assign(newMember, member);

    this.storageService.createOne("members", newMember);

    return newMember;
  }

  getAllMembers(): Member[] {
    return this.storageService.findAll("members");
  }

  getMemberById(id: string): Member | null {
    return this.storageService.findOne("members", id);
  }

  updateMember(member: Member): Member {
    this.storageService.updateOne("members", member.id, member);

    return member;
  }

  deleteMemberById(id: string): void {
    this.storageService.deleteOne("members", id);
  }
}
