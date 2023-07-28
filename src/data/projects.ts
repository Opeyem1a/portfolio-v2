export type Project = {
    title: string
    subtitle: string
    description: string[]
    link: URL | string
    contributions?: {
        title: string
        link?: URL | string
    }[]
    skills?: string[]
    isCreative?: boolean
    hidden?: boolean
}

const PROJECTS: Project[] = [
    {
        title: "Teamable Analytics",
        subtitle: "Dynamic student team generation",
        description: ["A SaaS tool that allows educators to create teams based on complex pedagogical goals using a published AI algorithm approach. The tool is integrated with Canvas' LMS API and is currently used in 12+ courses with 1000+ students."],
        contributions: [
            {
                title: "Algorithm Development",
                link: "https://www.researchgate.net/publication/360229063_Design_Guidelines_for_a_Team_Formation_and_Analytics_Software",
            },
            {
                title: "Full-Stack Lead",
                link: "https://provost.ok.ubc.ca/2022/11/29/teamable-analytics/"
            },
        ],
        link: "https://teamableanalytics.ok.ubc.ca/homepage/",
        skills: [
            "Python",
            "Django",
            "Docker",
        ],
    },
    {
        title: "Pallet Recruiter",
        subtitle: "Community-based talent marketplace",
        description: ["A hub for recruiters to source and manage relevant, vetted candidates while empowering leaders to better connect their communities to opportunities. Used by 450+ startups and 100+ communities."],
        contributions: [
            {
                title: "Freemium Subscription Tier",
                link: "https://www.pallet.com/pricing",
            },
            {
                title: "Partnership Plans",
                link: "https://www.pallet.com/blog/acceptance-rates-on-pallet",
            },
        ],
        link: "https://www.pallet.com/",
        skills: [
            "Next.js",
            "React.js",
            "Apollo GraphQL",
            "Python",
            "Django",
            "Google Cloud Platform",
            "HTML5",
        ],
    },
    {
        title: "JUnit++",
        subtitle: "Custom JUnit testing library",
        description: [
            "This library enables the quick creation and modification of unit tests written specifically to validate that student-submitted code meets the requirements of a given introductory programming question.",
        ],
        contributions: [
            {
                title: "Modern Docs",
                link: "https://canvas-gamification.github.io/docs/docs/junit-framework/introduction/overview",
            },
            {
                title: "Library Co-author",
                link: "https://github.com/canvas-gamification/canvas-gamification-junit-tests",
            },
        ],
        link: "https://github.com/canvas-gamification/canvas-gamification-junit-tests",
        skills: [
            "Java",
            "JUnit5",
            "Judge0",
        ],
    },
    {
        title: "Course Gamification",
        subtitle: "Gamified e-learning for computer science majors",
        description: ["A Canvas-integrated platform offering an in-depth question bank allowing students to practice and receive feedback on a range of introductory computer science concepts while integrating challenges, leaderboards, and a grade-based reward system."],

        link: "https://gamification.ok.ubc.ca/",
        skills: [
            "Angular",
            "Python",
            "Django",
        ],
        hidden: true,
    },
    {
        title: "Finite",
        subtitle: "Website blocking browser extension",
        description: ["I built myself a productivity-oriented website blocker to help me focus. The goal of Finite is to combat my \"infinite scroll\" tendencies when using certain websites."],
        link: "https://addons.mozilla.org/en-CA/firefox/addon/finite/",
        skills: [
            "JavaScript",
            "HTML5",
            "CSS"
        ],
        hidden: true,
    },
]

export {
    PROJECTS
}