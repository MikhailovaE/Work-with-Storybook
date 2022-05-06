import React from "react";
import Banner from "../Component/UI/Banner/Banner";
import Button from "../Component/UI/Button/Button";
import Hero from "../Component/UI/Hero/Hero";

const Dashboard = () => {
  return (
    <>
      <Hero />
      <div className="container">
        <Banner
          backgroundColor="#F5EBF6"
          title="Develop a team to be a smart leader"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tristique ante nec arcu tempus suscipit. Aenean eros urna, porttitor in quam eu, ornare bibendum sapien. Ut eu tempus dolor, sed malesuada justo. Curabitur vel lorem eros. Vestibulum hendrerit libero purus, a congue nulla fringilla id. Ut consequat purus vel sem hendrerit porttitor."
        >
          <Button>Button</Button>
        </Banner>
        <Banner
          backgroundColor="#DEF3F4"
          position="left"
          title="Lorem ipsum"
          description="Suspendisse suscipit lacinia est ut volutpat. Phasellus auctor pulvinar sapien id cursus. Duis libero tellus, commodo quis odio eu, maximus dapibus enim. Integer ut malesuada elit."
        />
      </div>
    </>
  );
};

export default Dashboard;
