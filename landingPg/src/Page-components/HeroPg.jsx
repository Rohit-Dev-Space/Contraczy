import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "../components/ui/navigation-menu"
import Aurora from "../components/Aurora"
import { Button } from "../components/ui/button"
import BlurText from "../components/BlurText"
import { useState } from "react"
import { ArrowUpIcon, ChartNoAxesCombined, FileClock, FileText, FolderOpenDot, Globe, ReceiptText, Signature, SparklesIcon, ThumbsDown, ThumbsUp } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"

const Icon = ({ d, color = "currentColor" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"
        className="w-5 h-5" fill={color} aria-hidden>
        <path d={d} />
    </svg>
)

const ICONS = {
    create: "M224,56V200a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V56A16,16,0,0,1,48,40H208A16,16,0,0,1,224,56ZM168,128H136V96a8,8,0,0,0-16,0v32H88a8,8,0,0,0,0,16h32v32a8,8,0,0,0,16,0V144h32a8,8,0,0,0,0-16Z",
    negotiate: "M232,64a16,16,0,0,0-16-16H40A16,16,0,0,0,24,64V168a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16ZM216,168H40V64H216ZM80,232a8,8,0,0,1-8,8H48a8,8,0,0,1,0-16H72A8,8,0,0,1,80,232Zm128,0a8,8,0,0,1-8,8H176a8,8,0,0,1,0-16h24A8,8,0,0,1,208,232Z",
    approve: "M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160ZM200,216H56V40h88V88a8,8,0,0,0,8,8h48V216Zm-42.34-77.66-48,48a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L104,169.37l42.34-42.35a8,8,0,0,1,11.32,11.32Z",
    sign: "M224,56V200a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V56A16,16,0,0,1,48,40H208A16,16,0,0,1,224,56ZM170.34,141.66a8,8,0,0,0-11.32,0L144,156.69V104a8,8,0,0,0-16,0v52.69l-15.02-15.03a8,8,0,1,0-11.32,11.32l24,24a8,8,0,0,0,11.32,0l24-24A8,8,0,0,0,170.34,141.66Z",
    store: "M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160ZM200,216H56V40h88V88a8,8,0,0,0,8,8h48V216Z",
    track: "M232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Zm-56,0a32,32,0,1,1-32-32A32,32,0,0,1,160,128Z",
    integrations: "M227.73,95.45,216,84V40a8,8,0,0,0-8-8H168a8,8,0,0,0-8,8V56H96V40a8,8,0,0,0-8-8H48a8,8,0,0,0-8,8V84L28.27,95.45A16,16,0,0,0,24,107.31V208a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V107.31A16,16,0,0,0,227.73,95.45Z",
    risk: "M229.66,218.34l-48.06-48.07a88,88,0,1,0-11.31,11.31l48.06,48.07a8,8,0,0,0,11.31-11.31ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Zm104,0a8,8,0,0,1-8,8H112v24a8,8,0,0,1-16,0V120H72a8,8,0,0,1,0-16h24V80a8,8,0,0,1,16,0v24h24A8,8,0,0,1,144,112Z",
    summary: "M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM72,168a8,8,0,0,1,0-16h48a8,8,0,0,1,0,16Zm0-32a8,8,0,0,1,0-16h112a8,8,0,0,1,0,16Zm0-32a8,8,0,0,1,0-16h112a8,8,0,0,1,0,16Z",
    metadata: "M232,56V200a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V56A16,16,0,0,1,40,40H216A16,16,0,0,1,232,56ZM88,96H56a8,8,0,0,0,0,16H88a8,8,0,0,0,0-16Zm0,40H56a8,8,0,0,0,0,16H88a8,8,0,0,0,0-16Zm112-40H128a8,8,0,0,0,0,16h72a8,8,0,0,0,0-16Zm0,40H128a8,8,0,0,0,0,16h72a8,8,0,0,0,0-16Z",
    legal: "M244,216H228V102.63l9.56-4.78A8,8,0,0,0,232,80H208V72a8,8,0,0,0-8-8H56a8,8,0,0,0-8,8v8H24a8,8,0,0,0-3.56,15.22L28,99.63V216H12a8,8,0,0,0,0,16H244a8,8,0,0,0,0-16Z",
    procurement: "M222.14,58.87l-96-32a8,8,0,0,0-5.12,0l-96,32A8,8,0,0,0,24,72V80c0,89.44,48.84,137.49,99.07,154.63a8,8,0,0,0,5.86,0C179.16,217.49,232,169.44,232,80V72A8,8,0,0,0,222.14,58.87Z",
    finance: "M152,120H136V56h8a32,32,0,0,1,32,32,8,8,0,0,0,16,0,48.05,48.05,0,0,0-48-48H136V24a8,8,0,0,0-16,0V40H104A48.05,48.05,0,0,0,56,88c0,25.19,16.77,41.57,32,49.93V184H70a32,32,0,0,1-32-32,8,8,0,0,0-16,0,48.05,48.05,0,0,0,48,48H88v16a8,8,0,0,0,16,0V200h16a48,48,0,0,0,32-84Zm-48,64V128.29C112.91,134.17,72,148.9,72,88a32,32,0,0,1,32-32h16Z",
    sales: "M232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128ZM128,40a88,88,0,1,0,88,88A88.1,88.1,0,0,0,128,40Zm56,120H152V104a8,8,0,0,0-16,0v64H88a8,8,0,0,0,0,16h96a8,8,0,0,0,0-16Z",
    hr: "M117.25,157.92a60,60,0,1,0-58.5,0A95.83,95.83,0,0,0,24,208a8,8,0,0,0,16,0,80,80,0,0,1,160,0,8,8,0,0,0,16,0A95.83,95.83,0,0,0,117.25,157.92ZM56,112a32,32,0,1,1,32,32A32,32,0,0,1,56,112Zm174.67,53.06a8,8,0,1,1-5.34-15.12A80.06,80.06,0,0,1,232,208a8,8,0,0,1-16,0,64,64,0,0,0-41.31-59.94A8,8,0,0,1,172,136a48,48,0,1,0-58.54-75.51,8,8,0,1,1-9.8-12.63,64,64,0,1,1,86.3,93.23A95.62,95.62,0,0,1,230.67,165.06Z",
    fintech: "M216,72H56A16,16,0,0,1,56,40H216a8,8,0,0,0,0-16H56a32,32,0,0,0-32,32V184a32,32,0,0,0,32,32H216a16,16,0,0,0,16-16V88A16,16,0,0,0,216,72Zm0,128H56a16,16,0,0,1-16-16V95.79A31.87,31.87,0,0,0,56,96H216Zm-48-60a12,12,0,1,1-12-12A12,12,0,0,1,168,140Z",
    automobile: "M240,104H229.2L201.42,49.5A16,16,0,0,0,187.2,40H68.8a16,16,0,0,0-14.22,9.5L26.8,104H16a8,8,0,0,0,0,16h8v96a16,16,0,0,0,16,16H64a16,16,0,0,0,16-16V200h96v16a16,16,0,0,0,16,16h24a16,16,0,0,0,16-16V120h8a8,8,0,0,0,0-16ZM68.8,56H187.2l24.89,48H43.91ZM80,160a16,16,0,1,1,16-16A16,16,0,0,1,80,160Zm96,0a16,16,0,1,1,16-16A16,16,0,0,1,176,160Z",
    manufacturing: "M237.66,18.34a8,8,0,0,0-11.32,0L192,52.69,171.32,32a16,16,0,0,0-22.63,0L72,108.69,51.32,88A16,16,0,0,0,28.69,88L18.34,98.34a8,8,0,0,0,11.32,11.32L40,99.32l44,44L32,205.37V224H50.63L213.66,61a8,8,0,0,0,0-11.32L200,36.63l33.37-33.37A8,8,0,0,0,237.66,18.34Z",
    healthcare: "M240,128a8,8,0,0,1-8,8H216v16a16,16,0,0,1-16,16H168v16a16,16,0,0,1-16,16H104a16,16,0,0,1-16-16V168H56a16,16,0,0,1-16-16V136H24a8,8,0,0,1,0-16H40V104A16,16,0,0,1,56,88H88V72A16,16,0,0,1,104,56h48a16,16,0,0,1,16,16V88h32a16,16,0,0,1,16,16v16h16A8,8,0,0,1,240,128Z",
    saas: "M69.12,94.15,28.5,122.78A8,8,0,0,0,28,136l40,72a8,8,0,0,0,10.08,3.44l48.44-18.93A104,104,0,0,0,152,205.28l13.75,49.76A8,8,0,0,0,173.67,261l80-16A8,8,0,0,0,260,237l-1.6-50.84a104,104,0,0,0,18-30.9L325.4,141a8,8,0,0,0,4-12.92A152.06,152.06,0,0,0,99.14,81.83a8,8,0,0,0-30,12.32Z",
    realestate: "M240,208H224V115.54a16,16,0,0,0-6.4-12.8l-80-60a16,16,0,0,0-19.2,0l-80,60A16,16,0,0,0,32,115.54V208H16a8,8,0,0,0,0,16H240a8,8,0,0,0,0-16ZM48,115.54,128,55.73l80,59.81V208H160V160a16,16,0,0,0-16-16H112a16,16,0,0,0-16,16v48H48Z",
    blog: "M232,48H24A16,16,0,0,0,8,64V192a16,16,0,0,0,16,16H232a16,16,0,0,0,16-16V64A16,16,0,0,0,232,48ZM72,184H40V72H72Zm88,0H88V72h72Zm72,0H176V72h56Z",
    resource: "M231.56,74.27,178.09,18.14a16,16,0,0,0-11.62-5H48A16,16,0,0,0,32,29V75.32A32.13,32.13,0,0,0,8,106.45v88A17.55,17.55,0,0,0,24,211.93v10.13A16,16,0,0,0,40,238H216a16,16,0,0,0,16-15.94V211.93a17.55,17.55,0,0,0,16-17.48v-88A32,32,0,0,0,231.56,74.27Z",
    about: "M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8Z",
    careers: "M216,56H176V48a24,24,0,0,0-24-24H104A24,24,0,0,0,80,48v8H40A16,16,0,0,0,24,72V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V72A16,16,0,0,0,216,56ZM96,48a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96Z",
    partner: "M230.4,219.19A8,8,0,0,1,224,232H32a8,8,0,0,1-6.4-12.81l40-53.33A95.93,95.93,0,0,1,32,96a96,96,0,1,1,192,0,95.93,95.93,0,0,1-33.6,69.86Z",
}

const CORAI_ICONS = ["risk", "summary", "metadata"]

const Icon2 = ({ d }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"
        className="w-5 h-5 transition-colors duration-200" fill="currentColor" aria-hidden>
        <path d={d} />
    </svg>
)

const IconBox = ({ iconKey }) => {
    const isCoraAi = CORAI_ICONS.includes(iconKey)

    if (isCoraAi) {
        return (
            <span
                className="inline-flex items-center justify-center w-9 h-9 rounded-xl flex-shrink-0"
                style={{ background: "#f0f4ff" }}
            >
                <Icon d={ICONS[iconKey]} color="#1e40af" />
            </span>
        )
    }

    return (
        <span
            className="inline-flex items-center justify-center w-9 h-9 rounded-xl flex-shrink-0 transition-all duration-200"
            style={{ background: "#f0f4ff", color: "#1e40af" }}
        >
            <span className="group-hover-icon-box">
                <Icon2 d={ICONS[iconKey]} />
            </span>
            <style>{`
                .group:hover .group-hover-icon-box {
                    color: #e5e7eb;
                }
            `}</style>
        </span>
    )
}

const MenuItem = ({ iconKey, title, desc, href = "#" }) => {
    const isCoraAi = CORAI_ICONS.includes(iconKey)

    return (
        <NavigationMenuLink
            href={href}
            className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer group"
        >
            {isCoraAi ? (
                <span
                    className="inline-flex items-center justify-center w-9 h-9 rounded-xl flex-shrink-0"
                    style={{ background: "#f0f4ff" }}
                >
                    <Icon d={ICONS[iconKey]} color="#1e40af" />
                </span>
            ) : (
                <span className="inline-flex items-center justify-center w-9 h-9 rounded-xl flex-shrink-0 transition-all duration-200 group-hover:[background:#111] [background:#f0f4ff]">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"
                        className="w-5 h-5 transition-colors duration-200 text-[#131314] group-hover:fill-[#e5e7eb]" aria-hidden>
                        <path d={ICONS[iconKey]} />
                    </svg>
                </span>
            )}
            <div>
                <div className="text-sm font-semibold text-gray-800 group-hover:text-blue-600 transition-colors leading-tight">
                    {title}
                </div>
                {desc && (
                    <p className="text-xs text-gray-500 mt-0.5 leading-snug">{desc}</p>
                )}
            </div>
        </NavigationMenuLink>
    )
}

const SectionLabel = ({ children }) => (
    <p className="text-[10px] font-bold tracking-widest uppercase text-gray-400 px-2.5 pt-1 pb-1.5">
        {children}
    </p>
)

const Divider = () => <hr className="border-gray-100 my-1" />

const floatingAnimation = {
    initial: { x: 0, y: 0, opacity: 0, scale: 0.5 },
    animate: (i) => ({
        x: i.x,
        y: i.y,
        opacity: 1,
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 80,
            damping: 12,
            delay: i.delay,
        },
    }),
}

const floatingLoop = {
    animate: {
        y: [0, -15, 0],
        rotate: [0, 4, -2, 0],
        transition: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
        },
    },
}

export default function HeroPg() {
    const [cancel, setCancel] = useState(false)
    return (
        <main className="relative w-full min-h-screen flex flex-col z-20 font-satoshi">


            <div className={`w-full bg-[#4747e1] text-white text-center text-xs py-2 px-4 z-50 ${cancel && '-translate-y-24 transform duration-800 transition-transform'} overflow-hidden relative`}>
                <span className="text-gray-300">Legal Ops 2026: The State of Global CLM Adoption &amp; ROI – </span>
                <a href="#" className="font-semibold underline underline-offset-2 hover:text-blue-300 transition-colors">
                    View the Whitepaper here!
                </a>
                <button onClick={() => setCancel(true)} className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-gray-400 hover:text-white text-base leading-none">
                    ✕
                </button>
            </div>


            <header className=" top-0 z-40">
                <div className="px-4 md:px-10 py-3.5 flex items-center justify-between max-w-screen-xl mx-auto">

                    <img
                        src="/Contractzy-logo.png"
                        alt="Contractzy Logo"
                        className="h-12 w-auto"
                    />

                    <NavigationMenu className="hidden lg:block">
                        <NavigationMenuList className="flex items-center gap-1 ">

                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="bg-transparent text-[16px] font-medium text-gray-700 hover:text-blue-600 px-3 py-2">
                                    Product
                                </NavigationMenuTrigger>

                                <NavigationMenuContent>
                                    <div className="flex w-[780px] gap-0 p-4">

                                        <div className="flex-1 space-y-5 border-r border-gray-100">
                                            <h2 className="text-xl font-medium">Key Features</h2>
                                            <div className="grid grid-cols-2 gap-2">
                                                <MenuItem iconKey="create" title="Create" desc="Create & edit contracts" />
                                                <MenuItem iconKey="negotiate" title="Negotiate" desc="Refine contract terms" />
                                                <MenuItem iconKey="approve" title="Approve" desc="Review & authorize contract execution" />
                                                <MenuItem iconKey="sign" title="Sign" desc="Sign electronically with ease" />
                                                <MenuItem iconKey="store" title="Store" desc="Cloud-based storage" />
                                                <MenuItem iconKey="track" title="Track" desc="Monitor contract status and progress" />
                                                <MenuItem iconKey="integrations" title="Integrations" desc="Integrate with your favourite tools" />
                                            </div>
                                        </div>

                                        <div className="flex-1 space-y-3 pl-4">
                                            <div className="flex items-center text-2xl gap-1 px-2.5 pt-1 pb-2">
                                                <h2 className="bg-gradient-to-r from-blue-700 via-blue-500 to-blue-300 bg-clip-text text-transparent font-bold flex items-center gap-2">CoraAi  <SparklesIcon size={20} fill="blue" /></h2>
                                            </div>
                                            <div className="grid grid-cols-1 gap-0.5">
                                                <MenuItem iconKey="risk" title="AI Risk Analysis" desc="Analyse and mitigate risks" />
                                                <MenuItem iconKey="summary" title="AI Contract Summary" desc="Summarize lengthy contracts" />
                                                <MenuItem iconKey="metadata" title="AI Metadata Extraction" desc="Extract critical contract data" />
                                            </div>
                                        </div>
                                    </div>
                                </NavigationMenuContent>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="bg-transparent text-[16px] font-medium text-gray-700 hover:text-blue-600 px-3 py-2">
                                    Solutions
                                </NavigationMenuTrigger>

                                <NavigationMenuContent>
                                    <div className="flex w-[780px] gap-0 p-4">

                                        <div className="flex-1 pr-4 space-y-5 border-r border-gray-100">
                                            <h2 className="text-xl font-medium">For Teams</h2>
                                            <div className="grid grid-cols-1 gap-0.5">
                                                <MenuItem iconKey="legal" title="Legal" desc="Empower legal teams" />
                                                <MenuItem iconKey="procurement" title="Procurement" desc="Streamline sourcing" />
                                                <MenuItem iconKey="finance" title="Finance" desc="Accelerate revenue generation" />
                                                <MenuItem iconKey="sales" title="Sales" desc="Close deals faster" />
                                                <MenuItem iconKey="hr" title="HR" desc="Manage employee contracts efficiently" />
                                            </div>
                                        </div>

                                        <div className="flex-1 space-y-5 pl-4">
                                            <h2 className="text-xl font-medium">For Industry</h2>
                                            <div className="grid grid-cols-1 gap-0.5">
                                                <MenuItem iconKey="fintech" title="Fintech" desc="Secure financial agreements" />
                                                <MenuItem iconKey="automobile" title="Automobile" desc="Streamline supplier & dealership contracts" />
                                                <MenuItem iconKey="manufacturing" title="Manufacturing" desc="Optimize vendor & supply chain contracts" />
                                                <MenuItem iconKey="healthcare" title="Healthcare" desc="Simplify regulatory & patient data contracts" />
                                                <MenuItem iconKey="saas" title="SaaS / IT" desc="Manage licensing & service agreements" />
                                                <MenuItem iconKey="realestate" title="Real Estate" desc="Digitize lease & property transaction contracts" />
                                            </div>
                                        </div>
                                    </div>
                                </NavigationMenuContent>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="bg-transparent text-[16px] font-medium text-gray-700 hover:text-blue-600 px-3 py-2">
                                    Discover
                                </NavigationMenuTrigger>

                                <NavigationMenuContent>
                                    <div className="w-[780px] p-4">
                                        <div className="flex justify-start space-x-5">
                                            <MenuItem iconKey="blog" title="Blog" desc="Insightful articles on Legal-tech" />
                                            <MenuItem iconKey="resource" title="Resource Library" desc="Legal guides, e-books & more" />
                                        </div>
                                    </div>
                                </NavigationMenuContent>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="bg-transparent text-[16px] font-medium text-gray-700 hover:text-blue-600 px-3 py-2">
                                    Company
                                </NavigationMenuTrigger>

                                <NavigationMenuContent>
                                    <div className="w-[780px] p-4">
                                        <div className="grid grid-cols-3 gap-0.5">
                                            <MenuItem iconKey="about" title="About Us" desc="Know more about Contractzy" />
                                            <MenuItem iconKey="careers" title="Careers" desc="Become a part of our team" />
                                            <MenuItem iconKey="partner" title="Partnerships" desc="Join our partner ecosystem" />
                                        </div>
                                    </div>
                                </NavigationMenuContent>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <NavigationMenuLink
                                    href="#"
                                    className="px-3 py-1 text-[16px] font-medium text-gray-700 hover:text-blue-600 transition-colors"
                                >
                                    Pricing
                                </NavigationMenuLink>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="bg-transparent text-[16px] font-medium text-gray-700 hover:text-blue-600 px-3 py-2">
                                    Global
                                </NavigationMenuTrigger>

                                <NavigationMenuContent>
                                    <div className="w-[780px] space-y-5 p-4">
                                        <h2 className="text-xl font-medium">Document Management System(DMS)</h2>
                                        <div className="grid grid-cols-2 gap-1.5">
                                            {[
                                                { flag: "https://cdn.prod.website-files.com/67c92cd0ce3ef590bee3ffbb/6909dcc08c92bca4b6815289_australia.png", alt: 'Australias flag', title: "Australia", desc: "Manage contracts with local compliance" },
                                                { flag: "/NZ.png", alt: 'New zealands flag', title: "New Zealand", desc: "Optimized for Kiwi businesses" },
                                                { flag: "https://cdn.prod.website-files.com/67c92cd0ce3ef590bee3ffbb/6909e09bd1092153319989a8_icons8-singapore-48.png", alt: 'Singapores flag', title: "Singapore", desc: "Secure and scalable for enterprise" },
                                                { flag: "https://cdn.prod.website-files.com/67c92cd0ce3ef590bee3ffbb/6909e0b5e4d3101814135d07_icons8-middle-east-48.png", alt: 'Middle East region', title: "Middle East", desc: "Adapted for regional Regulations" },
                                            ].map(({ flag, title, desc, alt }) => (
                                                <NavigationMenuLink
                                                    key={title}
                                                    href="#"
                                                    className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer group"
                                                >
                                                    <img src={flag} alt={alt} className="object-contain w-10 h-10 rounded-2xl" />
                                                    <div>
                                                        <div className="text-sm font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                                                            {title}
                                                        </div>
                                                        <p className="text-xs text-gray-500 mt-0.5">{desc}</p>
                                                    </div>
                                                </NavigationMenuLink>
                                            ))}
                                        </div>
                                    </div>
                                </NavigationMenuContent>
                            </NavigationMenuItem>

                        </NavigationMenuList>
                    </NavigationMenu>

                    <div className="flex items-center gap-3">
                        <Button className="text-md font-medium text-black hover:text-white bg-white hover:bg-black rounded-lg px-5 py-1 cursor-pointer transition-colors">
                            Log In
                        </Button>
                        <Button
                            className="rounded-lg px-5 py-2 text-sm font-semibold bg-[#1d4ed8] hover:bg-black text-white cursor-pointer transition-colors"
                        >
                            Request Demo
                        </Button>
                    </div>
                </div>
            </header>
            <section className="py-10 px-6 md:px-16 lg:px-30 z-30 flex flex-col ">
                <div>
                    <div className="flex flex-col items-center">
                        <BlurText
                            text="Need a Smarter Alternative"
                            delay={200}
                            animateBy="words"
                            direction="top"
                            className="text-[40px] md:text-[60px] lg:text-[80px] leading-tight font-bold text-center"
                        />
                        <BlurText
                            text="For SpotDraft?"
                            delay={200}
                            animateBy="words"
                            direction="top"
                            className="text-[80px] leading-22 font-bold text-center"
                        />
                    </div>
                    <AnimatePresence>
                        <motion.div
                            initial={{ opacity: 0, y: -80 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -80 }}
                            className=" mt-5 flex flex-col items-center gap-3">
                            <h2 className="text-2xl md:text-4xl mt-5 font-extrabold flex items-center gap-5"><span className="font-light ">Switch to</span>
                                <span className="w-fit rounded-2xl py-2 px-5 flex items-center justify-center text-white text-3xl font-semibold bg-gradient-to-r from-blue-900 via-blue-400 to-teal-300 animate-gradient bg-[length:200%_200%]">
                                    Contractzy
                                </span>
                            </h2>
                            <h3 className="mt-3 font-bold text-2xl">
                                A Seamless Contract & Team Management Platform
                            </h3>
                            <p className="w-full md:w-2/3 text-lg mt-3 text-center">
                                If managing contracts in SpotDraft feels slow or complex, you're not alone. Contractzy simplifies everything — so your team can move faster with full control.                        </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: -80 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="mt-10 flex justify-center">
                            <Button className="group text-xl flex items-center font-medium text-white shadow-xl bg-black hover:bg-blue-600 rounded-2xl px-10 py-7 cursor-pointer transition-all duration-300">
                                Explore
                                <span className="inline-block ml-2 transform transition-transform duration-400 group-hover:rotate-45">
                                    <ArrowUpIcon size={25} />
                                </span>
                            </Button>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </section>

            <div className="absolute w-full h-full rotate-180 z-10 bottom-0 left-0">
                <Aurora
                    colorStops={["#349eeb", "#349eeb", "#344ceb"]}
                    blend={1.9}
                    amplitude={0.8}
                    speed={1.5}
                />
            </div>

            <motion.div
                custom={{ x: -200, y: -150, delay: 0.1 }}
                variants={floatingAnimation}
                initial="initial"
                animate="animate"
                className="absolute hidden md:block left-1/5 top-1/2"
            >
                <motion.div variants={floatingLoop} animate="animate">
                    <FileText size={70} className="-rotate-12" />
                </motion.div>
            </motion.div>

            <motion.div
                custom={{ x: -250, y: 100, delay: 0.2 }}
                variants={floatingAnimation}
                initial="initial"
                animate="animate"
                className="absolute hidden md:block left-1/4 top-1/2"
            >
                <motion.div variants={floatingLoop} animate="animate">
                    <ChartNoAxesCombined size={60} className="rotate-12" />
                </motion.div>
            </motion.div>

            <motion.div
                custom={{ x: 200, y: 100, delay: 0.3 }}
                variants={floatingAnimation}
                initial="initial"
                animate="animate"
                className="absolute hidden md:block right-1/4 top-1/2"
            >
                <motion.div variants={floatingLoop} animate="animate">
                    <FileClock size={60} className="-rotate-12" />
                </motion.div>
            </motion.div>

            <motion.div
                custom={{ x: 250, y: -120, delay: 0.4 }}
                variants={floatingAnimation}
                initial="initial"
                animate="animate"
                className="absolute hidden md:block right-1/5 top-1/2"
            >
                <motion.div variants={floatingLoop} animate="animate">
                    <FolderOpenDot size={70} className="rotate-12" />
                </motion.div>
            </motion.div>

            <motion.div
                custom={{ x: -200, y: 250, delay: 0.5 }}
                variants={floatingAnimation}
                initial="initial"
                animate="animate"
                className="absolute hidden md:block left-1/3 top-1/2"
            >
                <motion.div variants={floatingLoop} animate="animate">
                    <Signature size={70} className="-rotate-45" />
                </motion.div>
            </motion.div>

            <motion.div
                custom={{ x: 200, y: 250, delay: 0.6 }}
                variants={floatingAnimation}
                initial="initial"
                animate="animate"
                className="absolute hidden md:block right-1/3 top-1/2"
            >
                <motion.div variants={floatingLoop} animate="animate">
                    <Globe size={70} className="rotate-12" />
                </motion.div>
            </motion.div>
        </main>
    )
}