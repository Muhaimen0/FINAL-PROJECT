// Function to confirm deletion of a customer
function confirmDelete(customerId) {
    const confirmation = confirm("Are you sure you want to delete this customer?");
    if (confirmation) {
      deleteCustomer(customerId);
    }
  }
  
  // Function to delete a customer from the table
  function deleteCustomer(customerId) {
    const table = document.getElementById("customerTable");
    for (let i = 1; i < table.rows.length; i++) {
      if (table.rows[i].cells[1].innerText == customerId) { // Assuming ID is in the second column
        table.deleteRow(i);
        showNotification();
        break;
      }
    }
  }
  
  // Function to show a notification message
  function showNotification() {
    const notification = document.getElementById("notification");
    notification.style.display = "block";
    setTimeout(() => {
      notification.style.display = "none";
    }, 3000); // Notification will disappear after 3 seconds
  }