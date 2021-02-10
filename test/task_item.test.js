import Item from '../src/modules/project/_item';
import { DeleteTask, OpenEditTask } from '../src/modules/tasks/index';

test('Project Item', () => {
  const item1 = { id: 1, title: 'fefef', date: new Date() };
  const res = Item(item1, DeleteTask, OpenEditTask);
  expect(typeof res).toBe('object');
  expect(res.elm).toBeDefined();
});