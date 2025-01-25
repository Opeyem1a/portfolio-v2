export type Project = {
    title: string
    subtitle: string
    category: string
    description: string[]
    links: {
        title: string
        link: URL | string
    }[]
    skills?: string[]
    hidden?: boolean
}

const PROJECTS: Project[] = [
    {
        title: "Teamable Analytics",
        subtitle: "Dynamic student team generation",
        category: "Web Application",
        description: ["A SaaS tool that allows educators to create teams based on complex pedagogical goals using a published AI algorithm approach. The tool is integrated with Canvas' LMS API and is currently used in 12+ courses with 1000+ students."],
        links: [
            {
                title: "See it live",
                link: "https://teamableanalytics.ok.ubc.ca/"
            },
            {
                title: "Learn more",
                link: "https://teamableanalytics.ok.ubc.ca/homepage/"
            },
            {
                title: "See research",
                link: "https://www.researchgate.net/publication/360229063_Design_Guidelines_for_a_Team_Formation_and_Analytics_Software",
            },
        ],
        skills: [
            "Python",
            "Django",
            "Docker",
        ],
    },
    {
        title: "Pallet Recruiter",
        subtitle: "Community-based talent marketplace",
        category: "Web Application",
        description: ["A hub for recruiters to source and manage relevant, vetted candidates while empowering leaders to better connect their communities to opportunities. Used by 450+ startups and 100+ communities."],
        links: [],
        skills: [
            "Next.js",
            "React.js",
            "Apollo GraphQL",
            "Python",
            "Django",
            "Sentry",
            "Google Cloud Platform",
        ],
    },
    {
        title: "JUnit++",
        subtitle: "Custom JUnit testing library",
        category: "Unit Testing Library",
        description: [
            "This library enables the quick creation and modification of unit tests written specifically to validate that student-submitted code meets the requirements of a given introductory programming question.",
        ],
        links: [
            {
                title: "Read the docs",
                link: "https://canvas-gamification.github.io/docs/docs/junit-framework/introduction/overview",
            },
            {
                title: "See on GitHub",
                link: "https://github.com/canvas-gamification/canvas-gamification-junit-tests",
            },
        ],
        skills: [
            "Java",
            "JUnit 5",
            "Judge0",
        ],
    },
    {
        title: "Course Gamification",
        subtitle: "Gamified e-learning for computer science majors",
        category: "Web Application",
        description: ["A Canvas-integrated platform offering an in-depth question bank allowing students to practice and receive feedback on a range of introductory computer science concepts while integrating challenges, leaderboards, and a grade-based reward system."],
        links: [
            {
                title: "See it live",
                link: "https://gamification.ok.ubc.ca/",
            }
        ],
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
        category: "Browser Extension",
        description: ["I built myself a productivity-oriented website blocker to help me focus. The goal of Finite is to combat my \"infinite scroll\" tendencies when using certain websites."],
        links: [
            {
                title: "See it live",
                link: "https://addons.mozilla.org/en-CA/firefox/addon/finite/",
            },
            {
                title: "See on GitHub",
                link: "https://github.com/Opeyem1a/finite"
            }
        ],
        skills: [
            "JavaScript",
            "HTML5",
            "CSS"
        ],
    },
]

export {
    PROJECTS
}
