import { ArrowUpIcon, ArrowUpRight } from "lucide-react";
import { Button } from "../components/ui/button";

export default function Footer() {
    return (
        <footer className="w-full bg-gradient-to-r from-[#00215f] to-[#2058dc] text-white px-10 py-16 flex flex-col gap-12">

            <div className="w-full flex flex-wrap justify-between gap-10">

                <div className="flex flex-col gap-4 max-w-sm">
                    <img src="/Contractzy-logo.png" alt="contractzy logo" className="w-60 h-15" />
                    <p className="text-sm text-gray-200">
                        Simplifying contract lifecycle management with speed, clarity, and control.
                        Empower your teams to create, manage, and execute contracts seamlessly.
                    </p>
                </div>

                <div className="flex flex-col gap-3">
                    <h2 className="font-semibold text-lg">Product</h2>
                    <a href="#" className="text-gray-200 hover:text-white transition">Features</a>
                    <a href="#" className="text-gray-200 hover:text-white transition">Integrations</a>
                    <a href="#" className="text-gray-200 hover:text-white transition">Pricing</a>
                    <a href="#" className="text-gray-200 hover:text-white transition">Security</a>
                </div>

                {/* Company */}
                <div className="flex flex-col gap-3">
                    <h2 className="font-semibold text-lg">Company</h2>
                    <a href="#" className="text-gray-200 hover:text-white transition">About</a>
                    <a href="#" className="text-gray-200 hover:text-white transition">Careers</a>
                    <a href="#" className="text-gray-200 hover:text-white transition">Contact</a>
                </div>

                {/* Resources */}
                <div className="flex flex-col gap-3">
                    <h2 className="font-semibold text-lg">Resources</h2>
                    <a href="#" className="text-gray-200 hover:text-white transition">Blog</a>
                    <a href="#" className="text-gray-200 hover:text-white transition">Help Center</a>
                    <a href="#" className="text-gray-200 hover:text-white transition">Privacy Policy</a>
                    <a href="#" className="text-gray-200 hover:text-white transition">Terms of Service</a>
                </div>

                {/* CTA */}
                <div className="flex flex-col items-center gap-4">
                    <Button className="group text-lg flex items-center mt-4 font-medium text-white shadow-xl bg-black rounded-xl px-5 py-7 cursor-pointer transition-all duration-300">
                        Get Started
                        <span className="inline-block ml-2 transform transition-transform duration-400 group-hover:rotate-45">
                            <ArrowUpIcon size={35} />
                        </span>
                    </Button>
                    <Button className="group text-lg flex items-center mt-4 font-medium text-white shadow-xl bg-black rounded-xl px-5 py-7 cursor-pointer transition-all duration-300">
                        Request a Demo
                        <span className="inline-block ml-2 transform transition-transform duration-400 group-hover:rotate-45">
                            <ArrowUpIcon size={35} />
                        </span>
                    </Button>
                </div>

            </div>

            {/* Divider */}
            <div className="w-full h-[1px] bg-white/20"></div>

            {/* Bottom Section */}
            <div className="w-full flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-300">
                <p>© {new Date().getFullYear()} Contractzy. All rights reserved.</p>

                <div className="flex gap-5">
                    <a href="#" className="hover:text-white transition">LinkedIn</a>
                    <a href="#" className="hover:text-white transition">Twitter</a>
                    <a href="#" className="hover:text-white transition">Email</a>
                </div>
            </div>

        </footer>
    );
}