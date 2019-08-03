(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-729ec268"],{"1b58":function(t,e,a){},"1bb7":function(t,e,a){},3663:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("latte-tab-container",{staticClass:"panel"},[""!==t.title?a("div",{staticClass:"panel-header"},[a("h2",{staticClass:"panel-title m-0"},[t._v(t._s(t.title))])]):t._e(),a("latte-tab-bar"),t.properties?a("latte-tab",{attrs:{label:"Properties"}},[a("table",{staticClass:"table"},[t._l(t.properties,function(e){return[a("tr",[a("td",{staticStyle:{"min-width":"300px"}},[a("div",{staticClass:"column-content justify-content-start"},[a("small",{staticClass:"text-muted"},[t._v("Name")]),a("strong",{staticClass:"text-monospace"},[t._v(t._s(e.name)+" "),e.required?a("span",{staticClass:"badge badge-info",staticStyle:{"font-size":".6rem"}},[t._v("required")]):t._e()]),e.description?a("span",{staticClass:"text-muted"},[t._v(t._s(e.description))]):t._e()])]),a("td",[a("div",{staticClass:"column-content justify-content-start"},[a("small",{staticClass:"text-muted"},[t._v("Type")]),a("strong",{staticClass:"text-monospace"},[t._v(t._s(e.type))])])]),a("td",[a("div",{staticClass:"column-content justify-content-start"},[a("small",{staticClass:"text-muted"},[t._v("Default value")]),a("strong",{staticClass:"text-monospace"},[t._v(t._s(e.default))])])])])]})],2)]):t._e(),t.variables?a("latte-tab",{attrs:{label:"CSS-vars"}},[a("table",{staticClass:"table"},[t._l(t.variables,function(e){return[a("tr",[a("td",{staticStyle:{"min-width":"300px"}},[a("div",{staticClass:"column-content justify-content-start"},[a("small",{staticClass:"text-muted"},[t._v("Name")]),a("strong",{staticClass:"text-monospace"},[t._v(t._s(e.name))]),e.description?a("span",{staticClass:"text-muted"},[t._v(t._s(e.description))]):t._e()])]),a("td",[a("div",{staticClass:"column-content justify-content-start"},[a("small",{staticClass:"text-muted"},[t._v("Type")]),a("strong",{staticClass:"text-monospace"},[t._v(t._s(e.type))])])]),a("td",[a("div",{staticClass:"column-content justify-content-start"},[a("small",{staticClass:"text-muted"},[t._v("Default value")]),null===e.default?a("em",[t._v("NULL")]):"rgb"===e.type?a("RgbDisplay",{staticClass:"font-weight-bold text-monospace",attrs:{rgb:e.default}}):a("strong",{staticClass:"text-monospace"},[t._v(t._s(e.default))])],1)])])]})],2)]):t._e(),t.events?a("latte-tab",{attrs:{label:"Events"}},[a("table",{staticClass:"table"},[t._l(t.events,function(e){return[a("tr",[a("td",{staticStyle:{"min-width":"300px"}},[a("div",{staticClass:"column-content justify-content-start"},[a("small",{staticClass:"text-muted"},[t._v("Name")]),a("strong",{staticClass:"text-monospace"},[t._v(t._s(e.name))]),e.description?a("span",{staticClass:"text-muted"},[t._v(t._s(e.description))]):t._e()])]),a("td",[a("div",{staticClass:"column-content justify-content-start"},[a("small",{staticClass:"text-muted"},[t._v("Signature")]),a("strong",{staticClass:"text-monospace"},[t._v(t._s(e.signature))])])])])]})],2)]):t._e(),t.slots?a("latte-tab",{attrs:{label:"Slots"}},[t._v("\n\t\t"+t._s(t.slots)+"\n\t")]):t._e()],1)},n=[],o=a("fbe3"),l={name:"ApiExplorer",components:{RgbDisplay:o["a"]},props:{events:{default:void 0,type:Array},properties:{default:void 0,type:Array},slots:{default:void 0,type:Array},variables:{default:void 0,type:Array},title:{default:"API",type:String}}},i=l,r=a("2be6"),c=Object(r["a"])(i,s,n,!1,null,null,null);e["a"]=c.exports},"543d":function(t,e,a){"use strict";var s=a("1b58"),n=a.n(s);n.a},"641f":function(t,e,a){},7090:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page",attrs:{id:"components-bottom-nav"}},[a("PageHeader",[a("h1",[t._v("Bottom nav")])]),a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-lg-9 mb-panel-gutter"},[a("CodeExample",{attrs:{title:"Basic",url:"/snippets/components/bottom-nav/all.html"}}),a("CodeExample",{attrs:{title:"Shifting",url:"/snippets/components/bottom-nav/shifting.html"}}),a("div",{staticClass:"divider divider-horizontal docs-separator"}),a("ApiExplorer",t._b({},"ApiExplorer",t.api,!1))],1),a("div",{staticClass:"col-12 col-lg-3"},[a("TableOfContents")],1)])])],1)},n=[],o=(a("4fb0"),a("3663")),l=a("c8e6"),i=a("36ad"),r=a("9f6c"),c={name:"BottomNav",components:{ApiExplorer:o["a"],CodeExample:l["a"],PageHeader:i["a"],TableOfContents:r["a"]},data:function(){var t=window.getComputedStyle(document.body);return{api:{events:[{name:"input",description:"Invoked when the active item changes.",signature:"(index: number)"}],properties:[{name:"is-shifting",description:"Items should only show labels when they're active.",default:!1,type:"boolean"},{name:"is-side",description:"Bottom nav should actually be a side-nav.",default:!1,type:"boolean"},{name:"value",description:"Control the active item by index.",default:0,type:"number"}],variables:[{name:"--bottom-nav-alpha",description:"Botton nav alpha.",type:"int",default:1},{name:"--bottom-nav-background",description:"Background color.",type:"rgb",default:t.getPropertyValue("--bottom-nav-background").split(",").map(function(t){return parseInt(t)})},{name:"--bottom-nav-foreground",description:"Foreground color.",type:"rgb",default:t.getPropertyValue("--bottom-nav-foreground").split(",").map(function(t){return parseInt(t)})},{name:"--bottom-nav-elevation",description:"Bottom nav elevation shadow.",type:"string",default:t.getPropertyValue("--bottom-nav-elevation")}]}}}},d=c,u=a("2be6"),p=Object(u["a"])(d,s,n,!1,null,null,null);e["default"]=p.exports},"73d1":function(t,e,a){"use strict";var s=a("641f"),n=a.n(s);n.a},"9f6c":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"panel mb-panel-gutter"},[a("nav",{staticClass:"nav nav-list"},[t._l(t.elements,function(e){return[e.isSeparator?a("div",{staticClass:"divider divider-horizontal"}):a("latte-ripple",{staticClass:"nav-link",class:{"pl-5":"h3"===e.type},attrs:{as:"a"},on:{click:function(a){return t.goToElement(e.el)}}},[a("span",[t._v(t._s(e.title))])])]})],2)])},n=[],o=a("a287"),l={name:"TableOfContents",data:function(){return{elements:[]}},mounted:function(){var t=document.querySelector("div.page"),e=Array.prototype.slice.call(t.querySelectorAll("h2,h3,.docs-separator"));this.elements=e.map(function(t){return{el:t,title:t.textContent,type:t.tagName.toLowerCase(),isSeparator:t.classList.contains("docs-separator")}})},methods:{goToElement:function(t){var e=o["a"].util.dom.closest(t,"div.panel");null!==e&&(t=e);var a=t.getBoundingClientRect();window.scrollTo({behavior:"smooth",top:a.top+document.scrollingElement.scrollTop-84})}}},i=l,r=(a("b313"),a("2be6")),c=Object(r["a"])(i,s,n,!1,null,"24566663",null);e["a"]=c.exports},b313:function(t,e,a){"use strict";var s=a("1bb7"),n=a.n(s);n.a},c8e6:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"panel code-example-panel",class:{"is-loading":t.isLoading}},[a("div",{staticClass:"panel-header"},[a("h2",{staticClass:"panel-title mb-0"},[t._v(t._s(t.title))]),a("div",{staticClass:"ml-auto"}),t._t("header")],2),t.$slots.default?a("div",{staticClass:"panel-body"},[t._t("default")],2):t._e(),a("div",{staticClass:"code-example-preview"},[null!==t.component?a(t.component,{tag:"component"}):t._e()],1),t.showCode?a("div",{staticClass:"code-example-code"},[t.code?a("CodeSnippet",{attrs:{lang:"html"}},[t._v(t._s(t.code))]):t._e()],1):t._e(),t._t("root"),a("span",{staticClass:"spinner spinner-primary"})],2)},n=[],o=(a("04f7"),a("ae66"),a("a287")),l=a("4f2b"),i=a("2d1a"),r={name:"CodeExample",components:{CodeSnippet:i["a"]},props:{showCode:{default:!0,type:Boolean},title:{default:"Example",type:String},url:{default:"Example",required:!0,type:String}},data:function(){return{code:null,component:null,isLoading:!0}},mounted:function(){this.loadSnippet()},methods:{loadSnippet:function(){var t=this;this.isLoading=!0,o["a"].api.request(this.url).then(function(t){return t.text()}).then(function(e){return t.onSnippetLoaded(e)}).catch(function(t){return o["a"].core.handleError(t)})},onSnippetLoaded:function(t){this.code=t.replace(new RegExp('\n<div class="ce-gutter"></div>\n',"g"),""),this.component=l["a"].extend({template:"<div>".concat(t,"</div>")}),this.isLoading=!1}},watch:{url:function(){this.loadSnippet()}}},c=r,d=(a("73d1"),a("2be6")),u=Object(d["a"])(c,s,n,!1,null,null,null);e["a"]=u.exports},fbe3:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"rgb-display",style:t.styles},[a("span",[t._v(t._s(t.rgb[0])+", "+t._s(t.rgb[1])+", "+t._s(t.rgb[2]))])])},n=[],o={name:"RgbDisplay",props:{rgb:{default:function(){return[0,0,0]},required:!0,type:Array}},computed:{styles:function(){return{"--color":"rgb(".concat(this.rgb[0],", ").concat(this.rgb[1],", ").concat(this.rgb[2],")")}}}},l=o,i=(a("543d"),a("2be6")),r=Object(i["a"])(l,s,n,!1,null,"fbec4d7e",null);e["a"]=r.exports}}]);
//# sourceMappingURL=chunk-729ec268.74e5e5a7.js.map