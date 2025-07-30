<?php
$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "user_db";

// DB connection
$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed");
}

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name   = $_POST['fname'];
    $email  = $_POST['email'];
    $pass   = $_POST['pass'];
    $gender = $_POST['gender'];
    $city   = $_POST['city'];

    $hashed_password = password_hash($pass, PASSWORD_DEFAULT);

    $stmt = $conn->prepare("INSERT INTO users (name, email, password, gender, city) VALUES (?, ?, ?, ?, ?)");
    $stmt->bind_param("sssss", $name, $email, $hashed_password, $gender, $city);

    if ($stmt->execute()) {
        echo "Registration successful";
    } else {
        echo "Database error";
    }

    $stmt->close();
}
$conn->close();
?>
