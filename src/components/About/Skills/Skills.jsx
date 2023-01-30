import { skillData } from "./utils/skillsData";
import { motion } from "framer-motion";
import { Bars } from "react-loading-icons";

export default function Skills({}) {
  return (
    <div className={`lg:w-9/12`}>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 1 }}
        className="text-4xl my-5 text-theme_pink"
      >
        Skills and Tools
      </motion.p>

      <div className="flex flex-wrap justify-center gap-10 mb-10">
        {skillData.map((skill, i) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            style={``}
            className={` skill-icons flex flex-col items-center gap-1 justify-center justify-self-center ${skill.color}`}
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
