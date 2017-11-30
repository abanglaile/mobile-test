import React from 'react';
import ReactDOM from 'react-dom';
import { WingBlank, Flex, List, Checkbox, Button, Icon, Modal, Popup, Progress, NavBar} from 'antd-mobile';
import Tex from './renderer.js';
import MathInput from '../../math-input/src/components/app.js'

import *as action from '../Action/';
import {connect} from 'react-redux';
const CheckboxItem = Checkbox.CheckboxItem;
const AgreeItem = Checkbox.AgreeItem;

const Item = List.Item;
const alert = Modal.alert; 
class Question extends React.Component {
  constructor(props) { 
  	super(props);
  	this.onSelectChange = this.onSelectChange.bind(this);
  }

  // //初始化答案及选项
  // init(exercise){
  //   //当前题目
  //   var {type, title, answer} = exercise;
  //   answer = eval(answer);
  //   if(type == 1){
  //       this.initXor();
  //       var checkAnswer = 0;
  //       for(var i = 0; i < answer.length; i++){
  //           if(answer[i].correct)
  //             checkAnswer += this.xornum[i];
  //       }
  //       this.checkAnswer = checkAnswer;
  //       this.userAnswer = 0;
  //   }else if(type == 0){
  //       this.checkAnswer = answer;
  //   }
  // }

  // //这里使用一个整数代表选项的情况，例如0011，代表选项1、2，
  // //该数组用于每次改变选项时对指定位置进行取反操作
  // initXor(){
  //   this.xornum = [1, 2, 4, 8];
  // }



  // onCheck(){
  //   //var state = this.props.location.state;
  //   var {exindex, exercise, exsize, reward} = this.props;
    
  //   console.log(this.userAnswer);
  //   //去掉首尾@字符
  //   const length = this.checkAnswer.length;
  //   var checkAnswer = this.checkAnswer.substr(1, length - 2);
  //   console.log(checkAnswer);
  //   var {breakdown} = exercise;
  //   if(checkAnswer == this.userAnswer){
  //     alert("答案正确");
  //     var breakdown_sn = [];
  //     for(var i = 0; i < breakdown.length; i++){
  //       breakdown_sn.push({sn: breakdown[i].sn, kpid: breakdown[i].kpid, sn_state: 1, kp_old_rating: b.kp_rating, sn_old_rating: b.sn_rating});
  //     }
  //     //记录测试结果
  //     var test_log = {exercise_id: exercise.exercise_id, exercise_state: 1, answer: this.userAnswer, exercise_rating: exercise.exercise_rating, breakdown_sn: breakdown_sn};
  //     this.props.submitTestLog(test_log);
  //   }else{
  //     alert("答案错误");
  //     //var breakdown_sn = breakdown.length == 1 ? [{sn: breakdown[0].sn, kpid: breakdown[0].kpid, sn_state: 0}] : [];
  //     var test_log = {exercise_id: exercise.exercise_id, exercise_state: 0, exercise_rating: exercise.exercise_rating, answer: this.userAnswer};
  //     console.log(test_log);
  //     if(breakdown.length > 1){
  //       this.props.history.push("/mobile-test/AnswerTest", test_log);
  //     }else{
  //       this.props.submitTestLog(test_log);
  //     }
  //   }
  // }

  // onSubmit(){
    
  // }

  isAllUnSelected(){
  	var {select} = this.state;
  	var result = true;
  	for(var i = 0; i < select.length; i++){
  		console.log(select[i].sn + ":" + select[i].isSelected);
  		if(select[i].isSelected){
  			result = false;
  			break;
  		}
  	}
  	return result;
  }

  onContinue(){
    this.accExerciseTime();
    this.props.jumpNext(true);
  }

  onInputChange(val){
    this.userAnswer = val;
  }

  onSelectChange(val){
    const xornum = [1, 2, 4, 8];
  	//通过异或修改选项结果
    this.userAnswer = this.userAnswer ^ xornum[val];
  }

  onMaskClose(e){
    Popup.hide();
  }

  accExerciseTime(){
    //累加页面停留时间
    const {exercise_st, exindex} = this.props;
    const ac_time = Date.parse(new Date()) - Date.parse(exercise_st);
    this.props.updateExerciseTime(exindex, ac_time/1000);
  }

  jumpToExercise(e, i){
    this.accExerciseTime();
    this.props.updateExindex(i);
    Popup.hide();
  }

  onPopup(e){
    const {exercise, test_log} = this.props;
    e.preventDefault();
    Popup.show(
    <div>
      <List renderHeader={this.renderHeader}
          style={{height: "4.2rem", overflow: "auto"}}
      >
        {exercise.map((item, i) => (
          test_log[i].delta_student_rating
          ? <List.Item extra={<Icon type={test_log[i].exercise_state ? 'check' : 'cross'} />} key={i}><span style={{color: "#CCC"}}>{i+1}</span></List.Item>
          : <List.Item arrow="horizontal" onClick={e => this.jumpToExercise(e, i)} key={i} >{i+1}</List.Item>
        ))}
      </List>
    </div>, 
      { animationType: 'slide-up', onMaskClose: e => this.onMaskClose()});
  }

  renderTitle(){
    const {exercise, exindex} = this.props;
    const {title, title_img_url, title_audio_url} = exercise[exindex]; 
    return (
      <div style={{ margin: '30px 0 18px 0', fontSize: '0.3rem'}}>
        <Tex content={title} />
        <img src="http://opgtvzbwx.bkt.clouddn.com/2_title_img" height="3rem" />)
        <audio src="http://opgtvzbwx.bkt.clouddn.com/2_title_audio" controls="controls">
            Your browser does not support the audio element.
        </audio>
      </div>
    )
  }

  renderAnswer(){
    const {exercise, exindex, test_log} = this.props;
    const {exercise_type, answer} = exercise[exindex];
    const {user_answer} = test_log[exindex];
    console.log(answer);
    const answerJson = JSON.parse(answer);
    switch(exercise_type){
      case 0:
        //TO-DO: 添加多个填空答案
        return (
          <MathInput onChange={(v) => this.onInputChange(v)} />

        );
      case 1:
      //选择题
        return (
            <List key={'answer'+ exindex}>
              {answerJson.map((i,index) => (
                <CheckboxItem key={index} onChange={() => this.onSelectChange(index)} wrap>
                  <Tex content = {i.value} />
                </CheckboxItem>
              ))}
            </List>
          );
      case 2:
        return (
          <List key={'answer'+ exindex}>
            {answerJson.map((i, index) => (
                <CheckboxItem key={index} onChange={() => this.onSelectChange(index)}>
                  <img src={i.url} style={{height: "1rem", width: "auto"}}/>
                </CheckboxItem>
              ))}
          </List>
        );
      default:
        return;
    }
  }

  renderModal(){
    const defaultLog = {
      delta_student_rating: 0,
      exercise_state: 0,
    };
    const {modalOpen, record, exindex, exercise, test_log} = this.props;
    const {breakdown} = exercise[exindex];
    const {delta_student_rating, exercise_state} = (test_log && test_log[exindex]) ? test_log[exindex] : defaultLog;
    var title = '很遗憾，错了！';
    var delta_tip = delta_student_rating < 0 ? delta_student_rating : '+' + delta_student_rating;  
    if(exercise_state){
        title = 'Bingo!';
    }
    return (
      <Modal
          transparent
          title={title}
          maskClosable={false}
          visible={modalOpen}
          footer={[{ 
            text: '', 
            onPress: () => this.onContinue()}]}
        >
          {delta_tip}<br />
      </Modal>
      ) 
  }

  

  render() {
    const {exercise, exindex, record} = this.props;
    console.log(exindex);
    const { title, options } = exercise[exindex];
    
    /*
    // <div style={{ margin: '0 0.30rem', width: '1.6rem!important', margin: '0.18rem 0.18rem 0.18rem 0'}}>
    //     <Flex>
    //       <Flex.Item><Icon type="cross" size="lg" color="red" /></Flex.Item>
    //       <Flex.Item><div style={{textAlign: 'center', width: '100%', color: '#bbb', fontSize: '0.3rem'}}>02:33</div></Flex.Item>
    //       <Flex.Item>
    //         <div>
    //           <Icon type="check" size="xs" color="blue" />{record.correct}
    //           <Icon type="cross" size="xs" color="red" />{record.wrong}
    //         </div>
    //       </Flex.Item>
    //     </Flex>
        
    //   </div>
    */
   
    return (
    <div>
      <NavBar
      mode="light"
        onLeftClick={() => console.log('onLeftClick')}
        rightContent={[
          <Button inline type="ghost" size="small" onClick={e => this.onPopup(e)}>{exindex + 1}</Button>,
        ]}
      ></NavBar>
      <WingBlank>
      <div style={{ margin: '30px 0 18px 0', fontSize: '0.3rem'}}>
      	<Tex content={title} />
      </div>
      </WingBlank>
      {this.renderAnswer()}
      <div style={{
            display: 'flex',
            position: 'fixed',
            bottom: '0',
            width: '100%',
            height: "1.2rem",
            borderTop: "solid 1px #CCC",
            }}>
          <div style={{float: 'left', margin: "0.2rem 1rem 0 0.5rem", width: "40%"}}>
            <div aria-hidden="true" style={{fontSize: "0.3rem", color: "00AA00", marginBottom:"0.1rem"}}>{record.correct} / {exercise.length}</div>
            <div><Progress percent={record.correct/exercise.length * 100} position="normal" /></div>
          </div>
          <Button style={{float: 'left', margin: '0.2rem 0 0 0'}}
            onClick={e => this.props.submitExerciseLog(exercise[exindex], this.userAnswer)} 
            type="primary" inline>
          Submit
          </Button>
      </div>
      {this.renderModal()}
    </div>
    
    );
  }
}

export default connect(state => {
  const test_state = state.testData.toJS();
  console.log(test_state);
  const {exercise, exindex, test_log, modalOpen, record, exercise_st, start_time} = test_state;
  return {
    //整个测试以同一个开始时间
    start_time: start_time,
    //跳转题目页面开始时间
    exercise_st: exercise_st,
    exercise: exercise,
    exindex: exindex,
    test_log: test_log,
    modalOpen: modalOpen,
    record: record,
  }; 
}, action)(Question);