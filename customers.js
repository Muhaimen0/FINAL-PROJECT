// Function to open the modal when the delete button is clicked
function openModal(customerId) {
    const modal = document.getElementById("myModal");
    modal.style.display = "block";
    document.getElementById("confirmDelete").setAttribute("data-customer-id", customerId); // Set customerId to the confirm button
  }
  
  // Function to close the modal
  function closeModal() {
    const modal = document.getElementById("myModal");
    modal.style.display = "none";
  }
  
  // Function to confirm and delete the customer
  function deleteCustomer() {
    const customerId = document.getElementById("confirmDelete").getAttribute("data-customer-id");
    // Perform deletion logic here (e.g., making an AJAX request to delete the customer from the database)
    console.log("Deleting customer with ID:", customerId);
    
    // After deletion logic, close the modal
    closeModal();
  }
  
  // Close modal if clicked outside the modal content
  window.onclick = function(event) {
    const modal = document.getElementById("myModal");
    if (event.target === modal) {
      closeModal();
    }
  };
  