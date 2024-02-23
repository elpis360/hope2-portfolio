import { Layout } from "@/components/layout";
import { Logo } from "@/components/logo";
import Link from "next/link";

import React from "react";

export default function ErrorPage() {
  return (
    <Layout title="Error">
      <div className="items-center justify-center flex h-screen">
        <div>
          <div className="flex justify-center">
            <Logo />
          </div>
          <h1 className="text-center text-2xl">404: Page Not Found</h1>
          <div className="mt-5 flex justify-center">
            <Link href="/">
              <button className="mx-auto bg-primary px-4 py-2 text-[#020202] text-base rounded-[10px] font-medium">
                Go Home
              </button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
