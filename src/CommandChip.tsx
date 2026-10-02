type Props = {
    label: string;
    cmd : Command;
};

type Command = "forward" | "turnleft" | "turnRight";

function CommandChip({ label, cmd }:Props) {
    return <span>{label} / {cmd} </span>
    
}

export default CommandChip;