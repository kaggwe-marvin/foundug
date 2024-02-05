import { supabase } from "@/app/lib/client";
import Header from "@/app/ui/Appdashboard/header";
import Footer from "@/app/ui/landing/footer";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function Post({
  params: { id },
}: {
  params: { id: string };
}) {
  const { data: item } = await supabase
    .from("founditems")
    .select()
    .match({ id })
    .single();

  if (!item) {
    notFound();
  }

  return (
    <>
      <Header />
      {item ? (
        <>
          <div className="card w-96 bg-neutral text-neutral-content m-4">
            <div className="card-body items-center text-center bg-base-400">
              <h1 className="card-title">Found {item.category} Card</h1>
              <p>First Name: {item.name}</p>
              <p>Last Name: {item.locationfound}</p>
              <div className="card-actions justify-end">
                <Link href="/checkOut" className=" btn btn-primary">
                  Claim
                </Link>
              </div>
            </div>
          </div>
          <h2 className="text-xl font-semibold">Claim This Item</h2>
          <p className="text-gray-600 mt-2">
            To claim this reported item, please follow these steps:
          </p>
          <ol className="list-decimal list-inside text-gray-700 mt-2 ml-4">
            <li>Visit our offices in person.</li>
            <li>Show the items details and your identification.</li>
            <li>Click the Claim button above to initiate the process.</li>
          </ol>
          <div className="mt-2 ml-6">
            <p className="text-gray-600">National ID: 10,000 UGX</p>
            <p className="text-gray-600">School Document: 5,000 UGX</p>
          </div>
          <p className="text-gray-700 mt-2">
            Note: For claiming a national ID, please carry a police letter.
          </p>
        </>
      ) : (
        // Handle the case when 'item' is not available
        <p>No item found.</p>
      )}
      <Footer />
    </>
  );
}
