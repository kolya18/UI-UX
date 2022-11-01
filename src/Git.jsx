import { useState } from 'react'
import "./index.css";
import "./css/navbar.css";
import "./css/git.css";
import { Link } from 'react-router-dom';

function Git() {

  const [username, setUsername] = useState("");
  const [userAvatarUrl, setUserAvatarUrl] = useState(null);

  const handleSubmit = async (event) => {
      event.preventDefault();
      const res = await fetch("https://api.github.com/users/" + username);
      const data = await res.json();
      console.log(data);
      setUserAvatarUrl(data.avatar_url);
  }
  
  const handleUsernameInput = (newUsername) => {
      setUsername(newUsername.target.value);
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
            <form onSubmit={handleSubmit}>
                <div className={"search_Elements"}>
                    <text className={"welcomeText"} >Никнейм пользователя Github: </text>
                    <input value={username} onChange={handleUsernameInput}/>
                    <button type="search" className={"search_button"}>Получить аватар</button>
                    <div> {userAvatarUrl ?
                    <img src={userAvatarUrl} alt="*"/> :
                    <div><p className="textOut">Картинка или пользователь не найдены !</p></div>
                }</div>
                <br/>
                </div>
               
            </form>
        </main>
    </div>
  )
}

export default Git