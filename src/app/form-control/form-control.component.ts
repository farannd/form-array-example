import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.scss'],
})
export class FormControlComponent {
  group: FormGroup;
  nameControl = new FormControl('');
  arrayControl = new FormArray([new FormControl('')]);

  constructor() {
    this.group = new FormGroup({
      nameControl: this.nameControl,
      arrayControl: this.arrayControl,
    });
  }

  get array(): FormArray {
    return this.arrayControl as FormArray;
  }

  addControl() {
    this.arrayControl.push(new FormControl(''));
  }

  removeControl(i: number) {
    this.arrayControl.removeAt(i);
  }

  onSubmit() {
    console.log(this.group);
  }
}
