import './App.css';
import Coin from './Coin';


/** Component for entire page.
 *
 * Props: none
 * State: none
 *
 * App -> Coin
*/

function App() {

  return (
    <div className="App">
      <h1>Let's Flip a Coin!</h1>
      <Coin />
    </div>
  );
};

export default App;
