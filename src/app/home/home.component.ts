import { Component, NgModule, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { CustomDialogComponent } from '../custom-dialog/custom-dialog.component';
import { Taskboard } from '../model/taskboard/taskboard';
import { TaskServiceService } from '../service/task-service.service';


export interface DialogData {
  taskTitle: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  displayedColumns: string[] = ['todo', 'inprogress', 'completed'];
  addKanban = 'Add Tasks\'s Board';

  task:string = '';
  taskboard!: Taskboard;

  taskBoards!: Taskboard[];

  constructor(
    private taskService: TaskServiceService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getAllTaskBoards();
  }

  openDialog(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
   // dialogConfig.width = '250px';
    dialogConfig.data = new Taskboard();

    const dialogRef = this.dialog.open(CustomDialogComponent,dialogConfig);

    // AFter add from dialog
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      this.task = result;
    });
  }

  private getAllTaskBoards(): void{
    this.taskService.getAllTaskBoards().subscribe(
      response => {
        this.taskBoards = response;
      }
    )
  }
}