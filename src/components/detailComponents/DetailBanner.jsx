import React from "react";
import styles from "./Details.module.css";

const DetailBanner = ({ image, title }) => {
  return (
    <div
      className={styles.detailBanner}
      style={{
        backgroundSize: "cover",
        background: `linear-gradient(190deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${image})`,
      }}
    >
      <div className={styles.detailText}>
        <h1>{title}</h1>
      </div>
    </div>
  );
};

export default DetailBanner;
