import ReactMarkdown from "react-markdown"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"
import { Button } from "./ui/button"
import { presusContent } from "@/data/presus-content"

interface PresusDescriptionProps {
  lang?: 'es' | 'en';
}

export default function PresusDescription({ lang = 'es' }: PresusDescriptionProps) {
  const content = presusContent[lang];
  return (
    <>
      <ReactMarkdown className="prose max-w-none">
        {content.generalDescription}
      </ReactMarkdown>
      
      <div className="h-[400px]">
        <Tabs defaultValue="dashboard">
          <TabsList className="inline-flex w-full sm:w-auto flex-wrap justify-center sm:justify-normal space-x-4 sm:space-x-0 h-[90px] sm:h-[auto]">
            <TabsTrigger value="dashboard">{content.tabLabels.dashboard}</TabsTrigger>
            <TabsTrigger value="presupuestos">{content.tabLabels.budgets}</TabsTrigger>
            <TabsTrigger value="transacciones">{content.tabLabels.transactions}</TabsTrigger>
            <TabsTrigger value="mediosPago">{content.tabLabels.paymentMethods}</TabsTrigger>
          </TabsList>
          <TabsContent className="mx-auto max-w-[640px]" value="dashboard"><img src="/presus/dashboard.webp" /></TabsContent>
          <TabsContent className="mx-auto max-w-[640px]" value="presupuestos"><img src="/presus/presupuestos.webp" /></TabsContent>
          <TabsContent className="mx-auto max-w-[640px]" value="transacciones"><img src="/presus/transacciones.webp" /></TabsContent>
          <TabsContent className="mx-auto max-w-[640px]" value="mediosPago"><img src="/presus/medios-pago.webp" /></TabsContent>
        </Tabs>
      </div>
      
      
      <ReactMarkdown className="prose max-w-none">
        {content.impactDescription}
      </ReactMarkdown>
      
      <div className="flex flex-col sm:flex-row gap-4 mt-6">
        <Button variant="gradientPrimary" asChild>
          <a href="https://presus.vercel.app" target="_blank" rel="noopener noreferrer">
            {content.buttons.viewApp}
          </a>
        </Button>
        <div className="text-sm text-muted-foreground self-center">
          {content.buttons.betaNote}
        </div>
      </div>
    </>
  )
}