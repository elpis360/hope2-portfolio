import { Header, Paragraph } from "@/components/Texts";
import { Layout } from "@/components/layout";
import { aboutDesignPhilosophy, aboutTools } from "@/utils/data";
import Image from "next/image";
import React from "react";

const AboutPage = () => {
  return (
    <Layout title="About">
      <>
        <section className="my-5 lg:my-10 screen-center">
          <Header>User Experience Designer</Header>
          <p className="text-[#DFDFDF] p-text font-medium">Based in Lagos</p>

          <div className="grid md:grid-cols-2 gap-20 justify-between mt-5">
            <div className="rounded-xl">
              <Image
                src="/assets/images/hope_image.png"
                alt=""
                width={500}
                height={500}
                className="w-full"
              />
            </div>
            <div className="flex flex-col gap-5 ">
              <p className="text-[#DFDFDF]">
                Hi there! I&apos;m Hope, an architect turned UX designer. Before
                discovering UX, I worked for 2 years as an architect designing
                landscapes, Interiors for private residences, commercial and
                mixed use developments. My experience in the design field has
                been an invaluable lesson in collaboration, communication,
                creativity, and problem solving. Most important, &apos;ve
                learned how to contribute as part of a greater whole to design
                things that are used by real people everyday.
              </p>
              <p className="text-[#DFDFDF]">
                I&apos;m driven by compassion for others and a desire to improve
                people&apos;s lives through design. UX design allows me to blend
                empathy, psychology, and creativity to have a positive impact on
                the world.
              </p>
              <p className="text-[#DFDFDF]">
                When I&apos;m not working, you can find me staying active in
                reading, cooking, eating, traveling, and spending time with
                friends and family.
              </p>
              <p className="text-[#DFDFDF]">
                I currently live in Lagos, Nigeria. Want to get in touch? Email
                me at:<br></br>
                <a href="mailto:uxdesign.hope@gmail.com">
                  uxdesign.hope@gmail.com
                </a>
              </p>
            </div>
          </div>
        </section>
        {/* tools i use  */}
        <section className="my-5 lg:my-10 screen-center">
          <Header>Tools I frequently use</Header>
          <div className="grid md:grid-cols-2 gap-10 lg:gap-x-20 mt-5">
            {aboutTools.map((tool) => (
              <div
                key={tool.header}
                className="rounded-[10px] p-5 border border-[#565656] bg-black"
              >
                <Image
                  alt={tool.header}
                  src={`/assets/images/${tool.image}`}
                  width={35}
                  height={35}
                  className="w-[35px] h-[35px] rounded-sm"
                />
                <div className="mt-5">
                  <h4>{tool.header}</h4>
                  <p className="text-[#DFDFDF]">{tool.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* my design philosophy  */}
        <section className="my-5 lg:my-10 screen-center">
          <p className="h1-text font-medium capitalize mb-4">
            My design Philosophy
          </p>
          <div className="grid md:grid-cols-3 gap-10 lg:gap-x-20 mt-5">
            {aboutDesignPhilosophy.map((design) => (
              <div key={design.header} className="flex flex-col">
                <Image
                  alt={design.header}
                  src={`/assets/svg/${design.icon}`}
                  width={48}
                  height={48}
                  className="w-[48px] h-[48px] rounded-sm"
                />
                <div className="flex-1 mt-5">
                  <h4 className="mb-3 h4-text">{design.header}</h4>
                  <p className="text-[#DFDFDF]">{design.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </>
    </Layout>
  );
};

export default AboutPage;
