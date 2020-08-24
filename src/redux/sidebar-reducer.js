let initialState = {
    navLinks:[
        {title: 'Profile', href: '/profile'},
        {title: 'Dialogs', href: '/dialogs'},
        {title: 'News', href: '/news'},
        {title: 'Music', href: '/music'},
        {title: 'Settings', href: '/settings'}
    ],

    friends: [
        {name: "Fafasfasf", img: "./ "},
        {name: "FSFASSFSAGGH", img: "./ "},
        {name: "hfdshfdv", img: "./ "}
    ],
}


const sidebarReducer = (state = initialState, action)=>{
    return state;
}

export default sidebarReducer;