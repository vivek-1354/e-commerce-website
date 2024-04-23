import React, { useEffect, useState } from 'react'

const Timer = () => {
    const [counter, setCounter] = useState(0)

    useEffect(() => {
        const timeInterval = setInterval(() => {
            setCounter((previousVal) => previousVal + 1)
        }, 1000)

        return () => {
            console.log("component removed...")
            clearInterval(timeInterval)
        }
    }, [])

    return (<h1>
        {`Current value is : ${counter}`}
    </h1>
    )
}

const Counter = () => {
    const [toggle, setToggle] = useState(false)
    return (
        <center>
            {toggle ? <h4>Counter removed</h4> : <Timer />}
            <button onClick={() => setToggle(!toggle)}>Toggle</button>

        </center>
    )
}

export default Counter
