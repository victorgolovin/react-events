import React from 'react'


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
    </div>
    
  )
}

export default App
