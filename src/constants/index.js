import {

  modernReactSite,
  ecommerce,
  crowdFundingBlockChain,
  openAIArticleSummary,
} from "../assets"


const projects = [
  {
    name: "Modern React Landing Page",
    description: "Modern example of a single React Landing Page.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: modernReactSite,
    source_code_link: "https://github.com/mattmoniz/modern_react_website",
    project_url: "https://main.dy8ptiuetuxsx.amplifyapp.com/",
  },
  {
    name: "ecommerce site",
    description:
      "Modern Ecommerce site built using NextJS for the front end and I built a Content Management System using Sanity. Finally, I was able to implement payment functionality using Stripe's API.",
    tags: [
      {
        name: "NextJS",
        color: "blue-text-gradient",
      },
      {
        name: "Sanity CMS",
        color: "green-text-gradient",
      },
      {
        name: "Stripe",
        color: "pink-text-gradient",
      },
    ],
    image: ecommerce,
    source_code_link: "https://github.com/mattmoniz/nextjs-ecommerce-app",
    project_url: "https://ecommerce-app-mattmoniz.vercel.app/",
  },
  {
    name: "Blockchain Crowdfunding site",
    description:
      "Demo Blockchain crowd funding site which allows users to create ro donate to demo campaigns using fake cryptocurrency.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "thirdweb",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: crowdFundingBlockChain,
    source_code_link: "https://github.com/mattmoniz/Crowdfunding-Blockchain",
    project_url: "https://mellifluous-centaur-e8704e.netlify.app/",
  },
  {
    name: "OpenAI Article Summarizer",
    description:
      "This page takes a URL to an lengthy article and summarizes it ",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "OpenAI",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: openAIArticleSummary,
    source_code_link: "https://github.com/mattmoniz/ai-reader",
    project_url: "https://lucky-marzipan-55ba96.netlify.app/",
  },
]

export { projects }
