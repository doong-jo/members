/**
 * 애플리케이션 환경변수 관리
 */
export class ConfigService {
  private readonly config: Record<string, string> = {};

  constructor() {
    this.config["STORAGE"] = process.env.NEXT_PUBLIC_STORAGE ?? "";

    if (this.config["STORAGE"]) {
      throw new Error("NEXT_PUBLIC_STORAGE 환경변수가 설정되지 않았습니다.");
    }
  }

  get(key: string): string {
    return this.config[key];
  }
}
