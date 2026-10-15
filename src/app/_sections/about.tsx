import type { ComponentType, SVGProps } from 'react';
import SectionHeading from '@/components/section-heading';
import SmileBlock from '@/components/smile-block';
import CornerArrow from '@/assets/corner-arrow.svg';
import AfterEffectsIcon from '@/assets/icons/after-effects.svg';
import CircleCiIcon from '@/assets/icons/circle-ci.svg';
import Css3Icon from '@/assets/icons/css3.svg';
import DjangoIcon from '@/assets/icons/django.svg';
import DockerIcon from '@/assets/icons/docker.svg';
import FigmaIcon from '@/assets/icons/figma.svg';
import GraphQlIcon from '@/assets/icons/graphql.svg';
import Html5Icon from '@/assets/icons/html5.svg';
import JavaScriptIcon from '@/assets/icons/javascript.svg';
import JetBrainsIcon from '@/assets/icons/jetbrains.svg';
import NextJsIcon from '@/assets/icons/nextjs.svg';
import NpmIcon from '@/assets/icons/npm.svg';
import PostgresSqlIcon from '@/assets/icons/postgressql.svg';
import PythonIcon from '@/assets/icons/python.svg';
import ReactJsIcon from '@/assets/icons/react.svg';
import SassIcon from '@/assets/icons/sass.svg';
import TypeScriptIcon from '@/assets/icons/typescript.svg';
import YarnIcon from '@/assets/icons/yarn.svg';
import { t } from '@/lib/t';

// `mono` icons have no brand colour, so they stay monochrome on hover.
const SKILLS: {
    name: string;
    Icon: ComponentType<SVGProps<SVGSVGElement>>;
    mono?: boolean;
}[] = [
    { name: 'Next.js', Icon: NextJsIcon, mono: true },
    { name: 'React', Icon: ReactJsIcon },
    { name: 'TypeScript', Icon: TypeScriptIcon },
    { name: 'JavaScript', Icon: JavaScriptIcon },
    { name: 'GraphQL', Icon: GraphQlIcon },
    { name: 'Python', Icon: PythonIcon },
    { name: 'Django', Icon: DjangoIcon, mono: true },
    { name: 'HTML5', Icon: Html5Icon },
    { name: 'CSS3', Icon: Css3Icon },
    { name: 'Sass', Icon: SassIcon },
    { name: 'PostgreSQL', Icon: PostgresSqlIcon },
    { name: 'CircleCI', Icon: CircleCiIcon, mono: true },
    { name: 'Docker', Icon: DockerIcon },
    { name: 'Yarn', Icon: YarnIcon },
    { name: 'npm', Icon: NpmIcon },
    { name: 'After Effects', Icon: AfterEffectsIcon, mono: true },
    { name: 'Figma', Icon: FigmaIcon },
    { name: 'JetBrains', Icon: JetBrainsIcon, mono: true },
];

const paragraph = t({
    width: 'max-w-[48ch]',
    font: 'text-[1.1rem] leading-[160%] font-light tablet:text-[1.25rem]',
});

export default function About() {
    return (
        <section id="section-about" className="min-h-screen w-full py-9">
            <div className="flex min-h-[calc(100vh-4.5rem)] flex-col gap-6 tablet:gap-9">
                <SectionHeading title="About" />
                <div className="flex grow gap-10 desktop:gap-21">
                    <div className="flex w-full flex-col justify-between gap-8">
                        <div className="flex flex-col gap-[32px]">
                            <p
                                className={t({
                                    size: 'text-[2.75rem] tablet:text-[3rem] desktop:text-[3.5rem]',
                                    font: 'leading-[125%] font-medium',
                                })}
                            >
                                I care about doing things well.
                            </p>
                            <p className={paragraph}>
                                Technology is an art that I practice. I want
                                things to work in beautiful ways, accomplishing
                                their goals while adding some fun. I&apos;m
                                passionate about finding novel solutions to
                                problems and building software that people love
                                to use.
                            </p>
                            <p className={paragraph}>
                                I do this by working as a designer, as an
                                engineer, as whatever is necessary, to infuse my
                                <a
                                    href="#section-projects"
                                    data-hover-none
                                    className={t({
                                        layout: 'group inline-flex items-baseline gap-[0.35rem]',
                                        spacing: 'mx-1 px-2 tablet:mx-[0.4rem]',
                                        shape: 'rounded-[0.25em] border border-fg/5 bg-fg/7',
                                        font: 'text-[0.9em] font-bold capitalize',
                                        hover: 'transition-colors hover:border-primary hover:bg-primary hover:text-ink',
                                    })}
                                >
                                    projects
                                    <CornerArrow
                                        className={t({
                                            size: 'h-[0.7em] w-auto',
                                            fill: '[&_*]:fill-fg [&_*]:transition-[fill] group-hover:[&_*]:fill-ink',
                                        })}
                                    />
                                </a>
                                with whimsy and purpose.
                            </p>
                        </div>
                        <div className="flex flex-col gap-[16px]">
                            <p className="leading-[160%] font-bold text-fg/50 uppercase">
                                Working with
                            </p>
                            <ul
                                data-hover-none
                                className="flex max-w-[40ch] flex-wrap gap-3"
                            >
                                {SKILLS.map(({ name, Icon, mono }) => (
                                    <li key={name}>
                                        <Icon
                                            role="img"
                                            aria-label={name}
                                            className={t({
                                                size: 'h-6 w-auto tablet:h-8',
                                                opacity:
                                                    'opacity-50 hover:opacity-100',
                                                // Monochrome until hovered
                                                fill: '[&_:is(path,circle,rect)]:transition-[fill] [&:not(:hover)_:is(path,circle,rect)]:fill-fg',
                                                mono: mono
                                                    ? 'hover:fill-fg hover:[&_*]:fill-fg'
                                                    : '',
                                            })}
                                        />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="flex w-full flex-col [@media(max-width:400px)]:hidden">
                        <SmileBlock />
                    </div>
                </div>
            </div>
        </section>
    );
}
