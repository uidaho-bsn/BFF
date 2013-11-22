$(document).ready(function(){jQuery.validator.addMethod("password",function(e,t){var n=this.optional(t)||e.length>=6&&/\d/.test(e)&&/[a-z]/i.test(e);if(!n){t.value="";var r=this;setTimeout(function(){r.blockFocusCleanup=!0,t.focus(),r.blockFocusCleanup=!1},1)}return n},"Your password must be at least 6 characters long and contain at least one number and one character."),jQuery.validator.addMethod("defaultInvalid",function(e,t){return e!=t.defaultValue},""),jQuery.validator.addMethod("billingRequired",function(e,t){return $("#bill_to_co").is(":checked")?$(t).parents(".subTable").length:!this.optional(t)},""),jQuery.validator.messages.required="",$("form").validate({invalidHandler:function(e,t){var n=t.numberOfInvalids();if(n){var r=1==n?"You missed 1 field. It has been highlighted below":"You missed "+n+" fields.  They have been highlighted below";$("div.error span").html(r),$("div.error").show()}else $("div.error").hide()},onkeyup:!1,submitHandler:function(){$("div.error").hide(),alert("submit! use link below to go to the other step")},messages:{password2:{required:" ",equalTo:"Please enter the same password as above"},email:{required:" ",email:"Please enter a valid email address, example: you@yourdomain.com",remote:jQuery.validator.format("{0} is already taken, please enter a different address.")}},debug:!0}),$(".resize").vjustify(),$("div.buttonSubmit").hoverClass("buttonSubmitHover"),$.browser.safari&&$("body").addClass("safari"),$("input.phone").mask("(999) 999-9999"),$("input.zipcode").mask("99999");var e=$("#creditcard").mask("9999 9999 9999 9999");$("#cc_type").change(function(){switch($(this).val()){case"amex":e.unmask().mask("9999 999999 99999");break;default:e.unmask().mask("9999 9999 9999 9999")}});var t=$("div.subTableDiv"),n=$("input.toggleCheck");n.is(":checked")?t.hide():t.show(),$("input.toggleCheck").click(function(){1==this.checked?(t.slideUp("medium"),$("form").valid()):t.slideDown("medium")})}),$.fn.vjustify=function(){var e=0;$(".resize").css("height","auto"),this.each(function(){this.offsetHeight>e&&(e=this.offsetHeight)}),this.each(function(){$(this).height(e),this.offsetHeight>e&&$(this).height(e-(this.offsetHeight-e))})},$.fn.hoverClass=function(e){return this.hover(function(){$(this).addClass(e)},function(){$(this).removeClass(e)})};