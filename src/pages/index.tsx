import { Inter } from "next/font/google";
import React from "react";
import { Box, Paper, styled } from "@mui/material";
import { Layout } from "@/components/layout";
import { HomeCardData, TrustedByData } from "@/utils/data";
import { Header } from "@/components/Texts";
import HomeCard from "@/components/card/HomeCard";
import Link from "next/link";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const Item = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(2),
  }));
  const carousel_images = [
    { image_url: "/assets/images/payaza/hero.svg", link: "/works/payaza" },
    {
      image_url: "/assets/images/pretty_little_thing/hero.svg",
      link: "/works/pretty-little-thing",
    },
    {
      image_url: "/assets/images/payaza_merchant_verification/hero.svg",
      link: "/works/payaza-merchant-verification",
    },
    { image_url: "/assets/images/payruze.svg", link: "" },
  ];
  return (
    <Layout title="Home">
      <div className="screen-center relative  my-5 lg:my-10">
        <div className="absolute inset-0 flex items-center justify-center z-0">
          <Image
            src={`/assets/images/blur.png`}
            width={500}
            height={500}
            alt="blurry background"
            className="object-cover w-full h-full blur-sm"
          />
        </div>
        <div className="z-10 relative">
          <h1 className="h1-text font-medium text-white mb-4 lg:mb-10">
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
              <p className="h1-text capitalize font-medium">About Me</p>
              <p className="text-[#DFDFDF] my-4 p-text">
                I&rsquo;m a seasoned user experience designer, passionate about
                creating seamless and user-centric digital experiences. With a
                proven track record in designing intuitive interfaces and
                enhancing user engagement, I bring a blend of creativity and
                strategic thinking to every project.
              </p>
              <Link href="/contact">
                <p className="text-primary capitalize p-text">get in touch</p>
              </Link>
            </div>
            <div className="card grid gap-4">
              <p className="h1-text capitalize font-medium text-center">
                Featured Projects
              </p>
              <Link href="/projects">
                <p className="text-primary text-p text-center capitalize">
                  view all
                </p>
              </Link>
              <Carousel
                autoPlay
                infiniteLoop
                showThumbs={false}
                className="h-full"
              >
                {carousel_images.map((image) => (
                  <div className="w-full h-full" key={image.image_url}>
                    <Link href={image.link} className="w-full h-full block">
                      <Image
                        src={image.image_url}
                        width={500}
                        height={500}
                        placeholder="blur"
                        blurDataURL="/assets/images/hope_image.png"
                        alt="Pretty Little Thing"
                        className="h-full w-full"
                      />
                    </Link>
                  </div>
                ))}
              </Carousel>
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
                        src={`/assets/svg/${item.url}`}
                        width={100}
                        height={100}
                        alt={item.alt}
                        className="mx-auto  object-contain"
                      />
                    </div>
                  </Box>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
