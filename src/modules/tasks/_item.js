export default ({ title, dueDate }) => `
<div class="col-lg-12 d-flex align-items-center justify-content-between task-item p-2 my-2">
  <div class="d-flex align-items-center">
    <input type="checkbox" />
    <span class="mx-3">${title}</span>

  </div>
  <div class="d-flex align-items-center">
    <span>${dueDate}</span>
    <a href="" class="mx-2">Edit</a>
    <a href="" class="mx-2">Delete</a>
  </div>
</div>`;