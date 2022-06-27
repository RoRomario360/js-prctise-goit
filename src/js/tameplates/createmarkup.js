const container = document.querySelector('.container');

export default function createMarkup(arr) {
  if (arr.length > 1) {
    console.log('Stop Bro!');
    return;
  }
  const markup = `
  <div>
  <img src="https://lumiere-a.akamaihd.net/v1/images/og-generic_02031d2b.png?region=0%2C0%2C1200%2C1200" width='100',/>
  <p>${arr[0].name}</p>
  <p>${arr[0].height}</p>
  <p>${arr[0].mass}</p>
</div>`;
  container.innerHTML = markup;
}
