export default class Questions {
  static async list() {
    const res = await Promise.resolve([
      {
        id: '1',
        description: '¿Qué te gustaria conseguir?',
      },
      {
        id: '2',
        description: '¿Cuáles son tus objetivos?',
      },
      {
        id: '3',
        description: '¿En cuanto tiempo?',
      },
      {
        id: '4',
        description: '¿Como te visualizas?',
      },
      {
        id: '5',
        description: '¿Que sueñas?',
      },
    ]);
    return res; 
  }
}