import React, {useState} from 'react'
import Button from './Button'
import Counter2 from './Counter2'


const INITIAL_COUNTER = 0;
const COUNTER_STEP = 1;
const MAX_COUNTER_VALUE = 5;
const MIN_COUNTER_VALUE = -5;


const App = () => {

  const handleClick = () => {
    alert('clicked')
  }

  const handleMouseOver = () => {
    console.log('mouse over event')
  }

  const handleLinkClick = (e) => {
    e.preventDefault();
    console.log('link clicked')
  }
  
  //------------------------------------

  const [counter, setCounter] = useState(INITIAL_COUNTER);
  console.log(useState(INITIAL_COUNTER));

  const handleMinusBtnClick = () => {
    setCounter(counter - COUNTER_STEP)
    console.log(counter);
  }

  const handlePlusBtnClick = () => {
    setCounter(counter + COUNTER_STEP)
    console.log(counter);
  }

  //--------------------------------------

const [name, setName] = useState('Victor');

  const handleNameOneBtn = () => {
    setName('Jon')
  }

  const handleNameTwoBtn = () => {
    setName('Rin')
  }

  //--------------------------------------

  const [counter2, setCounter2] = useState(INITIAL_COUNTER);

  

  const handleMinusBtnClick12 = () => {
    setCounter2(counter2 - COUNTER_STEP)
  }

  const handlePlusBtnClick22 = () => {
    setCounter2(counter2 + COUNTER_STEP)
  }

  const isMinusBtmDisabled = () => {
    return counter2 <= MIN_COUNTER_VALUE;
  }

  const isPlusBtmDisabled = () => {
    return counter2 >= MAX_COUNTER_VALUE;
  }

  const isCounterRed = () => {
    return counter2 <= MIN_COUNTER_VALUE || counter2 >= MAX_COUNTER_VALUE;
  }
  
  return (
    <div>
      <a 
      onClick={handleLinkClick}
      href="https://another-page.ru">Ссылка</a>
      <button 
      onClick={handleClick}
      onMouseOver={handleMouseOver}
      >
      Push me
      </button>

{/* ---------------------------------------- */}

      <div>
        <Button 
        text={'-'}
        onClick={handleMinusBtnClick}/>

        <Button text={'+'}
        onClick={handlePlusBtnClick} />
        <p>{counter}</p>
      </div>

{/* ---------------------------------------- */}

      <div>
        <Button 
        text={'-'}
        onClick={handleNameOneBtn}/>

        <Button text={'+'}
        onClick={handleNameTwoBtn} />
        <p>{name}</p>
      </div>

{/* ---------------------------------------- */}
      <div>
        <Button 
        text={'-'}
        isDisabled={isMinusBtmDisabled()}
        onClick={handleMinusBtnClick12}/>

        <Button 
        text={'+'}
        isDisabled={isPlusBtmDisabled()}
        onClick={handlePlusBtnClick22} />
        <Counter2 
        value={counter2}
        isRed={isCounterRed()}/>
      </div>
    </div>
  )
}

export default App
