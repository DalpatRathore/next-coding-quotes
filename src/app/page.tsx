import HeroSection from "@/components/HeroSection";
import QuotesList from "@/components/QuotesList";

export default async function Home() {
  return (
    <main className="max-w-[1920px] mx-auto">
      <HeroSection></HeroSection>
      <QuotesList></QuotesList>
    </main>
  );
}
