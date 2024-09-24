import classes from "./news.module.css";
import NewsPageIcon from "./newsPageIcon/NewsPageIcon";

const News = () => {
  return (
    <>
      <div className={classes.newasIcon}>
        <NewsPageIcon
        className={classes.newsIconCard}
          headLine="أخبار مكتب معاهد"
          path="/news/officeNews"
          imageBackground="../../../public/7489234.jpg"
        />

        <NewsPageIcon
          headLine="أخبار الكيانات القرآنية"
          path="/news/quranOfficeNews"
          imageBackground="../../../public/7489234.jpg"
        />

        <NewsPageIcon
          headLine="أجمل اللحظات"
          path="/news/bestMoment"
          imageBackground="../../../public/7489234.jpg"
        />
      </div>
    </>
  );
};

export default News;
