import { FaFacebook } from "react-icons/fa";
import tesla from "../assets/images/tesla.png"

const Home = () => {
  return (
    <section className='relative flex lg:flex-row flex-col max-home '>
      <div className="flex-1 min-w-[50%] flex flex-col">
      <h1 className='head-text pt-14'>
        Hello, I'm{" "}
        <span className='blue-gradient_text font-semibold drop-shadow'>
          {" "}
          Esrael
        </span>{" "}
        👋
      </h1>

      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>
          Software Engineer with 3+ years of experience in building web and mobile apps.
        </p>
      </div>
            
          
        </div>
        <div className='lg:w-1/2 w-full  md:h-[500px] h-[200px]'>
        <img src={tesla} alt="tesla" className="w-full h-full object-cover" />
        </div>

    </section>
  );
}
export default Home;