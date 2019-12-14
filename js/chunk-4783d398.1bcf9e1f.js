(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4783d398","chunk-2d21eb94","chunk-2d21f119"],{6168:function(t,e,n){"use strict";n.r(e);var d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("d2-container",[n("template",{slot:"header"},[t._v("CRUD事件")]),n("d2-crud",{ref:"d2Crud",attrs:{columns:t.columns,data:t.data}},[n("el-button",{staticStyle:{"margin-bottom":"5px"},attrs:{slot:"header"},on:{click:t.updateCell},slot:"header"},[t._v("更新第二行日期")]),n("el-button",{staticStyle:{"margin-bottom":"5px"},attrs:{slot:"header"},on:{click:t.updateRow},slot:"header"},[t._v("更新第三行所有数据")]),n("el-button",{staticStyle:{"margin-bottom":"5px"},attrs:{slot:"header"},on:{click:t.addRow},slot:"header"},[t._v("新增一行")]),n("el-button",{staticStyle:{"margin-bottom":"5px"},attrs:{slot:"header"},on:{click:t.removeRow},slot:"header"},[t._v("删除最后一行")])],1),n("el-card",{staticClass:"d2-mb",attrs:{shadow:"never"}},[n("d2-markdown",{attrs:{source:t.doc}})],1),n("el-card",{staticClass:"d2-mb",attrs:{shadow:"never"}},[n("d2-highlight",{attrs:{code:t.code}})],1),n("d2-link-btn",{attrs:{slot:"footer",title:"文档",link:"https://fairyever.com/d2-admin/doc/zh/ecosystem-d2-crud/"},slot:"footer"})],2)},o=[],a=(n("8099"),n("d7f6")),s=n.n(a),r=n("d77b"),l={data:function(){return{doc:s.a,code:r["default"],columns:[{title:"日期",key:"date"},{title:"姓名",key:"name"},{title:"地址",key:"address"}],data:[{date:"2016-05-02",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄",forbidEdit:!0,showEditButton:!0},{date:"2016-05-04",name:"王小虎",address:"上海市普陀区金沙江路 1517 弄",forbidEdit:!1,showEditButton:!0},{date:"2016-05-01",name:"王小虎",address:"上海市普陀区金沙江路 1519 弄",forbidEdit:!1,showEditButton:!1},{date:"2016-05-03",name:"王小虎",address:"上海市普陀区金沙江路 1516 弄",forbidEdit:!1,showEditButton:!0}]}},methods:{updateCell:function(){this.$refs.d2Crud.updateCell(1,"date","2018-01-01")},updateRow:function(){this.$refs.d2Crud.updateRow(2,{date:"2018-01-01",name:"王小小",address:"上海市普陀区金沙江路 2333 弄"})},addRow:function(){this.$refs.d2Crud.addRow({date:"2018-01-01",name:"王小二",address:"上海市普陀区金沙江路 7777 弄"})},removeRow:function(){this.$refs.d2Crud.removeRow(this.$refs.d2Crud.d2CrudData.length-1)}}},i=l,u=n("2877"),c=function(t){t.options.__source="src/views/demo/d2-crud/demo31/index.vue"},m=c,h=Object(u["a"])(i,d,o,!1,null,null,null);"function"===typeof m&&m(h);e["default"]=h.exports},d77b:function(t,e,n){"use strict";n.r(e),e["default"]="<template>\n  <div>\n    <d2-crud\n      ref=\"d2Crud\"\n      :columns=\"columns\"\n      :data=\"data\">\n      <el-button slot=\"header\" style=\"margin-bottom: 5px\" @click=\"updateCell\">更新第二行日期</el-button>\n      <el-button slot=\"header\" style=\"margin-bottom: 5px\" @click=\"updateRow\">更新第三行所有数据</el-button>\n      <el-button slot=\"header\" style=\"margin-bottom: 5px\" @click=\"addRow\">新增一行</el-button>\n      <el-button slot=\"header\" style=\"margin-bottom: 5px\" @click=\"removeRow\">删除最后一行</el-button>\n    </d2-crud>\n  </div>\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      columns: [\n        {\n          title: '日期',\n          key: 'date'\n        },\n        {\n          title: '姓名',\n          key: 'name'\n        },\n        {\n          title: '地址',\n          key: 'address'\n        }\n      ],\n      data: [\n        {\n          date: '2016-05-02',\n          name: '王小虎',\n          address: '上海市普陀区金沙江路 1518 弄',\n          forbidEdit: true,\n          showEditButton: true\n        },\n        {\n          date: '2016-05-04',\n          name: '王小虎',\n          address: '上海市普陀区金沙江路 1517 弄',\n          forbidEdit: false,\n          showEditButton: true\n        },\n        {\n          date: '2016-05-01',\n          name: '王小虎',\n          address: '上海市普陀区金沙江路 1519 弄',\n          forbidEdit: false,\n          showEditButton: false\n        },\n        {\n          date: '2016-05-03',\n          name: '王小虎',\n          address: '上海市普陀区金沙江路 1516 弄',\n          forbidEdit: false,\n          showEditButton: true\n        }\n      ]\n    }\n  },\n  methods: {\n    updateCell () {\n      this.$refs.d2Crud.updateCell(1, 'date', '2018-01-01')\n    },\n    updateRow () {\n      this.$refs.d2Crud.updateRow(2, {\n        date: '2018-01-01',\n        name: '王小小',\n        address: '上海市普陀区金沙江路 2333 弄'\n      })\n    },\n    addRow () {\n      this.$refs.d2Crud.addRow({\n        date: '2018-01-01',\n        name: '王小二',\n        address: '上海市普陀区金沙江路 7777 弄'\n      })\n    },\n    removeRow () {\n      this.$refs.d2Crud.removeRow(this.$refs.d2Crud.d2CrudData.length - 1)\n    }\n  }\n}\n<\/script>"},d7f6:function(t,e){t.exports="`D2 Crud` 向外部暴露了一些方法，除了之前介绍过的 `showDialog` 和 `closeDialog` 方法，还有以下几个常用方法：\n- updateCell\n  * 更新单元格\n  * 参数：rowIndex, key, value\n- updateRow\n  * 更新行\n  * 参数：index, row\n- addRow\n  * 新增一行\n  * 参数：row\n- removeRow\n  * 删除一行\n  * 参数：index   \n\n代码如下：\n"}}]);