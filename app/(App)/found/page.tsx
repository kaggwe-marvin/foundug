import CustomInput from "@/app/ui/Appdashboard/forms/CustomInput";
import Header from "@/app/ui/Appdashboard/header";
import Footer from "@/app/ui/landing/footer";

export default function Page() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col p-6">
        <section className="mb-6 hidden">
          <h2 className="text-2xl font-bold mb-4">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Step 1 */}
            <div className="flex flex-col items-center">
              <div className="bg-primary p-4 rounded-full text-white mb-2">
                1
              </div>
              <p className="text-center">Lorem ipsum dolor sit amet.</p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center">
              <div className="bg-primary p-4 rounded-full text-white mb-2">
                2
              </div>
              <p className="text-center">Consectetur adipiscing elit.</p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center">
              <div className="bg-primary p-4 rounded-full text-white mb-2">
                3
              </div>
              <p className="text-center">Sed do eiusmod tempor incididunt.</p>
            </div>

            {/* Add more steps as needed */}
          </div>
        </section>
        <form action="" className="card card-bordered card-normal bg-base-100 ">
          <div className="card-body">
            <div className="card-title">
              <h1>Found Form</h1>
            </div>

            <div className="form-control">
              {" "}
              <div className="">
                <CustomInput
                  label="NewLabel"
                  id="newId"
                  name="newName"
                  placeholder="Type something..."
                  inputType="text"
                />
              </div>
              <div className="">
                <CustomInput
                  label="NewLabel"
                  id="newId"
                  name="newName"
                  placeholder="Type something..."
                  inputType="text"
                />
              </div>
              <div className="">
                <CustomInput
                  label="NewLabel"
                  id="newId"
                  name="newName"
                  placeholder="Type something..."
                  inputType="textarea"
                />
              </div>
              <div className="">
                <CustomInput
                  label="NewLabel"
                  id="newId"
                  name="newName"
                  placeholder="Type something..."
                  inputType="text"
                />
              </div>
              <div className="">
                <CustomInput
                  label="NewLabel"
                  id="newId"
                  name="newName"
                  placeholder="Type something..."
                  inputType="text"
                />
              </div>
              <div className="">
                <CustomInput
                  label="NewLabel"
                  id="newId"
                  name="newName"
                  placeholder="Type something..."
                  inputType="textarea"
                />
              </div>
            </div>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Add item</button>
            </div>
          </div>
        </form>
        {/* Testimonials Section */}
        <section className=" mt-6 hidden">
          <h2 className="text-2xl font-bold mb-4">What Users Are Saying</h2>
          <div className="carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box">
            {/* Testimonial 1 */}
            <div className="carousel-item">
              <p className="mb-2">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua."
              </p>
              <p className="font-bold">- John Doe</p>
            </div>

            {/* Testimonial 2 */}
            <div className="carousel-item">
              <p className="mb-2">
                "Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat."
              </p>
              <p className="font-bold">- Jane Doe</p>
            </div>

            {/* Add more testimonials as needed */}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
