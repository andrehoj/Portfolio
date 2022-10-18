import { skillData } from "./utils/skillsData";
import { motion } from "framer-motion";

export default function Skills() {
  return (
    <>
      <p className="text-5xl mt-10">My Skills</p>
      <div className="flex flex-wrap justify-center gap-10 mb-10">
        {skillData.map((skill, i) => (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="skill-icons flex flex-col items-center justify-center justify-self-center p-2 rounded-lg shadow-sm shadow-light_theme_blue dark:shadow-dark_theme_cyan hover:shadow-light_theme_blue"
          >
            {skill.isIcon ? (
              skill.image
            ) : (
              <img className="w-8" src={`${skill.image}`} />
            )}
            <p>{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
}
