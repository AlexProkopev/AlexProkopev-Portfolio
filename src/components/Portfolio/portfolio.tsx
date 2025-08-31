'use client'

import PortfolioHeader from "./Header/portfolio-header";
import Hero from "./Hero/hero";




const Portfolio = () => {



  return (
  <div className=" min-h-[100vh] bg-[radial-gradient(circle,rgba(7,26,145,1)_0%,rgba(0,0,0,1)_100%)]">
   <PortfolioHeader />

  <main className="container">

    <Hero/>
  
    <section>
       Main Portfolio Section
    </section>
    <section>
        Project Portfolio Section
    </section>
    <section>
        Skills Portfolio Section
    </section>
    <section>
        Contacts Portfolio Section
    </section>
    <section>
        Experience Portfolio Section
    </section>
    
  </main>
</div>
  );
};

export default Portfolio;