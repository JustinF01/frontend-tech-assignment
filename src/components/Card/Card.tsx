import family from "../../assets/family.svg"
import emergency from "../../assets/em-fund.svg"
import debt from "../../assets/debt.svg"
import home from "../../assets/home.svg"
import vision from "../../assets/vision.svg"
import holiday from "../../assets/going-holiday.svg"
import retire from "../../assets/retire.svg"
import styles from "./card.module.css"

const Card = ({
  imageType,
  text,
  top,
  left,
  highlight,
  above,
  indicatorPos,
  pointPos,
}: {
  imageType: string
  text: string
  top: number
  left: number
  highlight: boolean
  above: boolean
  indicatorPos: number
  pointPos: number
}) => {
  let imageSrc = ""
  switch (imageType) {
    case "family":
      imageSrc = family
      break
    case "emergency":
      imageSrc = emergency
      break
    case "debt":
      imageSrc = debt
      break
    case "home":
      imageSrc = home
      break
    case "vision":
      imageSrc = vision
      break
    case "holiday":
      imageSrc = holiday
      break
    case "retire":
      imageSrc = retire
      break
    default:
      break
  }

  return (
    <div style={{ position: "absolute", top, left }}>
      {highlight && (
        <>
          <div
            className={styles.cardhighlight}
            style={{ "--pointHightlightPos": `${pointPos}px` }}
          >
            <img
              src={imageSrc}
              alt="Family"
              width={114}
              height={76}
              style={{ zIndex: 3 }}
            />
            <p className={styles.text}>{text}</p>
          </div>
          <div
            className={styles.indicatorhighlight}
            style={{ "--indicatorHightlightPos": `${indicatorPos}px` }}
          ></div>
        </>
      )}
      {above && (
        <>
          <div
            className={styles.cardbottom}
            style={{ "--pointBottomPos": `${pointPos}px` }}
          >
            <img
              src={imageSrc}
              alt="Family"
              width={114}
              height={76}
              style={{ zIndex: 3 }}
            />
            <p className={styles.text}>{text}</p>
          </div>
          <div
            className={styles.indicatorBottom}
            style={{ "--indicatorBottomPos": `${indicatorPos}px` }}
          ></div>
        </>
      )}
      {!above && !highlight && (
        <>
          <div
            className={styles.cardtop}
            style={{ "--pointTopPos": `${pointPos}px` }}
          >
            <img
              src={imageSrc}
              alt="Family"
              width={114}
              height={76}
              style={{ zIndex: 3 }}
            />
            <p className={styles.text}>{text}</p>
          </div>
          <div
            className={styles.indicatorTop}
            style={{ "--indicatorTopPos": `${indicatorPos}px` }}
          ></div>
        </>
      )}
    </div>
  )
}

export default Card
