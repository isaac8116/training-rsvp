import { useState, useEffect, useRef } from 'react'

function App() {
  const [yesPos, setYesPos] = useState({ x: -999, y: -999 })
  const [noPos, setNoPos] = useState({ x: -999, y: -999 })
  const [answered, setAnswered] = useState(false)
  const noBtnRef = useRef(null)
  const yesBtnRef = useRef(null)

  useEffect(() => {
    const yesRect = yesBtnRef.current.getBoundingClientRect()
    const noRect = noBtnRef.current.getBoundingClientRect()
    const gap = 32
    const totalWidth = yesRect.width + gap + noRect.width
    const startX = (window.innerWidth - totalWidth) / 2
    const startY = window.innerHeight / 2 + 80

    setYesPos({ x: startX, y: startY })
    setNoPos({ x: startX + yesRect.width + gap, y: startY })
  }, [])

  const runAway = () => {
    const margin = 100
    const newX = margin + Math.random() * (window.innerWidth - margin * 2)
    const newY = margin + Math.random() * (window.innerHeight - margin * 2)
    setNoPos({ x: newX, y: newY })
  }

  if (answered) {
    return (
      <div className="page">
        <p className="question">See you there! 🎉</p>
      </div>
    )
  }

  return (
    <div className="page">
      <p className="question">Are you coming to training?</p>
      <button
        className="btn-yes"
        ref={yesBtnRef}
        onClick={() => setAnswered(true)}
        style={{ left: yesPos.x, top: yesPos.y }}
      >
        Yes
      </button>
      <button
        className="btn-no"
        ref={noBtnRef}
        onMouseEnter={runAway}
        style={{ left: noPos.x, top: noPos.y }}
      >
        No
      </button>
    </div>
  )
}

export default App
