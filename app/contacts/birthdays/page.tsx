// import { CONTACTS_MOCK } from "@/mock/contacts";
import React from "react";
import Link from "next/link";
import SideMenu from "@/components/sideMenu";

export default async function birthdays({ searchParams }) {
  const favorite = (await searchParams).favorite === "true";
  // Fetch contacts from the mock API
  const queryString = favorite ? "?favorite=true" : "";
  const data = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/contacts${queryString}`);
  const contacts = await data.json();
  return (
    <>
      <div className="flex">
        <SideMenu route="/contacts" />
        <main className="flex-1 max-w-full">
          <h2 className="text-3xl font-bold px-8 pt-8 mb-4">Birthdays</h2>
          <Link href={favorite ? "/contacts/birthdays" : "/contacts/birthdays?favorite=true"}>
          <button className="mb-4 ml-8 cursor-pointer px-4 py-2 bg-blue-600 text-white rounded-lg">
            {favorite ? "Show All" : "Show Favorites"}
          </button>
          </Link>
          <ul className="grid grid-cols-3 gap-4 px-8">
            {/* {CONTACTS_MOCK.filter((contact) => */}
            {contacts.filter((contact) =>
              favorite ? contact.favorite === favorite : true
            ).map((contact) => (
              <li key={contact.id}>
                <Link
                  className="flex flex-col items-center gap-2 rounded-xl bg-[#1f1f1f] py-4"
                  href={`/contacts/${contact.id}`}
                >
                  <img
                    src={contact.avatarUrl}
                    alt={`${contact.firstName} ${contact.lastName}`}
                    className="w-12 h-12 rounded-4xl"
                  />
                  <h3 className="text-xl font-bold">
                    {contact.firstName} {contact.lastName}
                  </h3>
                  <p>{contact.dateOfBirth}</p>
                </Link>
              </li>
            ))}
          </ul>
        </main>
      </div>
    </>
  );
}
