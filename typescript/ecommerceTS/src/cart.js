let cart = []; 
const API_URL = "http://localhost:3000/books"; // Replace with your actual API URL

// Fetch book data from API
const fetchData = async () => {
  try {
    const response = await fetch(API_URL);
    const bookData = await response.json();
    sortBooks(bookData); // Sort books based on selected filter criteria
  } catch (error) {
    console.error("Error fetching data:", error.message);
  }
};
fetchData();

// Add book to the cart
const addToCart = (bookId, bookTitle, bookPrice) => {
  const bookInCart = cart.find((book) =>String(book.id) === String(bookId));
  if (bookInCart) {
    bookInCart.quantity += 1;
  } else {
    cart.push({ id: bookId, title: bookTitle, price: bookPrice, quantity: 1 });
  }
  updateCart();
};

// Remove one unit of a book from the cart
const removeFromCart = (bookId) => {
  const bookInCart = cart.find((book) =>String(book.id) === String(bookId));
  if (bookInCart) {
    if (bookInCart.quantity > 1) {
      bookInCart.quantity -= 1;
    } else {
      cart = cart.filter((book) => book.id !== bookId);
    }
  }
  updateCart();
};

// Completely delete a book from the cart
const deleteFromCart = (bookId) => {
  cart = cart.filter((book) => String(book.id) !== String(bookId));
  updateCart();
};

// Update cart items and total price
const updateCart = () => {
  const cartButton = document.getElementById("items-in-cart");
  const cartItemsDiv = document.getElementById("cart-items");

  const totalItems = cart.reduce((total, book) => total + book.quantity, 0);
  cartButton.innerHTML = totalItems;

  if (totalItems === 0) {
    cartItemsDiv.innerHTML = "<p>Your cart is empty.</p>";
  } else {
    cartItemsDiv.innerHTML = cart
      .map(
        (book) =>
          `<div>
            <p>${book.title} - $${book.price} : <span id="quantity-${book.id}">${book.quantity}</span></p>
            <button onclick="addToCart(${book.id}, '${book.title}', ${book.price})">Add</button>
            <button onclick="removeFromCart(${book.id})">Remove</button>
            <button onclick="deleteFromCart(${book.id})">Delete</button>
          </div>`
      )
      .join("");
  }

  const totalPrice = cart.reduce((total, book) => total + book.price * book.quantity, 0);
  document.getElementById("total-price").innerText = totalPrice.toFixed(2); // Display total price
};

// Modal to display cart items
const modal = document.getElementById("myModal");
const btn = document.getElementById("myBtn");
const span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};

// Close modal when clicking outside
window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

// Purchase button listener to add items to the cart
document.addEventListener("click", (e) => {
  if (e.target && e.target.classList.contains("purchase-btn")) {
    const bookId = e.target.getAttribute("data-id");
    const bookTitle = e.target.getAttribute("data-title");
    const bookPrice = parseFloat(e.target.getAttribute("data-price"));
    addToCart(bookId, bookTitle, bookPrice); 
  }
});

// Sorting and filtering books based on selected criteria
const sortBooks = (data) => {
  const filterOption = document.getElementById("sort-year-or-pages");
  const genreFilter = document.getElementById("genre");
  const sortOrder = document.getElementById("sort-order");

  const updateBooks = () => {
    const selectedSort = filterOption.value;
    const selectedGenre = genreFilter.value;
    const selectedOrder = sortOrder.value;

    let filteredBooks = [...data];

    if (selectedGenre !== "All" && selectedGenre) {
      filteredBooks = filteredBooks.filter((book) => book.genre === selectedGenre);
    }

    filteredBooks = filteredBooks.sort((book1, book2) => {
      let comparison = 0;

      if (selectedSort === "Pages") {
        comparison = book1.pages - book2.pages;
      } else if (selectedSort === "Years") {
        comparison = book1.year - book2.year;
      }

      if (selectedOrder === "Descending") {
        comparison = -comparison;
      }

      return comparison;
    });

    document.querySelector(".data").innerHTML = filteredBooks
      .map(
        (book) =>
          `<p>📖 ${book.title} by ${book.author} - ${book.genre} (${book.pages} pages) - ${book.year}
          <img src="${book.image}">
          <button class="purchase-btn" data-id="${book.id}" data-title="${book.title}" data-price="${book.price}">Purchase</button></p>`
      )
      .join("");
  };

  updateBooks();

  filterOption.addEventListener("change", updateBooks);
  genreFilter.addEventListener("change", updateBooks);
  sortOrder.addEventListener("change", updateBooks);
};







