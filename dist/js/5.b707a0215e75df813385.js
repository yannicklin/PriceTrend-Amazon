webpackJsonp([5,14,15,16,17,18,19],{201:function(t,e,a){"use strict";function s(t){a(535)}Object.defineProperty(e,"__esModule",{value:!0});var i=a(537),n=a(538),l=a(1),c=s,r=l(i.a,n.a,!1,c,"data-v-f1a1d6c2",null);e.default=r.exports},202:function(t,e,a){"use strict";function s(t){a(539)}Object.defineProperty(e,"__esModule",{value:!0});var i=a(541),n=a(542),l=a(1),c=s,r=l(i.a,n.a,!1,c,"data-v-3a199b22",null);e.default=r.exports},203:function(t,e,a){"use strict";function s(t){a(543)}Object.defineProperty(e,"__esModule",{value:!0});var i=a(545),n=a(546),l=a(1),c=s,r=l(i.a,n.a,!1,c,null,null);e.default=r.exports},204:function(t,e,a){"use strict";function s(t){a(547)}Object.defineProperty(e,"__esModule",{value:!0});var i=a(549),n=a(550),l=a(1),c=s,r=l(i.a,n.a,!1,c,null,null);e.default=r.exports},205:function(t,e,a){"use strict";function s(t){a(551)}Object.defineProperty(e,"__esModule",{value:!0});var i=a(553),n=a(554),l=a(1),c=s,r=l(i.a,n.a,!1,c,null,null);e.default=r.exports},206:function(t,e,a){"use strict";function s(t){a(555)}Object.defineProperty(e,"__esModule",{value:!0});var i=a(557),n=a(558),l=a(1),c=s,r=l(i.a,n.a,!1,c,null,null);e.default=r.exports},219:function(t,e,a){"use strict";function s(t){a(779)}Object.defineProperty(e,"__esModule",{value:!0});var i=a(781),n=a(782),l=a(1),c=s,r=l(i.a,n.a,!1,c,"data-v-96690c08",null);e.default=r.exports},535:function(t,e,a){var s=a(536);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);a(192)("53ea786c",s,!0)},536:function(t,e,a){e=t.exports=a(191)(void 0),e.push([t.i,".label[data-v-f1a1d6c2]{min-height:50px}h5[data-v-f1a1d6c2]{font-weight:300;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto}h3[data-v-f1a1d6c2],h6[data-v-f1a1d6c2]{font-weight:300}.label.pointing-down[data-v-f1a1d6c2]:before,.label.pointing-left[data-v-f1a1d6c2]:before,.label.pointing-right[data-v-f1a1d6c2]:before,.label.pointing-up[data-v-f1a1d6c2]:before{width:1.4rem;height:1.4rem}.card[data-v-f1a1d6c2]{width:332px}",""])},537:function(t,e,a){"use strict";e.a={props:["title","titleClasses","price","priceSubtitle","buttonClasses","cardId"],data:function(){return{}},methods:{planSelected:function(){this.$emit("card-selected",this.cardId)}}}},538:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card text-center"},[a("div",{staticClass:"card-title no-padding "},[a("span",{staticClass:"label pointing-down text-white fit no-margin",class:t.titleClasses},[a("h5",{},[t._v(t._s(t.title))])])]),t._v(" "),a("div",{staticClass:"card-content bg-white"},[a("h3",[t._v("$ "+t._s(t.price))]),t._v(" "),a("h6",{staticClass:"text-italic"},[t._v(t._s(t.priceSubtitle))])]),t._v(" "),a("div",{staticClass:"card-actions"},[t._t("body")],2),t._v(" "),a("div",{staticClass:"card-content bg-white"},[a("button",{staticClass:"outline fit",class:t.buttonClasses,on:{click:function(e){t.planSelected()}}},[t._v("Choose")])])])},i=[],n={render:s,staticRenderFns:i};e.a=n},539:function(t,e,a){var s=a(540);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);a(192)("ca43bdfe",s,!0)},540:function(t,e,a){e=t.exports=a(191)(void 0),e.push([t.i,"h5[data-v-3a199b22]{font-weight:300;text-decoration:underline;margin-bottom:5%}.card[data-v-3a199b22]{min-width:350px;max-width:700px}",""])},541:function(t,e,a){"use strict";var s=a(2);e.a={props:["title","titleClasses","price","priceSubtitle","buttonClasses","cardId"],data:function(){return{progressBtn:0}},computed:{randomValueOne:function(){return Math.floor(5*Math.random()+1)},randomValueTwo:function(){return Math.floor(5*Math.random()+1)},randomValueThree:function(){return Math.floor(5*Math.random()+1)}},methods:{planSelected:function(){this.$emit("card-selected",this.cardId)},workButton:function(){var t=this;this.stopWorkButton(),this.progressBtn=15,this.workingButton=setInterval(function(){t.progressBtn+=parseInt(12*Math.random(),10),t.progressBtn>=100&&t.stopWorkButton()},500)},stopWorkButton:function(t){this.workingButton&&(clearInterval(this.workingButton),this.workingButton=null,this.planSelected()),void 0!==t&&(this.progressBtn=t)}},components:{QRating:s.A,QCollapsible:s.h,QBtn:s.c}}},542:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card "},[a("div",{staticClass:"card-content bg-white text-center"},[a("h5",[t._v(t._s(t.title))]),t._v(" "),a("h2",{staticClass:"inline-block"},[t._v("$ "+t._s(t.price))]),t._v(" "),a("span",[t._v(t._s(t.priceSubtitle))]),t._v(" "),a("div",{staticClass:"flex wrap gutter "},[a("div",{staticClass:"auto"},[a("div",{staticClass:"label bg-faded text-white "},[t._v("\n          Vitamin A\n          "),a("span",{staticClass:"right-detail "},[a("q-rating",{class:t.buttonClasses,staticStyle:{"font-size":"1.5rem"},attrs:{value:t.randomValueOne,max:7,icon:"thumb_up",readonly:""}})],1)])]),t._v(" "),a("div",{staticClass:"auto"},[a("div",{staticClass:"label bg-faded text-white"},[t._v("\n          Vitamin K\n          "),a("span",{staticClass:"right-detail"},[a("q-rating",{class:t.buttonClasses,staticStyle:{"font-size":"1.5rem"},attrs:{value:t.randomValueTwo,max:7,icon:"thumb_up",readonly:""}})],1)])]),t._v(" "),a("div",{staticClass:"auto"},[a("div",{staticClass:"label bg-faded text-white"},[t._v("\n          Vitamin B\n          "),a("span",{staticClass:"right-detail"},[a("q-rating",{class:t.buttonClasses,staticStyle:{"font-size":"1.5rem"},attrs:{value:t.randomValueTwo,max:7,icon:"thumb_up",readonly:""}})],1)])])])]),t._v(" "),a("div",{staticClass:"card-actions"},[a("div",{staticClass:"list fit"},[a("q-collapsible",{attrs:{group:"somegroup",icon:"format_list_bulleted",label:"Check inside for itens"}},[t._t("body")],2)],1)]),t._v(" "),a("div",{staticClass:"card-content bg-white"},[a("q-btn",{staticClass:"fit",class:t.buttonClasses,attrs:{loader:"",percentage:t.progressBtn},nativeOn:{click:function(e){t.workButton()}}},[t._v("\n      Choose\n    ")])],1)])},i=[],n={render:s,staticRenderFns:i};e.a=n},543:function(t,e,a){var s=a(544);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);a(192)("5254c5a0",s,!0)},544:function(t,e,a){e=t.exports=a(191)(void 0),e.push([t.i,"",""])},545:function(t,e,a){"use strict";e.a={data:function(){return{}}}},546:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"list striped"},[a("div",{staticClass:"item"},[a("div",{staticClass:"item-content"},[t._v("8 Oranges")])]),t._v(" "),a("div",{staticClass:"item"},[a("div",{staticClass:"item-content"},[t._v("6 Limons")])]),t._v(" "),a("div",{staticClass:"item"},[a("div",{staticClass:"item-content"},[t._v("3 Grapes")])])])}],n={render:s,staticRenderFns:i};e.a=n},547:function(t,e,a){var s=a(548);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);a(192)("db2ed9dc",s,!0)},548:function(t,e,a){e=t.exports=a(191)(void 0),e.push([t.i,"",""])},549:function(t,e,a){"use strict";var s=a(2);e.a={data:function(){return{}},components:{QCollapsible:s.h}}},550:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"list "},[a("q-collapsible",{attrs:{icon:"shopping_basket",label:"Citrus"}},[a("div",{staticClass:"item"},[a("div",{staticClass:"item-content"},[t._v("50 Oranges")])]),t._v(" "),a("div",{staticClass:"item"},[a("div",{staticClass:"item-content"},[t._v("45 Limes")])])]),t._v(" "),a("q-collapsible",{attrs:{icon:"favorite",label:"Berries"}},[a("div",{staticClass:"item"},[a("div",{staticClass:"item-content"},[t._v("43 Blackberries")])]),t._v(" "),a("div",{staticClass:"item"},[a("div",{staticClass:"item-content"},[t._v("22 Grapes")])])]),t._v(" "),a("q-collapsible",{attrs:{icon:"opacity",label:"Melons"}},[a("div",{staticClass:"item"},[a("div",{staticClass:"item-content"},[t._v("5 Watermelon")])]),t._v(" "),a("div",{staticClass:"item"},[a("div",{staticClass:"item-content"},[t._v("10 Casaba")])])])],1)},i=[],n={render:s,staticRenderFns:i};e.a=n},551:function(t,e,a){var s=a(552);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);a(192)("7aa89120",s,!0)},552:function(t,e,a){e=t.exports=a(191)(void 0),e.push([t.i,"",""])},553:function(t,e,a){"use strict";e.a={data:function(){return{}}}},554:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"list"},[a("div",{staticClass:"list-label inset"},[t._v("Citrus")]),t._v(" "),a("div",{staticClass:"item"},[a("div",{staticClass:"item-content inset"},[t._v("16 Oranges")])]),t._v(" "),a("div",{staticClass:"item"},[a("div",{staticClass:"item-content inset"},[t._v("12 Limes")])]),t._v(" "),a("hr",{staticClass:"inset"}),t._v(" "),a("div",{staticClass:"list-label inset"},[t._v("Berries")]),t._v(" "),a("div",{staticClass:"item"},[a("div",{staticClass:"item-content inset"},[t._v("14 Blackberries")])]),t._v(" "),a("div",{staticClass:"item"},[a("div",{staticClass:"item-content inset"},[t._v("6 Grapes")])])])}],n={render:s,staticRenderFns:i};e.a=n},555:function(t,e,a){var s=a(556);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);a(192)("7e9f408f",s,!0)},556:function(t,e,a){e=t.exports=a(191)(void 0),e.push([t.i,"",""])},557:function(t,e,a){"use strict";e.a={data:function(){return{}}}},558:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"list"},[a("div",{staticClass:"list-label inset"},[t._v("Citrus")]),t._v(" "),a("div",{staticClass:"item"},[a("div",{staticClass:"item-content inset"},[t._v("24 Oranges")])]),t._v(" "),a("div",{staticClass:"item"},[a("div",{staticClass:"item-content inset"},[t._v("20 Limes")])]),t._v(" "),a("hr",{staticClass:"inset"}),t._v(" "),a("div",{staticClass:"list-label inset"},[t._v("Berries")]),t._v(" "),a("div",{staticClass:"item"},[a("div",{staticClass:"item-content inset"},[t._v("20 Blackberries")])]),t._v(" "),a("div",{staticClass:"item"},[a("div",{staticClass:"item-content inset"},[t._v("10 Grapes")])])])}],n={render:s,staticRenderFns:i};e.a=n},779:function(t,e,a){var s=a(780);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);a(192)("ae9ddd9c",s,!0)},780:function(t,e,a){e=t.exports=a(191)(void 0),e.push([t.i,".inline-block[data-v-96690c08]{margin-bottom:7%}.label[data-v-96690c08]{padding:1.2rem .7rem;min-width:260px}",""])},781:function(t,e,a){"use strict";var s=a(201),i=a(202),n=a(204),l=a(206),c=a(205),r=a(203),o=a(2);e.a={name:"Pricing",data:function(){return{cardType:"Vertical One",plansData:[{title:"Basket Fruit One",titleClasses:"bg-primary",price:"59",priceSubtitle:"per month",buttonClasses:"primary",cardId:"1",planBenefitComponent:"benefit-one"},{title:"Basket Fruit Two",titleClasses:"bg-teal",price:"39",priceSubtitle:"per month",buttonClasses:"teal",cardId:"2",planBenefitComponent:"benefit-two"},{title:"Basket Fruit Three",titleClasses:"bg-red",price:"29",priceSubtitle:"per month",buttonClasses:"red",cardId:"3",planBenefitComponent:"benefit-three"},{title:"Basket Fruit Four",titleClasses:"bg-purple",price:"19",priceSubtitle:"per month",buttonClasses:"purple",cardId:"4",planBenefitComponent:"benefit-four"}]}},components:{QRadio:o.z,cardPlanOne:s.default,benefitOne:n.default,benefitTwo:l.default,benefitThree:c.default,benefitFour:r.default,cardPlanTwo:i.default},computed:{componentInstanceBySelectedPlanType:function(){return"Vertical One"===this.cardType?"card-plan-one":"card-plan-two"}},methods:{cardSelected:function(t){o.K.create.positive({html:"Congratulations! You have choose the plan "+t})},chooseMostUsedPlan:function(t){return 1==t?"animate-bounce shadow-3":""}}}},782:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"layout-padding"},[a("div",{staticClass:"label bg-secondary text-white"},[t._v("\n      Plan model type "),a("span",{staticClass:"right-detail"},[a("em",[t._v(t._s(t.cardType))])])]),t._v(" "),a("div",{staticClass:"group inline-block"},[a("label",[a("q-radio",{attrs:{val:"Vertical One"},model:{value:t.cardType,callback:function(e){t.cardType=e},expression:"cardType"}}),t._v(" Vertical One\n      ")],1),t._v(" "),a("label",[a("q-radio",{staticClass:"teal",attrs:{val:"Horizontal One"},model:{value:t.cardType,callback:function(e){t.cardType=e},expression:"cardType"}}),t._v(" Horizontal One\n      ")],1)]),t._v(" "),a("div",{staticClass:"row wrap gutter justify-center"},t._l(t.plansData,function(e){return a("div",{staticClass:"auto "},[a(t.componentInstanceBySelectedPlanType,{tag:"component",attrs:{title:e.title,"title-classes":e.titleClasses,price:e.price,"price-subtitle":e.priceSubtitle,"button-classes":e.buttonClasses,"card-id":e.cardId},on:{"card-selected":t.cardSelected}},[a("div",{staticClass:"fit",attrs:{slot:"body"},slot:"body"},[a(e.planBenefitComponent,{tag:"component"})],1)])],1)}))])])},i=[],n={render:s,staticRenderFns:i};e.a=n}});