import axios from 'axios';
const port = require('../../config').port;

export function loadPhonewords(numbers) {
  return {
    type: "PHONEWORDS",
    payload: axios.get(`http://localhost:${port}/phonewords/${numbers}`)
  }
}