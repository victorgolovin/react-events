import React, {useState} from 'react'
import Button from './Button'
import Counter2 from './Counter2'

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

  const [counter, setCounter] = useState(0);
  console.log(useState(0));

  const handleMinusBtnClick = () => {
    setCounter(counter - 1)
    console.log(counter);
  }

  const handlePlusBtnClick = () => {
    setCounter(counter + 1)
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

  const [counter2, setCounter2] = useState(0);

  

  const handleMinusBtnClick12 = () => {
    setCounter2(counter2 - 1)
  }

  const handlePlusBtnClick22 = () => {
    setCounter2(counter2 + 1)
  }

  const isMinusBtmDisabled = () => {
    return counter2 === -5;
  }

  const isPlusBtmDisabled = () => {
    return counter2 === +5;
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
        value={counter2}/>
      </div>
    </div>
  )

  
}

export default App
