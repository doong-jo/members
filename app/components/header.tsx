import { PlusOutlined } from "@ant-design/icons";
import { Button } from "antd";

export function Header({ onAddMember }: { onAddMember: () => void }) {
  return (
    <header className="flex items-center justify-between border-b border-[#0000000F] px-2 py-4">
      <h1 className="text-[16px] font-semibold">회원 목록</h1>
      <Button type="primary" icon={<PlusOutlined />} onClick={onAddMember}>
        추가
      </Button>
    </header>
  );
}
