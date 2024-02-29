import { Header } from "@/components/Texts";
import { Paragraph } from "@/components/Texts";
import { Layout } from "@/components/layout";
import React from "react";
import { FaBehance, FaLinkedinIn, FaRegEnvelope } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Contact = () => {
  return (
    <Layout title="Contact">
      <section className="screen-center my-10">
        <p className="h1-text mb-5 font-medium">Contact Me</p>
        <p className="text-p text-sec_text">
          Interested in collaborating on something? Making a request for my
          availability Give me a shout!
        </p>

        <div className="flex flex-col gap-5 mt-10">
          {contactMeInfo.map((contact) => (
            <div
              className="grid grid-cols-6 items-center md:w-[60%] lg:w-[40%]"
              key={contact.name}
            >
              <div>
                <div className="hidden md:block">{contact.icon}</div>
                <div className="md:hidden">{contact.icon_mobile}</div>
              </div>

              <p className="p-text Capitalize col-span-2">{contact.name}</p>
              <div className="col-span-3">
                <a
                  href={contact.link}
                  className="text-primary underline p-text"
                >
                  {contact.link_text}
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
export const contactMeInfo = [
  {
    icon: <FaRegEnvelope size={30} />,
    icon_mobile: <FaRegEnvelope size={18} />,
    name: "email",
    link: "uxdesign.hope@gmail.com",
    link_text: "uxdesign.hope@gmail.com",
  },
  {
    icon: <FaLinkedinIn size={30} />,
    icon_mobile: <FaLinkedinIn size={18} />,
    name: "linkedin",
    link: "",
    link_text: "@hope-jonah",
  },
  {
    icon: <FaBehance size={30} />,
    icon_mobile: <FaBehance size={18} />,
    name: "behance",
    link: "",
    link_text: "@hopejonah360",
  },
  {
    icon: <FaXTwitter size={30} />,
    icon_mobile: <FaXTwitter size={18} />,
    name: "X(Twitter)",
    link: "",
    link_text: "@iam_elpis",
  },
];
