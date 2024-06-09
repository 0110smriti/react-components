import './App.css';
import Accordion from './components/accordion';
import RandomColor from './components/ColorGenerator';
import StarRating from './components/starRating';

function App() {
  return (
    <div className="App">
      {/*Accordion Component */}
      <Accordion/>
      {/*Random color component */}
      <RandomColor/>
      {/* Star Rating Component*/}
      <StarRating noOfStars={10}/>
    </div>
  );
}

export default App;
