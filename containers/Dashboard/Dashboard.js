import {
  faBahai,
  faCreditCard,
  faHome,
  faImages,
  faNewspaper,
  faTasks,
  faUsers,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { TOGGLE_MENU } from "../../redux/type";
import DashboardWrapper from "./DashboardWrapper";

const menus = [
  { id: "home", to: "/", title: "Home", icon: faHome },
  { id: "users", to: "/users", title: "Users", icon: faUsers },
  { id: "todos", to: "/todos", title: "Todos", icon: faTasks },
  { id: "albums", to: "/albums", title: "Albums", icon: faVideo },
  { id: "photos", to: "/photos", title: "Photos", icon: faImages },
  { id: "posts", to: "/posts", title: "Posts", icon: faNewspaper },
  { id: "cards", to: "/cards", title: "Cards", icon: faCreditCard },
];

const Dashboard = ({ children, menu }) => {
  const dispatch = useDispatch();

  const show = useSelector((state) => state.isSidebarShow);

  return (
    <DashboardWrapper>
      <div className={`sidebar ${(show && "show") || ""}`}>
        <div className="d-flex justify-content-between">
          <img
            src="https://colorlib.com/polygon/cooladmin/images/icon/logo.png"
            alt=""
          />
          <div
            className="toggle"
            onClick={() => TOGGLE_MENU(dispatch)}
            variant="contained"
            disableElevation
          >
            <FontAwesomeIcon icon={faBahai} />
          </div>
        </div>
        <h2 className="text-white mt-3">Sidebar</h2>
        <hr className="bg-light" />
        <List className="mt-5" component="nav">
          {menus.map((v, i) => (
            <li key={v.to}>
              <Slide delay={i * 30}>
                <Link href={`${v.to}`}>
                  <a className={`${menu === v.id ? "active" : ""}`}>
                    <ListItem button>
                      <FontAwesomeIcon icon={v.icon} className="me-2" />{" "}
                      {v.title}
                    </ListItem>
                  </a>
                </Link>
              </Slide>
            </li>
          ))}
        </List>
      </div>
      <div className="rightside">
        <header className="d-flex justify-content-between border-bottom">
          <h3 className="md-title d-flex justify-content-center align-items-center d-none d-md-block ps-2">
            Dashboard
          </h3>
          <div className="text-end d-flex justify-content-center align-items-center">
            <input
              type="text"
              className="border-0 rounded border-bottom d-none d-md-block mt-2 py-2"
              placeholder="Search..."
            />
            <div className="others me-2">
              <MdCall />
            </div>
            <div className="others">
              <FontAwesomeIcon icon={faUserFriends} />
            </div>
            <a href="#" className="user">
              <img
                src="https://colorlib.com/polygon/cooladmin/images/icon/avatar-01.jpg"
                alt=""
              />
            </a>
            <h5 className="text-muted me-1 ps-2 d-none d-md-block">John Doe</h5>
          </div>
        </header>
        <div className="content">{children}</div>
      </div>
    </DashboardWrapper>
  );
};

export default Dashboard;
