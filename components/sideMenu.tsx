// import { CONTACTS_MOCK } from "@/mock/contacts";
import Link from "next/link";


export default async function SideMenu(props) {
  // Fetch contacts from the mock API
  const data = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/contacts`);
  const contacts = await data.json();
  // console.log(contacts);
  
  return (
    <aside className="w-60 min-h-screen bg-[#181818] text-white">
      <h1 className="px-5 text-2xl font-extrabold mt-8">Links</h1>
      <nav>
        <ul className="flex flex-col gap-4 px-1 text-lg font-semibold mt-4">
          <li>
            <Link
              className=" rounded-full py-2 hover:bg-[#12273e] cursor-pointer px-5 block text-center"
              href={props.route}
            >
              🎂 Birthdays
            </Link>
          </li>
        </ul>
      </nav>

      <h1 className="px-5 text-2xl font-extrabold mt-8">Contacts</h1>
      <nav>
        <ul className="flex flex-col gap-4 px-1 text-lg font-semibold mt-4">
          {/* {CONTACTS_MOCK.map((contact) => ( */}
          {contacts.map((contact) => (
            <li key={contact.id} className="flex items-center px-2 rounded-full py-2 hover:bg-[#12273e] cursor-pointer gap-3">
              <img src={contact.avatarUrl} className="h-9 w-9 rounded-full" />
              <Link
                className=" "
                href={`${props.route}/${contact.id}`}
              >
                {contact.firstName} {contact.lastName}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
