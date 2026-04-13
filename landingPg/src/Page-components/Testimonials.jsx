import { ArrowUpIcon } from 'lucide-react';
import BounceCards from '../components/BounceCards';
import { useRef } from "react";
import { useInView } from "framer-motion";
import AnimatedContent from '../components/AnimatedContent';
import { Button } from '../components/ui/button';

export default function Testimonials() {

    const cards = [
        <div className="w-full h-full bg-white rounded-xl p-3 flex flex-col justify-between shadow-sm border border-gray-100">
            <div className="flex items-center">
                <img src="https://cdn.prod.website-files.com/67c92cd0ce3ef590bee3ffbb/67d2ca048d0c206b24faea9a_66157b86362871abf0e061e1_bajaj-finserv.svg" alt="Bajaj Finserv logo" className='w-20 h-20' />
            </div>
            <p className="text-gray-700 text-sm flex-1 -mt-5">
                "The team at Contractzy are always up and ready to resolve our queries, issues, requests within a quick span of time which adds to customer delight."
            </p>

            <div className="flex items-center gap-3 mt-4">
                <div className="w-9 h-9 rounded-full bg-gray-200 overflow-hidden flex-shrink-0">
                    <img src="https://cdn.prod.website-files.com/67c92cd0ce3ef590bee3ffbb/67d2ca0c81b25f7ffbe2b69f_66320acf0cc8fc4b5ce200ff_Manish-Jain-Bajaj-Markets.png" alt="Manish Jain" className="w-full h-full object-cover" />
                </div>
                <div>
                    <p className="font-bold text-gray-900 text-sm">Manish Jain</p>
                    <p className="text-gray-500 text-xs">Head of Legal Department, Bajaj Markets</p>
                </div>
            </div>
        </div>,

        <div className="w-full h-full bg-white rounded-xl p-5 flex flex-col justify-between shadow-sm border border-gray-100">
            <div className="flex items-center gap-2 mb-3">
                <div className="w-7 h-7 rounded-md flex items-center justify-center">
                    <img src="https://cdn.prod.website-files.com/67c92cd0ce3ef590bee3ffbb/67d2ca04f197a5bfc786c5db_66157b862695a8f4c415f653_bridgestone.svg" alt="Bridgestone" className='w-20 h-20 scale-350 ml-20' />
                </div>
            </div>
            <p className="text-gray-700 text-sm flex-1">
                "Contractzy has played a stellar role in helping us manage contracts with timelines. I will recommend the software for great contract management at the workplace."
            </p>
            <div className="flex items-center gap-3 mt-4">
                <div className="w-9 h-9 rounded-full bg-gray-200 overflow-hidden flex-shrink-0">
                    <img src="https://cdn.prod.website-files.com/67c92cd0ce3ef590bee3ffbb/67d2ca0c89de48964d585010_66320ad088db562548cda660_Reni-Verghese-bridgestone.png" alt="Reni Verghese" className="w-full h-full object-cover" />
                </div>
                <div>
                    <p className="font-bold text-gray-900 text-sm">Reni Verghese</p>
                    <p className="text-gray-500 text-xs">Head Global Legal Shared Services, Bridgestone</p>
                </div>
            </div>
        </div>,

        <div className="w-full h-full bg-white rounded-xl p-5 flex flex-col justify-between shadow-sm border border-gray-100">
            <div className="flex items-center gap-2 mb-3">
                <div className="w-14 h-9 rounded-md bg-green-600 flex items-center justify-center">
                    <img src="https://cdn.prod.website-files.com/67c92cd0ce3ef590bee3ffbb/696765c870e8c0bcdf3cddc8_muthoot-fincorp-seeklogo-p-500.png" alt="Muthoot Fincorp" className='w-20 h-10' />
                </div>
            </div>
            <p className="text-gray-700 text-sm flex-1">
                "Our experience with the Contractzy has been noteworthy, not only because of its robust functionality but also due to the outstanding support services."
            </p>
            <div className="flex items-center gap-3 mt-4">
                <div className="w-9 h-9 rounded-full bg-gray-200 overflow-hidden flex-shrink-0">
                    <img src="https://cdn.prod.website-files.com/67c92cd0ce3ef590bee3ffbb/6967237a82f5796ae6ca4737_image%20(23).png" alt="Shailendra Mishra" className="w-full h-full object-cover" />
                </div>
                <div>
                    <p className="font-bold text-gray-900 text-sm">Shailendra Mishra</p>
                    <p className="text-gray-500 text-xs">Head - Contracts and Legal Advisory</p>
                </div>
            </div>
        </div>,

        <div className="w-full h-full bg-white rounded-xl p-5 flex flex-col justify-between shadow-sm border border-gray-100">
            <div className="flex items-center gap-2 mb-3">
                <div className="w-24 h-9 rounded-md flex items-center justify-center">
                    <img src="https://cdn.prod.website-files.com/67c92cd0ce3ef590bee3ffbb/67d2ca0489f5e94dc59511b5_66157b872612ee00f10770d9_easebuzz.svg" alt="Muthoot Fincorp" className='w-20 h-10' />
                </div>
            </div>
            <p className="text-gray-700 text-sm flex-1">
                "Contractzy reduces the time and effort required for managing contracts and agreements. As the process has now become digital, the executed agreements could be accessed seamlessly."
            </p>
            <div className="flex items-center gap-3 mt-4">
                <div className="w-9 h-9 rounded-full bg-gray-200 overflow-hidden flex-shrink-0">
                    <img src="https://cdn.prod.website-files.com/67c92cd0ce3ef590bee3ffbb/67d2ca0c0fb1b64faa402d7d_66320ad086a4857c73a01f31_Nitin-Bhuwania-easebuzz.png" alt="Nitin Bhuwania" className="w-full h-full object-cover" />
                </div>
                <div>
                    <p className="font-bold text-gray-900 text-sm">Nitin Bhuwania</p>
                    <p className="text-gray-500 text-xs">General Counsel, Easebuzz</p>
                </div>
            </div>
        </div>,
        <div className="w-full h-full bg-white rounded-xl p-5 flex flex-col justify-between shadow-sm border border-gray-100">
            <div className="flex items-center gap-2 mb-3">
                <div className="w-7 h-7 rounded-md bg-red-500 flex items-center justify-center">
                    <span className="text-white text-xs font-bold">Z</span>
                </div>
                <span className="text-red-600 font-extrabold text-sm tracking-wide">ZOMATO</span>
            </div>
            <p className="text-gray-700 text-sm flex-1">
                "From vendor agreements to NDAs, Contractzy keeps everything organized and actionable in one place."
            </p>
            <div className="flex items-center gap-3 mt-4">
                <div className="w-9 h-9 rounded-full bg-gray-200 overflow-hidden flex-shrink-0">
                    <img src="https://i.pravatar.cc/40?img=22" alt="Rohan Das" className="w-full h-full object-cover" />
                </div>
                <div>
                    <p className="font-bold text-gray-900 text-sm">Deepesh Aggarwal</p>
                    <p className="text-gray-500 text-xs">Director of Legal Affairs, Zomato</p>
                </div>
            </div>
        </div>
    ];

    const transformStyles = [
        "rotate(5deg) translate(-150px)",
        "rotate(0deg) translate(-70px)",
        "rotate(-5deg)",
        "rotate(5deg) translate(70px)",
        "rotate(-5deg) translate(150px)"
    ];

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "0px" });

    return (
        <section className='w-full flex flex-col items-center justify-center py-20 px-10 gap-10'>
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
                <div className='w-full flex gap-10 items-center justify-center'>

                    <div className='w-1/2 flex flex-col gap-5'>
                        <h1 className='text-4xl font-extrabold'>
                            Trusted by Legal & Business Teams Driving Modern Contract Management
                        </h1>
                        <p className='text-lg font-medium'>
                            Organizations across industries trust Contractzy to simplify contract workflows, improve visibility, and accelerate execution. From global legal teams to growing businesses, customers highlight how it reduces manual effort, digitizes processes, and brings structure to contract management. With seamless access, automated timelines, and better collaboration, Contractzy helps teams move faster while maintaining control and compliance.
                        </p>
                    </div>

                    <div ref={ref}>
                        {isInView && (
                            <BounceCards
                                className="custom-bounceCards overflow-hidden"
                                images={cards}
                                containerWidth={700}
                                containerHeight={350}
                                animationDelay={1}
                                animationStagger={0.08}
                                easeType="elastic.out(1, 0.5)"
                                transformStyles={transformStyles}
                                enableHover={true}
                            />
                        )}
                    </div>

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
                <div>
                    <Button className="group text-xl flex items-center font-medium text-white shadow-xl bg-black hover:bg-blue-600 rounded-2xl px-10 py-7 cursor-pointer transition-all duration-300">
                        Be a part of change
                        <span className="inline-block ml-2 transform transition-transform duration-400 group-hover:rotate-45">
                            <ArrowUpIcon size={35} />
                        </span>
                    </Button>
                </div>
            </AnimatedContent>

        </section>
    )
}