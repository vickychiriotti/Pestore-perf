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

    let getRes = http.get('https://petstore3.swagger.io/api/v3/pet/1');
    check(getRes, {
        'GET status is 200': (r) => r.status === 200,
    });

    sleep(1);
}