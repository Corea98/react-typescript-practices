import React, { useContext, useEffect, useRef } from 'react'
import { RootStoreContext } from '../../context';
import RootStore from '../../stores';

type Props = {
  children: React.ReactNode
}

const IncreaseCountX = React.memo<Props>(({ children }) => {

  const { counterXStore } = useContext(RootStoreContext) as RootStore;

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

  const handleClick = () => {
    counterXStore.increment();
  }

  console.log("IncreaseCountX rendered");

  return (
    <button onClick={ handleClick }>Increase countX {
      children
    }</button>
  )
})

export default IncreaseCountX;
