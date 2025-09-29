import React from "react";
import Link from "next/link";
import SideMenu from "@/components/sideMenu";

export default function contacts() {
  return (
    <div className="flex">
      <SideMenu route="/contacts/birthdays" />
      <main className="flex-1 text-white p-8">
        <h2 className="text-3xl font-bold mb-4">Welcome to your Contacts</h2>
        <div className="w-100% p-5 rounded-xl bg-[#1f1f1f]">
          <p className="mb-4">
            This area shows details of the person you select.
          </p>
          <p className="mb-4">
            Use the sidebar on the left to{" "}
            <strong>browse your list and click any name</strong> to open their
            profile. You will see their avatar, name, phone, email, address,
            notes, and favorite status.
          </p>
          <p className="mb-4">
            <strong>Use the search box</strong> at the top of the sidebar to
            filter the list quickly. If you cannot find someone, create a new
            contact from the top bar. Until you pick a person, this panel stays
            empty.
          </p>
        </div>
      </main>
    </div>
  );
}
