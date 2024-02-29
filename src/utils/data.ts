import { HomeCardType } from "./types/home";
import { FaRegEnvelope } from "react-icons/fa";

export const HomeCardData: HomeCardType[] = [
  { header: "30+", sub_heading: "completed project" },
  { header: "ux expert" },
  { header: "15+", sub_heading: "satisfied clients" },
  { header: "3", span: "years", sub_heading: "design experience" },
];
export const TrustedByData = [
  { url: "trusted_a.svg", alt: "" },
  { url: "trusted_b.svg", alt: "" },
  { url: "trusted_c.svg", alt: "" },
  { url: "trusted_d.svg", alt: "" },
];

export const aboutTools = [
  {
    header: "Figma",
    image: "figma.png",
    text: "Figma is a web-based interface design application to collaborate in managing design projects",
  },
  {
    header: "Miro",
    image: "miro.png",
    text: "Miro is a collaborative visual platform that facilitates innovation by enabling teams of any size, irrespective of their locations, to collectively envision, design, and build the future.",
  },
  {
    header: "Maze",
    image: "maze.png",
    text: "Maze is a user research software that helps teams collect, organize, and analyze user research data. It's an all-in-one platform for conducting quantitative and qualitative research on web, mobile, and desktop applications.",
  },
  {
    header: "Google Workspace",
    image: "google_workspace.png",
    text: "Google Workspace is a suite of cloud computing, collaboration, and productivity tools, encompassing various software and products created and promoted by Google.",
  },
];
export const aboutDesignPhilosophy = [
  {
    icon: "humble.svg",
    header: "Be Humble",
    text: "The absence of ego is crucial, and designs should not be influenced by one's emotional attachment to an idea. Recognizing this becomes especially important when collaborating with a team and engaging with users. Personal favorite ideas may not resonate with users, and witnessing the failure of cherished concepts is a humbling experience. However, this realization is a source of empowerment, driving the creation of more successful designs.",
  },
  {
    icon: "solve.svg",
    header: "Solve real problems",
    text: "Design with purpose—address the needs of both the user and the business. It's common for designers to be drawn to a solution, perhaps an appealing CSS animation or an interactive widget.  Instead, the recommended approach is to start by falling in love with a problem. Utilizing the UX process, systematically derive a solution based on the identified problem. Design, unlike art, should not be driven by catchy trends in UX. The most effective designs are subtle and adapt to the user, not the other way around.",
  },
  {
    icon: "simplify.svg",
    header: "Simplify and verify",
    text: "'Simplicity is the ultimate sophistication.' As a product evolves and adds functionalities, the designer's goal should be to uphold a simple and user-friendly experience, providing users with precisely what they need to accomplish their tasks—nothing more, nothing less. Striking this balance is delicate. Moreover, any design concepts or alterations should undergo thorough testing and verification before permanent implementation. ",
  },
];
type Contact = {
  icon: any;
  name: string;
  link: string;
  link_text: string;
};
export const contactMeInfo: Array<Contact> = [
  {
    icon: FaRegEnvelope,
    name: "email",
    link: "uxdesign.hope@gmail.com",
    link_text: "uxdesign.hope@gmail.com",
  },
  { icon: "linkedin", name: "linkedin", link: "", link_text: "@hope-jonah" },
  { icon: "behance", name: "behance", link: "", link_text: "@hopejonah360" },
  { icon: "twitter", name: "X(Twitter)", link: "", link_text: "@iam_elpis" },
];

export const ProjectsData = [
  {
    image: "pretty_little_thing/hero.svg",
    image_mobile: "pretty_little_thing_mobile.png",
    header: "Redesigning the PrettleLittleThing",
    items: ["Redesign", "UX Research", "UI Design"],
    sub_header:
      "How might we redesign the app to give users more control in order to make better buying decisions ",
    url: "pretty-little-thing",
  },
  {
    image: "payaza/hero.svg",
    image_mobile: "payaza_mobile.png",
    header: "Payaza- Enhancing the Experience of Processing Bulk Payouts",
    items: ["UX Design", "UX Research", "UI Design"],
    sub_header:
      "Designing a feature to enable Mass Payment & Payroll Solutions",
    url: "payaza",
  },
  {
    image: "payaza_merchant_verification/hero.svg",
    image_mobile: "payaza_merchant_verification_mobile.png",
    header: "Solving Merchant Verification Challenges at Payaza",
    items: ["UX Design", "UX Research", "UI Design"],
    sub_header:
      "Design solutions that helped us effectively reduce merchant dropout rate during the verfication stage to 3.28%",
    url: "payaza-merchant-verification",
  },
  {
    image: "payruze.svg",
    image_mobile: "payruze_mobile.png",
    header: "Revolutionizing finances and travel experiences",
    items: ["UX Research", "UI Design", "New Product"],
    sub_header:
      "No matter your destination, we'll get you where you need to go.",
  },
];
