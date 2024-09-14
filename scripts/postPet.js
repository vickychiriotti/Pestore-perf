import { check, sleep } from 'k6';
import http from 'k6/http';

export let options = {
    stages: [
        { duration: '30s', target: 5 },
        { duration: '1m', target: 5 },
        { duration: '30s', target: 0 },
    ],
};

export default function () {
    let postPayload = JSON.stringify({
        "id": 10,
        "name": "doggie",
        "category": {
            "id": 1,
            "name": "Dogs"
        },
        "photoUrls": [
            "string"
        ],
        "tags": [
            {
                "id": 0,
                "name": "string"
            }
        ],
        "status": "available"
    });


    let postParams = { headers: { 'Content-Type': 'application/json' } };
    let postRes = http.post('https://petstore3.swagger.io/api/v3/pet', postPayload, postParams);
    check(postRes, {
        'POST status is 200': (r) => r.status === 200,
    });

    sleep(1); // Pausa por 1 segundo entre solicitudes
}
