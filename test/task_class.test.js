import { CreateTaskFunc, UpdateTaskFunc, DeleteTask } from '../src/modules/tasks/index';

test('Task: Create New Task', () => {
  const res = CreateTaskFunc('35365', { target: document.createElement('form') });
  expect(res).toBeDefined();
  expect(res.status).toBe('created');
});

test('Task: Update Task', () => {
  const res = UpdateTaskFunc('35365', { target: document.createElement('form') });
  expect(res).toBeDefined();
  expect(res.status).toBe('updated');
});

test('Task: Delete Task', () => {
  const res = DeleteTask({ target: { dataset: { id: '4544546g46' } } });
  expect(res).toBeDefined();
  expect(res.status).toBe('deleted');
});
