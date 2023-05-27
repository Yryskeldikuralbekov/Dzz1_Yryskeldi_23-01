import { NavLink, Outlet } from "react-router-dom";

const activeMenu = ({ isActive }) => (isActive ? "activeMenu" : "");
const Layout = () => {
  return (
    <>
      <nav>
        <div className="menu">
          <div className="home">
            {" "}
            <NavLink to={"/"} className={activeMenu}>
              Home
            </NavLink>{" "}
          </div>
          <div className="about">
            {" "}
            <NavLink to={"/createPost"} className={activeMenu}>
              CreatePost
            </NavLink>{" "}
          </div>
          <div className="posts">
            {" "}
            <NavLink to={"/posts"} className={activeMenu}>
              Posts
            </NavLink>{" "}
          </div>
        </div>
      </nav>

      <Outlet />
      <footer>
        <div>
          <ul>
            <li>
              <a>Geeks</a>
            </li>
            <li>
              <a>О нас</a>{" "}
            </li>
            <li>
              <a>Контакты</a>
            </li>
            <li>
              <a>Отзывы</a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};
export default Layout;
