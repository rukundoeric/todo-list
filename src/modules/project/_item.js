import Element from '../../helpers/element';

// export default ({ id, name, description }) => `
//       <div class="col-lg-12 item py-4 px-3 my-3">
//         <h3>${name}</h3>
//         <p>${description}</p>
//         <div class="d-flex justify-content-between">
//           <div><a href="./pages/project.html?project=${id}" class="py-2 px-3">View Tasks</a></div>
//           <div class="action-btns">
//             <button class="mx-2 edit">Edit</button>
//             <button class="mx-2 delete" onclick="deleteProject(${id})">Delete</button>
//           </div>
//         </div>
//       </div>`;

export default ({ id, name, description }) => {
  const container = new Element().create('div').class('col-lg-12 item py-4 px-3 my-3');
  new Element().parse(`<h3>${name}</h3>`).appentTo(container.element());
  new Element().parse(`<p>${description}</p>`).appentTo(container.element());
  const actions = new Element().create('div').class('d-flex justify-content-between');
  new Element()
    .parse(`<div><a href="./pages/project.html?project=${id}" class="py-2 px-3">View Tasks</a></div>`)
    .appentTo(actions.element());
};
