import "./App.css";
import Footer from "../components/Footer";

import Header from "../components/Header";

import { Outlet } from "react-router-dom";
import PostListProvider from "../store/post-list-store";

function App() {
  return (
    <div className="full">
      <PostListProvider>
        <Header></Header>
        <div className="content">
          <Outlet></Outlet>
          <Footer></Footer>
        </div>
      </PostListProvider>
    </div>
  );
}

export default App;
