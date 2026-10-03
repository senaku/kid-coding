type Props = {
    label: string;
    cmd : Command;
    active : boolean;
};

type Command = "forward" | "turnleft" | "turnRight";

function CommandChip({ label, cmd, active }:Props) {
    return <span>{active ? "▶ " : ""}{label}</span>
    
}

export default CommandChip;