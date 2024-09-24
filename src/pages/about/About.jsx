import classesAbout from "./about.module.css";

const About = () => {
  return (
    <>
      <div className={classesAbout.aboutUsInformationContainer}>
        <div className={classesAbout.aboutUsCard}>
          <h1>الرؤية</h1>
          <p></p>
        </div>
        <div className={classesAbout.aboutUsCard}>
        <h1>الرسالة</h1>
        <p></p>
        </div>
        <div className={classesAbout.aboutUsCard}>
        <h1>القيم</h1>
        <p></p>
        </div>
        <div className={classesAbout.aboutUsCard}>
        <h1>الأهداف</h1>
        <p></p>
        </div>
        <div className={classesAbout.aboutUsCard}>
        <h1>مجلس الإدارة</h1>
        <p></p>
        </div>
        <div className={classesAbout.aboutUsCard}>
        <h1>تعريف بالمكتب</h1>
        <p></p>
        </div>
      </div>
    </>
  );
};

export default About;
