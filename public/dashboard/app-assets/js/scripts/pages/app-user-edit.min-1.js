$((function(){"use strict";var e=$("#change-picture"),r=$(".user-avatar"),t=$("#users-language-select2"),i=$(".form-validate"),a=$(".birthdate-picker");e.length&&$(e).on("change",(function(e){var t=new FileReader,i=e.target.files;t.onload=function(){r.length&&r.attr("src",t.result)},t.readAsDataURL(i[0])})),t.length&&t.wrap('<div class="position-relative"></div>').select2({dropdownParent:t.parent(),dropdownAutoWidth:!0,width:"100%"}),a.length&&a.flatpickr(),i.length&&($(i).each((function(){$(this).validate({submitHandler:function(e,r){r.preventDefault()},rules:{username:{required:!0},name:{required:!0},email:{required:!0,email:!0},dob:{required:!0,step:!1},phone:{required:!0},website:{required:!0,url:!0},address:{required:!0},zip:{required:!0,maxlength:6},city:{required:!0},state:{required:!0},country:{required:!0}}})})),$(this).on("submit",(function(e){e.preventDefault()})))}));