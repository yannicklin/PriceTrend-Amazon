webpackJsonp([4,10,21,22],{193:function(e,t,a){"use strict";function n(e){a(379)}Object.defineProperty(t,"__esModule",{value:!0});var r=a(381),i=a(382),s=a(1),u=n,o=s(r.a,i.a,!1,u,"data-v-c6897164",null);t.default=o.exports},196:function(e,t,a){"use strict";function n(e){a(515)}Object.defineProperty(t,"__esModule",{value:!0});var r=a(517),i=a(518),s=a(1),u=n,o=s(r.a,i.a,!1,u,"data-v-19a7ef26",null);t.default=o.exports},197:function(e,t,a){"use strict";function n(e){a(519)}Object.defineProperty(t,"__esModule",{value:!0});var r=a(521),i=a(522),s=a(1),u=n,o=s(r.a,i.a,!1,u,"data-v-3095a202",null);t.default=o.exports},216:function(e,t,a){"use strict";function n(e){a(767)}Object.defineProperty(t,"__esModule",{value:!0});var r=a(769),i=a(770),s=a(1),u=n,o=s(r.a,i.a,!1,u,null,null);t.default=o.exports},225:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.regex=t.ref=t.len=t.req=t.withParams=void 0;var n=a(497),r=function(e){return e&&e.__esModule?e:{default:e}}(n);t.withParams=r.default;var i=t.req=function(e){if(Array.isArray(e))return!!e.length;if(void 0===e||null===e||!1===e)return!1;if(e instanceof Date)return!isNaN(e.getTime());if("object"==typeof e){for(var t in e)return!0;return!1}return!!String(e).length};t.len=function(e){return Array.isArray(e)?e.length:"object"==typeof e?Object.keys(e).length:String(e).length},t.ref=function(e,t,a){return"function"==typeof e?e.call(t,a):a[e]},t.regex=function(e,t){return(0,r.default)({type:e},function(e){return!i(e)||t.test(e)})}},236:function(e,t,a){e.exports={default:a(238),__esModule:!0}},238:function(e,t,a){a(239),e.exports=a(4).Object.keys},239:function(e,t,a){var n=a(32),r=a(15);a(240)("keys",function(){return function(e){return r(n(e))}})},240:function(e,t,a){var n=a(12),r=a(4),i=a(6);e.exports=function(e,t){var a=(r.Object||{})[e]||Object[e],s={};s[e]=t(a),n(n.S+n.F*i(function(){a(1)}),"Object",s)}},379:function(e,t,a){var n=a(380);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a(192)("216a62d6",n,!0)},380:function(e,t,a){t=e.exports=a(191)(void 0),t.push([e.i,".has-success[data-v-c6897164]{border-bottom:2px solid #4caf50!important}i[data-v-c6897164]{position:absolute;top:20px;right:7px;font-size:22px}.floating-label[data-v-c6897164]{min-height:81px}.floating-label span .label[data-v-c6897164]{padding:0 .3rem 0 0;font-size:13px}.fade-enter-active[data-v-c6897164],.fade-leave-active[data-v-c6897164]{transition:opacity .3s}.fade-enter[data-v-c6897164],.fade-leave-active[data-v-c6897164],.fade-leave-to[data-v-c6897164]{opacity:0}.slide-fade-enter-active[data-v-c6897164],.slide-fade-leave-active[data-v-c6897164]{transition:all .7s ease}.slide-fade-enter[data-v-c6897164]{-webkit-transform:translateY(-10px);transform:translateY(-10px);opacity:0}.slide-fade-leave-active[data-v-c6897164]{-webkit-transform:translateY(-7px);transform:translateY(-7px);opacity:0}",""])},381:function(e,t,a){"use strict";var n=a(236),r=a.n(n);t.a={props:{validation:{type:Object,required:!0},value:{required:!0},validationMessages:{},label:{}},computed:{messageKeys:function(){return r()(this.validationMessages)},validAndDirty:function(){return!this.validation.$invalid&&this.validation.$dirty},invalidAndDirty:function(){return this.validation.$invalid&&this.validation.$dirty},labelColor:function(){return this.validAndDirty?"text-green":this.invalidAndDirty?"text-red ":""},borderColor:function(){return this.validAndDirty?"has-success":this.invalidAndDirty?"has-error":""},shakeDiv:function(){return this.invalidAndDirty?"animate-pop":""}},data:function(){return{}},methods:{change:function(e){this.validation.$touch(),this.$emit("input",e)}}}},382:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"floating-label",class:e.shakeDiv},[a("input",{staticClass:"full-width",class:e.borderColor,attrs:{required:""},domProps:{value:e.value},on:{input:function(t){e.change(t.target.value)}}}),e._v(" "),a("label",{class:e.labelColor},[e._v(e._s(e.label))]),e._v(" "),a("transition-group",{attrs:{name:"slide-fade"}},e._l(e.messageKeys,function(t,n){return a("span",{directives:[{name:"show",rawName:"v-show",value:!e.validation[t]&&e.validation.$dirty,expression:"!validation[key] && validation.$dirty"}],key:n,staticClass:"label text-red"},[e._v("\n\n        "+e._s(e.validationMessages[t])+"\n      ")])})),e._v(" "),a("transition",{attrs:{name:"fade",mode:"out-in"}},[a("i",{directives:[{name:"show",rawName:"v-show",value:e.validAndDirty,expression:"validAndDirty"}],staticClass:"text-green"},[e._v("check")])]),e._v(" "),a("transition",{attrs:{name:"fade",mode:"out-in"}},[a("i",{directives:[{name:"show",rawName:"v-show",value:e.invalidAndDirty,expression:"invalidAndDirty"}],staticClass:"text-red"},[e._v("clear")])])],1)])},r=[],i={render:n,staticRenderFns:r};t.a=i},495:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.maxValue=t.minValue=t.and=t.or=t.url=t.sameAs=t.requiredUnless=t.requiredIf=t.required=t.minLength=t.maxLength=t.macAddress=t.ipAddress=t.email=t.between=t.numeric=t.alphaNum=t.alpha=void 0;var r=a(496),i=n(r),s=a(498),u=n(s),o=a(499),l=n(o),c=a(500),d=n(c),f=a(501),v=n(f),p=a(502),h=n(p),m=a(503),_=n(m),b=a(504),y=n(b),g=a(505),x=n(g),w=a(506),P=n(w),A=a(507),q=n(A),j=a(508),O=n(j),M=a(509),C=n(M),$=a(510),D=n($),k=a(511),N=n(k),S=a(512),z=n(S),F=a(513),U=n(F),R=a(514),E=n(R);t.alpha=i.default,t.alphaNum=u.default,t.numeric=l.default,t.between=d.default,t.email=v.default,t.ipAddress=h.default,t.macAddress=_.default,t.maxLength=y.default,t.minLength=x.default,t.required=P.default,t.requiredIf=q.default,t.requiredUnless=O.default,t.sameAs=C.default,t.url=D.default,t.or=N.default,t.and=z.default,t.minValue=U.default,t.maxValue=E.default},496:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(225);t.default=(0,n.regex)("alpha",/^[a-zA-Z]*$/)},497:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(47).withParams;t.default=n},498:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(225);t.default=(0,n.regex)("alphaNum",/^[a-zA-Z0-9]*$/)},499:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(225);t.default=(0,n.regex)("numeric",/^[0-9]*$/)},500:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(225);t.default=function(e,t){return(0,n.withParams)({type:"between",min:e,max:t},function(a){return!(0,n.req)(a)||(!/\s/.test(a)||a instanceof Date)&&+e<=+a&&+t>=+a})}},501:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(225),r=/(^$|^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$)/;t.default=(0,n.regex)("email",r)},502:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(225);t.default=(0,n.withParams)({type:"ipAddress"},function(e){if(!(0,n.req)(e))return!0;if("string"!=typeof e)return!1;var t=e.split(".");return 4===t.length&&t.every(r)});var r=function(e){if(e.length>3||0===e.length)return!1;if("0"===e[0]&&"0"!==e)return!1;if(!e.match(/^\d+$/))return!1;var t=0|+e;return t>=0&&t<=255}},503:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(225);t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:":";return(0,n.withParams)({type:"macAddress"},function(t){if(!(0,n.req)(t))return!0;if("string"!=typeof t)return!1;var a="string"==typeof e&&""!==e?t.split(e):12===t.length||16===t.length?t.match(/.{2}/g):null;return null!==a&&(6===a.length||8===a.length)&&a.every(r)})};var r=function(e){return e.toLowerCase().match(/^[0-9a-f]{2}$/)}},504:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(225);t.default=function(e){return(0,n.withParams)({type:"maxLength",max:e},function(t){return!(0,n.req)(t)||(0,n.len)(t)<=e})}},505:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(225);t.default=function(e){return(0,n.withParams)({type:"minLength",min:e},function(t){return!(0,n.req)(t)||(0,n.len)(t)>=e})}},506:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(225);t.default=(0,n.withParams)({type:"required"},n.req)},507:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(225);t.default=function(e){return(0,n.withParams)({type:"requiredIf",prop:e},function(t,a){return!(0,n.ref)(e,this,a)||(0,n.req)(t)})}},508:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(225);t.default=function(e){return(0,n.withParams)({type:"requiredUnless",prop:e},function(t,a){return!!(0,n.ref)(e,this,a)||(0,n.req)(t)})}},509:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(225);t.default=function(e){return(0,n.withParams)({type:"sameAs",eq:e},function(t,a){return t===(0,n.ref)(e,this,a)})}},510:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(225),r=/^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[\/?#]\S*)?$/;t.default=(0,n.regex)("url",r)},511:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(225);t.default=function(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,n.withParams)({type:"or"},function(){for(var e=this,a=arguments.length,n=Array(a),r=0;r<a;r++)n[r]=arguments[r];return t.length>0&&t.reduce(function(t,a){return t||a.apply(e,n)},!1)})}},512:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(225);t.default=function(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,n.withParams)({type:"and"},function(){for(var e=this,a=arguments.length,n=Array(a),r=0;r<a;r++)n[r]=arguments[r];return t.length>0&&t.reduce(function(t,a){return t&&a.apply(e,n)},!0)})}},513:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(225);t.default=function(e){return(0,n.withParams)({type:"minValue",min:e},function(t){return!(0,n.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t>=+e})}},514:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(225);t.default=function(e){return(0,n.withParams)({type:"maxValue",max:e},function(t){return!(0,n.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t<=+e})}},515:function(e,t,a){var n=a(516);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a(192)("0439d31e",n,!0)},516:function(e,t,a){t=e.exports=a(191)(void 0),t.push([e.i,"@media screen and (min-width:600px){.post-data[data-v-19a7ef26]{max-width:110px}}@media screen and (min-width:920px){.post-data[data-v-19a7ef26]{max-width:340px}}@media screen and (min-width:1280px){.post-data[data-v-19a7ef26]{max-width:540px}}",""])},517:function(e,t,a){"use strict";t.a={props:{userData:{type:Object,required:!0}},data:function(){return{userAlbums:[],selectedAlbum:""}},computed:{filteredAlbums:function(){return this.userAlbums.slice(0,3)}},methods:{change:function(e){this.$emit("input",e)}},watch:{userData:function(){var e=this;this.$http.jsonplaceholder.get("albums?userId="+this.userData.id).then(function(t){e.userAlbums=t.data})}}}},518:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.userData.name?a("div",{staticClass:"card"},[a("div",{staticClass:"card-content"},[a("h6",[e._v(e._s(e.userData.name))]),e._v("\n    "+e._s(e.userData.email)+"\n    "),a("p",{staticClass:"caption"},[e._v("Choose one of the user Albums")]),e._v(" "),a("div",{staticClass:"list"},e._l(e.filteredAlbums,function(t){return a("label",{staticClass:"item two-lines"},[a("div",{staticClass:"item-primary"},[a("q-radio",{attrs:{val:t.id},on:{input:function(a){e.change(t)}},model:{value:e.selectedAlbum,callback:function(t){e.selectedAlbum=t},expression:"selectedAlbum"}})],1),e._v(" "),a("div",{staticClass:"item-content post-data"},[a("div",{staticClass:"ellipsis"},[e._v(e._s(t.title))])])])}))])]):e._e()},r=[],i={render:n,staticRenderFns:r};t.a=i},519:function(e,t,a){var n=a(520);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a(192)("0662eef4",n,!0)},520:function(e,t,a){t=e.exports=a(191)(void 0),t.push([e.i,"",""])},521:function(e,t,a){"use strict";t.a={props:{selectedAlbum:{required:!0}},watch:{selectedAlbum:function(){var e=this;this.$http.jsonplaceholder.get("photos?albumId="+this.selectedAlbum.id).then(function(t){e.commentsOfPost=t.data})}},computed:{selectedRows:function(){return this.$refs.dataTable.selectedRows},configs:function(){return{title:"Photos of the album : "+this.selectedAlbum.title,columnPicker:!0,rowHeight:"171px",selection:"multiple",pagination:{rowsPerPage:3,options:[3,6]}}}},data:function(){return{commentsOfPost:[],columns:[{label:"Title",field:"title",width:"130px",filter:!0,sort:!0},{label:"Photo",field:"photo",width:"100px"}]}},methods:{addPrint:function(e){this.$emit("selectedRows",e)}}}},522:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.commentsOfPost.length>0?a("q-data-table",{ref:"dataTable",attrs:{data:e.commentsOfPost,columns:e.columns,config:e.configs},scopedSlots:e._u([{key:"col-photo",fn:function(e){return[a("img",{attrs:{src:e.row.thumbnailUrl,alt:""}})]}},{key:"selection",fn:function(t){return[a("button",{staticClass:"orange",on:{click:function(a){e.addPrint(t.rows)}}},[e._v("\n      Add to print\n    ")])]}}])}):e._e()},r=[],i={render:n,staticRenderFns:r};t.a=i},767:function(e,t,a){var n=a(768);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a(192)("739929c4",n,!0)},768:function(e,t,a){t=e.exports=a(191)(void 0),t.push([e.i,"",""])},769:function(e,t,a){"use strict";var n=a(2),r=a(495),i=(a.n(r),a(193)),s=a(196),u=a(197);t.a={name:"AdvancedFormOne",data:function(){return{userName:"Bret",userData:{},currentStep:"1",selectedAlbum:"",selectedPhotos:[],validationMessages:{userName:{required:"Username is required."}}}},validations:{userName:{required:r.required}},computed:{photosForGalery:function(){var e=[];return this.selectedPhotos.forEach(function(t){e.push(t.data.thumbnailUrl)}),e}},components:{QStepper:n.F,QStep:n.E,QInput:n.n,QBtn:n.c,QModal:n.w,QGalleryCarousel:n.k,eInput:i.default,cardUserData:s.default,cardDataTable:u.default},methods:{finish:function(){this.$refs.previewModal.open()},findUser:function(){var e=this;this.$http.jsonplaceholder.get("users?username="+this.userName).then(function(t){e.userData=t.data[0]}),this.$v.$touch()},populatePhotos:function(e){var t=this;e.forEach(function(e){t.selectedPhotos.push(e)})}}}},770:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("card-ball",{attrs:{icon:"fa-id-card-o","icon-size":"36px",title:"Choose photos to reveal of the user"}},[a("div",{attrs:{slot:"content"},slot:"content"},[a("q-stepper",{ref:"stepper",attrs:{vertical:""},on:{step:function(t){e.currentStep=t}}},[a("q-step",{attrs:{title:"Find a user by username"}},[a("div",{staticClass:"row wrap gutter"},[a("div",{staticClass:"col-4"},[a("q-input",{attrs:{"float-label":"User Name",validation:e.$v.userName,"validation-messages":e.validationMessages.userName,value:e.userName},model:{value:e.userName,callback:function(t){e.userName=t},expression:"userName"}})],1),e._v(" "),a("div",{staticClass:"col-2"},[a("q-btn",{attrs:{color:"primary"},on:{click:function(t){e.findUser()}}},[e._v("Search")])],1),e._v(" "),a("div",{staticClass:"col-auto"},[a("card-user-data",{attrs:{"user-data":e.userData},model:{value:e.selectedAlbum,callback:function(t){e.selectedAlbum=t},expression:"selectedAlbum"}})],1)]),e._v(" "),a("div",{staticClass:"row"},[e.selectedAlbum?a("q-btn",{attrs:{color:"orange"},on:{click:function(t){e.$refs.stepper.nextStep()}}},[e._v("Continue")]):e._e()],1)]),e._v(" "),a("q-step",{attrs:{title:"Choose photos"}},[a("card-data-table",{attrs:{"selected-album":e.selectedAlbum},on:{selectedRows:e.populatePhotos}}),e._v(" "),a("div",{staticClass:"row wrap gutter"},[a("div",{staticClass:"col"},[a("q-btn",{attrs:{color:"orange fit"},on:{click:function(t){e.$refs.stepper.previousStep()}}},[e._v("Back")])],1),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:e.selectedPhotos.length>0,expression:"selectedPhotos.length > 0"}],staticClass:"col"},[a("q-btn",{attrs:{color:"green fit"},on:{click:function(t){e.finish()}}},[e._v("Preview")])],1)])],1)],1)],1)]),e._v(" "),a("q-modal",{ref:"previewModal",staticClass:"minimized"},[a("q-gallery-carousel",{attrs:{src:e.photosForGalery}})],1)],1)},r=[],i={render:n,staticRenderFns:r};t.a=i}});