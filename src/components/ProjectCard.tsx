// src/components/ProjectCard.tsx
type Props = {
    title: string
    description: string
    tech: string[]
  }
  
  export default function ProjectCard({ title, description, tech }: Props) {
    return (
      <div className="border rounded-xl p-6 shadow-sm hover:shadow-md transition bg-white">
        <h2 className="text-xl font-semibold text-blue-600">{title}</h2>
        <p className="mt-2 text-gray-700">{description}</p>
        <div className="mt-4 text-sm text-gray-500">
          <strong>Tech:</strong> {tech.join(', ')}
        </div>
      </div>
    )
  }
  