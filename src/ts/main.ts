import * as m from 'mithril'
import userList from './components/user-list'
import userForm from './components/user-form'
import layout from './components/layout'

m.route(document.body, "/list", {
	"/list": {
		render() {
			return m(layout, m(userList))
		}
	},
	"/edit/:id": {
		render() {
			return m(layout, m(userForm))
		}
	}
})
