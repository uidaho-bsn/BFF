$(function(){$("#refreshimg").click(function(){return $.post("newsession.php"),$("#captchaimage").load("image_req.php"),!1}),$("#captchaform").validate({rules:{captcha:{required:!0,remote:"process.php"}},messages:{captcha:"Correct captcha is required. Click the captcha to generate a new one"},submitHandler:function(){alert("Correct captcha!")},success:function(e){e.addClass("valid").text("Valid captcha!")},onkeyup:!1})});