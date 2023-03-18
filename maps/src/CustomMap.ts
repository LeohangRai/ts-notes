import L from "leaflet";
import { User } from "./User";
import { Company } from "./Company";

export class CustomMap {
    private map: L.Map;

    constructor(divId: string) {
        this.map = new L.Map(divId, {
            center: {
                lat: 27.7172,
                lng: 85.3240
            },
            zoom: 3
        });
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19
        }).addTo(this.map);
    }

    addMarker(mappable: User | Company): void {
        const marker = new L.Marker({
            lat: mappable.location.lat,
            lng: mappable.location.lng
        })
        marker.addTo(this.map);
    }
}