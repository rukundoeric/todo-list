class LocalStorage {
  constructor() {
    const sample = {
      id: '35365',
      name: 'sample',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, architecto.',
      tasks: [
        {
          title: 'How to create USER',
          dueDate: '23/12/2020',
        },
        {
          title: 'How to create USER',
          dueDate: '23/12/2020',
        },
      ],
    };
    const lStorage = localStorage.getItem('todo-app');
    this.all_list = JSON.parse(lStorage) || [{ ...sample }];
  }

  all() {
    return this.all_list;
  }

  save(data, callback) {
    localStorage.setItem('todo-app', JSON.stringify(data));
    if (callback) { callback(); }
    return this;
  }

  get(id) {
    return this.all_list.find((obj) => obj.id === id);
  }
}

export default new LocalStorage();