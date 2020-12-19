import axios from 'axios';
import Cookies from "js-cookie";

axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.xsrfCookieName = "csrftoken";

const api = process.env.REACT_APP_API_URI;
console.log(`${api}/users`);
export default class Students {
  
  static async list () {
    const res = await axios.get(`${api}/users/?format=json`);
    console.log(res);
    /*const res = await Promise.resolve([{
      first_name: 'Francisco',
      last_name: 'Hidalgo',
      email: 'gus@mail.com',
      objetivo: 'Frontend developer'
    }]);*/
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
    const res = await axios.post(`${api}/users/`, data, {
      headers: {
        "Content-Type": "application/json",
        // "X-CSRFToken": Cookies.get('csrftoken'),
      }
    });
    /* ({
      uri: ,
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      data
    }).then((res) => {
      console.log(res.data)
    })*/
    //console.log(res.data);
    return res;
  }

}