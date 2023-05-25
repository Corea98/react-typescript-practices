import React, { useEffect, useRef } from 'react'

type Props = {
  children: string
  handleClick: () => void
}

const IncreaseCountX = React.memo<Props>(({ handleClick, children }) => {

  const timer = useRef<ReturnType<typeof setInterval>>();

  useEffect(() => {
    timer.current = setInterval(() => {
      console.log("timer executed");
    }, 2000)

    return () => {
      clearInterval(timer.current)
      console.log("Timer destroyed")
    }
  }, [])

  console.log("IncreaseCountX rendered");

  return (
    <button onClick={ handleClick }>Increase countX {children}</button>
  )
})

export default IncreaseCountX;
