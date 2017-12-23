  $(document).ready(function() {
      var length_bln, upper_bln, lower_bln, special_bln, number_bln = false;
      $('#pass_chck_icon').hide();

      $('#txt_password').keyup(function() {
          check($(this).val());
      });
      $('#txt_password').focusout(function() {
          if (length_bln && upper_bln && lower_bln && special_bln && number_bln) {
              $('#pass_chck_icon').show();
          } else {
              $('#pass_chck_icon').hide();
          }
      });


      function check(a) {
          if (a.length >= 8) {
              $('#length_row').css('color', 'green');
              $('#length_row').find($(".fa")).removeClass('fa-minus-square').addClass('fa-plus-square');
              length_bln = true;
          } else {
              $('#length_row').css('color', 'red');
              $('#length_row').find($(".fa")).removeClass('fa-plus-square').addClass('fa-minus-square');
              length_bln = false;
          }

          if (hasUpperCase(a)) {
              $('#uppercase_row').css('color', 'green');
              $('#uppercase_row').find($(".fa")).removeClass('fa-minus-square').addClass('fa-plus-square');
              upper_bln = true;
          } else {
              $('#uppercase_row').css('color', 'red');
              $('#uppercase_row').find($(".fa")).removeClass('fa-plus-square').addClass('fa-minus-square');
              upper_bln = false;
          }

          if (hasLowerCase(a)) {
              $('#lowercase_row').css('color', 'green');
              $('#lowercase_row').find($(".fa")).removeClass('fa-minus-square').addClass('fa-plus-square');
              lower_bln = true;
          } else {
              $('#lowercase_row').css('color', 'red');
              $('#lowercase_row').find($(".fa")).removeClass('fa-plus-square').addClass('fa-minus-square');
              lower_bln = false;
          }

          if (containsSpecialCharacters(a)) {
              $('#special_row').css('color', 'green');
              $('#special_row').find($(".fa")).removeClass('fa-minus-square').addClass('fa-plus-square');
              special_bln = true;
          } else {
              $('#special_row').css('color', 'red');
              $('#special_row').find($(".fa")).removeClass('fa-plus-square').addClass('fa-minus-square');
              special_bln = false;
          }

          if (hasNumber(a)) {
              $('#number_row').css('color', 'green');
              $('#number_row').find($(".fa")).removeClass('fa-minus-square').addClass('fa-plus-square');
              number_bln = true;
          } else {
              $('#number_row').css('color', 'red');
              $('#number_row').find($(".fa")).removeClass('fa-plus-square').addClass('fa-minus-square');
              number_bln = false;
          }
      }

  });

  function containsSpecialCharacters(str) {
      var regex = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g;
      return regex.test(str);
  }

  function hasLowerCase(str) {
      return str.toUpperCase() != str;
  }

  function hasUpperCase(str) {
      return str.toLowerCase() != str;
  }

  function hasNumber(str) {
      return /\d/.test(str);
  }