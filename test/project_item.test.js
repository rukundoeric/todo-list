import Item from '../src/modules/project/_item';
import { DeleteProject } from '../src/modules/project/index';

test('Project Item', () => {
  const item1 = { id: 1, name: 'fefef', description: '3fdfd' };
  const res = Item(item1, DeleteProject);
  expect(typeof res).toBe('object');
  expect(res.elm).toBeDefined();
});