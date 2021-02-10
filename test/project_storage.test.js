/* eslint-disable no-console */
import project from '../src/modules/project/_project';
import storage from '../src/helpers/localStorage';

test('Project: contructor', () => {
  expect(project).toBeDefined();
  expect(typeof project).toBe('object');
});

test('Project Storage: contructor', () => {
  expect(storage).toBeDefined();
  expect(typeof storage).toBe('object');
  expect(storage.all_list).toBeDefined();
  expect(typeof storage.all_list).toBe('object');
  expect(storage.all_list[0].id).toBe('35365');
  expect(storage.all_list[0].name).toBe('sample');
  expect(storage.all_list[0].description).toBe('Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, architecto.');
  expect(storage.all_list[0].tasks).toBeDefined();
  expect(typeof storage.all_list[0].tasks).toBe('object');
  expect(storage.all_list[0].tasks.length).toBe(2);
});

test('Project Storage: all', () => {
  const res = storage.all();
  expect(res).toBeDefined();
  expect(typeof res).toBe('object');
});

test('Project Storage: save', () => {
  const res = storage
    .save({ id: 'fefef', name: 'ssdsd' },
      () => {});
  expect(res).toBeDefined();
  expect(typeof res).toBe('object');
});

test('Project Storage: get', () => {
  const res = storage.get('35365');
  expect(res).toBeDefined();
  expect(typeof res).toBe('object');
  expect(res.id).toBe('35365');
  expect(res.name).toBe('sample');
  expect(res.description).toBe('Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, architecto.');
  expect(res.tasks).toBeDefined();
  expect(typeof res.tasks).toBe('object');
  expect(res.tasks.length).toBe(2);
});