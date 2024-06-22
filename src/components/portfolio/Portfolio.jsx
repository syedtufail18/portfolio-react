import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import "./portfolio.scss";
import { useRef } from "react";

const items = [
  {
    id: 1,
    img: "Music.jpg",
    desc: "Blah blaha Blah blaha Blah blaha Blah blahaBlah blaha Blah blaha Blah blahaBlah blaha Blah blahaBlah blaha",
    title: "Music App",
  },
  {
    id: 3,
    img: "Food.jpg",
    desc: "Blah blaha Blah blaha Blah blaha Blah blahaBlah blaha Blah blaha Blah blahaBlah blaha Blah blahaBlah blaha",
    title: "Food App",
  },
  {
    id: 2,
    img: "Health.jpg",
    desc: "Blah blaha Blah blaha Blah blaha Blah blahaBlah blaha Blah blaha Blah blahaBlah blaha Blah blahaBlah blaha",
    title: "Health App",
  },
  {
    id: 4,
    img: "Shopping.jpg",
    desc: "Blah blaha Blah blaha Blah blaha Blah blahaBlah blaha Blah blaha Blah blahaBlah blaha Blah blahaBlah blaha",
    title: "Shopping App",
  },
];

// const variants = {
//     visible: { opacity: 1, scale: 1 },
//     hidden: { opacity: 0, scale: 0.5 },
//   };
const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer"  ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer"  style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Feature Works</h1>
        <motion.div className="progressBar" style={{ scaleX }}></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
