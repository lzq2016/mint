webpackJsonp([13],{"8LUt":function(t,e,r){(t.exports=r("bKW+")(!1)).push([t.i,"\n.app-container[data-v-224a1eb2]{\r\n  position: relative;\r\n  padding: 20px;\r\n  width: 100%;\r\n  height: 85vh;\n}\r\n",""])},SBXA:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={mixins:[r("G3rD").a],data:function(){return{resultShow:!1,data:{a1:123,a2:467,b1:45,b2:106},r1:0,r2:0,r3:0,r4:[]}},mounted:function(){this.$store.dispatch("GetAnalyse2Data",this.options).then(function(t){console.log(t)}).catch(function(){})},beforeDestroy:function(){},methods:{compute:function(){var t=this,e=this;this.$store.dispatch("GetAnalyse2Result",e.data).then(function(r){console.log(r),0==r.rescode?e.$message({type:"info",message:"用户数据错误"}):1==r.rescode&&(e.r1=r.result.r1,e.r2=r.result.r2,e.r3=r.result.r3,e.r4=r.result.r4,console.log(e.r4),t.resultShow=!0)}).catch(function(){})}}},s={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"app-container"},[r("p",[t._v("卡方检验")]),t._v(" "),r("el-button",{attrs:{type:"primary"},on:{click:t.compute}},[t._v("分析")]),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:t.resultShow,expression:"resultShow"}]},[r("p",[t._v("r1:"+t._s(t.r1))]),t._v(" "),r("p",[t._v("r2:"+t._s(t.r2))]),t._v(" "),r("p",[t._v("r3:"+t._s(t.r3))]),t._v(" "),r("p",[t._v("r4:")]),t._v(" "),t._l(t.r4,function(e,n){return r("div",[r("p",[t._v(t._s(t.r4[n]))])])})],2)],1)},staticRenderFns:[]};var o=r("XAIM")(n,s,!1,function(t){r("jUnm")},"data-v-224a1eb2",null);e.default=o.exports},jUnm:function(t,e,r){var n=r("8LUt");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);r("6imX")("5c7e747c",n,!0)}});