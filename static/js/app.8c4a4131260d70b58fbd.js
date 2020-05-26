webpackJsonp([1],{"6KbU":function(t,e){},JBwG:function(t,e){},Jf6r:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("7+uW"),r=n("n6Cl"),s=(n("Viya"),{render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("div",[e("h1",[this._v("창체동아리 신청")]),this._v(" "),e("hr",{staticStyle:{"margin-bottom":"50px"},attrs:{width:"100%"}}),this._v(" "),e("router-view")],1)])},staticRenderFns:[]});var a=n("VU/8")({name:"app"},s,!1,function(t){n("JBwG")},null,null).exports,o=n("/ocq"),u=n("Xxa5"),l=n.n(u),c=n("exGp"),d=n.n(c),p=n("//Fk"),v=n.n(p),m=n("mtWM"),h=n.n(m),f={name:"Application",data:function(){return{num:null,name:null,group:null,groupList:null,errorText:null,sending:!1,time:0,timeInterval:null,success:!1}},computed:{numHelperText:function(){return"string"==typeof this.num&&this.num.length?isNaN(this.num)?"학번을 올바르게 입력하세요.":5!==this.num.length?"학번을 5자리로 입력하세요.":"":"학번을 입력하세요."},nameHelperText:function(){return"string"==typeof this.name&&this.name.length?2!==this.name.length&&3!==this.name.length?"이름을 올바르게 입력하세요.":"":"이름을 입력하세요."},numValid:function(){return""===this.numHelperText},nameValid:function(){return""===this.nameHelperText}},methods:{getGroupsList:function(){var t,e=this;return new v.a((t=d()(l.a.mark(function t(n){var i;return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return i=void 0,t.prev=1,t.next=4,h.a.post("https://group.dnhs.me/api/groups",{},{responseType:"json"});case 4:i=t.sent.data,t.next=10;break;case 7:t.prev=7,t.t0=t.catch(1),i=t.t0.response.data;case 10:if(0===i.status||void 0===i.time){t.next=15;break}return e.setWaitTime(i.time/1e3|0),t.abrupt("return");case 15:if(0===i.status){t.next=19;break}return alert("동아리 리스트를 불러오지 못했습니다.\n새로고침합니다."),location.reload(),t.abrupt("return");case 19:n(i.result);case 20:case"end":return t.stop()}},t,e,[[1,7]])})),function(e){return t.apply(this,arguments)}))},send:function(){var t=this;if(this.errorText="",this.sending=!0,!this.numValid)return this.errorText=this.numHelperText,void(this.sending=!1);if(!this.nameValid)return this.errorText=this.nameHelperText,void(this.sending=!1);if(null===this.groupList)return this.errorText="잠시 후 시도해주세요.\n동아리 목록을 불러오고 있습니다...",void(this.sending=!1);var e=this.groupList.filter(function(e){return e.id===parseInt(t.group)});return e.length?(e=e.shift()).available?void h.a.post("https://group.dnhs.me/api/application/",{num:this.num,name:this.name,group:parseInt(this.group)},{responseType:"json",timeout:1e4,timeoutErrorMessage:"timeout"}).then(function(e){t.sending=!1,void 0!==e.data.groups&&(t.groupList=e.data.groups),void 0!==e.data.time&&(t.time=e.data.time),0===e.data.status?t.success=!0:t.errorText=void 0===e.data.message?"code: "+e.data.status:e.data.message}).catch(function(e){t.sending=!1,"timeout"===e.message&&(t.errorText="timeout")}):(this.errorText="선택한 동아리는 신청이 마감되었습니다.",void(this.sending=!1)):(this.errorText="신청할 동아리를 선택하세요.",void(this.sending=!1))},setWaitTime:function(t){var e=this;null!==this.timeInterval&&clearInterval(this.timeInterval),this.time=t,this.timeInterval=setInterval(function(){e.time=e.time-1,e.time<1&&(e.time=0,clearInterval(e.timeInterval),e.getGroupsList().then(function(t){e.groupList=t}))},1e3)}},created:function(){var t=this;this.getGroupsList().then(function(e){t.groupList=e})}},g={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[!t.success&&t.time>0?n("div",[n("h2",[t._v("신청 기간이 아닙니다.")]),t._v(" "),n("p",[t._v(t._s(((t.time/3600|0)>0?(t.time/3600|0)+"시간 ":"")+((t.time/60|0)%60>0?(t.time/60|0)%60+"분 ":"")+(t.time%60>0?t.time%60+"초":""))+" 이후 신청이 시작됩니다.")])]):t.success?n("div",[n("h4",[t._v("신청이 완료되었습니다.")])]):n("div",[n("div",[n("b",[t._v("학번을 입력하세요. (예시: 10101)")]),n("br"),t._v(" "),n("mdc-textfield",{attrs:{label:"학번",outline:"",required:"",helptext:t.numHelperText,"helptext-validation":"",valid:t.numValid},model:{value:t.num,callback:function(e){t.num=e},expression:"num"}})],1),t._v(" "),n("div",[n("b",[t._v("이름을 입력하세요.")]),n("br"),t._v(" "),n("mdc-textfield",{staticStyle:{margin:"0"},attrs:{label:"이름",outline:"",required:"",helptext:t.nameHelperText,"helptext-validation":"",valid:t.nameValid},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1),t._v(" "),n("div",[n("b",{staticStyle:{"margin-bottom":"20px",display:"block"}},[t._v("동아리를 선택하세요.")]),t._v(" "),null===t.groupList?n("mdc-linear-progress",{attrs:{indeterminate:""}}):t._l(t.groupList?t.groupList:[],function(e){return n("div",[n("mdc-radio",{key:e.id,attrs:{name:"groups",value:String(e.id),label:e.name+", "+(e.available?e.available+"명 남음":"마감됨"),disabled:!e.available},model:{value:t.group,callback:function(e){t.group=e},expression:"group"}}),t._v(" "),n("br")],1)})],2),t._v(" "),n("div",[n("p",{staticStyle:{color:"red"}},[t._v(t._s(t.errorText))]),t._v(" "),t.sending?n("mdc-button",{attrs:{unelevated:"",disabled:""}},[t._v("신청 중...")]):n("mdc-button",{attrs:{unelevated:""},on:{click:t.send}},[t._v("신청")])],1)])])},staticRenderFns:[]};var _=n("VU/8")(f,g,!1,function(t){n("Wrlc")},"data-v-32bc7242",null).exports,x={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",[n("h2",[t._v("페이지를 찾을 수 없습니다.")]),t._v(" "),n("h5",{on:{click:function(e){return t.$router.push({name:"Application"})}}},[t._v("신청 페이지로 가기 >")])])])},staticRenderFns:[]};var b=n("VU/8")({name:"NotFound"},x,!1,function(t){n("Jf6r")},"data-v-53d84030",null).exports,y={name:"Admin",data:function(){return{id:null,pw:null,sending:!1,errorText:null}},computed:{isLogin:function(){return this.$store.getters.isLogin},data:function(){return this.$store.getters.data}},methods:{login:function(){var t=this;return d()(l.a.mark(function e(){return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.sending=!0,t.errorText=null,e.next=4,t.$store.dispatch("login",{id:t.id,pw:t.pw});case 4:t.sending=!1,t.isLogin||(t.errorText="아이디나 비밀번호가 틀렸습니다.");case 6:case"end":return e.stop()}},e,t)}))()},refresh:function(){var t=this;return d()(l.a.mark(function e(){return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.isLogin){e.next=3;break}return e.next=3,t.$store.dispatch("login",t.$store.getters.credentials);case 3:case"end":return e.stop()}},e,t)}))()}}},w={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{width:"100%"}},[t.isLogin?n("div",{staticClass:"container"},[n("span",{staticStyle:{"text-align":"right",position:"fixed",right:"30px",bottom:"30px"},on:{click:t.refresh}},[n("mdc-button",[n("i",{staticClass:"material-icons mdc-button__icon",staticStyle:{"font-size":"200%",display:"flex","align-items":"center","justify-content":"center"}},[t._v("update")])])],1),t._v(" "),n("div",{staticClass:"register"},[n("h3",[t._v("동아리 목록")]),t._v(" "),n("table",{staticStyle:{"table-layout":"auto"}},[t._m(1),t._v(" "),n("tbody",t._l(t.data.groups,function(e){return n("tr",[n("td",{staticStyle:{width:"30%"}},[t._v(t._s(e.name))]),t._v(" "),n("td",{staticStyle:{width:"30%"}},[t._v(t._s(e.available>0?e.available+"명 남음":"마감됨"))]),t._v(" "),n("td",{staticStyle:{width:"40%",padding:"0"}},[n("table",{staticStyle:{"border-collapse":"collapse"}},[n("tbody",t._l(void 0===e.students?[]:e.students,function(e){return n("tr",[n("td",[t._v(t._s(e.num))]),t._v(" "),n("td",[t._v(t._s(e.name))])])}),0)])])])}),0)])]),t._v(" "),n("div",{staticClass:"unregister"},[n("h3",[t._v("미신청자 목록 ("+t._s(t.data.unregisterStudent.length)+"명)")]),t._v(" "),n("table",[t._m(2),t._v(" "),n("tbody",t._l(t.data.unregisterStudent,function(e){return n("tr",[n("td",[t._v(t._s(e[0]))]),t._v(" "),n("td",[t._v(t._s(e[1]))])])}),0)])])]):n("div",{staticStyle:{display:"flex","flex-direction":"column","justify-content":"center","align-items":"center"}},[t._m(0),t._v(" "),n("div",{staticStyle:{"margin-bottom":"10px"}},[n("mdc-textfield",{attrs:{label:"아이디",outline:"",required:""},model:{value:t.id,callback:function(e){t.id=e},expression:"id"}})],1),t._v(" "),n("div",{staticStyle:{"margin-bottom":"25px"}},[n("mdc-textfield",{attrs:{label:"비밀번호",outline:"",required:"",type:"password"},model:{value:t.pw,callback:function(e){t.pw=e},expression:"pw"}})],1),t._v(" "),n("div",[n("p",{staticStyle:{color:"red","margin-bottom":"30px"}},[t._v(t._s(t.errorText))]),t._v(" "),t.sending?n("mdc-button",{attrs:{unelevated:"",disabled:""}},[t._v("로그인 중...")]):n("mdc-button",{attrs:{unelevated:""},on:{click:t.login}},[t._v("로그인")])],1)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticStyle:{"margin-bottom":"10px"}},[e("h3",[this._v("관리자 페이지 로그인")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("td",{staticStyle:{width:"30%"}},[this._v("동아리 이름")]),this._v(" "),e("td",{staticStyle:{width:"30%"}},[this._v("모집 현황")]),this._v(" "),e("td",{staticStyle:{width:"40%"}},[this._v("학생 목록")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("td",[this._v("학번")]),this._v(" "),e("td",[this._v("이름")])])])}]};var T=n("VU/8")(y,w,!1,function(t){n("6KbU")},"data-v-7ac5eff2",null).exports;i.a.use(o.a);var S=new o.a({mode:"history",routes:[{path:"/",name:"Application",component:_},{path:"/admin",name:"Admin",component:T},{path:"/*",name:"404",component:b}]}),L=n("NYxO");i.a.use(L.a);var k=new L.a.Store({state:{id:null,pw:null,isLogin:!1,response:{}},mutations:{setAuthState:function(t,e){var n=e.id,i=e.pw,r=e.isLogin,s=e.response;t.id=n,t.pw=i,t.isLogin=r,t.response=s}},actions:{login:function(t,e){var n=this,i=t.commit,r=e.id,s=e.pw;return d()(l.a.mark(function t(){var e;return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=void 0,t.prev=1,t.next=4,h.a.post("https://group.dnhs.me/api/admin",{id:r,pw:s},{responseType:"json"});case 4:e=t.sent.data,t.next=10;break;case 7:t.prev=7,t.t0=t.catch(1),e=t.t0.response.data;case 10:return t.prev=10,i("setAuthState",{id:r,pw:s,isLogin:0===e.status,response:e.result}),t.finish(10);case 13:case"end":return t.stop()}},t,n,[[1,7,10,13]])}))()}},getters:{credentials:function(t){return{id:t.id,pw:t.pw}},isLogin:function(t){return t.isLogin},data:function(t){return t.response}},modules:{}});i.a.config.productionTip=!1,i.a.use(r.a),new i.a({el:"#app",router:S,store:k,template:"<App/>",components:{App:a}})},Viya:function(t,e){},Wrlc:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.8c4a4131260d70b58fbd.js.map