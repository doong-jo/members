import { MoreOutlined } from "@ant-design/icons";
import { Checkbox } from "antd";

import { Row } from "../shared/table/entities/row.entity";
import { Table } from "../shared/table/table";

interface MemberTableProps {
  rows: Row[];
}

/**
 * 회원 테이블 컴포넌트
 */
export function MemberTable({ rows = [] }: MemberTableProps) {
  return (
    <Table>
      <Table.Header>
        <Table.Row>
          {/* map */}
          <Table.Head className="w-0 [&>div]:px-2" hiddenFilter>
            <Checkbox />
          </Table.Head>
          <Table.Head>이름</Table.Head>
          <Table.Head>주소</Table.Head>
          <Table.Head>메모</Table.Head>
          <Table.Head>가입일</Table.Head>
          <Table.Head>직업</Table.Head>
          <Table.Head>이메일 수신 동의</Table.Head>
          <Table.Head className="w-0" hiddenFilter>
            {/* 작업 */}
          </Table.Head>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          {/* map */}
          <Table.Cell>
            <Checkbox />
          </Table.Cell>
          <Table.Cell>John Doe</Table.Cell>
          <Table.Cell>서울 강남구 </Table.Cell>
          <Table.Cell>메모</Table.Cell>
          <Table.Cell>2025-01-01</Table.Cell>
          <Table.Cell>개발자</Table.Cell>
          <Table.Cell>동의</Table.Cell>
          <Table.Cell className="p-2">
            <button type="button">
              <MoreOutlined
                className="h-4 w-4"
                style={{
                  color: "#000000A6",
                }}
              ></MoreOutlined>
            </button>
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
}
