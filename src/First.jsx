import { useState } from 'react'
import "./index.css";
import "./css/navbar.css";
import "./css/count.css";
import "./css/first.css";
import { Link } from 'react-router-dom';

function First() {
  const [count, setCount] = useState(0)

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
            <h1 className={"welcomeText"}>Добро пожаловать на сайт!</h1>
        </main>
    </div>
  )
}

export default First