import Button from '@/components/button';
import ProjectMention from '@/components/project-mention';
import SmileBlock from '@/components/smile-block';
import { EMAIL, GITHUB_LINK, LINKEDIN_LINK, RESUME_LINK } from '@/data/links';
import { t } from '@/lib/t';

/**
 * The first screen: name, smile block, about me and contact links. Fills the
 * screen (minus the page's top padding), so the links sit at the bottom and
 * the next section starts below the fold. The smile block takes spare height
 * first, up to 2:1, then the space above the links.
 */
function Intro() {
    return (
        <div className="[container-type:inline-size] flex min-h-[calc(100svh-4rem)] flex-col gap-14 pb-8 max-sm:min-h-[calc(100svh-3rem)] max-sm:gap-8">
            <header
                className={t({
                    layout: 'flex items-baseline justify-between gap-3 pb-1 max-sm:flex-col max-sm:gap-1.5',
                    font: 'text-md',
                })}
            >
                <h1 className="font-semibold tracking-tight">Opey Adeyemi</h1>
                <p className="text-muted">Product engineer</p>
            </header>

            <SmileBlock />

            <div className="flex grow flex-col gap-6 text-lg">
                <p>
                    Howdy, I’m Opey. I care about doing novel things in fun
                    ways. I talk a lot, so I collect good questions to ask new
                    people <ProjectMention id="wdyt">WDYT</ProjectMention>. I
                    also write a newsletter for fun{' '}
                    <ProjectMention id="lovely">
                        Something Lovely
                    </ProjectMention>
                    . On a normal day, I’m probably overthinking how to do
                    something in my life more intentionally.
                </p>
                <p>
                    Right now I lead a few products at Rokt Aftersell, mainly
                    our cart{' '}
                    <ProjectMention id="aftersell">
                        Aftersell Cart
                    </ProjectMention>
                    . Before that, I built community-based recruiting at a
                    startup that’s since closed{' '}
                    <ProjectMention id="pallet">Pallet</ProjectMention>, and
                    researched better ways to form student teams (sounds easy,
                    it’s not){' '}
                    <ProjectMention id="teamable">Teamable</ProjectMention>.
                </p>

                <div className="mt-auto -ml-2.5 flex flex-wrap items-center gap-1">
                    <Button variant="ghost" href={`mailto:${EMAIL}`}>
                        Email me
                    </Button>
                    <Button variant="ghost" href={GITHUB_LINK}>
                        GitHub
                    </Button>
                    <Button variant="ghost" href={LINKEDIN_LINK}>
                        LinkedIn
                    </Button>
                    <Button variant="ghost" href={RESUME_LINK}>
                        Resume
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Intro;
