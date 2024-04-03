import './Coin.css';
import { useState } from 'react';
import images from './images';
import choice from './helpers';


function Coin() {
    const [coinState, setCoinState] = useState(null);

    const [totals, setTotals] = useState({
        heads: 0,
        tails: 0,
        flips: 0,
    });

    const [visibility, setVisibility] = useState({ display: "none" });

    function handleFlip(evt) {
        const outcome = choice(images);
        setCoinState(outcome.src);

        if (outcome.text === "heads") {
            setTotals({
                heads: totals.heads + 1,
                tails: totals.tails,
                flips: totals.flips + 1
            });
        } else {
            setTotals({
                heads: totals.heads,
                tails: totals.tails + 1,
                flips: totals.flips + 1
            });
        }

        setVisibility({ display: "block" });
    }

    const { heads, tails, flips } = totals;

    return (
        <div className="Coin">
            <img className="Coin-image"
            src={coinState}
            alt="coin-image"
            style={visibility}/>
            <button
                className='Coin-flip btn btn-secondary'
                onClick={handleFlip}>
                Flip the Coin!
            </button>
            <div className='Coin-totals'>Out of {flips} flips, there have been {heads} heads and {tails} tails</div>
        </div>
    );
}

export default Coin;