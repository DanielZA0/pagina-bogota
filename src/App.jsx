import { BrowserRouter } from "react-router-dom";

import { Intro, Contact, Historia, Hero, Navbar, Works, Certificates } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-white'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <Intro />
        <Historia />
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
