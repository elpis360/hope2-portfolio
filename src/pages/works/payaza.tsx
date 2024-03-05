import { Layout } from "@/components/layout";
import {
  ProjectConclusion,
  ProjectIntro,
  ProjectSection,
} from "@/components/project";
import {
  conclusion_data,
  project_data,
  project_intro,
} from "@/utils/data/payaza";
import React from "react";

const Payaza = () => {
  return (
    <Layout title="Payaza">
      <ProjectIntro
        data={project_intro}
        hero_image="/assets/images/payaza/hero.svg"
        title="Payaza"
      />
      <section className="screen-center">
        <ProjectSection data={project_data} />
      </section>
      <ProjectConclusion
        prevButton={{ link: "/", text: "Back to Homepage" }}
        nextButton={{
          link: "/works/payaza-merchant-verification",
          text: "Next Project",
        }}
        conclusion_data={conclusion_data}
      />
    </Layout>
  );
};

export default Payaza;
