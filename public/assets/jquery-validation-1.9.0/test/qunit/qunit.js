/**
 * QUnit - A JavaScript Unit Testing Framework
 * 
 * http://docs.jquery.com/QUnit
 *
 * Copyright (c) 2011 John Resig, Jörn Zaefferer
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * or GPL (GPL-LICENSE.txt) licenses.
 */
!function(e){function t(){b.autorun=!0,b.currentModule&&y.moduleDone({name:b.currentModule,failed:b.moduleStats.bad,passed:b.moduleStats.all-b.moduleStats.bad,total:b.moduleStats.all});var e=h("qunit-banner"),t=h("qunit-tests"),n=+new Date-b.started,r=b.stats.all-b.stats.bad,i=["Tests completed in ",n," milliseconds.<br/>",'<span class="passed">',r,'</span> tests of <span class="total">',b.stats.all,'</span> passed, <span class="failed">',b.stats.bad,"</span> failed."].join("");e&&(e.className=b.stats.bad?"qunit-fail":"qunit-pass"),t&&(h("qunit-testresult").innerHTML=i),y.done({failed:b.stats.bad,passed:r,total:b.stats.all,runtime:n})}function n(e){var t=b.filter,n=!1;return t?(not="!"===t.charAt(0),not&&(t=t.slice(1)),-1!==e.indexOf(t)?!not:(not&&(n=!0),n)):!0}function r(){try{throw new Error}catch(e){if(e.stacktrace)return e.stacktrace.split("\n")[6];if(e.stack)return e.stack.split("\n")[4]}}function i(e){return e?(e+="",e.replace(/[\&"<>\\]/g,function(e){switch(e){case"&":return"&amp;";case"\\":return"\\\\";case'"':return'"';case"<":return"&lt;";case">":return"&gt;";default:return e}})):""}function a(e){b.queue.push(e),b.autorun&&!b.blocking&&o()}function o(){for(var n=(new Date).getTime();b.queue.length&&!b.blocking;){if(!(b.updateRate<=0||(new Date).getTime()-n<b.updateRate)){e.setTimeout(o,13);break}b.queue.shift()()}b.blocking||b.queue.length||t()}function s(){if(b.pollution=[],b.noglobals)for(var t in e)b.pollution.push(t)}function l(){var e=b.pollution;s();var t=u(b.pollution,e);t.length>0&&ok(!1,"Introduced global variable(s): "+t.join(", "));var n=u(e,b.pollution);n.length>0&&ok(!1,"Deleted global variable(s): "+n.join(", "))}function u(e,t){for(var n=e.slice(),r=0;r<n.length;r++)for(var i=0;i<t.length;i++)if(n[r]===t[i]){n.splice(r,1),r--;break}return n}function c(t,n,r){"undefined"!=typeof console&&console.error&&console.warn?(console.error(t),console.error(n),console.warn(r.toString())):e.opera&&opera.postError&&opera.postError(t,n,r.toString)}function d(e,t){for(var n in t)void 0===t[n]?delete e[n]:e[n]=t[n];return e}function f(e,t,n){e.addEventListener?e.addEventListener(t,n,!1):e.attachEvent?e.attachEvent("on"+t,n):n()}function h(e){return!("undefined"==typeof document||!document||!document.getElementById)&&document.getElementById(e)}function p(e){for(var t,n="",r=0;e[r];r++)t=e[r],3===t.nodeType||4===t.nodeType?n+=t.nodeValue:8!==t.nodeType&&(n+=p(t.childNodes));return n}var m={setTimeout:"undefined"!=typeof e.setTimeout,sessionStorage:function(){try{return!!sessionStorage.getItem}catch(e){return!1}}()},g=0,v=function(e,t,n,r,i,a){this.name=e,this.testName=t,this.expected=n,this.testEnvironmentArg=r,this.async=i,this.callback=a,this.assertions=[]};v.prototype={init:function(){var e=h("qunit-tests");if(e){var t=document.createElement("strong");t.innerHTML="Running "+this.name;var n=document.createElement("li");n.appendChild(t),n.className="running",n.id=this.id="test-output"+g++,e.appendChild(n)}},setup:function(){this.module!=b.previousModule&&(b.previousModule&&y.moduleDone({name:b.previousModule,failed:b.moduleStats.bad,passed:b.moduleStats.all-b.moduleStats.bad,total:b.moduleStats.all}),b.previousModule=this.module,b.moduleStats={all:0,bad:0},y.moduleStart({name:this.module})),b.current=this,this.testEnvironment=d({setup:function(){},teardown:function(){}},this.moduleTestEnvironment),this.testEnvironmentArg&&d(this.testEnvironment,this.testEnvironmentArg),y.testStart({name:this.testName}),y.current_testEnvironment=this.testEnvironment;try{b.pollution||s(),this.testEnvironment.setup.call(this.testEnvironment)}catch(e){y.ok(!1,"Setup failed on "+this.testName+": "+e.message)}},run:function(){if(this.async&&y.stop(),b.notrycatch)return this.callback.call(this.testEnvironment),void 0;try{this.callback.call(this.testEnvironment)}catch(e){c("Test "+this.testName+" died, exception and test follows",e,this.callback),y.ok(!1,"Died on test #"+(this.assertions.length+1)+": "+e.message+" - "+y.jsDump.parse(e)),s(),b.blocking&&start()}},teardown:function(){try{l(),this.testEnvironment.teardown.call(this.testEnvironment)}catch(e){y.ok(!1,"Teardown failed on "+this.testName+": "+e.message)}},finish:function(){this.expected&&this.expected!=this.assertions.length&&y.ok(!1,"Expected "+this.expected+" assertions, but "+this.assertions.length+" were run");var t=0,n=0,r=h("qunit-tests");if(b.stats.all+=this.assertions.length,b.moduleStats.all+=this.assertions.length,r){for(var i=document.createElement("ol"),a=0;a<this.assertions.length;a++){var o=this.assertions[a],s=document.createElement("li");s.className=o.result?"pass":"fail",s.innerHTML=o.message||(o.result?"okay":"failed"),i.appendChild(s),o.result?t++:(n++,b.stats.bad++,b.moduleStats.bad++)}y.config.reorder&&m.sessionStorage&&(n?sessionStorage.setItem("qunit-"+this.module+"-"+this.testName,n):sessionStorage.removeItem("qunit-"+this.module+"-"+this.testName)),0==n&&(i.style.display="none");var l=document.createElement("strong");l.innerHTML=this.name+" <b class='counts'>(<b class='failed'>"+n+"</b>, <b class='passed'>"+t+"</b>, "+this.assertions.length+")</b>";var u=document.createElement("a");u.innerHTML="Rerun",u.href=y.url({filter:p([l]).replace(/\([^)]+\)$/,"").replace(/(^\s*|\s*$)/g,"")}),f(l,"click",function(){var e=l.nextSibling.nextSibling,t=e.style.display;e.style.display="none"===t?"block":"none"}),f(l,"dblclick",function(t){var n=t&&t.target?t.target:e.event.srcElement;("span"==n.nodeName.toLowerCase()||"b"==n.nodeName.toLowerCase())&&(n=n.parentNode),e.location&&"strong"===n.nodeName.toLowerCase()&&(e.location=y.url({filter:p([n]).replace(/\([^)]+\)$/,"").replace(/(^\s*|\s*$)/g,"")}))});var s=h(this.id);s.className=n?"fail":"pass",s.removeChild(s.firstChild),s.appendChild(l),s.appendChild(u),s.appendChild(i)}else for(var a=0;a<this.assertions.length;a++)this.assertions[a].result||(n++,b.stats.bad++,b.moduleStats.bad++);try{y.reset()}catch(d){c("reset() failed, following Test "+this.testName+", exception and reset fn follows",d,y.reset)}y.testDone({name:this.testName,failed:n,passed:this.assertions.length-n,total:this.assertions.length})},queue:function(){function e(){a(function(){t.setup()}),a(function(){t.run()}),a(function(){t.teardown()}),a(function(){t.finish()})}var t=this;a(function(){t.init()});var n=y.config.reorder&&m.sessionStorage&&+sessionStorage.getItem("qunit-"+this.module+"-"+this.testName);n?e():a(e)}};var y={module:function(e,t){b.currentModule=e,b.currentModuleTestEnviroment=t},asyncTest:function(e,t,n){2===arguments.length&&(n=t,t=0),y.test(e,t,n,!0)},test:function(e,t,r,i){var a,o='<span class="test-name">'+e+"</span>";if(2===arguments.length&&(r=t,t=null),t&&"object"==typeof t&&(a=t,t=null),b.currentModule&&(o='<span class="module-name">'+b.currentModule+"</span>: "+o),n(b.currentModule+": "+e)){var s=new v(o,e,t,a,i,r);s.module=b.currentModule,s.moduleTestEnvironment=b.currentModuleTestEnviroment,s.queue()}},expect:function(e){b.current.expected=e},ok:function(e,t){e=!!e;var n={result:e,message:t};t=i(t),y.log(n),b.current.assertions.push({result:e,message:t})},equal:function(e,t,n){y.push(t==e,e,t,n)},notEqual:function(e,t,n){y.push(t!=e,e,t,n)},deepEqual:function(e,t,n){y.push(y.equiv(e,t),e,t,n)},notDeepEqual:function(e,t,n){y.push(!y.equiv(e,t),e,t,n)},strictEqual:function(e,t,n){y.push(t===e,e,t,n)},notStrictEqual:function(e,t,n){y.push(t!==e,e,t,n)},raises:function(e,t,n){var r,i=!1;"string"==typeof t&&(n=t,t=null);try{e()}catch(a){r=a}r&&(t?"regexp"===y.objectType(t)?i=t.test(r):r instanceof t?i=!0:t.call({},r)===!0&&(i=!0):i=!0),y.ok(i,n)},start:function(){b.semaphore--,b.semaphore>0||(b.semaphore<0&&(b.semaphore=0),m.setTimeout?e.setTimeout(function(){b.timeout&&clearTimeout(b.timeout),b.blocking=!1,o()},13):(b.blocking=!1,o()))},stop:function(t){b.semaphore++,b.blocking=!0,t&&m.setTimeout&&(clearTimeout(b.timeout),b.timeout=e.setTimeout(function(){y.ok(!1,"Test timed out"),y.start()},t))}};y.equals=y.equal,y.same=y.deepEqual;var b={queue:[],blocking:!0,reorder:!0,noglobals:!1,notrycatch:!1};!function(){var t,n=e.location||{search:"",protocol:"file:"},r=n.search.slice(1).split("&"),i=r.length,a={};if(r[0])for(var o=0;i>o;o++)t=r[o].split("="),t[0]=decodeURIComponent(t[0]),t[1]=t[1]?decodeURIComponent(t[1]):!0,a[t[0]]=t[1],t[0]in b&&(b[t[0]]=t[1]);y.urlParams=a,b.filter=a.filter,y.isLocal=!("file:"!==n.protocol)}(),"undefined"==typeof exports||"undefined"==typeof require?(d(e,y),e.QUnit=y):(d(exports,y),exports.QUnit=y),d(y,{config:b,init:function(){d(b,{stats:{all:0,bad:0},moduleStats:{all:0,bad:0},started:+new Date,updateRate:1e3,blocking:!1,autostart:!0,autorun:!1,filter:"",queue:[],semaphore:0});var e=h("qunit-tests"),t=h("qunit-banner"),n=h("qunit-testresult");e&&(e.innerHTML=""),t&&(t.className=""),n&&n.parentNode.removeChild(n),e&&(n=document.createElement("p"),n.id="qunit-testresult",n.className="result",e.parentNode.insertBefore(n,e),n.innerHTML="Running...<br/>&nbsp;")},reset:function(){if(e.jQuery)jQuery("#qunit-fixture").html(b.fixture);else{var t=h("qunit-fixture");t&&(t.innerHTML=b.fixture)}},triggerEvent:function(e,t,n){document.createEvent?(n=document.createEvent("MouseEvents"),n.initMouseEvent(t,!0,!0,e.ownerDocument.defaultView,0,0,0,0,0,!1,!1,!1,!1,0,null),e.dispatchEvent(n)):e.fireEvent&&e.fireEvent("on"+t)},is:function(e,t){return y.objectType(t)==e},objectType:function(e){if("undefined"==typeof e)return"undefined";if(null===e)return"null";var t=Object.prototype.toString.call(e).match(/^\[object\s(.*)\]$/)[1]||"";switch(t){case"Number":return isNaN(e)?"nan":"number";case"String":case"Boolean":case"Array":case"Date":case"RegExp":case"Function":return t.toLowerCase()}return"object"==typeof e?"object":void 0},push:function(e,t,n,a){var o={result:e,message:a,actual:t,expected:n};a=i(a)||(e?"okay":"failed"),a='<span class="test-message">'+a+"</span>",n=i(y.jsDump.parse(n)),t=i(y.jsDump.parse(t));var s=a+'<table><tr class="test-expected"><th>Expected: </th><td><pre>'+n+"</pre></td></tr>";if(t!=n&&(s+='<tr class="test-actual"><th>Result: </th><td><pre>'+t+"</pre></td></tr>",s+='<tr class="test-diff"><th>Diff: </th><td><pre>'+y.diff(n,t)+"</pre></td></tr>"),!e){var l=r();l&&(o.source=l,s+='<tr class="test-source"><th>Source: </th><td><pre>'+l+"</pre></td></tr>")}s+="</table>",y.log(o),b.current.assertions.push({result:!!e,message:s})},url:function(t){t=d(d({},y.urlParams),t);var n,r="?";for(n in t)r+=encodeURIComponent(n)+"="+encodeURIComponent(t[n])+"&";return e.location.pathname+r.slice(0,-1)},begin:function(){},done:function(){},log:function(){},testStart:function(){},testDone:function(){},moduleStart:function(){},moduleDone:function(){}}),("undefined"==typeof document||"complete"===document.readyState)&&(b.autorun=!0),f(e,"load",function(){y.begin({});var t=d({},b);y.init(),d(b,t),b.blocking=!1;var n=h("qunit-userAgent");n&&(n.innerHTML=navigator.userAgent);var r=h("qunit-header");r&&(r.innerHTML='<a href="'+y.url({filter:void 0})+'"> '+r.innerHTML+'</a> <label><input name="noglobals" type="checkbox"'+(b.noglobals?' checked="checked"':"")+'>noglobals</label><label><input name="notrycatch" type="checkbox"'+(b.notrycatch?' checked="checked"':"")+">notrycatch</label>",f(r,"change",function(t){var n={};n[t.target.name]=t.target.checked?!0:void 0,e.location=y.url(n)}));var i=h("qunit-testrunner-toolbar");if(i){var a=document.createElement("input");if(a.type="checkbox",a.id="qunit-filter-pass",f(a,"click",function(){var e=document.getElementById("qunit-tests");if(a.checked)e.className=e.className+" hidepass";else{var t=" "+e.className.replace(/[\n\t\r]/g," ")+" ";e.className=t.replace(/ hidepass /," ")}m.sessionStorage&&(a.checked?sessionStorage.setItem("qunit-filter-passed-tests","true"):sessionStorage.removeItem("qunit-filter-passed-tests"))}),m.sessionStorage&&sessionStorage.getItem("qunit-filter-passed-tests")){a.checked=!0;var o=document.getElementById("qunit-tests");o.className=o.className+" hidepass"}i.appendChild(a);var s=document.createElement("label");s.setAttribute("for","qunit-filter-pass"),s.innerHTML="Hide passed tests",i.appendChild(s)}var l=h("qunit-fixture");l&&(b.fixture=l.innerHTML),b.autostart&&y.start()}),y.equiv=function(){function e(e,t,n){var r=y.objectType(e);return r?"function"===y.objectType(t[r])?t[r].apply(t,n):t[r]:void 0}var t,n=[],r=[],i=function(){function e(e,t){return e instanceof t.constructor||t instanceof e.constructor?t==e:t===e}return{string:e,"boolean":e,number:e,"null":e,undefined:e,nan:function(e){return isNaN(e)},date:function(e,t){return"date"===y.objectType(e)&&t.valueOf()===e.valueOf()},regexp:function(e,t){return"regexp"===y.objectType(e)&&t.source===e.source&&t.global===e.global&&t.ignoreCase===e.ignoreCase&&t.multiline===e.multiline},"function":function(){var e=n[n.length-1];return e!==Object&&"undefined"!=typeof e},array:function(e,n){var i,a,o,s;if("array"!==y.objectType(e))return!1;if(s=n.length,s!==e.length)return!1;for(r.push(n),i=0;s>i;i++){for(o=!1,a=0;a<r.length;a++)r[a]===n[i]&&(o=!0);if(!o&&!t(n[i],e[i]))return r.pop(),!1}return r.pop(),!0},object:function(e,i){var a,o,s,l=!0,u=[],c=[];if(i.constructor!==e.constructor)return!1;n.push(i.constructor),r.push(i);for(a in i){for(s=!1,o=0;o<r.length;o++)r[o]===i[a]&&(s=!0);if(u.push(a),!s&&!t(i[a],e[a])){l=!1;break}}n.pop(),r.pop();for(a in e)c.push(a);return l&&t(u.sort(),c.sort())}}}();return t=function(){var t=Array.prototype.slice.apply(arguments);return t.length<2?!0:function(t,n){return t===n?!0:null===t||null===n||"undefined"==typeof t||"undefined"==typeof n||y.objectType(t)!==y.objectType(n)?!1:e(t,i,[n,t])}(t[0],t[1])&&arguments.callee.apply(this,t.splice(1,t.length-1))}}(),/**
 * jsDump
 * Copyright (c) 2008 Ariel Flesler - aflesler(at)gmail(dot)com | http://flesler.blogspot.com
 * Licensed under BSD (http://www.opensource.org/licenses/bsd-license.php)
 * Date: 5/15/2008
 * @projectDescription Advanced and extensible data dumping for Javascript.
 * @version 1.0.0
 * @author Ariel Flesler
 * @link {http://flesler.blogspot.com/2008/05/jsdump-pretty-dump-of-any-javascript.html}
 */
y.jsDump=function(){function e(e){return'"'+e.toString().replace(/"/g,'\\"')+'"'}function t(e){return e+""}function n(e,t,n){var r=a.separator(),i=a.indent(),o=a.indent(1);return t.join&&(t=t.join(","+r+o)),t?[e,o+t,i+n].join(r):e+n}function r(e){var t=e.length,r=Array(t);for(this.up();t--;)r[t]=this.parse(e[t]);return this.down(),n("[",r,"]")}var i=/^function (\w+)/,a={parse:function(e,t){var n=this.parsers[t||this.typeOf(e)];return t=typeof n,"function"==t?n.call(this,e):"string"==t?n:this.parsers.error},typeOf:function(e){var t;return t=null===e?"null":"undefined"==typeof e?"undefined":y.is("RegExp",e)?"regexp":y.is("Date",e)?"date":y.is("Function",e)?"function":void 0!==typeof e.setInterval&&"undefined"!=typeof e.document&&"undefined"==typeof e.nodeType?"window":9===e.nodeType?"document":e.nodeType?"node":"object"==typeof e&&"number"==typeof e.length&&e.length>=0?"array":typeof e},separator:function(){return this.multiline?this.HTML?"<br />":"\n":this.HTML?"&nbsp;":" "},indent:function(e){if(!this.multiline)return"";var t=this.indentChar;return this.HTML&&(t=t.replace(/\t/g,"   ").replace(/ /g,"&nbsp;")),Array(this._depth_+(e||0)).join(t)},up:function(e){this._depth_+=e||1},down:function(e){this._depth_-=e||1},setParser:function(e,t){this.parsers[e]=t},quote:e,literal:t,join:n,_depth_:1,parsers:{window:"[Window]",document:"[Document]",error:"[ERROR]",unknown:"[Unknown]","null":"null",undefined:"undefined","function":function(e){var t="function",r="name"in e?e.name:(i.exec(e)||[])[1];return r&&(t+=" "+r),t+="(",t=[t,y.jsDump.parse(e,"functionArgs"),"){"].join(""),n(t,y.jsDump.parse(e,"functionCode"),"}")},array:r,nodelist:r,arguments:r,object:function(e){var t=[];y.jsDump.up();for(var r in e)t.push(y.jsDump.parse(r,"key")+": "+y.jsDump.parse(e[r]));return y.jsDump.down(),n("{",t,"}")},node:function(e){var t=y.jsDump.HTML?"&lt;":"<",n=y.jsDump.HTML?"&gt;":">",r=e.nodeName.toLowerCase(),i=t+r;for(var a in y.jsDump.DOMAttrs){var o=e[y.jsDump.DOMAttrs[a]];o&&(i+=" "+a+"="+y.jsDump.parse(o,"attribute"))}return i+n+t+"/"+r+n},functionArgs:function(e){var t=e.length;if(!t)return"";for(var n=Array(t);t--;)n[t]=String.fromCharCode(97+t);return" "+n.join(", ")+" "},key:e,functionCode:"[code]",attribute:e,string:e,date:e,regexp:t,number:t,"boolean":t},DOMAttrs:{id:"id",name:"name","class":"className"},HTML:!1,indentChar:"  ",multiline:!0};return a}(),y.diff=function(){function e(e,t){for(var n=new Object,r=new Object,i=0;i<t.length;i++)null==n[t[i]]&&(n[t[i]]={rows:new Array,o:null}),n[t[i]].rows.push(i);for(var i=0;i<e.length;i++)null==r[e[i]]&&(r[e[i]]={rows:new Array,n:null}),r[e[i]].rows.push(i);for(var i in n)1==n[i].rows.length&&"undefined"!=typeof r[i]&&1==r[i].rows.length&&(t[n[i].rows[0]]={text:t[n[i].rows[0]],row:r[i].rows[0]},e[r[i].rows[0]]={text:e[r[i].rows[0]],row:n[i].rows[0]});for(var i=0;i<t.length-1;i++)null!=t[i].text&&null==t[i+1].text&&t[i].row+1<e.length&&null==e[t[i].row+1].text&&t[i+1]==e[t[i].row+1]&&(t[i+1]={text:t[i+1],row:t[i].row+1},e[t[i].row+1]={text:e[t[i].row+1],row:i+1});for(var i=t.length-1;i>0;i--)null!=t[i].text&&null==t[i-1].text&&t[i].row>0&&null==e[t[i].row-1].text&&t[i-1]==e[t[i].row-1]&&(t[i-1]={text:t[i-1],row:t[i].row-1},e[t[i].row-1]={text:e[t[i].row-1],row:i-1});return{o:e,n:t}}return function(t,n){t=t.replace(/\s+$/,""),n=n.replace(/\s+$/,"");var r=e(""==t?[]:t.split(/\s+/),""==n?[]:n.split(/\s+/)),i="",a=t.match(/\s+/g);null==a?a=[" "]:a.push(" ");var o=n.match(/\s+/g);if(null==o?o=[" "]:o.push(" "),0==r.n.length)for(var s=0;s<r.o.length;s++)i+="<del>"+r.o[s]+a[s]+"</del>";else{if(null==r.n[0].text)for(n=0;n<r.o.length&&null==r.o[n].text;n++)i+="<del>"+r.o[n]+a[n]+"</del>";for(var s=0;s<r.n.length;s++)if(null==r.n[s].text)i+="<ins>"+r.n[s]+o[s]+"</ins>";else{var l="";for(n=r.n[s].row+1;n<r.o.length&&null==r.o[n].text;n++)l+="<del>"+r.o[n]+a[n]+"</del>";i+=" "+r.n[s].text+o[s]+l}}return i}}()}(this);