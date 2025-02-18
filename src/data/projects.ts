import { Project } from "@/types/project.type";

const projects: Project[] = [
    {
        slug: "fitnlit",
        title: "FitNLit - Your Fitness Helper",
        summary:
            "A fitness helper for you! You can see your workouts, plan your meals, track your calorie and personal goals, visualize the process of your body throughout the usage!",
        featuredImages: [
            {
                url: "/projects/fitnlit/fitnlit-multiple.webp",
                alt: "Project image",
            },
        ],
        tags: ["React Native", "IOS", "Android", "Custom Design"],
        paragraphs: [
            "With FitNLit, you can easily purchase and follow fitness programs, along with daily meal plans tailored to your needs. Access recipes, correct portion sizes, and macro breakdowns to manage your nutrition effortlessly. Stay motivated with push notifications to keep you on track.",
            "At the gym, use helpful videos and real-time timers to guide your workouts. Track your progress visually through photos and graphs, making it easier to see your improvements over time. This app is designed to support and motivate you at every step, helping you achieve your fitness goals.",
        ],
        assetRows: [
            {
                type: "SINGLE",
                image: {
                    url: "/projects/fitnlit/fitnlit-multiple.webp",
                    alt: "Project image",
                },
            },
            {
                type: "MULTIPLE",
                images: [
                    {
                        url: "/projects/fitnlit/FitNLit Workouts.webp",
                        alt: "Project Image",
                    },
                    {
                        url: "/projects/fitnlit/FitNLit Workout Helper.webp",
                        alt: "Project Image",
                    },
                ],
            },
            {
                type: "SINGLE",
                image: {
                    url: "/projects/fitnlit/FitNLit Auth Multiple.webp",
                    alt: "Project image",
                },
            },
            {
                type: "MULTIPLE",
                images: [
                    {
                        url: "/projects/fitnlit/FitNLit Trackings.webp",
                        alt: "Project Image",
                    },
                    {
                        url: "/projects/fitnlit/FitNLit Update Measurements.webp",
                        alt: "Project Image",
                    },
                ],
            },

            {
                type: "MULTIPLE",
                images: [
                    {
                        url: "/projects/fitnlit/FitNLit Meal Detail.webp",
                        alt: "Project Image",
                    },
                    {
                        url: "/projects/fitnlit/FitNLit Meal List.webp",
                        alt: "Project Image",
                    },
                ],
            },
            {
                type: "MULTIPLE",
                images: [
                    {
                        url: "/projects/fitnlit/FitNLit Goals.webp",
                        alt: "Project Image",
                    },
                    {
                        url: "/projects/fitnlit/FitNLit Water Goal.webp",
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
                url: "/projects/actio/Actio Multiple.webp",
                alt: "Project image",
            },
            // {
            //     url: "/projects/actio/Actio Onboarding 1.webp",
            //     alt: "Project image",
            // },
            // {
            //     url: "/projects/actio/Actio Home.webp",
            //     alt: "Project image",
            // },
            // {
            //     url: "/projects/actio/Actio Event Details.webp",
            //     alt: "Project image",
            // },
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
                    url: "/projects/actio/Actio Infograph.webp",
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
                url: "/projects/quartiers/Quartiers Multiple.webp",
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
                    url: "/projects/quartiers/Quartiers Multiple.webp",
                    alt: "Project image",
                },
            },
            {
                type: "MULTIPLE",
                images: [
                    {
                        url: "/projects/quartiers/Quartiers Login.webp",
                        alt: "Project Image",
                    },
                    {
                        url: "/projects/quartiers/Quartiers Home.webp",
                        alt: "Project Image",
                    },
                ],
            },
            {
                type: "MULTIPLE",
                images: [
                    {
                        url: "/projects/quartiers/Quartiers Home Control.webp",
                        alt: "Project Image",
                    },
                    {
                        url: "/projects/quartiers/Quartiers Devices.webp",
                        alt: "Project Image",
                    },
                ],
            },
        ],
    },
    {
        slug: "construction-surveillance",
        title: "Construction Area Surveillance System",
        summary:
            "A surveillance system that utilizes Dahua and Instar cameras with OpenWeather data for the construction areas in Germany. A collab project with SV Gebaudeautomation and connect2, companies of Thelen Holding.",
        projectUrl: "https://surveillance.svg-solutions.com",
        featuredImages: [
            {
                url: "/projects/construction-surveillance/Surveillance Home.webp",
                alt: "Project image",
            },
        ],
        tags: ["React", "NodeJS", "MongoDB", "Dahua", "Instar"],
        paragraphs: [
            "This project is a surveillance system that integrates Dahua and Instar cameras with OpenWeather data for construction sites in Germany. Developed in collaboration with SV Gebäudeautomation and connect2 under Thelen Holding, the system enhances security and operational efficiency. Users can add construction locations to view five-day weather forecasts and plan work conditions accordingly.",
            "The system stores daily weather snapshots, allowing monitoring of worker conditions and site status. The timeline feature enables viewing and downloading past camera footage, while location-based weather data can be exported in Excel format. Additionally, tickets generated from surveillance tower alarms can be tracked and downloaded, ensuring proper documentation of security incidents.",
        ],
        assetRows: [
            {
                type: "SINGLE",
                image: {
                    url: "/projects/construction-surveillance/Surveillance Home.webp",
                    alt: "Project image",
                },
            },
            {
                type: "SINGLE",
                image: {
                    url: "/projects/construction-surveillance/Surveillance Weather.webp",
                    alt: "Project image",
                },
            },
            {
                type: "SINGLE",
                image: {
                    url: "/projects/construction-surveillance/Surveillance Timeline.webp",
                    alt: "Project image",
                },
            },
            {
                type: "SINGLE",
                image: {
                    url: "/projects/construction-surveillance/Surveillance Alert Tickets.webp",
                    alt: "Project image",
                },
            },
        ],
    },
    {
        slug: "building-deficiency-management",
        title: "Building Deficiency Management System",
        summary:
            "A building issue reporting system that integrates EVVA’s smart locks, enabling real-time tracking of assigned tasks and controlled access for maintenance personnel.",
        projectUrl: "https://accessportal.svg-solutions.com",
        featuredImages: [
            {
                url: "/projects/building-deficiency-management/Plan Radar Login.webp",
                alt: "Project image",
            },
        ],
        tags: [
            "React",
            "NodeJS",
            "MongoDB",
            "EVVA",
            "Plan Radar",
            "Smart Locks",
        ],
        paragraphs: [
            "This system integrates PlanRadar’s building issue reporting platform with EVVA’s smart locks, allowing real-time tracking of issues and assigned personnel. Access permissions are dynamically granted based on a custom door configuration, ensuring only authorized technicians can enter designated areas. Once the issue is resolved, access is automatically revoked.",
            "Technicians can unlock doors using a phone or RFID chip, enhancing security and efficiency. Developed with SV Gebäudeautomation, EVVA GmbH, and PlanRadar, the system includes a Stripe-powered online payment integration for managing usage credits.",
        ],
        assetRows: [
            {
                type: "SINGLE",
                image: {
                    url: "/projects/building-deficiency-management/Plan Radar Login.webp",
                    alt: "Project image",
                },
            },
            {
                type: "SINGLE",
                image: {
                    url: "/projects/building-deficiency-management/plan radar and evva websites.webp",
                    alt: "Project image",
                },
            },
            {
                type: "SINGLE",
                image: {
                    url: "/projects/building-deficiency-management/Plan Radar Superuser.webp",
                    alt: "Project image",
                },
            },
            {
                type: "SINGLE",
                image: {
                    url: "/projects/building-deficiency-management/Plan Radar Project Manager Cart.webp",
                    alt: "Project image",
                },
            },
            {
                type: "SINGLE",
                image: {
                    url: "/projects/building-deficiency-management/Plan Radar Project Manager Checkout.webp",
                    alt: "Project image",
                },
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
                url: "/projects/zeynep-dikdus-website/Zeynep Website Home.webp",
                alt: "Project image",
            },
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
                    url: "/projects/zeynep-dikdus-website/Zeynep Website Home.webp",
                    alt: "Project image",
                },
            },
            {
                type: "SINGLE",
                image: {
                    url: "/projects/zeynep-dikdus-website/Zeynep Website About.webp",
                    alt: "Project image",
                },
            },
            {
                type: "SINGLE",
                image: {
                    url: "/projects/zeynep-dikdus-website/Zeynep Website Psychotherapy.webp",
                    alt: "Project image",
                },
            },
            {
                type: "SINGLE",
                image: {
                    url: "/projects/zeynep-dikdus-website/Zeynep Website Gallery.webp",
                    alt: "Project image",
                },
            },
            {
                type: "SINGLE",
                image: {
                    url: "/projects/zeynep-dikdus-website/Zeynep Website Contents.webp",
                    alt: "Project image",
                },
            },
            {
                type: "SINGLE",
                image: {
                    url: "/projects/zeynep-dikdus-website/Zeynep Website Contact.webp",
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
                url: "/projects/atolye-ankara/atolye-ankara-home.webp",
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
                    url: "/projects/atolye-ankara/atolye-ankara-home.webp",
                    alt: "Project image",
                },
            },
            {
                type: "SINGLE",
                image: {
                    url: "/projects/atolye-ankara/atolye-ankara-information.webp",
                    alt: "Project image",
                },
            },
            {
                type: "SINGLE",
                image: {
                    url: "/projects/atolye-ankara/atolye-ankara-events.webp",
                    alt: "Project image",
                },
            },
        ],
    },
];

export default projects;
