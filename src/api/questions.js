export default class Questions {
  static async list() {
    const res = await Promise.resolve([
      {
        description: '¿Qué te gustaria conseguir?',
      },
      {
        description: '¿Cuáles son tus objetivos?',
      },
      {
        description: '¿En cuanto tiempo?',
      },
      {
        description: '¿Como te visualizas?',
      },
      {
        description: '¿Que sueñas?',
      },
    ]);
    return res; 
  }
}