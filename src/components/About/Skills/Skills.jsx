import { skillData } from "./utils/skillsData";
import { motion } from "framer-motion";

export default function Skills() {
  return (
    <div className="lg:w-7/12">
      <motion.p
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="my-5 font-main_font text-5xl text-theme_pink"
      >
        Skills and Tools
      </motion.p>

      <div className="mb-10 flex flex-wrap justify-center gap-10 drop-shadow-2xl ">
        {skillData.map((skill, i) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className={`skill-icons flex flex-col items-center justify-center gap-1 justify-self-center ${skill.color}`}
          >
            {skill.image}
            <p className={`${skill.color} font-semibold`}>{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
