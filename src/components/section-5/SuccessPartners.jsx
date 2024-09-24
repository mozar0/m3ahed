import classes from "./successPartners.module.css";
import CountUp from "react-countup";
import LogoPlaceholder from "../../../public/logo.png";

const SuccessParteners = () => {
  return (
    <>
      <section className={classes.section5}>
        <p className={classes.section5Title}> شركاء النجاح</p>
        <div className={classes.partner}>
          <div className={classes.partnerCardContainer}>
            <div className={classes.partnerCard}>
              <img className={classes.partnerImage} src={LogoPlaceholder} />
              <p className={classes.partnerName}> الجمعية الخيرية لتحفيظ القرآن الكريم بمحافظة الجبيل
              </p>
            </div>

            <div className={classes.partnerCard}>
              <img className={classes.partnerImage} src={LogoPlaceholder} />
              <p className={classes.partnerName}> مركز معاهد للاستشارات التربوية والتعليمية</p>
            </div>
          </div>
        </div>

        <div className={classes.statistecs}>
          <div className={classes.panner}>
            <p className={classes.title}>الأحصائات </p>
            <div className={classes.contentSection5}>
              <div className={classes.box}>
                <img src='../../../public/diplomatPhoto.png' />
                <CountUp end={2} duration={10} />
                <p> الدبلومات الأكاديمية  </p>
              </div>
              <div className={classes.box}>
                <img src='../../../public/mosiPhoto.png' />
                <CountUp end={18} duration={10} />
                <p> الإصدارات والمنتجات  </p>
              </div>
              <div className={classes.box}>
                <img src='../../../public/productsPhoto.png' />
                <CountUp end={3} duration={10} />
                <p>  دورات جائزة الموسى </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SuccessParteners;
