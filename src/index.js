/* eslint-disable no-unused-vars */
/* eslint-disable no-restricted-globals */

import queryString from 'query-string';
import {
  ListProjects,
  ProjectDetails,
  CreateNewProject
} from './modules/project/index';


const { project } = queryString.parse(location.search);

if (project) {
  ProjectDetails(project);
} else {
  ListProjects();
  CreateNewProject();
}