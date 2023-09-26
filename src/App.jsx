import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Hero, Navbar, Works, Certificates } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-stone-900'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Works />
        <Certificates />
        <div className='relative z-0'>
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
