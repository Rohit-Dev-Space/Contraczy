import { ArrowUpIcon, ArrowUpRight } from "lucide-react";
import { Button } from "../components/ui/button";

export default function Footer() {
    return (
        <footer className="w-full bg-gradient-to-r from-[#00215f] to-[#2058dc] text-white px-10 py-16 flex flex-col gap-12">

            <div className="w-full flex flex-wrap justify-between gap-10">

                <div className="flex flex-col gap-4 max-w-sm">
                    <img src="/Contractzy-logo.png" alt="Contractzy - Contract Lifecycle Management Platform" className="w-60 h-15" />
                    <p className="text-sm text-gray-200">
                        Simplifying contract lifecycle management with speed, clarity, and control.
                        Empower your teams to create, manage, and execute contracts seamlessly.
                    </p>
                </div>
                <nav aria-label="Product links" className="flex gap-20">
                    <div className="flex flex-col gap-3">
                        <p className="font-semibold text-lg">Product</p>
                        <a href="#" className="text-gray-200 hover:text-white transition">Features</a>
                        <a href="#" className="text-gray-200 hover:text-white transition">Integrations</a>
                        <a href="#" className="text-gray-200 hover:text-white transition">Pricing</a>
                        <a href="#" className="text-gray-200 hover:text-white transition">Security</a>
                    </div>

                    <div className="flex flex-col gap-3">
                        <p className="font-semibold text-lg">Company</p>
                        <a href="#" className="text-gray-200 hover:text-white transition">About</a>
                        <a href="#" className="text-gray-200 hover:text-white transition">Careers</a>
                        <a href="#" className="text-gray-200 hover:text-white transition">Contact</a>
                    </div>

                    <div className="flex flex-col gap-3">
                        <p className="font-semibold text-lg">Resources</p>
                        <a href="#" className="text-gray-200 hover:text-white transition">Blog</a>
                        <a href="#" className="text-gray-200 hover:text-white transition">Help Center</a>
                        <a href="#" className="text-gray-200 hover:text-white transition">Privacy Policy</a>
                        <a href="#" className="text-gray-200 hover:text-white transition">Terms of Service</a>
                    </div>
                </nav>

                <div className="flex flex-col items-center gap-4">
                    <Button aria-label="Get started with Contractzy" className="group text-lg flex items-center mt-4 font-medium text-white shadow-xl bg-black rounded-xl px-5 py-7 cursor-pointer transition-all duration-300">
                        Get Started
                        <span className="inline-block ml-2 transform transition-transform duration-400 group-hover:rotate-45">
                            <ArrowUpIcon size={35} />
                        </span>
                    </Button>
                    <Button aria-label="Request a Contractzy demo" className="group text-lg flex items-center mt-4 font-medium text-white shadow-xl bg-black rounded-xl px-5 py-7 cursor-pointer transition-all duration-300">
                        Request a Demo
                        <span className="inline-block ml-2 transform transition-transform duration-400 group-hover:rotate-45">
                            <ArrowUpIcon size={35} />
                        </span>
                    </Button>
                </div>

            </div>

            <div className="w-full h-[1px] bg-white/20"></div>

            <div className="w-full flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-300">
                <p>© {new Date().getFullYear()} Contractzy. All rights reserved.</p>

                <div className="flex gap-5">
                    <button className="hover:text-white transition">LinkedIn</button>
                    <button className="hover:text-white transition">Twitter</button>
                    <button className="hover:text-white transition">Email</button>
                </div>
            </div>

        </footer>
    );
}