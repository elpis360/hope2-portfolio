import { Header, Paragraph } from "@/components/Texts";
import { Layout } from "@/components/layout";
import { ProjectsData } from "@/utils/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Projects = () => {
  return (
    <Layout title="Projects">
      <h2 className="font-medium h1-text mb-5 screen-center mt-10">
        Professional Work
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2  gap-5 lg:gap-10 lg:gap-x-20 gap-x-10 screen-center">
        {ProjectsData.map((project) => (
          <div
            className="border border-border  rounded-[10px] flex-col flex"
            key={project.header}
          >
            <div className="">
              <Image
                alt={project.header}
                src={`/assets/images/${project.image}`}
                placeholder="blur"
                blurDataURL="/assets/images/hope_image.png"
                width={300}
                height={200}
                className="w-full  aspect-ratio:16/9 object-cover rounded-t-[10px]"
              />
            </div>
            <div className="m-5 flex flex-col flex-1">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-5">
                  {project.items.map((item) => (
                    <div
                      className="border border-border px-2 py-1 rounded-[3px]"
                      key={item.substring(0, 8)}
                    >
                      <p className="font-light text-[6px] lg:text-xs text-pri_text">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
                <h4 className="font-bold h4-text mb-2 lg:mb-5">
                  {project.header}
                </h4>
                <p className="p-text text-sec_text font-normal mb-2 lg:mb-5">
                  {project.sub_header}
                </p>
              </div>
              <div className="">
                {project.url ? (
                  <Link href={`/works/${project.url}`}>
                    <button className="bg-primary px-4 py-2 text-[#020202] p-text rounded-[10px] font-medium">
                      View Case study
                    </button>
                  </Link>
                ) : (
                  <div>
                    <button className="bg-primary px-4 py-2 text-[#020202] p-text  rounded-[10px] font-medium">
                      Coming Soon
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Projects;
