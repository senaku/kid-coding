import CommandChip from "./CommandChip";
import { useState } from "react";
import type { Command } from "./types";



function App(){
  const [ current,setCurrent ] = useState(0);
  const [ program,setProgram ] = useState<Command[]>([
    "forward", "forward", "turnLeft", "forward"
  ]);
  const addCommand = (cmd: Command) => {
      setProgram([...program, cmd]);
  }
  const removeAt = (index: number) => {
    setProgram(program.filter((_,i)=> i !== index ));
  }

  return (
    <div>
        <h1>kid-coding</h1>
        <p>현재 : {current}번째</p>
        <button 
          onClick={()=> setCurrent(current+1)}
          disabled={current >= program.length -1}
        >
          다음
        </button>
        <button onClick={()=> setCurrent(0)}>처음으로</button>
        {program.map((cmd,i) => (
          <CommandChip key={i} label={cmd} cmd={cmd} active={i === current} onRemove={()=> removeAt(i)}/>
        ))}
        <div>
          button
          <button onClick={()=> addCommand("forward")}>+ 앞으로</button>
          <button onClick={()=> addCommand("turnLeft")}>+ 왼쪽</button>
          <button onClick={()=> addCommand("turnRight")}>+ 오른쪽</button>
        </div>
    </div>  


  )
}

export default App;