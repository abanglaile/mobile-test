import React from 'react';
import { Rate } from 'antd';
import { List, Result, Icon, WhiteSpace, Progress } from 'antd-mobile';

const Item = List.Item;
const Brief = Item.Brief;

export default class TestResult extends React.Component {
  constructor(props) {
    super(props);
  } 
  render() {
    return (
      <div>
      <Result
        img={<Icon type="check-circle" className="icon" />}
        title="获得经验值"
        message={<div><div style={{ fontSize: '0.72rem', color: '#000', lineHeight: 1 }}>80</div></div>}
      />
      <Progress percent={50} position="normal" appearTransition />
      <List renderHeader={() => '出错知识点'} className="my-list">
        <Item extra={<Rate disabled defaultValue={2} />}>标题文字
          <Brief>sssss</Brief>
        </Item>
        <Item extra={'内容内容'}>标题文字</Item>
        <Item extra={'内容内容'}>标题文字</Item>
      </List>
    </div>);
  }
}