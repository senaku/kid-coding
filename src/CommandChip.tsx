import type { Command } from "./types";

type Props = {
    label: string;
    cmd : Command;
    active : boolean;
    onRemove: () => void;
};

const CMD_CLASS: Record<Command, string> ={
    forward : "chip-forward",
    turnLeft : "chip-turn",
    turnRight : "chip-turn",
};


function CommandChip({ label, cmd, active, onRemove }:Props) {
    return (
        <span 
            className={`chip ${CMD_CLASS[cmd]} ${active ? "chip-active" : ""}`}
            onClick={onRemove}
        >
            {label}
        </span>
    );
    
}

export default CommandChip;