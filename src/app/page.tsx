import Landing from '@/app/_sections/landing';
import About from '@/app/_sections/about';
import Projects from '@/app/_sections/projects';

export default function Home() {
    return (
        <main className="flex flex-col items-center gap-6 px-7 min-[1400px]:px-0">
            <Landing />
            <About />
            <Projects />
            <footer className="flex w-full items-center justify-end gap-4 py-12">
                <div className="h-4 w-full rounded-[3px] bg-fg/5" />
                <p className="flex shrink-0 items-baseline gap-1 leading-[160%]">
                    ✨&nbsp;by Opey
                    <span className="text-[0.6rem] leading-[160%] opacity-50">
                        (naturally)
                    </span>
                </p>
            </footer>
        </main>
    );
}
