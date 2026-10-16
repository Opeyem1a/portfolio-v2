import SectionHeading from '@/components/section-heading';
import ProjectRow from '@/components/project-row';
import { PROJECTS } from '@/data/projects';

export default function Projects() {
    return (
        <section id="section-projects" className="w-full py-9">
            <div className="flex flex-col desktop:gap-4">
                <SectionHeading title="Projects" />
                <div className="flex flex-col">
                    {PROJECTS.filter((project) => !project.hidden).map(
                        (project) => (
                            <ProjectRow key={project.title} {...project} />
                        )
                    )}
                </div>
            </div>
        </section>
    );
}
