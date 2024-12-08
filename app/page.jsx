
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

/* Components */
import Socials from "@/components/Socials";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Développeur Web</span>
            <h1 className="h1">
              Salut, je suis <br /> <span className="text-accent xl:text-7xl font-extrabold">Youssef JNAH</span> 
            </h1>
            <p className="max-w-[480px] mt-9 mb-9 text-white/80">Je suis développeur web frontend junior, passionné par la création de sites et d'applications web modernes et fonctionnelles.</p>
          {/* button & Socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button variant="outline" size="lg" className="uppercase flex items-center gap-2">
                <a href="/assets/docs/CV.pdf">
                  <span>Télécharger CV</span>
                </a>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Socials containerStyles="flex gap-6" iconStyles="w-12 h-12 border border-accent rounded-full flex justify-center items-center text-accent text-3xl hover:bg-accent hover:text-primary hover:transition-all duration-500"/>
              </div>
            </div>
          </div>
          {/* image */}
          <div className="order-1 xl:order-none mb-8 xl:mb-8 ">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
}

export default Home;