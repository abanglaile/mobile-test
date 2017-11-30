import React from 'react';
import ReactDOM from 'react-dom';
import { WingBlank, Button, List, Checkbox, Flex } from 'antd-mobile';
import Tex from './renderer.js'

const CheckboxItem = Checkbox.CheckboxItem;
const AgreeItem = Checkbox.AgreeItem;


export default class AnswerTest extends React.Component {
  constructor(props) { 
  	super(props);
    console.log(props);
    const {exercise, exindex} = props.location.state;

    const {breakdown} = exercise[exindex];
    //const {answers} = props;
    var select = [];
    for(var i = 0; i < breakdown.length; i++){
      select.push({ sn: i, isSelected: false, kpid: breakdown[i].kpid });
    }

    var show_all = {dis: 'none', a_title: "显示题目"};

    this.state = { select : select , show_all: show_all};
  	this.onChange = this.onChange.bind(this);
  }

  onChange(val){
  	var {select} = this.state;
  	select.isSelected = !select.isSelected;
  	this.state.select = select;
    console.log(select.isSelected);
  }

  onNext(e){
    const { exindex, exsize } = this.props.location.state;
    
    if(exindex <= exsize){
      this.props.location.state.exindex++;
      this.props.history.push("/mobile-test/Question", this.props.location.state);
    }else{
      this.props.history.push("/mobile-test/TestResult");
    }
  }

  onShow(e){
    var {show_all} = this.state;
    show_all = show_all.dis=='none'?{dis: "block", a_title: "收起题目"}:{dis: "none", a_title: "显示题目"};
    this.setState({show_all});
  }

  render() {
    var { show_all } = this.state;
    const {exercise, exindex} = this.props.location.state;
    const {breakdown, title} = exercise[exindex];
    return (
    <div>
      <WingBlank>
        <div style={{ margin: '0.5rem 0 0 0', fontSize: '0.4rem'}}>
          <div style={{ display: show_all.dis }}>
            <Tex content={title} />
          </div>
          <a onClick={e => this.onShow(e)}><u>{show_all.a_title}</u></a>
        </div>
      </WingBlank>
      <List renderHeader='请选择你做对的步骤'>
        {breakdown.map(i => (
          <CheckboxItem key={i.sn} onChange={() => this.onChange(i.value)} wrap>
            <Tex content = {i.value} />
          </CheckboxItem>
        ))}
      </List>
      <WingBlank>
        <div style={{ margin: '1rem 0 0 0'}} className="btn-container">
          <div>
            <Button className="btn" type="ghost" onClick={e => this.onNext(e)}>下一题</Button>
          </div>
        </div>
      </WingBlank>
    </div>);
  }
}