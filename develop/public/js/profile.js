const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#project-name').value.trim();
  const title = document.querySelector('#title').value.trim();
  const price = document.querySelector('#price').value.trim();
  const brand = document.querySelector('#brand').value.trim();
  const color = document.querySelector('#color').value.trim();
  const frame_size = document.querySelector('#frame_size').value.trim();
  const wheel_size = document.querySelector('wheels_size').value.trim();
  const condition = document.querySelector('#condition').value.trim();
  const zipcode = document.querySelector('#zipcode').value.trim();



  // const needed_funding = document.querySelector('#project-funding').value.trim();
  // const description = document.querySelector('#project-desc').value.trim();

//   if (name && needed_funding && description) {
//     const response = await fetch(`/api/projects`, {
//       method: 'POST',
//       body: JSON.stringify({ name, needed_funding, description }),
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });

//     if (response.ok) {
//       document.location.replace('/profile');
//     } else {
//       alert('Failed to create project');
//     }
//   }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/bicycle/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete bicycle');
    }
  }
};

document
  .querySelector('.new-bicycle-form')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('.bicycle-list')
  .addEventListener('click', delButtonHandler);
