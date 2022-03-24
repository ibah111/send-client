<?
require($_SERVER["DOCUMENT_ROOT"] . "/bitrix/modules/main/include/prolog_before.php");
/**
 * Encrypt value to a cryptojs compatiable json encoding string
 *
 * @param mixed $passphrase
 * @param mixed $value
 * @return string
 */
function cryptoJsAesEncrypt($passphrase, $value)
{
  $salt = openssl_random_pseudo_bytes(8);
  $salted = '';
  $dx = '';
  while (strlen($salted) < 48) {
    $dx = md5($dx . $passphrase . $salt, true);
    $salted .= $dx;
  }
  $key = substr($salted, 0, 32);
  $iv  = substr($salted, 32, 16);
  $encrypted_data = openssl_encrypt(json_encode($value), 'aes-256-cbc', $key, true, $iv);
  $data = array("ct" => base64_encode($encrypted_data), "iv" => bin2hex($iv), "s" => bin2hex($salt));
  return json_encode($data);
}
if ($USER->IsAuthorized() and ($USER->GetSessionHash())) $USER->Authorize($USER->GetID(), true);
$json = array('name' => $USER->GetParam('LOGIN'), 'token' => $USER->GetSessionHash());
$hash = hash('sha512', 'Irjlf123!');
$token = base64_encode(cryptoJsAesEncrypt($hash, $json));
?>
<!DOCTYPE html>

<html lang="ru">

<head>
  <meta charset="utf-8" />
  <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="theme-color" content="#000000" />
  <meta name="token" content="<?= $token ?>">
  <meta name="description" content="Подача" />
  <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
  <style>
    body {
      overflow: hidden;
    }
  </style>
  <title>Подача</title>
</head>

<body class="notranslate">
  <noscript>You need to enable JavaScript to run this app.</noscript>
  <div id="root"></div>
</body>

</html>
<?
require($_SERVER["DOCUMENT_ROOT"] . "/bitrix/modules/main/include/epilog_after.php");
?>