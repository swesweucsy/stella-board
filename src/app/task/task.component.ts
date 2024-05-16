import { Component, Input, OnInit } from '@angular/core';
import { Taskboard } from '../model/taskboard/taskboard';
import { TaskServiceService } from '../service/task-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() taskList! : Taskboard[];
  taskBoard!: Taskboard;

  constructor(
    private taskService: TaskServiceService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getTaskBoard();
  }

  private getTaskBoard(): void {
    const id = this.route.snapshot.paramMap.get("id");

    if( id != null ) {
      this.taskService.getTaskboardById(id).subscribe(
        response => {
          this.taskBoard = response;
        }
      )
    }
  }
}
