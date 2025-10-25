import Image from "next/image";
import  TurmericSections  from "./home/termaric";
import  ProductsGrid  from "./home/product";
import  Welcome  from "./home/welcome";


export default function Home() {
  return (
    <div className="font-sans flex flex-col min-h-screen">
      {/* Hero Section - Full screen height */}
      <section className="h-110 w-full">
        <img
          src="https://cdn.shopaccino.com/refresh/articles/garammasala-769591_l.jpg?v=591"
          alt="Turmeric"
          className="w-full h-full object-cover"
        />
      </section>

      <Welcome/>
      <ProductsGrid/>


      {/* Rest of the content - Scroll below */}
      {/* <section className="p-8 bg-white">
             <TurmericSections/>
      </section> */}
    </div>
  );
}
