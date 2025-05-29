function openPopup() {
  document.getElementById('overlay').style.display = 'flex';
}

function closePopup() {
  document.getElementById('overlay').style.display = 'none';
}

// Generate a random NFT item
function generateNFTItem() {
  const keywords = ['nft', 'art', 'crypto', 'collectible', 'digital'];
  const keyword = keywords[Math.floor(Math.random() * keywords.length)];
  const imageUrl =  `https://picsum.photos/300/300?random=${Math.floor(Math.random() * 1000)}`;
  const ownerId = 'ID' + Math.floor(Math.random() * 10000);
  const price = (Math.random() * 2).toFixed(2);

  const item = document.createElement('div');
  item.classList.add('item');
  item.innerHTML = `
    <img src="${imageUrl}" alt="NFT" />
    <h2>"${keyword.toUpperCase()}"</h2>
    <p>Owner: ${ownerId}</p>
    <p class="price">${price} ETH</p>
    <button onclick="openPopup()">Buy Now</button>
  `;
  return item;
}

// Load more items on scroll
let loading = false;
function loadMoreItems() {
  if (loading) return;
  loading = true;

  const grid = document.getElementById('item-grid');
  for (let i = 0; i < 8; i++) {
    const nftItem = generateNFTItem();
    grid.appendChild(nftItem);
  }

  loading = false;
}

window.addEventListener('scroll', () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 500) {
    loadMoreItems();
  }
});

document.addEventListener('DOMContentLoaded', () => {
  loadMoreItems();
});
