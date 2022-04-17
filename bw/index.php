<?php

/* <html>
	<head>
<script>
top.window.debug = true;
top.debug = true;
		</script>
</head>
	<body>
<script	>
document.getElementsByTagName('body')[0].innerText = new Date();
alert('here');
</script>
	</body>
</html> */

function toconsole(string $msg)
{
	$stdout = fopen('php://stdout', 'w');
	$now = new DateTime();
	fwrite($stdout, $now->format("c") . '-' . $msg . "\n");
	fclose($stdout);
}

// for ($i = 1; $i < 20; $i++) {
// 	toconsole("NewLine\n");
// }

if (isset($_GET['callback'])) {
	toconsole(file_get_contents('php://input'));
	exit;
}

// toconsole('SERVER:' . print_r($_SERVER, true));
// toconsole("GET:"  . print_r($_GET, true));
// toconsole('POST:' . print_r($_POST, true));

header('Access-Control-Allow-Origin: *');
// toconsole('new request');
// $entityBody = file_get_contents('php://input');
// toconsole('BODY:\n');
// try {
// 	toconsole($entityBody . "\n");
// } catch (Exception $e) {
// 	toconsole($entityBody . "\n");
// }
?>

<html>
<head>
	<!-- <script src="index.js"></script> -->
</head>

<body>
	<h4>Hello</h4>
</body>

</html>