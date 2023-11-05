"use client";
import { skillData } from "../utils/skillsData";
import { motion } from "framer-motion";

export default function Skills() {
  return (
    <div className="lg:w-9/12">
      <p className="my-5 font-display text-5xl text-theme_pink">
        Skills and Tools
      </p>

      <div className="mb-10 flex flex-wrap justify-center gap-10">
        {skillData.map((skill, i) => (
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              delay: i * 0.07,
              duration: 0.2,
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
            key={i}
            className={`skill-icons flex flex-col items-center justify-center gap-1 justify-self-center ${skill.color}`}
          >
            {skill.image}
            <p className="text-secondary_text">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
