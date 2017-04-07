import * as m from 'mithril'
import userModel from '../models/user'

export default {
	oninit: userModel.loadList,
	view() {
		return m(".user-list",
			userModel.list.map(user =>
				m("a.item",
					{href: "/edit/" + user.id, oncreate: m.route.link},
					`${user.firstName} ${user.lastName}`
				)
			)
		)
	}
} as m.Component<{},{}>
