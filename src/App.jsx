import { IoArrowUpCircle } from "react-icons/io5";
import "./App.css";
import AnimatedMenu from "./components/AnimatedMenu";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Aboutme from "./pages/Aboutme";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import MyWorksChart from "./components/MyWorksChart";

function App() {
  return (
    <>
      <div className="dark:bg-black bg-white dark:text-white">
        <div className="hamburger-menu absolute bg-orange-500 z-[100]">
          <AnimatedMenu />
        </div>
        <Hero />
        <MyWorksChart />
        <br />

        <Aboutme />

        <Projects />
        <Experience />
        <div className="fixed dark:bg-white bg-white rounded-full p-1 z-10 right-7 bottom-7 animate-bounce">
          <a href="#hero">
            <IoArrowUpCircle className="text-3xl text-primaryRed " />
          </a>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default App;

// <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-500">
//         <header className="p-4 transition-colors duration-100">
//           <ToggleDarkMode />
//         </header>
//         <main className="p-4 transition-colors duration-20">Hello, World!</main>
//       </div>
