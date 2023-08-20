import React from "react";


const Hero = ({timeline}) => {

  const Heading = useRef(null)
  const Heading2 = useRef(null)
  useEffect(()=>{
    timeline
    .to(Heading.current,{duration:2,opacity:1})
    .to(Heading2.current,{duration:2,delay:-2,opacity:1})
  },[])
  
  return (
 
    <main className="flex  h-screen items-center justify-center  ">
      <section className=" flex flex-col items-center justify-center text-center space-y-2  p-4 ">
        <h1 className=" text-4xl max-md:px-3 py-2 md:text-6xl font-bold heading1 ">Your Business, Our Priority</h1>
        <h2 className=" text-md md:text-2xl dark:text-slate-400 text-slate-600 ">Marketing | Development | Editing</h2>
      </section>
    </main>
   
  );
}

export default Hero;
