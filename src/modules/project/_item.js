export default ({ id, name, description }) => `<div class="col-lg-12 item py-4 px-3 my-3">
        <h3>${name}</h3>
        <p>${description}</p>
        <a href="./pages/project.html?project=${id}" class="py-2 px-3">View Tasks</a>
      </div>`;
