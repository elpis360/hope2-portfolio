import { Layout } from "@/components/layout";
import {
  ProjectConclusion,
  ProjectIntro,
  ProjectSection,
} from "@/components/project";
import {
  conclusion_data,
  project_data,
} from "@/utils/data/payaza_merchant_verification";
import { project_intro } from "@/utils/data/payaza_merchant_verification";
import React from "react";

const PayazaMerchantVerification = () => {
  return (
    <Layout title="Payaza Merchant Verification">
      <>
        <ProjectIntro
          data={project_intro}
          hero_image="/assets/images/payaza_merchant_verification/hero.svg"
          title="Payaza Merchant Verification"
        />
        <section className="screen-center">
          <ProjectSection data={project_data} />
        </section>
        <ProjectConclusion
          prevButton={{ link: "/", text: "Back to Homepage" }}
          nextButton={{
            link: "/works/pretty-little-thing",
            text: "Next Project",
          }}
          conclusion_data={conclusion_data}
        />
      </>
    </Layout>
  );
};

export default PayazaMerchantVerification;
