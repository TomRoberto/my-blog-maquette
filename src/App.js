import "./App.css";
import Header from "./Header";
import Item from "./Item";
import MainContent from "./MainContent";
import NavigationMenu from "./NavigationMenu";
import SideContent from "./SideContent";
import Footer from "./Footer";

function App() {
  return (
    <div className="app">
      <div className="container">
        <Header />

        <NavigationMenu />
        <main>
          <MainContent />
          <SideContent />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
