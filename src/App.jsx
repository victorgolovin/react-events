import React, {useState} from 'react'
import Button from './Button'

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

        <Button text='+'
        onClick={handlePlusBtnClick} />
        <p>{counter}</p>
      </div>
{/* ---------------------------------------- */}
<div>
        <Button 
        text={'-'}
        onClick={handleNameOneBtn}/>

        <Button text='+'
        onClick={handleNameTwoBtn} />
        <p>{name}</p>
      </div>
      
    </div>
  )

  
}

export default App
