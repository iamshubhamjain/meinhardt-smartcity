import { MENU_TOGGLE} from '../actions/types';

const initialState ={
    view:''
};

export default function(state = initialState, action){
    switch(action.type){
        case MENU_TOGGLE:
            return{
                ...state,
                menuicon : action.menuicon,
                menucloseoropen : action.menucloseoropen,
                nslwindow : action.nslwindow
            }
        default:
            return state;
    }
}