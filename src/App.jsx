import "./App.css";
import Blog from "./Components/Blogs/Blogs";
import Bookmarks from "./Components/Bookmarks/Bookmarks";
import Header from "./Components/Headers/Header";

function App() {
  return (
    <>
      <Header />
      <div className="md:flex">
        <Blog />
        <Bookmarks />
      </div>
    </>
  );
}

export default App;
