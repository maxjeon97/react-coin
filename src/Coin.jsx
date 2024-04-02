import './Coin.css';
import { useState } from 'react';
import images from './images';
import choice from './helpers';


function Coin() {
    const [coinState, setCoinState] = useState(null);

    function handleFlip(evt) {
        const outcome = choice(images);
        setCoinState(outcome.src);
    }

    return (
        <div className="Coin">
            <img className="Coin-image" src={coinState} alt="coin-image" />
            <button
            className='Coin-flip btn btn-secondary'
            onClick={handleFlip}>
                Flip the Coin!
            </button>
        </div>
    );
}

export default Coin;