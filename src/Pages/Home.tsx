import Hero from "../components/Hero";
import RecentProjects from "../components/RecentProjects";
import Technologies from "../components/Technology";
import WorkAndEducation from "../components/WorkAndEducation";

function Home() {
  return (
    <>
      <Hero />
      <WorkAndEducation />
      <RecentProjects />
      <Technologies />
    </>
  );
}

export default Home;
