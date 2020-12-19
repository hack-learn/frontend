import axios from 'axios';
const api = process.env.REACT_APP_API_URI;
console.log(`${api}users`);
export default class Students {
  
  static async list () {
    const res = await Promise.resolve([{
      first_name: 'Francisco',
      last_name: 'Hidalgo',
      email: 'gus@mail.com',
      objetivo: 'Frontend developer'
    }]);
    return res;
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
    console.log(data);
    axios({
      uri: `${api}users`,
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      data
    }).then((res) => {
      console.log(res.data)
    })
    //console.log(res.data);
    //return res;
  }

}