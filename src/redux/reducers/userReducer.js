
const initialState = {
    loading: false,
    firstAccess: true,
    auth: false,
    sessionToken: '',
    userId: '',
    userEmail: 'julliano@teste',
    userUsername: '',
    userFullname: 'Juliano',
    userBirthdate: '',
    userProfilePicture: '',
    userPictureUrl: '',
    userLocation: {
        latitude: '',
        longitude: ''
    }
};

export default (state = initialState, action) => {

    switch (action.type) {
        case 'SET_SIGNOUT_INFO':
            return {
                ...state,
                loading: false,
                firstAccess: false,
                auth: false,
                sessionToken: '',
                userId: '',
                userEmail: '',
                userUsername: '',
                userFullname: '',
                userBirthdate: '',
                userProfilePicture: '',
                userPictureUrl: '',
                userLocation: {
                    latitude: '',
                    longitude: '',
                }
            }
            break;
        case 'SET_SIGNIN_INFO':
            return {
                ...state,
                loading: false,
                firstAccess: false,
                auth: action.payload.response.data.auth,
                sessionToken: action.payload.response.data._id,
                userId: action.payload.response.data.user.id,
                userEmail: action.payload.response.data.user.email,
                userUsername: action.payload.response.data.user.username,
                userFullname: action.payload.response.data.user.firstName + ' ' + action.payload.response.data.user.lastName,
                userBirthdate: action.payload.response.data.user.birthDate,
                userProfilePicture: action.payload.response.data.user.picture,
                userPictureUrl: action.payload.response.data.user.picture_url,
                userLocation: {
                    latitude: action.payload.response.data.user.latitude,
                    longitude: action.payload.response.data.user.longitude,
                }
            }
            break;
        case 'SET_LOADING':
            return { ...state, loading: action.payload.loading }
            break;
        case 'SET_FIRST_ACCESS':
            return { ...state, firstAccess: action.payload.firstAccess }
            break;
        case 'SET_AUTH':
            return { ...state, auth: action.payload.auth }
            break;
        case 'SET_SESSION_TOKEN':
            return { ...state, sessionToken: action.payload.sessionToken }
            break;
        case 'SET_USER_ID':
            return { ...state, userId: action.payload.userId }
            break;
        case 'SET_USER_EMAIL':
            return { ...state, userEmail: action.payload.userEmail }
            break;
        case 'SET_USER_USERNAME':
            return { ...state, userUsername: action.payload.userUsername }
            break;
        case 'SET_USER_FULLNAME':
            return { ...state, userFullname: action.payload.userFullname }
            break;
        case 'SET_USER_BIRTHDATE':
            return { ...state, userBirthdate: action.payload.userBirthdate }
            break;
        case 'SET_USER_PROFILE_PICTURE':
            return { ...state, userProfilePicture: action.payload.userProfilePicture }
            break;
        case 'SET_USER_PICTURE_URL':
            return { ...state, userPictureUrl: action.payload.userPictureUrl }
            break;

    }

    return state;
}