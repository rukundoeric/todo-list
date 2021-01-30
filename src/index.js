/* eslint-disable no-unused-vars */
/* eslint-disable no-restricted-globals */

import queryString from 'query-string';
import {
  ListProjects,
  CreateNewProject,
} from './modules/project/index';
import {
  CreateNewTask,
  ProjectDetails,
  UpdateTask,
} from './modules/tasks/index';

const { project } = queryString.parse(location.search);

if (project) {
  ProjectDetails(project);
  CreateNewTask(project);
  UpdateTask(project);
} else {
  ListProjects();
  CreateNewProject();
}