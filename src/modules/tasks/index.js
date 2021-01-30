/* eslint-disable no-use-before-define */
/* eslint-disable no-restricted-globals */
import _ from 'lodash';
import uuid from 'uuid-random';
import queryString from 'query-string';
import $ from 'jquery';
import TaskItem from './_item';
import Element from '../../helpers/element';
import LocalStorage from '../../helpers/localStorage';


const OpenEditTask = ({ target: { dataset: { id } } }) => {
  const { project } = queryString.parse(location.search);
  const { tasks } = LocalStorage.get(project);
  const item = tasks.find((obj) => obj.id === id);
  const form = new Element().get('#task-edit-form');
  form.elements.id.value = item.id;
  form.elements.title.value = item.title;
  form.elements.date.value = item.date;
};

const DeleteTask = ({ target: { dataset: { id } } }) => {
  const { project } = queryString.parse(location.search);
  let data = LocalStorage.all();
  const Item = LocalStorage.get(project);
  _.remove(Item.tasks, (task) => task.id === id);
  data = _(data).keyBy('id').set(Item.id, Item).values()
    .value();
  LocalStorage.save(data);
  ProjectDetails(project);
};

const loadProjectTasks = (tasks) => {
  const pTasks = new Element().get('#project-tasks');
  pTasks.innerHTML = '';
  if (tasks) {
    tasks.forEach(item => {
      TaskItem(item, DeleteTask, OpenEditTask).appendTo(pTasks);
    });
  }
};

export const ProjectDetails = (id) => {
  const { name, description, tasks } = LocalStorage.get(id);
  new Element().get('#project-name').innerHTML = name;
  new Element().get('#project-desc').innerHTML = description;
  loadProjectTasks(tasks);
};

export const UpdateTask = (project) => {
  new Element().get('#task-edit-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    let data = LocalStorage.all();
    const Item = LocalStorage.get(project);
    let tasks = Item.tasks || [];
    const task = {
      id: formData.get('id'),
      title: formData.get('title'),
      date: formData.get('date'),
    };
    tasks = _(tasks).keyBy('id').set(task.id, task).values()
      .value();
    Item.tasks = tasks;
    data = _(data).keyBy('id').set(project, Item).values()
      .value();
    LocalStorage.save(data);
    ProjectDetails(project);
    $('.btn-close').click();
  });
};

export const CreateNewTask = (project) => {
  new Element().get('#task-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    let data = LocalStorage.all();
    const Item = LocalStorage.get(project);
    const tasks = Item.tasks || [];
    tasks.push({
      id: uuid(),
      title: formData.get('title'),
      date: formData.get('date'),
    });
    Item.tasks = tasks;
    data = _(data).keyBy('id').set(project, Item).values()
      .value();
    LocalStorage.save(data);
    ProjectDetails(project);
    $('.btn-close').click();
  });
};

export default loadProjectTasks;