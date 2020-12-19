export default class Questions {
  static async list() {
    const res = await Promise.resolve([
      {
        description: '¿Qué te gustaria conseguir?',
        component: 'option_multiple'
      }
    ]);
    return res; 
  }
}