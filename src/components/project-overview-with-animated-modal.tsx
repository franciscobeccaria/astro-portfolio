import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Film, X } from "lucide-react"
import ReactMarkdown from 'react-markdown'

// Custom renderer for images
const ImageRenderer = ({ src, alt }) => (
  <div className="my-4">
    <img src={src} alt={alt} className="rounded-lg h-[400px] w-[800px]" />
  </div>
)

// Custom renderer for videos
const VideoRenderer = ({ src }) => (
  <div className="my-4">
    <video controls className="w-full rounded-lg">
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
)

const markdownContent = `
# Filmo - Movie and TV Show Tracker

## Project Overview

Filmo is a comprehensive web application designed for movie and TV show enthusiasts. It allows users to search, track, and create custom lists of their favorite content.

### Key Features

- **Search Functionality**: Users can search for any movie or TV show in our extensive database.
- **Custom Lists**: Create personalized lists like "Best Movies Ever" or "Weekend Binge-Watch".
- **Default Lists**: Utilize pre-set lists such as "Want-To-See" and "Seen-It" for quick organization.
- **User Authentication**: Secure sign-up and login process for a personalized experience.

## Technical Deep Dive

### Frontend Technologies

- **React**: Our core framework, providing a robust and efficient component-based architecture.
- **Redux**: For state management, ensuring a predictable state across the application.
- **styled-components**: Used for component-level styling, promoting a clean and maintainable CSS approach.

### Backend and Database

- **Firebase**: Handles user authentication, providing a secure and scalable solution.
- **Firestore**: Our database of choice for storing user-specific data like custom lists.

### API Integration

We leverage TheMovieDB API to fetch an up-to-date and comprehensive database of movies and TV shows.

## User Interface

Below is a screenshot of our trending movies section:

![Filmo Trending Movies](/placeholder.svg?height=400&width=800)

## Video Demo

Check out this short video demonstrating the app's core functionalities:

<video src="/demo-video.mp4" />

## Future Enhancements

1. Implement a recommendation system based on user preferences.
2. Add social features to share lists with friends.
3. Integrate with streaming platforms to show where content is available.

We're constantly working to improve Filmo and welcome feedback from our user community!
`

export default function ProjectOverviewWithAnimatedModalComponent({ isMarkDown = false }) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const modalRef = useRef(null)

  const technologies = [
    { icon: "⚛️", name: "React" },
    { icon: "🔄", name: "Redux" },
    { icon: "🔥", name: "Firebase" },
    { icon: "💅", name: "styled-components" },
    { icon: "🚀", name: "Next.js" },
    { icon: "🌐", name: "GraphQL" },
    { icon: "🎨", name: "Tailwind CSS" },
    { icon: "📱", name: "React Native" },
  ]

  const shouldUseColumns = technologies.length > 4

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsModalOpen(false)
      }
    }

    if (isModalOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isModalOpen])

  return (
    <>
      <Button 
        size="lg" 
        onClick={() => setIsModalOpen(true)}
        className="text-lg px-6 py-3 bg-white text-blue-600 hover:bg-blue-50 transition-colors duration-300"
      >
        Open Project Overview
      </Button>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-start justify-center p-4 overflow-y-auto"
          >
            <motion.div
              ref={modalRef}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 15, stiffness: 100 }}
              className="relative w-full max-w-4xl my-8"
            >
              <Card className="w-full max-h-[90vh] overflow-hidden">
                <CardContent className="p-6">
                  <motion.div 
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="flex justify-between items-center mb-6 sticky top-0 bg-background z-10 py-2"
                  >
                    <div className="flex items-center">
                      <Film className="w-8 h-8 mr-2 text-primary" />
                      <h1 className="text-4xl font-bold">Filmo</h1>
                    </div>
                    <Button variant="ghost" size="icon" onClick={() => setIsModalOpen(false)}>
                      <X className="h-6 w-6" />
                    </Button>
                  </motion.div>
                  
                  <ScrollArea className="h-[calc(90vh-8rem)] pr-4 pb-6">
                    <motion.div 
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6"
                    >
                      <div>
                        <h2 className="text-xl font-semibold mb-2">Technologies:</h2>
                        <ul className={`space-y-1 ${shouldUseColumns ? 'columns-2' : ''}`}>
                          {technologies.map((tech, index) => (
                            <motion.li 
                              key={index} 
                              initial={{ x: -10, opacity: 0 }}
                              animate={{ x: 0, opacity: 1 }}
                              transition={{ delay: 0.1 * index }}
                              className="flex items-center break-inside-avoid"
                            >
                              <span className="mr-2">{tech.icon}</span> {tech.name}
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex flex-col space-y-4 md:items-end">
                        <motion.div 
                          initial={{ x: 20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 0.3 }}
                          className="w-full md:w-40"
                        >
                          <Button className="w-full">Visit site</Button>
                        </motion.div>
                        <motion.div 
                          initial={{ x: 20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 0.4 }}
                          className="w-full md:w-40"
                        >
                          <Button variant="outline" className="w-full">See Repository</Button>
                        </motion.div>
                      </div>
                    </motion.div>
                    
                    {isMarkDown ? (
                      <motion.div 
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="prose max-w-none"
                      >
                        <ReactMarkdown
                          components={{
                            img: ImageRenderer,
                            video: VideoRenderer
                          }}
                        >
                          {markdownContent}
                        </ReactMarkdown>
                      </motion.div>
                    ) : (
                      <>
                        <motion.div 
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.5 }}
                          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6"
                        >
                          <div>
                            <h2 className="text-xl font-semibold mb-2">General Description:</h2>
                            <p>On this app you can search any movie or tv show. You can sign up and create custom lists, like Best Movies Ever. Also, you can use the default lists: Want-To-See and Seen-It.</p>
                          </div>
                          <div>
                            <h2 className="text-xl font-semibold mb-2">Tech Description:</h2>
                            <p>The Movies/TV Shows database is extracted from TheMovieDB API. The user authentication is through Firebase. And I saved the users lists on Firestore. In this project I used React, React-Router, Redux, styled-components, axios, among others technologies or libraries.</p>
                          </div>
                        </motion.div>
                        
                        <motion.div
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.6 }}
                        >
                          <img
                            src="/placeholder.svg"
                            alt="Filmo App Screenshot"
                            className="w-full rounded-lg shadow-lg h-[400px] w-[800px]"
                          />
                        </motion.div>
                      </>
                    )}
                  </ScrollArea>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}