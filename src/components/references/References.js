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
      <div>
        <div className={classes.aboutText}>
          <h2 className={classes.aboutUs}>
            <div className={classes.dash}>&nbsp;</div>{" "}
            <div className={classes.aboutUsText}>
              <h3>[</h3>
              <h4>&nbsp; BAŞARI HİKAYELERİMİZ &nbsp;</h4>
              <h3>]</h3>
            </div>
          </h2>
          <h1>Referanslarımız</h1>
        </div>
        <div className={classes.grid}>
          <div className={classes.logoContainer}>
            <img src={daikin} alt="logo of daikin" />
          </div>
          <div className={classes.logoContainer}>
            <img src={macfit} alt="logo of macfit" />
          </div>
          <div className={classes.logoContainer}>
            <img src={carrefoursa} alt="logo of carrefoursa" />
          </div>
          <div className={classes.logoContainer}>
            <img src={epias} alt="logo of epias" />
          </div>
          <div className={classes.logoContainer}>
            <img src={toyzzshop} alt="logo of toyzz shop" />
          </div>
          <div className={classes.logoContainer}>
            <img src={zain} alt="logo of zain" />
          </div>
          <div className={classes.logoContainer}>
            <img src={turkcell} alt="logo of turkcell" />
          </div>
          <div className={classes.logoContainer}>
            <img src={teb} alt="logo of teb" />
          </div>
          <div className={classes.logoContainer}>
            <img src={clk} alt="logo of clk enerji" />
          </div>
          <div className={classes.logoContainer}>
            <img src={turktelekom} alt="logo of turk telekom" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default References;
