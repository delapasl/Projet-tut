/*! This minified app bundle contains open source software from several third party developers. Please review CREDITS.md in the root directory or LICENSE.md in the current directory for complete licensing, copyright and patent information. This file and the included code may not be redistributed without the attributions listed in LICENSE.md, including associate copyright notices and licensing information. */!function(t){var e={};function n(i){if(e[i])return e[i].exports;var _=e[i]={i:i,l:!1,exports:{}};return t[i].call(_.exports,_,_.exports,n),_.l=!0,_.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var _ in t)n.d(i,_,function(e){return t[e]}.bind(null,_));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=602)}({19:function(t,e){t.exports=jQuery},602:function(t,e,n){(function(t){var e=t("#et_settings_meta_box"),n=e.find(".et_pb_page_settings_container:first"),i=t(".et_pb_toggle_builder_wrapper"),_=t(".et_pb_page_setting"),s=t(".et_pb_page_layout_settings"),o=t("#formatdiv"),r=window.et_pb_options;i.hasClass("et_pb_builder_is_used")&&function(){var e=s.closest("#et_settings_meta_box").find(".et_pb_page_layout_settings");if(_.filter(":visible").length>1?(e.hide(),s.find(".et_pb_side_nav_settings").show()):("post"!==r.post_type&&"no"===r.is_third_party_post_type&&e.hide(),s.closest("#et_settings_meta_box").find(".et_pb_side_nav_settings").show(),s.closest("#et_settings_meta_box").find(".et_pb_single_title").show()),e.length>0){var n=e.find('option[value="et_full_width_page"]');n.length>0&&n.show()}if(o.length){var i=o.find('input[type="radio"]:checked').val();o.hide(),t(".et_divi_format_setting.et_divi_"+i+"_settings").hide()}"project"===r.post_type&&s.closest("#et_settings_meta_box").find(".et_pb_project_nav").show()}(),n.hasClass("et_pb_page_settings_container--tb-has-header")&&e.find(".et_pb_nav_settings").hide(),n.hasClass("et_pb_page_settings_container--tb-has-body")&&e.find(".et_pb_page_layout_settings, .et_pb_single_title").hide(),0===n.height()&&e.hide()}).call(this,n(19))}});
//# sourceMappingURL=page-settings-metabox.js.map