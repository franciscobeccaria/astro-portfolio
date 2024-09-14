import { useState, useEffect } from 'react'
import { Linkedin } from 'lucide-react'
import { Button } from "@/components/ui/button"
import NavSidebarComponent from "@/components/nav-sidebar"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-10 transition-all duration-300 ${isScrolled ? 'bg-gray-100 shadow-md' : 'bg-transparent'}`}>
      <div className="mx-auto px-4 py-3 flex items-center justify-between">
        <NavSidebarComponent toggleButtonClassName={isScrolled ? 'text-foreground hover:bg-slate-300' : 'text-primary-foreground'} />
        <nav className="flex items-center space-x-4">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="icon" className={`${isScrolled ? 'text-foreground hover:bg-slate-300' : 'text-primary-foreground'}`}>
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Button>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="icon" className={`${isScrolled ? 'text-foreground hover:bg-slate-300' : 'text-primary-foreground'}`}>
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Button>
          </a>
        </nav>
      </div>
    </header>
  )
}
