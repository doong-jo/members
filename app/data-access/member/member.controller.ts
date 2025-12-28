import { ConfigService } from "@/app/config/config.service";

import { StorageService } from "../storage/storage.service";
import { CreateMemberDto, UpdateMemberDto } from "./member.dto";
import { Member } from "./member.entity";
import { MemberService } from "./member.service";

/**
 * 회원 컨트롤러
 *
 * CRUD 엔드포인트 구현
 */
export class MemberController {
  private static instance: MemberController;

  static getInstance(): MemberController {
    if (!MemberController.instance) {
      MemberController.instance = new MemberController();
    }
    return MemberController.instance;
  }

  private memberService: MemberService;

  constructor() {
    const configService = new ConfigService();
    const storageService = new StorageService(configService);

    this.memberService = new MemberService(storageService);
  }

  createMember(member: CreateMemberDto): Member {
    return this.memberService.createMember(member);
  }

  getAllMembers(): Member[] {
    return this.memberService.getAllMembers();
  }

  getMemberById(id: string): Member | null {
    return this.memberService.getMemberById(id);
  }

  updateMember(member: UpdateMemberDto): Member {
    const newMember = new Member();
    Object.assign(newMember, member);

    return this.memberService.updateMember(newMember);
  }

  deleteMemberById(id: string): void {
    this.memberService.deleteMemberById(id);
  }
}
