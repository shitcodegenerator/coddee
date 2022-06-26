import { useContext } from "react";
import { ThemeContext } from "../../context/theme";
const ThemeToggler = () => {
  const { changeTheme } = useContext(ThemeContext);

  return (
    <div>
      <button onClick={() => changeTheme('dark')}>Dark</button>
      <button onClick={() => changeTheme('light')}>Light</button>
    </div>
  )
}

export default ThemeToggler