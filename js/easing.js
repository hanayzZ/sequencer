// JavaScript Document
jQuery.easing['jswing'] = jQuery.easing['swing'];
jQuery.extend( jQuery.easing,
{
 def: 'easeOutQuad',
 swing: function (x, t, b, c, d) {
  //alert(jQuery.easing.default);
  return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
 },
 easeInQuad: function (x, t, b, c, d) {
  return c*(t/=d)*t + b;
 },
 easeOutQuad: function (x, t, b, c, d) {
  return -c *(t/=d)*(t-2) + b;
 },
 easeInOutQuad: function (x, t, b, c, d) {
  if ((t/=d/2) < 1) return c/2*t*t + b;
  return -c/2 * ((--t)*(t-2) - 1) + b;
 },
 easeInCubic: function (x, t, b, c, d) {
  return c*(t/=d)*t*t + b;
 },
 easeOutCubic: function (x, t, b, c, d) {
  return c*((t=t/d-1)*t*t + 1) + b;
 },
 easeInOutCubic: function (x, t, b, c, d) {
  if ((t/=d/2) < 1) return c/2*t*t*t + b;
  return c/2*((t-=2)*t*t + 2) + b;
 },
 easeInQuart: function (x, t, b, c, d) {
  return c*(t/=d)*t*t*t + b;
 },
 easeOutQuart: function (x, t, b, c, d) {
  return -c * ((t=t/d-1)*t*t*t - 1) + b;
 },
 easeInOutQuart: function (x, t, b, c, d) {
  if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
  return -c/2 * ((t-=2)*t*t*t - 2) + b;
 },
 easeInQuint: function (x, t, b, c, d) {
  return c*(t/=d)*t*t*t*t + b;
 },
 easeOutQuint: function (x, t, b, c, d) {
  return c*((t=t/d-1)*t*t*t*t + 1) + b;
 },
 easeInOutQuint: function (x, t, b, c, d) {
  if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
  return c/2*((t-=2)*t*t*t*t + 2) + b;
 },
 easeInSine: function (x, t, b, c, d) {
  return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
 },
 easeOutSine: function (x, t, b, c, d) {      //匀速
  return c * Math.sin(t/d * (Math.PI/2)) + b;
 },
 easeInOutSine: function (x, t, b, c, d) {           //匀速
  return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
 },
 easeInExpo: function (x, t, b, c, d) {     //慢慢加速到达终点   
  return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
 },
 easeOutExpo: function (x, t, b, c, d) {              //缓动到达终点    
  return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
 },
 easeInOutExpo: function (x, t, b, c, d) {                //慢慢加速到达终点    
  if (t==0) return b;
  if (t==d) return b+c;
  if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
  return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
 },
 easeInCirc: function (x, t, b, c, d) {                   //慢慢加速到达终点    
  return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
 },
 easeOutCirc: function (x, t, b, c, d) {             //缓动到达终点    
  return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
 },
 easeInOutCirc: function (x, t, b, c, d) {
  if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
  return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
 },
 easeInElastic: function (x, t, b, c, d) {             //弹簧一样——————到达终点
  var s=1.70158;var p=0;var a=c;
  if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
  if (a < Math.abs(c)) { a=c; var s=p/4; }
  else var s = p/(2*Math.PI) * Math.asin (c/a);
  return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
 },
 easeOutElastic: function (x, t, b, c, d) {                      //到达终点——————弹簧一样
  var s=1.70158;var p=0;var a=c;
  if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
  if (a < Math.abs(c)) { a=c; var s=p/4; }
  else var s = p/(2*Math.PI) * Math.asin (c/a);
  return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
 },
 easeInOutElastic: function (x, t, b, c, d) {                  //先倒回来，再快速超过终点，在倒回来
  var s=1.70158;var p=0;var a=c;
  if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
  if (a < Math.abs(c)) { a=c; var s=p/4; }
  else var s = p/(2*Math.PI) * Math.asin (c/a);
  if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
  return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
 },
 easeInBack: function (x, t, b, c, d, s) {             //先倒回来，再加速到终点
  if (s == undefined) s = 1.70158;
  return c*(t/=d)*t*((s+1)*t - s) + b;
 },
 easeOutBack: function (x, t, b, c, d, s) {                  //中间快两边慢
  if (s == undefined) s = 1.70158;
  return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
 },
 easeInOutBack: function (x, t, b, c, d, s) {               //先倒回来，在超过目标，在返回终点
  if (s == undefined) s = 1.70158; 
  if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
  return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
 },
 easeInBounce: function (x, t, b, c, d) {               //于落地相反落地
  return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
 },
 easeOutBounce: function (x, t, b, c, d) {             //落地效果
  if ((t/=d) < (1/2.75)) {
   return c*(7.5625*t*t) + b;
  } else if (t < (2/2.75)) {
   return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
  } else if (t < (2.5/2.75)) {
   return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
  } else {
   return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
  }
 },
 easeInOutBounce: function (x, t, b, c, d) {                //前边弹两下，后边弹两下
  if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
  return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
 }
});
 
/*
 插件的参数
 这个插件有三个参数：duration、easing、complete。
 duration 参数
 用来指定动画变化的时间，以毫秒为单位。
 easing 参数
 指定这个动画要使用何种过渡样式。具体的过渡样式名和效果，需要在官方主页上查看左边的 “Example”，选择找到自己想要的效果。
 complete 参数
 设置一个回调函数，当动画完成之后，执行这个函数。
 其他注意事项
 使用 slideUp 动画方法
 slideUp 这类的动画方法，要比 animate 简单一些，不需要复杂的属性参数，所以可以直接这样写：
 $(element).slideUp(1000, method, callback});
 $(element).slideUp({ duration: 1000, easing: method, complete: callback});
 其他的 hide 、show 之类的方法，自行类比。
 指定默认的 easing 样式
 在使用中 easing 参数是可以省略的，省略之后，就会调用默认的过渡样式。可以使用下面一句代码，指定默认的动画过渡样式。
 jQuery.easing.def = "过渡样式名，例如 easeInOutCirc";
*/
 
/*$('.main').animate({top:-(iNow-1)*heis},{easing: 'easeOutCirc', duration: 1000,complete:function(){
      iNow--; 
      $('.list_btn').find('p').eq(iNow).addClass('p_cur').siblings().removeClass('p_cur');
      $('title').text(iNow);
      IsGo=true;
 }}); */