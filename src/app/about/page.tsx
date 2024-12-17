"use client";
import Navbar from "../components/navbar/Navbar";
import styles from "./page.module.css";
import { Londrina_Outline } from "next/font/google";

const londrinaOutline = Londrina_Outline({
  subsets: ["latin"],
  weight: "400",
});

const page = () => {
  return (
    <div>
      <Navbar />
      <div className={styles.mainContent}>
        <p className={`${styles.header} ${londrinaOutline.className}`}>about</p>
        <div className={styles.divider} />
        <p>
          Hey, my name is Lior Ben Moha and I use LBM as my nickname across
          social medias. I&apos;m a 8200 alumni, CS graduate & Junior Software
          Engineer from Israel. I&apos;m also passionate about Surfing and make
          Travel across the globe and I&apos;m always curious to learn more when
          it comes to new technologies and creative coding.
        </p>
        <div className={styles.resumeRow}>
          <button className={`${styles.resume} ${londrinaOutline.className}`}>
            <span className={styles.arrowDown}>&darr;</span>
            <a
              href="about/lior_ben_moha_resume"
              target="_blank"
              rel="noopener noreferrer"
            >
              resume
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
