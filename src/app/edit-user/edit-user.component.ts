import { Router } from '@angular/router';
import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { User } from '../models/user.model';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  userForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.iniForm();
  }

  iniForm() {
    this.userForm = this.formBuilder.group(
      {
        firstname: ['', Validators.required],
        lastname: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        drinkPreference: ['', Validators.required],
        hobbies:this.formBuilder.array([])
      });
  }

  onSubmitform () {
    const formvalue = this.userForm.value;
    const newUser = new User(
      formvalue ['firstname'],
      formvalue ['lastname'].toUpperCase(),
      formvalue ['email'],
      formvalue ['drinkPreference'],
      formvalue ['hobbies'] ? formvalue ['hobbies'] : []
    );

    this.userService.addUser(newUser);
    this.router.navigate(['/users']);
  }

  getHobbies () {
    return this.userForm.get('hobbies') as FormArray;
  }

  onAddHobbies () {
    const newHobbyControl = this.formBuilder.control('', Validators.required);
    this.getHobbies().push(newHobbyControl);
  }

}
