import Aurora from "./components/Aurora";
import Challenges from "./Page-components/Challenges";
import Comparison from "./Page-components/Comparison";
import Conversion from "./Page-components/Conversion";
import CTA from "./Page-components/CTA";
import FAQ from "./Page-components/FAQ";
import Feature from "./Page-components/Feature";
import Footer from "./Page-components/Footer";
import HeroPg from "./Page-components/HeroPg";
import Partners from "./Page-components/Partners";
import Testimonials from "./Page-components/Testimonials";

export default function App() {
  return (
    <main className="w-full h-full flex flex-col items-center justify-center z-0">
      <HeroPg />
      <Partners />
      <Comparison />
      <Challenges />
      <Conversion />
      <Feature />
      <Testimonials />
      <CTA />
      <FAQ />
      <Footer />
    </main>
  )
}