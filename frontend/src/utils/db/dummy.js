export const POSTS = [
	{
		_id: "1",
		text: "Ban Ana nab abna!",
		img: "/posts/post1.png",
		user: {
			username: "banana",
			profileImg: "/avatars/boy1.png",
			fullName: "Ban Ana",
		},
		comments: [
			{
				_id: "1",
				text: "App Le pal!",
				user: {
					username: "apple",
					profileImg: "/avatars/girl1.png",
					fullName: "App Le",
				},
			},
		],
		likes: ["6658s891", "6658s892", "6658s893", "6658s894"],
	},
	{
		_id: "2",
		text: "Mel lonne lem? 😊",
		user: {
			username: "melon",
			profileImg: "/avatars/boy2.png",
			fullName: "Me Lon",
		},
		comments: [
			{
				_id: "1",
				text: "Pappa la alpa.",
				user: {
					username: "apple",
					profileImg: "/avatars/girl2.png",
					fullName: "App Le",
				},
			},
		],
		likes: ["6658s891", "6658s892", "6658s893", "6658s894"],
	},
	{
		_id: "3",
		text: "NANANANANANANANA Ba!",
		img: "/posts/post2.png",
		user: {
			username: "banana",
			profileImg: "/avatars/boy3.png",
			fullName: "Ban Ana",
		},
		comments: [],
		likes: ["6658s891", "6658s892", "6658s893", "6658s894", "6658s895", "6658s896"],
	},
	{
		_id: "4",
		text: "Aba naba na? 🤔",
		img: "/posts/post3.png",
		user: {
			username: "banana",
			profileImg: "/avatars/boy3.png",
			fullName: "Ban Ana",
		},
		comments: [
			{
				_id: "1",
				text: "Apple",
				user: {
					username: "apple",
					profileImg: "/avatars/girl3.png",
					fullName: "App Le",
				},
			},
		],
		likes: [
			"6658s891",
			"6658s892",
			"6658s893",
			"6658s894",
			"6658s895",
			"6658s896",
			"6658s897",
			"6658s898",
			"6658s899",
		],
	},
];

export const USERS_FOR_RIGHT_PANEL = [
	{
		_id: "1",
		fullName: "Ban Ana",
		username: "banana",
		profileImg: "/avatars/boy2.png",
	},
	{
		_id: "2",
		fullName: "App Le",
		username: "apple",
		profileImg: "/avatars/girl1.png",
	},
	{
		_id: "3",
		fullName: "Pe Ar",
		username: "pear",
		profileImg: "/avatars/boy3.png",
	},
	{
		_id: "4",
		fullName: "Me Lon",
		username: "melon",
		profileImg: "/avatars/girl2.png",
	},
];