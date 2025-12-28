"use client";

import { useMemo, useState } from "react";
import { MoreOutlined } from "@ant-design/icons";
import { Checkbox } from "antd";

import { Popover, PopoverContent, PopoverTrigger } from "../shared/popover";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../shared/table/table";
import { Filter } from "./filter/filter";
import { filterMembers, getUniqueValuesByField } from "./filter/filter.helper";
import { renderMemberValue } from "./member-table.helper";
import { CreateMemberModal } from "./modals/create-member-modal";
import { EditMemberModal } from "./modals/edit-member-modal";
import { RecordEdit } from "./record-edit";
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

  // 필터 상태
  const [filters, setFilters] = useState<Record<string, Set<string>>>({});

  // 필드별 중복 제거한 값
  const uniqueValuesByField = useMemo(
    () => getUniqueValuesByField(fields, membersByField),
    [fields, membersByField],
  );

  // 필터링
  const filteredMembers = useMemo(
    () => filterMembers(membersByField, filters),
    [filters, membersByField],
  );

  const handleFilterChange = (key: string, selectedKeys: Set<string>) => {
    setFilters((prev) => ({ ...prev, [key]: selectedKeys }));
  };

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
              <Popover key={field.id}>
                <PopoverTrigger asChild>
                  <TableHead>{field.label}</TableHead>
                </PopoverTrigger>
                <PopoverContent>
                  <Filter
                    uniqueValues={uniqueValuesByField[field.key]}
                    selectedKeys={filters[field.key] ?? new Set()}
                    onChange={(selectedKeys) => {
                      handleFilterChange(field.key, selectedKeys);
                    }}
                  />
                </PopoverContent>
              </Popover>
            ))}
            {/* 셀의 작업과 칸 맞추기 위해 추가 */}
            <TableHead className="w-0" hiddenFilter />
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredMembers.map((memberByField) => (
            <TableRow key={memberByField["id"] as string}>
              <TableCell>
                <Checkbox />
              </TableCell>
              {fields.map((field) => (
                <TableCell key={field.id} renderer={renderMemberValue}>
                  {memberByField[field.key]}
                </TableCell>
              ))}
              <TableCell className="p-2">
                <Popover>
                  <PopoverTrigger>
                    <MoreOutlined
                      className="h-4 w-4"
                      style={{
                        color: "#000000A6",
                      }}
                    ></MoreOutlined>
                  </PopoverTrigger>
                  <PopoverContent>
                    <RecordEdit
                      onEditClick={() => {
                        setIsEditMemberModalOpen(true);
                      }}
                      onDeleteClick={() => {
                        // TODO: 삭제 진행 로직 추가
                      }}
                    />
                  </PopoverContent>
                </Popover>
              </TableCell>
            </TableRow>
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
