import classes from "./Duty.module.css";
import photo1 from "./photo1.jpeg";
import photo2 from "./photo2.jpeg";
import photo3 from "./photo3.jpeg";
import photo4 from "./photo4.jpeg";
import Aos from "aos";
import "aos/dist/aos.css";

const Duty = () => {
  return (
    <section className={classes.duty}>
      <div className={classes.typingHeading}>Hizmetlerimiz</div>
      <div className={classes.services}>
        <div data-aos="zoom-in" className={classes.card}>
          <div className={classes.cardTop}>
            <div className={`${classes.img} ${classes.img1}`}></div>
            <div>
              <h1 className={classes.headingText}>Danışmanlık</h1>
            </div>
          </div>
          <div className={classes.cardBottom}>
            <p>
              Müşterilerimizin projelerinde görevlendirilmek üzere alanında
              uzman kadromuz ile verdiğimiz hizmettir.
            </p>
          </div>
        </div>
        <div data-aos="zoom-in" className={classes.card}>
          <div className={classes.cardTop}>
            <div className={`${classes.img} ${classes.img2}`}></div>
            <div>
              <h1 className={classes.headingText}>Dış Kaynak</h1>
            </div>
          </div>
          <div className={classes.cardBottom}>
            <p>
              Müşterilerimizin kendi ekipleri içinde görevlendireceği alanında
              uzman kadromuz ile verdiğimiz hizmettir.
            </p>
          </div>
        </div>
        <div data-aos="zoom-in" className={classes.card}>
          <div className={classes.cardTop}>
            <div className={`${classes.img} ${classes.img3}`}></div>
            <div>
              <h1 className={classes.headingText}>Eğitim</h1>
            </div>
          </div>
          <div className={classes.cardBottom}>
            <p>
              Müşterilerimizin iş zekası, veri ambarı ve büyük veri alanlarında
              uygulamalı olarak sunduğumuz eğitim hizmetidir.
            </p>
          </div>
        </div>
        <div data-aos="zoom-in" className={classes.card}>
          <div className={classes.cardTop}>
            <div className={`${classes.img} ${classes.img4}`}></div>
            <div>
              <h1 className={classes.headingText}>Bakım & Destek</h1>
            </div>
          </div>
          <div className={classes.cardBottom}>
            <p>
              Müşterilerimizin tamamlanan projeleri sonrasında ihtiyaç duyulacak
              teknik veya operasyonel destek hizmetimizdir.
            </p>
          </div>
        </div>

        {/* <div className={classes.card}>
          <h2 className={classes.cardHeading}>Danışmanlık</h2>
          <p className={classes.cardText}>
            Müşterilerimizin projelerinde görevlendirilmek üzere alanında uzman
            kadromuz ile verdiğimiz hizmettir.
          </p>
        </div>
        <div className={`${classes.card} ${classes.card2}`}>
          <h2 className={classes.cardHeading}>Dış Kaynak</h2>
          <p className={classes.cardText}>
            Müşterilerimizin kendi ekipleri içinde görevlendireceği alanında
            uzman kadromuz ile verdiğimiz hizmettir.
          </p>
        </div>
        <div className={`${classes.card} ${classes.card3}`}>
          <h2 className={classes.cardHeading}>Eğitim</h2>
          <p className={classes.cardText}>
            Müşterilerimizin iş zekası, veri ambarı ve büyük veri alanlarında
            uygulamalı olarak sunduğumuz eğitim hizmetidir.
          </p>
        </div>
        <div className={`${classes.card} ${classes.card4}`}>
          <h2 className={classes.cardHeading}>Bakım & Destek</h2>
          <p className={classes.cardText}>
            Müşterilerimizin tamamlanan projeleri sonrasında ihtiyaç duyulacak
            teknik veya operasyonel destek hizmetimizdir.
          </p>
        </div> */}
      </div>
    </section>
  );
};

export default Duty;
