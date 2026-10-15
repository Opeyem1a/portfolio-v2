import type { Project } from '@/data/projects';
import CornerArrow from '@/assets/corner-arrow.svg';

export default function ProjectRow({
    title,
    subtitle,
    category,
    description,
    links,
    skills,
}: Project) {
    return (
        <div className="flex flex-col gap-4 border-b border-fg/10 px-2 py-10 transition-[border-color] hover:border-fg/50 tablet:py-16 desktop:flex-row">
            <div className="flex flex-1 flex-col-reverse justify-between gap-2 desktop:flex-col desktop:gap-6">
                <p className="w-fit font-heading text-[3rem] leading-[125%] tablet:text-[3.6rem] desktop:max-w-[10ch]">
                    {title}
                </p>
                <p className="leading-[160%] opacity-50">{subtitle}</p>
            </div>
            <div className="flex flex-1 flex-col gap-9 pt-4 tablet:flex-row">
                <div className="flex flex-1 flex-col justify-between gap-8">
                    <p className="hidden text-[1.25rem] leading-[160%] tablet:block">
                        {category}
                    </p>
                    <div
                        data-hover-none
                        className="flex flex-col gap-2 tablet:gap-1"
                    >
                        {links.map(({ label, href }) => (
                            <a
                                key={href}
                                href={href}
                                target="_blank"
                                className="w-fit leading-[160%] text-fg uppercase after:block after:h-[3px] after:origin-left after:scale-x-0 after:bg-primary after:transition-transform after:ease-out hover:after:scale-x-100 motion-reduce:after:transition-none dark:text-primary dark:after:bg-fg"
                            >
                                {label}&nbsp;&nbsp;
                                <CornerArrow className="inline h-[0.75em] w-auto align-baseline [&_*]:fill-primary dark:[&_*]:fill-fg" />
                            </a>
                        ))}
                    </div>
                </div>
                <div className="flex flex-1 flex-col justify-between gap-8">
                    <p className="max-w-[45ch] leading-[160%]">{description}</p>
                    {skills && (
                        <ul className="flex max-w-[45ch] flex-wrap gap-2">
                            {skills.map((skill) => (
                                <li
                                    key={skill}
                                    className="rounded-2xl bg-fg/10 px-3 py-1.5 text-[0.75rem] leading-[160%]"
                                >
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
}
