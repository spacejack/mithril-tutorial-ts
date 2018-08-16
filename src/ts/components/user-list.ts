import m from 'mithril'
import UserModel from '../models/user'

export default {
	oninit: UserModel.loadList,
	view() {
		return m(".user-list",
			UserModel.list.map(user =>
				m("a.item",
					{href: "/edit/" + user.id, oncreate: m.route.link},
					`${user.firstName} ${user.lastName}`
				)
			)
		)
	}
} as m.Component
