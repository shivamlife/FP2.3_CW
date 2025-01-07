const books = [
  { id: 1, title: 'Book1', price: '$9.99', isFree: false },
  { id: 2, title: 'Book2', price: '$0.00', isFree: true },
  { id: 3, title: 'Book3', price: '$0.00', isFree: false },
  { id: 4, title: 'Book4', price: '$0.00', isFree: true },
];
const freeBooksCheckbox = document.getElementById('freeBooksCheckbox');
const booksContainer = document.getElementById('booksContainer');
function showBooks(isChecked) {
  const filteredBooks = isChecked ? books.filter((book) => book.isFree) : books;
  const booksHtml = filteredBooks.map(
    (book) =>
      `<strong>Id:</strong> ${book.id} <br>
<strong>Title:</strong> ${book.title} <br>
<strong>Price:</strong> ${book.price} <br>
<hr>
`
  );
  booksContainer.innerHTML = booksHtml.join('');
}
showBooks(false);
freeBooksCheckbox.addEventListener('change', () => {
  showBooks(freeBooksCheckbox.checked);
});
