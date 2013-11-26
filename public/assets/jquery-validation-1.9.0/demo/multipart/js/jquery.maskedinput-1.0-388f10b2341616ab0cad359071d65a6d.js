/*
 * Copyright (c) 2007 Josh Bush (digitalbush.com)
 * 
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:

 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE. 
 */
!function(e){function t(e){var t={begin:0,end:0};if(e.setSelectionRange)t.begin=e.selectionStart,t.end=e.selectionEnd;else if(document.selection&&document.selection.createRange){var n=document.selection.createRange();t.begin=0-n.duplicate().moveStart("character",-1e5),t.end=t.begin+n.text.length}return t}function n(e,t){if(e.setSelectionRange)e.focus(),e.setSelectionRange(t,t);else if(e.createTextRange){var n=e.createTextRange();n.collapse(!0),n.moveEnd("character",t),n.moveStart("character",t),n.select()}}var r={9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"};e.mask={addPlaceholder:function(e,t){r[e]=t}},e.fn.mask=function(i,a){a=e.extend({placeholder:"_",completed:null},a);for(var o="^",s=0;s<i.length;s++)o+=r[i.charAt(s)]||"\\"+i.charAt(s);o+="$";var l=new RegExp(o);return this.each(function(){function o(e,t){for(var n=e;t>n;n++)f[n]||(d[n]=a.placeholder)}function s(e){for(var t="",n=0;n<i.length;n++)t+=d[n],n==e&&(t+=a.placeholder);return c.val(t),t}function u(){for(var e=c.val(),t=0,n=0;n<i.length;n++)if(!f[n])for(;t++<e.length;){var a=new RegExp(r[i.charAt(n)]);if(e.charAt(t-1).match(a)){d[n]=e.charAt(t-1);break}}var u=s();u.match(l)||(c.val(""),o(0,i.length))}for(var c=e(this),d=new Array(i.length),f=new Array(i.length),h=0;h<i.length;h++)f[h]=null==r[i.charAt(h)],d[h]=f[h]?i.charAt(h):a.placeholder;c.focus(function(){u(),s(),n(this,0)}),c.blur(u),e.browser.msie?this.onpaste=function(){setTimeout(u,0)}:e.browser.mozilla&&this.addEventListener("input",u,!1);var p=!1;c.keydown(function(r){var l=t(this),u=r.keyCode;if(p=16>u||u>16&&32>u||u>32&&41>u,l.begin-l.end==0||p&&8!=u&&46!=u||o(l.begin,l.end),8==u){for(;l.begin-->=0;)if(!f[l.begin])return d[l.begin]=a.placeholder,e.browser.opera?(s(l.begin),n(this,l.begin+1)):(s(),n(this,l.begin)),!1}else{if(46==u)return o(l.begin,l.begin+1),s(),n(this,l.begin),!1;if(27==u)return o(0,i.length),s(),n(this,0),!1}}),c.keypress(function(e){if(p)return p=!1,void 0;e=e||window.event;var o=e.charCode||e.keyCode||e.which,l=t(this),u=l.begin;if(e.ctrlKey||e.altKey)return!0;if(!(o>=41&&122>=o||32==o||o>186))return!1;for(;l.begin<i.length;){var h,m=r[i.charAt(l.begin)];if(m){var g=new RegExp(m);if(h=String.fromCharCode(o).match(g),!h)return!1;for(d[l.begin]=String.fromCharCode(o);++u<i.length&&f[u];);break}l.begin+=1,l.end=l.begin,u+=1}return s(),a.completed&&u>=d.length?a.completed.call(c):n(this,u),!1})})}}(jQuery);