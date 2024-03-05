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
} from "@/utils/data/pretty_little_thing";
import React from "react";

function PrettyLitteThing() {
  return (
    <Layout title="Pretty Little Thing">
      <ProjectIntro
        data={project_intro}
        hero_image="/assets/images/pretty_little_thing/hero.svg"
        title="Petty Little Thing"
      />
      <section className="screen-center">
        <ProjectSection data={project_data} />
      </section>
      <ProjectConclusion
        prevButton={{ link: "/", text: "Back to Homepage" }}
        nextButton={{ link: "/works/payaza", text: "Next Project" }}
        conclusion_data={conclusion_data}
      />
    </Layout>
  );
}

export default PrettyLitteThing;
