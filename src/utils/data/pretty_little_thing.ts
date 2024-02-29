import { headers } from "next/headers";

export const project_intro = [
  {
    title: "Sector",
    text: "E-commerce, B2C, Retail",
  },

  {
    title: "Challenge",
    text: "To enhance the overall user experience, we aim to provide a superior shopping experience and approach design from an empathetic standpoint, considering the users at every step of the way.",
  },
  {
    title: "My Role",
    text: "UX Researcher, UX Designer, UI Designer",
  },
  {
    title: "Tools Used",
    text: "Figma, Maze.",
  },
  {
    title: "Timeline",
    text: "3 weeks",
  },
];
export const project_data: ProjectData = [
  {
    header: "Introduction",
    text: [
      "Given the increased time people are spending at home due to COVID-19, there's been a notable surge in online shopping activities. An article titled 'Boohoo, Asos, and more: The online fashion retailers benefiting as locked-down Brits splash out on clothes' from the Evening Standard highlights the substantial gains experienced by certain online fashion retailers during the pandemic.",
      "However, amidst this trend, a growing number of individuals have taken to Twitter to express their grievances related to the PLT (PrettyLittleThing) app. Having observed this upswing in user dissatisfaction through tweets and personally engaging with the app, I recognized an opportune moment to apply my UX design skills.",
    ],
  },
  {
    header: "About PLT",
    text: [
      "PLT, short for PrettyLittleThing, is a UK-based fast fashion online retail company that commenced operations in 2012. Renowned for its significant influence on social media and celebrity fashion culture, PLT has carved a niche for itself in the fashion industry. The brand currently operates in England, the USA, and France, with a primary focus on catering to women aged between 16 and 25.",
      "In recognition of its rapid growth, PLT earned the title of the fastest-growing online fashion retailer in 2017. The statistics are remarkable, with a staggering 663% increase in site visits each year since 2014, underscoring the brand's substantial and sustained popularity.",
    ],
  },
  {
    header: "Goals for the redesign",
    text: [
      "To enhance the overall user experience for customers, the goal is to create a more satisfying shopping journey. This involves approaching design from an empathetic standpoint, considering the needs and preferences of users at every stage of their interaction with the platform.",
      "By prioritizing empathy in the design process, we aim to deeply understand and address the concerns and desires of users. This includes anticipating their needs from the moment they land on the website or app, ensuring a seamless and enjoyable navigation experience, and providing clear and helpful information throughout the shopping process.",
      "Emphasizing empathy in design not only involves understanding users' functional requirements but also tapping into their emotions, preferences, and potential pain points. This approach allows for the creation of a more personalized and considerate shopping experience, ultimately fostering a stronger connection between the users and the platform.",
    ],
  },
  {
    header: "Design Process",
    text: [
      "For this project, I used the double diamond process which consists of 4 stages: Discovery, Define, Develop & Deliver.",
    ],
    image: [
      {
        url: "/assets/images/pretty_little_thing/design_process.svg",
        alt: "Design Process",
        style: "h-[500px] w-[500px] aspect-ratio: 16/9 object-contain mx-auto",
      },
    ],
  },
  {
    header: "Discover",
    text: [
      "During this initial stage, my focus was on researching the problem extensively to understand the best approach for solving it. This phase is crucial for navigating the problem-solving process effectively.",
    ],
    sub_sections: [
      {
        header: "User Reviews on the App Store",
        text: [
          "To gain an initial understanding of user sentiments about the app, I started by examining reviews posted on the App Store.",
        ],
        image: [
          {
            url: "/assets/images/pretty_little_thing/user_review.svg",
            alt: "Pretty Little Thing reviews on App Store",
            style: "aspect-ratio: 16/9 object-cover w-full",
            title: "User reviews from the App Store",
            after_image: {
              text: [
                "I observed a consistent pattern where users voiced frustrations about navigating the Wishlist feature within the app.",
              ],
            },
          },
        ],
      },
      {
        header: "Heuristic Evaluation",
        text: [
          "I then performed a heuristic evaluation of the existing app to assess its user-friendliness. I applied Jakob Nielsen's 10 Usability Heuristics as a framework for the evaluation.",
        ],
        image: [
          {
            url: "/assets/images/pretty_little_thing/evaluation_a.svg",
            alt: "Pretty Little Heuristic Evaluation",
            style: "aspect-ratio: 16/9 object-cover w-full",
          },
          {
            url: "/assets/images/pretty_little_thing/evaluation_b.svg",
            alt: "Pretty Little Heuristic Evaluation",
            style: "aspect-ratio: 16/9 object-cover w-full",
            title: "Snippet of the Heuristic Evaluation conducted",
            after_image: {
              text: ["I identified several usability issues, including:"],
              list: [
                {
                  header: "Lack of user control & freedom:",
                  text: "Certain parts of the app, such as the splash screen, took 10 seconds to load without providing any indication of what was happening during that time.",
                },
                {
                  header: "Schedule Payments in Advance:",
                  text: " Users can schedule payments to be processed anywhere from two to 30 business days in advance, providing flexibility and allowing for efficient planning.",
                },
                {
                  header: "Lack of match between system and the real world:",
                  text: " To view available sizes of an item, users had to click the 'ADD TO BAG' button first. In a real-world scenario, you wouldn't typically add an item to your shopping basket before checking its size.",
                },
              ],
            },
          },
        ],
      },
      {
        header: "User Interviews",
        text: [
          "Recognizing the necessity of engaging with actual users to enhance the system's user experience, I conducted one-on-one interviews with 5 participants who actively use the app. I opted for this research method to secure in-depth responses, a level of detail I believed might be challenging to attain through a survey.",
          "The interviews were guided by three primary objectives:",
        ],
        list: [
          {
            header: "Understand the typical user of the PLT app.",
          },
          {
            header:
              "Gain insight into how the app influences the user's emotions and experiences.",
          },
          {
            header:
              "Determine whether the app is effectively meeting the user's needs.",
          },
        ],
        image: [
          {
            url: "/assets/images/pretty_little_thing/user_questions.svg",
            alt: "Pretty Little Interview Questions",
            style: "w-[500px] object-cover mx-auto",
            title: "Some of the interview questions",
            after_image: {
              text: [
                "After transcribing the interview discussions, I coded the content and transferred the coded information onto Post-It notes. This facilitated the process of Affinity Mapping, allowing me to identify and group common themes that emerged from the interviews.",
              ],
            },
          },
          {
            url: "/assets/images/pretty_little_thing/interview_transcripts.svg",
            alt: "Pretty Little Coding interview transcripts",
            style: "aspect-ratio: 16/9 object-cover w-full",
            title: "Coding interview transcripts",
          },
          {
            url: "/assets/images/pretty_little_thing/affinity_mapping.svg",
            alt: "Pretty Little CAffinity Mapping",
            style: "aspect-ratio: 16/9 object-cover w-full",
            title: "Affinity Mapping",
            after_image: {
              text: ["From the interviews, several key pain points emerged:"],
              list: [
                {
                  header: "Viewing out-of-stock items",
                  text: "Users expressed frustration at navigating through the app only to discover that the desired item was no longer in stock. This led to a sense of wasted time and disappointment.",
                },
                {
                  header: "Inability to access Wishlist items quickly",
                  text: " Users, especially those with extensive Wishlists, faced challenges navigating swiftly through their saved items. This issue was particularly noticeable among users with a larger number of items in their Wishlist.",
                },
                {
                  header: "Limited resources for informed decisions",
                  text: "Users highlighted the challenge of making informed purchasing decisions based solely on a few images. Lack of additional resources, such as product videos, made it difficult for them to assess items thoroughly, reducing their likelihood of making a purchase.",
                },
                {
                  header:
                    "Feeling overwhelmed by the app's extensive inventory",
                  text: " Users reported feeling overwhelmed by the sheer number of items available on the app, making it challenging to find the right outfit amidst the vast selection.",
                },
              ],
            },
          },
        ],
      },
    ],
  },
  {
    header: "Define",
    sub_sections: [
      {
        header: "User Personas",
        text: [
          "Upon synthesizing the research findings, the insights were distilled into two user personas. These personas serve as a reference point throughout the project, providing a clear understanding of the target users and guiding the design process with a focus on meeting their specific needs and preferences.",
        ],
        image: [
          {
            url: "/assets/images/pretty_little_thing/user_persona_a.svg",
            alt: "Pretty Little User Personas",
            style:
              "lg:w-3/4 mx-auto aspect-ratio: 16/9 object-cover max-h-[600px]",
            title: "1 of 2 User Personas ",
          },
          {
            url: "/assets/images/pretty_little_thing/user_persona_b.svg",
            alt: "Pretty Little User Personas",
            style: "lg:w-3/4 mx-auto aspect-ratio:16/9 object-cover ",
            title: "2 of 2 User Personas ",
          },
        ],
      },
      {
        header: "How Might We Statement (HMW)",
        text: [
          "Utilizing the pain points identified during the discovery phase, I crafted several 'How Might We' (HMW) statements. These statements were designed to inspire human-centered design solutions, striking a balance between being broad enough to encourage a variety of ideas while remaining focused on addressing users' needs effectively. The HMW statements serve as a springboard for generating innovative design solutions that aim to alleviate the identified pain points.",
        ],
        image: [
          {
            url: "/assets/images/pretty_little_thing/how_might_we.svg",
            alt: "Pretty Little How Might we",
            style: "aspect-ratio: 16/9 object-cover w-full",
            title: "How Might We",
          },
          {
            url: "/assets/images/pretty_little_thing/choosen_how_might_we.svg",
            alt: "Pretty Little How Might we",
            style: "aspect-ratio: 16/9 object-cover w-full",
            title: "Choosen How Might We",
            after_image: {
              special: [
                {
                  text: "How can we redesign the app to provide users with increased autonomy, enabling them to make more informed purchasing decisions?",
                  style: "italic h4-text ",
                  div_style: "center__text",
                },
              ],
            },
          },
        ],
      },
    ],
  },
  {
    header: "Develop",
    sub_sections: [
      {
        header: "Mindmap",
        text: [
          "Having selected a fitting HMW statement from the Define stage, I utilized it as the foundation for generating ideas by creating a mind map.",
        ],
        image: [
          {
            url: "/assets/images/pretty_little_thing/mind_mapping.svg",
            alt: "Pretty Little Mind Mapping",
            style: "aspect-ratio: 1/1 object-cover w-full",
            title: "Mind Mapping",
          },
        ],
      },
      {
        header: "Wireframes",
        text: [
          "Following the generation of ideas from the mind map, I proceeded to sketch low-fidelity wireframes. Subsequently, these low-fidelity wireframes were refined and converted into medium-fidelity wireframes.",
        ],
        image: [
          {
            url: "/assets/images/pretty_little_thing/low_fidelity_wireframe.svg",
            alt: "Pretty Little Low Fidelity Wireframe",
            style: "aspect-ratio: 1/1 object-cover w-full",
            title: "Low Fidelity Wirefrmae",
          },
          {
            url: "/assets/images/pretty_little_thing/medium_fidelity_wireframe.svg",
            alt: "Pretty Little Low Fidelity Wireframe",
            style: "aspect-ratio: 116/9 object-cover w-full",
            title: "Medium Fidelity Wirefrmae",
          },
        ],
      },
      {
        header: "Usability Testing",
        text: [
          " During the prototyping phase, I utilized Maze to test the functionality with 2 users by presenting them with a series of questions. One of the design ideas stemmed from the users' pain point of feeling overwhelmed by the abundance of fashion items. This involved creating a fixed vertical sidebar with the purpose of guiding users through a set of questions to refine their search results.",

          "One of the questions posed to users was, 'You are faced with too many dress options and feel overwhelmed, how would you tailor your results?' The heat maps revealed that both users attempted to click on the 'Sort' or 'Filter' buttons, completely overlooking the sidebar. Upon inquiry, both users explained that, instinctively, they would use the filter to narrow down their search results. The sidebar, in their perception, seemed redundant and akin to an alternative version of the filter, leading them to disregard its use.",
        ],
        image: [
          {
            url: "/assets/images/pretty_little_thing/heat_map.svg",
            alt: "Pretty Little Heat Map",
            style: "aspect-ratio: 1/1 object-cover w-full",
            after_image: {
              text: [
                "This highlights how crucial usability testing is. I believed the vertical sidebar feature was a fantastic concept, but the users had a completely different opinion.",
              ],
            },
          },
        ],
      },
    ],
  },
  {
    header: "Deliver",
    sub_sections: [
      {
        header: "The solution",
        image: [
          {
            sub_heading: "Homepage",
            url: "https://miro.medium.com/v2/resize:fit:1200/format:webp/1*IfsTyN94U80c4iBZ0mDaWw.gif",
            alt: "Pretty Little Thing Home Page",
            style:
              "aspect-ratio: 16/9 h-[500px] object-cover w-[500px] mx-auto",
            after_image: {
              text: [
                "The goal was to streamline the content on the home page because I found the original to be overly repetitive. Research also revealed that users perceived the home page as crowded, leading to a sense of overwhelm. To address this, I replaced the repetitive 'Shop By' categories with two new sections:",
              ],
              list: [
                {
                  text: "New in",
                },
                {
                  text: "Top Picks Just For You",
                },
              ],
              special: [
                {
                  text: "These categories were selected based on research, indicating their importance to users. I included clear headings for each section to effectively communicate the content to users.",
                  style: "text-p  my-3 lg:my-5 ",
                },
              ],
            },
          },
          {
            sub_heading: "Shop — change number of items per row",
            url: "https://miro.medium.com/v2/resize:fit:1200/format:webp/1*zJZ-rKuItPCdKIa8wRMMyQ.gif",
            alt: "Pretty Little Shop",
            style:
              "aspect-ratio: 16/9 h-[500px] object-cover w-[500px] mx-auto",
            after_image: {
              text: [
                "TTo address the problem of excessive scrolling for certain users, I introduced the choice to display shop results in a '3 items per row' layout. This option enables users to see more items on their screen simultaneously.",
                "Meanwhile, the '1 item per row' layout caters to users who prefer the convenience of getting a detailed look at each product without having to click on it first.",
              ],
            },
          },
          {
            sub_heading: "Out of Stock Banner",
            url: "/assets/images/pretty_little_thing/out_of_stock.svg",
            alt: "Pretty Little Shop",
            style: "aspect-ratio: 16/9 h-[500px] object-cover mx-auto w-[500]",
            after_image: {
              text: [
                "To address the ‘viewing out of stock products’ pain point, I added a clearly labelled ‘Out of Stock’ banner to items. So when a user is browsing through products and they see an item they might like that is out of stock, the banner clearly communicates this to them, so they can decide whether they still want to view the item or keep scrolling.",
              ],
            },
          },
          {
            sub_heading: "Reviews",
            url: "/assets/images/pretty_little_thing/reviews.svg",
            alt: "Pretty Little Shop",
            style:
              "aspect-ratio: 16/9 h-[500px] object-cover  mx-auto w-[500px]",
            after_image: {
              text: [
                "I observed that not every item on the app offered the option to view a catwalk video. Research indicated that the absence of a video decreased the likelihood of users purchasing the item. While it's not feasible to have a video for every item in this project, I proposed an alternative solution—introducing reviews. This feature would provide users with guidance to make informed decisions about whether to purchase a specific item or not.",
                "My research also uncovered that users often watch YouTube videos of their favorite bloggers trying on clothing items they're interested in buying. This emphasized to me that users value the opinions of others, making the reviews feature crucial for the app",
              ],
            },
          },
          {
            sub_heading: "Back in stock notifications",
            url: "https://miro.medium.com/v2/resize:fit:1200/format:webp/1*9sWVQV_-E4iclr-xXJwbtg.gif",
            alt: "Pretty Little Shop Back in Stock Notifications",
            style:
              "aspect-ratio: 16/9 h-[500px] object-cover  mx-auto w-[500px]",
            after_image: {
              text: [
                "Conversations with users emphasized the significance of this feature. A large number of users shared their frustration about eagerly wanting an item that was out of stock and having to repeatedly check the app for its availability. In response, I introduced a button allowing users to select their preferred size and color, enabling them to receive notifications when the item was back in stock.",
              ],
            },
          },
          {
            sub_heading: "Similar Items",
            url: "https://miro.medium.com/v2/resize:fit:1200/format:webp/1*R5Y_2lKZhQuXEoPcX4voJg.gif",
            alt: "Pretty Little Shop Back in Stock Notifications",
            style:
              "aspect-ratio: 16/9 h-[500px] object-cover  mx-auto w-[500px]",
            after_image: {
              text: [
                "When a user desires an item that is currently out of stock and they have activated a 'back in stock' notification, I believed that enhancing the user experience could be achieved by suggesting similar alternatives within the app.",
              ],
            },
          },
          {
            sub_heading: "Wishlist - Search Bar",
            url: "/assets/images/pretty_little_thing/whitelist.svg",
            alt: "Pretty Little Shop",
            style: "aspect-ratio: 16/9 h-[500px] object-cover  mx-auto w-full",
            after_image: {
              text: [
                "The research I conducted revealed significant shortcomings in the UX design of the Wishlist feature, particularly in terms of navigation difficulties. A key pain point was the lack of easy and free navigation. To tackle this issue, I added a search bar, enabling users to easily locate their desired items without the need for excessive scrolling.",
              ],
            },
          },
          {
            sub_heading: "Wishlist - Grid Layout",
            url: "https://miro.medium.com/v2/resize:fit:1200/format:webp/1*qItt_5UIcXI6ZEh5T9VhPQ.gif",
            alt: "Pretty Little Shop",
            style:
              "aspect-ratio: 16/9 h-[500px] object-cover  mx-auto w-[500px]",
            after_image: {
              text: [
                "Recognizing that users often have numerous items in their wishlist, I observed that a single item occupies a considerable amount of visual space on the screen. To address this, I found it beneficial to implement the '3 items per row' feature in the wishlist as well. This modification allows users to have a clearer and more condensed overview of the items in their wishlist.",
              ],
            },
          },
          {
            sub_heading: "Wishlist - Filter option",
            url: "https://miro.medium.com/v2/resize:fit:1200/format:webp/1*HIquR7ozJXhIfSlQXUu64Q.gif",
            alt: "Pretty Little Shop",
            style:
              "aspect-ratio: 16/9 h-[500px] object-cover  mx-auto w-[500px]",
            after_image: {
              text: [
                "In my research, I discovered that users expressed a desire to view the items that have been in their wishlist the longest. In response to this feedback, I implemented a 'sort' function that offers users various options, including sorting items by the date added - oldest to newest or vice versa. This addition allows users to organize their wishlist based on their preferences and the length of time items have been added.",
              ],
            },
          },
        ],
      },
    ],
  },
];
export const conclusion_data: ConclusionData = {
  text: [
    "I learnt a lot from this project, one of which was the importance of phrasing interview questions correctly as this is the make or break between how users will answer your questions giving you the information you need to analyse.",
  ],

  after_text: [
    "I also learnt the importance of sticking to the basics. Doing things the unconventional way sometimes is not the best as users do not like to learn new things.",
    "Thanks for reading, have a great day!😄",
  ],
};
