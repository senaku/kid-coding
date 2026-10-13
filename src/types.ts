export type Command = "forward" | "turnLeft" | "turnRight";
export type Direction = "up" | "right" | "down" | "left";

export type Step = {
    id: string;
    cmd: Command;
}