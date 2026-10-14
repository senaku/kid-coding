import CommandChip from "./CommandChip";
import { useState } from "react";
import type { Command,Step } from "./types";


const makeStep = (cmd: Command): Step => ({
  id: crypto.randomUUID(),
  cmd,
});

function App(){
  const [ current,setCurrent ] = useState(0);
  const [ program,setProgram ] = useState<Step[]>([
    makeStep("forward"),
    makeStep("forward"),
    makeStep("turnLeft"),
    makeStep("forward"),
  ]);

  const safeCurrent = Math.min(current, program.length - 1);

  const addCommand = (cmd: Command) => {
      setProgram([...program, makeStep(cmd)]);
  }
 
  const removeById = (id: string) => {
    setProgram(program.filter((step)=> step.id !== id ));
  }

  return (
    <div>
        <h1>kid-coding</h1>
        {program.length === 0
          ? <p>명령을 추가하세요</p>
          : <p>현재 : {safeCurrent+1}번째</p>
        }
        
        <button 
          onClick={()=> setCurrent(safeCurrent+1)}
          disabled={safeCurrent >= program.length -1}
        >
          다음
        </button>
        <button onClick={()=> setCurrent(0)}>처음으로</button>
        {program.map((step,i) => (
          <CommandChip key={step.id} label={step.cmd} cmd={step.cmd} active={i === safeCurrent} onRemove={()=> removeById(step.id)}/>
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