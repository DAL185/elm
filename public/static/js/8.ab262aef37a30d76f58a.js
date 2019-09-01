webpackJsonp([8],{jdq8:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=o("Dd8w"),r=o.n(a),s=o("Xxa5"),i=o.n(s),l=o("exGp"),c=o.n(l),n=o("bBUo"),m=o("1h8J"),p=o("uaSg"),u={data:function(){return{baseUrl:p.b,baseImgPath:p.a,restaurant_id:1,categoryForm:{categoryList:[],categorySelect:"",name:"",description:""},foodForm:{name:"",description:"",image_path:"",activity:"",attributes:[],specs:[{specs:"默认",packing_fee:0,price:20}]},foodrules:{name:[{required:!0,message:"请输入食品名称",trigger:"blur"}]},attributes:[{value:"新",label:"新品"},{value:"招牌",label:"招牌"}],showAddCategory:!1,foodSpecs:"one",dialogFormVisible:!1,specsForm:{specs:"",packing_fee:0,price:20},specsFormrules:{specs:[{required:!0,message:"请输入规格",trigger:"blur"}]}}},components:{headTop:n.a},created:function(){var e=this;this.$route.query.restaurant_id?this.restaurant_id=this.$route.query.restaurant_id:(this.restaurant_id=Math.ceil(10*Math.random()),this.$msgbox({title:"提示",message:"添加食品需要选择一个商铺，先去就去选择商铺吗？",showCancelButton:!0,confirmButtonText:"确定",cancelButtonText:"取消",beforeClose:function(t,o,a){"confirm"===t?(e.$router.push("/shopList"),a()):(e.$message({type:"info",message:"取消"}),a())}})),this.initData()},computed:{selectValue:function(){return this.categoryForm.categoryList[this.categoryForm.categorySelect]||{}}},methods:{initData:function(){var e=this;return c()(i.a.mark(function t(){var o;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(m.l)(e.restaurant_id);case 3:1==(o=t.sent).status?(o.category_list.map(function(e,t){e.value=t,e.label=e.name}),e.categoryForm.categoryList=o.category_list):console.log(o),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}},t,e,[[0,7]])}))()},addCategoryFun:function(){this.showAddCategory=!this.showAddCategory},submitcategoryForm:function(e){var t,o=this;this.$refs[e].validate((t=c()(i.a.mark(function e(t){var a;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=14;break}return a={name:o.categoryForm.name,description:o.categoryForm.description,restaurant_id:o.restaurant_id},e.prev=2,e.next=5,Object(m.a)(a);case 5:1==e.sent.status&&(o.initData(),o.categoryForm.name="",o.categoryForm.description="",o.showAddCategory=!1,o.$message({type:"success",message:"添加成功"})),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),console.log(e.t0);case 12:e.next=16;break;case 14:return o.$notify.error({title:"错误",message:"请检查输入是否正确",offset:100}),e.abrupt("return",!1);case 16:case"end":return e.stop()}},e,o,[[2,9]])})),function(e){return t.apply(this,arguments)}))},uploadImg:function(e,t){1==e.status?this.foodForm.image_path=e.image_path:this.$message.error("上传图片失败！")},beforeImgUpload:function(e){var t="image/jpeg"===e.type||"image/png"===e.type,o=e.size/1024/1024<2;return t||this.$message.error("上传头像图片只能是 JPG 格式!"),o||this.$message.error("上传头像图片大小不能超过 2MB!"),t&&o},addspecs:function(){this.foodForm.specs.push(r()({},this.specsForm)),this.specsForm.specs="",this.specsForm.packing_fee=0,this.specsForm.price=20,this.dialogFormVisible=!1},handleDelete:function(e){this.foodForm.specs.splice(e,1)},tableRowClassName:function(e,t){return 1===t?"info-row":3===t?"positive-row":""},addFood:function(e){var t,o=this;this.$refs[e].validate((t=c()(i.a.mark(function e(t){var a,s;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=14;break}return a=r()({},o.foodForm,{category_id:o.selectValue.id,restaurant_id:o.restaurant_id}),e.prev=2,e.next=5,Object(m.b)(a);case 5:1==(s=e.sent).status?(console.log(s),o.$message({type:"success",message:"添加成功"}),o.foodForm={name:"",description:"",image_path:"",activity:"",attributes:[],specs:[{specs:"默认",packing_fee:0,price:20}]}):o.$message({type:"error",message:s.message}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),console.log(e.t0);case 12:e.next=16;break;case 14:return o.$notify.error({title:"错误",message:"请检查输入是否正确",offset:100}),e.abrupt("return",!1);case 16:case"end":return e.stop()}},e,o,[[2,9]])})),function(e){return t.apply(this,arguments)}))}}},d={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("head-top"),e._v(" "),o("el-row",{staticStyle:{"margin-top":"20px"}},[o("el-col",{attrs:{span:14,offset:4}},[o("header",{staticClass:"form_header"},[e._v("选择食品种类")]),e._v(" "),o("el-form",{ref:"categoryForm",staticClass:"form",attrs:{model:e.categoryForm,"label-width":"110px"}},[o("el-row",{staticClass:"category_select"},[o("el-form-item",{attrs:{label:"食品种类"}},[o("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:e.selectValue.label},model:{value:e.categoryForm.categorySelect,callback:function(t){e.$set(e.categoryForm,"categorySelect",t)},expression:"categoryForm.categorySelect"}},e._l(e.categoryForm.categoryList,function(e){return o("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1)],1)],1),e._v(" "),o("el-row",{staticClass:"add_category_row",class:e.showAddCategory?"showEdit":""},[o("div",{staticClass:"add_category"},[o("el-form-item",{attrs:{label:"食品种类",prop:"name"}},[o("el-input",{model:{value:e.categoryForm.name,callback:function(t){e.$set(e.categoryForm,"name",t)},expression:"categoryForm.name"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"种类描述",prop:"description"}},[o("el-input",{model:{value:e.categoryForm.description,callback:function(t){e.$set(e.categoryForm,"description",t)},expression:"categoryForm.description"}})],1),e._v(" "),o("el-form-item",[o("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitcategoryForm("categoryForm")}}},[e._v("提交")])],1)],1)]),e._v(" "),o("div",{staticClass:"add_category_button",on:{click:e.addCategoryFun}},[e.showAddCategory?o("i",{staticClass:"el-icon-caret-top edit_icon"}):o("i",{staticClass:"el-icon-caret-bottom edit_icon",attrs:{slot:"icon"},slot:"icon"}),e._v(" "),o("span",[e._v("添加食品种类")])])],1),e._v(" "),o("header",{staticClass:"form_header"},[e._v("添加食品")]),e._v(" "),o("el-form",{ref:"foodForm",staticClass:"form food_form",attrs:{model:e.foodForm,rules:e.foodrules,"label-width":"110px"}},[o("el-form-item",{attrs:{label:"食品名称",prop:"name"}},[o("el-input",{model:{value:e.foodForm.name,callback:function(t){e.$set(e.foodForm,"name",t)},expression:"foodForm.name"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"食品活动",prop:"activity"}},[o("el-input",{model:{value:e.foodForm.activity,callback:function(t){e.$set(e.foodForm,"activity",t)},expression:"foodForm.activity"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"食品详情",prop:"description"}},[o("el-input",{model:{value:e.foodForm.description,callback:function(t){e.$set(e.foodForm,"description",t)},expression:"foodForm.description"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"上传食品图片"}},[o("el-upload",{staticClass:"avatar-uploader",attrs:{action:e.baseUrl+"/v1/addimg/food","show-file-list":!1,"on-success":e.uploadImg,"before-upload":e.beforeImgUpload}},[e.foodForm.image_path?o("img",{staticClass:"avatar",attrs:{src:e.baseImgPath+e.foodForm.image_path}}):o("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),e._v(" "),o("el-form-item",{attrs:{label:"食品特点"}},[o("el-select",{attrs:{multiple:"",placeholder:"请选择"},model:{value:e.foodForm.attributes,callback:function(t){e.$set(e.foodForm,"attributes",t)},expression:"foodForm.attributes"}},e._l(e.attributes,function(e){return o("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1)],1),e._v(" "),o("el-form-item",{attrs:{label:"食品规格"}},[o("el-radio",{staticClass:"radio",attrs:{label:"one"},model:{value:e.foodSpecs,callback:function(t){e.foodSpecs=t},expression:"foodSpecs"}},[e._v("单规格")]),e._v(" "),o("el-radio",{staticClass:"radio",attrs:{label:"more"},model:{value:e.foodSpecs,callback:function(t){e.foodSpecs=t},expression:"foodSpecs"}},[e._v("多规格")])],1),e._v(" "),"one"==e.foodSpecs?o("el-row",[o("el-form-item",{attrs:{label:"包装费"}},[o("el-input-number",{attrs:{min:0,max:100},model:{value:e.foodForm.specs[0].packing_fee,callback:function(t){e.$set(e.foodForm.specs[0],"packing_fee",t)},expression:"foodForm.specs[0].packing_fee"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"价格"}},[o("el-input-number",{attrs:{min:0,max:1e4},model:{value:e.foodForm.specs[0].price,callback:function(t){e.$set(e.foodForm.specs[0],"price",t)},expression:"foodForm.specs[0].price"}})],1)],1):o("el-row",{staticStyle:{overflow:"auto","text-align":"center"}},[o("el-button",{staticStyle:{"margin-bottom":"10px"},attrs:{type:"primary"},on:{click:function(t){e.dialogFormVisible=!0}}},[e._v("添加规格")]),e._v(" "),o("el-table",{staticStyle:{"margin-bottom":"20px"},attrs:{data:e.foodForm.specs,"row-class-name":e.tableRowClassName}},[o("el-table-column",{attrs:{prop:"specs",label:"规格"}}),e._v(" "),o("el-table-column",{attrs:{prop:"packing_fee",label:"包装费"}}),e._v(" "),o("el-table-column",{attrs:{prop:"price",label:"价格"}}),e._v(" "),o("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("el-button",{attrs:{size:"small",type:"danger"},on:{click:function(o){return e.handleDelete(t.$index)}}},[e._v("删除")])]}}])})],1)],1),e._v(" "),o("el-form-item",[o("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.addFood("foodForm")}}},[e._v("确认添加食品")])],1)],1),e._v(" "),o("el-dialog",{attrs:{title:"添加规格"},model:{value:e.dialogFormVisible,callback:function(t){e.dialogFormVisible=t},expression:"dialogFormVisible"}},[o("el-form",{attrs:{rules:e.specsFormrules,model:e.specsForm}},[o("el-form-item",{attrs:{label:"规格","label-width":"100px",prop:"specs"}},[o("el-input",{attrs:{"auto-complete":"off"},model:{value:e.specsForm.specs,callback:function(t){e.$set(e.specsForm,"specs",t)},expression:"specsForm.specs"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"包装费","label-width":"100px"}},[o("el-input-number",{attrs:{min:0,max:100},model:{value:e.specsForm.packing_fee,callback:function(t){e.$set(e.specsForm,"packing_fee",t)},expression:"specsForm.packing_fee"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"价格","label-width":"100px"}},[o("el-input-number",{attrs:{min:0,max:1e4},model:{value:e.specsForm.price,callback:function(t){e.$set(e.specsForm,"price",t)},expression:"specsForm.price"}})],1)],1),e._v(" "),o("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取 消")]),e._v(" "),o("el-button",{attrs:{type:"primary"},on:{click:e.addspecs}},[e._v("确 定")])],1)],1)],1)],1)],1)},staticRenderFns:[]};var f=o("VU/8")(u,d,!1,function(e){o("lOph")},null,null);t.default=f.exports},lOph:function(e,t){}});
//# sourceMappingURL=8.ab262aef37a30d76f58a.js.map