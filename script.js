document.addEventListener('DOMContentLoaded', () => {
  const submitButton = document.getElementById('submit');
  const bookList = document.getElementById('book-list');

  submitButton.addEventListener('click', () => {
    // Get input values
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;

    // Check if all fields are filled
    if (title && author && isbn) {
      // Create a new table row
      const newRow = document.createElement('tr');

      // Create cells for the title, author, and ISBN
      const titleCell = document.createElement('td');
      titleCell.textContent = title;
      const authorCell = document.createElement('td');
      authorCell.textContent = author;
      const isbnCell = document.createElement('td');
      isbnCell.textContent = isbn;

      // Create the "Clear" button cell
      const actionCell = document.createElement('td');
      const clearButton = document.createElement('button');
      clearButton.classList.add('btn', 'btn-danger', 'delete');
      clearButton.textContent = 'Clear';

      // Attach event listener to "Clear" button
      clearButton.addEventListener('click', () => {
        // Remove the row from the table
        newRow.remove();
      });

      // Append the cells to the new row
      actionCell.appendChild(clearButton);
      newRow.appendChild(titleCell);
      newRow.appendChild(authorCell);
      newRow.appendChild(isbnCell);
      newRow.appendChild(actionCell);

      // Append the new row to the table body
      bookList.appendChild(newRow);

      // Clear the input fields after adding the row
      document.getElementById('title').value = '';
      document.getElementById('author').value = '';
      document.getElementById('isbn').value = '';
    } else {
      alert('Please fill in all fields');
    }
  });
});
