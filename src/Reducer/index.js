import Immutable from 'immutable';
import jwtDecode from 'jwt-decode';

const defaulatTestData = Immutable.fromJS({
        isFetching: false,
        isFinish : 0,
        student_rating : 0,
        exindex: 0, 
        exercise: [{title: '', answer: '[]', type: 0, breakdown: []}],
        modalOpen: false,
        test_log: [{}],
        ranking_list: [{}],
        record: {correct: 0, new_rating: 0},
    });
const defaulatStudentData = Immutable.fromJS({
        isFetching: false,
        my_test_list: [],
    });

const defaulatAuthData = Immutable.fromJS({
        token: null,
        userName: null,
        userid: null,
        isAuthenticated: false,
        isAuthenticating: false,
        statusText: null
    });

//获取鉴权数据
export const AuthData = (state = defaulatAuthData, action = {}) => {
    switch(action.type){
        case 'LOGIN_USER_REQUEST':
            return state.set('isAuthenticating', true);
        case 'REG_USER_REQUEST':
            return state.set('isAuthenticating', true);
        case 'LOGIN_USER_SUCCESS':
            var sucState = {
                isAuthenticating: false,
                isAuthenticated: true,
                token: action.payload.token,
                userName: jwtDecode(action.payload.token).username,
                userid: jwtDecode(action.payload.token).userid,
                statusText: 'You have been successfully logged in.'
            };
            return Immutable.fromJS(sucState);
        case 'REG_USER_SUCCESS':
            var sucRegState = {
                isAuthenticating: false,
                isAuthenticated: true,
                token: action.payload.token,
                userName: jwtDecode(action.payload.token).username,
                userid: jwtDecode(action.payload.token).userid,
                statusText: 'You have been successfully registered.'
            };
            return Immutable.fromJS(sucRegState);
        case 'LOGIN_USER_FAILURE':
            var failState = {
                isAuthenticating: false,
                isAuthenticated: false,
                token: null,
                userName: null,
                userid: null,
                statusText: `Authentication Error: ${action.payload.status} ${action.payload.statusText}`
            };
            return Immutable.fromJS(failState);
        case 'REG_USER_FAILURE':
            var failRegState = {
                isAuthenticating: false,
                isAuthenticated: false,
                token: null,
                userName: null,
                userid: null,
                statusText: `Authentication Error: ${action.payload.status} ${action.payload.statusText}`
            };
            return Immutable.fromJS(failRegState);
        case 'LOGOUT_USER':
            return state.set('isAuthenticated', false)
                    .set('token',null)
                    .set('userName',null)
                    .set('userid',null)
                    .set('statusText','You have been successfully logged out.');
        default:
            return state;
    }
} 

//手动获取数据
export const testData = (state = defaulatTestData, action = {}) => {
    switch(action.type){
        case 'GET_TEST_START':
            return state.set('isFetching', true);
        case 'GET_TEST_STATUS_SUCCESS':
            console.log(action.json);
            return state.set('test_status', Immutable.fromJS(action.json.test_status))
                .set('test_id', action.test_id);
        case 'GET_TEST_RANKLIST_SUCCESS':
            console.log(action.json);
            return state.set('ranking_list', Immutable.fromJS(action.json));
        case 'GET_STU_TESTINFO_SUCCESS':
            console.log(action.json);
            return state.set('isFinish', action.json.isFinish)
                        .set('student_rating', action.json.student_rating);
        case 'GET_TEST_SUCCESS':
            const exercise = action.json;
            const start_time = new Date();
            var test_log = [];
            for(var i = 0; i < exercise.length; i++){
                test_log[i] = {
                    start_time: start_time,
                    ac_time: 0,
                }
            } 
            var newState = {
                exercise: exercise, 
                exindex: 0, 
                record: {correct: 0, wrong: 0, new_rating: action.student_rating, combo_correct: 0, max_combo: 0},
                start_time: start_time, 
                test_id: action.test_id, 
                test_log: test_log,
                isFetching: false,
                modalOpen: false,
            };
            console.log(newState);
            
            return state.mergeDeep(Immutable.fromJS(newState));
            //console.log(newState.toJS());
            //return newState;
        case 'GET_TEST_RESULT_SUCCESS':
            console.log(action.json);
            return state.set('test_log', Immutable.fromJS(action.json.test_log))
                .set('test_kp', Immutable.fromJS(action.json.test_kp))
                .set('correct', action.json.correct)
                .set('isFetching', false);
        case 'GET_EXERCISE_SAMPLE_SUCCESS':
            return state.set('exercise_sample', Immutable.fromJS(action.json)).set('isFetching', false).set('modalOpen', true);
        case 'UPDATE_EXINDEX':
            return state.set('exindex', action.exindex);
        case 'UPDATE_EXERCISE_ST':
            return state.set('exercise_st', new Date());
        case 'UPDATE_EXERCISE_TIME':
            return state.updateIn(['test_log', action.i, 'ac_time'], ac_time => ac_time + action.ac_time);
        case 'UPDATE_FINISH_TIME':
            return state.set("finish_time", new Date());
        case 'CLOSE_MODAL':
            return state.set('modalOpen', false);
        case 'SUBMIT_EXERCISE_LOG':
            const exindex = state.get('exindex');
            return state.mergeDeepIn(['test_log', exindex], Immutable.fromJS(action.exercise_log)).set("modalOpen", true);
        case 'UPDATE_RECORD':
            // const exercise_state = action.exercise_log.exercise_state;
            // const combo_correct = state.getIn(['record', 'combo_correct']);
            // var combo_max = state.getIn(['record', 'combo_max']);
            // if(exercise_state){
            //     return state.updateIn(['record', 'combo_correct'], num => num + 1)
            //     .updateIn(['record', 'correct'], num => num + 1);
            //     combo_correct
            // }
            // if(combo_correct > combo_max){
            //     combo_correct 
            // }
        case 'SUBMIT_FEEDBACK':
            return state.setIn(['test_log', action.exindex, 'breakdown_sn'], Immutable.fromJS(action.breakdown_sn))
            .set('modalOpen', true);
        case 'SUBMIT_TEST_START':
            return state;
        case 'SUBMIT_TEST_SUCCESS':
            return state.setIn(['delta_result'], Immutable.fromJS(action.json));
        default:
            return state;
    }
}

//获取测试数据
export const studentData = (state = defaulatStudentData, action = {}) => {
    switch(action.type){
        case 'GET_DATA_START':
            return state.set('isFetching', true);
        case 'GET_CHAPTER_SUCCESS':
            return state;//Object.assign({}, state, {isFetching: false, book: action.json});
        case 'GET_MYTEST_SUCCESS':
            return state.set('my_test_list', action.json).set('isFetching', false);
        default:
            return state;
    }
}
