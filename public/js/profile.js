const newFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#post-title').value.trim();
  const price = document.querySelector('#selling-price').value.trim();
  const brand = document.querySelector('#bike-brand').value.trim();
  const color = document.querySelector('#bike-color').value.trim();
  const frame_size = document.querySelector('#frame-size').value.trim();
  const wheel_size = document.querySelector('#wheel-size').value.trim();
  const condition = document.querySelector('#bike-condition').value.trim();
  const zipcode = document.querySelector('#zipcode').value.trim();
  const type = document.querySelector('#bike-type').value.trim();
  const description = document.querySelector('#post-desc').value.trim();

  if (title && price && brand && color && frame_size && wheel_size && condition && zipcode && type && description) {
    const response = await fetch('/api/bicycles', {
      method: 'POST',
      body: JSON.stringify({ title, type, brand, description, frame_size, wheel_size, color, condition, price, zipcode }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert(response.statusText);
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/bicycles/${id}`, {
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
