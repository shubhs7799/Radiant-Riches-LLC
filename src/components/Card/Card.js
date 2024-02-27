import React from "react";
import styles from "./Card.module.scss";
import builderImage from "../../utils/Builder.png";
import { IoChevronDownSharp } from "react-icons/io5";
import { MdOutlineStar } from "react-icons/md";
import { IoMdStarOutline } from "react-icons/io";
import { MdOutlineStarHalf } from "react-icons/md";
import { TfiCup } from "react-icons/tfi";
import cardData from "../../utils/cardData";
import { FiChevronRight } from "react-icons/fi";
import { IoCheckmarkCircleOutline } from "react-icons/io5";

const Card = () => {
  return (
    <>
      {cardData.map((card) => (
        <>
          {card.bestchoice ? (
            <div className={styles.bestChoice}>
              <TfiCup className={styles.cup} /> Best Choice
            </div>
          ) : (
            " "
          )}

          <div className={styles.cardnum}>{card.cardnumber}</div>
          <div className={styles.card}>
            <div className={styles.imgContainer}>
              <img src={builderImage} alt="Builder" />
            </div>
            <div className={styles.description}>
              <p className={styles.para1}>
                <strong>{card.name}</strong> {card.discription}
              </p>{" "}
              <strong>Main highlights</strong>
              <p className={styles.para2}>{card.para}</p>
              <span className={styles.showMore}>
                Show more
                <IoChevronDownSharp className={styles.showMoreIcon} />
              </span>
            </div>

            <div className={styles.ratingContainer}>
              <div className={styles.ratingBlock}>
                <div className={styles.rating}>
                  <span className={styles.point}>{card.rating}</span>
                </div>
                <div className={styles.ratingDescription}>
                  {card.ratingdiscription}
                </div>
                <div className={styles.starContainer}>
                  {card.star >= 1 ? (
                    <MdOutlineStar className={styles.star} />
                  ) : card.star >= 0.5 ? (
                    <MdOutlineStarHalf className={styles.star} />
                  ) : (
                    <IoMdStarOutline className={styles.star} />
                  )}
                  {card.star >= 2 ? (
                    <MdOutlineStar className={styles.star} />
                  ) : card.star >= 1.5 ? (
                    <MdOutlineStarHalf className={styles.star} />
                  ) : (
                    <IoMdStarOutline className={styles.star} />
                  )}
                  {card.star >= 3 ? (
                    <MdOutlineStar className={styles.star} />
                  ) : card.star >= 2.5 ? (
                    <MdOutlineStarHalf className={styles.star} />
                  ) : (
                    <IoMdStarOutline className={styles.star} />
                  )}
                  {card.star >= 4 ? (
                    <MdOutlineStar className={styles.star} />
                  ) : card.star >= 3.5 ? (
                    <MdOutlineStarHalf className={styles.star} />
                  ) : (
                    <IoMdStarOutline className={styles.star} />
                  )}
                  {card.star >= 5 ? (
                    <MdOutlineStar className={styles.star} />
                  ) : card.star >= 4.5 ? (
                    <MdOutlineStarHalf className={styles.star} />
                  ) : (
                    <IoMdStarOutline className={styles.star} />
                  )}
                </div>
              </div>
              <button>View</button>
            </div>
          </div>
        </>
      ))}
   
      <div className={styles.cardnum}>4</div>
      <div className={styles.card}>
        <div className={styles.imgContainer}>
          <img src={builderImage} alt="Builder" />
        </div>
        <div className={styles.description}>
          <p className={styles.paral1}>
            <strong>CDK Resposive Builder:</strong> An extensive library of widgets and apps, and detailed step-by-step guides
          </p>{" "}
          <div className={styles.off}>26% Off</div>
          <strong>Main highlights</strong>
          <p className={styles.paral2}>
            <ul>
              <li><span className={styles.points}>9.9</span>Building responsive</li>
              <li><span className={styles.points}>8.9</span>Cool</li>
              <li><span className={styles.points}>8.9</span>Docs</li>
            </ul>
          </p>
          <p className={styles.para1}>
          Why we love it
          <ul className={styles.keylist}>
            <li><span><IoCheckmarkCircleOutline/></span> Documentation</li>
            <li><span><IoCheckmarkCircleOutline/></span> Easy Use</li>
            <li><span><IoCheckmarkCircleOutline/></span> Out of Box</li>
          </ul>
          </p>
          <br/>
          <br/>
          
          <span className={styles.showMore}>
            Show more
            <IoChevronDownSharp className={styles.showMoreIcon} />
          </span>
        </div>

        <div className={styles.ratingContainer}>
          <div className={styles.ratingBlock}>
            <div className={styles.rating}>
              <span className={styles.point}>{cardData[0].rating}</span>
            </div>
            <div className={styles.ratingDescription}>
              {cardData[0].ratingdiscription}
            </div>
            <div className={styles.starContainer}>
              {cardData[0].star >= 1 ? (
                <MdOutlineStar className={styles.star} />
              ) : cardData[0].star >= 0.5 ? (
                <MdOutlineStarHalf className={styles.star} />
              ) : (
                <IoMdStarOutline className={styles.star} />
              )}
              {cardData[0].star >= 2 ? (
                <MdOutlineStar className={styles.star} />
              ) : cardData[0].star >= 1.5 ? (
                <MdOutlineStarHalf className={styles.star} />
              ) : (
                <IoMdStarOutline className={styles.star} />
              )}
              {cardData[0].star >= 3 ? (
                <MdOutlineStar className={styles.star} />
              ) : cardData[0].star >= 2.5 ? (
                <MdOutlineStarHalf className={styles.star} />
              ) : (
                <IoMdStarOutline className={styles.star} />
              )}
              {cardData[0].star >= 4 ? (
                <MdOutlineStar className={styles.star} />
              ) : cardData[0].star >= 3.5 ? (
                <MdOutlineStarHalf className={styles.star} />
              ) : (
                <IoMdStarOutline className={styles.star} />
              )}
              {cardData[0].star >= 5 ? (
                <MdOutlineStar className={styles.star} />
              ) : cardData[0].star >= 4.5 ? (
                <MdOutlineStarHalf className={styles.star} />
              ) : (
                <IoMdStarOutline className={styles.star} />
              )}
            </div>
          </div>
          <button className={styles.lastButton}>View</button>
        </div>
      </div>
    </>
  );
};

export default Card;
