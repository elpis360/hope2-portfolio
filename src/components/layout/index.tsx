import * as React from "react";
import Head from "next/head";
import { Navbar } from "./navbar";

export function Layout({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  return (
    <div className="">
      <Head>
        <title>{title ? title + " - Hope Jonah" : "Hope Jonah"}</title>
        <meta
          name="description"
          content="Hope Jonah: UI/UX Designer Portfolio"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </Head>
      <div className="lg:flex min-h-screen ">
        <div className="lg:w-[15%] bg-black ">
          <Navbar />
        </div>
        <main className="flex-1 min-h-screen flex flex-col">
          <div className="flex-1">
            <div>{children}</div>
          </div>
          <footer>
            <p className="text-center text-[#DFDFDF] text-xs mt-10 mb-2">
              © Hope Jonah, {new Date().getFullYear()}. All rights reserved.
            </p>
          </footer>
        </main>
      </div>
    </div>
  );
}
