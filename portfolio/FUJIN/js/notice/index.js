//お知らせページのページネーション
$(document).ready(function($){
  $('.list-group').paginathing({
      perPage: 4,
      firstLast: false,
      prevText:'prev' ,
      nextText:'next' ,
      activeClass: 'active',
  })
});