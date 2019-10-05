import { bindable } from "aurelia-framework";

export class ToDoInput {
    @bindable
    public add: (title: string) => void;
    private title: string;
}