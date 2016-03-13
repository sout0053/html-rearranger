var $body = $('body');
var $header2 = $('<h2>');
var $ul2 = $('<ul>');
var $header1 = $('<h2>');
var $ul1 = $('<ul>');
var $ul = $('ul');
var $li = $('ul li');

$body.append($header2);
$header2.html('Below ground veggies');
$body.append($ul2);
$body.append($header1);
$header1.html('Above ground veggies');
$body.append($ul1);

$li.each(function () {
  if ($(this).hasClass('below')) {
    $ul2.append($(this));
  } else {
    $ul1.append($(this));
  }
});
