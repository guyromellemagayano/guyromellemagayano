import Seo from '@/components/Seo'
import SimpleLayout from '@/components/layouts/Simple'
import { ProjectsList, ProjectsListCards } from '@/components/lists/List'
import ProjectsData from '@/data/projects'
import type { NextPage } from 'next'

// Projects page
const Projects: NextPage = (): React.ReactNode => {
    // Desctructure the data from ProjectsData function
    const { meta, hero, projects } = ProjectsData()

    return (
        <>
            <Seo meta={meta} />

            <SimpleLayout id="hero" title={hero.heading} intro={hero.description}>
                <ProjectsList>
                    {projects.map((project) => (
                        <ProjectsListCards key={project.name} project={project} />
                    ))}
                </ProjectsList>
            </SimpleLayout>
        </>
    )
}

export default Projects
