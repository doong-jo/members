"use client";

import { useState } from "react";

import { ClientOnly } from "./client-only";
import { Header } from "./components/header";
import { MemberTable } from "./components/member-table/member-table";

export default function Home() {
  const [isCreateMemberModalOpen, setIsCreateMemberModalOpen] = useState(false);

  return (
    <div>
      <Header onAddMember={() => setIsCreateMemberModalOpen(true)} />
      <ClientOnly>
        <main>
          <MemberTable
            isCreateMemberModalOpen={isCreateMemberModalOpen}
            onCreateMemberModalOpen={setIsCreateMemberModalOpen}
          />
        </main>
      </ClientOnly>
    </div>
  );
}
