/**
 * 로컬 스토리지 저장소 구현
 */
export class LocalStorageService {
  constructor() {}

  getItem(key: string): string | null {
    const item = localStorage.getItem(key);
    try {
      return item ? JSON.parse(item) : null;
    } catch (error) {
      console.error("로컬 스토리지에서 아이템을 가져오는데 실패했습니다.", error);
      return null;
    }
  }

  setItem(key: string, value: unknown): void {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error("로컬 스토리지에 아이템을 설정하는데 실패했습니다.", error);
    }
  }

  removeItem(key: string): void {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error("로컬 스토리지에서 아이템을 제거하는데 실패했습니다.", error);
    }
  }
}
