export class Place {
    public formatted_address: string;
    public name: string;
    public status: string;
    public geometry: {
        "location": {
            "lat": number;
            "lng": number;
        }
    }
    public search: string;
}
