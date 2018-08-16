import m from 'mithril'

export interface User {
	id: number
	firstName: string
	lastName: string
}

const UserModel = {
	list: [] as User[],
	loadList() {
		return m.request<{data: User[]}>({
			method: "GET",
			url: "https://rem-rest-api.herokuapp.com/api/users",
			withCredentials: true
		})
		.then(result => {
			UserModel.list = result.data
		})
	},

	current: {} as User,
	load (id: number) {
		return m.request<User>({
			method: "GET",
			url: "https://rem-rest-api.herokuapp.com/api/users/" + id,
			withCredentials: true
		})
		.then(result => {
			UserModel.current = result
		})
	},

    save() {
        return m.request({
            method: "PUT",
            url: "https://rem-rest-api.herokuapp.com/api/users/" + UserModel.current.id,
            data: UserModel.current,
            withCredentials: true
        })
    }
}

type UserModel = typeof UserModel

export default UserModel
