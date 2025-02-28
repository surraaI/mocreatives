"use client";
import PortfolioHero from "@/components/portfolio/PortfolioHero";
import PortfolioTabs from "@/components/portfolio/PortfolioTabs";
import WhyChooseUs from "@/components/whychooseus/whyChooseUs";

export default function Portfolio() {
  return (
    <>
      <section className="min-h-screen bg-neuro-blue flex flex-col md:flex-row items-center justify-between px-8 md:px-28 py-8 pt-24 md:pt-8">
        <PortfolioHero />
      </section>

      <section className="bg-light-gray py-12">
        <div className="container mx-auto">
          <PortfolioTabs />
        </div>
      </section>

      <WhyChooseUs />
    </>
  );
}
