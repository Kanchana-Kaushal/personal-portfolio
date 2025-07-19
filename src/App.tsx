import Hero from "./components/Hero";
import WorkAndEducation from "./components/WorkAndEducation";

function App() {
  return (
    <>
      <main className="font-inter mx-auto w-8/10 max-w-3xl text-gray-800">
        <Hero />
        <WorkAndEducation />
      </main>
    </>
  );
}

export default App;
