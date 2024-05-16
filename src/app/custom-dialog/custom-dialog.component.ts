import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, Validators, FormGroup} from '@angular/forms';
import { Taskboard } from '../model/taskboard/taskboard';

interface Color {
  name: string;
  value: string;
}

@Component({
  selector: 'app-custom-dialog',
  templateUrl: './custom-dialog.component.html',
  styleUrls: ['./custom-dialog.component.css']
})

export class CustomDialogComponent implements OnInit {
  title!:string;
  form!: FormGroup;
  selectedColor!:string;

  colors: Color[] = [
    {name: "Red", value: "red"},
    {name: "Green", value: "green"},
    {name: "Blue", value: "blue"},
    {name: "White", value: "white"},
  ];

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<CustomDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Taskboard
  ) {
      this.form = fb.group({
          title: [this.title, Validators.required]
      });
  }

  ngOnInit(): void {
  }

  close() {
    this.dialogRef.close();
  }

  save() {
    if(this.form.valid) {
      const title = this.form.get('title')?.value;
      this.data.title = title;
      this.dialogRef.close(this.data);
    }
  }

}
