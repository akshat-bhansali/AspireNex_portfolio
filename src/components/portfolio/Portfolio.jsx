import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 4,
    title: "Github Finder",
    img: "./project4.png",
    desc: "GitHub Finder streamlines the team formation process for hackathons. By leveraging the GitHub API, it aggregates users' repositories, enabling others to browse profiles and connect. Users can select up to two tags to enhance their profiles, facilitating easier discovery. The platform includes real-time chat functionality for seamless collaboration and team formation.",
    link:"https://github.com/akshat-bhansali/GitHub-finder"
  },
  {
    id: 1,
    title: "Axios IIITL",
    img: "./project1.png",
    desc: "Axios IIITL is a website tailored for the Indian Institute of Information Technology - Lucknow community, specifically catering to the needs of its technical wing, Axios. The platform serves as a centralized hub where students can access class schedules, mark attendance, view their assignments, and stay updated on important announcements. Moreover, it provides comprehensive information on past, ongoing, and upcoming college events, offering students a holistic view of campus activities.",
    link :"https://github.com/akshat-bhansali/College_IIITL"
  },
  {
    id: 2,
    title: "Infoischia",
    img: "./project2.png",
    desc: "Infoischia is a website designed specifically for hotel bookings, offering a rich user interface to ensure a user-friendly experience. It provides a plethora of booking options, including accommodations for extra guests, luggage handling services, pickup arrangements, transportation facilities, and vehicle rental services. This comprehensive range of options caters to the diverse needs and preferences of users, allowing them to customize their bookings according to their specific requirements. Overall, Infoischia aims to enhance the hotel booking experience by offering a seamless and convenient platform with a wide array of booking options.",
    link :"https://github.com/akshat-bhansali/infoischia2"
  },
  {
    id: 3,
    title: "Game Creators Hub",
    img: "./project3.png",
    desc: "Game Creators Hub is a dedicated platform designed to help gamers find jobs in the gaming industry tailored to their specific games. It features a wide range of job types, including remote, online, paid, and unpaid positions, with the primary goal of helping gamers earn a living. The platform also includes chat features, allowing users to connect and be approached by potential employers. Additionally, Game Creators Hub enables gamers to showcase their gaming portfolios, enhancing their visibility and opportunities within the industry.",
    link:"https://github.com/akshat-bhansali/game-creators-hub-next"
  },
  {
    id: 5,
    title: "StepBucks - Where Every Step Matters",
    img: "./project5.png",
    desc: "StepBucks is an iOS app developed using Swift for Hack O Fiesta V4. It incentivizes fitness enthusiasts with rewards based on a leaderboard determined by their step count. Features include multiplier time frames (up to 2x) to make walking more engaging and enjoyable. StepBucks promotes physical exercise by encouraging users to walk in a fun, healthy environment and shows nearby parks for peaceful walks. Top participants on the leaderboard earn real money rewards.",
    link:"https://github.com/akshat-bhansali/StepBucks"
  },
  {
    id: 6,
    title: "Drive-upload-service-account (npm package)",
    img: "./npm.png",
    desc: "This package streamlines file uploading to Google Drive using service account authentication. It offers secure file uploads with parent folder specifications, removing the need for client-side authentication. With 2000+ downloads, it has gained significant attention from developers. Licensed under Apache 2.0, it also serves as a cost-effective and reliable alternative to expensive cloud services.",
    link:"https://www.npmjs.com/package/drive-upload-service-account"
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button><a href={`${item.link}`}>Source Code</a></button>
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
        <h1>My Projects</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
