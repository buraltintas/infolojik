import classes from "./References.module.css";
import clk from "./c2.jpeg";
import carrefoursa from "./carrefoursa-logo.png";
import daikin from "./daikin-logo.png";
import epias from "./images-2.png";
import macfit from "./macfit-42maslak.jpeg";
import teb from "./teblogo.png";
import toyzzshop from "./toyzz_shop_logo.png";
import turkcell from "./turkcell-logo.jpeg";
import turktelekom from "./turktelekom.jpeg";
import zain from "./zain-group-logo.png";

const References = () => {
  return (
    <section className={classes.references}>
      <div className={classes.typingHeading}>Referanslarımız </div>
      <div className={classes.container}>
        <div className={classes.reference}>
          <div className={classes.img1}></div>
          <div className={classes.img2}></div>
        </div>
        <div className={classes.reference}>
          <div className={classes.img3}></div>
          <div className={classes.img4}></div>
        </div>
        <div className={classes.reference}>
          <div className={classes.img5}></div>
          <div className={classes.img6}></div>
        </div>
        <div className={classes.reference}>
          <div className={classes.img7}></div>
          <div className={classes.img8}></div>
        </div>
        <div className={classes.reference}>
          <div className={classes.img9}></div>
          <div className={classes.img10}></div>
        </div>
      </div>
    </section>
  );
};

export default References;
