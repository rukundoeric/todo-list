import TaskItem from './_item';
import Element from '../../helpers/element';

const loadProjectTasks = (tasks) => {
  const pTasks = new Element().get('#project-tasks');
  tasks.forEach(item => {
    new Element().parse(TaskItem(item)).appentTo(pTasks);
  });
};

export default loadProjectTasks;