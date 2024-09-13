import ProjectOverviewWithAnimatedModalComponent from '@/components/project-overview-with-animated-modal'

// Define the type for the component props
interface ProjectCardProps {
  title: string;
  description: string;
  isMarkDown: boolean;
}

export default function ProjectCard({ title, description, isMarkDown }: ProjectCardProps) {
  return (
    <div className="bg-gray-100 p-6 rounded-lg">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-700">{description}</p>
      {/* Pass the prop correctly */}
      <ProjectOverviewWithAnimatedModalComponent isMarkDown={isMarkDown} />
    </div>
  )
}
