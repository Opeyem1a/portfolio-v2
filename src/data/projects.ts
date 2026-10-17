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
        kind: 'work · now',
        description:
            'A ground-up rebuild of Upcart, the cart drawer used by 30,000+ Shopify stores. We’re building it to lead the category.',
        stack: 'React, Preact, Node.js, GCP, BigQuery',
        links: [
            {
                label: 'See it on the Shopify App Store',
                href: 'https://apps.shopify.com/aftersell',
            },
        ],
    },
    {
        id: 'wdyt',
        name: 'WDYT',
        summary: 'My garden of favourite questions',
        kind: 'side project',
        description:
            'I collect good questions and these are my favourites. I always love to chat about them, and I spent a lot of time styling these.',
        stack: 'Next.js, React, Tailwind CSS',
        links: [{ label: 'Visit wdyt.site', href: 'https://wdyt.site' }],
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
                label: 'See the code on GitHub',
                href: 'https://github.com/Opeyem1a/exact',
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
            {
                label: 'See it on Wellfound',
                href: 'https://wellfound.com/company/pallet-5',
            },
            { label: 'Pallet on X', href: 'https://x.com/Pallet_HQ' },
        ],
    },
    {
        id: 'teamable',
        name: 'Teamable',
        summary: 'Team formation research, higher ed',
        kind: 'research',
        description:
            'A tool that lets educators build student teams around pedagogical goals, using a published algorithm. Integrated with Canvas; used in 12+ courses with 1000+ students.',
        stack: 'Python, Django, Docker',
        links: [
            {
                label: 'Try Teamable',
                href: 'https://teamableanalytics.ok.ubc.ca/',
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
