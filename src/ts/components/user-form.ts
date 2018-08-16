import m from 'mithril'
import UserModel from '../models/user'

export interface Attrs {
	id: string
}

export default {
	oninit (vnode) {
		UserModel.load(Number(vnode.attrs.id))
	},

	view() {
		return m("form.user-form",
			{
				onsubmit: (e: Event) => {
					e.preventDefault()
					UserModel.save()
				}
			},
			[
				m("label.label", "First name"),
				m("input.input[type=text][placeholder=First name]",	{
					oninput: m.withAttr("value", value => {
						UserModel.current.firstName = value
					}),
					value: UserModel.current.firstName
				}),
				m("label.label", "Last name"),
				m("input.input[placeholder=Last name]", {
					oninput: m.withAttr("value", value => {
						UserModel.current.lastName = value
					}),
					value: UserModel.current.lastName
				}),
				m("button.button[type=submit]", "Save"),
			]
		)
	}
} as m.Component<Attrs>
