import { transform } from "motion";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const people = [
  {
    id: 1,
    name: "Arjun Mehta",
    job_title: "Frontend Developer",
    description:
      "Arjun specializes in building pixel-perfect user interfaces with React.js and Tailwind CSS. He loves crafting seamless user experiences.",
    image:
      "https://i.pinimg.com/1200x/27/b2/cd/27b2cdebbe52bf0ad8f0ef1f7c0a6412.jpg",
  },
  {
    id: 2,
    name: "Sana Kapoor",
    job_title: "Backend Engineer",
    description:
      "Sana is passionate about creating scalable APIs with Node.js and Express. She ensures that applications are fast and reliable.",
    image:
      "https://i.pinimg.com/736x/79/f4/d5/79f4d588baa660b33e4d068323c83545.jpg",
  },
  {
    id: 3,
    name: "Rahul Iyer",
    job_title: "Full Stack Developer",
    description:
      "Rahul loves working across the stack, from React frontends to MongoDB databases. He enjoys solving complex technical challenges.",
    image:
      "https://i.pinimg.com/736x/e8/8b/ae/e88baee1b52f1c681e00fdf9b5930b14.jpg",
  },
  {
    id: 4,
    name: "Priya Nair",
    job_title: "UI/UX Designer",
    description:
      "Priya designs intuitive interfaces and creates engaging user flows. Her focus is on combining aesthetics with functionality.",
    image:
      "https://i.pinimg.com/736x/fb/1d/af/fb1daffb533b2cb4ad12e4fa6e91b496.jpg",
  },
  {
    id: 5,
    name: "Kunal Sharma",
    job_title: "Mobile App Developer",
    description:
      "Kunal builds cross-platform mobile applications with React Native and Expo. His goal is to deliver smooth and responsive apps.",
    image:
      "https://i.pinimg.com/736x/5b/e5/d7/5be5d74b9f327ef957691246a2f64280.jpg",
  },
  {
    id: 6,
    name: "Aisha Khan",
    job_title: "DevOps Engineer",
    description:
      "Aisha works on CI/CD pipelines, containerization, and cloud infrastructure to keep deployments reliable and efficient.",
    image:
      "https://i.pinimg.com/736x/2a/ed/63/2aed6307a960b6f04eaec4ff2df660c2.jpg",
  },
  {
    id: 7,
    name: "Rohit Verma",
    job_title: "Data Engineer",
    description:
      "Rohit builds and maintains data pipelines, ensuring accurate data flow between systems for analytics and insights.",
    image:
      "https://i.pinimg.com/736x/6a/0e/13/6a0e13cd9d9b5b8b8317759a0af20eb7.jpg",
  },
  {
    id: 8,
    name: "Meera Joshi",
    job_title: "Machine Learning Engineer",
    description:
      "Meera develops ML models to solve real-world problems, focusing on predictive analytics and AI-driven applications.",
    image:
      "https://i.pinimg.com/736x/04/09/e8/0409e8a66d0e5e82c4815fa2bbe73034.jpg",
  },
  {
    id: 9,
    name: "Ankit Singh",
    job_title: "Cybersecurity Specialist",
    description:
      "Ankit ensures systems are secure by monitoring vulnerabilities and implementing advanced security practices.",
    image:
      "https://i.pinimg.com/736x/aa/4f/52/aa4f523751b3b9846e42f5660adcf80d.jpg",
  },
];

const AdvancedCarousel = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? 200 : -200,
        behavior: "smooth",
      });
    }
  };

  const [isNavigate, setNavigate] = useState(false);

  return (
    <div style={{
      opacity : isNavigate ? 0 : 1,
      scale : isNavigate ? 2 : 1
    }} className="w-full min-h-screen bg-[#222222] text-white flex flex-col justify-center items-center relative overflow-hidden transition-all duration-500">
      <h1 className="text-[#bd0000] title-shadow font-AbrilFatface text-[3rem] leading-10">
        OUR TEAM
      </h1>
      <div
        ref={scrollRef}
        className="w-full flex overflow-x-auto snap-x snap-mandatory py-10 items-center scrollbar-hide"
      >
        {people.map((p, idx) => (
          <Item p={p} idx={idx} setNavigate={setNavigate}/>
        ))}
      </div>

      <button
        onClick={() => {
          scroll("right");
        }}
        className="absolute top-1/2 translate-y-[-50%] bg-[#FFFFFF]/10 backdrop-blur-md rounded-md left-5 p-5 z-20"
      >
        {"<"}
      </button>
      <button
        onClick={() => {
          scroll("left");
        }}
        className="absolute top-1/2 translate-y-[-50%] bg-[#FFFFFF]/10 backdrop-blur-md rounded-md right-5 p-5 z-20"
      >
        {">"}
      </button>
    </div>
  );
};

export default AdvancedCarousel;

const Item = ({ p, idx, setNavigate, }) => {
  const [isVisible, setIsVisible] = useState(false);
  const itemRef = useRef(null);
  const [style, setStyle] = useState({});

  const handleMouseMove = (e) => {
    const { offsetX, offsetY, target } = e.nativeEvent;

    const centerX = target.clientWidth / 2;
    const centerY = target.clientHeight / 2;

    // Normalize relative to center
    const rotateX = -((offsetY - centerY) / centerY) * 5;
    const rotateY = -((offsetX - centerX) / centerX) * 5;

    setStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(5px) scale(1.05)`,
      transition: "transform 0.2s ease",
      transformOrigin: "center center",
    });
  };

  const handleMouseLeave = () => {
    setStyle({
      transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) skew(-1deg) translateZ(0px) scale(1)",
      transformOrigin: "bottom",
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]; // since it's only one element
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.4, // 40% visible
      }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => {
      if (itemRef.current) {
        observer.unobserve(itemRef.current);
      }
      observer.disconnect();
    };
  }, []);


  const navigate = useNavigate();
  const handleNavigate = () => {
    setNavigate(true);
    setTimeout(() => {
      navigate("/info", {state : {data : p}});
    }, 500);
  };

  return (
    <div
      key={idx}
      data-id={idx}
      ref={itemRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ ...style }}
      className={`relative min-w-[50%] md:min-w-[33.33%] lg:min-w-[25%] snap-start transition-all duration-700 
              hover:z-10 hover:shadow-2xl hover:shadow-[#bd0000] group bg-black 
              hover:scale-[1.01] hover:translate-y-0 overflow-hidden skew-box
              opacity-[0.7] hover:opacity-[1] hover:blur-[0px]
              ${
                isVisible
                  ? "opacity-[1] translate-y-0 h-[500px] md:h-[700px] blur-[1px]"
                  : "opacity-[0] translate-y-0 h-[450px] md:h-[600px] blur-[20px]"
              }`}
    >
      <div
        className={`relative w-full h-full group-hover:rounded-sm group-hover:h-[60%] transition-all duration-700 object-top
                 overflow-hidden group-hover:scale-[0.7]`}
      >
        <img
          className={`w-full h-full object-cover object-top
                ${isVisible ? "" : ""}
                `}
          src={p.image}
          alt={`Carousel item ${idx + 1}`}
        />
        <div className="absolute w-full h-full group-hover:bg-gradient-to-t from-[#000000] to-transparent top-0 left-0" />
      </div>
      <div className="p-2 md:p-5 flex flex-col justify-end items-center overflow-hidden group-hover:scale-[1] scale-[0] h-[40%] gap-y-1 md:gap-y-3 transition-all delay-100 info-skew">
        <h1 className="text-[1.5rem] md:text-[2rem] lg:text-[2.7rem] text-center font-semibold text-[#bd0000] leading-6 font-AbrilFatface title-shadow translate-y-10 scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-[0.1s] ease-in-out">
          {p.name}
        </h1>
        <p className="font-AbrilFatface text-xs md:text-sm lg:text-xl text-white/100 translate-y-10 group-hover:translate-y-0 transition-all duration-500 delay-[0.2s] opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-100 ease-in-out">
          {p.job_title}
        </p>
        <p className="text-center text-[0.6rem] md:text-xs lg:text-sm font-barlow text-white/70 translate-y-10 group-hover:translate-y-0 transition-all duration-500 delay-[0.3s] opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-100 ease-in-out">
          {p.description}
        </p>
        <button
          onClick={handleNavigate}
          className="bg-[#bd0000] w-full py-2 button-shadow font-AbrilFatface translate-y-10 group-hover:translate-y-0 transition-all duration-500 delay-[0.4s] opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-100 ease-in-out"
        >
          Know More
        </button>
      </div>
    </div>
  );
};
