const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#project-name').value.trim();
  // Define consts for all listing fields - title, type, color, size, etc

  // if all fields have a value, create a POST method to the server

//   if (name && needed_funding && description) {
//     const response = await fetch(`/api/projects`, {
//       method: 'POST',
//       body: JSON.stringify({ name, needed_funding, description }),
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });

  //if response is ok, reload the profile page  

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
