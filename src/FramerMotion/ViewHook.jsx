import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";

// ✅ Stats Counter that runs when in view
function Counter({ target }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (inView) {
      let current = 0;
      const interval = setInterval(() => {
        current += 1;
        setCount(current);
        if (current >= target) clearInterval(interval);
      }, 20);
    }
  }, [inView, target]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.6 }}
      className="text-4xl font-bold text-blue-600"
    >
      {count}
    </motion.div>
  );
}

// ✅ Section component with scroll animation
function Section({ children }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="h-screen flex items-center justify-center text-3xl font-bold bg-gray-100 border-b"
    >
      {children}
    </motion.section>
  );
}

export default function ViewHook() {
  return (
    <div>
      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center text-5xl font-extrabold bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        🚀 Welcome to Our Landing Page
      </section>

      {/* Features */}
      <Section>✨ Amazing Features</Section>
      <Section>⚡ Super Fast Performance</Section>
      <Section>🔒 Bank-level Security</Section>

      {/* Stats Section */}
      <section className="h-screen flex flex-col items-center justify-center gap-6 bg-white">
        <h2 className="text-4xl font-bold mb-6">📊 Our Achievements</h2>
        <div className="flex gap-12">
          <Counter target={100} />+ Clients
          <Counter target={250} />+ Projects
          <Counter target={50} />+ Awards
        </div>
      </section>

      {/* Call-To-Action */}
      <Section>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="px-8 py-4 bg-blue-600 text-white rounded-2xl text-2xl shadow-lg"
        >
          💡 Get Started Now
        </motion.button>
      </Section>
    </div>
  );
}
