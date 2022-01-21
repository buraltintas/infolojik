import classes from "./Solutions.module.css";

const Solutions = () => {
  return (
    <section className={classes.solutions}>
      <div className={classes.aboutText}>
        <h2 className={classes.aboutUs}>
          <div className={classes.dash}>&nbsp;</div>{" "}
          <div className={classes.aboutUsText}>
            <h3>[</h3>
            <h4>&nbsp; SİZE ÖZEL &nbsp;</h4>
            <h3>]</h3>
          </div>
        </h2>
        <h1>Çözümlerimiz</h1>
      </div>
      <div className={classes.cards}>
        <div className={`${classes.card} ${classes.card1}`}>
          <div className={classes.cardTop}>
            <h1 className={classes.cardHeader}>Veri Ambarı</h1>
          </div>

          <p className={classes.cardText}>
            Kurumların verilerinin raporlama ihtiyacına göre kaynak sistemlerden
            alınıp işlendiği ve tarihsel olarak depolandığı veritabanı
            çözümüdür.
          </p>
        </div>
        <div className={`${classes.card} ${classes.card2}`}>
          <div className={classes.cardTop}>
            <h1 className={classes.cardHeader}>İş Zekası</h1>
          </div>

          <p className={classes.cardText}>
            Kurumların ihtiyaç duyduğu operasyonel, yasal ve analitik
            raporlamaların altyapısının kurulması ve yönetilmesini çözümüdür.
          </p>
        </div>
        <div className={`${classes.card} ${classes.card3}`}>
          <div className={classes.cardTop}>
            <h1 className={classes.cardHeader}>Veri Tabanı</h1>
          </div>

          <p className={classes.cardText}>
            Veritabanı sistemlerinin bakım ve destek hizmetlerinin yanında
            felaket senaryolarına karşı da şirketlerin veritabanlarını
            hazırlıyoruz.
          </p>
        </div>
        <div className={`${classes.card} ${classes.card4}`}>
          <div className={classes.cardTop}>
            <h1 className={classes.cardHeader}>Açık Kaynak</h1>
          </div>

          <p className={classes.cardText}>
            Kurumların veri ambarı ve iş zekası süreçlerinde lisans ücreti
            olmadan verilerini tarihsel olarak depolandığı ve raporlandığı
            çözümdür.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
