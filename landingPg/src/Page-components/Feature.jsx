import { Scale, ShoppingCart, DollarSign, TrendingUp, Users, ArrowUpIcon } from "lucide-react";
import AnimatedContent from "../components/AnimatedContent";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Button } from "../components/ui/button";

export default function Feature() {

    const tabContentData = [
        {
            value: "account",
            title: "Smarter Legal Operations",
            description: "Automate contract drafting, approvals, and compliance workflows with smart templates and dynamic processes. Reduce repetitive legal work while maintaining full control and visibility across every contract stage.",
            image: "/feature1.png"
        },
        {
            value: "Procurement",
            title: "Streamlined Vendor Management",
            description: "Manage vendor agreements, approvals, and renewals with structured workflows and centralized visibility. Ensure faster procurement cycles while staying on top of obligations and compliance requirements.",
            image: "https://cdn.prod.website-files.com/67c92cd0ce3ef590bee3ffbb/67e52d0e0a588f0d43221904_Group%2030619.png"

        },
        {
            value: "Finance",
            title: "Better Financial Control",
            description: "Track financial obligations, approval processes, and contract-linked spending with complete transparency. Minimize risks and ensure compliance with automated workflows and real-time insights.",
            image: "https://cdn.prod.website-files.com/67c92cd0ce3ef590bee3ffbb/67e52d660336b6f5ba7e481f_Group%2030634.png"
        },
        {
            value: "Sales",
            title: "Faster Deal Closures",
            description: "Accelerate sales cycles with instant contract generation, seamless approvals, and real-time tracking. Eliminate delays and close deals faster with streamlined, automated workflows.",
            image: "https://cdn.prod.website-files.com/67c92cd0ce3ef590bee3ffbb/67e5328936563b8847ebee89_Group%2030636.png"
        },
        {
            value: "HR",
            title: "Effortless Employee Onboarding",
            description: "Simplify employee contract management from offer letters to compliance tracking. Store, sign, and manage all HR documents in one place for a smooth and hassle-free onboarding experience.",
            image: "https://cdn.prod.website-files.com/67c92cd0ce3ef590bee3ffbb/67e52dda8816ef59cbc2ca75_Group%2030669.png"
        }
    ];

    return (
        <section className="w-full py-20 px-10 flex flex-col gap-10">
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
                <div className="w-full flex flex-col items-center justify-center gap-10">
                    <h1 className="text-4xl font-extrabold">Elevating Performance Across Every Department</h1>
                    <p className="w-1/2 font-medium text-center">Empowering every stakeholder to navigate the contract lifecycle with effortless clarity and institutional confidence. From creation to execution and beyond, streamline workflows, improve collaboration, and ensure every contract moves forward with speed and control.</p>
                </div>
            </AnimatedContent>

            <div className="w-full flex flex-col items-center justify-center">
                <Tabs defaultValue="account" className="w-[800px]">
                    <div className="flex items-center justify-center gap-5">
                        <img src="/Contractzy-logo2.png" alt="Contractzy Logo" className="w-6 h-8 hover:rotate-360 transform transition-all duration-500" />
                        <TabsList className="w-2/3 py-7 px-2">
                            <TabsTrigger value="account" className="cursor-pointer py-5 flex items-center gap-2">
                                <Scale size={20} /> Legal
                            </TabsTrigger>
                            <TabsTrigger value="Procurement" className="cursor-pointer py-5 flex items-center gap-2">
                                <ShoppingCart size={20} /> Procurement
                            </TabsTrigger>
                            <TabsTrigger value="Finance" className="cursor-pointer py-5 flex items-center gap-2">
                                <DollarSign size={20} /> Finance
                            </TabsTrigger>
                            <TabsTrigger value="Sales" className="cursor-pointer py-5 flex items-center gap-2">
                                <TrendingUp size={20} /> Sales
                            </TabsTrigger>
                            <TabsTrigger value="HR" className="cursor-pointer py-5 flex items-center gap-2">
                                <Users size={20} /> HR
                            </TabsTrigger>
                        </TabsList>
                    </div>

                    <div className="mt-10">
                        {tabContentData.map((content, i) => (
                            <TabsContent value={content.value} key={i}>
                                <div className="w-full max-w-4xl mx-auto rounded-2xl p-10 flex items-center justify-between bg-gradient-to-r from-[#00215f] via-[#2058dc] to-[#4c87fc]">
                                    <div className="flex flex-col gap-5 w-1/2">
                                        <h2 className="text-3xl font-bold text-white">{content.title}</h2>
                                        <p className="text-gray-200">
                                            {content.description}
                                        </p>
                                        <Button className="w-fit group text-lg flex items-center mt-4 font-medium text-white shadow-xl bg-black hover:bg-blue-600 rounded-2xl px-5 py-2 cursor-pointer transition-all duration-300">
                                            Checkout
                                            <span className="inline-block ml-2 transform transition-transform duration-400 group-hover:rotate-45">
                                                <ArrowUpIcon size={25} />
                                            </span>
                                        </Button>
                                    </div>
                                    <div className="w-1/2 flex items-center justify-center">
                                        <img
                                            src={content.image}
                                            alt="preview"
                                            className="rounded-xl scale-105 hover:scale-110 transition-transform duration-500"
                                        />
                                    </div>
                                </div>
                            </TabsContent>
                        ))}
                    </div>
                </Tabs>
            </div>
        </section>
    )
}