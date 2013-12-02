/*
 * Metadata - jQuery plugin for parsing metadata from elements
 *
 * Copyright (c) 2006 John Resig, Yehuda Katz, J�örn Zaefferer, Paul McLanahan
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 *
 * Revision: $Id: jquery.metadata.js 4187 2007-12-16 17:15:27Z joern.zaefferer $
 *
 */
!function($){$.extend({metadata:{defaults:{type:"class",name:"metadata",cre:/({.*})/,single:"metadata"},setType:function(e,t){this.defaults.type=e,this.defaults.name=t},get:function(elem,opts){var settings=$.extend({},this.defaults,opts);settings.single.length||(settings.single="metadata");var data=$.data(elem,settings.single);if(data)return data;if(data="{}","class"==settings.type){var m=settings.cre.exec(elem.className);m&&(data=m[1])}else if("elem"==settings.type){if(!elem.getElementsByTagName)return void 0;var e=elem.getElementsByTagName(settings.name);e.length&&(data=$.trim(e[0].innerHTML))}else if(void 0!=elem.getAttribute){var attr=elem.getAttribute(settings.name);attr&&(data=attr)}return data.indexOf("{")<0&&(data="{"+data+"}"),data=eval("("+data+")"),$.data(elem,settings.single,data),data}}}),$.fn.metadata=function(e){return $.metadata.get(this[0],e)}}(jQuery);