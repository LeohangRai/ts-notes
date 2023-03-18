import { faker } from "@faker-js/faker";
import { Mappable } from "./interfaces/Mappable";

export class Company implements Mappable {
    name: string;
    catchPhrase: string;
    location: {
        lat: number;
        lng: number;
    }
    
    constructor() {
        this.name = faker.company.name();
        this.catchPhrase = faker.company.catchPhrase();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        }
    }

    getMarkerContent(): string {
        return `
        <div>
            <h3>Company Name: ${this.name}</h3>
            <h5>Catchphrase: ${this.catchPhrase}</h5>
        </div>
        `;
    }
}
