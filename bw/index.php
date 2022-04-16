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



// toconsole('SERVER:' . print_r($_SERVER, true));
toconsole("GET:"  . print_r($_GET, true));
toconsole('POST:' . print_r($_POST, true));

header('Access-Control-Allow-Origin: *');
toconsole('new request');
$entityBody = file_get_contents('php://input');
toconsole('BODY:\n');
try {
	toconsole(print_r(json_decode($entityBody), true) . "\n");
} catch (Exception $e) {
	toconsole($entityBody . "\n");
}
?>

<html>

<head>
	<script src="index.js"></script>
</head>

<body>
	POST
	<?php
	var_dump($_POST);
	?>

	BODY
	<?php
	var_dump($entityBody);
	?>
</body>

</html>