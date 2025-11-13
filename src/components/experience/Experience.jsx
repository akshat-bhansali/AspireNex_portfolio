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
          <h2 style={{ color: "orange" }}>Amazon</h2>
          <h5>Software Developer Engineer Intern</h5>
          <h5 style={{ color: "grey" }}>Jul 2025 - Dec 2025 (Bengaluru)</h5>
          <p>
          At Amazon, I’m working as a Software Developer Engineer Intern in the RBS Sherlock team, where I developed a Rules Engine that converts BA/DA-authored rules into PySpark ETL jobs, reducing setup time by 60%. I also built a CDK-driven Data Enrichment pipeline automating S3 deployments, saving 20 minutes per release, and created a Multi Account Manager to route workloads dynamically across multiple SQS queues, improving efficiency by 40%.</p>
          <button><a href="/">View Certificate of Completion</a></button>
        </motion.div>
      <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2 style={{ color: "orange" }}>Angel One Broking</h2>
          <h5>Software Developer Intern</h5>
          <h5 style={{ color: "grey" }}>Sep 2024 - Mar 2025 (Remote)</h5>
          <p>
          At Angel One Broking, I worked as a Software Developer Engineer Intern in the AMX-Alpha team, where I built Nemesis, a Redis-integrated internal console for real-time trade and order-book data, ensuring persistence despite daily flush cycles. I migrated authentication from Google OAuth to Microsoft OAuth across systems and automated trade monitoring workflows, reducing manual effort by 25% and enhancing overall system reliability.</p>
          <button><a href="/">View Certificate of Completion</a></button>
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
