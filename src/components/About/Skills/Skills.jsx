import { skillData } from "./utils/skillsData";
import { motion, useAnimation } from "framer-motion";

export default function Skills() {
  return (
    <div className={`lg:w-9/12`}>
      <motion.p
         initial={{ opacity: 0, y: 35 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.5 }}
        className="text-5xl font-main_font my-5 text-theme_pink"
      >
        Skills and Tools
      </motion.p>

      <div className={`flex flex-wrap justify-center gap-10 mb-10 drop-shadow-2xl `}>
        {skillData.map((skill, i) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            style={``}
            className={` skill-icons flex flex-col items-center gap-1 justify-center justify-self-center ${skill.color} tstTwo`}
          >
            {skill.isIcon ? (
              skill.image
            ) : (
              <motion.img className={`w-11 `} src={`${skill.image}`} />
            )}
            <p>{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
