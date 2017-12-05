import NetUtil from '../utils/NetUtil'
import {push} from 'react-router-redux'
import config from '../utils/Config'
import jwtDecode from 'jwt-decode';
import { checkHttpStatus, parseJSON } from '../utils';


let target = config.server_url;

/*-------------------------------------------------*/
//登录注册相关action
export const loginUserSuccess = (token) => {
  localStorage.setItem('token', token);
  return {
    type: 'LOGIN_USER_SUCCESS',
    payload: {
      token: token
    }
  }
}

export const regUserSuccess = (token) =>  {
  localStorage.setItem('token', token);
  return {
    type: 'REG_USER_SUCCESS',
    payload: {
      token: token
    }
  }
}

export const loginUserFailure = (error) => {
  localStorage.removeItem('token');
  return {
    type: 'LOGIN_USER_FAILURE',
    payload: {
      status: error.response.status,
      statusText: error.response.statusText
    }
  }
}

export const regUserFailure = (error) => {
  localStorage.removeItem('token');
  return {
    type: 'REG_USER_FAILURE',
    payload: {
      status: error.response.status,
      statusText: error.response.statusText
    }
  }
}

export const loginUserRequest = () => {
  return {
    type: 'LOGIN_USER_REQUEST',
  }
}

export const regUserRequest = () => {
  return {
    type: 'REG_USER_REQUEST',
  }
}
// export function getTestCenter() {
//   return {
//     type: GET_TESTCENTER_DATA
    
//   }
// }

export const logout = () => {
    localStorage.removeItem('token');
    return {
        type: 'LOGOUT_USER',
    }
}

export const logoutAndRedirect = () => {
    return (dispatch, state) => {
        dispatch(logout());
        dispatch(push('/mobile-test/login'));
    }
}

export const loginUser = (username, password, redirect) => {
    return function(dispatch) {
        let path = '/login';
        let url = target + path;

        dispatch(loginUserRequest());
        return fetch(url, {
            method: 'post',
            mode: "cors",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
                body: JSON.stringify({username: username, password: password})
            })
            .then(checkHttpStatus)
            .then(parseJSON)
            .then(response => {
                try {
                    let decoded = jwtDecode(response.token);
                    console.log('decoded:'+JSON.stringify(decoded));
                    console.log('response.token:'+response.token);
                    dispatch(loginUserSuccess(response.token));
                    dispatch(push(redirect));
                } catch (e) {
                    console.log('response.json():'+response.json());
                    dispatch(loginUserFailure({
                        response: {
                            status: 403,
                            statusText: response.json()
                        }
                    }));
                }
            })
            .catch(error => {
                console.log('error:'+error);
                dispatch(loginUserFailure(error));
            })
    }
}

export const regUser = (username, password, redirect) => {
    return function(dispatch) {
        let path = '/newuser';
        let url = target + path;
        dispatch(regUserRequest());
        return fetch(url, {
            method: 'post',
            mode: "cors",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
                body: JSON.stringify({username: username, password: password})
            })
            .then(checkHttpStatus)
            .then(parseJSON)
            .then(response => {
                try {
                    let decoded = jwtDecode(response.token);
                    dispatch(regUserSuccess(response.token));
                    dispatch(push(redirect));
                } catch (e) {
                    dispatch(regUserFailure({
                        response: {
                            status: 403,
                            statusText: response.json()
                        }
                    }));
                }
            })
            .catch(error => {
                dispatch(loginUserFailure(error));
            })
    }
}
//登录注册相关结束
/*-------------------------------------------------*/


//利用elo_rating方法更新rating
function elo_rating(Ra, Rb){
    const m = (Rb - Ra)/400;
    return 1/(1 + Math.pow(10, m));
}

//开始获取测试数据
const getDataStart = () => {
  return {
    type: 'GET_DATA_START',
  }
}

//开始获取测试数据
const getTestStart = () => {
  return {
    type: 'GET_TEST_START',
  }
}

//获取测试数据成功
const getMyTestSuccess = (json) => {
  return {
    type: 'GET_MYTEST_SUCCESS',
    json,
  }
}

//获取测试数据成功
const getTestSuccess = (json, test_id) => {
  return {
    type: 'GET_TEST_SUCCESS',
    json,
    test_id,
  }
}

const getTestStatusSuccess = (json, test_id, isFinish) => {
    return {
        type: 'GET_TEST_STATUS_SUCCESS',
        json,
        test_id,
        isFinish,
    }
}

const getStuTestInfoSuccess = (json) => {
    return {
        type: 'GET_STU_TESTINFO_SUCCESS',
        json,
    }
}

const getTestRankingListSuccess = (json) => {
    return {
        type: 'GET_TEST_RANKLIST_SUCCESS',
        json,
    }
}


//成功获取测试结果数据
const getTestResultSuccess = (json) => {
    return {
        type: 'GET_TEST_RESULT_SUCCESS',
        json,
    }
}

//成功获取题目样本
const getExerciseSampleSuccess = (json) => {
    console.log(json);
    return {
        type: 'GET_EXERCISE_SAMPLE_SUCCESS',
        json,
    }
}

//获取测试数据成功
const getChapterSuccess = (json) => {
  return {
    type: 'GET_CHAPTER_SUCCESS',
    json,
  }
}


/*-------------------------------------------------*/

//获取章节数据
export const getMyChapter = (student_id, course_id) => {
    let url = target + '/klmanager/getMyChapter';
    return dispatch => {
        dispatch(getDataStart());
        return NetUtil.get(url, {student_id, course_id}, json => {
            dispatch(getChapterSuccess(json));
        }, errors => {
            console.log(errors);
        });
    }
}

//获取指定测试的数据
export const getTestData = (student_id, test_id) => {
    let url = target + '/klmanager/getExerciseByTest';
    return dispatch => {
        dispatch(getTestStart());
        return NetUtil.get(url, {test_id, student_id}, json => {
            console.log(json);
            dispatch(getTestSuccess(json, test_id));
            dispatch(push("/mobile-test/Question"));
            dispatch(updateExerciseST());
        }, errors => {
            console.log(errors);
        });
    }
}

//获取测试列表
export const getMyTestList = (student_id) => {
    let url = target + '/klmanager/getMyTest';
    return dispatch => {
        dispatch(getDataStart());
        return NetUtil.get(url, {student_id}, json => {
            dispatch(getMyTestSuccess(json));
        }, errors => {
            console.log(errors);
        });
    }
}

//单题模式
export const jumpToExercise = (exercise_id) => {
    let url = target + '/klmanager/getExerciseByID';
    return dispatch => {
        dispatch(getTestStart());
        return NetUtil.get(url, {exercise_id, 'student_id': '1'}, json => {
            //单题模式test_id为-1 
            console.log(json);
            dispatch(getTestSuccess(json, -1));
            dispatch(push("/mobile-test/Question"));
            dispatch(updateExerciseST());
        }, errors => {
            console.log(errors);
        });
    }
}

export const submitFeedBack = (exindex, breakdown_sn) => {
    return {
        type: 'SUBMIT_FEEDBACK',
        exindex,
        breakdown_sn,
    }
}

export const jumpNext = (isQ) => {
    return (dispatch, getState) => {
        const testData = getState().testData;
        const exindex = testData.get("exindex");
        const test_log = testData.get("test_log").toJS();
        const exercise = testData.get("exercise").toJS();
        const exercise_state = test_log[exindex].exercise_state;
        const blength = exercise[exindex].breakdown.length;
        var next = -1;
        for(var i = 0; i < exercise.length; i++){
            if(!test_log[i].delta_student_rating){
                next = i;
                break;
            }
        }
        if(!isQ || exercise_state || blength == 1){
            //还有未完成的题目
            if(next >= 0){
                console.log('update');
                dispatch(closeModal());
                dispatch(updateExindex(next));
                dispatch(updateExerciseST());
                dispatch(push("/mobile-test/Question"));
            }
            else{
                //全部完成
                console.log("submit");
                //测试完成，提交数据
                dispatch(updateFinishTime());
                const {testData} = getState();
                var test_state = testData.toJS();
                console.log(test_state);
                dispatch(submitTestStart());
                let url = target + '/klmanager/submitTest';
                return NetUtil.post(url, {student_id: '1', student_rating: 500, test_result: test_state}, json => {
                    console.log(json);
                    dispatch(submitTestSuccess(json));
                    dispatch(push("/mobile-test/kpTestResult"));
                }, errors => {
                    console.log(errors);
                });
            }
        }else{
            console.log('jump');
            dispatch(closeModal());
            dispatch(push("/mobile-test/AnswerTest"));
        }
    }
}

export const closeModal = () => {
    return {
        type: 'CLOSE_MODAL',
    }
}

//更新题目数
export const updateExindex = (exindex) => {
    return {
        type: 'UPDATE_EXINDEX',
        exindex,
    }
}

const updateFinishTime = () => {
    return {
        type: 'UPDATE_FINISH_TIME',
    }
}

export const updateExerciseTime = (i, ac_time) => {
    console.log(ac_time);
    return {
        type: 'UPDATE_EXERCISE_TIME',
        i,
        ac_time,
    }
}

//更新题目开始时间
export const updateExerciseST = () => {
    return {
        type: 'UPDATE_EXERCISE_ST',
    }
}

//提交单题测试结果
export const updateTestLog = (test_log) => {
    return {
        type: 'UPDATE_TEST_LOG',
        test_log,
    }
}

//开始提交测试结果
const submitTestStart = () => {
  return {
    type: 'SUBMIT_TEST_START',
  }
}

//提交测试结果成功
const submitTestSuccess = (json) => {
  return {
    type: 'SUBMIT_TEST_SUCCESS',
    json,
  }
}

const checkAnswer = (exercise_type, exAnswer, userAnswer) => {
    var result = 1;
    switch(exercise_type){
        case 0:
            //填空题
            for(var i = 0; i < exAnswer.length; i++){
                if(userAnswer && userAnswer[i]){
                    //去掉首尾标识字符
                    const length = exAnswer[i].length;
                    const checkAnswer = exAnswer[i].substr(1, length - 2);
                    if(checkAnswer != userAnswer[i]){
                        console.log("wrong");
                        result = 0;
                        break;
                    }
                }else{
                    console.log("wrong");
                    result = 0;
                    break;
                }
            }
            break;
        case 1:
            const xornum = [1, 2, 4, 8];
            var checkAnswer = 0;
            for(var i = 0; i < exAnswer.length; i++){
                if(exAnswer[i].correct)
                checkAnswer += xornum[i];
            }
            //选择题
            if(userAnswer != exAnswer){
                result = 0;
            }
            break;
        default:
            break;
    }
    return result;
}

/**
 * [提交单题测试结果]
 */
export const submitExerciseLog = (exercise, userAnswer, ac_time, student_rating) => {
    console.log(userAnswer);
    const {exercise_id, answer, exercise_type, exercise_rating, breakdown} = exercise;
    console.log(answer);
    const result = checkAnswer(exercise_type, answer, userAnswer);

    student_rating = 500;

    //计算学生、题目得分
    const st_delta = elo_rating(student_rating, exercise_rating);
    const ex_delta = elo_rating(exercise_rating, student_rating);

    const K = 32;
    const ex_SA = result ? 0 : 1;
    const st_SA = result ? 1 : 0;

    var breakdown_sn = [];
    const exercise_log = {
            exercise_id: exercise_id, 
            exercise_state: result,
            submit_time: new Date(),
            //原题答案
            exercise_answer: answer,
            //用户答案
            user_answer: userAnswer,
            delta_exercise_rating: Math.ceil(K*(ex_SA - ex_delta)), 
            delta_student_rating: Math.ceil(K*(st_SA - st_delta)),
            breakdown_sn: breakdown_sn
        };
    if(result){
        for(var i = 0; i < breakdown.length; i++){
            breakdown_sn[i] = {
                sn: breakdown[i].sn, 
                kpid: breakdown[i].kpid, 
                kpname: breakdown[i].kpname,
                sn_state: 1, 
                kp_old_rating: breakdown[i].kp_rating, 
                sn_old_rating: breakdown[i].sn_rating
            };
        }
        exercise_log.breakdown_sn = breakdown_sn;
    }else if(breakdown.length == 1){
        breakdown_sn[0] = {
            sn: 0,
            kpid: breakdown[0].kpid,
            kpname: breakdown[0].kpname,
            sn_state: 0,
            kp_old_rating: breakdown[0].kp_rating,
            sn_old_rating: breakdown[0].sn_rating
        }
        exercise_log.breakdown_sn = breakdown_sn;
    }
    return{
        type: 'SUBMIT_EXERCISE_LOG',
        exercise_log: exercise_log,
    }
}

export const getStudentData = (student_id) => {
    return (dispatch) => {
        dispatch(getDataStart());
        let url = target + '/klmanager/getStudentData';
        return NetUtil.post(url, {test_id, student_id}, json => {
            console.log(json);
            dispatch(getStudentDataSuccess(json));
        }, errors => {
            console.log(errors);
        });
    }
}

export const getTestStatus = (student_id, test_id) => {
    return (dispatch) => {
        dispatch(getTestStart());
        let url = target + '/klmanager/getTestStatus';
        return NetUtil.post(url, {test_id}, json => {
            dispatch(getTestStatusSuccess(json, test_id));
        }, errors => {
            console.log(errors);
        });
    }
}

export const getTestRankingList = (test_id) => {
    return (dispatch) => {
        dispatch(getTestStart());
        let url = target + '/klmanager/getTestRankingList';
        return NetUtil.post(url, {test_id}, json => {
            dispatch(getTestRankingListSuccess(json));
        }, errors => {
            console.log(errors);
        });
    }
}

export const getStuTestInfo = (student_id,test_id) => {
    return (dispatch) => {
        let url = target + '/klmanager/getStuTestInfo';
        return NetUtil.post(url, {student_id,test_id}, json => {
            dispatch(getStuTestInfoSuccess(json));
        }, errors => {
            console.log(errors);
        });
    }
}


export const getTestResult = (student_id, test_id) => {
    return (dispatch) => {
        dispatch(getDataStart());
        let url = target + '/klmanager/getTestResult';
        return NetUtil.post(url, {student_id, test_id}, json => {
            console.log(json);
            dispatch(getTestResultSuccess(json));
            // dispatch(push("/mobile-test/testResult"));
        }, errors => {
            console.log(errors);
        });
    }
}

export const getChapter = (student_id, course_id) => {
    return (dispatch) => {
        dispatch(getDataStart());
        let url = target + '/klmanager/getChapter';
        return NetUtil.post(url, {student_id, course_id}, json => {
            console.log(json);
            dispatch(getChapterSuccess(json));
        }, errors => {
            console.log(errors);
        });
    }
}

//根据sample_id获取题目信息
export const getExerciseSample = (exercise_id) => {
    let url = target + '/klmanager/getExerciseSample';
    return dispatch => {
        dispatch(getDataStart());
        //TO-DO：指定样本参数
        return NetUtil.get(url, {exercise_id}, json => {
            dispatch(getExerciseSampleSuccess(json));
        }, errors => {
            console.log(errors);
        });
    }
}

