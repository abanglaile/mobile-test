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

    var {exercise, exindex} = this.props;
    const breakdown = exercise[exindex];
    var breakdown_sn = [];
    for(var i = 0; i < breakdown.length; i++){
      //如果没有前置步骤的都设为0并在渲染中显示，-1代表不确定在渲染中不显示
      const sn_state = breakdown[i].presn ? -1 : 0;
      breakdown_sn[i] = {
        sn: breakdown[i].sn, 
        kpid: breakdown[i].kpid,
        kpname: breakdown[i].kpname, 
        sn_state: sn_state, 
        presn: breakdown[i].presn, 
        kp_old_rating: breakdown[i].kp_rating, 
        sn_old_rating: breakdown[i].sn_rating
      };
    }
    this.breakdown_sn = breakdown_sn;
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
          ? <List.Item onClick={e => this.jumpToExercise(e, i)} extra={<Icon type={test_log[i].exercise_state ? 'check' : 'cross'} />} key={i}>{i+1}</List.Item>
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
    const {exercise_type} = exercise[exindex];
    console.log(test_log);
    const {answer, exercise_state} = test_log[exindex];
    console.log(answer);
    
    switch(exercise_type){
      case 0:
        //TO-DO: 添加多个填空答案
        return (
          <MathInput onChange={(v) => this.onInputChange(v)} />

        );
      case 1:
        //文字选择题
        //已做完
        if(exercise_state >= 0){
          return (
            <List key={'answer'+ exindex}>
              {answer.map((i,index) => (
                <CheckboxItem key={index} disabled defaultChecked = {i.select} 
                  onChange={() => this.props.selectChange(exindex, index)} wrap>
                  <Tex content = {i.value} />
                </CheckboxItem>
              ))}
            </List>
          );
        }
        //未做完
        return (
            <List key={'answer'+ exindex}>
              {answer.map((i,index) => (
                <CheckboxItem key={index} defaultChecked = {i.select} 
                  onChange={() => this.props.selectChange(exindex, index)} wrap>
                  <Tex content = {i.value} />
                </CheckboxItem>
              ))}
            </List>
          );
      case 2:
        if(exercise_state >= 0){
          return (
            <List key={'answer'+ exindex}>
              {answer.map((i,index) => (
                <CheckboxItem key={index} disabled defaultChecked = {i.select} 
                  onChange={() => this.props.selectChange(exindex, index)} wrap>
                  <img src={i.url} style={{height: "1rem", width: "auto"}}/>
                </CheckboxItem>
              ))}
            </List>
          );  
        }
        return (
            <List key={'answer'+ exindex}>
              {answer.map((i,index) => (
                <CheckboxItem key={index} defaultChecked = {i.select} 
                  onChange={() => this.props.selectChange(exindex, index)} wrap>
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

  renderBreakdown(){
    const {exercise, exindex, test_log} = this.props;
    const {breakdown, title} = exercise[exindex];
    
    if(test_log[exindex].answer_test){
      var {breakdown_sn} = test_log[exindex];
      return (
      <List renderHeader='请选择你做对的步骤'>
        {breakdown.map((item,i) => {
          console.log(breakdown_sn[i].sn_state);
          const presn = item.presn;
          //显示第一个或前置已经被选择（最后答案不显示）
          if((i != breakdown.length - 1) && (breakdown_sn[i].sn_state >= 0 || (presn > 0 && breakdown_sn[presn - 1].sn_state > 0))){
            return (
            <CheckboxItem key={item.sn} check={breakdown_sn[i].sn_state} onChange={() => this.props.breakdownSelectChange(exindex, i)} wrap>
              <Tex content = {item.content} />
            </CheckboxItem>
            )
          }
        })}
      </List>
      );  
    }
    
    
  }

  renderFooter(){

    const {exindex, test_log,record,exercise} = this.props;
    const {exercise_state} = test_log[exindex];
    if(test_log[exindex].answer_test){
      return (
        <div style={{
                  display: 'flex',
                  position: 'fixed',
                  bottom: '0',
                  width: '100%',
                  height: "1.2rem",
                  borderTop: "solid 1px #CCC",
                  }}>
              <Button style={{float: 'left', margin: '0.2rem 0 0 0'}} disabled={test_log[exindex].exercise_state >= 0}
                onClick={e => this.props.submitFeedBack(exindex)} 
                type="primary" inline>
              提交反馈
              </Button>
        </div>
      )  
    }else if(exercise_state < 0){
      return (
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
              <Button type="primary">上一题</Button>
              <Button style={{float: 'left', margin: '0.2rem 0 0 0'}} disabled={test_log[exindex].exercise_state >= 0}
                onClick={e => this.props.submitExerciseLog(exercise[exindex], test_log[exindex].answer)} 
                type="primary" inline>
              提交答案
              </Button>
              <Button type="primary">下一题</Button>
          </div>
      )
    }
  }

  render() {
    const {exercise, exindex, test_log, record} = this.props;
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
      {this.renderBreakdown()}
      <div style={{ margin: '30px 0 18px 0', fontSize: '0.3rem'}}>
      	<Tex content={title} />
      </div>
      </WingBlank>
      {this.renderAnswer()}
      {this.renderFooter()}
      {this.renderModal()}
    </div>
    
    );
  }
}

export default connect(state => {
  const test_state = state.testData.toJS();
  console.log(test_state);
  const {exercise, exindex, test_log, modalOpen, record, exercise_st, start_time, answer_test} = test_state;
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
    answer_test: answer_test,
  }; 
}, action)(Question);