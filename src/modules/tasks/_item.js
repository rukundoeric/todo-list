import Element from '../../helpers/element';

export default ({ id, title, date }, DeleteTask, OpenEditTask) => {
  const container = new Element()
    .create('div')
    .class('col-lg-12 d-flex align-items-center justify-content-between task-item p-2 my-2');

  new Element().parse(`
    <div class="d-flex align-items-center">
      <span class="mx-3">${title}</span>
    </div>
  `).appendTo(container.element());

  const actionsDiv = new Element().create('div').class('d-flex align-items-center');
  new Element()
    .parse(`<span>${date}</span>`)
    .appendTo(actionsDiv.element());
  const editBtn = new Element().create('button').class('mx-2 edit');
  new Element().createText('Edit').appendTo(editBtn.element());
  const deleteBtn = new Element().create('button').class('mx-2 delete');
  new Element().createText('Delete').appendTo(deleteBtn.element());
  editBtn.element().setAttribute('data-id', id);
  editBtn.element().setAttribute('data-bs-toggle', 'modal');
  editBtn.element().setAttribute('data-bs-target', '#editModal');
  editBtn.element().addEventListener('click', OpenEditTask);
  deleteBtn.element().setAttribute('data-id', id);
  deleteBtn.element().addEventListener('click', DeleteTask);

  editBtn.appendTo(actionsDiv.element());
  deleteBtn.appendTo(actionsDiv.element());

  actionsDiv.appendTo(container.element());

  return container;
};
