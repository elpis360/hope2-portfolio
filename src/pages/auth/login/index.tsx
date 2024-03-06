import { Logo } from "@/components/logo";
import Head from "next/head";
import Image from "next/image";
import React, { useState } from "react";
import { setCookie } from "cookies-next";
import { COOKIES } from "@/utils/constants";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { Alert, CircularProgress } from "@mui/material";
import { Eye, EyeSlash } from "iconsax-react";
import crypto from "crypto";
export default function LoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [inputType, setInputType] = useState<boolean>(false);
  const router = useRouter();

  const searchParams = useSearchParams();
  const next = searchParams.get("next");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    if (!password) {
      setError("Enter password");
      return;
    }

    if (password === "hopejonah360") {
      const token = crypto.randomBytes(10).toString("hex");
      setSuccess(true);
      setCookie(COOKIES.auth, token, COOKIES.options);

      if (next) {
        if (next === "/works/pretty-little-thing") {
          router.push("/works/pretty-little-thing");
        } else if (next == "/works/payaza") {
          router.push("/works/payaza");
        } else router.push("/works/payaza-merchant-verification");
      } else router.push("/");
    } else {
      setError("incorrect details");
    }
    // try {
    //   setError("");
    //   setIsLoading(true);
    //   const res = await fetch("/api/auth/login", {
    //     method: "POST",
    //     body: JSON.stringify({ password }),
    //     headers: {
    //       "Content-type": "application/json",
    //     },
    //   });

    //   const response = await res.json();

    //   setPassword("");
    //   if (response.error) {
    //     setError(response.error);
    //   }
    //   if (res.ok) {
    //     setSuccess(true);
    //     setCookie(COOKIES.auth, response?.token, COOKIES.options);

    //     if (next) {
    //       if (next === "/works/pretty-little-thing") {
    //         router.push("/works/pretty-little-thing");
    //       } else if (next == "/works/payaza") {
    //         router.push("/works/payaza");
    //       } else router.push("/works/payaza-merchant-verification");
    //     } else router.push("/");
    //   }
    // } catch (e) {
    //   console.log(e);
    // } finally {
    //   setIsLoading(false);
    // }
  };

  return (
    <>
      <Head>
        <title>{"Login Hope Jonah"}</title>
        <meta
          name="description"
          content="Hope Jonah: UI/UX Designer Portfolio"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </Head>
      {success && <Alert severity="success">Successful</Alert>}
      <div className="item-center flex justify-center items-center relative h-screen w-full">
        <div className="absolute inset-0 flex items-center justify-center z-0">
          <Image
            src={`/assets/images/blur.png`}
            width={500}
            height={500}
            alt="blurry background"
            className="object-cover w-full h-full blur-sm"
          />
        </div>

        <div className="bg-black rounded-[10px]  lg:p-10   p-5 z-10 text-pri_text max-w-[90%] ">
          <div className="flex justify-center mb-4">
            <Logo />
          </div>
          <p className="h1-text text-center text-white">Password required</p>

          <p className="p-text text-center my-2 font-light lg:w-[70%] mx-auto">
            This link is password protected. Please enter the password to view
            it.
          </p>
          <form className="mt-4" onSubmit={handleSubmit}>
            <div className="flex flex-col">
              <label className="uppercase text-p">Password</label>
              <div className="relative w-full">
                <input
                  type={inputType ? "text" : "password"}
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  className="bg-inherit border-border border rounded-md p-4 mt-2 w-full"
                />
                <div
                  className="absolute right-5 top-1/2 -translate-y-1/2"
                  onClick={() => setInputType(!inputType)}
                >
                  {inputType ? <Eye /> : <EyeSlash />}
                </div>
              </div>
              <button
                type="submit"
                className="bg-primary mt-5 text-p flex items-center gap-4 justify-center px-4 py-4 text-[#020202] p-text text-center rounded-[10px] font-medium"
              >
                Log in
                {isLoading && <CircularProgress size={20} color="primary" />}
              </button>
              {error && <p className="p-text text-red-500">{error}</p>}
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
