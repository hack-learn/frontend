export default class Questions {
  static async list() {
    const res = await Promise.resolve([
      {
        id: '1',
        description: '¿Qué te gustaria conseguir?',
        category: 'soft',
        options: false,
      },
      {
        id: '2',
        description: '¿Cuáles son tus objetivos?',
        category: 'soft',
        options: false,
      },
      {
        id: '3',
        description: '¿En cuanto tiempo?',
        category: 'soft',
        options: false,
      },
      {
        id: '4',
        description: '¿Como te visualizas?',
        category: 'soft',
        options: false,
      },
      {
        id: '5',
        description: '¿Que sueñas?',
        category: 'soft',
        options: false
      },
      {
        id: '6',
        description: '¿Qué te gustaria conseguir?',
        category: 'frontend',
        options: ['option 1', 'option 2', 'option 3']
      },
      {
        id: '7',
        description: '¿Cuáles son tus objetivos?',
        category: 'frontend',
        options: ['option 1', 'option 2', 'option 3']
      },
      {
        id: '8',
        description: '¿En cuanto tiempo?',
        category: 'frontend',
        options: ['option 1', 'option 2', 'option 3']
      },
      {
        id: '9',
        description: '¿Como te visualizas?',
        category: 'frontend',
        options: ['option 1', 'option 2', 'option 3']
      },
      {
        id: '10',
        description: '¿Que sueñas?',
        category: 'frontend',
        options: ['option 1', 'option 2', 'option 3']
      },
      {
        id: '11',
        description: '¿Qué te gustaria conseguir?',
        category: 'backend',
        options: ['option 1', 'option 2', 'option 3']
      },
      {
        id: '12',
        description: '¿Cuáles son tus objetivos?',
        category: 'backend',
        options: ['option 1', 'option 2', 'option 3']
      },
      {
        id: '13',
        description: '¿En cuanto tiempo?',
        category: 'backend',
        options: ['option 1', 'option 2', 'option 3']
      },
      {
        id: '14',
        description: '¿Como te visualizas?',
        category: 'backend',
        options: ['option 1', 'option 2', 'option 3']
      },
      {
        id: '15',
        description: '¿Que sueñas?',
        category: 'backend',
        options: ['option 1', 'option 2', 'option 3']
      },
    ]);
    return res; 
  }
}