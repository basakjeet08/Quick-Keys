import Header from "./components/Header";
import Footer from "./components/Footer";
import TyperPage from "./page/TyperPage";

function App() {
  return (
    <div className="flex flex-col h-screen w-screen items-center bg-background text-text">
      <Header />
      <TyperPage />
      <Footer />
    </div>
  );
}

export default App;
