import {Task} from '../task/task';

export class Taskboard {
    id!: number;
    title!: String;
    color!: String;
    tasks!: Task[];
}
