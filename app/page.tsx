import Link from "next/link";
import {
  NewspaperIcon,
  MagnifyingGlassIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/outline";
import Header2 from "./ui/landing/header2";
import Footer from "./ui/landing/footer";
import { supabase } from "./lib/client";

export default async function page() {
  const { data: Lostitem, error } = await supabase
    .from("founditems")
    .select("*");
  if (error) {
    console.error("Error fetching data:", error.message);
  } else {
    console.log("Fetched data from Supabase:", Lostitem);
  }

  const items = Lostitem || [];
  return (
    <>
      <Header2 />
      <main className="flex min-h-screen flex-col p-6" data-theme="cupcake">
        <section className="my-8">
          <h1 className="text-4xl font-extrabold mb-4">
            Find and Reclaim Your Lost Documents Effortlessly!
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            A dedicated platform to report found documents and reunite lost
            documents with their owners.
          </p>
          <div className="flex justify-between items-center">
            <Link href="/found" className="btn btn-outline btn-primary">
              Report Found Document
            </Link>
            <Link href="/lost" className="btn btn-outline btn-primary">
              Report Lost Document
            </Link>
          </div>
        </section>
        <section className="my-8 flex flex-col md:flex-row overflow-y-auto ">
          <div className="md:w-1/3 md:pr-4 flex flex-col items-center border border-neutral p-4 rounded-md">
            {/* Left Column (On medium and large screens) */}
            <NewspaperIcon className="w-12 h-12 text-primary mb-2 " />
            <h2 className="text-2xl font-bold mb-4">
              Register lost or found object!
            </h2>
            <p className="text-gray-700 mb-4">
              Free, simple, and fast registration. Select a category, add a
              picture, and a short description.
            </p>
          </div>

          <div className="md:w-1/3 md:pr-4 mt-4 md:mt-0 flex flex-col items-center border border-neutral p-4 rounded-md">
            {/* Middle Column (On medium and large screens) */}
            <MagnifyingGlassIcon className="w-12 h-12 text-primary mb-2" />
            <h2 className="text-2xl font-bold mb-4">
              Select auto-matched items!
            </h2>
            <p className="text-gray-700 mb-4">
              Our smart search agent will do the magic and show the most
              relevant matches to your lost or found request.
            </p>
          </div>

          <div className="md:w-1/3 mt-4 md:mt-0 flex flex-col items-center border border-neutral p-4 rounded-md">
            {/* Right Column (On medium and large screens) */}
            <ChatBubbleLeftRightIcon className="w-12 h-12 text-primary mb-2" />
            <h2 className="text-2xl font-bold mb-4">Send or get a message!</h2>
            <p className="text-gray-700">
              No matches? Don{"'"}t worry. Thanks to our community and smart
              technology, you will be notified if any new matches are found.
            </p>
          </div>
        </section>
        <section className="my-8 flex flex-col md:flex-row">
          {/* Your previous section here... */}

          {/* New Section for Found Documents Showcase */}
          <div className="md:w-full mt-8">
            <h2 className="text-2xl font-bold mb-4">
              Found Documents Showcase
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Found Document Items (Repeat this block for each item) */}
              {items.map((item) => (
                <div
                  key={item.id}
                  className="card-body border border-neutral p-4 rounded-md">
                  {/* Document Image or Icon */}

                  {/* Document Details */}
                  <h3 className="card-title">{item.name}</h3>
                  <p>{item.description}</p>

                  {/* Additional Details or Actions */}
                  <div className="card-actions justify-end">
                    <Link
                      href={`/item/${item?.id}`}
                      className="btn btn-outline btn-primary"
                      aria-label="View Details">
                      View Details
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA to View All Categories */}
            <div className="text-center mt-4">
              <Link href="/lost" className="text-primary hover:underline">
                View All Categories
              </Link>
            </div>
          </div>
        </section>
        {/* Add other sections here using similar structures */}
      </main>
      <Footer />
    </>
  );
}
