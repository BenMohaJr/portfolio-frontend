import React from "react";
import styles from "./MainText.module.css";
import { Londrina_Outline, Space_Mono, Amatic_SC } from "next/font/google";
import Link from "next/link";

const londrinaOutline = Londrina_Outline({
  subsets: ["latin"],
  weight: "400",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: "400",
});

const amaticSc = Amatic_SC({
  subsets: ["latin"],
  weight: "400",
});

const MainText = () => {
  return (
    <div className={styles.mainContent}>
      <p className={`${styles.mainText} ${londrinaOutline.className}`}>
        hey, I&apos;m <span className={styles.name}>lior ben moha</span> <br />
        but you can call me <span className={styles.name}>lbm</span>
      </p>
      <p className={`${styles.subText} ${spaceMono.className}`}>
        I&apos;m a 8200 graduate, cs graduate <br />
        fullstack & with alot of ai passion
      </p>
      <div className={`${styles.bottomContent} ${amaticSc.className}`}>
        <div>
          <button>&rarr; see my projects</button>
        </div>
        <div>
          <Link href="/about">&rarr; more about me</Link>
        </div>
      </div>
    </div>
  );
};

export default MainText;
