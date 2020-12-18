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
    const res = await Promise.resolve(data);
    return res;
  }

}