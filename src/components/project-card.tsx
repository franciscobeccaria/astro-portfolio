import { useState } from 'react'
import ProjectOverviewWithAnimatedModalComponent from '@/components/project-overview-with-animated-modal'

export default function ProjectCard({ title, description, isMarkDown }) {
  const [isModalOpen, setModalOpen] = useState(false)

  return (
    <div className="bg-gray-100 p-6 rounded-lg">
      <h3 className="text-xl font-semibold mb-2">Filmo</h3>
      <p className="text-gray-700">A movie database application built with React and The Movie Database API.</p>
      <ProjectOverviewWithAnimatedModalComponent isMarkDown={isMarkDown} />
    </div>
  )
}
