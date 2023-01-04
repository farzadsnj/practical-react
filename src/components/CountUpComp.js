import React from 'react'
import CountUp, {useCountUp} from 'react-countup'

const CountUpComp = () => {
    const {countUp, start, pauseResume, reset, update} = useCountUp({
        duration: 5,
        end: 10000, 
        startOnMount: false
    })
  return (
    <div>
        <div>
            <h1>{countUp}</h1>
            <button onClick={start}>Start</button>
            <button onClick={reset}>reset</button>
            <button onClick={pauseResume}>pauseResume</button>
            <button onClick={() => update(2000)}>update to 2000</button>
        </div>

        <CountUp end={200} />
        <br />
        <CountUp end={200} duration={5}/>
        <br />
        <CountUp start={200} end={800} duration={8}/>
        <br />
        <CountUp end={1000} duration={5} prefix='$' decimals={2}/>
        <br />
        <CountUp end={1000} duration={5} prefix='$' suffix='USD' decimals={2}/>
    </div>
  )
}

export default CountUpComp