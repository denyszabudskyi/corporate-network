const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [
        {
            id: 1,
            followed: false,
            fullname: 'Denis',
            status: 'I am a boss',
            location: {city: 'Kyiv', country: 'Ukraine'}
        },
        {id: 2, followed: true, fullname: 'Ivan', status: 'I am a boss', location: {city: 'Minsk', country: 'Belarus'}},
        {
            id: 3,
            followed: false,
            fullname: 'Dasha',
            status: 'I am a boss',
            location: {city: 'Warsaw', country: 'Poland'}
        },
        {id: 4, followed: true, fullname: 'Dima', status: 'I am a boss', location: {city: 'Minsk', country: 'Belarus'}},
    ]
};


let usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW :
            return {
                ...state,
                users: state.users.map((user) => {
                    return user.id === action.userId ? {...user, followed: true} : user;
                })
            };
        case UNFOLLOW :
            return {
                ...state,
                users: state.users.map((user) => {
                    return user.id === action.userId ? {...user, followed: false} : user;
                })
            };
        case SET_USERS:
            return {...state, users: [...state.users, ...action.users]};
        default:
            return state;
    }
};


export const followAC = (userId) => ({type: FOLLOW, userId});
export const UNfollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users});

export default usersReducer;