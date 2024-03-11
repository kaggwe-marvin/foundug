import Footer from "@/app/ui/landing/footer";
import Header from "@/app/ui/Appdashboard/header";
import Link from "next/link";
import { supabase } from "@/app/lib/client";
export default async function page() {
  const { data: Lostitem, error } = await supabase
    .from("founditems")
    .select("*, categories(*)");
  if (error) {
    console.error("Error fetching data:", error.message);
  } else {
    console.log("Fetched data from Supabase:", Lostitem);
  }

  const items = Lostitem || [];
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col p-6">
        <h1 className="text-3xl font-bold mb-6">Lost Documents</h1>

        {/* Search and Filters */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search..."
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        {/* Filters */}
        <div className="flex space-x-4 mb-4">
          <button className="border rounded-md p-2">Category</button>
          <button className="border rounded-md p-2">Date</button>
          {/* Add more filters as needed */}
        </div>

        {/* Results */}
        <section className="my-8 flex flex-col md:flex-row">
          <div className="md:w-full mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Found Document Items (Repeat this block for each item) */}
              {items.map((item) => (
                <div
                  key={item.id}
                  className="card-body border border-neutral p-4 rounded-md">
                  {/* Document Image or Icon */}

                  {/* Document Details */}
                  <h3 className="card-title">{item.name}</h3>
                  <p>Date Lost: {item.datefound}</p>
                  <p className="text-gray-600">
                    Category: {item.categories?.name}
                  </p>

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
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
