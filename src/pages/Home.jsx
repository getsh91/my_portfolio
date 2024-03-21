import { FaFacebook } from "react-icons/fa";
import tesla from "../assets/images/tesla.png"
import About from "./About";
import Projects from "./Projects";
import { Footer } from "../components";

const Home = () => {
  return (
    <div>
      <section className='relative flex lg:flex-row flex-col max-home home_back'>
        <div className="flex-1 min-w-[50%] flex flex-col">
      
        <h2 className='head-text2 pt-5'>
          Hello 👋,{" "}
        </h2>
        <h1>
        <span className=' font-bold text-[6rem] max-sm:text-5xl drop-shadow text-white'>
            {" "}
            I'm <span className="text-[#47b84a]">Esrael Eshetu</span>
          </span>
        </h1>
        <div className='mt-5 flex flex-col gap-3 text-2xl max-sm:text-xl text-white'>
          <p>
            Software Engineer with 3+ years of experience in building web and mobile apps.
          </p>
        </div>
      
      
          </div>
          {/* <div className='lg:w-1/2 w-full  md:h-[400px] h-[200px]'>
          <img src={tesla} alt="tesla" className="w-full h-full object-cover" />
          </div> */}
      </section>
      <About/>
      <Projects/>
      <Footer/>
    </div>
  );
}
export default Home;