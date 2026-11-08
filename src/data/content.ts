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
                "Nearly two years of experience in research and development.",
            primaryAction: "Contact",
            secondaryAction: "Curriculum Vitae",
        },

        profile: {
            number: "01",
            title: "Profile",
            text:
                "I hold a B. Sc. in Computer Science from Darmstadt University of Applied Sciences and am currently pursuing an M. Sc. in Data Science. Alongside my studies, I spent 21 months working as a research associate on a research and development project.",
        },

        research: {
            number: "02",
            title: "Research & Publications",

            paragraphs: [
                "My previous research addressed the automated digitization of legacy architectural drawings, particularly symbol detection and raster-to-vector processing. My main contribution was a symbol-detection approach for 2D legacy floor plans that combines classical image processing with machine learning. The resulting work received an Honorable Mention at FTC 2026.",
                "A state-of-the-art manuscript currently under review examines the broader transformation from architectural plans through vector representations and 3D building models to BIM/IFC representations and, ultimately, Digital Twin readiness.",
            ],

            publicationsTitle: "Publications",

            publications: [
                {
                    title: "Modular Raster-to-Vector Digitization of Architectural Floor Plans",
                    meta: "WSCG 2026 · First Author · Published",
                    description:
                        "Presents a modular raster-to-vector pipeline for heterogeneous and often degraded legacy architectural drawings, together with an evidence chain for evaluation where comprehensive ground truth is limited or unavailable.",
                    href: site.publications.wscg2026,
                },
                {
                    title: "AI-Enhanced Template Matching for Symbol Detection in Technical Drawings",
                    meta: "FTC 2026 · First Author · Presented · Honorable Mention",
                    description:
                       "Combines template matching with an XGBoost classifier operating in feature space, where each candidate is represented by its similarity to the queried template rather than local patch appearance, outperforming neural patch baselines.",
                    href: site.publications.ftc2026,
                },
            ],

            currentResearchTitle: "Current Manuscript",

            currentResearch: {
                title: "From Architectural Plans to Digital Building Models: Raster-to-Vector Conversion, BIM/IFC Integration, and Digital Twin Readiness",
                meta: "ITcon · Sole Author · Under Review",
                description:
                    "Reviews the state of the art across the complete transformation chain from 2D architectural plans through raster-to-vector conversion, 3D model generation, and BIM/IFC integration to Digital Twin readiness, and introduces a maturity framework, analytical pipeline, and eight comparison dimensions for positioning heterogeneous contributions across these stages.",
                href: site.publications.journal2026,
            }
        },

        expertise: {
            number: "03",
            title: "Expertise",

            items: [
                {
                    title: "Data Science & Statistical Modeling",
                    details:
                        "Exploratory Data Analysis · Data Preprocessing · Feature Engineering · Multivariate Statistics · Time Series Analysis · Business Intelligence",
                },
                {
                    title: "Machine Learning & AI",
                    details:
                        "Decision Trees & Ensembles · SVM · Neural Networks & Transformers · Deep Reinforcement Learning · Model Evaluation & Optimization",
                },
                {
                    title: "ML Engineering & Software Systems",
                    details:
                        "Continuous Integration · ML Pipelines & Tooling · Model Analysis · Unix/Linux · Containerization · Distributed Systems · Databases",
                },
                {
                    title: "Applied Research & Computer Vision",
                    details:
                        "Method Development · Experimental Evaluation · Image Processing · Document Analysis · Digital Twins · Scientific Publications",
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
                    value: site.linkedin.label,
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
                "Knapp zwei Jahre Erfahrung in Forschung und Entwicklung.",
            primaryAction: "Kontakt",
            secondaryAction: "Lebenslauf",
        },

        profile: {
            number: "01",
            title: "Profil",
            text:
                "Ich habe einen B. Sc. in Informatik an der Hochschule Darmstadt abgeschlossen und absolviere derzeit den M. Sc. Data Science. Parallel zum Studium war ich 21 Monate als wissenschaftlicher Mitarbeiter in einem Forschungs- und Entwicklungsprojekt tätig.",
        },

        research: {
            number: "02",
            title: "Forschung & Publikationen",

            paragraphs: [
                "Meine bisherige Forschung befasste sich mit der automatisierten Digitalisierung bestehender Architekturpläne, insbesondere mit Symbolerkennung und Raster-to-Vector Transformation. Mein eigener Schwerpunkt lag auf der Entwicklung eines Verfahrens zur Symbolerkennung in 2D-Bestandsplänen, das klassische Bildverarbeitung mit Machine Learning kombiniert. Die daraus hervorgegangene Arbeit erhielt auf der FTC 2026 eine Honorable Mention.",
                "Ein derzeit begutachtetes State-of-the-Art-Manuskript untersucht die übergeordnete Transformation von Architekturplänen über Vektorrepräsentationen und 3D-Gebäudemodelle bis hin zu BIM/IFC-Repräsentationen und schließlich zur Digital-Twin-Readiness.",
            ],


            publicationsTitle: "Publikationen",

            publications: [
                {
                    title: "Modular Raster-to-Vector Digitization of Architectural Floor Plans",
                    meta: "WSCG 2026 · Erstautor · Veröffentlicht",
                    description:
                        "Stellt eine modulare Raster-to-Vector-Pipeline für heterogene und häufig degradierte Bestandspläne sowie eine Evidenzkette zur Evaluation vor, wenn umfassende Ground Truth nur eingeschränkt oder nicht verfügbar ist.",
                    href: site.publications.wscg2026,
                },
                {
                    title: "AI-Enhanced Template Matching for Symbol Detection in Technical Drawings",
                    meta: "FTC 2026 · Erstautor · Präsentiert · Honorable Mention",
                    description:
                        "Kombiniert Template Matching mit einem XGBoost-Klassifikator, der im Merkmalsraum arbeitet. Dabei wird jede Kandidatenregion über ihre Ähnlichkeit zum jeweils abgefragten Template repräsentiert statt über das lokale Erscheinungsbild des Bildausschnitts; der Ansatz übertrifft damit neuronale Patch-Baselines.",
                    href: site.publications.ftc2026,
                },
            ],

            currentResearchTitle: "Aktuelles Manuskript",

            currentResearch: {
                title: "From Architectural Plans to Digital Building Models: Raster-to-Vector Conversion, BIM/IFC Integration, and Digital Twin Readiness",
                meta: "ITcon · Alleinautor · In Review",
                description:
                    "Analysiert den Stand der Forschung entlang der vollständigen Transformationskette von 2D-Architekturplänen über Raster-to-Vector-Konvertierung, 3D-Modellerzeugung und BIM/IFC-Integration bis hin zur Digital-Twin-Readiness und führt hierfür klar abgegrenzte Reifegrade, eine analytische Pipeline sowie acht Vergleichsdimensionen zur Einordnung heterogener Forschungsbeiträge ein.",
                href: site.publications.journal2026,
            },
        },

        expertise: {
            number: "03",
            title: "Expertise",

            items: [
                {
                    title: "Data Science & Statistical Modeling",
                    details:
                        "Explorative Datenanalyse · Datenvorverarbeitung · Feature Engineering · Multivariate Statistik · Zeitreihenanalyse · Business Intelligence",
                },
                {
                    title: "Machine Learning & AI",
                    details:
                        "Entscheidungsbäume & Ensembles · SVM · Neuronale Netze & Transformer · Deep Reinforcement Learning · Modellevaluation & Optimierung",
                },
                {
                    title: "ML Engineering & Software Systems",
                    details:
                        "Continuous Integration · ML Pipelines & Tooling · Modellanalyse · Unix/Linux · Containerisierung · Verteilte Systeme · Datenbanken",
                },
                {
                    title: "Applied Research & Computer Vision",
                    details:
                        "Methodenentwicklung · experimentelle Evaluation · Bildverarbeitung · Document Analysis · Digital Twins · wissenschaftliche Publikationen",
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