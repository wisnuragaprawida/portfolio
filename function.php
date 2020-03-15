<?php 
$conn = mysqli_connect("localhost","root","","phpdasar");

//  function query($query) {
//      global $conn;
//     $result = mysqli_query($conn, $query);
//     $rows = [];
//     while($row = mysqli_fetch_assoc($result)){
//         $rows[] = $row;
//     }
// return $rows;
// }

function tambah($data){

    global $conn;
    $nama = htmlspecialchars($_POST["nama"]);
    $email =htmlspecialchars($_POST["email"]);
    $tlp = htmlspecialchars($_POST["tlp"]);
    $pesan = htmlspecialchars($_POST["pesan"]);

    $query= "INSERT INTO datapesan VALUES('$nama','$email','$tlp','$pesan') ";

    mysqli_query($conn,$query);

    return mysqli_affected_rows($conn);


}


?>