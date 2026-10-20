'use client';

import { useEffect, useState } from 'react';
import ProjectRow from '@/components/project-row';
import Section from '@/components/section';
import { PROJECTS } from '@/data/projects';

const ROW_PREFIX = '#row-';

export default function Projects() {
    const [openId, setOpenId] = useState<string | null>(null);

    // References in the intro link to `#row-<id>`; following one opens that row.
    useEffect(() => {
        if (location.hash.startsWith(ROW_PREFIX)) {
            setOpenId(location.hash.slice(ROW_PREFIX.length));
        }
        const onClick = (e: MouseEvent) => {
            const href =
                e.target instanceof Element &&
                e.target.closest('a')?.getAttribute('href');
            if (href && href.startsWith(ROW_PREFIX)) {
                setOpenId(href.slice(ROW_PREFIX.length));
            }
        };
        document.addEventListener('click', onClick);
        return () => document.removeEventListener('click', onClick);
    }, []);

    return (
        <Section number="01" title="Work & projects">
            {PROJECTS.map((project) => (
                <ProjectRow
                    key={project.id}
                    project={project}
                    open={openId === project.id}
                    onToggle={() =>
                        setOpenId(openId === project.id ? null : project.id)
                    }
                />
            ))}
        </Section>
    );
}
