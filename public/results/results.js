getData();
    async function getData() {
      const response = await fetch('/api');
      const data = await response.json();

      for (item of data) {
        const root = document.createElement('div');
        const figurine = document.createElement('div');
        const color = document.createElement('div');
        const location = document.createElement('div');
        const city = document.createElement('div');
        const date = document.createElement('div');
        const image = document.createElement('img');

        root.classList.add('list-item');
        figurine.classList.add('item-figurine');
        color.classList.add('item-color');
        date.classList.add('item-date');
        location.classList.add('item-location');
        city.classList.add('item-location');
        figurine.textContent = `Figurine: ${item.figurine}`;
        color.textContent = `Color: ${item.color}`;
        location.textContent = `Location: ${item.location}`;;
        city.textContent = `City: ${item.city}`;;
        const dateString = new Date(item.timestamp).toLocaleString();
        date.textContent = `Date: ${dateString}`;
        image.src = item.image64;

        root.append(figurine, color, location, city, date, image);
        document.querySelector('.results-list').append(root);
      }
      console.log(data);
    }