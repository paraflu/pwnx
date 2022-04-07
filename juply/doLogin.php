 <?php                                                                                                                                                                                                                               
                                                                                                                                                                                                                                            
      if (isset($_POST['username']) && isset($_POST['password'])){                                                                                                                                                                        
                                                                                                                                                                                                                                          
          $user = $_POST['username'];                                                                                                                                                                                                     
          $pass = md5($_POST['password']);                                                                                                                                                                                                
                                                                                                                                                                                                                                          
                                                                                                                                                                                                                                          
                                                                                                                                                                                                                                          
          //$id = trim($_GET['id']);                                                                                                                                                                                                      
          $user = str_replace('or', '', $user);                                                                                                                                                                                           
          $user = str_replace('OR', '', $user);                                                                                                                                                                                           
          $user = str_replace('AND', '', $user);                                                                                                                                                                                          
          $user = str_replace('and', '', $user);                                                                                                                                                                                          
          //$user = str_replace('/**/', '', $id);                                                                                                                                                                                         
                                                                                                                                                                                                                                          
                                                                                                                                                                                                                                          
                                                                                                                                                                                                                                          
          /* Setup the connection to the database */
          $mysqli = new mysqli('mariadb', 'testuser', 'testpassword', 'testdb');
          
          /* Check connection before executing the SQL query */
          if ($mysqli->connect_errno) {
              printf("Connect failed: %s\n", $mysqli->connect_error);
              exit();
          }
     
          
          /* SQL query vulnerable to SQL injection */
          $sql = "SELECT username,password
          FROM MyGuests
          WHERE username = '$user' AND password = '$pass' limit 1";
          
          /* Select queries return a result */
          if ($result = $mysqli->query($sql)) {
              //print_r($result);
              while($obj = $result->fetch_object()){
                  //print_r($obj);
                  if ($obj->password == 'd76a26260eef984126410cbde83a3358')
                  {
                      echo "you are admin go to /61e8a0c58e8e18556001776a9aef2537a232e6577a5cca9134a781 <!-- token: DCdb31SaT5Qm5Y7RENgw -->";
                      exit;
                  }else{
                      echo "no admin ... try harder";
                  }
              }
          }
          /* If the database returns an error, print it to screen */
          elseif($mysqli->error){
              print($mysqli->error);
          }
      }
