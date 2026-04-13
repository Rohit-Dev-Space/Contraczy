import GradientText from "../components/GradientText"
import RotatingText from '../components/RotatingText'
import GlareHover from '../components/GlareHover'
import { ArrowUpIcon } from "lucide-react";
import { Zap, Workflow, DollarSign, Users, Bot, Eye, Link } from "lucide-react";
import AnimatedContent from "../components/AnimatedContent";
import { Button } from "../components/ui/button";


export default function Conversion() {

    const whySwitchData = [
        {
            title: "Faster Setup & Quick Adoption",
            description: "Contractzy enables teams to get started quickly with guided onboarding and ready-to-use templates, eliminating long implementation cycles and reducing time to value significantly.",
            icon: Zap,
            text: "text-yellow-300"
        },
        {
            title: "Flexible Workflows That Adapt in Real Time",
            description: "Unlike rigid systems, Contractzy allows teams to modify workflows on the fly—add approvers, adjust steps, and handle changes seamlessly without disrupting ongoing contracts.",
            icon: Workflow,
            text: "text-green-400"
        },
        {
            title: "Transparent, Scalable Pricing",
            description: "Contractzy offers flexible pricing designed for businesses at every stage, ensuring teams can scale their contract management capabilities without the burden of high enterprise costs.",
            icon: DollarSign,
            text: "text-green-400"
        },
        {
            title: "Automation That Reduces Manual Effort",
            description: "Smart templates and automated workflows eliminate repetitive tasks, allowing teams to focus on high-value work while improving accuracy and reducing operational overhead.",
            icon: Bot,
            text: "text-teal-200"
        },
        {
            title: "Centralized Visibility & Organized Repository",
            description: "Contractzy provides a structured, searchable repository that gives teams complete visibility into contracts, approvals, deadlines, and obligations in real time.",
            icon: Eye,
            text: "text-purple-400"
        },
        {
            title: "Seamless Integrations Across Systems",
            description: "By integrating with CRM, ERP, HRMS, and other business tools, Contractzy ensures contracts are connected to existing workflows, enabling smoother collaboration across departments.",
            icon: Link,
            text: "text-gray-400"
        }
    ];

    return (
        <section aria-labelledby="conversion-heading" className="bg-black w-full flex flex-col gap-10 py-20 px-10 items-center justify-center">
            <AnimatedContent
                distance={100}
                direction="vertical"
                reverse={false}
                duration={1}
                ease="power3.out"
                initialOpacity={0}
                animateOpacity
                scale={1}
                threshold={0.1}
                delay={0}
            >
                <div className="w-fit font-extrabold text-white flex text-center items-center justify-center">
                    <h2 id="conversion-heading" className="text-4xl font-medium">Why Choose </h2>
                    <GradientText
                        className="text-5xl font-bold px-3"
                        colors={['#0202b3', '#4c87fc', '#51b9f5']}>
                        <h2>Contractzy </h2>
                    </GradientText>
                    <p className="font-extrabold text-4xl">?</p>
                </div>
            </AnimatedContent>
            <AnimatedContent
                distance={100}
                direction="vertical"
                reverse={false}
                duration={1}
                ease="power3.out"
                initialOpacity={0}
                animateOpacity
                scale={1}
                threshold={0.1}
                delay={0}
            >
                <div className="flex gap-3 justify-center items-center flex-wrap text-center">
                    <p className="text-5xl text-white font-medium">
                        CLM Platform Built for teams that Need
                    </p>
                    <div className="inline-block min-w-[200px]">
                        <RotatingText
                            texts={["Speed", "Flexibility", "Efficiency", "Automation"]}
                            mainClassName="inline-block text-blue-400 font-extrabold text-5xl overflow-hidden"
                            staggerFrom="last"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -20, opacity: 0 }}
                            staggerDuration={0.02}
                            splitLevelClassName="overflow-hidden"
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            rotationInterval={2000}
                        />
                    </div>
                </div>
            </AnimatedContent>
            <div className="w-full flex flex-wrap items-center justify-center gap-10">

                {whySwitchData.map((item, i) => (
                    <AnimatedContent
                        key={i}
                        distance={120}
                        direction="horizontal"
                        reverse={i % 2 === 0}
                        duration={0.8}
                        ease="power3.out"
                        initialOpacity={0}
                        animateOpacity
                        scale={1}
                        threshold={0.15}
                        delay={0}
                    >
                        <div className="flex flex-wrap min-w-1/5 gap-5">
                            <GlareHover height="400" className="w-fit h-fit bg-gradient-to-r from-[#00215f] to-[#2058dc] rounded-2xl p-5 gap-10 items-center justify-center">
                                <div className="w-full flex items-center justify-center gap-2">
                                    <item.icon className={`w-8 h-8 ${item.text}`} />
                                    <h3 className="text-xl text-center text-blue-400 font-bold">{item.title}</h3>
                                </div>
                                <p className="text-gray-300 text-center">{item.description}</p>
                            </GlareHover>
                        </div>
                    </AnimatedContent>
                ))}
            </div>
            <AnimatedContent
                distance={100}
                direction="vertical"
                reverse={false}
                duration={1}
                ease="power3.out"
                initialOpacity={0}
                animateOpacity
                scale={1}
                threshold={0.1}
                delay={0}
            >
                <div className="flex gap-10">
                    <Button aria-label="Book a demo of Contractzy" className="group text-xl flex items-center mt-4 font-medium text-white shadow-xl bg-blue-700 hover:bg-blue-600 rounded-2xl px-8 py-7 cursor-pointer transition-all duration-300">
                        Book Demo
                        <span className="inline-block ml-2 transform transition-transform duration-400 group-hover:rotate-45">
                            <ArrowUpIcon size={35} />
                        </span>
                    </Button>
                    <Button aria-label="Explore Contractzy features" className="group text-xl flex items-center mt-4 font-medium text-white shadow-xl bg-blue-700 hover:bg-blue-600 rounded-2xl px-8 py-7 cursor-pointer transition-all duration-300">
                        Explore
                        <span className="inline-block ml-2 transform transition-transform duration-400 group-hover:rotate-45">
                            <ArrowUpIcon size={35} />
                        </span>
                    </Button>
                </div>
            </AnimatedContent>
        </section>
    )
}