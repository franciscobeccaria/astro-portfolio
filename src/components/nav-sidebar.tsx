import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Menu, X } from 'lucide-react'

export default function NavSidebarComponent({toggleButtonClassName}) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleSidebar = () => setIsOpen(!isOpen)

  return (
    <>
      <Button onClick={toggleSidebar} aria-label={isOpen ? "Close menu" : "Open menu"} variant="ghost" size="icon" className={toggleButtonClassName}>
        <Menu className="h-6 w-6" />
        <span className="sr-only">Menu</span>
      </Button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <button
          onClick={toggleSidebar}
          className="absolute top-4 right-4 p-2 text-gray-600 hover:text-gray-800 focus:outline-none"
          aria-label="Close menu"
        >
          <X size={24} />
        </button>
        <nav className="flex flex-col h-full pt-20 px-4">
          <a href="/" className="py-2 text-lg font-medium text-gray-800 hover:text-blue-600">Home</a>
          <a href="/projects" className="py-2 text-lg font-medium text-gray-800 hover:text-blue-600">Projects</a>
          <a href="/about" className="py-2 text-lg font-medium text-gray-800 hover:text-blue-600">About Me</a>
          <a href="/contact" className="py-2 text-lg font-medium text-gray-800 hover:text-blue-600">Contact</a>
        </nav>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleSidebar}
        />
      )}
    </>
  )
}