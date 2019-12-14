(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8a106520","chunk-2d0aba5a","chunk-2d208d93"],{"15bb":function(n,t,e){"use strict";e.r(t),t["default"]="<template>\n  <div>\n    <d2-crud\n      :columns=\"columns\"\n      :data=\"data\"\n      :options=\"options\"/>\n  </div>\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      columns: [\n        {\n          title: '日期',\n          key: 'date',\n          width: '180'\n        },\n        {\n          title: '姓名',\n          key: 'name',\n          width: '180'\n        },\n        {\n          title: '地址',\n          key: 'address'\n        }\n      ],\n      data: [\n        {\n          date: '2016-05-02',\n          name: '王小虎',\n          address: '上海市普陀区金沙江路 1518 弄'\n        },\n        {\n          date: '2016-05-04',\n          name: '王小虎',\n          address: '上海市普陀区金沙江路 1517 弄'\n        },\n        {\n          date: '2016-05-01',\n          name: '王小虎',\n          address: '上海市普陀区金沙江路 1519 弄'\n        },\n        {\n          date: '2016-05-03',\n          name: '王小虎',\n          address: '上海市普陀区金沙江路 1516 弄'\n        }\n      ],\n      options: {\n        stripe: true\n      }\n    }\n  }\n}\n<\/script>"},a718:function(n,t){n.exports="`options` 对象可以对表格进行配置，其中 `stripe` 属性可以创建带斑马纹的表格。它接受一个 `Boolean` ，设置为 `true` 即为启用。代码如下：\n"},acdc:function(n,t,e){"use strict";e.r(t);var a=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("d2-container",[e("template",{slot:"header"},[n._v("带斑马纹表格")]),e("d2-crud",{attrs:{columns:n.columns,data:n.data,options:n.options}}),e("el-card",{staticClass:"d2-mb",attrs:{shadow:"never"}},[e("d2-markdown",{attrs:{source:n.doc}})],1),e("el-card",{staticClass:"d2-mb",attrs:{shadow:"never"}},[e("d2-highlight",{attrs:{code:n.code}})],1),e("d2-link-btn",{attrs:{slot:"footer",title:"文档",link:"https://fairyever.com/d2-admin/doc/zh/ecosystem-d2-crud/"},slot:"footer"})],2)},d=[],s=(e("8099"),e("a718")),o=e.n(s),r=e("15bb"),i={data:function(){return{doc:o.a,code:r["default"],columns:[{title:"日期",key:"date",width:"180"},{title:"姓名",key:"name",width:"180"},{title:"地址",key:"address"}],data:[{date:"2016-05-02",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"},{date:"2016-05-04",name:"王小虎",address:"上海市普陀区金沙江路 1517 弄"},{date:"2016-05-01",name:"王小虎",address:"上海市普陀区金沙江路 1519 弄"},{date:"2016-05-03",name:"王小虎",address:"上海市普陀区金沙江路 1516 弄"}],options:{stripe:!0}}}},c=i,l=e("2877"),u=function(n){n.options.__source="src/views/demo/d2-crud/demo2/index.vue"},m=u,p=Object(l["a"])(c,a,d,!1,null,null,null);"function"===typeof m&&m(p);t["default"]=p.exports}}]);