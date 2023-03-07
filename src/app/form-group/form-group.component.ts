import { Component } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.scss'],
})
export class FormGroupComponent {
  containerGroup: FormGroup;
  nameControl = new FormControl('');
  arrayControl = new FormArray<any>([
    new FormGroup({
      status: new FormControl(''),
    }),
  ]);

  constructor(private readonly fb: FormBuilder) {
    this.containerGroup = this.fb.group({
      nameControl: this.nameControl,
      arrayControl: this.arrayControl,
    });

    console.log(this.containerGroup);
    console.log(this.arrayControl as FormArray);

    this.arrayControl.controls.forEach((x) => console.log(x));
  }

  get array(): FormArray {
    return this.arrayControl as FormArray;
  }

  addControl() {
    this.arrayControl.push(
      new FormGroup({
        status: new FormControl(''),
      })
    );
  }

  removeControl(i: number) {
    this.arrayControl.removeAt(i);
  }

  onSubmit() {
    console.log(this.containerGroup);
  }
}
