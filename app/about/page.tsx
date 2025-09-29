import React from "react";

export default function About() {
  return (
    <main className="flex flex-col gap-8 p-6">
      <section>
        <h2 className="text-3xl font-bold mb-4">About app</h2>
        <div className="w-100% p-5 rounded-xl bg-[#1f1f1f]">
          <p className="mb-3">
            A contacts app stores structured information about people and
            organizations. Typical fields include name, avatar, phone, email,
            address, birthday, notes, and flags like “favorite”.
          </p>
          <p className="mb-3">
            Core actions are create, read, update, delete. Users can open a
            contact, edit fields, or remove it with a confirmation step. Bulk
            actions and undo are optional.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-4">How it works</h2>
        <ul className="grid grid-cols-4 gap-3">
          <li className="w-100% p-5 rounded-xl bg-[#1f1f1f]">
            <h3 className="mb-4">Sidebar</h3>
            Open Contacts to browse the full list in the sidebar
          </li>

          <li className="w-100% p-5 rounded-lg bg-[#1f1f1f] ">
            <h3 className="mb-4">See details</h3>
            Click any contact to see details
          </li>

          <li className="w-100% p-5 rounded-xl bg-[#1f1f1f]">
            <h3 className="mb-4">Create new</h3>
            Use the plus button to create a new contact
          </li>

          <li className="w-100% p-5 rounded-xl bg-[#1f1f1f]">
            <h3 className="mb-4">Edit or Delete</h3>
            Use Edit to update fields, or Delete to remove a contact
          </li>
        </ul>
      </section>
    </main>
  );
}
