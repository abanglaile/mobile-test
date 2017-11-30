import React from 'react';
import ReactDOM from 'react-dom';
import { WingBlank, List, Checkbox, Button} from 'antd-mobile';
import Tex from './renderer.js';
import MathInput from './math-input/src/components/app.js'
const CheckboxItem = Checkbox.CheckboxItem;
const AgreeItem = Checkbox.AgreeItem;

//state = {exercise: [], exindex: 0, test_log: [], reward: {}}
const mapStateToProps = (state) {
  var {exercise, exindex, reward} = state;
  return {
    exercise: exercise[exindex],
    reward: reward
  }
} 

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    increase: (...args) => dispatch(actions.increase(...args)),
    decrease: (...args) => dispatch(actions.decrease(...args))
  }
}


class Question extends React.Component {
  constructor(props, context) { 
  	super(props,context);
    var state = this.props.location.state;
    const {exindex, exercise, reward} = state;

    console.log("题号："+ exindex);
    this.init(exercise[exindex]);
  	this.state = {reward: reward, disabled: true, exercise: exercise[exindex]};
  	this.onSelectChange = this.onSelectChange.bind(this);
  }

  //初始化答案及选项
  init(exercise){
    //当前题目
    const {type, title, answer} = exercise;
    if(type == 1){
        this.initXor();
        var checkAnswer = 0;
        for(var i = 0; i < answer.length; i++){
            if(answer[i].correct)
              checkAnswer += this.xornum[i];
        }
        this.checkAnswer = checkAnswer;
        this.userAnswer = 0;
    }else if(type == 0){
        this.checkAnswer = answer.value;
    }
  }

  //这里使用一个整数代表选项的情况，例如0011，代表选项1、2，
  //该数组用于每次改变选项时对指定位置进行取反操作
  initXor(){
    this.xornum = [1, 2, 4, 8];
  }

  onCheck(){
    console.log(this.checkAnswer);
    console.log(this.userAnswer);
    var state = this.props.location.state;
    var {exindex, exercise, test_log, reward} = state;

    if(this.checkAnswer == this.userAnswer){
      alert("答案正确");
      //记录测试结果
      test_log.push({exercise_id: exercise[exindex].exercise_id, exercise_state: 1, answer: this.userAnswer});
      //记录分数
      reward.score += 10;

      this.setState({reward: reward});
      if(exindex == (exercise.length - 1)){
        var result_state = {test_log: test_log, reward: reward};
        this.props.history.push("/mobile-test/TestResult", result_state);  
      }
      else{
        //进入下一题
        exindex = exindex + 1;
        this.init(exercise[exindex]);
        this.setState({disabled: true, exercise: exercise[exindex]});
      }
    }else{
      alert("答案错误");
      //更新test_log数据，
      this.props.history.push("/mobile-test/AnswerTest", state);
    }
  }

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

  onInputChange(val){
    this.userAnswer = val;
  }

  onSelectChange(val){
  	//通过异或修改选项结果
    this.userAnswer = this.userAnswer ^ this.xornum[val];
  	
    //var disabled = this.isAllUnSelected();
  	//this.setState({disabled});//若所有选项都是未选择则disable按钮
    //console.log(select[val].isSelected);
  }

  renderAnswer(){
    const {type, answers} = this.state.exercise;
    console.log(type);
    //选择题
    if(type == 1){
      return (
          <List>
            {answers.map((i,index) => (
              <CheckboxItem key={index} onChange={() => this.onSelectChange(index)} wrap>
                <Tex content = {i.value} />
              </CheckboxItem>
            ))}
          </List>
        );
    }else if(type == 0){
      console.log()
      return (
        <MathInput onChange={(v) => this.onInputChange(v)} />
      );
    }
    console.log(MathInput);
  }

  render() {
    const { title, options } = this.props.exercise;
    return (
    <div>
      <WingBlank>
      <div style={{ margin: '30px 0 18px 0'}}>
      	<Tex content={title} />
      </div>
      </WingBlank>
        {this.renderAnswer()}
      <WingBlank>
	  	  <div style={{ margin: '18px 0 18px 0'}}>
   	      <Button className="btn" size="small" onClick={e => this.onCheck(e)} type="ghost" >
    	     检查
          </Button>
        </div>
   	  </WingBlank>

    </div>
    
    );
  }
}
export default Question;