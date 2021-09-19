import { useState } from "react/cjs/react.development";

function StateCompo() {
    const [credit, setCredit] = useState(1);
    const addPoints = () => {
        setCredit(credit * 2);
    }

    return (
        <div className="credit-state">
            <h2>Your credit: {credit}</h2>
            <button onClick={addPoints}>Add Credit</button>
        </div>
    );
}

export default StateCompo;