import { useState } from 'react'
import "./index.css";
import "./css/navbar.css";
import "./css/count.css";
import { Link } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  const increase = () => {
    setCount((count) => count + 1);
  }

  const decrease = () => {
    setCount((count) => count - 1);
  }

  return (
    <div className="root">
        <nav className={"navbar"}>
        <h1 className={"navtext"}>БВТ1901 Мартынов Николай</h1>
          <div className={"button_container"}>
          <Link to={"/"}>
             <button className={"navbutton"}>Главная</button>
             </Link>
          <Link to={"/count"}>
             <button className={"navbutton"}>Счетчик</button>
             </Link>
          <Link to={"/git"}>
            <button className={"navbutton"}>Git Профиль</button>
            </Link>
          </div>
        </nav>
        <main className={"main"}>
        <div className={"count_background"}>
          <p className={"count_text"}>Счётчик</p>
            <p className={"count_text"}>{count}</p>
            <div className={"buttonCount_container"}>
              <button className={"count_buttonIncrease"} onClick={decrease}>-</button>
              <button className={"count_buttonDecrease"} onClick={increase}>+</button>
            </div>
        </div>

        </main>
    </div>
  )
}

export default App
