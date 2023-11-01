//== Component Logic
import useLogic from "./logic"

function ModeSwitch() {
  const { switchMode } = useLogic();

  return (
    <div>
      <button onClick={() => switchMode('light')}>Light Mode</button>
      <button onClick={() => switchMode('dark')}>Dark Mode</button>
    </div>
  )
}

export default ModeSwitch
