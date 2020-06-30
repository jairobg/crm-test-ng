import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.scss']
})
export class AddClientComponent implements OnInit {

  addClientForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.addClientForm = this.formBuilder.group({
      uid: ['', Validators.required],
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      phone: [''],
      address: [''],
    })
   }

  ngOnInit(): void {
  }

  addClient(values){
    console.log(values);
  }
}
