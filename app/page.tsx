import { CategoryMenu, Hero, Incentives, IntroducingSection, Newsletter, ProductsSection } from "@/components";
import HomePage from "@/components/HomePage";

export default function Home() {
  return (
    <>
    <Hero />
    <IntroducingSection />
    <HomePage/>
    <CategoryMenu />
    <ProductsSection />
    </>
  );
}
