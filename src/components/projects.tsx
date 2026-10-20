'use client';

import { useEffect, useState } from 'react';
import SectionDivider from '@/components/section-divider';
import { PROJECTS } from '@/data/projects';
import { t } from '@/lib/t';

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
        <section className="flex flex-col">
            <div className="mb-8">
                <SectionDivider number="01" title="Work & projects" />
            </div>
            {PROJECTS.map((project) => {
                const open = openId === project.id;
                return (
                    <div
                        key={project.id}
                        id={`row-${project.id}`}
                        data-open={open || undefined}
                        className="group scroll-mt-6 border-t border-line"
                    >
                        <button
                            onClick={() => setOpenId(open ? null : project.id)}
                            aria-expanded={open}
                            aria-controls={`acc-${project.id}`}
                            className={t({
                                layout: 'group/row grid w-full cursor-pointer grid-cols-[180px_minmax(0,1fr)_auto_14px] items-baseline gap-4 py-2.5 text-left',
                                mobile: 'max-sm:grid-cols-[minmax(0,1fr)_14px] max-sm:gap-x-3 max-sm:gap-y-0.5',
                                font: 'text-base',
                            })}
                        >
                            <span
                                className={t({
                                    font: 'justify-self-start font-semibold tracking-tight max-sm:col-start-1',
                                    // A yellow marker while open; no underline, so it never reads as a link
                                    color: '-mx-1.5 rounded-md px-1.5 transition-colors duration-200 ease-(--ease-out) squircle group-data-open:bg-sun group-data-open:text-ink',
                                })}
                            >
                                {project.name}
                            </span>
                            <span className="text-muted transition-colors duration-200 ease-(--ease-out) group-data-open:text-fg max-sm:col-start-1">
                                {project.summary}
                            </span>
                            {/* Phones show the kind only once the row is open */}
                            <span className="text-sm text-faint max-sm:col-start-1 max-sm:hidden max-sm:group-data-open:block">
                                {project.kind}
                            </span>
                            <svg
                                viewBox="0 0 12 12"
                                aria-hidden="true"
                                className={t({
                                    size: 'size-3 self-center text-muted',
                                    mobile: 'max-sm:col-start-2 max-sm:row-start-1',
                                    open: 'transition-transform duration-200 ease-(--ease-out) group-data-open:rotate-180',
                                })}
                            >
                                <path
                                    d="M2.5 4.5L6 8l3.5-3.5"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.6"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </button>
                        {/* Rows animate open via grid-template-rows 0fr -> 1fr. */}
                        <div
                            id={`acc-${project.id}`}
                            className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-220 ease-(--ease-out) group-data-open:grid-rows-[1fr]"
                        >
                            <div
                                className={t({
                                    layout: 'min-h-0 overflow-hidden',
                                    // Hidden from tab order and screen readers while closed
                                    visibility:
                                        'invisible transition-[visibility] delay-220 group-data-open:visible group-data-open:delay-0',
                                })}
                            >
                                <div
                                    className={t({
                                        layout: 'flex flex-col gap-2.5 pt-1.5 pb-4 pl-49 max-sm:pl-0',
                                        font: 'text-md text-pretty text-muted',
                                    })}
                                >
                                    <p>{project.description}</p>
                                    <p className="text-xs text-faint">
                                        {project.stack}
                                    </p>
                                    <span className="mt-2 flex flex-wrap gap-2">
                                        {project.links.map(
                                            ({ label, href }) => (
                                                <a
                                                    key={href}
                                                    href={href}
                                                    className={t({
                                                        layout: 'rounded-xl px-3 py-1.5 squircle',
                                                        // A faint button that fills in on hover, like Sign
                                                        color: 'bg-surface-2 text-md text-fg hover:bg-fg hover:text-bg',
                                                        motion: 'transition-colors duration-160 ease-(--ease-out)',
                                                    })}
                                                >
                                                    {label}
                                                </a>
                                            )
                                        )}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </section>
    );
}
