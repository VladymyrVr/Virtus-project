const rootReducer = (state = {}, action) => {

    switch (action.type) {
        case 'TRELLO_STATUS':
            return {status: action.payload};
        case 'CHAT_STATUS':
            return {chatStatus: action.payload};
        case 'ONLINE_STATUS':
            return {onlineStatus: action.payload};
        case 'USER_LENGTH':
            return { userLength: action.payload};
        case 'STATISTICS_STATUS':
            return { statisticsData: action.payload};
        case 'COLUMN_VALUE':
            return{columnValue: action.payload};
        case 'CHAT_ID':
            return{chatId: action.payload};
        case 'LAST_MESSAGES':
            return{lastMessages: action.payload};

        default:
            return state;
    }


};


export default rootReducer;