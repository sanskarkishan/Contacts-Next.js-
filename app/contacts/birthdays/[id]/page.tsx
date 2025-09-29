import SideMenu from "@/components/sideMenu";
// import { CONTACTS_MOCK } from "@/mock/contacts";

export default async function ContactPage({ params }: { params: { id: string } }) {
  const { id } = params;
  // Fetch contacts from the mock API
  const data = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/contacts/${id}`);
  const contact = await data.json();

  // const contact = CONTACTS_MOCK.find((c) => c.id === params.id);
  // const contact = contacts.find((c) => c.id === id);

  return (
    <>
      <div className="flex">
        <SideMenu route="/contacts" />
        <main className="flex-1 w-full bg-black text-white px-6 py-8">
          {contact && (
            <section className="max-w-3xl mx-auto  shadow-lg rounded-xl p-6">
              <div className="flex items-center gap-6">
                <img
                  src={contact.avatarUrl}
                  alt={`${contact.firstName} ${contact.lastName}`}
                  className="w-20 h-20 rounded-full object-cover border-2 border-gray-700"
                />
                <div>
                  <h2 className="text-2xl font-bold text-white">
                    {contact.firstName} {contact.lastName}
                  </h2>
                  <p className="text-sm text-gray-400">
                    Contact ID: {params?.id}
                  </p>
                </div>
              </div>

              <div className="mt-6 space-y-4 text-gray-300">
                <div className="flex items-center gap-2">
                  <span className="font-semibold w-24">📧 Email:</span>
                  <span>{contact.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold w-24">📞 Phone:</span>
                  <span>{contact.phone}</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-semibold w-24">🏠 Address:</span>
                  <span>{contact.address}</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-semibold w-24">📝 Note:</span>
                  <span>{contact.notes}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold w-24">🎂 DOB:</span>
                  <span>{contact.dateOfBirth}</span>
                </div>
              </div>
            </section>
          )}
        </main>
      </div>
    </>
  );
}
