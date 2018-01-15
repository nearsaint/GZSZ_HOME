/*
 * name: 'base.js';
 * author: 'NearSaint';
 * time: '2017.1228';
 */

/*
 *  touch - hover for mobile;
 */
$(document).on('touchstart', 'touch', function() {
  $(this).addClass('touched');
});
$(document).on('touchend', 'a', function() {
  $(this).removeClass('touched');
});

/*
 *  wow - the animate in the all page;
 */
new WOW().init();

/*
 *  document Ready
 */
$(document).ready(function() {});