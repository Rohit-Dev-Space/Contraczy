import { motion, AnimatePresence } from "framer-motion"
import { ArrowUpIcon } from "lucide-react"
import AnimatedContent from "../components/AnimatedContent"
import { Button } from "../components/ui/button"
import PixelTransition from '../components/PixelTransition';
import BlurText from "../components/BlurText";

const gridItems = [
    {
        id: 1,
        direction: { x: -100, y: 0 },
        dimensions: "basis-1/5 min-h-[540px] h-full",
        painTitle: "Rigid, Pre-Defined Workflows",
        painContent: "SpotDraft relies heavily on structured, pre-configured workflows that don't adapt well to real-world contract scenarios. When deals require adding new approvers, changing steps, or handling exceptions, teams often face delays or manual workarounds, slowing down the entire contract lifecycle.",
        title1: "Dynamic Workflows That Adapt Instantly",
        content1: "Contractzy lets you customize workflows in real-time with a drag-and-drop builder—no developer support needed. Whether it's adding approvals or modifying steps mid-process, your workflows adapt instantly as deals evolve.",
        image: "https://cdn.prod.website-files.com/67c92cd0ce3ef590bee3ffbb/67da9d839a48172e9425dd67_Group%2030117.png",
        alt: "Illustration of dynamic drag-and-drop workflow builder",
        bgGradient: "radial-gradient(ellipse at 50% 110%, #1e3a8a 0%, #1e40af 25%, #0f172a 70%)",
    },
    {
        id: 2,
        direction: { x: 0, y: -100 },
        dimensions: "basis-2/4 h-[245px]",
        painTitle: "Slow Setup & Implementation",
        painContent: "Getting started with SpotDraft can be time-consuming, often requiring significant setup effort, onboarding coordination, and dependency on external support teams. This delays time-to-value and makes it harder for fast-moving businesses to adopt the system quickly.",
        title1: "Go Live in Under 24 Hours",
        content1: "Contractzy offers rapid onboarding with guided setup, pre-built templates, and hands-on support—so your team can start managing contracts within a day, without relying on external implementation partners.",
        image: "/sol1.png",
        alt: "Contractzy rapid onboarding dashboard screenshot",
        bgGradient: "radial-gradient(ellipse at 80% 50%, #1d4ed8 0%, #1e3a8a 35%, #0f172a 75%)",
    },
    {
        id: 3,
        direction: { x: 100, y: 0 },
        dimensions: "basis-1/5 min-h-[540px] h-full",
        painTitle: "Pricing That Doesn't Scale",
        painContent: "SpotDraft's enterprise-focused pricing model can be restrictive for startups and growing teams. High upfront costs and rigid plans make it difficult for businesses to scale their contract management processes without significantly increasing expenses.",
        title1: "Flexible Pricing That Grows With You",
        content1: "Contractzy offers transparent, scalable pricing that adapts to your business stage. You only pay for what you need, making it cost-effective for startups, SMEs, and enterprises alike.",
        image: "sol3.png",
        alt: "Flexible pricing tiers for startups and enterprises",
        bgGradient: "radial-gradient(ellipse at 50% 100%, #1e40af 0%, #1e3a8a 30%, #0f172a 70%)",
        accentColor: "#93c5fd",
    },
    {
        id: 4,
        direction: { x: -100, y: 100 },
        dimensions: "basis-1/4 h-[280px]",
        painTitle: "Complex for Non-Legal Teams",
        painContent: "SpotDraft is often optimized for legal users, which can make it overwhelming for sales, procurement, and operations teams. Navigation and simple tasks become time-consuming, reducing overall team productivity.",
        title1: "Built for Every Team, Not Just Legal",
        content1: "Contractzy offers a simple, intuitive interface that any team can use without friction.",
        image: "sol2.png",
        alt: "Simple contract interface for non-legal teams",
        bgGradient: "radial-gradient(ellipse at 50% 90%, #1d4ed8 0%, #1e3a8a 30%, #0a0a1a 70%)",
    },
    {
        id: 5,
        direction: { x: 100, y: 100 },
        dimensions: "basis-1/4 h-[280px]",
        painTitle: "Difficult to Modify Workflows",
        painContent: "In SpotDraft, making changes to workflows once a contract is in progress can be challenging. Teams often need to restart processes or rely on manual interventions.",
        title1: "Edit Workflows Anytime",
        content1: "Contractzy lets you update workflows instantly without restarting processes.",
        image: "sol4.png",
        alt: "Edit workflow mid-process without restarting",
        bgGradient: "radial-gradient(ellipse at 20% 80%, #1e3a8a 0%, #1e40af 30%, #0f172a 70%)",
    }
]

export default function Challenges() {

    return (
        <section
            aria-labelledby="challenges-heading"
            className="relative w-full py-20 px-10 pb-50 gap-18 flex flex-col items-center justify-center"
        >

            <div className="w-full flex flex-col items-center justify-center gap-8">
                <motion.h2
                    id="challenges-heading"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-5xl font-extrabold text-center"
                >
                    Common Challenges Teams Face with SpotDraft
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-lg w-1/2 text-center"
                >
                    SpotDraft helps manage contracts, but teams often face limitations that slow down workflows, reduce flexibility, and make scaling difficult.
                </motion.p>

                <BlurText
                    text="Hover a card to see the Contractzy solution →"
                    delay={200}
                    animateBy="words"
                    direction="top"
                    className="text-xl leading-tight font-semibold text-center text-blue-500"
                />
            </div>

            <ul
                aria-label="SpotDraft challenges and Contractzy solutions"
                className="flex flex-wrap w-full items-start justify-center gap-5 list-none p-0 m-0"
            >
                <AnimatePresence>
                    {gridItems.map((info, i) => (
                        <motion.li
                            key={info.id}
                            initial={{
                                opacity: 0,
                                x: info.direction.x,
                                y: info.direction.y,
                                scale: 0.8
                            }}
                            whileInView={{
                                opacity: 1,
                                x: 0,
                                y: 0,
                                scale: 1
                            }}
                            viewport={{ once: true, margin: "-100px" }}
                            exit={{ opacity: 0 }}
                            transition={{
                                duration: 0.6,
                                delay: i * 0.15,
                                ease: "easeOut"
                            }}
                            whileHover={{ scale: 1.03 }}
                            className={`relative ${info.dimensions} rounded-xl overflow-hidden ${info.id === 4 || info.id === 5 ? "-mt-75" : ""}`}
                        >
                            <article aria-label={info.painTitle} className="w-full h-full">
                                <PixelTransition
                                    gridSize={12}
                                    duration={0.6}
                                    className={`${info.dimensions}`}
                                    style={{ width: "100%", height: "100%" }}
                                    firstContent={
                                        <div className="flex w-full h-full flex-col gap-5 p-5">
                                            <span aria-hidden="true" className="w-fit text-xs font-semibold px-3 py-1 rounded-full bg-red-500/20 text-red-300 border border-red-500/30">
                                                SpotDraft Pain
                                            </span>
                                            <h3 className="text-2xl font-bold text-white leading-tight">
                                                {info.painTitle}
                                            </h3>
                                            <p className="text-base leading-relaxed" style={{ color: "#e0e0e0" }}>
                                                {info.painContent}
                                            </p>
                                        </div>
                                    }
                                    secondContent={
                                        <div className="flex w-full h-full flex-col gap-2 p-5" style={{ background: info.bgGradient }}>
                                            <span aria-hidden="true" className="w-fit text-xs font-semibold px-3 py-1 rounded-full bg-green-500/20 text-green-300 border border-green-500/30">
                                                Contractzy Solution
                                            </span>
                                            <h3
                                                className="text-2xl font-bold leading-tight"
                                                style={{ color: info.accentColor ?? "#ffffff" }}
                                            >
                                                {info.title1}
                                            </h3>
                                            <p
                                                className={`text-base leading-relaxed ${info.id === 2 ? "w-2/3" : ""} ${info.id === 4 || info.id === 5 ? "-mt-5" : ""}`}
                                                style={{ color: "#e0e0e0" }}
                                            >
                                                {info.content1}
                                            </p>
                                            <img
                                                src={info.image}
                                                alt={info.alt}
                                                loading="lazy"
                                                width={160}
                                                height={144}
                                                className={`rounded-lg object-contain ${info.id === 2
                                                    ? "absolute -right-5 -bottom-5 -rotate-12 w-auto scale-110 h-40"
                                                    : "h-36 w-auto"
                                                    }`}
                                            />
                                        </div>
                                    }
                                />
                            </article>
                        </motion.li>
                    ))}
                </AnimatePresence>

                <div className="absolute -translate-x-1/2 left-1/2 bottom-20">
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
                        <Button
                            type="button"
                            className="group text-lg flex items-center mt-4 font-medium text-white shadow-xl bg-black hover:bg-blue-600 rounded-2xl px-10 py-7 cursor-pointer transition-all duration-300"
                        >
                            See Contractzy in Action
                            <span aria-hidden="true" className="inline-block ml-2 transform transition-transform duration-400 group-hover:rotate-45">
                                <ArrowUpIcon size={25} />
                            </span>
                        </Button>
                    </AnimatedContent>
                </div>
            </ul>
        </section>
    )
}