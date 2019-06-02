import { Component, OnInit } from '@angular/core';

import { User } from './test-service.model';
import { TestService } from './test.service';
import { UtilitiesService } from './utilities.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styles: [
    `
      .wrapper {
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;
      }
      .test-form {
        width: 500px;
        display: flex;
        flex-flow: row nowrap;
      }

      .test-form > input {
        border: 1px soild #eee;
        width: 500px;
        height: 50px;
        font-size: 16px;
        padding: 2px;
      }

      .test-form > button {
        width: 100px;
        font-size: 20px;
      }
    `,
  ],
  providers: [TestService],
})
export class TestComponent implements OnInit {
  searchInput: string;
  users: User[];

  constructor(private testService: TestService) {}

  ngOnInit() {
    // this.testService.getUsers().subscribe();
  }

  onSubmit(): void {
    const utilities = new UtilitiesService();
    const newUser = utilities.generateUsers(1, 22);
    // const id = Number(this.searchInput);
    // console.log(id);
    // this.testService.getUser(id).subscribe(res => console.log(res));
    this.testService.createUser(newUser[0]).subscribe(res => console.log(res));
  }
}
