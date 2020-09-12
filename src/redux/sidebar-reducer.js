let initialState = {
    navLinks:[
        {id: 1, title: 'Profile', href: '/profile'},
        {id: 2, title: 'Dialogs', href: '/dialogs'},
        {id: 3, title: 'News', href: '/news'},
        {id: 4, title: 'Music', href: '/music'},
        {id: 5, title: 'Settings', href: '/settings'},
        {id: 6, title: 'Users', href: '/users'}
    ],

    friends: [
        {id: 1, name: "Fafasfasf", img: "./ "},
        {id: 2, name: "FSFASSFSAGGH", img: "./ "},
        {id: 3, name: "hfdshfdv", img: "./ "}
    ],
}


const sidebarReducer = (state = initialState, action)=>{
    return state;
}

export default sidebarReducer;