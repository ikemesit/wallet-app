import * as faker from 'faker';

import { User } from './test-service.model';

export class UtilitiesService {
  constructor() {}

  generateUsers(amount: number, startId?: number): User[] {
    const userCollection: User[] = [];
    const initialId = startId || 0;

    for (let i = 0; i <= amount; i++) {
      userCollection.push(
        new User(
          initialId + i,
          faker.name.firstName(),
          faker.name.lastName(),
          faker.internet.email(),
          faker.phone.phoneNumber(),
          faker.internet.userName(),
          faker.internet.password(),
          faker.address.streetAddress(),
          faker.address.state(),
          faker.address.country()
        )
      );
    }
    return userCollection;
  }
}
