import Footer from '@/components/footer';
import Guestbook from '@/components/guestbook';
import Intro from '@/components/intro';
import Projects from '@/components/projects';

function Home() {
    return (
        <div className="flex min-h-screen flex-col px-6 pt-16 pb-6 max-sm:pt-12">
            <main className="mx-auto flex w-full max-w-155 flex-1 flex-col gap-14 max-sm:gap-12">
                <Intro />
                <Projects />
                {/* Pushes the footer to the bottom, with generous space above */}
                <div className="flex flex-1 flex-col gap-30 max-sm:gap-20">
                    <Guestbook />
                    <Footer />
                </div>
            </main>
        </div>
    );
}

export default Home;
