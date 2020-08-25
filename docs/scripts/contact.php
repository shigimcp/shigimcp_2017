<?php

$result = $name = $email = $phone = $message = $human = "";
$errName = $errEmail = $errPhone = $errMessage = $errHuman = "";

if (isset($_POST["submit"])) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];
    $human = intval($_POST['human']);


    $from = 'rikimaru@shigimcp.com';
    $to = 'shigimcp@yahoo.com, shigimcp@hotmail.com';


    $subject = 'MESSAGE FROM RIKIMARU';
    $headers = "From:$from\r\nReply-to:$email";
    $body = "From: $name\nE-Mail: $email\nPhone: $phone\nMessage: $message";

    if (empty($_POST["name"])) {
        $errName = "Please enter your name.";
    } else {
        $name = test_input($_POST["name"]);
    }

    if (empty($_POST["email"])) {
        $errEmail = "Please enter your email address.";
    } else {
        $email = test_input($_POST["email"]);
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $errEmail = "Invalid email format.";
        }
    }

    if (empty($_POST["phone"])) {
        $phone = "";
    } else {
        $phone = test_input($_POST["phone"]);
    }

    if (empty($_POST["message"])) {
        $errMessage = "Please enter your message.";
    } else {
        $message = test_input($_POST["message"]);
    }

    if (empty($_POST["human"])) {
        $errHuman = "Please enter the sum.";
    } else {
        if ($human !== 12) {
            $errHuman = 'Wrong answer. Please try again.';
        }
    }

    if (!$errName && !$errEmail && !$errPhone && !$errMessage && !$errHuman) {
        if (mail($to, $subject, $body, $from)) {
            $result = '<div class="alert alert-secondary"><h5><span class="glyphicon glyphicon-ok"></span> Message sent!</h5><p>Thank you for contacting me.<br>I will be in touch with you soon.</p></div>';
        } else {
            $result = '<div class="alert alert-danger"><h5><span class="glyphicon glyphicon-warning-sign"></span> Sorry there was a form processing error.</h5> <p>Please try again later.</p></div>';
        }
    }
}

function test_input($data)
{
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    $data = (filter_var($data, FILTER_SANITIZE_STRING));
    return $data;
}
?>



<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
    <title>Shigeru McPherson - digital designer / art director - Contact Me</title>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />

    <link rel="icon" type="image/x-icon" href="https://www.shigimcp.com/favicon.ico?v=2" />

    <!--/* ========================= IMPORTS - CSS ========================= */-->

    <link rel="stylesheet" type="text/css" href="scripts/default.css" />


    <!--/* ========================= INLINE CSS ========================= */-->


    <!--/* ========================= IMPORTS - JAVASCRIPT ========================= */-->

    <script src="http://code.jquery.com/jquery-latest.js" type="text/javascript"></script>


    <!--/* ========================= INLINE JAVASCRIPT ========================= */-->


    <!--/* ========================= GOOGLE ANALYTICS ========================= */-->

    <script>
        (function(i, s, o, g, r, a, m) {
            i['GoogleAnalyticsObject'] = r;
            i[r] = i[r] || function() {
                (i[r].q = i[r].q || []).push(arguments)
            }, i[r].l = 1 * new Date();
            a = s.createElement(o),
                m = s.getElementsByTagName(o)[0];
            a.async = 1;
            a.src = g;
            m.parentNode.insertBefore(a, m)
        })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

        ga('create', 'UA-59053825-1', 'auto');
        ga('send', 'pageview');
    </script>


</head>

<body style="background-color: #FFFFFF">

    <div class="contactContainer">

        <h3>Hello from the other si-i-i-ide!</h3>
        <p class="required small">* = Required fields</p>

        <form class="form-horizontal" role="form" method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>">

            <div class="form-group">
                <div class="col col-sm-offset-2">
                    <?php echo $result; ?>
                </div>
            </div>


            <div class="form-group">
                <label for="name" class="col control-label"><span class="required">*</span> Name:</label>
                <div class="col">
                    <input type="text" class="form-control" id="name" name="name" placeholder="First & Last" value="<?php echo $name; ?>">
                    <span class="required small"><?php echo $errName; ?></span>
                </div>
            </div>

            <div class="form-group">
                <label for="email" class="col control-label"><span class="required">*</span> Email: </label>
                <div class="col">
                    <input type="email" class="form-control" id="email" name="email" placeholder="you@domain.com" value="<?php echo $email; ?>">
                    <span class="required small"><?php echo $errEmail; ?></span>
                </div>
            </div>

            <div class="form-group">
                <label for="phone" class="col control-label">Phone: </label>
                <div class="col">
                    <input type="tel" class="form-control" id="phone" name="phone" placeholder="(123) 456-7890" value="<?php echo $phone; ?>">
                    <span class="required small"><?php echo $errPhone; ?></span>
                </div>
            </div>

            <div class="form-group">
                <label for="message" class="col control-label"><span class="required">*</span> Message:</label>
                <div class="col">
                    <textarea class="form-control" row="4" name="message" placeholder="Talk to me..."><?php echo $message; ?></textarea>
                    <span class="required small"><?php echo $errMessage; ?></span>
                </div>
            </div>

            <div class="form-group">
                <label for="human" class="col control-label"><span class="required">*</span> Human Test (becasue bots can't add):</label>
                <div class="col">
                    <h3 class="human">6 + 6 = ?</h3>
                    <input type="text" class="form-control" id="human" name="human" placeholder="Your Answer" value="<?php echo $human; ?>">
                    <span class="required small"><?php echo $errHuman; ?></span>
                </div>
            </div>

            <div class="form-group">
                <div class="col-sm-offset-3 col-sm-6 col-sm-offset-3">
                    <button type="submit" id="submit" name="submit" class="btn-sm btn-secondary btn-block">SUBMIT</button>
                </div>
            </div>

        </form>

    </div>

</body>

</html>