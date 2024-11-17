import React from "react";
import Topbar from "./Topbar";

function Home() {
  return (
    <>
      <Topbar />
      <div className="image ms-5">
        <img src="https://www.elmhurst.edu/wp-content/uploads/2021/10/teacher-mentor-illustration.jpg" alt="home-image"/>
      </div>
    </>
  );
}

export default Home;
