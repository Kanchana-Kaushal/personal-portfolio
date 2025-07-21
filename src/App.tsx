import Hero from "./components/Hero";
import RecentProjects from "./components/RecentProjects";
import Technologies from "./components/Technology";
import WorkAndEducation from "./components/WorkAndEducation";

function App() {
  return (
    <>
      <main className="font-inter mx-auto w-4/5 max-w-3xl text-gray-800">
        <Hero />
        <WorkAndEducation />
        <RecentProjects />
        <Technologies />
      </main>
    </>
  );
}

export default App;
