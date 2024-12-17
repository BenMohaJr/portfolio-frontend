import React from "react";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import styles from "./Navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className={styles.containerGrid}>
      {/* Picture on the left */}
      <div className={styles.headerLeft}>
        <Link href="/">
          <Image
            priority
            src="/LBM.svg"
            alt="LBM logo"
            width={200}
            height={30}
          />
        </Link>
      </div>

      {/* Buttons and icons on the right */}
      <div className={styles.headerRight}>
        <button>EN</button>
        <button>
          <LightModeOutlinedIcon fontSize="large" />
        </button>
        <button>
          <MenuIcon sx={{ fontSize: 48 }} />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
