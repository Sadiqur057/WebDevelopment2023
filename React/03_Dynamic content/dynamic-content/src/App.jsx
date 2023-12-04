import Intro from "./Intro";
import Random from "./Random";
function App() {
  return <div>
          <Intro></Intro>
          <Random></Random>
          <Random></Random>
          <Random></Random>
          {/* self closing */}
          <Random/>
        </div>
}

export default App
