import classes from "./Partners.module.css";
import kocDigital from "./logo.png";
import microsoft from "./microsoft.png";

const Partners = () => {
  return (
    <section className={classes.partners}>
      <div className={classes.partnersContainer}>
        <div className={classes.aboutText}>
          <h2 className={classes.aboutUs}>
            <div className={classes.dash}>&nbsp;</div>{" "}
            <div className={classes.aboutUsText}>
              <h3>[</h3>
              <h4>&nbsp; BİRLİKTE ÇALIŞTIĞIMIZ &nbsp;</h4>
              <h3>]</h3>
            </div>
          </h2>
          <h1>Çözüm Ortaklarımız</h1>
        </div>
        <div className={classes.container}>
          <div className={classes.logos}>
            <img
              src={microsoft}
              alt="Logo of Koc Digital"
              className={classes.logo1}
            />
            <img
              src={kocDigital}
              alt="Logo of Microsoft"
              className={classes.logo2}
            />
          </div>
          <div className={classes.text}>
            <p>
              <strong>infolojik</strong> olarak yakın zamanda Microsoft partneri
              olduk ve bu alanda da aynı vizyonla hizmet vermeye başladık.
            </p>

            <p>
              Aynı zamanda Koç Digital ile alt yüklenici olarak çeşitli
              projelerde yakın ilişki içerisinde çalışıyoruz.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
