//== Component Logic
import useLogic from "./logic"

function LangSwitch() {
  const { switchLang } = useLogic();

  return (
    <div>
      <button onClick={() => switchLang('en')}>Switch To English</button>
      <button onClick={() => switchLang('ar')}>Switch To Arabic</button>
    </div>
  )
}

export default LangSwitch
