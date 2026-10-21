import { STICKERS } from '@/components/stickers';
import { t } from '@/lib/t';

/**
 * An inline mention of a project, with its sticker, in square brackets.
 * Links to the project's row in Work & projects, which opens it.
 */
function ProjectMention({
    id,
    children,
}: {
    id: keyof typeof STICKERS;
    children: string;
}) {
    const sticker = STICKERS[id];
    return (
        <span className="text-[0.75em] leading-none whitespace-nowrap">
            <a
                href={`#row-${id}`}
                data-hover-none
                aria-label={`Project: ${children}`}
                className={t({
                    layout: 'group rounded-md px-px text-muted squircle',
                    hover: 'transition-colors duration-160 ease-(--ease-out) hover:bg-highlight hover:text-fg',
                })}
            >
                [
                <svg
                    viewBox="0 0 40 40"
                    aria-hidden="true"
                    style={{ rotate: sticker.rotate }}
                    className={t({
                        layout: 'mr-0.75 ml-px inline-block size-[1.55em] overflow-visible align-[-0.42em]',
                        look: 'sticker group-hover:sticker-lifted group-focus-visible:sticker-lifted',
                        hover: 'transition-[rotate,scale,translate,filter] duration-320 ease-(--ease-spring) group-hover:-translate-y-px group-hover:scale-130 group-hover:rotate-0! group-focus-visible:scale-130 group-focus-visible:rotate-0! motion-reduce:rotate-0!',
                    })}
                >
                    {sticker.svg}
                </svg>
                {children}]
            </a>
        </span>
    );
}

export default ProjectMention;
