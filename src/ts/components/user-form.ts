import * as m from 'mithril'
import userModel from '../models/user'

export interface Attrs {
	id: string
}

export default {
	oninit (vnode) {
		userModel.load(Number(vnode.attrs.id))
	},

	view() {
		return m("form.user-form",
			{
				onsubmit: (e: Event) => {
					e.preventDefault()
					userModel.save()
				}
			},
			[
				m("label.label", "First name"),
				m("input.input[type=text][placeholder=First name]",	{
					oninput: m.withAttr("value", value => {
						userModel.current.firstName = value
					}),
					value: userModel.current.firstName
				}),
				m("label.label", "Last name"),
				m("input.input[placeholder=Last name]", {
					oninput: m.withAttr("value", value => {
						userModel.current.lastName = value
					}),
					value: userModel.current.lastName
				}),
				m("button.button[type=submit]", "Save"),
			]
		)
	}
} as m.Component<Attrs,{}>
