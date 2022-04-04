
const initialState = {
    loading: false,
    auth: false,
    expired: true,
    firstAccess: true,
    sessionToken: '',
    user: {
        _id: '',
        email: '',
        username: '',
        fullname: '',
        birthdate: '',
        picture: '',
        pictureUrl: '',
        location: {
            latitude: '',
            longitude: ''
        }
    }

};

export default (state = initialState, action) => {

    switch (action.type) {
        case 'SET_CREATE_POST_INFO': {
            return {
                ...state,
                createPostInfo: action.payload.createPostInfo
            }
        }
        case 'SET_SIGNOUT_INFO':
            return {
                ...state,
                loading: false,
                auth: false,
                expired: true,
                firstAccess: false,
                sessionToken: '',
                user: {
                    _id: '',
                    email: '',
                    username: '',
                    fullname: '',
                    birthdate: '',
                    picture: '',
                    pictureUrl: '',
                    location: {
                        latitude: '',
                        longitude: '',
                        cityCode: ''
                    }
                }

            }
            break;
        case 'SET_SIGNIN_INFO':
            return {
                ...state,
                loading: false,
                auth: true,
                expired: action.payload.response.data.expired,
                sessionToken: action.payload.response.data._id,
                user: {
                    _id: action.payload.response.data.user?._id,
                    email: action.payload.response.data.user?.email,
                    username: action.payload.response.data.user?.username,
                    fullname: action.payload.response.data.user?.fullname,
                    birthdate: action.payload.response.data.user?.birthdate,
                    picture: action.payload.response.data.user?.picture,
                    pictureUrl: action.payload.response.data.user?.pictureUrl,
                    location: {
                        latitude: action.payload.response.data.user?.location?.latitude,
                        longitude: action.payload.response.data.user?.location?.longitude,
                        cityCode: action.payload.response.data.user?.location?.cityCode
                    }
                },
            }
            break;
        case 'SET_USER_INFO':
            return {
                ...state,
                user: {
                    ...state,
                    _id: action.payload.user._id,
                    email: action.payload.user.email,
                    username: action.payload.user.username,
                    fullname: action.payload.user.fullname,
                    birthdate: action.payload.user.birthdate,
                    picture: action.payload.user.picture,
                    pictureUrl: action.payload.user.pictureUrl,
                    location: {
                        latitude: action.payload.user.location.latitude,
                        longitude: action.payload.user.location.longitude,
                        cityCode: action.payload.user.location.cityCode
                    }
                }
            }
            break;
        case 'SET_LOADING':
            return { ...state, loading: action.payload.loading }
            break;
        case 'SET_FIRST_ACCESS':
            return { ...state, firstAccess: action.payload.firstAccess }
            break;
        case 'SET_USER_EMAIL':
            return { ...state, user: { email: action.payload.email } }
            break;
        case 'SET_USER_USERNAME':
            return { ...state, user: { username: action.payload.username } }
            break;
        case 'SET_USER_FULLNAME':
            return { ...state, user: { fullname: action.payload.fullname } }
            break;
        case 'SET_USER_BIRTHDATE':
            return {
                ...state, user: { birthdate: action.payload.birthdate }
            }
            break;
        case 'SET_USER_PICTURE':
            return { ...state, user: { picture: action.payload.picture } }
            break;
        case 'SET_USER_PICTURE_URL':
            return { ...state, user: { pictureUrl: action.payload.pictureUrl } }
            break;
    }

    return state;
}