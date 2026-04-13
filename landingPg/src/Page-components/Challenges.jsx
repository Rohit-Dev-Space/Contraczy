import { motion, AnimatePresence } from "framer-motion"
import { ArrowUpIcon } from "lucide-react"
import AnimatedContent from "../components/AnimatedContent"
import { Button } from "../components/ui/button"

export default function Challenges() {

    const gridItems = [
        {
            id: 1,
            direction: { x: -100, y: 0 },
            dimensions: "basis-1/5 min-h-[520px] h-full",
            title1: "Overly Complex and Rigid Workflows",
            content1: "Contractzy Adapts to How You Work by providing features like drag-and-drop workflow builder lets any team customize their contract process without dev help — launch in hours, not months.",
            image: "https://cdn.prod.website-files.com/67c92cd0ce3ef590bee3ffbb/67da9d839a48172e9425dd67_Group%2030117.png",
            bgGradient: "radial-gradient(ellipse at 50% 110%, #1e3a8a 0%, #1e40af 25%, #0f172a 70%)",
        },
        {
            id: 2,
            direction: { x: 0, y: -100 },
            dimensions: "basis-2/4 h-[245px]",
            title1: "Long Setup and Onboarding Times",
            content1: "Contractzy onboards teams in under 24 hours with guided setup, pre-built templates, and dedicated support — zero implementation partner needed.",
            image: "/sol1.png",
            bgGradient: "radial-gradient(ellipse at 80% 50%, #1d4ed8 0%, #1e3a8a 35%, #0f172a 75%)",
        },
        {
            id: 3,
            direction: { x: 100, y: 0 },
            dimensions: "basis-1/5 min-h-[540px] h-full",
            title1: "Expensive and Not Startup-Friendly",
            content1: "Contractzy Offers Transparent Pricing by providing flexible plans that let teams scale their contract management without hidden costs — pay only for what you need, as you grow.",
            image: "sol3.png",
            bgGradient: "radial-gradient(ellipse at 50% 100%, #1e40af 0%, #1e3a8a 30%, #0f172a 70%)",
            accentColor: "#93c5fd",
        },
        {
            id: 4,
            direction: { x: -100, y: 100 },
            dimensions: "basis-1/4 h-[280px]",
            title1: "Not Intuitive for Non-Legal Teams",
            content1: "Contractzy adapts to your workflow with intuitive dashboards that let any team track legal metrics effortlessly.",
            image: "sol2.png",
            bgGradient: "radial-gradient(ellipse at 50% 90%, #1d4ed8 0%, #1e3a8a 30%, #0a0a1a 70%)",
        },
        {
            id: 5,
            direction: { x: 100, y: 100 },
            dimensions: "basis-1/4 h-[280px]",
            title1: "Hard to Adapt Workflows on the Fly",
            content1: "Contractzy lets you modify workflows anytime—adjust steps, reassign approvals, and stay flexible without restarting processes.",
            image: "sol4.png",
            bgGradient: "radial-gradient(ellipse at 20% 80%, #1e3a8a 0%, #1e40af 30%, #0f172a 70%)",
        },
    ]

    return (
        <section className="relative w-full py-20 px-10 pb-50 gap-18 flex flex-col items-center justify-center">

            {/* Heading */}
            <div className="w-full flex flex-col items-center justify-center gap-8">
                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-5xl font-extrabold text-center"
                >
                    Problems Faced with Traditional Contract Tools
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-lg w-1/2 text-center"
                >
                    Traditional contract tools are often slow, rigid, and difficult to use. What should streamline workflows ends up creating bottlenecks that hold teams back.
                </motion.p>
            </div>

            {/* Grid */}
            <div className="flex flex-wrap w-full items-start justify-center gap-5">

                <AnimatePresence>
                    {gridItems.map((info, i) => (
                        <motion.div
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
                            whileHover={{
                                scale: 1.03,
                            }}
                            className={`flex ${info.dimensions} rounded-xl overflow-hidden ${info.id === 4 || info.id === 5 ? "-mt-75" : ""}`}
                            style={{ background: info.bgGradient }}
                        >
                            <div className="flex relative w-full h-full flex-col gap-5 p-5 overflow-hidden">

                                <h2
                                    className="text-3xl font-bold text-white"
                                    style={{ color: info.accentColor }}
                                >
                                    {info.title1}
                                </h2>

                                <p
                                    className={`text-lg ${info.id === 2 ? "w-2/3" : ""} ${info.id === 4 || info.id === 5 ? "text-sm -mb-3" : ""}`}
                                    style={{ color: "#e0e0e0" }}
                                >
                                    {info.content1}
                                </p>

                                <img
                                    src={info.image}
                                    alt=""
                                    className={`${info.id === 2 ? "absolute -right-5 -bottom-5 -rotate-12 w-auto scale-110 h-40" : ""} h-40 rounded-lg`}
                                />

                            </div>
                        </motion.div>
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
                        <Button className="group text-lg flex items-center mt-4 font-medium text-white shadow-xl bg-black hover:bg-blue-600 rounded-2xl px-10 py-7 cursor-pointer transition-all duration-300">
                            Fix Your Contract Workflow
                            <span className="inline-block ml-2 transform transition-transform duration-400 group-hover:rotate-45">
                                <ArrowUpIcon size={25} />
                            </span>
                        </Button>
                    </AnimatedContent>
                </div>
            </div>
        </section >
    )
}