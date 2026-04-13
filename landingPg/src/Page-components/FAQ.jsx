import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import AnimatedContent from "../components/AnimatedContent"

const faqs = [
    {
        question: "Why should I choose Contractzy for contract management?",
        answer: "Contractzy combines ease of use, flexibility, and affordability — making it suitable for startups, SMEs, and enterprises. It's designed for legal and non-legal teams alike, with smart automation, AI-powered templates, and seamless integrations."
    },
    {
        question: "How long does implementation take?",
        answer: "Our rapid implementation process gets you up and running in weeks, not months — with minimal IT involvement and a smooth onboarding experience from day one."
    },
    {
        question: "What kind of support can I expect after implementation?",
        answer: "Our proactive customer support team is always available. From onboarding to day-to-day queries, we resolve issues quickly and efficiently. Clients consistently praise our response times and problem-solving approach."
    },
    {
        question: "Can Contractzy handle both SMEs and large enterprises?",
        answer: "Yes. Contractzy supports businesses of all sizes — from small teams to global enterprises — with scalable workflows, dynamic automation, and features that grow with your business."
    },
    {
        question: "How does pricing work?",
        answer: "We offer flexible, transparent pricing plans designed for businesses of all sizes. You only pay for what you need, making Contractzy significantly more cost-effective compared to enterprise-only solutions."
    },
    {
        question: "Can Contractzy integrate with CRMs, ERPs, and productivity tools?",
        answer: "Absolutely. Contractzy offers seamless integrations with CRMs, ERPs, HRMS, and productivity tools — ensuring contracts flow smoothly across your existing systems and teams."
    },
    {
        question: "Is Contractzy secure for sensitive contracts?",
        answer: "Yes. Contractzy prioritizes data security and compliance. The platform uses advanced encryption, role-based access controls, and regular security audits to ensure your contracts are safe and globally compliant."
    },
    {
        question: "How quickly can businesses see ROI with Contractzy?",
        answer: "Most businesses report ROI within the first few months. By reducing manual work, accelerating approvals, and preventing missed obligations, teams save significant time and cut operational costs almost immediately."
    },
    {
        question: "How hard is it to migrate from SpotDraft to Contractzy?",
        answer: " Very straightforward. Our team handles the migration for you — contracts, templates, and workflows transfer over with dedicated support. Most teams are fully live within 24–48 hours."
    },
    {
        question: "Will my existing contracts and data transfer over ?",
        answer: " Yes. Contractzy supports bulk import of contracts in PDF, Word, and other formats. Your contract history, metadata, and key dates come with you."
    },
]

export default function FAQ() {
    return (
        <section className="w-full py-20 px-10 flex flex-col items-center justify-center">
            <div className="w-full max-w-3xl flex flex-col gap-12">
                <AnimatedContent
                    distance={120}
                    direction="vertical"
                    reverse={true}
                    duration={1.2}
                    ease="power3.out"
                    initialOpacity={0}
                    animateOpacity
                    scale={1}
                    threshold={0.2}
                    delay={0.4}
                >
                    <div className="flex flex-col items-center justify-center text-center gap-8">
                        <h1 className="text-5xl font-extrabold text-blue-600">Got Questions? <br />We’ve Got Answers</h1>
                        <p className="text-gray-500 text-lg">
                            Everything you need to know about Contractzy. Can't find an answer?{' '}
                            <a href="#" className="text-blue-600 underline underline-offset-2">Talk to our team.</a>
                        </p>
                    </div>
                </AnimatedContent>

                <Accordion type="single" collapsible className="w-full flex flex-col cursor-pointer gap-2">
                    {faqs.map((faq, index) => (
                        <AnimatedContent
                            key={index}
                            distance={120}
                            direction="horizontal"
                            reverse={index % 2 === 0}
                            duration={0.8}
                            ease="power3.out"
                            initialOpacity={0}
                            animateOpacity
                            scale={1}
                            threshold={0.15}
                            delay={0}
                        >
                            <AccordionItem
                                key={index}
                                value={`item-${index}`}
                                className="border border-gray-200 rounded-xl px-6 cursor-pointer shadow-sm bg-white"
                            >
                                <AccordionTrigger className="text-base font-semibold text-gray-900 cursor-pointer hover:no-underline py-5 text-left">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-gray-500 text-base pb-5 cursor-pointer leading-relaxed">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        </AnimatedContent>
                    ))}
                </Accordion>

            </div>
        </section>
    )
}