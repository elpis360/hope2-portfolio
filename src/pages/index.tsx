import { Inter } from "next/font/google";
import React from "react";
import { Box, Paper, styled } from "@mui/material";
import { Layout } from "@/components/layout";
import { HomeCardData, TrustedByData } from "@/utils/data";
import { Header } from "@/components/Texts";
import { Paragraph } from "@/components/Texts";
import HomeCard from "@/components/card/HomeCard";
import Link from "next/link";
import Image from "next/image";
import { useDisclosure } from "@mantine/hooks";
import { Drawer, Button } from "@mantine/core";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const Item = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(2),
  }));

  return (
    <Layout title="Home">
      <div className="screen-center">
        <h1 className="h1-text text-white">
          Hello.<br></br> My name is Hope. <br></br>I&rsquo;m a UX designer
          based in Lagos,<br></br> Nigeria.
        </h1>
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="grid gap-5 md:grid-cols-2">
            {HomeCardData.map((card) => (
              <HomeCard
                key={card.header}
                header={card.header}
                span={card.span}
                sub_heading={card.sub_heading}
              />
            ))}
          </div>
          <div className="card">
            <Header>About Me</Header>
            <p className="text-[#DFDFDF]">
              I&rsquo;m a seasoned user experience designer, passionate about
              creating seamless and user-centric digital experiences. With a
              proven track record in designing intuitive interfaces and
              enhancing user engagement, I bring a blend of creativity and
              strategic thinking to every project.
            </p>
            <Link href="/contact">
              <p className="text-primary">get in touch</p>
            </Link>
          </div>
          <div className="card">
            <Header>Featured Projects</Header>
            <Link href="/contact">
              <p className="text-primary ">view all</p>
            </Link>
            <Image
              src="/assets/images/pretty_little_thing.png"
              width={500}
              height={500}
              alt="Pretty Little Thing"
              className="mx-auto w-full"
            />
          </div>
          <div className="flex flex-col gap-3 card">
            <Header>Trusted by</Header>
            <div className="grid gap-5 grid-cols-2 flex-1 mt-10">
              {TrustedByData.map((item) => (
                <Box
                  key={item.alt}
                  sx={{
                    backgroundColor: "#FFFFFF",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "10px",
                    minHeight: "100px",
                  }}
                >
                  <div>
                    <Image
                      src={`/assets/images/${item.url}`}
                      width={100}
                      height={100}
                      alt={item.alt}
                      className="mx-auto w-[50px] object-contain"
                    />
                  </div>
                </Box>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
