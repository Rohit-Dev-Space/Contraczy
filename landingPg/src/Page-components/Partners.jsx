import { motion } from "framer-motion"
import GradientText from "../components/GradientText";
import CountUp from "../components/CountUp";
import { ArrowUpIcon } from "lucide-react";
import AnimatedContent from '../components/AnimatedContent';
import { Button } from "../components/ui/button";

export default function Partners() {
    const logos = [
        { src: "/bajaj.png", alt: "Bajaj Finance using Contractzy CLM software" },
        { src: "/Anonet.png", alt: "Anonet client of Contractzy contract management platform" },
        { src: "/treebo.png", alt: "Treebo Hotels contract management with Contractzy" },
        { src: "/Bridgestone.png", alt: "Bridgestone managing contracts with Contractzy CLM" },
        { src: "/innoviti.png", alt: "Innoviti using Contractzy for contract lifecycle management" },
        { src: "/FleetX.png", alt: "FleetX contract automation powered by Contractzy" },
        { src: "/ebixcash.png", alt: "EbixCash using Contractzy CLM platform" },
    ]

    const metrics = [
        { num: "2", text: "Faster Contract Turnaround" },
        { num: "40", text: "Less Manual Work" },
        { num: "80", text: "Routine Contract Tasks Automated" },
        { num: "50", text: "Lower Operational costs" },
    ]

    return (
        <section className="overflow-hidden py-10 flex flex-col items-center justify-center relative py-15 gap-10 bg-gradient-to-b from-gray-200 via-gray-100 to-gray-50 rounded-lg">

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
                <header>
                    <h2 className="text-3xl text-center mb-6">
                        The Preferred Contract Lifecycle Management Platform for <br />
                        <span className="font-extrabold">Leading Brands</span>
                    </h2>
                </header>

                <div className="relative w-full h-fit py-10">
                    <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white to-transparent z-10 blur-xs" />
                    <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white to-transparent z-10 blur-xs" />

                    <motion.div
                        className="flex gap-16 w-1/3 px-30 justify-center"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{
                            ease: "linear",
                            duration: 10,
                            repeat: Infinity,
                        }}
                    >
                        {[...logos, ...logos].map((logo, i) => (
                            <img
                                key={i}
                                src={logo.src}
                                alt={logo.alt}
                                className="h-8"
                                loading="lazy"
                            />
                        ))}
                    </motion.div>
                </div>
            </AnimatedContent>

            <div className="bg-gradient-to-l from-blue-700 via-blue-500 to-blue-300 w-full h-5 absolute top-0 shadow-black shadow-2xl"></div>

            <div className="flex w-full items-start justify-between gap-10 px-10 mt-10">

                <AnimatedContent>
                    <div className="w-6/7">
                        <h2 className="font-medium text-6xl">
                            Results That Speak For <br /> Themselves with Better <br />
                            <span className="bg-gradient-to-r to-[#2058dc] from-[#00215f] bg-clip-text text-transparent">
                                Contract Management
                            </span>
                        </h2>

                        <p className="w-full my-8 text-lg">
                            Outdated, complex contract lifecycle management systems slow teams down. With a more flexible and intuitive CLM platform, Contractzy helps streamline approvals, improve visibility, and eliminate manual work — enabling faster execution and smarter decision-making.
                        </p>

                        <Button
                            onClick={() => {
                                window.gtag('event', 'demo_click', {
                                    event_category: 'CTA',
                                    event_label: 'Book Demo Button'
                                });
                            }}
                            className="group text-xl flex items-center mt-4 font-medium text-white shadow-xl bg-black hover:bg-blue-600 rounded-2xl px-10 py-7 cursor-pointer transition-all duration-300">
                            Book a Demo with Contractzy
                            <span className="inline-block ml-2 transform transition-transform duration-400 group-hover:rotate-45">
                                <ArrowUpIcon size={25} />
                            </span>
                        </Button>
                    </div>
                </AnimatedContent>

                <div className="flex w-full flex-wrap gap-10 space-x-12 space-y-3 items-center justify-center">
                    {metrics.map((info, i) => (
                        <div key={i} className="flex flex-col gap-5">
                            <GradientText
                                colors={["#2058dc", "#00215f", "#2058dc"]}
                                className="flex flex-col gap-5"
                            >
                                <CountUp
                                    from={0}
                                    to={info.num}
                                    separator=","
                                    direction="up"
                                    duration={1}
                                    className="count-up-text text-8xl font-bold"
                                    startCounting
                                />
                                <p className="text-7xl inline-block ml-2">
                                    {i == 0 ? "X" : "%"}
                                </p>
                            </GradientText>
                            <p className="text-center text-lg">{info.text}</p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}