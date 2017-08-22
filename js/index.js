// let isPendingFunction =


$('.buttons').on('click', '#clear', (event) => {
  const $target = $(event.target);
  console.log(`This, ${$target.text()} is a ID`);
  $('#screen').empty();
});

$('.buttons').on('click', '#equals', (event) => {
  const $target = $(event.target);
  console.log(`This, ${$target.text()} is a ID`);
});

$('.buttons').on('click', '.operator', (event) => {
  const $target = $(event.target);
  console.log(`This, ${$target.text()} is a Operator`);
});

$('.buttons').on('click', 'span', (event) => {
  // console.log(typeof (parseInt($('#screen').text())));
  // let screen = parseInt($('#screen').text())
  // console.log(parseInt(screen));

  const $target = $(event.target);
  if ($target.text() === 'hello') {
    $('#screen').empty()
    return;
  }
  console.log($target.text());
  $('#screen').append($target.text());
});
