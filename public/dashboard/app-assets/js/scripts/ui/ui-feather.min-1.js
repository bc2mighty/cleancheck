$((function(){"use strict";var e=Object.keys(feather.icons),t=$("#icons-search"),c=$("#icons-container");e.length&&e.map((function(e){c.length&&c.append('<div class="card icon-card cursor-pointer text-center mb-2 mx-50" data-toggle="tooltip" data-placement="top" title="'+e+'" data-icon="<i data-feather=\''+e+'\'></i>"> <div class="card-body"> <div class="icon-wrapper">'+feather.icons[e].toSvg()+'</div><p class="icon-name text-truncate mb-0 mt-1">'+e+"</p> </div></div>")})),t.length&&t.on("keyup",(function(){var e=$(this).val().toLowerCase();$(".icon-card").filter((function(){var t=$(this);t.text().toLowerCase().indexOf(e)<!1?t.css("display","none"):t.css("display","block")}))})),$(document).on("click",".icon-card",(function(){var e,t,a=$(this),o=a.data("icon");c.find(".icon-card.active").removeClass("active"),a.addClass("active"),e=o,(t=document.createElement("input")).value=e,document.body.appendChild(t),t.select(),toastr.success(t.value.split("'")[1],"Icon Name Copied! 📋",{closeButton:!0,tapToDismiss:!1}),document.execCommand("copy"),document.body.removeChild(t)}))}));