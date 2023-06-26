export type Project = {
    title: string
    subtitle: string
    description: string[]
    skills?: string[]
    isCreative?: boolean
}

const PROJECTS: Project[] = [
    {
        title: "Teamabale Analytics",
        subtitle: "Generate custom team compositions from student demographics",
        description: ["Some description of what I did with cool highlighted keywords. These keywords will essentially be what the subsections were in the old design. About this long."],
        skills: [
            "Python",
            "Django",
            "Docker",
        ],
    },
    {
        title: "Pallet Recruiter",
        subtitle: "Community-based talent marketplace",
        description: ["Some description of what I did with cool highlighted keywords. These keywords will essentially be what the subsections were in the old design. About this long."],
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
        title: "Course Gamification",
        subtitle: "Gamified e-learning for computer science majors.",
        description: ["Some description of what I did with cool highlighted keywords. These keywords will essentially be what the subsections were in the old design. About this long."],
        skills: [
            "Angular",
            "Python",
            "Django",
        ],
    },
    {
        title: "Junit++",
        subtitle: "Custom JUnit unit testing library",
        description: ["Some description of what I did with cool highlighted keywords. These keywords will essentially be what the subsections were in the old design. About this long."],
        skills: [
            "React.js",
            "Python",
            "Django",
            "SCSS",
        ],
    },
    {
        title: "Finite",
        subtitle: "Website blocking browser extension",
        description: ["Some description of what I did with cool highlighted keywords. These keywords will essentially be what the subsections were in the old design. About this long."],
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