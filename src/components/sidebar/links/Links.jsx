import { motion } from "framer-motion";

const variants = {
    open: {
      transition: {
        staggerChildren: 0.1,
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.05,
        // staggerDirection: -2,
      },
    }, 
  };

  const itemVariants = {
    open: {
        opacity: 1,
        y: 0,
    },
    closed: {
      
        opacity: 0,
        y: 100,
    },
  };
  
const Links = () => {
  const items = ["Hoemepage", "Services", "Portfolio", "Contact", "About"];
  

  return (
    <motion.div className="links" variants={variants}>
      {items.map((item) => (
        <motion.a href={`#${item}`} key={item} variants={itemVariants} whileHover={{scale:1.5}}>
          {item}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Links;
