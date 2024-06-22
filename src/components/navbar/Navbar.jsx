import "./navbar.scss"
import {motion} from "framer-motion"
import Sidebar from "../sidebar/Sidebar";
const Navbar = () => {
    const variants ={
        visible:{opacity:1, scale:1},
        hidden:{opacity:0, scale:0.5}
    }
    return (
    <div className="navbar">
        <Sidebar/>
        <div className="wrapper" >
           <motion.span variants={variants} initial="hidden" animate="visible" transition={{duration:0.5}}>Freelancer</motion.span> 
           <div className="social">
            <a href="#"><img src="/facebook.png" alt="" /></a>
            <a href="#"><img src="/instagram.png" alt="" /></a>
            <a href="#"><img src="/youtube.png" alt="" /></a>
            <a href="#"><img src="/dribbble.png" alt="" /></a>
           </div>
        </div>
    </div>
    )
  };
  
  export default Navbar;
  