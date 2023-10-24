import "./scss/App.scss";
import "./scss/styleOfcompondnts/Dark-Mode/dark-mode.scss";
import "./scss/styleOfcompondnts/LeftScss/sidebarLeft.scss";
import square from "./images/square.svg";
import download from "./images/icon-download.svg";
import draft1 from "./images/draft1.svg";
import draft2 from "./images/draft2.svg";
import draft3 from "./images/draft3.svg";
import draft4 from "./images/draft4.svg";
import draft7 from "./images/draft7.svg";
import arrow from "./images/arrow.svg";
import { useEffect, useState } from "react";
import {
  Buttondiv,
  ExtraSkills,
  Languageinfo,
  Skills,
  LeftsideHeader,
  Personalinfo,
  Socialicons,
} from "./components/leftsideBar";
import { About, Education, Myservices, Projects } from "./components/middle";
import { Icons } from "./components/rightsideBar";

function App() {
  const [darkMode, setdarkMode] = useState(() => {
    const storedDarkMode = localStorage.getItem("darkMode");
    return storedDarkMode ? JSON.parse(storedDarkMode) : "false";
  });
  const [userInfo, setUserInfo] = useState(null);
  const [collapsed, setCollapsed] = useState(false);
  function triggerSideBar() {
    setCollapsed(!collapsed);
  }
  function setVars(data) {
    setUserInfo(data);
  }

  const toggledarkMode = () => {
    setdarkMode(!darkMode);
    localStorage.setItem("darkMode", JSON.stringify(!darkMode));
  };

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/miro888/staticFiles/main/infoProfile.json"
    )
      .then((res) => {
        return res.json();
      })
      .then((response) => {
        setVars(response);
      });
    if (window.innerWidth < 1171) {
      setCollapsed(true);
    }
  }, []);
  return (
    <div className={`app ${darkMode ? "dark-mode" : "light-mode"}`}>
      {userInfo !== null ? (
        <>
          <div
            className="sidebarLeft"
            style={
              collapsed === true ? { marginLeft: `-310px` } : { marginLeft: 0 }
            }
          >
            <LeftsideHeader
              img={userInfo.userImage}
              name={userInfo.firstName}
              lastName={userInfo.lastName}
              freelanceStatus={userInfo.freelance}
            />
            <Socialicons icon={userInfo.social} />
            <Personalinfo
              age={userInfo.age}
              residence={userInfo.residence}
              jobType={userInfo.freelance}
              location={userInfo.address}
              work={userInfo.job}
            />
            <Languageinfo langs={userInfo.languages} />
            <Skills langs={userInfo.skills} />
            <ExtraSkills skills={userInfo.extraSkills} img={square} />
            <Buttondiv cvUrl={userInfo.resumeURL} img={download} />
            <div
              className="arrow"
              onClick={triggerSideBar}
              style={
                !collapsed
                  ? { transform: `rotate(180deg) translateX(25px)` }
                  : { transform: `rotate(0)` }
              }
            >
              <svg
                fill={darkMode ? "#ffb400" : "#000"}
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                width="20px"
                height="20px"
                viewBox="0 0 351.409 351.409"
              >
                <g>
                  <path
                    d="M256.688,141.444c-18.36-21.42-37.944-40.392-53.244-63.648c-12.853-19.584-25.704-39.168-42.228-56.304
                                        c-10.404-11.016-48.348-36.72-56.916-9.18c-6.732,22.644,12.24,52.02,22.032,70.992c12.24,23.256,27.54,44.676,42.228,66.096
                                        c-25.092,3.672-49.572,6.732-74.664,7.956c0-1.836-0.612-3.06-2.448-4.284C78.596,140.22,64.52,127.98,52.28,114.516
                                        c-2.448-3.06-6.732-2.448-9.792-1.224c-7.956,3.672-14.076,9.792-20.196,15.912c-2.448,2.448-3.672,6.732-1.224,9.792
                                        c6.732,9.18,14.076,18.36,21.42,26.928c2.448,3.06,4.896,5.508,7.956,7.956c-12.852,9.792-25.092,23.256-35.496,34.884
                                        c-2.448,3.061-3.672,8.568,0,11.629c9.792,7.955,20.196,14.075,31.212,20.195c3.06,1.836,7.344,1.836,9.792-1.224
                                        c7.956-9.18,16.524-17.136,25.092-25.704c3.06-3.06,6.12-6.12,8.568-9.18c26.316,2.447,53.244,4.283,79.56,6.731
                                        c-7.344,11.017-13.464,22.032-20.196,33.66c-11.628,21.42-26.316,41.004-37.332,62.424c-12.24,23.256-3.06,45.288,25.092,44.064
                                        c30.6-1.225,55.691-34.272,72.216-55.692c12.24-15.912,23.256-33.048,33.66-50.184c5.508-9.181,12.852-18.973,17.748-29.376
                                        c26.928-0.612,76.5,5.508,78.336-29.988C341.145,145.728,287.9,142.056,256.688,141.444z M132.452,310.968
                                        c-0.612,1.225-1.224,3.061-1.836,4.896c-1.224,0.612-1.836,1.836-2.448,2.448c1.224-3.672,2.448-7.345,4.284-11.017
                                        C132.452,307.908,132.452,309.132,132.452,310.968z"
                  />
                </g>
              </svg>
            </div>
          </div>
          <div className="middle">
            <About
              name={userInfo.firstName}
              lastName={userInfo.lastName}
              icon={arrow}
              img={userInfo.userImage1}
              aboutUser={userInfo.aboutUser}
              shapes={userInfo.shapes}
            />
            <Myservices
              myservice={userInfo.myServiceDescription}
              todoservices={userInfo.services}
            />
            <Education study={userInfo.education} />
            <Projects cards={userInfo.projects} />
          </div>
          <div className="sideBarRight">
            <div className="wrapper">
             
              <Icons
                toggle={toggledarkMode}
                icon_1={draft1}
                icon_2={draft2}
                icon_3={draft3}
                icon_4={draft4}
                icon_7={draft7}
              />
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
}
export default App;
