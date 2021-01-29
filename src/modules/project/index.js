import ProjectItem from './_item';
import Element from '../../helpers/element';
import LocalStorage from '../../helpers/localStorage';
import loadProjectTasks from '../tasks/index';

export const ListProjects = () => {
  const pContainer = new Element().get('#project-list');
  pContainer.innerHTML = '';
  LocalStorage.all().forEach(item => {
    new Element().parse(ProjectItem(item)).appentTo(pContainer);
  });
};

export const ProjectDetails = (id) => {
  const { name, description, tasks } = LocalStorage.get(id);
  new Element().get('#project-name').innerHTML = name;
  new Element().get('#project-desc').innerHTML = description;
  loadProjectTasks(tasks);
};
