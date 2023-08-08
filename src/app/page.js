import HeroSlide from "../../components/HeroSlide";
import ProductCard from "../../components/ProductCard";

export default function Home() {
  return (
    <main className="mx-14">
      <HeroSlide/>
      <div className="text-center my-[50px] md:my-[80px] max-w-[800px] mx-2 md:mx-auto">
        <div className="text-xl md:text-[34px] font-semibold mb-5 leading-tight">
          Cushioning for your miles
        </div>
        <div className="text-md md:text-xl font-medium text-center leading-5 ">
          A lightWeight Nike shoes combined with stack height to help provide cushioning during runnings
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>

      </div>

    </main>
  );
}
