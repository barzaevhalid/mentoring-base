import {Component, EventEmitter, Output} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";

@Component({
  selector: 'app-create-todo-form',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './create-todo-form.component.html',
  styleUrl: './create-todo-form.component.scss'
})
export class CreateTodoFormComponent {

  @Output()
  createTodo = new EventEmitter();

  form = new FormGroup({
    body: new FormControl('', [Validators.required, Validators.maxLength(50), Validators.minLength(5)]),
    title: new FormControl('', [Validators.required, Validators.maxLength(10), Validators.minLength(5)]),
  })

  onSubmit() {
    this.createTodo.emit(this.form.value)

  }
}