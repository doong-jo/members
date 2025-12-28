"use client";

import { useState } from "react";
import { MoreOutlined } from "@ant-design/icons";
import { Checkbox } from "antd";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../shared/table/table";
import { renderMemberValue } from "./member-table.helper";
import { CreateMemberModal } from "./modals/create-member-modal";
import { EditMemberModal } from "./modals/edit-member-modal";
import { useSuspenseMemberTable } from "./use-member-table";

interface MemberTableProps {
  isCreateMemberModalOpen: boolean;
  onCreateMemberModalOpen: (open: boolean) => void;
}

/**
 * 회원 테이블 컴포넌트
 */
export function MemberTable({
  isCreateMemberModalOpen,
  onCreateMemberModalOpen,
}: MemberTableProps) {
  const [isEditMemberModalOpen, setIsEditMemberModalOpen] = useState<boolean>(false);

  const { fields, membersByField } = useSuspenseMemberTable();

  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            {/* map */}
            <TableHead className="w-0 [&>div]:px-2" hiddenFilter>
              <Checkbox />
            </TableHead>
            {fields.map((field) => (
              <TableHead key={field.id}>{field.label}</TableHead>
            ))}
            {/* 셀의 작업과 칸 맞추기 위해 추가 */}
            <TableHead className="w-0" hiddenFilter />
          </TableRow>
        </TableHeader>
        <TableBody>
          {membersByField.map((memberByField) => (
            <>
              <TableRow>
                <TableCell>
                  <Checkbox />
                </TableCell>
                {fields.map((field) => (
                  <TableCell key={field.id} renderer={renderMemberValue}>
                    {memberByField[field.key]}
                  </TableCell>
                ))}
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
            </>
          ))}
        </TableBody>
      </Table>
      <CreateMemberModal
        open={isCreateMemberModalOpen}
        onOpenChange={(open) => onCreateMemberModalOpen(open)}
      />
      <EditMemberModal
        open={isEditMemberModalOpen}
        onOpenChange={(open) => setIsEditMemberModalOpen(open)}
      />
    </>
  );
}
