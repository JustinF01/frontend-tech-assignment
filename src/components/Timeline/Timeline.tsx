import styles from "./styles.module.css";
import Card from "../Card/Card";

interface EventItem {
    imageType: string;
    text: string;
    top: number;
    left: number;
    above: boolean;
    highlight: boolean;
}

interface Event {
    eventName: { name: string; left: number };
    eventItems: EventItem[];
}

const Timeline = ({ events }: { events: Event[] }) => {
    const line = events.map((event, index) => {
        const { eventName, eventItems } = event;

        const eventCard = eventItems.map((item: EventItem) => (
            <Card
                imageType={item.imageType}
                text={item.text}
                top={item.top}
                left={item.left}
                above={item.above}
                highlight={item.highlight}
            />
        ));
        return (
            <div>
                <p
                    style={{
                        position: "absolute",
                        top: 267,
                        left: eventName.left,
                        width: index === 0 ? 71 : 97,
                        textAlign: "center",
                        fontSize: "14px",
                        color: "#FFFFFF",
                        opacity: 0.6,
                    }}>
                    {eventName.name}
                </p>
                {eventCard}
            </div>
        );
    });
    return <div>{line}</div>;
};

export default Timeline;
