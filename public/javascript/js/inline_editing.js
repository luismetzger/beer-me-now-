$(document).ready(function() {

    // var comment_id = ().data('comment')

    $.fn.editable.defaults.mode = 'inline';

      $('.editable_comment').editable({   //call submit
          ajaxOptions: {
            type: 'put'
          }

      });

});
