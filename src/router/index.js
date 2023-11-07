import Vue from 'vue'
import Router from 'vue-router'

// User
import User from '../views/user/list'
import AddUser from '../views/user/add'
import EditUser from '../views/user/edit'
import DetailUser from '../views/user/detail'

//plannogram
import Plannogram from '../views/plannogram/list'
import AddPlannogram from '../views/plannogram/add'
import EditPlannogram from '../views/plannogram/edit'
import DetailPlannogram from '../views/plannogram/detail'


// Product
import Product from '../views/product/list'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'list-user',
			component: User
		},
		{
			path: '/list-user',
			name: 'list-user',
			component: User
		},
		{
			path: '/add-user',
			name: 'add-user',
			component: AddUser
		},
		{
			path: '/edit-user',
			name: 'edit-user',
			component: EditUser
		},
		{
			path: '/detail-user',
			name: 'detail-user',
			component: DetailUser
		},
		{
			path: '/list-product',
			name: 'list-product',
			component: Product
		},
		{
			path: '/list-plannogram',
			name: 'list-plannogram',			
			component: Plannogram
		},
		{
			path: '/add-plannogram',
			name: 'add-plannogram',
			component: AddPlannogram
		},
		{
			path: '/detail-plannogram',
			name: 'detail-plannogram',
			component: DetailPlannogram
		},
		{
			path: '/edit-plannogram',
			name: 'edit-plannogram',
			component: EditPlannogram
		},
	]
})
