"use client";

import { useState } from "react";
import { MoreOutlined } from "@ant-design/icons";
import { Checkbox } from "antd";

import { Row } from "../shared/table/entities/row.entity";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../shared/table/table";
import { CreateMemberModal } from "./modals/create-member-modal";
import { EditMemberModal } from "./modals/edit-member-modal";

interface MemberTableProps {
  rows: Row[];
  isCreateMemberModalOpen: boolean;
  onCreateMemberModalOpen: (open: boolean) => void;
}

/**
 * 회원 테이블 컴포넌트
 */
export function MemberTable({
  rows = [],
  isCreateMemberModalOpen,
  onCreateMemberModalOpen,
}: MemberTableProps) {
  const [isEditMemberModalOpen, setIsEditMemberModalOpen] = useState<boolean>(false);

  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            {/* map */}
            <TableHead className="w-0 [&>div]:px-2" hiddenFilter>
              <Checkbox />
            </TableHead>
            <TableHead>이름</TableHead>
            <TableHead>주소</TableHead>
            <TableHead>메모</TableHead>
            <TableHead>가입일</TableHead>
            <TableHead>직업</TableHead>
            <TableHead>이메일 수신 동의</TableHead>
            <TableHead className="w-0" hiddenFilter>
              {/* 작업 */}
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            {/* map */}
            <TableCell>
              <Checkbox />
            </TableCell>
            <TableCell>John Doe</TableCell>
            <TableCell>서울 강남구 </TableCell>
            <TableCell>메모</TableCell>
            <TableCell>2025-01-01</TableCell>
            <TableCell>개발자</TableCell>
            <TableCell>동의</TableCell>
            <TableCell className="p-2">
              <button type="button">
                <MoreOutlined
                  className="h-4 w-4"
                  style={{
                    color: "#000000A6",
                  }}
                ></MoreOutlined>
              </button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <CreateMemberModal
        open={isCreateMemberModalOpen}
        onOpenChange={(open) => onCreateMemberModalOpen(open)}
        row={rows[0]}
      />
      <EditMemberModal
        open={isEditMemberModalOpen}
        onOpenChange={(open) => setIsEditMemberModalOpen(open)}
        row={rows[0]}
      />
    </>
  );
}
