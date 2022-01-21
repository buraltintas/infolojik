import classes from "./Duty.module.css";
import photo1 from "./photo1.jpeg";
import photo2 from "./photo2.jpeg";
import photo3 from "./photo3.jpeg";
import photo4 from "./photo4.jpeg";

const Duty = () => {
  return (
    <section className={classes.duty}>
      <div className={classes.aboutText}>
        <h2 className={classes.aboutUs}>
          <div className={classes.dash}>&nbsp;</div>{" "}
          <div className={classes.aboutUsText}>
            <h3>[</h3>
            <h4>&nbsp; UZMAN KADROMUZLA &nbsp;</h4>
            <h3>]</h3>
          </div>
        </h2>
        <h1>Hizmetlerimiz</h1>
      </div>
      <div className={classes.services}>
        <div className={`${classes.container} ${classes.left1}`}>
          <div className={classes.imgLeft}>
            <img src={photo1} alt="" className={classes.img} />
          </div>
          <div className={classes.textRight}>
            <h1>Danışmanlık</h1>
            <p>
              Müşterilerimizin projelerinde görevlendirilmek üzere alanında
              uzman kadromuz ile verdiğimiz hizmettir.
            </p>
          </div>
        </div>
        <div className={`${classes.container} ${classes.right1}`}>
          <div className={classes.textLeft}>
            <h1>Dış Kaynak</h1>
            <p>
              Müşterilerimizin kendi ekipleri içinde görevlendireceği alanında
              uzman kadromuz ile verdiğimiz hizmettir.
            </p>
          </div>
          <div className={classes.imgRight}>
            <img src={photo2} alt="" className={classes.img} />
          </div>
        </div>
        <div className={`${classes.container} ${classes.left2}`}>
          <div className={classes.imgLeft}>
            <img src={photo1} alt="" className={classes.img} />
          </div>
          <div className={classes.textRight2}>
            <h1>Eğitim</h1>
            <p>
              Müşterilerimizin iş zekası, veri ambarı ve büyük veri alanlarında
              uygulamalı olarak sunduğumuz eğitim hizmetidir.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Duty;
