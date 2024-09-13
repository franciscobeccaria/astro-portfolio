import { Button } from "@/components/ui/button"
import { Mail } from 'lucide-react'

export default function ContactSection() {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
        <Button className="bg-white text-gray-900 hover:bg-gray-200">
          <Mail className="mr-2 h-4 w-4" /> Contact Me
        </Button>
      </div>
    </section>
  )
}
