/** File generated by Grunt -- do not modify
 *  JQUERY-FORM-VALIDATOR
 *
 *  @version 2.3.79
 *  @website http://formvalidator.net/
 *  @author Victor Jonsson, http://victorjonsson.se
 *  @license MIT
 */
!function(a,b){"function"==typeof define&&define.amd?define(["jquery"],function(a){return b(a)}):"object"==typeof module&&module.exports?module.exports=b(require("jquery")):b(a.jQuery)}(this,function(a){!function(a){function b(a,b,d){var e=new Date(a,b,d),f=new Date,g=f.getFullYear()-e.getFullYear();e.setFullYear(e.getFullYear()+g),e>f&&(g--,e.setFullYear(e.getFullYear()-1));var h=Math.floor((f.getTime()-e.getTime())/864e5),i=g+h/(c(f.getFullYear())?366:365),j=((i+"").split(".")[1]||"").substr(0,3);return i>=0?Math.floor(i)+(j>=915?1:0):(j*=10,Math.floor(i)+(j<=840?1:0))}function c(a){var b=new Date(a,1,28);return b.setDate(b.getDate()+1),1===b.getMonth()}a.formUtils.registerLoadedModule("date"),a.formUtils.addValidator({name:"time",validatorFunction:function(a){if(null===a.match(/^(\d{2}):(\d{2})$/))return!1;var b=parseInt(a.split(":")[0],10),c=parseInt(a.split(":")[1],10);return!(b>23||c>59)},errorMessage:"",errorMessageKey:"badTime"}),a.formUtils.addValidator({name:"birthdate",validatorFunction:function(c,d,e){var f="yyyy-mm-dd";d.valAttr("format")?f=d.valAttr("format"):"undefined"!=typeof e.dateFormat&&(f=e.dateFormat);var g=a.formUtils.parseDate(c,f);if(!g)return!1;var h=g[0],i=g[1],j=g[2],k=b(h,i,j),l=(d.valAttr("age-range")||"0-124").split("-");if(d.trigger("ageCalculated",[k]),2!==l.length||!a.isNumeric(l[0])||!a.isNumeric(l[1]))throw new Error("Date range format invalid");return k>=l[0]&&k<=l[1]},errorMessage:"",errorMessageKey:"badDate"})}(a)});