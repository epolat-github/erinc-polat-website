import { Project } from "@/types/project.type";

const projects: Project[] = [
    {
        slug: "fitnlit",
        title: "FitNLit - Your Fitness Helper",
        summary:
            "A fitness helper for you! You can see your workouts, plan your meals, track your calorie and personal goals, visualize the process of your body throughout the usage!",
        featuredImages: [
            {
                url: "/projects/fitnlit/FitNLit Home.png",
                alt: "Project image",
            },
            {
                url: "/projects/fitnlit/FitNLit Meal List.png",
                alt: "Project image",
            },
            {
                url: "/projects/fitnlit/FitNLit Meal Detail.png",
                alt: "Project image",
            },
        ],
        tags: [
            "React Native",
            "IOS",
            "Android",
            "Offline Support",
            "Custom Design",
        ],
        paragraphs: [
            "With FitNLit, you can easily purchase and follow fitness programs, along with daily meal plans tailored to your needs. Access recipes, correct portion sizes, and macro breakdowns to manage your nutrition effortlessly. Stay motivated with push notifications to keep you on track.",
            "At the gym, use helpful videos and real-time timers to guide your workouts. Track your progress visually through photos and graphs, making it easier to see your improvements over time. This app is designed to support and motivate you at every step, helping you achieve your fitness goals.",
        ],
        assetRows: [
            {
                type: "SINGLE",
                image: {
                    url: "/projects/fitnlit/fitnlit-multiple.png",
                    alt: "Project image",
                },
            },
            {
                type: "MULTIPLE",
                images: [
                    {
                        url: "/projects/fitnlit/FitNLit Home.png",
                        alt: "Project Image",
                    },
                    {
                        url: "/projects/fitnlit/FitNLit Workouts.png",
                        alt: "Project Image",
                    },
                ],
            },
            {
                type: "MULTIPLE",
                images: [
                    {
                        url: "/projects/fitnlit/FitNLit Meal Detail.png",
                        alt: "Project Image",
                    },
                    {
                        url: "/projects/fitnlit/FitNLit Workouts.png",
                        alt: "Project Image",
                    },
                ],
            },
        ],
    },
    {
        slug: "actio",
        title: "Actio - Event Management",
        summary:
            "Your event companion! Easily join events, stay organized with reminders, and engage with posts and surveys for a seamless event experience!",
        projectUrl: "https://actioevents.com",
        featuredImages: [
            {
                url: "/projects/actio/Actio Onboarding 1.webp",
                alt: "Project image",
            },
            {
                url: "/projects/actio/Actio Home.webp",
                alt: "Project image",
            },
            {
                url: "/projects/actio/Actio Event Details.webp",
                alt: "Project image",
            },
        ],
        tags: [
            "React Native",
            "IOS",
            "Android",
            "Offline Support",
            "Push Notifications",
            "QR Code",
        ],
        paragraphs: [
            "Actio is a comprehensive event management system designed to professionally handle your corporate event memories. It offers seamless event viewing, registration, and participation with calendar integration, reminders, and notifications.",
            "Users can share posts with photos, documents, and information during the event and engage with surveys and information forms before, during, and after the event. The system also allows for event check-ins via QR code, even in offline settings, and lets users follow their favorite organizers to stay updated on upcoming events.",
        ],
        assetRows: [
            {
                type: "SINGLE",
                image: {
                    url: "/projects/actio/Actio Multiple.webp",
                    alt: "Project image",
                },
            },
            {
                type: "SINGLE",
                image: {
                    url: "/projects/actio/Actio Infograph.png",
                    alt: "Project image",
                },
            },
            {
                type: "MULTIPLE",
                images: [
                    {
                        url: "/projects/actio/Actio Home.webp",
                        alt: "Project Image",
                    },
                    {
                        url: "/projects/actio/Actio Event Details.webp",
                        alt: "Project Image",
                    },
                ],
            },
            {
                type: "MULTIPLE",
                images: [
                    {
                        url: "/projects/actio/Actio Onboarding 1.webp",
                        alt: "Project Image",
                    },
                    {
                        url: "/projects/actio/Actio Notifications.webp",
                        alt: "Project Image",
                    },
                ],
            },
        ],
    },
    {
        slug: "quartiers",
        title: "Quartiers - Smart Facility Management",
        summary:
            "Your smart home assistant! Effortlessly manage devices, track energy usage, and streamline services for a more connected living experience!",
        featuredImages: [
            {
                url: "/projects/quartiers/Quartiers Home Control.png",
                alt: "Project image",
            },
            {
                url: "/projects/quartiers/Quartiers Devices.png",
                alt: "Project image",
            },
            {
                url: "/projects/quartiers/Quartiers Home.png",
                alt: "Project image",
            },
        ],
        tags: [
            "React Native",
            "IOS",
            "Android",
            "Custom Design",
            "Smart Devices",
            "Security and Locks",
        ],
        paragraphs: [
            "Quartiers, smart facility management app allows you to manage your home effortlessly. You can report issues to facility management by opening tickets or uploading photos and control your smart home devices by creating and scheduling scenarios. Additionally, you can trigger these scenarios through connected sensors, ensuring seamless automation.",
            "Track your monthly energy usage with detailed graphs and hire service providers like cleaners or hairstylists through the app. Manage your smart locks by granting temporary or permanent access and control multiple homes with ease, all from a single platform.",
        ],
        assetRows: [
            {
                type: "SINGLE",
                image: {
                    url: "/projects/quartiers/Quartiers Multiple.png",
                    alt: "Project image",
                },
            },
            {
                type: "MULTIPLE",
                images: [
                    {
                        url: "/projects/quartiers/Quartiers Login.png",
                        alt: "Project Image",
                    },
                    {
                        url: "/projects/quartiers/Quartiers Home.png",
                        alt: "Project Image",
                    },
                ],
            },
            {
                type: "MULTIPLE",
                images: [
                    {
                        url: "/projects/quartiers/Quartiers Home Control.png",
                        alt: "Project Image",
                    },
                    {
                        url: "/projects/quartiers/Quartiers Devices.png",
                        alt: "Project Image",
                    },
                ],
            },
        ],
    },
    {
        slug: "zeynep-dikdus-website",
        title: "Personal Website - Therapist Zeynep Dikdüş",
        summary:
            "A personal website of Psychotherapist Zeynep Dikdüş. Specifically designed for her, with her own drawings and illustrations.",
        projectUrl: "https://zeynepdikdus.com",
        featuredImages: [
            {
                url: "/projects/zeynep-dikdus-website/Zeynep Website Home.png",
                alt: "Project image",
            },
            // {
            //     url: "/projects/zeynep-dikdus-website/Zeynep Website Contents.png",
            //     alt: "Project image",
            // },
            // {
            //     url: "/projects/zeynep-dikdus-website/Zeynep Website Contact.png",
            //     alt: "Project image",
            // },
        ],
        tags: ["NextJS", "Website", "Custom Design"],
        paragraphs: [
            "A personal website of Psychotherapist Zeynep Dikdüş. Specifically designed for her, with her own drawings and illustrations. A small CMS system supports the data, so that it can be changed and edited easily.",
            "Built with Next.js, is designed to maximize visibility through effective SEO optimization.",
        ],
        assetRows: [
            {
                type: "SINGLE",
                image: {
                    url: "/projects/zeynep-dikdus-website/Zeynep Website Home.png",
                    alt: "Project image",
                },
            },
            {
                type: "SINGLE",
                image: {
                    url: "/projects/zeynep-dikdus-website/Zeynep Website Contents.png",
                    alt: "Project image",
                },
            },
            {
                type: "SINGLE",
                image: {
                    url: "/projects/zeynep-dikdus-website/Zeynep Website Contact.png",
                    alt: "Project image",
                },
            },
        ],
    },
    {
        slug: "atolye-ankara-website",
        title: "Corporate Website - Atölye Ankara",
        summary:
            "CMS Website for the “Atölye Ankara” project, which, supported by the Ankara Development Agency, provides free access to FabLab services and advanced technology education to enhance youth employability.",
        featuredImages: [
            {
                url: "/projects/atolye-ankara/Atölye Ankara Home.png",
                alt: "Project image",
            },
        ],
        tags: ["Gatsby", "Strapi", "CMS System"],
        paragraphs: [
            "The “Atölye Ankara” project, supported by the Ankara Development Agency, aims to empower young individuals by providing advanced technology education and free access to FabLab services. This initiative allows the people of Ankara to transform their ideas into prototypes, fostering innovation and creativity within the community.",
            "Designed and developed the website for this project using Gatsby and Strapi, ensuring a seamless and user-friendly experience. By leveraging these technologies, I was able to create a dynamic platform that allows users to submit workshop requests and participate in various events effectively.",
        ],
        assetRows: [
            {
                type: "SINGLE",
                image: {
                    url: "/projects/atolye-ankara/Atölye Ankara Home.png",
                    alt: "Project image",
                },
            },
            {
                type: "SINGLE",
                image: {
                    url: "/projects/atolye-ankara/Atölye Ankara Information.png",
                    alt: "Project image",
                },
            },
            {
                type: "SINGLE",
                image: {
                    url: "/projects/atolye-ankara/Atölye Ankara Events.png",
                    alt: "Project image",
                },
            },
        ],
    },
];

export default projects;
