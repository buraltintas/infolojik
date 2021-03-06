import { useState } from "react";
import classes from "./About.module.css";
import photo1 from "./photo1.jpeg";
import photo2 from "./photo2.jpeg";
import photo3 from "./photo3.jpeg";

const About = (props) => {
  const [isTyping, setIsTyping] = useState(false);

  return (
    <section className={classes.about}>
      <div className={classes.aboutText}>
        <div className={classes.typingHeading}>Hakkımızda </div>
        <p>
          <strong>infolojik</strong>, 2017 yılında Veri Ambarı, İş Zekası ve
          Büyük Veri projelerini gerçekleştirmek üzere kurulmuş bilgi
          teknolojileri ve ar-ge projeleri geliştiren bir teknoloji şirketidir.
        </p>
        <p>
          Hedefimiz müşteri memnuniyetini en üstte tutarak, verinin kaynağından
          görselleştirme ve raporlamasına kadar kesintisiz, verimli, doğru,
          zamanında ve hızlı çözümler yaratmaktadır.
        </p>
        <button
          onClick={() => props.scrollSolutions()}
          className={classes.button}
        >
          Neler Yapıyoruz?
        </button>
      </div>
      <div className={classes.image}>
        <img
          src={photo1}
          alt="chart"
          className={`${classes.photo} ${classes.photo1}`}
        />
        <img
          src={photo3}
          alt="laptop"
          className={`${classes.photo} ${classes.photo2}`}
        />
        <img
          src={photo2}
          alt="desks in office"
          className={`${classes.photo} ${classes.photo3}`}
        />
      </div>
    </section>
  );
};

export default About;
