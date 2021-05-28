import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Patient } from './patient.model';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent {
  public patients: Patient[]

  constructor(http: HttpClient, @Inject('API_URL') apiUrl: string) {
    http.get<Patient[]>(apiUrl + 'patient').subscribe(result => {
      this.patients = result;
    }, error => console.error(error));
  }
}
