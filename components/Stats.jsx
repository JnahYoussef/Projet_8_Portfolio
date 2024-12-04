"use client"; 

import CountUp from "react-countup";

const stats = [
    {
        num: 1,
        text: "Années d'expérience",
    },
    {
        num: 7,
        text: "Projets terminés",
    },
    {
        num: 5,
        text: "Technologies maîtrisées",
    },
];

const Stats = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
        <div className="container mx-auto">
            <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl-max-w-none">
                {stats.map((item, index) => {
                    return (
                    <div 
                        className="flex-1 flex items-center justify-center gap-4 xl:justify-start"
                        key={index}>
                        <CountUp 
                            end={item.num} 
                            duration={5} delay={2} 
                            className="text-4xl xl:text-6xl font-extrabold"
                        />
                        <p className="leading-snug text-white/80">{item.text}</p>
                </div>
                )}
                )}
            </div>
        </div>
    </section>
  );
}

export default Stats;