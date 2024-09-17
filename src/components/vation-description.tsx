import ReactMarkdown from "react-markdown"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"
import { Button } from "./ui/button"

const generalDescription = `
### General Description

The Vation Innovation Platform connects thousands of companies working on fresh ideas and tech solutions. It makes research easier, speeds up connections across the tech world, and boosts collaboration within your team. 
`

const exploreDescription = `### Exploring the platform`

const myResearchDescription = `### Exploring My Research`

const otherFeaturesDescription = `### Exploring the rest of features`

const techDescription = `
### Tech Description

The project was developed using **Next.js**, taking full advantage of its server-side rendering (SSR) capabilities, static site generation, and performance optimizations. I integrated **TailwindCSS** for rapid and maintainable styling.

Key dependencies:

* **Auth0**: Managed secure authentication and authorization.
* **DraftJS**: Provided rich text editing features for dynamic content creation.
* **React PDF Renderer**: Generated and displayed PDF documents directly from React components.
* **Sanity**: Integrated a headless CMS for managing and updating dynamic content.
* **React Query**: Handled efficient data fetching, caching, and synchronization with API endpoints.
* **Axios**: Simplified server communication with robust HTTP client features.
* **Lightweight Charts and Recharts**: Implemented interactive data visualizations for analyzing trends.
* **React Hook Form**: Managed form state efficiently with validation and minimal re-renders.
* **Sass**: Enhanced styling capabilities alongside Tailwind for complex UI elements.
* **Storybook**: Developed and tested UI components in isolation to ensure consistency.
`

const impactDescription = `
### Impact on the Project

I led the frontend development of the Vation platform from the start, working with a dedicated frontend team and collaborating closely with the Head of Product, Project Manager, QA, backend (Ruby on Rails), and designers. I introduced Next.js and TailwindCSS, marking the **first time** these technologies were used in the company.

One of my key contributions was transitioning the platform from server-side rendering to **static pages**, which significantly improved load times and performance, a change the client appreciated. I also supported the design team using Figma to ensure smooth implementation of designs.

I was in daily communication with the client from the US, building strong trust with the **Head of Product** and ensuring we delivered on all goals effectively.
`

export default function VationDescription() {
  return (
    <>
      <ReactMarkdown className="prose max-w-none">
        {generalDescription}
      </ReactMarkdown>
      <ReactMarkdown className="prose max-w-none">
        {exploreDescription}
      </ReactMarkdown>
      <div className="h-[360px] sm:h-[560px]">
        <Tabs defaultValue="explore">
          <TabsList className="inline-flex w-full sm:w-auto flex-wrap justify-center sm:justify-normal space-x-4 sm:space-x-0 h-[90px] sm:h-[auto]">
            <TabsTrigger value="explore">Explore</TabsTrigger>
            <TabsTrigger value="landscapes">Landscapes</TabsTrigger>
            <TabsTrigger value="sectors">Sectors</TabsTrigger>
            <TabsTrigger value="useCases">Use Cases</TabsTrigger>
            <TabsTrigger value="companies">Companies</TabsTrigger>
          </TabsList>
          <TabsContent className="mx-auto max-w-[640px]" value="explore"><img src="/vation/explore.webp" /></TabsContent>
          <TabsContent className="mx-auto max-w-[640px]" value="landscapes"><img src="/vation/landscape.webp" /></TabsContent>
          <TabsContent className="mx-auto max-w-[640px]" value="sectors"><img src="/vation/sector.webp" /></TabsContent>
          <TabsContent className="mx-auto max-w-[640px]" value="useCases"><img src="/vation/use-case.webp" /></TabsContent>
          <TabsContent className="mx-auto max-w-[640px]" value="companies"><img src="/vation/company.webp" /></TabsContent>
        </Tabs>
      </div>
      <ReactMarkdown className="prose max-w-none">
        {myResearchDescription}
      </ReactMarkdown>
      <div className="h-[360px] sm:h-[500px]">
        <Tabs defaultValue="reports">
          <TabsList className="inline-flex w-full sm:w-auto flex-wrap justify-center sm:justify-normal space-x-4 sm:space-x-0 h-[90px] sm:h-[auto]">
            <TabsTrigger value="reports">Reports</TabsTrigger>
            <TabsTrigger value="lists">Lists</TabsTrigger>
            <TabsTrigger value="matrices">Matrices</TabsTrigger>
            <TabsTrigger value="marketMaps">Market Maps</TabsTrigger>
            <TabsTrigger value="tags">Tags</TabsTrigger>
          </TabsList>
          <TabsContent className="mx-auto max-w-[640px]" value="reports"><img src="/vation/report.webp" /></TabsContent>
          <TabsContent className="mx-auto max-w-[640px]" value="lists"><img src="/vation/list-zoomed.webp" /></TabsContent>
          <TabsContent className="mx-auto max-w-[640px]" value="matrices"><img src="/vation/matrix-zoomed.webp" /></TabsContent>
          <TabsContent className="mx-auto max-w-[640px]" value="marketMaps"><img src="/vation/market-map-zoomed.webp" /></TabsContent>
          <TabsContent className="mx-auto max-w-[640px]" value="tags"><img src="/vation/tags-zoomed.webp" /></TabsContent>
        </Tabs>
      </div>
      <ReactMarkdown className="prose max-w-none">
        {otherFeaturesDescription}
      </ReactMarkdown>
      <div className="h-[360px] sm:h-[510px]">
        <Tabs defaultValue="search">
          <TabsList className="inline-flex w-full sm:w-auto flex-wrap justify-center sm:justify-normal space-x-4 sm:space-x-0 h-[120px] sm:h-[auto]">
            <TabsTrigger value="search">Advanced Search</TabsTrigger>
            <TabsTrigger value="vchat">vChat</TabsTrigger>
            <TabsTrigger value="selection">Selection</TabsTrigger>
            <TabsTrigger value="vationResearch">Vation Research (Blog)</TabsTrigger>
            <TabsTrigger value="login">Login with Auth0</TabsTrigger>
          </TabsList>
          <TabsContent className="mx-auto max-w-[700px]" value="search"><img src="/vation/advanced-search.webp" /></TabsContent>
          <TabsContent className="mx-auto max-w-[700px]" value="vchat"><img src="/vation/vchat.webp" /></TabsContent>
          <TabsContent className="mx-auto max-w-[700px]" value="selection"><img src="/vation/selection.webp" /></TabsContent>
          <TabsContent className="mx-auto max-w-[700px]" value="vationResearch"><img src="/vation/vation-research.webp" /></TabsContent>
          <TabsContent className="mx-auto max-w-[700px]" value="login"><img src="/vation/login.webp" /></TabsContent>
        </Tabs>
      </div>
      <ReactMarkdown className="prose max-w-none">
        {techDescription}
      </ReactMarkdown>
      <ReactMarkdown className="prose max-w-none">
        {impactDescription}
      </ReactMarkdown>
      <div className="flex items-center justify-center flex-col p-4 mt-16">
        <Button asChild variant="gradientPrimary">
          <a href="https://vation-frontend.vercel.app/" target="_blank" rel="noopener noreferrer">
            Only-Frontend Version
          </a>  
        </Button>
        <div>
          <p className="text-center mt-2 text-sm px-8">
            This version is for demonstration purposes only. It has been altered to work without the original API, so there may be bugs, and it does not fully represent the final product.
          </p>
        </div>
      </div>
    </>
  )
}