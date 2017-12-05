import React from 'react';
import *as action from '../Action/';
import {connect} from 'react-redux';
import { List, Result, Icon, WhiteSpace, Badge, Tabs, ActivityIndicator, Button, Modal } from 'antd-mobile';
import { Progress } from 'antd';

import Tex from './renderer.js';

const Item = List.Item;
const Brief = Item.Brief;
const TabPane = Tabs.TabPane;

class TestResult extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    const {student_id, params} = this.props;
    const test_id = params.test_id;
    if(test_id){
      this.props.getTestResult(student_id, test_id);
    }else{
      alert("页面参数错误");
    }
  }

  //补零
  PrefixInteger(num, n) {
    return (Array(n).join(0) + num).slice(-n);
  }

  renderModal(){
    const defaultExercise = {
      title: '',
      exercise_id: '',
    };
    var {modalOpen, exercise_sample} = this.props;
    exercise_sample = exercise_sample ? exercise_sample : defaultExercise;
    return (
      <Modal
          title="题目"
          transparent
          maskClosable={false}
          visible={modalOpen}
          footer={[
                    { text: '取消', onPress: () => this.props.closeModal() },
                    { text: '重做', onPress: () => this.props.jumpToExercise(exercise_sample.exercise_id) },
                  ]}
        >
          <Tex content={exercise_sample.title} />
      </Modal>
    )
  }

  renderKpList(){
    const {test_kp} = this.props;
    //<Brief>{item.kpid}</Brief>
    return (
        <List>
          {
            test_kp.map((item) => {

              return (
                <Item arrow="horizontal"
                  onClick={e => this.props.getExerciseSample(item.exercise_id)}
                  extra={item.kp_rating}>
                  {item.kpname}
                  
                </Item>
              )
            })
          }
        </List>
    )
  }

  renderExerciseList(){
    const {test_log, correct_time} = this.props;
    var c_hour = this.PrefixInteger(parseInt(correct_time/3600), 2);
    var c_min = this.PrefixInteger(parseInt(correct_time%3600/60), 2);
    var c_sec = this.PrefixInteger(correct_time%3600%60, 2);
    return (
        <List renderHeader={() => '答对耗时：' + c_hour + ':' + c_min + ':' + c_sec}>
          {
            test_log.map((item, i) => {
              var t = (Date.parse(item.finish_time) - Date.parse(item.start_time))/1000;
              var min = this.PrefixInteger(parseInt(t/60), 2);
              var sec = this.PrefixInteger(t%60, 2);

              return (
                <Item style={{backgroundColor: "#fcdbc9"}} arrow="horizontal"                  
                  onClick={e => this.props.getExerciseSample(item.exercise_id)}
                  extra={item.exercise_state ? min + ':' + 'sec' : ''}>
                  <div style={{fontSize: "0.5rem"}}>{i+1}<span style = {{fontSize: "0.1rem", color: "#CCC"}}> 难度系数：506</span></div>
                  <Brief>{<Tex content="求 $sin6^{\circ} sin42^{\circ} sin66^{\circ} sin78^{\circ}$的值。" />}</Brief>
                </Item>
              )
            })
          }
        </List>
      );
  }

  render() {
    var {isFetching, correct, test_log} = this.props;
    correct = correct ? correct : 0;
    console.log(correct);
    const accurracy = test_log.length ? correct/test_log.length : 0;
    return (
      <div>
        <Result
          title={<Progress type="circle" percent={accurracy} />}
          message={'测试结果' + correct + '/' + test_log.length}
        />
        <Tabs defaultActiveKey="1">
          <TabPane tab="题目情况" key="1">
            {this.renderExerciseList()}
          </TabPane>
          <TabPane tab="知识点" key="2">
            <List className="my-list">
              {this.renderKpList()}
            </List>
          </TabPane>
        </Tabs>
        <div style={{
            display: 'flex',
            position: 'fixed',
            bottom: '0',
            zIndex: "100",
            width: '100%',
            height: "1.3rem",
            borderTop: "solid 1px #CCC",
            }}>
          <Button style={{float: 'left', margin: '0.2rem 0 0 60%'}}
            onClick={e => console.log(e)} 
            type="ghost" inline>
          返回测试列表
          </Button>
      </div>
        <ActivityIndicator animating = {isFetching}/>
        {this.renderModal()}
      </div>
    );
  }
}

export default connect(state => {
  const test_state = state.testData.toJS();
  const {test_log, test_kp, correct, isFetching, modalOpen, exercise_sample} = test_state;
  return {
    test_log: test_log ? test_log : [],
    test_kp: test_kp ? test_kp : [],
    correct: correct ? correct : 0,
    isFetching: isFetching ? isFetching : false,
    student_id:state.AuthData.get('userid'),
  };
}, action)(TestResult);