export const githubReducer = (state,action) => {


    switch (action.type){
        case "FETCH_GITHUB_USER_LOADING": {
            ...state,
            isloading: true,
            iserror: false,
        }
    }


}