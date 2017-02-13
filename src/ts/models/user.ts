import * as m from 'mithril'

export interface User {
	id: string
	firstName: string
	lastName: string
}

const userModel = {
	list: [] as User[],
	loadList() {
		return m.request<{data: User[]}>({
			method: "GET",
			url: "https://rem-rest-api.herokuapp.com/api/users",
			withCredentials: true,
		})
		.then(result => {
			userModel.list = result.data
		})
	},

	current: {} as User,
	load (id: string) {
		return m.request<User>({
			method: "GET",
			url: "https://rem-rest-api.herokuapp.com/api/users/:id",
			data: {id: id},
			withCredentials: true,
		})
		.then(result => {
			userModel.current = result
		})
	},

    save() {
        return m.request({
            method: "PUT",
            url: "https://rem-rest-api.herokuapp.com/api/users/:id",
            data: userModel.current,
            withCredentials: true,
        })
    }
}

export default userModel
