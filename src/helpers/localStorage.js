class LocalStorage {
  constructor() {
    const projectList = [
      {
        id: '35365',
        name: 'Project name',
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
          {
            title: 'How to create USER',
            dueDate: '23/12/2020',
          },
        ],
      },
    ];
    // this.all_list = localStorage.getItem('todo-app');
    this.all_list = JSON.stringify(projectList);
  }

  all() {
    return JSON.parse(this.all_list);
  }

  save(data) {
    localStorage.setItem('todo-app', data);
    return this;
  }

  get(id) {
    const data = JSON.parse(this.all_list);
    return data.find((obj) => obj.id === id);
  }
}

export default new LocalStorage();