import { bindable } from "aurelia-framework";
import { ToDo } from "./ToDo";

export class ToDoList {
    @bindable
    public todos!: ToDo[];
}