import { useRef } from "react";
import "./experiences.scss";
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

const Experience = () => {
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
          Experience
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/college.jpeg" alt="" />
          <h1>
            <motion.b whileHover={{color:"orange"}}>My</motion.b>
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{color:"orange"}}>Experience</motion.b>
          </h1>
          <img src="/temp1.jpeg" alt="" />
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2 style={{ color: "orange" }}>Tripology Holidays.Inc</h2>
          <h5>Website Developer Intern</h5>
          <h5 style={{ color: "grey" }}>Jan 2024 - Feb 2024 (Remote)</h5>
          <p>
          During my internship at Tripology Holidays.Inc as a website developer, I played a significant role in their portal software project, contributing actively and ensuring timely delivery. This collaboration led to a notable 4% increase in customer engagement. Additionally, my experience working within a team of developers showcased my strong teamwork skills, further enhancing my professional repertoire.
          </p>
          <button><a href="https://www.linkedin.com/posts/akshat-bhansali_juniordeveloper-startuplife-thesupplywheel-activity-7190554117004546048-rDEM?utm_source=share&utm_medium=member_desktop">View Certificate of Completion</a></button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2 style={{ color: "orange" }}>The Supply Wheel</h2>
          <h5>Junior Full Stack Developer Intern</h5>
          <h5 style={{ color: "grey" }}>May 2024 - Jul 2024 (Remote)</h5>
          <p>
          As a junior full-stack developer at The Supply Wheel, I concentrated on improving e-bill generation and social media sharing processes. Collaborating with the team, we created a self-constructing PDF system, boosting efficiency. This led to a notable 23% rise in customer retention and an 18% drop in bounce rates. I also assisted fellow developers and engaged in client meetings, enhancing project outcomes.</p>
          <button><a href="https://www.linkedin.com/posts/akshat-bhansali_juniordeveloper-startuplife-thesupplywheel-activity-7190554117004546048-rDEM?utm_source=share&utm_medium=member_desktop">View Offer Letter</a></button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
         <h2 style={{ color: "orange" }}>Fiverr</h2>
          <h5>Freelancer</h5>
          <h5 style={{ color: "grey" }}>Jun 2023 - Present (Remote)</h5>
          <p>
          In my Fiverr freelancing journey, I attained Level 1 seller status after completing 10 projects with consistent 5-star ratings, maintaining an 8+ success score, and earning $400. All projects were delivered ahead of schedule, underscoring my dedication to professionalism and efficiency. This experience also allowed me to learn new technology stacks and enhance my communication skills, enabling me to better understand and meet clients' needs.</p>
          <button><a href="https://www.fiverr.com/akshatbhansali/build-the-website-of-your-imagination">View Profile</a></button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Experience;
