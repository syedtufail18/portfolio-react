import { useRef } from "react";
import "./services.scss";
import { animate, color, motion, useInView } from "framer-motion";

const variants = {
  initial: { opacity: 0, x: -500, y: 100 },
  animate: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 1, staggerChildren: 0.2 },
  },
  // transition: { duration: 5, staggerChildren: 0.1 }
};

const Services = () => {
const ref = useRef();

const isInView = useInView(ref,{margin:"-100px"});

  
  return (
    <motion.div className="services" ref={ref} variants={variants} initial="initial" animate={isInView && "animate"} >
      <motion.div variants={variants} className="textContainer">
        <p>
          I focus on helping your brand grow <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div variants={variants} className="titleContainer">
        <div className="title">
          <img src="./people.webp" alt="" />
          <h1>
            <motion.b whileHover={{color:"orange"}}>Unique</motion.b>Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{color:"orange"}}>For Your</motion.b>Business.
          </h1>
          <button>What WE DO?</button>
        </div>
      </motion.div>
      <motion.div variants={variants} className="listContainer">
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Blah blaha Blah blaha Blah blaha Blah blahaBlah blaha Blah blaha
            Blah blahaBlah blaha Blah blahaBlah blaha
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Blah blaha Blah blaha Blah blaha Blah blahaBlah blaha Blah blaha
            Blah blahaBlah blaha Blah blahaBlah blaha
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Blah blaha Blah blaha Blah blaha Blah blahaBlah blaha Blah blaha
            Blah blahaBlah blaha Blah blahaBlah blaha
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Blah blaha Blah blaha Blah blaha Blah blahaBlah blaha Blah blaha
            Blah blahaBlah blaha Blah blahaBlah blaha
          </p>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
