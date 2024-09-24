import NewsCard from "../../pages/news/newsCard/NewsCard";
import classes from "./lastNews.module.css";
import classes1 from "../../pages/news/news.module.css";
import { Link } from "react-router-dom";
const LastNews = () => {
  return (
    <section className={classes.newsSectionHome}>
      <p className={classes.section3Title}>آخر الأخبار</p>
      <div className={classes1.cards}>
        <NewsCard
          imagPath="../../../public/download (2).jfif"
          auther=" اسم الكاتب"
          title="عنوان الخبر"
          date="12/12/2021"
          id={1}
          words="
               لوريم إيبسوم دولور يجلس أميت لوريم إيبسوم دولور يجلس أميت لوريم
               إيبسوم دولور يجلس أميت لوريم إيبسوم دولور يجلس أميت لوريم إيبسوم
               دولور يجلس أميت لوريم إيبسوم دولور يجلس أميت لوريم إيبسوم دولور
               يجلس أميت..."
        />
      </div>
      {/* link to the news page */}

      <CustomLink className={classes.btn} to="/news">
        <p>المزيد</p>
      </CustomLink>
    </section>
  );
};

function CustomLink({ to, children, ...props }) {
  return (
    <Link to={to} {...props}>
      {children}
    </Link>
  );
}

export default LastNews;
