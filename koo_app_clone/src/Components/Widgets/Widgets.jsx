import { Link } from "react-router-dom";
import "./Widgets.css";
import HashTags from "./HashTags";

function Widgets({ trendingResults, followResults }) {
  return (
    <div className="hidden lg:inline ml-8 xl:w-[370px] py-1 space-y-5 sticky">
      <div id="tabcont" className=" space-y-2.5 mt-4 mb-2.5 xl:ml-4 fixed">
        {/* workingPart */}
        <div className="full-div">
          {/* search box */}
          <div className="hash-srch-container">
            <div className="hash-srch-wrap">
              <input type="text" placeholder="Search" />
              <div className="blank-srch"></div>
            </div>
          </div>

          {/* trending hastags */}
          <div className="hash-container">
            <div className="hash-wrap">
              <div className="hash-title-container">
                <h5 className="hash-title">
                  {" "}
                  <b>
                    {" "}
                    <b>Trending Hashtags </b>{" "}
                  </b>{" "}
                </h5>
              </div>

              <div className="hash-containt-container">
                <HashTags />
              </div>
            </div>
          </div>
          {/* About  press contact*/}

          <div className="hash-bottom">
            <Link to="/about">
              <p>About</p>
            </Link>

            <p>Press</p>
            <Link to="/contact">
              <p>Contact</p>
            </Link>
            <Link to="/resource">
              <p>Resource Center</p>
            </Link>
            <Link to="/sitemap"><p>Sitemap</p></Link>

            <Link to="/faq">
              <p>FAQs</p>
            </Link>
          </div>
          {/* hashtag done */}
        </div>
      </div>
    </div>
  );
}

export default Widgets;
