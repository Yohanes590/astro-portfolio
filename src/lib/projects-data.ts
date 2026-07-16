import {
    ShieldCheck,
    CreditCard,
    ShoppingBag,
    Bot,
    Database,
    Lock,
    Globe,
    Server,
    BrainCircuit,
    LayoutDashboard,
    Bug,
    Boxes,
} from "lucide-react";

export const projects = [
    {
        id: "yegna-pay",

        title: "Yegna Pay",

        slogan: "Developer-first Ethiopian payment gateway",

        description:
            "Yegna Pay is a fintech infrastructure platform designed for Ethiopian developers and businesses. It provides payment verification systems, APIs, webhook integrations, fraud analysis, and business dashboards for modern digital payment workflows.",

        category: "Fintech",

        status: "In Development",

        colors: ["#0F172A", "#16A34A", "#FFFFFF"],

        technologies: [
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "Node.js",
            "Express.js",
            "PostgreSQL",
            "Redis",
        ],

        features: [
            {
                title: "Payment Verification",
                description:
                    "Professional transaction verification system for Ethiopian businesses.",
                icon: ShieldCheck,
            },

            {
                title: "Developer APIs",
                description:
                    "REST APIs and webhook systems for easy integration.",
                icon: Globe,
            },

            {
                title: "Fraud Detection",
                description:
                    "AI-powered suspicious transaction and duplicate detection.",
                icon: BrainCircuit,
            },

            {
                title: "Business Dashboard",
                description:
                    "Analytics, transaction tracking, and API management tools.",
                icon: LayoutDashboard,
            },
        ],

        architecture: [
            {
                name: "Frontend",
                value: "Next.js + Tailwind CSS",
                icon: Globe,
            },

            {
                name: "Backend",
                value: "Node.js + Express.js",
                icon: Server,
            },

            {
                name: "Database",
                value: "PostgreSQL + Redis",
                icon: Database,
            },
        ],

        challenges: [
            "Building reliable payment verification systems",
            "Fraud prevention and security",
            "Webhook reliability",
            "Fintech trust infrastructure",
        ],

        futureVision:
            "To become a trusted Ethiopian fintech infrastructure platform for developers and online businesses.",


        url: "https://yegna-pay.vercel.app/",

        image: "/yegna-pay.jpg",
    },

    {
        id: "ayn-awaj",

        title: "Ayne Awaj",

        slogan: "Luxury TikTok-driven e-commerce platform",

        description:
            "Ayne Awaj is a premium mobile-first e-commerce platform focused on creating a luxury shopping experience for Ethiopian users through modern UI/UX, social media traffic conversion, and automated order workflows.",

        category: "E-Commerce",

        status: "Active",

        colors: ["#314836", "#EDCD78", "#F5F1E8", "#2B2B2B"],

        technologies: [
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "Framer Motion",
            "PostgreSQL",
            "Telegram Bot API",
        ],

        features: [
            {
                title: "Luxury UI Design",
                description:
                    "Elegant animations, premium layouts, and modern visual identity.",
                icon: ShoppingBag,
            },

            {
                title: "Mobile First Experience",
                description:
                    "Optimized shopping experience designed for phone users.",
                icon: Globe,
            },

            {
                title: "Telegram Automation",
                description:
                    "Automatic Telegram notifications for order management.",
                icon: Bot,
            },

            {
                title: "Admin Dashboard",
                description:
                    "Order tracking, inventory management, and analytics.",
                icon: LayoutDashboard,
            },
        ],

        architecture: [
            {
                name: "Frontend",
                value: "Next.js + Tailwind CSS",
                icon: Globe,
            },

            {
                name: "Animations",
                value: "Framer Motion",
                icon: ShoppingBag,
            },

            {
                name: "Integrations",
                value: "Telegram Bot API",
                icon: Bot,
            },
        ],

        challenges: [
            "Creating premium UI/UX",
            "Mobile optimization",
            "E-commerce trust",
            "Delivery workflow management",
        ],

        futureVision:
            "To evolve into a modern Ethiopian luxury fashion and commerce platform.",


        url: "https://www.aynawaj.com/",

        image: "/ayn-awaj.jpg",
    },

    {
        id: "cyber-lab",

        title: "Cyber Lab",

        slogan: "Cybersecurity assessment and testing platform",

        description:
            "Cyber Lab is a cybersecurity assessment platform that provides isolated vulnerable environments for students to test real-world security skills while instructors monitor and evaluate performance automatically.",

        category: "Cybersecurity",

        status: "Research & Planning",

        colors: ["#0B1120", "#00FFB2", "#111827"],

        technologies: [
            "Next.js",
            "Node.js",
            "Docker",
            "PostgreSQL",
            "Sandbox Environments",
            "Container Networks",
        ],

        features: [
            {
                title: "Vulnerable Labs",
                description:
                    "Isolated environments for SQLi, XSS, JWT flaws, IDOR, and more.",
                icon: Bug,
            },

            {
                title: "Auto Grading",
                description:
                    "Automatic scoring system for exploit success and methodology.",
                icon: BrainCircuit,
            },

            {
                title: "Sandbox Infrastructure",
                description:
                    "Secure isolated container environments for safe testing.",
                icon: Boxes,
            },

            {
                title: "Instructor Dashboard",
                description:
                    "Assignment management, monitoring, and reporting tools.",
                icon: LayoutDashboard,
            },
        ],

        architecture: [
            {
                name: "Frontend",
                value: "Next.js",
                icon: Globe,
            },

            {
                name: "Backend",
                value: "Node.js",
                icon: Server,
            },

            {
                name: "Infrastructure",
                value: "Docker + Isolated Networks",
                icon: Lock,
            },
        ],

        challenges: [
            "Secure container isolation",
            "Sandbox management",
            "Safe exploit execution",
            "Infrastructure complexity",
        ],

        futureVision:
            "To become a cybersecurity assessment infrastructure platform for universities and organizations.",

        github: "https://github.com/Yohanes590/geez-cyber-lab",

        image: "/cyber-lab.png",
    },
];