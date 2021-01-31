/* eslint-disable class-methods-use-this */
import uuid from 'uuid-random';
import _ from 'lodash';
import ProjectItem from './_item';
import Element from '../../helpers/element';
import LocalStorage from '../../helpers/localStorage';
import loadProjectTasks from '../tasks/index';

class Project {
  displayAll() {
    const pContainer = new Element().get('#project-list');
    pContainer.innerHTML = '';
    LocalStorage.all().forEach(item => {
      ProjectItem(item, this.delete).appendTo(pContainer);
    });
  }

  create() {
    new Element().get('#project-form').addEventListener(('submit'), (event) => {
      const formData = new FormData(event.target);
      const data = LocalStorage.all();
      data.push({
        id: uuid(),
        name: formData.get('name'),
        description: formData.get('description'),
      });
      LocalStorage.save(data, this.display);
    });
  }

  details(id) {
    const { name, description, tasks } = LocalStorage.get(id);
    new Element().get('#project-name').innerHTML = name;
    new Element().get('#project-desc').innerHTML = description;
    loadProjectTasks(tasks);
  }

  delete({ target: { dataset: { id } } }) {
    const data = LocalStorage.all();
    _.remove(data, (project) => project.id === id);
    LocalStorage.save(data, this.display);
  }
}

export default new Project();