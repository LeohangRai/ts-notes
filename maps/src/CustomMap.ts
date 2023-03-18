import L from "leaflet";
import { Mappable } from "./interfaces/Mappable";

export class CustomMap {
    private map: L.Map;

    constructor(divId: string) {
        this.map = new L.Map(divId, {
            center: {
                lat: 0,
                lng: 0
            },
            zoom: 1
        });
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19
        }).addTo(this.map);
    }

    addMarker(mappable: Mappable): void {
        const marker = new L.Marker({
            lat: mappable.location.lat,
            lng: mappable.location.lng
        })
        marker.addTo(this.map);
    }
}