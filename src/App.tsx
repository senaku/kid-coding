import CommandChip from "./CommandChip";
import { useState } from "react";
import type { Command } from "./types";

const program: Command[] = ["forward", "forward", "turnLeft", "forward"];

function App(){
  const [ current,setCurrent ] = useState(0);

  return (
    <div>
        <h1>kid-coding</h1>
        <p>현재 : {current}번째</p>
        <button onClick={()=> setCurrent(current+1)}>다음</button>
        {program.map((cmd,i) => (
          <CommandChip key={i} label={cmd} cmd={cmd} active={i === current} />
        ))}
        
    </div>  


  )
}

export default App;