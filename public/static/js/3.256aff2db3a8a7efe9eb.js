webpackJsonp([3],{"ijp/":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("Xxa5"),r=a.n(n),i=a("exGp"),c=a.n(i),s=a("bBUo"),o=a("1h8J"),l={data:function(){return{tableData:[],currentRow:null,offset:0,limit:20,count:0,currentPage:1}},components:{headTop:s.a},created:function(){this.initData()},methods:{initData:function(){var t=this;return c()(r.a.mark(function e(){var a;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(o.d)();case 3:if(1!=(a=e.sent).status){e.next=8;break}t.count=a.count,e.next=9;break;case 8:throw new Error("获取数据失败");case 9:t.getAdmin(),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log("获取数据失败",e.t0);case 15:case"end":return e.stop()}},e,t,[[0,12]])}))()},handleSizeChange:function(t){console.log("每页 "+t+" 条")},handleCurrentChange:function(t){this.currentPage=t,this.offset=(t-1)*this.limit,this.getAdmin()},getAdmin:function(){var t=this;return c()(r.a.mark(function e(){var a;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(o.e)({offset:t.offset,limit:t.limit});case 3:if(1!=(a=e.sent).status){e.next=9;break}t.tableData=[],a.data.forEach(function(e){var a={create_time:e.create_time,user_name:e.user_name,admin:e.admin,city:e.city};t.tableData.push(a)}),e.next=10;break;case 9:throw new Error(a.message);case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log("获取数据失败",e.t0);case 15:case"end":return e.stop()}},e,t,[[0,12]])}))()}}},u={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"fillcontain"},[a("head-top"),t._v(" "),a("div",{staticClass:"table_container"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData}},[a("el-table-column",{attrs:{prop:"user_name",label:"姓名",width:"180"}}),t._v(" "),a("el-table-column",{attrs:{prop:"create_time",label:"注册日期",width:"220"}}),t._v(" "),a("el-table-column",{attrs:{prop:"city",label:"地址",width:"180"}}),t._v(" "),a("el-table-column",{attrs:{prop:"admin",label:"权限"}})],1),t._v(" "),a("div",{staticClass:"Pagination",staticStyle:{"text-align":"left","margin-top":"10px"}},[a("el-pagination",{attrs:{"current-page":t.currentPage,"page-size":20,layout:"total, prev, pager, next",total:t.count},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)],1)],1)},staticRenderFns:[]};var p=a("VU/8")(l,u,!1,function(t){a("t40C")},null,null);e.default=p.exports},t40C:function(t,e){}});
//# sourceMappingURL=3.256aff2db3a8a7efe9eb.js.map