const spawnButton = document.getElementById('spawnButton');
const container = document.getElementById('container');

spawnButton.addEventListener('click', async () => {
	// Fetch the content of the separate HTML file
	const response = await fetch('contenteditable.html');
	const html = await response.text();

	// Create a new div element
	const newComponent = document.createElement('div');
	newComponent.className = 'grid-item';

	// Set the inner HTML of the new div element to the fetched content
	newComponent.innerHTML = html;

	// Append the new component to the container
	container.appendChild(newComponent);
	console.log('processing done');
});
