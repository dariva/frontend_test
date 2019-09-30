export class Response {
    public candidates: {};
    public status: string;
    public results: [{
        "geometry": {
            "location": {
                "lat": number,
                "lng": number
            }
        }
    }]
}
