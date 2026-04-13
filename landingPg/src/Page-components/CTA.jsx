import AnimatedContent from '../components/AnimatedContent';
import LightRays from '../components/LightRays';
import OrbitImages from '../components/OrbitImages'
import { ArrowUpIcon, FileText, Shield, CheckCircle, Lock, Zap, Bot } from 'lucide-react';
import { Button } from '../components/ui/button';

const ORBIT_ICONS = [
    <div aria-label="Document management" role="img" className="bg-white/10 backdrop-blur-sm rounded-full p-3 border border-white/20">
        <FileText size={52} color="white" aria-hidden="true" />
    </div>,
    <div aria-label="Security and compliance" role="img" className="bg-white/10 backdrop-blur-sm rounded-full p-3 border border-white/20">
        <Shield size={52} color="white" aria-hidden="true" />
    </div>,
    <div aria-label="AI automation" role="img" className="bg-white/10 backdrop-blur-sm rounded-full p-3 border border-white/20">
        <Bot size={52} color="white" aria-hidden="true" />
    </div>,
    <div aria-label="Contract approvals" role="img" className="bg-white/10 backdrop-blur-sm rounded-full p-3 border border-white/20">
        <CheckCircle size={52} color="white" aria-hidden="true" />
    </div>,
    <div aria-label="Data privacy" role="img" className="bg-white/10 backdrop-blur-sm rounded-full p-3 border border-white/20">
        <Lock size={52} color="white" aria-hidden="true" />
    </div>,
    <div aria-label="Fast execution" role="img" className="bg-white/10 backdrop-blur-sm rounded-full p-3 border border-white/20">
        <Zap size={52} color="white" aria-hidden="true" />
    </div>,
];

export default function CTA() {

    return (
        <section
            aria-labelledby="cta-heading"
            className="w-full py-20 px-10 flex flex-col items-center justify-center"
        >
            <div
                role="region"
                aria-label="Call to action"
                className="bg-black relative w-14/15 flex rounded-4xl shadow-[20px_50px_50px_rgba(0,0,0,0.3)] overflow-hidden min-h-[450px]"
            >
                <div className='w-1/2 flex flex-col gap-5 items-start justify-center px-10 py-10 z-10'>
                    <h2 id="cta-heading" className="text-5xl font-bold text-white max-w-sm">
                        Simplify Contracts. Accelerate Business.
                    </h2>
                    <p className='font-medium text-white/70'>
                        Contractzy replaces slow, manual processes with a unified platform that simplifies every stage of the contract lifecycle. From creation to execution, teams gain the tools they need to work faster, reduce risk, and stay aligned.
                    </p>
                    <Button
                        onClick={() => {
                            window.gtag('event', 'demo_click', {
                                event_category: 'CTA',
                                event_label: 'Book Demo Button'
                            });
                        }}
                        type="button"
                        aria-label="Get started with Contractzy"
                        className="group text-xl flex items-center mt-4 font-medium text-white shadow-xl bg-blue-600 rounded-2xl px-10 py-5 cursor-pointer transition-all duration-300"
                    >
                        Get Started with Contractzy
                        <span aria-hidden="true" className="inline-block ml-2 transform transition-transform duration-400 group-hover:rotate-45">
                            <ArrowUpIcon size={25} />
                        </span>
                    </Button>
                </div>

                <div className='w-3/5 relative flex items-end justify-center'>

                    <LightRays
                        aria-hidden="true"
                        raysOrigin="top-center"
                        raysColor="#ffffff"
                        raysSpeed={1}
                        lightSpread={3.5}
                        rayLength={3}
                        followMouse={true}
                        mouseInfluence={0.1}
                        noiseAmount={0}
                        distortion={0}
                        className="custom-rays absolute inset-0 z-0"
                        pulsating={false}
                        fadeDistance={1}
                        saturation={3}
                    />

                    <div className='absolute w-full' aria-hidden="true">
                        <OrbitImages
                            images={ORBIT_ICONS}
                            shape="ellipse"
                            radiusX={440}
                            radiusY={200}
                            rotation={-8}
                            duration={30}
                            itemSize={80}
                            responsive={true}
                            radius={160}
                            direction="normal"
                            fill
                            showPath
                            paused={false}
                            className='absolute z-40 top-25'
                        />
                    </div>

                    <div className='absolute z-10 flex flex-col items-start'>
                        <AnimatedContent
                            distance={120}
                            direction="vertical"
                            reverse={true}
                            duration={1.2}
                            ease="power3.out"
                            initialOpacity={0}
                            animateOpacity
                            scale={1}
                            threshold={0.2}
                            delay={0}
                        >
                            <img
                                src="/Contractzy-logo.png"
                                alt="Contractzy – Contract Lifecycle Management Platform"
                                loading="lazy"
                                width={208}
                                height={52}
                                className='w-52'
                            />
                        </AnimatedContent>

                        <AnimatedContent
                            distance={150}
                            direction="vertical"
                            reverse={true}
                            duration={1.4}
                            ease="power3.out"
                            initialOpacity={0}
                            animateOpacity
                            scale={1}
                            threshold={0.2}
                            delay={0}
                        >
                            <img
                                src="/stage.png"
                                alt=""
                                role="presentation"
                                loading="lazy"
                                width={224}
                                height={300}
                                className='w-56'
                            />
                        </AnimatedContent>
                    </div>

                </div>
            </div>
        </section>
    )
}