import type { Command } from "./types";

type Props = {
    label: string;
    cmd : Command;
    active : boolean;
};


function CommandChip({ label, cmd, active }:Props) {
    return <span>{active ? "▶ " : ""}{label}</span>
    
}

export default CommandChip;