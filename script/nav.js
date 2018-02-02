/*
 * name: 'nav.js';
 * author: 'NearSaint';
 * time: '2018.0111';
 */

/*
 *  nav_main
 */
var nav_main = new Vue({
  el: '.nav_main',
  data: {
    nav_focus: null,
    nav_scrollTop: 0,
    nav_fixed: false,
    nav_dropdown: false,
  },
  methods: {
    navScroll() {
      nav_scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      if (nav_scrollTop > 180) {
        this.nav_fixed = true;
      }
      if (nav_scrollTop < 10) {
        this.nav_fixed = false;
      }
    }, //end navScroll
    navDropdown() {
      if (this.nav_dropdown) {
        this.nav_dropdown = false;
      } else {
        this.nav_dropdown = true;
      }
    }, //end navDropdown
    closeNavDropdown() {
      if (this.nav_dropdown) {
        this.nav_dropdown = false;
      }
    } //end closeNavDropdown
  },
  mounted() {
    window.addEventListener('scroll', this.navScroll);
  },
})

/*
 *  document Ready
 */
$(document).ready(function() {});