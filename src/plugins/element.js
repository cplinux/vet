import Vue from 'vue'
import {
  Button, Form, Message, MessageBox, FormItem, Input, Container,
  Header, Main, Menu, MenuItem, Aside, Dropdown, DropdownItem, DropdownMenu,
  Dialog, Submenu, Card, Breadcrumb, BreadcrumbItem, Row, Col, Table, TableColumn,
  Pagination
} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(Pagination)
Vue.use(TableColumn)
Vue.use(Table)
Vue.use(Col)
Vue.use(Row)
Vue.use(BreadcrumbItem)
Vue.use(Breadcrumb)
Vue.use(Card)
Vue.use(Submenu)
Vue.use(Dialog)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Dropdown)
Vue.use(Aside)
Vue.use(MenuItem)
Vue.use(Menu)
Vue.use(Main)
Vue.use(Header)
Vue.use(Container)
Vue.use(Input)
Vue.use(FormItem)
Vue.use(Form) // shift + alt + ⬆️
Vue.use(Button)

// Vue.use(Message)

// 导入message消息弹出框
Vue.prototype.$message = Message
Vue.prototype.$msgbox = MessageBox
