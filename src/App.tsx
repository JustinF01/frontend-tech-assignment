import React from "react"
import styles from "./app.module.css"
import Timeline from "./components/Timeline/Timeline"

const events = [
  {
    eventName: { name: "You are here", left: 78 },
    eventItems: [],
  },
  {
    eventName: { name: "In 1 year and 9 months", left: 153 },
    eventItems: [
      {
        imageType: "family",
        text: "Baby's Birth",
        top: 69,
        left: 137,
        above: true,
        highlight: false,
        indicatorPos: 62,
        pointPos: 55,
      },
      {
        imageType: "home",
        text: "New Home",
        top: 336,
        left: 135,
        above: false,
        highlight: false,
        indicatorPos: 62,
        pointPos: 55,
      },
    ],
  },
  {
    eventName: { name: "In 3 years and 2 months", left: 288 },
    eventItems: [
      {
        imageType: "holiday",
        text: "Holiday",
        top: 69,
        left: 287,
        above: true,
        highlight: false,
        indicatorPos: 50,
        pointPos: 43,
      },
    ],
  },
  {
    eventName: { name: "In 4 years and 9 months", left: 433 },
    eventItems: [
      {
        imageType: "emergency",
        text: "Emergency fund",
        top: 336,
        left: 424,
        above: false,
        highlight: false,
        indicatorPos: 55,
        pointPos: 49,
      },
    ],
  },
  {
    eventName: { name: "In 8 years and 11 months", left: 629 },
    eventItems: [
      {
        imageType: "debt",
        text: "Debt Free",
        top: 336,
        left: 631,
        above: false,
        highlight: false,
        indicatorPos: 49,
        pointPos: 42,
      },
    ],
  },
  {
    eventName: { name: "", left: 0 },
    eventItems: [
      {
        imageType: "home",
        text: "Retire",
        top: 69,
        left: 720,
        above: true,
        highlight: false,
        indicatorPos: 62,
        pointPos: 55,
      },
    ],
  },
  {
    eventName: { name: "Ultimately", left: 814 },
    eventItems: [
      {
        imageType: "vision",
        text: "Make a contribution to my community through philantrophy",
        top: 336,
        left: 773,
        above: false,
        highlight: true,
        indicatorPos: 91,
        pointPos: 84,
      },
    ],
  },
]

function App() {
  return (
    <main className={styles.stage}>
      <Timeline events={events} />
    </main>
  )
}

export default App
