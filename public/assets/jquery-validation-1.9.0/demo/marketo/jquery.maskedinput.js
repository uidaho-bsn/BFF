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
!function(e){function t(e){var t={begin:0,end:0};if(e.setSelectionRange)t.begin=e.selectionStart,t.end=e.selectionEnd;else if(document.selection&&document.selection.createRange){var n=document.selection.createRange();t.begin=0-n.duplicate().moveStart("character",-1e5),t.end=t.begin+n.text.length}return t}function n(e,t){if(e.setSelectionRange)e.focus(),e.setSelectionRange(t,t);else if(e.createTextRange){var n=e.createTextRange();n.collapse(!0),n.moveEnd("character",t),n.moveStart("character",t),n.select()}}var r={9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"};e.mask={addPlaceholder:function(e,t){r[e]=t}},e.fn.unmask=function(){return this.trigger("unmask")},e.fn.mask=function(i,a){a=e.extend({placeholder:"_",completed:null},a);for(var o="^",s=0;s<i.length;s++)o+=r[i.charAt(s)]||"\\"+i.charAt(s);o+="$";var l=new RegExp(o);return this.each(function(){function o(){f(),d(),setTimeout(function(){n(h[0],0)},0)}function s(r){var o=t(this),s=r.keyCode;if(v=16>s||s>16&&32>s||s>32&&41>s,o.begin-o.end==0||v&&8!=s&&46!=s||c(o.begin,o.end),8==s){for(;o.begin-->=0;)if(!m[o.begin])return p[o.begin]=a.placeholder,e.browser.opera?(d(o.begin),n(this,o.begin+1)):(d(),n(this,o.begin)),!1}else{if(46==s)return c(o.begin,o.begin+1),d(),n(this,o.begin),!1;if(27==s)return c(0,i.length),d(),n(this,0),!1}}function u(e){if(v)return v=!1,void 0;e=e||window.event;var o=e.charCode||e.keyCode||e.which,s=t(this),l=s.begin;if(e.ctrlKey||e.altKey)return!0;if(!(o>=41&&122>=o||32==o||o>186))return!1;for(;s.begin<i.length;){var u,c=r[i.charAt(s.begin)];if(c){var f=new RegExp(c);if(u=String.fromCharCode(o).match(f),!u)return!1;for(p[s.begin]=String.fromCharCode(o);++l<i.length&&m[l];);break}s.begin+=1,s.end=s.begin,l+=1}return d(),a.completed&&l>=p.length?a.completed.call(h):n(this,l),!1}function c(e,t){for(var n=e;t>n;n++)m[n]||(p[n]=a.placeholder)}function d(e){for(var t="",n=0;n<i.length;n++)t+=p[n],n==e&&(t+=a.placeholder);return h.val(t),t}function f(){for(var e=h.val(),t=0,n=0;n<i.length;n++)if(!m[n])for(;t++<e.length;){var a=new RegExp(r[i.charAt(n)]);if(e.charAt(t-1).match(a)){p[n]=e.charAt(t-1);break}}var o=d();o.match(l)||(h.val(""),c(0,i.length))}for(var h=e(this),p=new Array(i.length),m=new Array(i.length),g=0;g<i.length;g++)m[g]=null==r[i.charAt(g)],p[g]=m[g]?i.charAt(g):a.placeholder;h.bind("focus",o),h.bind("blur",f),e.browser.msie?this.onpaste=function(){setTimeout(f,0)}:e.browser.mozilla&&this.addEventListener("input",f,!1);var v=!1;h.bind("keydown",s),h.bind("keypress",u),h.one("unmask",function(){h.unbind("focus",o),h.unbind("blur",f),h.unbind("keydown",s),h.unbind("keypress",u),e.browser.msie?this.onpaste=null:e.browser.mozilla&&this.removeEventListener("input",f,!1)})})}}(jQuery);