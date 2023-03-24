import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { SignupComponent } from './signup/signup.component';
import { ServiceService } from './service.service';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'crudapplication';
  public data: any;
  public data1: any;
  displayedColumns: string[] = ['username', 'email', 'password', 'action'];
  constructor(
    private router: Router,
    private dialog: MatDialog,
    private service: ServiceService
  ) {}
  ngOnInit(): void {
    this.getuser();
  }
  openDialog() {
    const dialogRef = this.dialog.open(SignupComponent);
    dialogRef.afterClosed().subscribe({
      next: (res) =>{
        if(res){
          this.getuser()
        }}
    })
  }

  Dialog(data: any) {
    const dialogRe = this.dialog.open(LoginComponent, {
      data,
    });
    // console.log(recdata);
  }

  getuser() {
    this.service.viewuser().subscribe({
      next: (res: any) => {
        this.data = res;
        console.log(res);
        console.log(this.data);
        // alert('get data successfuly');
      },
      error: () => {
        // alert('error while reading data');
      },
    });
  }

  deletedata(userId: string) {
    console.log(userId);
    this.service.deleteUserData(userId).subscribe({
      next: (res) => {
        alert('data Delete successfuly');
        this.getuser();
        // this.loginForm.reset();
        // this.metadialogref.close();
      },
      error: () => {
        alert('error while addind data');
      },
    });
  }
}
