import { atom } from "recoil";
import { Task } from ".";

export const tasksState = atom<Task[]>({
  key: "tasksState",
  default: [],
});
