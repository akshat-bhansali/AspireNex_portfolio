import { useRef } from "react";
import "./pors.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const POR = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          Position Of
          <br /> Responsibility
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/college2.jpg" alt="" />
          <h1>
            <motion.b whileHover={{color:"orange"}}>Position</motion.b> Of
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{color:"orange"}}>Responsibility</motion.b>
          </h1>
          <img src="/temp2.jpeg" alt="" />
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2 style={{ color: "orange" }}>Axios IIITL</h2>
          <h5 style={{ color: "grey" }}>Member</h5>
          <p>
          At Axios, IIITL's technical wing, I served in both the app and web wings, assisting over 250 students with real-world projects and mentoring 200 juniors in Swift(IOS) development.</p>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2 style={{ color: "orange" }}>E-CELL IIITL</h2>
          <h5 style={{ color: "grey" }}>Member</h5>
          <p>
          As a member of IIITL's Entrepreneurship Cell (E-Cell), I fostered entrepreneurship and innovation on campus, leading the impactful event Enspire'23 to inspire students towards entrepreneurial pursuits.</p>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2 style={{ color: "orange" }}>The Musafirr Project</h2>
          <h5 style={{ color: "grey" }}>Volunteer</h5>
          <p>
          Volunteered at The Musafirr Project, serving meals twice daily to the needy during COVID-19 alongside a team of 60. Recognized by the Mumbai government and blessed by those we assisted.
          </p>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2 style={{ color: "orange" }}>ZEPHYR IIITL</h2>
          <h5 style={{ color: "grey" }}>Member</h5>
          <p>
          At Zephyr, Dance Society of IIITL, I earned numerous accolades in inter-college competitions. Additionally, I organized dance-centric events like Nrityang'23, as well as Garba and Prom Night.
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default POR;
