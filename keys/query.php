<?php

// Check if the request is a POST request
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Assuming you are expecting a parameter named 'query' in the POST request
    if(isset($_POST['query'])) {
        // Retrieve the query parameter from the POST request
        $keyToCheck = $_POST['query'];

        // Connect to your MySQL database
        $servername = "localhost"; // Your database server name
        $username = "id21870983_hassan"; // Your database username
        $password = "0Lo0d8&^mMlSQGW^"; // Your database password
        $dbname = "id21870983_my"; // Your database name

        // Create connection
        $conn = new mysqli($servername, $username, $password, $dbname);

        // Check connection
        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }

        // Prepare the SQL query with a placeholder for the key
        $sql = "SELECT * FROM `keys` WHERE  `key` = ".$keyToCheck."";

        // Prepare the SQL statement
        $stmt = $conn->prepare($sql);

        // Bind parameters
        $stmt->bind_param("s", $keyToCheck);

        // Execute the SQL query
        $stmt->execute();

        // Get the result
        $result = $stmt->get_result();

        // Check if the query was executed successfully
        if ($result) {
            // If the query was a SELECT query and returned rows
            if ($result->num_rows > 0) {
                // Key exists in the database
                echo json_encode(array("status" => "ok"));
            } else {
                // Key does not exist in the database
                echo json_encode(array("error" => "Key not found in database"));
            }
        } else {
            // If there was an error executing the query
            echo json_encode(array("error" => "Error executing SQL query"));
        }

        // Close the prepared statement
        $stmt->close();

        // Close the database connection
        $conn->close();
    } else {
        // If 'query' parameter is not set in the POST request
        echo json_encode(array("error" => "No 'query' parameter provided."));
    }
} else {
    // If the request is not a POST request
    echo $_SERVER["REQUEST_METHOD"];
    echo json_encode(array("error" => "Only POST requests are allowed. "));
}
?>
