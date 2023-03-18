import { faker } from '@faker-js/faker';
import { Mappable } from './interfaces/Mappable';

export class User implements Mappable {
    name: string;
    location: {
        lat: number;
        lng: number;
    };

    constructor() {
        this.name = faker.name.fullName();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        }
    }

    getMarkerContent(): string {
        return `Username: ${this.name}`;
    }
}