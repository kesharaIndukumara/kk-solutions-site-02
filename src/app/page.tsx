import { Hero } from "@/components/sections/hero"
import { Services } from "@/components/sections/services"
import { StatsBar } from "@/components/sections/stats-bar"
import { WhyChooseUs } from "@/components/sections/why-choose-us"
import { HowItWorks } from "@/components/sections/how-it-works"
import { Testimonials } from "@/components/sections/testimonials"
import { CtaBanner } from "@/components/sections/cta-banner"

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <StatsBar />
      <WhyChooseUs />
      <HowItWorks />
      <Testimonials />
      <CtaBanner />
    </>
  )
}
