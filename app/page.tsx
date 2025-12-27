import { PlusOutlined } from "@ant-design/icons";
import { Button } from "antd";

export default function Home() {
  return (
    <div>
      <header className="flex justify-between items-center px-2 py-4 border-b border-[#0000000F]">
        <h1 className="font-semibold text-[16px]">회원 목록</h1>
        <Button type="primary" icon={<PlusOutlined />}>
          추가
        </Button>
      </header>
    </div>
  );
}
