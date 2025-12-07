// --- COLLECTIONS PAGE SEARCH AND FILTER LOGIC ---

// Function to handle product search
function searchProducts() {
    // Get the search term and convert to lowercase for case-insensitive search
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    
    // Call filterProducts to apply search criteria along with the current category filter
    filterProducts(searchTerm);
}

// Function to handle product filtering by category
function filterProducts(searchTerm = null) {
    // If searchTerm is not passed, fetch it from the input field
    if (searchTerm === null) {
        searchTerm = document.getElementById('searchInput').value.toLowerCase();
    }
    
    const selectedCategory = document.getElementById('filterSelect').value;
    const products = document.querySelectorAll('.product-card');

    products.forEach(product => {
        const productCategory = product.getAttribute('data-category');
        // Get the product name defined in the 'data-name' attribute
        const productName = product.getAttribute('data-name').toLowerCase(); 
        
        // Check if the product matches the selected category OR if 'all' is selected
        const matchesCategory = (selectedCategory === 'all' || productCategory === selectedCategory);
        
        // Check if the product name includes the search term
        const matchesSearch = (productName.includes(searchTerm));

        // Display product only if it matches BOTH the category filter AND the search term.
        if (matchesCategory && matchesSearch) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}