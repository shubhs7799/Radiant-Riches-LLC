import styles from "./Body.module.scss";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { CiCircleInfo } from "react-icons/ci";
import { IoChevronDownSharp } from "react-icons/io5";
import { FiChevronRight } from "react-icons/fi";
import Card from "../Card/Card";

const Body = () => {
  return (
    <>
      <div className={styles.body}>
        <div className={styles.heading}>
          <h1>Best Website builders in the US</h1>
          <div className={styles.line}></div>
        </div>
        <div className={styles.moreDetails}>
          <span className={styles.lastUpdate}>
            <IoCheckmarkCircleOutline className={styles.icon} /> Last Updated -
            February 22,2020
          </span>

          <span className={styles.disclosure}>
            <CiCircleInfo className={styles.icon} /> Advertising Disclosure
          </span>
          <span className={styles.relavant}>
            Top Relevant <IoChevronDownSharp className={styles.icon} />
          </span>
        </div>
        <div className={styles.line}></div>

        <div className={styles.buttonContainer}>
          <button className={styles.button}>Tools</button>
          <button className={styles.button}>AWS Builder</button>
          <button className={styles.button}>Start Built</button>
          <button className={styles.button}>Built Supplier</button>
          <button className={styles.button}>Tooling</button>
          <button className={styles.button}>BlueHosting</button>
        </div>
        <div className={styles.path}>
          <span>Home</span>
          <FiChevronRight className={styles.pathIcon}/>
          <span>Hosting for all</span>
          <FiChevronRight className={styles.pathIcon}/>
          <span>Hosting</span>
          <FiChevronRight className={styles.pathIcon}/>
          <span>Hosting 6</span>
          <FiChevronRight className={styles.pathIcon}/>
          <span>Hosting 5</span>
        </div>
        <Card/>
      </div>
     
    </>
  );
};

export default Body;
