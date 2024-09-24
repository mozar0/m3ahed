import classes from "./newsPageIcon.module.css";
import { Link } from "react-router-dom";

const NewsPageIcon = ({ imageBackground, headLine, path }) => {
  return (
    <>
      <div className={classes.newasIconCard}>
        <div className={classes.backOverlay}>
          <img src={imageBackground} />
          <p> {headLine} </p>
          <CustomLink className={classes.button} to={path}>
            <span>المزيد</span>
          </CustomLink>
        </div>
      </div>
    </>
  );
};

function CustomLink({ to, children, ...props }) {
  return (
    <Link to={to} {...props}>
      {children}
    </Link>
  );
}

export default NewsPageIcon;
