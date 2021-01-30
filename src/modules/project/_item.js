import Element from '../../helpers/element';

export default ({ id, name, description }, DeleteProject) => {
  const container = new Element().create('div').class('col-lg-12 item py-4 px-3 my-3');
  new Element().parse(`<h3>${name}</h3>`).appendTo(container.element());
  new Element().parse(`<p>${description}</p>`).appendTo(container.element());
  const actionsDiv = new Element().create('div').class('d-flex justify-content-between');
  new Element()
    .parse(`<div><a href="./pages/project.html?project=${id}" class="py-2 px-3">View Tasks</a></div>`)
    .appendTo(actionsDiv.element());
  const actionBtns = new Element().create('div').class('action-btns');
  const deleteBtn = new Element().create('button').class('mx-2 delete');
  new Element().createText('Delete').appendTo(deleteBtn.element());
  deleteBtn.element().setAttribute('data-id', id);
  deleteBtn.element().addEventListener('click', DeleteProject);

  deleteBtn.appendTo(actionBtns.element());
  actionBtns.appendTo(actionsDiv.element());
  actionsDiv.appendTo(container.element());

  return container;
};
