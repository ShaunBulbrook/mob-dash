import leftPad from 'left-pad'
import Head from 'next/head'
import { useEffect, useState } from 'react'

export default function Index () {
  const [currentMinutes, setCurrentMinutes] = useState(10)
  const [currentSeconds, setCurrentSeconds] = useState(0)
  const [timerActive, setTimerActive] = useState(false)
  const countdown = () => {
    let seconds = currentSeconds
    let minutes = currentMinutes
    if (seconds === 0) {
      minutes--
      seconds = 60
    }
    seconds = seconds - 1
    setCurrentSeconds(seconds)
    setCurrentMinutes(minutes)
  }

  useEffect(() => {
    let timeout

    if (timerActive) {
      if (currentMinutes === 0 && currentSeconds === 0) {
        setCurrentMinutes(0)
        setCurrentSeconds(0)
      } else {
        timeout = setTimeout(countdown, 1000)
      }
    }

    return () => { clearTimeout(timeout) }
  }, [currentSeconds])

  const startTimer = () => {
    setTimerActive(true)
    countdown()
  }
  return (
    <div className="container">
      <Head>
        <title>Next.js Boilerplate</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div data-testid="timer-heading" className="blah">
          <h1>Mob timer</h1>
          <p data-testid="time-remaining">{currentMinutes}:{leftPad(currentSeconds, 2, 0)}</p>
          <button data-testid="start-button" onClick={startTimer}>Start</button>
        </div>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="logo" />
        </a>
      </footer>
      <style jsx global>{`

      `}</style>
    </div>
  )
}
