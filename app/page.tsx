import { PlusOutlined } from "@ant-design/icons";
import { Button } from "antd";

import { MemberTable } from "./components/member-table/member-table";

export default function Home() {
  return (
    <div>
      <header className="flex items-center justify-between border-b border-[#0000000F] px-2 py-4">
        <h1 className="text-[16px] font-semibold">회원 목록</h1>
        <Button type="primary" icon={<PlusOutlined />}>
          추가
        </Button>
      </header>
      <main>
        <MemberTable rows={[]} />
      </main>
    </div>
  );
}
