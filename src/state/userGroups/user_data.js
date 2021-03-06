export const user = {
	name: '',
	description: '',
	status: 'Active',
	permissions: [
		{
			title: 'Agency Details',
			view: false,
			create: false,
			edit: false,
			delete: false,
		},
		{
			title: 'Employees',
			view: false,
			create: false,
			edit: false,
			delete: false,
		},
		{
			title: 'Filters',
			view: false,
			create: false,
			edit: false,
			delete: false,
		},
		{
			title: 'User Groups',
			view: false,
			create: false,
			edit: false,
			delete: false,
		}
	]
}

export const userGroupsList = [
  { ...user, id: 1, name: "Administrator", status: "Active", description: 'Description 1'},
  { ...user, id: 2, name: "User", status: "Inactive", description: 'Description 2'},
  { ...user, id: 3, name: "User 3", status: "Inactive", description: 'Description 3'},
  { ...user, id: 4, name: "User 4", status: "Inactive", description: 'Description 4'},
  { ...user, id: 5, name: "User 5", status: "Inactive", description: 'Description 5'},
  { ...user, id: 6, name: "User 6", status: "Active", description: 'Description 6'},
  { ...user, id: 7, name: "User 7", status: "Inactive"},
  { ...user, id: 8, name: "User 8", status: "Inactive"},
  { ...user, id: 9, name: "User 9", status: "Inactive"},
  { ...user, id: 10, name: "User 10", status: "Inactive"},
  { ...user, id: 11, name: "User 11", status: "Inactive"},
  { ...user, id: 12, name: "User 12", status: "Inactive"},
]