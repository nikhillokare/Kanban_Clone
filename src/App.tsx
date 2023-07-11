import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Main from "./components/Main";

const App = () => {
  return (
    <div className="h-screen w-full flex">
      <Sidebar className="hidden md:block" />
      <main className="flex-1">
        <Navbar />
        <Main />
      </main>
    </div>
  );
};

export default App;
