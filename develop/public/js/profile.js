const newFormHandler = async (event) => {
  event.preventDefault();

  console.log('!!!!test!!!!')
  const title = document.querySelector('#post-title').value.trim();
  const price = document.querySelector('#selling-price').value.trim();
  const brand = document.querySelector('#bike-brand').value.trim();
  const color = document.querySelector('#bike-color').value.trim();
  const frame_size = document.querySelector('#frame-size').value.trim();
  const wheel_size = document.querySelector('#wheel-size').value.trim();
  const condition = document.querySelector('#bike-condition').value.trim();
  const zipcode = document.querySelector('#zipcode').value.trim();
  const biketype = document.querySelector('#bike-type').value.trim();
  const description = document.querySelector('#post-desc').value.trim();

  if (title && price && brand && color && frame_size && wheel_size && condition && zipcode && biketype && description) {
   console.log('test')
    const response = await fetch('/api/bicycles', {
      method: 'POST',
      body: JSON.stringify({ title, biketype, brand, description, frame_size, wheel_size, color, condition, price, zipcode }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert(response.statusText);
    }
  }
};



  // const needed_funding = document.querySelector('#project-funding').value.trim();
  // const description = document.querySelector('#project-desc').value.trim();
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
//};

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
