import { useState } from "react";

const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>;

const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);
    const [all, setAll] = useState(0);

    const handleGood = () => {
        setGood(good + 1);
        setAll(all + 1);
    };
    const handleNeutral = () => {
        setNeutral(neutral + 1);
        setAll(all + 1);
    };
    const handleBad = () => {
        setBad(bad + 1);
        setAll(all + 1);
    };

    const average = () => {
        if (all !== 0) {
            return (good + bad * -1) / all;
        }
        return 0;
    };

    const positive = () => {
        if (all !== 0) {
            return (good / all) * 100;
        }
        return 0;
    };

    return (
        <div>
            <h1>give feedback</h1>
            <Button handleClick={handleGood} text="good" />
            <Button handleClick={handleNeutral} text="neutral" />
            <Button handleClick={handleBad} text="bad" />
            <h1>statistics</h1>
            <p>good {good}</p>
            <p>neutral {neutral}</p>
            <p>bad {bad}</p>
            <p>all {all}</p>
            <p>average {average()}</p>
            <p>positive {positive()}%</p>
        </div>
    );
};

export default App;
