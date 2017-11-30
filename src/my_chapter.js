import React from 'react';
import ReactDOM from 'react-dom';
import { Badge, WhiteSpace, List, Button} from 'antd-mobile';
import Tex from '../renderer.js';

const Item = List.Item;
const Brief = Item.Brief;

class MyExercise extends React.Component {
  constructor(props) { 
  	super(props);
  }

  callback(key) {
  	console.log('onChange', key);
  }

  handleTabClick(key) {
  	console.log('onTabClick', key);
  }

  render() {
    return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '5rem', backgroundColor: '#fff' }}>
          我的任务
      </div>
      <List className="my-list">
        <Item arrow="horizontal" multipleLine>
          20170416每周一测
          <Badge text="未" hot style={{ marginLeft: 12 }} /> 
          <Brief>2017/4/17 09:32</Brief>

        </Item>
        
        <Item
          arrow="horizontal"
          thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
          multipleLine
          onClick={() => {}}
        >
          标题文字 <Brief>副标题</Brief>
        </Item>
        
      </List>  
      <WhiteSpace />

    </div>
    
    );
  }
}
ReactDOM.render(<MyExercise />, document.getElementById('root'));