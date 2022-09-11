import "./App.css";
import { Route, Routes } from "react-router-dom";

import { Feed } from "./Components/Feed/Feed";
import AddInput from "./Components/AddInput/AddInput";
import { People } from "./Components/People/People";
import { Trending } from "./Components/Trending/Trending";
import { UPelections } from "./Components/UPelections/UPelections";
import { Video } from "./Components/Videos/Video";
import { Polls } from "./Components/Polls/Polls";
import { Cricket } from "./Components/Cricket/Cricket";
import { Following } from "./Components/Following/Following";
import { News } from "./Components/News/News";
import { Exclusive } from "./Components/Exclusive/Exclusive";
import { Profile } from "./Components/Profile/Profile";
import { Explore } from "./Components/Explore/Explore";
import { Language } from "./Components/Language/Language";
import { CreateKoo } from "./Components/CreateKoo/CreateKoo";
import { Notification } from "./Components/Notification/Notification";
import LandingPage from "./Components/LandingPage/LandingPage";
import About from "./Components/Widgets/About";
import Contact from "./Components/Widgets/Contact";
import Resource from "./Components/Widgets/Resource";
import Comment from "./Components/Feed/Comment";
import Faq from "./Components/Widgets/Faq";
import Sitemap from "./Components/Widgets/Sitemap"
import Editprofile from "./Components/Editprofile/Editprofile";

function App() {
  return (
    <div className="App">
      <div>
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/feed" element={<Feed />}></Route>
          <Route path="/addinput" element={<AddInput />}></Route>
          <Route path="/people" element={<People />}></Route>
          <Route path="/trending" element={<Trending />}></Route>
          <Route path="/upelections" element={<UPelections />}></Route>
          <Route path="/videos" element={<Video />}></Route>
          <Route path="/polls" element={<Polls />}></Route>
          <Route path="/cricket" element={<Cricket />}></Route>
          <Route path="/following" element={<Following />}></Route>
          <Route path="/new" element={<News />}></Route>
          <Route path="/exclusive" element={<Exclusive />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/explore" element={<Explore />}></Route>
          <Route path="/language" element={<Language />}></Route>
          <Route path="/notification" element={<Notification />}></Route>
          <Route path="/createkoo" element={<CreateKoo />}></Route>
          <Route path="/comments" element={<Comment />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/resource" element={<Resource />}></Route>
          <Route path="/faq" element={<Faq />}></Route>
          <Route path="/editprofile" element={<Editprofile />}></Route>
          <Route path="/sitemap" element={<Sitemap />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
