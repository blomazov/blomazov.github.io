import { site } from "./site";

export const content = {
    en: {
        language: "en",
        languageLabel: "DE",
        languageUrl: "/de/",

        navigation: {
            profile: "Profile",
            research: "Research",
            expertise: "Expertise",
            documents: "Documents",
            contact: "Contact",
        },

        hero: {
            eyebrow: "DATA SCIENCE · APPLIED RESEARCH",
            name: "Borys Lomazov",
            role: "Data Scientist",
            education: "B. Sc. Computer Science · M. Sc. Data Science (ongoing)",
            experience:
                "Nearly two years of experience in applied research and development.",
            primaryAction: "Profile",
            secondaryAction: "Curriculum Vitae",
        },

        profile: {
            number: "01",
            title: "Profile",
            text:
                "I studied Computer Science at Darmstadt University of Applied Sciences and subsequently started a Master's degree in Data Science. Alongside my Master's studies, I worked for 21 months as a research associate in a research and development project.",
        },

        research: {
            number: "02",
            title: "Research & Publications",

            paragraphs: [
                "My previous research focused on the automated digitization of technical architectural drawings as a foundation for digital building models and Digital Twins.",
                "My main responsibility was symbol detection in 2D legacy plans. I independently developed an approach combining classical image processing and machine learning to provide information for subsequent semantic processing of the plans.",
            ],

            publicationsTitle: "Publications",

            publications: [
                {
                    title: "Modular Raster-to-Vector Digitization of Architectural Floor Plans",
                    meta: "WSCG 2026 · Accepted / Forthcoming",
                    href: site.publications.wscg2026,
                },
                {
                    title: "AI-Enhanced Template Matching for Symbol Detection in Technical Drawings",
                    meta: "FTC 2026 · Accepted / Forthcoming",
                    href: site.publications.ftc2026,
                },
            ],

            currentResearchTitle: "Current Research",

            currentResearch: {
                title: "From Architectural Plans to Building Models: Raster-to-Vector Conversion, BIM/IFC Integration, and Digital Twin Readiness",
                meta: "Manuscript in internal review",
                href: site.publications.journal2026,
            }
        },

        expertise: {
            number: "03",
            title: "Expertise",

            items: [
                {
                    title: "Data Science & Machine Learning",
                    details:
                        "Data Analysis · Modeling · Feature Engineering · Model Evaluation · Hyperparameter Optimization",
                },
                {
                    title: "ML Engineering",
                    details:
                        "Continuous Integration · ML Pipelines & Tooling · Model Analysis",
                },
                {
                    title: "Computer Vision & Document Analysis",
                    details:
                        "Image Processing · Template Matching · Symbol Recognition · Technical Drawings",
                },
                {
                    title: "Applied Research",
                    details:
                        "Method Development · Experimental Evaluation · Scientific Publications",
                },
            ],
        },

        documents: {
            number: "04",
            title: "Documents",

            items: [
                {
                    title: "Curriculum Vitae (Maintenance)",
                    meta: "PDF · English",
                    action: "Download",
                    href: site.documents.cvEnglish,
                },
                {
                    title: "Lebenslauf",
                    meta: "PDF · German",
                    action: "Download",
                    href: site.documents.cvGerman,
                },
            ],

            note:
                "Additional academic credentials and employment references are available upon request.",
        },

        contact: {
            number: "05",
            title: "Contact",

            items: [
                {
                    label: "Email",
                    value: site.email.label,
                    href: site.email.href,
                },
                {
                    label: "LinkedIn",
                    value: site.linkedin.href
                        ? site.linkedin.label
                        : "to be added",
                    href: site.linkedin.href,
                },
                {
                    label: "ORCID",
                    value: site.orcid.label,
                    href: site.orcid.href,
                },
            ],
        },

        footer: "Data Science · Applied Research",
    },

    de: {
        language: "de",
        languageLabel: "EN",
        languageUrl: "/",

        navigation: {
            profile: "Profil",
            research: "Forschung",
            expertise: "Expertise",
            documents: "Dokumente",
            contact: "Kontakt",
        },

        hero: {
            eyebrow: "DATA SCIENCE · APPLIED RESEARCH",
            name: "Borys Lomazov",
            role: "Data Scientist",
            education: "B. Sc. Informatik · M. Sc. Data Science (laufend)",
            experience:
                "Knapp zwei Jahre Erfahrung in angewandter Forschung und Entwicklung.",
            primaryAction: "Profil",
            secondaryAction: "Lebenslauf",
        },

        profile: {
            number: "01",
            title: "Profil",
            text:
                "Ich habe Informatik an der Hochschule Darmstadt studiert und anschließend den Master Data Science begonnen. Parallel zum Masterstudium war ich 21 Monate als wissenschaftlicher Mitarbeiter in einem Forschungs- und Entwicklungsprojekt tätig.",
        },

        research: {
            number: "02",
            title: "Forschung & Publikationen",

            paragraphs: [
                "Im Forschungsprojekt beschäftigte ich mich mit der automatisierten Digitalisierung technischer Bauzeichnungen als Grundlage für digitale Gebäudemodelle und Digital Twins.",
                "Mein eigener Schwerpunkt lag auf der Symbolerkennung in 2D-Bestandsplänen. Hierfür entwickelte ich eigenverantwortlich ein Verfahren, das klassische Bildverarbeitung und Machine Learning kombiniert und damit Informationen für die weitere semantische Verarbeitung der Pläne bereitstellt.",
            ],

            publicationsTitle: "Publikationen",

            publications: [
                {
                    title: "Modular Raster-to-Vector Digitization of Architectural Floor Plans",
                    meta: "WSCG 2026 · Accepted / Forthcoming",
                    href: site.publications.wscg2026,
                },
                {
                    title: "AI-Enhanced Template Matching for Symbol Detection in Technical Drawings",
                    meta: "FTC 2026 · Accepted / Forthcoming",
                    href: site.publications.ftc2026,
                },
            ],

            currentResearchTitle: "Aktuelle Arbeiten",

            currentResearch: {
                title: "From Architectural Plans to Building Models: Raster-to-Vector Conversion, BIM/IFC Integration, and Digital Twin Readiness",
                meta: "Manuscript in internal review",
                href: site.publications.journal2026,
            }
        },

        expertise: {
            number: "03",
            title: "Expertise",

            items: [
                {
                    title: "Data Science & Machine Learning",
                    details:
                        "Datenanalyse · Modellierung · Feature Engineering · Modellevaluation · Hyperparameteroptimierung",
                },
                {
                    title: "ML Engineering",
                    details:
                        "Continuous Integration · ML Pipelines & Tooling · Modellanalyse",
                },
                {
                    title: "Computer Vision & Document Analysis",
                    details:
                        "Bildverarbeitung · Template Matching · Symbolerkennung · technische Zeichnungen",
                },
                {
                    title: "Applied Research",
                    details:
                        "Methodenentwicklung · experimentelle Evaluation · wissenschaftliche Publikationen",
                },
            ],
        },

        documents: {
            number: "04",
            title: "Dokumente",

            items: [
                {
                    title: "Lebenslauf",
                    meta: "PDF · Deutsch",
                    action: "Download",
                    href: site.documents.cvGerman,
                },
                {
                    title: "Curriculum Vitae (Maintenance)",
                    meta: "PDF · English",
                    action: "Download",
                    href: site.documents.cvEnglish,
                },
            ],

            note:
                "Weitere akademische Nachweise und Arbeitszeugnisse sind auf Anfrage verfügbar.",
        },

        contact: {
            number: "05",
            title: "Kontakt",

            items: [
                {
                    label: "E-Mail",
                    value: site.email.label,
                    href: site.email.href,
                },
                {
                    label: "LinkedIn",
                    value: site.linkedin.href
                        ? site.linkedin.label
                        : "wird ergänzt",
                    href: site.linkedin.href,
                },
                {
                    label: "ORCID",
                    value: site.orcid.label,
                    href: site.orcid.href,
                },
            ],
        },

        footer: "Data Science · Applied Research",
    },
} as const;

export type PageContent =
    | typeof content.en
    | typeof content.de;