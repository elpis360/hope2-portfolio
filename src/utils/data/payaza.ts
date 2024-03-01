export const project_intro = [
  {
    title: "Sector",
    text: "Fintech, B2B",
  },
  {
    title: "My Role",
    text: "UX Researcher, UX Designer, UI Designer",
  },
  {
    title: "Deliverables",
    text: "Strategy, User Flow, Prototypes",
  },
  {
    title: "Timeline",
    text: "2 months",
  },
];
export const conclusion_data: ConclusionData = {
  text: [
    "We have touched upon the main problems of making mass payouts. These include large commission fees, technical failures, slow speed at which payouts are made, long payout process",
    "There are so many other ways we intend to improve the experience for our bulk payment system in the future. We plan to add",
  ],
  list: [
    "the schedule payment feature that allows the operator to schedule payments at pay at specified times, allow employees get paid with different currencies. etc",
    "a split payroll feature that would organizations having multi currency payroll needs pay employees in their desired salaried currency.",
  ],
  after_text: [
    "If you own a business where you have to manage a massive number of payments on a frequent basis , check out our payment system . Covers bulk payments for loan disbursement, payment to suppliers and employees, insurance claims settlements, dividend payments, etc",
    "Thanks for reading through this case study!",
  ],
};
export const project_data: ProjectData = [
  {
    header: "What is a bulk payout/payment?",
    text: [
      "A bulk payout refers to a financial system enabling a payer, typically a business, to execute numerous debit transactions to multiple recipients listed in a bulk format, all from a single debit account.",

      "These systems streamline the payment process, providing an effective and dependable means to make multiple payments simultaneously.",

      "To initiate a bulk payment, a comprehensive bulk list is essential. This list encompasses the particulars of each account or payee slated for payment. The bulk transfer functionality enables the transfer of funds from your Payaza wallet to multiple bank accounts concurrently, accomplished by uploading a spreadsheet containing the necessary recipient details.",
    ],
  },
  {
    header: "Problem statement",
    text: [
      "Businesses often encounter challenges when making regular payments, a task that consumes significant time and resources. Manual handling of these payments can result in errors and delays, especially when dealing with mass payouts to hundreds of recipients simultaneously. Common issues include technical failures, unwarranted expenses, transaction delays, and more. Whether it involves invoices, payroll, or other transactions, ensuring efficient and error-free payments to a large number of payees poses a considerable challenge.",
    ],
  },

  {
    header: "The Process",

    sub_sections: [
      {
        header: "User Research",
        text: [
          "As an existing solution, our focus was on addressing certain challenges present in the current system. Collaborating closely with the team, we engaged directly with our target audience. This involved in-depth conversations, research through phone calls, face-to-face interviews, and discussions on messaging apps.",
        ],
        image: [
          {
            url: "/assets/images/payaza/user_research.svg",
            alt: "Payaza User Research",
            style: "aspect-ratio: 16/9 object-cover w-full",
          },
        ],
      },
      {
        header: "Insight",
        text: [
          "After conducting research with business owners and the Payroll/Finance departments of various organizations, several significant pain points were identified.",
        ],
        image: [
          {
            url: "/assets/images/payaza/feedback_analysis.svg",
            alt: "Payaza FeedBack Analysis",
            style: "aspect-ratio: 16/9 object-cover w-full",
          },
        ],
      },
      {
        header: "Competitive analysis",
        text: [
          "We examined organizations currently providing this solution to draw comparisons and identify both successful elements and potential loopholes in the existing system. Notable organizations in this comparison included:",
        ],
        list: [
          {
            text: "RazorPay",
          },
          {
            text: "Paystack",
          },
          {
            text: "PayPal",
          },
          {
            text: "Banks Via (Bank transfers ACH)",
          },
        ],
        after_text: [
          "The objective was to uncover user frustrations with the current systems",
        ],
      },
      {
        header: "Goals",
        text: [
          "Given the identified pain points, our objective was to design a bulk payment system that addresses the challenges commonly associated with mass payments. The primary goal is to empower users to effortlessly create payouts to numerous recipients, minimizing the effort required, and addressing issues related to speed, accuracy, and security.",
        ],
      },
      {
        header: "Some user stories",
        list: [
          {
            header: "Make Over 100 Payments in One Batch:",
            text: " Users have the capability to initiate more than 100 payments in a single batch, streamlining the process of handling a large number of transactions at once.",
          },
          {
            header: "Schedule Payments in Advance:",
            text: " Users can schedule payments to be processed anywhere from two to 30 business days in advance, providing flexibility and allowing for efficient planning.",
          },
          {
            header: "Store Recipient Details for Repeat Payments:",
            text: " Users have the option to save recipient details, enabling quicker and more convenient processing of repeat payments without the need to re-enter information.",
          },
          {
            header: "Manage Payment Limits Online: ",
            text: "Users can conveniently handle and adjust payment limits through an online platform, offering control and flexibility over their payment parameters.",
          },
          {
            header: "Determine Payment Dates: .",
            text: "Users have the authority to specify the date for each payment, allowing for personalized and strategic planning of financial transactions",
          },
          {
            header: "Set Payment Limits:.",
            text: " Users can establish payment limits according to pre-agreed terms, ensuring adherence to predefined financial boundaries for the use of the service",
          },
          {
            header: "Edit Customer Information Before Payments:",
            text: " Users possess the capability to edit customer information prior to initiating payments, ensuring accuracy and allowing for necessary updates to recipient details.",
          },
        ],
      },
    ],
  },
  {
    header: "The Solution",
    text: [
      "Having grasped the goal I aimed to achieve, I immediately delved into the implementation phase. Leveraging my experience in the fintech industry and prior work on bulk payment systems, I created a streamlined flow chart. This chart was designed to clearly illustrate the simplified process and align with the team's understanding of how the system operates. The focus was on simplifying the user experience while ensuring cohesion with established industry practices.",
    ],
    image: [
      {
        url: "/assets/images/payaza/solution.svg",
        alt: "Payaza solution",
        style: "aspect-ratio: 16/9 object-cover w-full",
      },
    ],

    sub_sections: [
      {
        header: "Onboarding",
        text: [
          "New organizations are required to undergo the system's onboarding process to establish an account. As part of this process, they must complete KYC (Know Your Customer) verification before gaining the capability to make payments. Additionally, organizations are expected to fund their Payaza wallet, which serves as the source for making payments to employees. This structured onboarding ensures compliance, security, and a seamless integration into the payment system.",
        ],
        image: [
          {
            url: "/assets/images/payaza/onboarding_a.svg",
            alt: "Payaza onboarding",
            style: "aspect-ratio: 16/9 object-cover w-full",
          },
          {
            url: "/assets/images/payaza/onboarding_b.svg",
            alt: "Payaza onboarding",
            style: "aspect-ratio: 16/9 object-cover w-full",
          },
        ],
      },
      {
        header: "Upload File",
        text: [
          "Businesses commonly store payment details in files, and the system is tailored to read files in .csv or .xlsx formats. In the bulk payout flow, the initial step involves uploading a spreadsheet containing recipients' bank account details and the corresponding transfer amounts. Users can achieve this by clicking on the 'Select Document' button.",
          "To enhance user understanding, we incorporated an option to 'Download Sample.' This feature proves particularly helpful for first-time users, offering a visual guide on how the CSV file should be structured. The downloadable sample serves a dual purpose – it can function as a reusable template for future use or simply as a reference to confirm the structure and content of the file.",
        ],
        image: [
          {
            url: "/assets/images/payaza/upload_file_a.svg",
            alt: "Payaza upload_file",
            style: "aspect-ratio: 16/9 object-cover w-full",
          },
          {
            url: "/assets/images/payaza/upload_file_b.svg",
            alt: "Payaza upload_file",
            style: "aspect-ratio: 16/9 object-cover w-full",
          },
        ],
      },
      {
        header: "View file information",
        text: [
          "Once the file is loaded, users have the opportunity to review the information, and the system conducts checks to ensure there are no errors, such as incomplete account numbers or incorrect mobile number formats. Recognizing that humans are prone to mistakes, even in cases as small as a single missing digit, the system is thoughtfully designed to assist users in managing errors. Rather than aiming to prevent every mistake, the system focuses on providing tools and guidance to help users identify and address any issues that may arise during the process. This approach acknowledges the inevitability of human errors and empowers users to navigate and resolve them effectively.",
        ],
        image: [
          {
            url: "/assets/images/payaza/view_file_info.svg",
            alt: "Payaza View File Info",
            style: "aspect-ratio: 16/9 object-cover w-full",
          },
        ],
      },
      {
        text: [
          "In the event that the system identifies an error, it promptly informs the user about the specific location and type of error. Furthermore, the system provides detailed guidance on how to rectify the error. This proactive approach aims to empower users by offering clear and precise information, enabling them to efficiently address and resolve any issues that may arise during the process.",
        ],
        image: [
          {
            url: "/assets/images/payaza/view_file_info_b.svg",
            alt: "Payaza View File Info",
            style: "aspect-ratio: 16/9 object-cover w-full",
          },
        ],
      },
      {
        header: "Edit / Delete Information",
        text: [
          "A standout feature of the Payaza bulk payout system is its unique ability to edit or delete payee information during the payout process, setting it apart from its counterparts. Recognizing the challenges faced by users in the existing systems, particularly the lack of an easy method for making minor corrections, Payaza addresses this issue by allowing users to edit payee information seamlessly within the payout process.",

          "The editing functionality operates through a modal format. When a user clicks on the edit icon, a modal window opens, providing a convenient space to modify information. While inline editing was initially considered, technical considerations led us to adopt the modal approach, ensuring a user-friendly experience and simplifying the correction process for users. This edit feature plays a pivotal role in minimizing errors and streamlining the overall payment process.",
        ],
        image: [
          {
            url: "/assets/images/payaza/edit_delete_info.svg",
            alt: "Payaza Edit / Delete Information",
            style: "aspect-ratio: 16/9 object-cover w-full",
          },
        ],
      },
      {
        header: "Confirm payout details",
        text: [
          "To further minimize the risk of errors, the system includes a 'Confirm Payout Details' page. On this page, users have the chance to review a summary of the bulk payout details, including the total number of payees, the number of accounts being paid to, total amount, and more. If users identify any mix-up or error at this stage, they have the option to go back and make necessary adjustments.",

          "It's important to note that the payout amount, fees, or taxes are deducted directly from the user's Payaza account balance, streamlining the payment process and ensuring that the financial details are accurately reflected in the system. This approach adds an additional layer of confirmation and control for users before finalizing the payout.",
        ],
        image: [
          {
            url: "/assets/images/payaza/confirm_payout_details.svg",
            alt: "Payaza Confirm Payout Details",
            style: "aspect-ratio: 16/9 object-cover w-full",
          },
        ],
      },
      {
        header: "Enter transaction pin",
        text: [
          "To ensure security, a user is prompted to enter a transaction pin that they set up during the account creation process. Once the correct pin is entered, the transaction is processed immediately, and payments are disbursed to the designated individuals. This transaction pin serves as an additional layer of authentication, enhancing the overall security of the payment process and safeguarding against unauthorized access or transactions.",
        ],
        image: [
          {
            url: "/assets/images/payaza/enter_transaction_pin.svg",
            alt: "Payaza Enter transaction pin",
            style: "aspect-ratio: 16/9 object-cover w-full",
            after_image: {
              text: [
                "In the event of a tentative error or a failed payout, the system provides clear information about the nature of the problem. Users are prompted with specific details and options to either try the process again or address and fix the identified error. Notably, bulk payouts cannot be queued, meaning they need to be processed immediately.",

                "If there is insufficient balance in the user's Payaza account, the payouts will fail, ensuring that payments are processed only when there are adequate funds available. This approach helps maintain the integrity of the payment system and prevents incomplete or unsuccessful transactions due to insufficient funds.",
              ],
            },
          },
          {
            url: "/assets/images/payaza/result.svg",
            alt: "Payaza Transaction results",
            style: "aspect-ratio: 16/9 object-cover w-full",
            after_image: {
              text: [
                "In the event of a tentative error or a failed payout, the system provides clear information about the nature of the problem. Users are prompted with specific details and options to either try the process again or address and fix the identified error. Notably, bulk payouts cannot be queued, meaning they need to be processed immediately.",

                "If there is insufficient balance in the user's Payaza account, the payouts will fail, ensuring that payments are processed only when there are adequate funds available. This approach helps maintain the integrity of the payment system and prevents incomplete or unsuccessful transactions due to insufficient funds.",
              ],
            },
          },
        ],
      },
      {
        header: "Validation and Insights",
        text: [
          "The payout process was simplified in into three major steps; upload CSV file, confirm details, make payment. We observed that about 15% of our active user base adopted the bulk payouts within 3 months from the launch.",
        ],
      },
    ],
  },
];
