
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

function ScrollCard({ title, description }) {
  const ref = useRef(null);

  // track scroll progress for each card
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 100%", "end 90%"], // smoother range
  });

  // map progress → fade + slide
  const rawOpacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  //   const rawY = useTransform(scrollYProgress, [0, 1], [50, 0]);
  const rawScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  // smooth it with spring
  const opacity = useSpring(rawOpacity, { stiffness: 80, damping: 20 });
  //   const y = useSpring(rawY, { stiffness: 80, damping: 20 });
  const scale = useSpring(rawScale, { stiffness: 80, damping: 20 });

  return (
    <motion.div
      drag
      ref={ref}
      style={{
        opacity,
        // y,
        scale,
      }}
      className="p-6 rounded-2xl shadow-lg bg-white/90 backdrop-blur-md border border-gray-200 max-w-md w-full"
    >
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
}

export default function ScrollRangeExample() {
  const features = [
    {
      title: "🚀 Fast Performance",
      description:
        "Experience blazing fast load times and smooth interactions.",
    },
    {
      title: "🎨 Modern Design",
      description: "Sleek and responsive layouts that adapt to any device.",
    },
    {
      title: "🔒 Secure",
      description: "Top-notch security with end-to-end encryption.",
    },
    {
      title: "⚡ Optimized Code",
      description: "Minimal bundle size and optimized rendering.",
    },
    {
      title: "📱 Mobile Friendly",
      description: "Designed to look great on any screen size.",
    },
    {
      title: "🌐 Global Reach",
      description: "Seamlessly scalable for worldwide users.",
    },

    {
      title: "🚀 Fast Performance",
      description:
        "Experience blazing fast load times and smooth interactions.",
    },
    {
      title: "🎨 Modern Design",
      description: "Sleek and responsive layouts that adapt to any device.",
    },
    {
      title: "🔒 Secure",
      description: "Top-notch security with end-to-end encryption.",
    },
    {
      title: "⚡ Optimized Code",
      description: "Minimal bundle size and optimized rendering.",
    },
    {
      title: "📱 Mobile Friendly",
      description: "Designed to look great on any screen size.",
    },
    {
      title: "🌐 Global Reach",
      description: "Seamlessly scalable for worldwide users.",
    },

    {
      title: "🚀 Fast Performance",
      description:
        "Experience blazing fast load times and smooth interactions.",
    },
    {
      title: "🎨 Modern Design",
      description: "Sleek and responsive layouts that adapt to any device.",
    },
    {
      title: "🔒 Secure",
      description: "Top-notch security with end-to-end encryption.",
    },
    {
      title: "⚡ Optimized Code",
      description: "Minimal bundle size and optimized rendering.",
    },
    {
      title: "📱 Mobile Friendly",
      description: "Designed to look great on any screen size.",
    },
    {
      title: "🌐 Global Reach",
      description: "Seamlessly scalable for worldwide users.",
    },

    {
      title: "🚀 Fast Performance",
      description:
        "Experience blazing fast load times and smooth interactions.",
    },
    {
      title: "🎨 Modern Design",
      description: "Sleek and responsive layouts that adapt to any device.",
    },
    {
      title: "🔒 Secure",
      description: "Top-notch security with end-to-end encryption.",
    },
    {
      title: "⚡ Optimized Code",
      description: "Minimal bundle size and optimized rendering.",
    },
    {
      title: "📱 Mobile Friendly",
      description: "Designed to look great on any screen size.",
    },
    {
      title: "🌐 Global Reach",
      description: "Seamlessly scalable for worldwide users.",
    },

    {
      title: "🚀 Fast Performance",
      description:
        "Experience blazing fast load times and smooth interactions.",
    },
    {
      title: "🎨 Modern Design",
      description: "Sleek and responsive layouts that adapt to any device.",
    },
    {
      title: "🔒 Secure",
      description: "Top-notch security with end-to-end encryption.",
    },
    {
      title: "⚡ Optimized Code",
      description: "Minimal bundle size and optimized rendering.",
    },
    {
      title: "📱 Mobile Friendly",
      description: "Designed to look great on any screen size.",
    },
    {
      title: "🌐 Global Reach",
      description: "Seamlessly scalable for worldwide users.",
    },

    {
      title: "🚀 Fast Performance",
      description:
        "Experience blazing fast load times and smooth interactions.",
    },
    {
      title: "🎨 Modern Design",
      description: "Sleek and responsive layouts that adapt to any device.",
    },
    {
      title: "🔒 Secure",
      description: "Top-notch security with end-to-end encryption.",
    },
    {
      title: "⚡ Optimized Code",
      description: "Minimal bundle size and optimized rendering.",
    },
    {
      title: "📱 Mobile Friendly",
      description: "Designed to look great on any screen size.",
    },
    {
      title: "🌐 Global Reach",
      description: "Seamlessly scalable for worldwide users.",
    },

    {
      title: "🚀 Fast Performance",
      description:
        "Experience blazing fast load times and smooth interactions.",
    },
    {
      title: "🎨 Modern Design",
      description: "Sleek and responsive layouts that adapt to any device.",
    },
    {
      title: "🔒 Secure",
      description: "Top-notch security with end-to-end encryption.",
    },
    {
      title: "⚡ Optimized Code",
      description: "Minimal bundle size and optimized rendering.",
    },
    {
      title: "📱 Mobile Friendly",
      description: "Designed to look great on any screen size.",
    },
    {
      title: "🌐 Global Reach",
      description: "Seamlessly scalable for worldwide users.",
    },
  ];


  const tubeRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: tubeRef,
    offset: ["start 90%", "end 70%"],
  });

  // map progress to height
  const rawHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  // smooth it with a spring
  const height = useSpring(rawHeight, {
    stiffness: 100,
    damping: 20,
    mass: 0.5,
  });


  return (
    <div className="min-h-screen flex flex-col items-center gap-20 py-20 bg-gradient-to-b from-pink-100 to-purple-100">
      <div className=" flex flex-col gap-y-5 ">
        {features.map((feature, i) => (
        <ScrollCard key={i} {...feature} />
      ))}
      </div>
      <div className="pb-[1000px]">
        <div className="w-[150px] h-[550px] rounded-xl bg-white flex items-end p-1 shadow-2xl">
            <motion.div style={{height}} ref={tubeRef} className="w-full h-0 bg-violet-600 rounded-xl shadow-md"/>
        </div>
      </div>
      <TubeFill/>
    </div>
  );
}



export function TubeFill() {
  // 👇 sentinel wrapper used for measuring scroll progress
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,                // measure against the static wrapper
    offset: ["start 90%", "end 10%"],  // wide, predictable range
    // If you scroll inside a custom container, also pass: container: containerRef
  });

  // map progress -> height
  const rawHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const height = useSpring(rawHeight, { stiffness: 120, damping: 20, mass: 0.6 });

  return (
    <section
      ref={sectionRef}
      className="h-[140vh] pb-[500px] flex items-center justify-center" // ensure it can enter/leave viewport
    >
      <div className="w-12 h-64 bg-gray-200 rounded-full overflow-hidden flex items-end">
        {/* 👇 animate a child, not the target */}
        <motion.div
          style={{ height }}
          className="w-full bg-gradient-to-t from-blue-600 to-blue-300"
        />
      </div>
    </section>
  );
}

