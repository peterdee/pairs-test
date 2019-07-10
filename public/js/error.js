function showError(identifier, message, err = null) {
  $(`#${identifier}`).empty().append(`
<div class="error margin-top">${message}</div>    
    `);
  return console.log(err);
}
