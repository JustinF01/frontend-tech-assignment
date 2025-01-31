import family from "../../assets/family.svg";
import emergency from "../../assets/em-fund.svg";
import debt from "../../assets/debt.svg";
import home from "../../assets/home.svg";
import vision from "../../assets/vision.svg";
import holiday from "../../assets/going-holiday.svg";
import styles from "./card.module.css";

const Card = ({
    imageType,
    text,
    top,
    left,
    highlight,
    above,
}: {
    imageType: string;
    text: string;
    top: number;
    left: number;
    highlight: boolean;
    above: boolean;
}) => {
    let imageSrc = "";
    switch (imageType) {
        case "family":
            imageSrc = family;
            break;
        case "emergency":
            imageSrc = emergency;
            break;
        case "debt":
            imageSrc = debt;
            break;
        case "home":
            imageSrc = home;
            break;
        case "vision":
            imageSrc = vision;
            break;
        case "holiday":
            imageSrc = holiday;
            break;
        default:
            break;
    }

    return (
        <div style={{ position: "absolute", top, left }}>
            {highlight && (
                <>
                    <div className={styles.cardhighlight}>
                        <img src={imageSrc} alt="Family" width={114} height={76} style={{ zIndex: 3 }} />
                        <p className={styles.text}>{text}</p>
                    </div>
                    <div className={styles.indicatorhighlight}></div>
                </>
            )}
            {above && (
                <>
                    <div className={styles.cardbottom}>
                        <img src={imageSrc} alt="Family" width={114} height={76} style={{ zIndex: 3 }} />
                        <p className={styles.text}>{text}</p>
                    </div>
                    <div className={styles.indicatorBottom}></div>
                </>
            )}
            {!above && !highlight && (
                <>
                    <div className={styles.cardtop}>
                        <img src={imageSrc} alt="Family" width={114} height={76} style={{ zIndex: 3 }} />
                        <p className={styles.text}>{text}</p>
                    </div>
                    <div className={styles.indicatorTop}></div>
                </>
            )}
        </div>
    );
};

export default Card;
