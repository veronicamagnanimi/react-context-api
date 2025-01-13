import { NavLink } from "react-router-dom";
import { useContext } from "react";
import GlobalContext from "../contexts/GlobalContext";

const AppHeader = () => {

  const globalProviderValue = useContext(GlobalContext);
  const {navbar} = globalProviderValue;

    return (

  <header>
    <div className="dFlex">
    <ul>
      {navbar.map((curNav, index) => {
        return (
          <li key={index}><NavLink to = {curNav.path}>{curNav.title}</NavLink></li>
        )
      })}
    </ul>
    </div>
  </header>

    )
}

export default AppHeader;