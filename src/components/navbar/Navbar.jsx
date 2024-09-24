import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { useState, useEffect } from "react";
import "./navbar.css";
import "boxicons";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const [stickyClass, setStickyClass] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);
    return () => window.removeEventListener("scroll", stickNavbar);
  }, []);
  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      // window height changed for the demo
      windowHeight > 150 ? setStickyClass("sticky-nav") : setStickyClass("");
    }
  };
  return (
    <>
      <nav className={`nav ${stickyClass}`}>
        <Link to="/" className="site-title">
          <img src="../../../public/logo.png" />
        </Link>
        <ul className={showMenu ? "open" : ""}>
          <CustomLink
            onClick={() => {
              setShowMenu(!showMenu);
            }}
            to="/pricing"
          >
            <span> خدمات المركز</span>
          </CustomLink>
          <CustomLink
            onClick={() => {
              setShowMenu(!showMenu);
            }}
            to="/about"
          >
            <span> من نحن</span>
          </CustomLink>
          <CustomLink
            onClick={() => {
              setShowMenu(!showMenu);
            }}
            to="/news"
          >
            <span> الاخبار</span>
          </CustomLink>
          <CustomLink
            onClick={() => {
              setShowMenu(!showMenu);
            }}
            to="/librarie"
          >
            <span>المكتبة</span>
          </CustomLink>
          <CustomLink
            onClick={() => {
              setShowMenu(!showMenu);
            }}
            to="/products"
          >
            <span> منتجاتنا و اصداراتنا</span>
          </CustomLink>
        </ul>

        <i
          className="bx bx-menu"
          onClick={() => {
            setShowMenu(!showMenu);
          }}
        ></i>
      </nav>
    </>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
