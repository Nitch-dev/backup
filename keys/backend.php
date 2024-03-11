<?php
// Database connection settings
$host = 'localhost';
$username = 'id21870983_hassan';
$password = '0Lo0d8&^mMlSQGW^';
$database = 'id21870983_my';

$conn = new mysqli($host, $username, $password, $database);

function generateRandomKey($length = 10) {
    // Characters to use for generating random key
    $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    $charactersLength = strlen($characters);
    
    // Generate a timestamp-based part of the key
    $timestampPart = time(); // Get current timestamp
    static $counter = 0; // Initialize counter as static variable
    
    // Append counter to timestamp part
    $timestampPart .= str_pad($counter++, 5, '0', STR_PAD_LEFT); // Adjust padding as needed
    
    // Generate a random words part of the key
    $randomWordsPart = '';
    for ($i = 0; $i < $length - strlen((string)$timestampPart); $i++) {
        $randomWordsPart .= $characters[rand(0, $charactersLength - 1)];
    }
    
    // Combine timestamp and random words parts to form the key
    $key = $timestampPart . $randomWordsPart;
    
    return $key;
}
function idk() {
    
    return substr(sha1(mt_rand()),17,6);
}



// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Handle key deletion request
if (isset($_POST["enterkeybutton"]) && isset($_POST["enterkey"])) {
    $keyToDelete = $_POST["enterkey"];

    // Prepare a delete statement
    $sql = "DELETE FROM `keys` WHERE `key` = '$keyToDelete'";

    // Execute the delete statement
    if ($conn->query($sql) !== TRUE) {
        echo "Error deleting key: " . $conn->error;
    } else {
        echo "Key deleted successfully!";
    }
}

// Handle add key request
if (isset($_POST["add_key"])) {
    $num_keys = $_POST["num_keys"];

    // Insert keys into the database
    for ($i = 0; $i < $num_keys; $i++) {
        $lisc = idk();
        $Today = date("Y-m-d");
        $sql = "INSERT INTO `keys` (`key`,IssueDate) VALUES ('$lisc','$Today')";
        if ($conn->query($sql) !== TRUE) {
            echo "Error: " . $sql . "<br>" . $conn->error;
        }
    }
    echo "Keys added successfully!";
}

// Handle delete all keys request
if (isset($_POST["delete_keys"])) {
    // Delete all keys from the database
    $sql = "TRUNCATE TABLE `keys`";
    if ($conn->query($sql) !== TRUE) {
        echo "Error: " . $sql . "<br>" . $conn->error;
    } else {
        echo "All keys deleted successfully!";
    }
}

// Handle show all keys request
if (isset($_POST["show_keys"])) {
    // Fetch all keys from the database
    $sql = "SELECT * FROM `keys`";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        // Output data of each row
        echo "<table><tr><th>ID</th><th>Key</th><th>Issue-Date</th></tr>";
        while ($row = $result->fetch_assoc()) {
            echo "<tr><td>" . $row["id"] . "</td> <td>" . $row["key"] . "</td> <td>" . $row["IssueDate"] . "</td></tr>";


        }
        echo "</table>";
    } else {
        echo "0 results";
    }
}

// Close MySQL connection
$conn->close();

?>
