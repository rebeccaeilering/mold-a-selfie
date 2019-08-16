function setup() {
  noCanvas();
  const video = createCapture(VIDEO);
  const camDiv = document.querySelector('.cam');
  const videoDiv = document.querySelector('video');
  camDiv.appendChild(videoDiv);
  video.size(420, 315);

  // let lat, lon;
  const button = document.getElementById('submit');
  button.addEventListener('click', async event => {
    const figurine = document.getElementById('figurine').value;
    const color = document.getElementById('color').value;
    const location = document.getElementById('location').value;
    const city = document.getElementById('city').value;
    video.loadPixels();
    const image64 = video.canvas.toDataURL();
    const data = {
      location,
      city,
      color,
      figurine,
      image64
    };
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    };
    const response = await fetch('/api', options);
    const json = await response.json();
    console.log(json);
  });
  // if ('geolocation' in navigator) {
  //   console.log('geolocation available');
  //   navigator.geolocation.getCurrentPosition(async position => {
  //     lat = position.coords.latitude;
  //     lon = position.coords.longitude;
  //     document.getElementById('latitude').textContent = lat;
  //     document.getElementById('longitude').textContent = lon;
  //   });
  // } else {
  //   console.log('geolocation not available');
  // }
}