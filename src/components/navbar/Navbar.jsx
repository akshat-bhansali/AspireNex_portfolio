import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Akshat Bhansali
        </motion.span>
        <div className="social">
          <a href="https://www.linkedin.com/in/akshat-bhansali/">
            <img src="/linkedin.png" alt="" />
          </a>
          <a href="https://codeforces.com/profile/odison7">
            <img src="/forces.png" alt="" />
          </a>
          <a href="https://www.youtube.com/@akshatbhansali4185">
            <img src="/youtube.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
