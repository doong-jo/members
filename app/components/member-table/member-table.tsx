import { Row } from "../shared/table/row.entity";
import { Table } from "../shared/table/table";

interface MemberTableProps {
  rows: Row[];
}

/**
 * 회원 테이블 컴포넌트
 */
export function MemberTable({ rows = [] }: MemberTableProps) {
  return (
    <div>
      Member Table
      <Table />
    </div>
  );
}
