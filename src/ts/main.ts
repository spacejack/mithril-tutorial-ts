import m from 'mithril'
import UserList from './components/user-list'
import UserForm from './components/user-form'
import Layout from './components/layout'

m.route(document.body, "/list", {
	"/list": {
		render() {
			return m(Layout, m(UserList))
		}
	},
	"/edit/:id": {
		render(vnode) {
			return m(Layout, m(UserForm, vnode.attrs))
		}
	}
})
