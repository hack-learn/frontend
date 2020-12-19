import axios from 'axios';
import Cookies from "js-cookie";

axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.xsrfCookieName = "csrftoken";

const api = process.env.REACT_APP_API_URI;
console.log(`${api}users`);
export default class Students {
  
  static async list () {
    const res = await axios.get(`${api}/users/?format=json`);
    console.log(res);
    return res.data;
  }

  /**
   * 
   * @param {{
   *  first_name: string,
   *  email: string,
   *  linkedin: string,
   *  github: string,
   *  country: string,
   *  city: string,
   *  specialty: string,
   *  english_level: string,
   *  occupation: string
   * }} data 
   */
  static async create (data) {
    console.log('COOKIE', Cookies.get('csrftoken'));
    const res = await axios.post(`${api}/users?format=json`, data, {
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": Cookies.get('csrftoken'),
      }
    });
    return res;
  }

}