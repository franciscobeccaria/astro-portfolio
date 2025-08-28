import ReactMarkdown from "react-markdown"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"
import { Button } from "./ui/button"
import { vationContent } from "@/data/vation-content"

interface VationDescriptionProps {
  lang?: 'es' | 'en';
}

export default function VationDescription({ lang = 'es' }: VationDescriptionProps) {
  const content = vationContent[lang];
  return (
    <>
      <ReactMarkdown className="prose max-w-none">
        {content.generalDescription}
      </ReactMarkdown>
      <ReactMarkdown className="prose max-w-none">
        {content.exploreDescription}
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
        {content.myResearchDescription}
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
        {content.otherFeaturesDescription}
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
        {content.techDescription}
      </ReactMarkdown>
      <ReactMarkdown className="prose max-w-none">
        {content.impactDescription}
      </ReactMarkdown>
    </>
  )
}
