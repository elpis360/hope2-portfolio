export const project_intro = [
  {
    title: "Sector",
    text: "Fintech, B2B",
  },
  {
    title: "My Role",
    text: "Design Lead",
  },
  {
    title: "Deliverables",
    text: "Strategy, User Flow, Service Design",
  },
  {
    title: "Timeline",
    text: "3 months",
  },
];
export const conclusion_data: ConclusionData = {
  text: [
    "I'm truly appreciative of the collaborative effort and success achieved in this project. I want to express my gratitude to the Product Designers, Engineers, Managers, Customer Experience, and Sales Team who worked closely with me. Their dedication and contributions were pivotal in ensuring the project's success. If there are any further inquiries or if there's anything else I can help with, please feel free to let me know!",
  ],
};
export const project_data: ProjectData = [
  {
    header: "Introduction",
    text: [
      "The financial industry faces a dilemma. While there is a demand for quick, smooth, and engaging user experiences, financial regulators continually introduce stricter requirements in terms of KYC (Know Your Customer), AML (Anti Money Laundering), and AT (Anti-Terrorism). Breaching these regulations can result in severe penalties, especially for businesses engaged in substantial money transactions (B2Bs). Striking a balance between providing user-friendly services and complying with evolving regulatory standards is a complex challenge in the financial sector.",
    ],
  },
  {
    header: "Why verify merchants on Payaza",
    text: [
      "The KYC (Know Your Customer) verification process is crucial for financial institutions in preventing online crimes. This process involves a series of verification steps, including document verification, age verification, address verification, and any other steps deemed necessary by the Monetary Authority (Central Bank) of a country. The primary objective is to enable the financial sector to gain a comprehensive understanding of its customers and assess the associated risk levels.",
    ],
  },
  {
    header: "Verification Challenges",
    text: [
      "Regulatory obligations, periodically updated by the Monetary Authority (Central Bank), require strict adherence from financial institutions. One key regulation is the imperative for payment companies to have comprehensive knowledge of their customers.",

      "In compliance with this regulation, Payaza mandates that customers or businesses seeking to integrate with or utilize their services undergo a verification (KYC) process.",

      "A notable challenge faced by Payaza was the occurrence of some merchants dropping off during the verification process, hindering the ability to assist them in enhancing their payment experience.",
    ],
    image: [
      {
        url: "/assets/images/payaza_merchant_verification/kyc_incomplete.svg",
        alt: "Payaza KYC imcomplete",
        style: "aspect-ratio: 16/9 object-cover w-full",
        after_image: {
          text: [
            "To uncover and propose solutions to these challenges, I organized multiple meetings with the Product Design team. Our objective was to comprehensively identify challenges and develop solutions that would streamline the onboarding experience, making it hassle-free for users.",
          ],
        },
      },
    ],
  },
  {
    header: "Uncovering the Challenges",
    text: [
      "Recognizing the importance of understanding what caused the verification process to stall for merchants, it's crucial to note that this process is non-negotiable. Upon signing up with Payaza, merchants are required to undergo the verification process before they can engage in live transactions.",
    ],
    image: [
      {
        url: "/assets/images/payaza_merchant_verification/uncovering_challenges_a.svg",
        alt: "Payaza Uncovering challenges",
        style: "aspect-ratio: 16/9 object-cover w-full",
        after_image: {
          text: [
            "As mentioned earlier, the verification requirements, set by the monetary authority (central bank), vary depending on the type of business. This led the product design team to pose several questions that required answers. To address these questions, we collaborated with the customer experience team. We tasked them with collecting the names of all merchants who had abandoned the verification process and reaching out to them directly to understand their reasons firsthand.",

            "The results presented below are a categorized summary of the responses obtained. It's important to highlight that we engaged in conversations with all these merchants and subsequently grouped their answers for analysis.",
          ],
        },
      },
      {
        url: "/assets/images/payaza_merchant_verification/uncovering_challenges_b.svg",
        alt: "Payaza Uncovering challenges",
        style: "aspect-ratio: 16/9 object-cover w-full",
        after_image: {
          text: [
            "Now let us look at the design decisions we made to solve these problems shall we?",
          ],
        },
      },
    ],
    sub_sections: [
      {
        header: "For merchants who kept forgetting",
        text: [
          "Conducting a heuristic evaluation of the verification process, we recognized the opportunity to improve the process by applying the visibility heuristic, specifically focusing on the 'Visibility of System Status.'",

          "To address this, we aimed to provide succinct reminders to our merchants regarding their verification status. This was crucial since, as mentioned earlier, completing the verification process was essential for merchants to conduct live transactions. For instance, if a merchant closed their browser or encountered a distraction during the process, it was easy for them to forget that they had initiated the verification. This realization often occurred when a representative from the customer experience team reached out to them.",

          "The CX (Customer Experience) team, leveraging insights from the merchant's past engagements with the sales team, could identify delays in the first transaction or issues with the admin dashboard. This knowledge became instrumental in reminding merchants of their verification status and encouraging them to complete the process.",
        ],
        image: [
          {
            url: "/assets/images/payaza_merchant_verification/for_merchants_a.svg",
            alt: "Payaza For merchants who keep forgetting",
            style: "aspect-ratio: 16/9 object-cover w-full",
            after_image: {
              text: [
                "Following our landscape analysis, we opted to implement a solution: the introduction of a 'KYC Incomplete' email. We collaborated with the development team, providing them with a description of the solution we envisioned.",

                "The finalized approach involved synchronizing this email with the steppers on the screen. The email was designed to be triggered 30 minutes after a browser session ended and the verification process remained incomplete. This strategic timing aimed to serve as a reminder to merchants who may have left the process unfinished, encouraging them to resume and complete their KYC (Know Your Customer) verification.",
              ],
            },
          },
          {
            url: "/assets/images/payaza_merchant_verification/for_merchants_b.svg",
            alt: "Payaza For merchants who keep forgetting",
            style: "aspect-ratio: 16/9 object-cover w-full",
            after_image: {
              text: [
                "In addition to the automated email, the Customer Experience (CX) and Sales teams were empowered to reach out 24 hours after the second email. This proactive engagement aimed to inquire about any challenges or issues merchants may be facing during the onboarding process. By offering assistance and resolving potential concerns, this approach sought to enhance the overall onboarding experience for merchants.",
              ],
            },
          },
        ],
      },
      {
        header: "For merchants who already had a payment processor",
        text: [
          "We were definite we could offer a lot more than what their current processor gave and only needed an opportunity to prove our value proposition.",
          "So we introduced what we called… a Test Mode",
          "We had conversations with the Product, Engineering and Management Team and decided we needed something a lot more than a demo for these merchants.",
        ],
      },
      {
        header: "About the Test Mode",
        text: [
          "Considering the security concerns related to larger financial transactions, especially with the potential impact on society through money laundering or terrorism funding, we implemented two constraints. These constraints were designed to both limit the amount of money merchants could move and provide our business with an opportunity to showcase our value proposition.",

          "   1. Transaction Limit on Demo Page: Merchants were restricted to conducting live transactions with very small amounts on our demo page. This limitation was in place to allow them to explore our checkout process sufficiently, providing a glimpse of the value we aimed to deliver.",
        ],
        image: [
          {
            url: "/assets/images/payaza_merchant_verification/test_mode_a.svg",
            alt: "Payaza Test Mode",
            style: "aspect-ratio: 16/9 object-cover w-full",
            after_image: {
              text: [
                "   2. Merchants were granted access to the web app, allowing them to interact with every feature on the side menu as if they had live, fully operational accounts. However, to ensure security, merchants with test accounts were restricted to transacting only in minute amounts each day.",

                "To keep them informed, we implemented a notification system through emails, as SMS alerts would incur significant operational costs. This allowed merchants to stay updated on their transactions and activities within the test mode.",
              ],
            },
          },
          {
            url: "/assets/images/payaza_merchant_verification/test_mode_b.svg",
            alt: "Payaza Test Mode",
            style: "aspect-ratio: 16/9 object-cover w-full",
          },
        ],
      },
    ],
  },

  {
    header: "Result",
    text: ["How our solutions performed"],
    image: [
      {
        url: "/assets/images/payaza_merchant_verification/result.svg",
        alt: "Payaza Result",
        style: "aspect-ratio: 16/9 object-cover w-full",
        after_image: {
          text: [
            "We were able to achieve a new median of about 3.2% as tested over a 3 months interval. In the future, we’d continue to ensure we update the design and flow as regularly as the monetary authority instructs. This is so that we help the society in our own little way, to curb acts of Anti Terrorism and Money Laundering (AT&AML) and also stay in business so that we provide great payment solutions to businesses in Africa. Thank you.",
          ],
        },
      },
    ],
  },
];
