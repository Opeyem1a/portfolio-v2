export type Project = {
    id: string;
    name: string;
    summary: string;
    kind: string;
    description: string;
    stack: string;
    links: { label: string; href: string }[];
};

export const PROJECTS: Project[] = [
    {
        id: 'aftersell',
        name: 'Aftersell Cart',
        summary: 'Product lead at Rokt',
        kind: 'work',
        description:
            'A category-leading Shopify cart app doing $7M+ ARR inside Rokt’s $120M Aftersell unit. I lead the team building it, including an AI cart builder that cuts setup to under 5 minutes.',
        stack: 'React, Preact, Node.js, GCP, BigQuery',
        links: [
            {
                label: 'See Aftersell Cart',
                href: 'https://www.aftersell.com/cart',
            },
        ],
    },
    {
        id: 'wdyt',
        name: 'WDYT',
        summary: 'Good questions to ask new people',
        kind: 'side project',
        description:
            'I collect good questions and these are my favourites. I always love to chat about them, and I spent a lot of time styling these.',
        stack: 'Next.js, React, Tailwind CSS',
        links: [
            {
                label: 'Browse my favourite questions',
                href: 'https://wdyt.site',
            },
        ],
    },
    {
        id: 'lovely',
        name: 'Something Lovely',
        summary: 'A newsletter I write for fun',
        kind: 'side project',
        description:
            'A silly newsletter I send every so often, with big thoughts and small cool links.',
        stack: 'Next.js, React',
        links: [
            {
                label: 'Read the newsletter',
                href: 'https://somethinglovely.vercel.app',
            },
        ],
    },
    {
        id: 'exact',
        name: 'Exact',
        summary: 'Browse distracting sites on purpose',
        kind: 'side project',
        description:
            'Greys out images and videos on distracting sites until you hover. You can still do everything, you just have to do it on purpose. Built after Finite didn’t work that well.',
        stack: 'React, Tailwind CSS, Vite',
        links: [
            {
                label: 'Get the Firefox add-on',
                href: 'https://addons.mozilla.org/en-US/firefox/addon/exact-browse-with-intention/',
            },
            {
                label: 'Get the Chrome extension',
                href: 'https://chromewebstore.google.com/detail/exact-browse-with-intenti/ngidpmndfhgcipnaibeplnhmjcmgolik',
            },
        ],
    },
    {
        id: 'pallet',
        name: 'Pallet',
        summary: 'Community-based recruiting',
        kind: 'work',
        description:
            'Pallet Recruiter: A hub for recruiters to source and manage vetted candidates, while helping community leaders connect their members to jobs. Used by 450+ startups and 100+ communities before it closed.',
        stack: 'Next.js, React, Apollo GraphQL, Python, Django, GCP',
        // pallet.com now belongs to a different company, so link to coverage
        // of the startup instead.
        links: [
            {
                label: 'Read about it in The Pragmatic Engineer',
                href: 'https://blog.pragmaticengineer.com/tech-jobs-board/',
            },
        ],
    },
    {
        id: 'teamable',
        name: 'Teamable',
        summary: 'Research on forming better student teams',
        kind: 'research',
        description:
            'A tool that lets educators build student teams around pedagogical goals, using a published algorithm. Integrated with Canvas; used in 12+ courses with 1000+ students.',
        stack: 'Python, Django, Docker',
        links: [
            {
                label: 'Try Teamable',
                href: 'https://prod.teamableanalytics.ok.ubc.ca/',
            },
            {
                label: 'How it works',
                href: 'https://teamableanalytics.ok.ubc.ca/homepage/',
            },
            {
                label: 'Read the paper',
                href: 'https://www.researchgate.net/publication/360229063_Design_Guidelines_for_a_Team_Formation_and_Analytics_Software',
            },
        ],
    },
];
