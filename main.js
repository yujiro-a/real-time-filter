$(function() {
  searchWord = function() {
    let searchText = $(this).val(),
        targetText;
        
    console.log(searchText);
    
    $('.list-item').each(function() {
      targetText = $(this).text();
      parent = document.getElementsByClassName('.list-item');
      
      if(targetText.indexOf(searchText) != -1) {
        $(this).removeClass('hidden');
      } else {
        $(this).addClass('hidden');
      }
    });
  };
  
  $('#textarea').on('input',searchWord);
})