import L from "leaflet";

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
}