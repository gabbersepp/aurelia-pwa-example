import { ToDo } from "./ToDo";

export class ToDoComponent {

    private todos: ToDo[] = [];

    constructor() {
        this.addTodo = this.addTodo.bind(this);
    }

    private addTodo(title: string): void {
        this.todos.push({
            done: false,
            title: title
        });
    }
}