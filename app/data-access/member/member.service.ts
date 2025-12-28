import { StorageService } from "../storage/storage.service";
import { CreateMemberDto, UpdateMemberDto } from "./member.dto";
import { DEFAULT_MEMBERS, Member } from "./member.entity";

/**
 * 회원 데이터의 비즈니스 로직 구현
 */
export class MemberService {
  constructor(private readonly storageService: StorageService) {
    const members = this.getAllMembers();
    if (members.length === 0) {
      DEFAULT_MEMBERS.forEach((member) => {
        this.storageService.createOne("members", member);
      });
    }
  }

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

  updateMember(id: string, member: UpdateMemberDto): Member {
    const updatedMember = new Member();
    Object.assign(updatedMember, member);

    this.storageService.updateOne("members", id, updatedMember);

    return updatedMember;
  }

  deleteMemberById(id: string): void {
    this.storageService.deleteOne("members", id);
  }
}
