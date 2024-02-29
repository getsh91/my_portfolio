import { FaFacebook } from "react-icons/fa";
import tesla from "../assets/images/tesla.png"

const Home = () => {
  return (
    <section className='max-container flex flex-row'>
      <div className="bg-blue-400">
            <h1  >App Devloper</h1>
            <h2  >Detery Plakson</h2>
            <p >Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod
                tempor incididunt ut dolor the sit amet consectetur adipisicing
                elit sed do consectetur labore et dolo...</p>
                <div class="icon">
                    <li><a href="" ><i ><FaFacebook/></i></a></li>
                    <li><a href="" ><i ><FaFacebook/></i></a></li>
                    <li><a href="" ><i ><FaFacebook/></i></a></li>
                   </div>
            <button >VIEW MORE</button>
        </div>
        <div className="bg-red-500 w-10 h-10">
          <img src={tesla} alt=""  className='w-1/2 h-1/2 object-contain'/>
        </div>

    </section>
  );
}
export default Home;