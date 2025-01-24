<?php
// Дані для Telegram
$token = "6577573966:AAGUcRIGfVPpvbZcYdxr6VbnZWGjB-v7z1A";  // Токен Telegram
$chat_id = "539511183";                                     // ID чату

// Отримання даних з форми
$productCode = $_POST['product-code'];
$quantity = $_POST['quantity'];
$deliveryMethod = $_POST['delivery-method'];
$paymentMethod = $_POST['payment-method'];
$comment = $_POST['comment'];
$totalPrice = $_POST['total-price']; // Загальна ціна
$fullName = $_POST['full-name'];    // ПІБ
$phone = $_POST['phone-number'];   // Телефон

// Поля для доставки
$city = isset($_POST['city']) ? $_POST['city'] : '';
$postOffice = isset($_POST['post-office']) ? $_POST['post-office'] : '';
$region = isset($_POST['region']) ? $_POST['region'] : '';
$postalCode = isset($_POST['postal-code']) ? $_POST['postal-code'] : '';

// Додаємо "+38" до номера, якщо його немає
if (strpos($phone, '+38') === false) {
    $phone = '+38' . $phone;
}

// Формування повідомлення для Telegram
$arr = array(
    '<b>→ НОВЕ ЗАМОВЛЕННЯ</b>' => $_SERVER['SERVER_NAME'],
    '💁🏻‍♂️ ПІБ: ' => $fullName,
    '📱 Телефон: ' => $phone,
    '📦 Артикул товару: ' => $productCode,
    '🔢 Кількість: ' => $quantity,
    '🚚 Спосіб доставки: ' => $deliveryMethod,
    '🏙️ Місто: ' => $city,
    '🏤 Відділення/Область: ' => $postOffice ? $postOffice : $region,
    '📮 Індекс: ' => $postalCode,
    '💳 Спосіб оплати: ' => $paymentMethod,
    '💰 Загальна вартість: ' => $totalPrice . ' грн',
    '📝 Коментар: ' => $comment,
    '📍 IP: ' => $_SERVER['REMOTE_ADDR']
);

$message = "";
foreach ($arr as $key => $value) {
    $message .= "<b>" . $key . "</b> " . $value . "%0A";
}

// Відправка повідомлення в Telegram
$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$message}", "r");

// Перевірка успішності відправки
if ($sendToTelegram) {
    header('Location: success.html'); // Перенаправлення на сторінку успішного замовлення
} else {
    echo "Помилка відправки замовлення!";
}

session_start();
?>





<!DOCTYPE html>
<html lang="uk">
<head>
   
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Дякуємо за заявку</title>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Nunito:400,500,600,900&display=swap">

<!-- Meta Pixel Code -->

<script>
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1587967325141371');
fbq('track', 'PageView');
</script>
<noscript><img height="1" width="1" style="display:none"
src="https://www.facebook.com/tr?id=1587967325141371&ev=PageView&noscript=1"
/></noscript>
<!-- End Meta Pixel Code -->

</head>
<body>

<script>
    fbq('track', 'Lead'); // Подія Lead для Facebook Pixel
</script>

<div class="container">
    <img src="IMG/fone.png"alt="Background" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: -1; object-fit: cover; border-radius: 10px;">
    <div class="title">Дякуємо за заявку!</div>
    <div class="message">
        Ми зателефонуємо вам найближчим часом, <br>щоб дізнатися деталі замовлення.
    </div>

    <div class="info">
        Перевірте правильність введеної Вами інформації.
        <br>
        Ім'я: <?php echo $_REQUEST['full-name']; ?>
    <br>
    Телефон: <?php echo $_REQUEST['number']; ?>
    </div>

<a class="button" href="index.html">Повернутися</a>

</div>

<style>
        body {
            
            background-size: cover; /* Зображення покриває весь блок */
            font-family: 'Nunito', sans-serif;
            text-align: center;
            margin: 0;
            padding: 0;
        }

        .container {
            border-radius: 10px;
            padding: 30px;
            max-width: 400px;
            margin: 0 auto;
            margin-top: 50px;
        }

        .title {
            font-size: 28px;
            color: #fff;
            margin-bottom: 20px;
            font-weight: 900;
        }

        .message {
            font-size: 20px;
            color: #fff;
            margin-bottom: 20px;
            font-weight: 600;
        }

        .info {
            font-size: 16px;
            color: #fff;
            margin-bottom: 20px;
            font-weight: 500;
        }

        .button {
            padding: 12px 24px;
            color: #09470a;
            background: white;
            text-decoration: none;
            font-weight: bold;
            border-radius: 25px;
            transition: background-color 0.3s ease, color 0.3s ease, transform 0.2s ease;
        }

        .button:hover {
            background-color: #09470a;
            color: #fff;
            transform: scale(1.05);
        }

        /* Адаптивність для різних розмірів екрану */
        @media (max-width: 576px) {
            .container {
                max-width: 75%;
            }
        }

        @media (min-width: 577px) and (max-width: 1024px) {
            .container {
                max-width: 75%;
            }
        }

        @media (min-width: 1025px) {
            .container {
                max-width: 600px;
            }
        }
    </style>
    
</body>
</html>