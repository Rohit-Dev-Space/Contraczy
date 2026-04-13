import { ArrowUpIcon, Check, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { Button } from "../components/ui/button";

function useInView() {
    const ref = useRef(null);
    const [inView, setInView] = useState(false);
    useEffect(() => {
        const obs = new IntersectionObserver(
            ([e]) => { if (e.isIntersecting) setInView(true); },
            { threshold: 0.1 }
        );
        if (ref.current) obs.observe(ref.current);
        return () => obs.disconnect();
    }, []);
    return [ref, inView];
}

function AnimatedRow({ row, index }) {
    const [ref, inView] = useInView();
    const [hovered, setHovered] = useState(false);

    return (
        <tr
            ref={ref}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="border-t"
            style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0px)" : "translateY(20px)",
                transition: `opacity 0.5s ease ${index * 80}ms, transform 0.5s ease ${index * 80}ms, background-color 0.2s ease`,
                backgroundColor: hovered ? "#f0fdf4" : "transparent",
            }}
        >
            <td className="p-5" style={{ verticalAlign: "top", width: "22%" }}>
                <div style={{ fontWeight: 600, fontSize: "15px", color: "#111", paddingTop: "2px" }}>
                    {row.feature}
                </div>
            </td>

            <td className="p-5 text-green-600" style={{ verticalAlign: "top" }}>
                <div className="flex items-start gap-2">
                    <span style={{
                        display: "inline-flex", alignItems: "center", justifyContent: "center",
                        width: "24px", height: "24px", borderRadius: "50%", flexShrink: 0, marginTop: "1px",
                        backgroundColor: hovered ? "#dcfce7" : "transparent",
                        transition: "background-color 0.2s ease, transform 0.2s ease",
                        transform: hovered ? "scale(1.2)" : "scale(1)",
                    }}>
                        <Check size={16} />
                    </span>
                    <div>
                        <span style={{
                            display: "inline-block",
                            fontSize: "14px",
                            fontWeight: 500,
                            transition: "transform 0.2s ease",
                            transform: hovered ? "translateX(2px)" : "translateX(0)",
                        }}>
                            {row.contractzy}
                        </span>
                        <div style={{
                            fontSize: "12.5px",
                            color: "#15803d",
                            marginTop: "5px",
                            lineHeight: "1.55",
                            maxHeight: hovered ? "80px" : "0px",
                            overflow: "hidden",
                            opacity: hovered ? 1 : 0,
                            transition: "max-height 0.35s ease, opacity 0.3s ease 0.05s",
                        }}>
                            {row.contractzyDetail}
                        </div>
                    </div>
                </div>
            </td>

            <td className="p-5 text-red-500" style={{ verticalAlign: "top" }}>
                <div className="flex items-start gap-2">
                    <span style={{
                        display: "inline-flex", alignItems: "center", justifyContent: "center",
                        width: "24px", height: "24px", borderRadius: "50%", flexShrink: 0, marginTop: "1px",
                        backgroundColor: hovered ? "#fee2e2" : "transparent",
                        transition: "background-color 0.2s ease, transform 0.2s ease",
                        transform: hovered ? "scale(1.2)" : "scale(1)",
                    }}>
                        <X size={16} />
                    </span>
                    <div>
                        <span style={{
                            display: "inline-block",
                            fontSize: "14px",
                            fontWeight: 500,
                            transition: "transform 0.2s ease",
                            transform: hovered ? "translateX(2px)" : "translateX(0)",
                        }}>
                            {row.spotdraft}
                        </span>
                        <div style={{
                            fontSize: "12.5px",
                            color: "#b91c1c",
                            marginTop: "5px",
                            lineHeight: "1.55",
                            maxHeight: hovered ? "80px" : "0px",
                            overflow: "hidden",
                            opacity: hovered ? 1 : 0,
                            transition: "max-height 0.35s ease, opacity 0.3s ease 0.05s",
                        }}>
                            {row.spotdraftDetail}
                        </div>
                    </div>
                </div>
            </td>
        </tr>
    );
}

export default function Comparison() {
    const [titleRef, titleInView] = useInView();
    const [tableRef, tableInView] = useInView();

    const data = [
        {
            feature: "Ease of Use",
            contractzy: "Simple & intuitive interface",
            contractzyDetail: "Built for legal and non-legal teams alike — no training needed to get started and navigate confidently.",
            spotdraft: "Complex, multi-step workflows",
            spotdraftDetail: "Users frequently report needing to navigate multiple screens just to complete a single contract task.",
        },
        {
            feature: "Setup Time",
            contractzy: "Go live in days",
            contractzyDetail: "Streamlined onboarding gets your entire team fully operational within days, not months.",
            spotdraft: "Long onboarding process",
            spotdraftDetail: "Full functionality can take up to six weeks after initial setup as contracts are imported and organised.",
        },
        {
            feature: "Workflow Flexibility",
            contractzy: "Fully customizable workflows",
            contractzyDetail: "Add approvers, compliance steps, or negotiation loops mid-process — no IT ticket required.",
            spotdraft: "Pre-defined, less flexible",
            spotdraftDetail: "Rigid templates make it difficult to adapt workflows on the fly without involving the vendor's support team.",
        },
        {
            feature: "Pricing",
            contractzy: "Affordable & transparent",
            contractzyDetail: "Scalable plans for startups and enterprises alike — every feature listed upfront, no surprise invoices.",
            spotdraft: "High, enterprise pricing",
            spotdraftDetail: "Pricing is not publicly listed; custom quotes often come with steep costs that challenge growing teams.",
        },
        {
            feature: "Contract Editing",
            contractzy: "Built-in editing & OCR",
            contractzyDetail: "Instantly convert any scanned PDF into a fully editable document — zero friction, no third-party tools.",
            spotdraft: "Limited editing flexibility",
            spotdraftDetail: "Requires manual PDF conversion before editing can begin, adding unnecessary delays to review cycles.",
        },
        {
            feature: "User Experience",
            contractzy: "Modern & user-friendly",
            contractzyDetail: "Clean, modern UI designed for quick adoption across legal, sales, finance, and procurement teams.",
            spotdraft: "Steeper learning curve",
            spotdraftDetail: "A complex interface leads to longer onboarding periods and lower adoption rates across departments.",
        },
    ];

    return (
        <section className="py-10 px-10">
            <div className="py-10 px-6 flex items-start justify-center gap- bg-gradient-to-r from-blue-700 to-blue-300 text-white rounded-lg mb-12 shadow-[20px_50px_50px_rgba(0,0,0,0.3)]">
                <div className="w-3/5">
                    <h1
                        ref={titleRef}
                        className="text-5xl font-bold px-10 mb-12 leading-18"
                        style={{
                            opacity: titleInView ? 1 : 0,
                            transform: titleInView ? "translateY(0)" : "translateY(24px)",
                            transition: "opacity 0.6s ease, transform 0.6s ease",
                        }}
                    >
                        See Why <span className="bg-gradient-to-r from-blue-700 via-blue-400 to-blue-200 px-5 py-1 rounded-2xl">Contractzy</span> Outperforms SpotDraft
                    </h1>
                    <p className="text-lg px-10 w-3/4">Discover how Contractzy offers a faster, more flexible, and intuitive way to manage contracts compared to SpotDraft — enabling teams to eliminate bottlenecks, improve visibility, and close deals with greater efficiency.</p>
                    <Button
                        className="group rounded-lg px-10 ml-10 py-5 mt-15 text-sm font-semibold bg-[#1d4ed8] hover:bg-black text-white cursor-pointer transition-colors"
                    >
                        Request a Demo
                        <span className="inline-block ml-2 transform transition-transform duration-400 group-hover:rotate-45">
                            <ArrowUpIcon size={25} />
                        </span>
                    </Button>
                    <Button
                        className="group rounded-lg px-10 ml-10 py-5 mt-15 text-sm font-semibold bg-[#1d4ed8] hover:bg-black text-white cursor-pointer transition-colors"
                    >
                        Contact us
                        <span className="inline-block ml-2 transform transition-transform duration-400 group-hover:rotate-45">
                            <ArrowUpIcon size={25} />
                        </span>
                    </Button>
                </div>
                <div
                    ref={tableRef}
                    className="overflow-x-auto shadow-2xl rounded-lg w-2/3 "
                    style={{
                        opacity: tableInView ? 1 : 0,
                        transform: tableInView ? "translateY(0)" : "translateY(32px)",
                        transition: "opacity 0.6s ease 0.15s, transform 0.6s ease 0.15s",
                    }}
                >
                    <table className="w-full max-w-5xl mx-auto border border-gray-200 rounded-2xl overflow-hidden">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="text-left p-5 text-lg text-black font-semibold">Feature</th>
                                <th className="p-5 text-lg font-semibold text-green-600">Contractzy</th>
                                <th className="p-5 text-lg font-semibold text-red-500">SpotDraft</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white">
                            {data.map((row, index) => (
                                <AnimatedRow key={index} row={row} index={index} />
                            ))}
                        </tbody>
                    </table>
                </div>

            </div>
        </section>
    );
}