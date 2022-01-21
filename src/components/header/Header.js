import logo from "../../logo.png";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logoBox}>
        <img src={logo} alt="Logo" className={classes.logo} />
      </div>
      <div className={classes.textBox}>
        <h1 className={classes.headingPrimary}>
          <div className={classes.chart}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="192"
              height="192"
              fill="rgba(110, 194, 227, 0.74)"
              viewBox="0 0 256 256"
            >
              <rect width="256" height="256" fill="none"></rect>
              <polyline
                points="224 208 32 208 32 48"
                fill="none"
                stroke="rgba(110, 194, 227)"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
              ></polyline>
              <polyline
                points="208 64 128 144 96 112 32 176"
                fill="none"
                stroke="rgba(110, 194, 227)"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
              ></polyline>
              <polyline
                points="208 104 208 64 168 64"
                fill="none"
                stroke="rgba(110, 194, 227)"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
              ></polyline>
            </svg>
          </div>

          <p className={classes.headingPrimaryMain}>
            Gelin şirketinize değer katalım
          </p>
          <p className={classes.headingPrimarySub}>
            Verinizi <span className={classes.circle}>bizimle</span>{" "}
            değerlendirin
          </p>
        </h1>

        <button className={classes.button}>Keşfedin</button>
      </div>
    </header>
  );
};

export default Header;
