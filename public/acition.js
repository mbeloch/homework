import axios from 'axios';

export function loadPhonewords(numbers) {
  return {
    type: "PHONEWORDS",
    payload: axios.get('http://localhost:3000/phonewords/' + numbers)
  }
}