import React from 'react'
import './liveLineRow.css';
import Ticker from 'react-ticker'

const LiveLineRow = ({ text }) => {
  return (
    <section className="live-line-wrapper-row" >
      <Ticker
        offset="run-in"
        direction="toLeft"
        speed={5}
      >
        {() => (
          <p className="live-line-row">
            {text}
          </p>
        )}
      </Ticker>
    </section>
  )
}

export default LiveLineRow