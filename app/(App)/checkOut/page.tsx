"use client";
import Header from "@/app/ui/Appdashboard/header";
import Footer from "@/app/ui/landing/footer";
import React from "react";
import { AddForm } from "./chargeForm";

const Page = () => {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col p-6">
        <div className="card card-bordered card-normal bg-base-100 ">
          <div className="card-body">
            <div className="card-title">
              <h1 className="sr-only">Found items page</h1>
              <h1>Found Form</h1>
            </div>

            <div className="form-control">
              <AddForm />{" "}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Page;
