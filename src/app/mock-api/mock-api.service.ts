import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

import { UtilitiesService } from './utilities.service';

export class MockApiService implements InMemoryDbService {
  newUsers: {}[];
  constructor() {
    const utilities = new UtilitiesService();
    this.newUsers = utilities.generateUsers(10, 0);
  }

  createDb(reqInfo?: RequestInfo) {
    const user = this.newUsers;

    return { user };

    //   let returnType = 'object';

    //   if (reqInfo) {
    //     const body = reqInfo.utils.getJsonBody(reqInfo.req) || {};
    //     if (body.clear === true) {
    //       user.length = 0;
    //     }

    //     returnType = body.returnType || 'object';
    //   }

    //   const db = { heroes };

    //   switch (returnType) {
    //     case 'observable':
    //       return of(db).pipe(delay(10));
    //     case 'promise':
    //       return new Promise(resolve => {
    //         setTimeout(() => resolve(db), 10);
    //       });
    //     default:
    //       return db;
    //   }
  }
}
