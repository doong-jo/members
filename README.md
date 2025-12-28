# Members

## 목적

- 회원 목록 관리 시스템 구현

## 기능

- 회원 추가
- 회원 수정
- 회원 삭제
- 회원 필터링

## 저장소 변경

- 기본적으로 in-memory 저장소를 사용하지만, 환경 변수를 통해 local-storage 저장소로 변경 가능
- 환경 변수 설정 방법
  - `.env.*`, `.env` 파일에 `NEXT_PUBLIC_STORAGE=local-storage` 또는 `in-memory` 설정
