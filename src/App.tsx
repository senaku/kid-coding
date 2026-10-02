import CommandChip from "./CommandChip";

function App(){
  return (
    <div>
        <h1>kid-coding</h1>
        <CommandChip label="앞으로" cmd="forward" />
        <CommandChip label="왼쪽" cmd="turnRight" />
    </div>  


  )
}

export default App;