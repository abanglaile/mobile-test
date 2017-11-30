webpackJsonp([1],Array(271).concat([
/* 271 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _css = __webpack_require__(272);

	var _progress = __webpack_require__(282);

	var _progress2 = _interopRequireDefault(_progress);

	var _css2 = __webpack_require__(366);

	var _wingBlank = __webpack_require__(369);

	var _wingBlank2 = _interopRequireDefault(_wingBlank);

	var _css3 = __webpack_require__(370);

	var _navBar = __webpack_require__(376);

	var _navBar2 = _interopRequireDefault(_navBar);

	var _css4 = __webpack_require__(406);

	var _button = __webpack_require__(409);

	var _button2 = _interopRequireDefault(_button);

	var _css5 = __webpack_require__(371);

	var _icon = __webpack_require__(382);

	var _icon2 = _interopRequireDefault(_icon);

	var _css6 = __webpack_require__(411);

	var _popup = __webpack_require__(414);

	var _popup2 = _interopRequireDefault(_popup);

	var _css7 = __webpack_require__(430);

	var _modal = __webpack_require__(433);

	var _modal2 = _interopRequireDefault(_modal);

	var _css8 = __webpack_require__(438);

	var _list = __webpack_require__(441);

	var _list2 = _interopRequireDefault(_list);

	var _css9 = __webpack_require__(443);

	var _checkbox = __webpack_require__(446);

	var _checkbox2 = _interopRequireDefault(_checkbox);

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(30);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _renderer = __webpack_require__(460);

	var _renderer2 = _interopRequireDefault(_renderer);

	var _app = __webpack_require__(486);

	var _app2 = _interopRequireDefault(_app);

	var _Action = __webpack_require__(643);

	var action = _interopRequireWildcard(_Action);

	var _reactRedux = __webpack_require__(163);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var CheckboxItem = _checkbox2.default.CheckboxItem;
	var AgreeItem = _checkbox2.default.AgreeItem;

	var Item = _list2.default.Item;
	var alert = _modal2.default.alert;

	var Question = function (_React$Component) {
	  _inherits(Question, _React$Component);

	  function Question(props) {
	    _classCallCheck(this, Question);

	    var _this = _possibleConstructorReturn(this, (Question.__proto__ || Object.getPrototypeOf(Question)).call(this, props));

	    _this.onSelectChange = _this.onSelectChange.bind(_this);
	    return _this;
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

	  _createClass(Question, [{
	    key: 'isAllUnSelected',
	    value: function isAllUnSelected() {
	      var select = this.state.select;

	      var result = true;
	      for (var i = 0; i < select.length; i++) {
	        console.log(select[i].sn + ":" + select[i].isSelected);
	        if (select[i].isSelected) {
	          result = false;
	          break;
	        }
	      }
	      return result;
	    }
	  }, {
	    key: 'onContinue',
	    value: function onContinue() {
	      this.accExerciseTime();
	      this.props.jumpNext(true);
	    }
	  }, {
	    key: 'onInputChange',
	    value: function onInputChange(val) {
	      this.userAnswer = val;
	    }
	  }, {
	    key: 'onSelectChange',
	    value: function onSelectChange(val) {
	      var xornum = [1, 2, 4, 8];
	      //通过异或修改选项结果
	      this.userAnswer = this.userAnswer ^ xornum[val];
	    }
	  }, {
	    key: 'onMaskClose',
	    value: function onMaskClose(e) {
	      _popup2.default.hide();
	    }
	  }, {
	    key: 'accExerciseTime',
	    value: function accExerciseTime() {
	      //累加页面停留时间
	      var _props = this.props,
	          exercise_st = _props.exercise_st,
	          exindex = _props.exindex;

	      var ac_time = Date.parse(new Date()) - Date.parse(exercise_st);
	      this.props.updateExerciseTime(exindex, ac_time / 1000);
	    }
	  }, {
	    key: 'jumpToExercise',
	    value: function jumpToExercise(e, i) {
	      this.accExerciseTime();
	      this.props.updateExindex(i);
	      _popup2.default.hide();
	    }
	  }, {
	    key: 'onPopup',
	    value: function onPopup(e) {
	      var _this2 = this;

	      var _props2 = this.props,
	          exercise = _props2.exercise,
	          test_log = _props2.test_log;

	      e.preventDefault();
	      _popup2.default.show(_react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          _list2.default,
	          { renderHeader: this.renderHeader,
	            style: { height: "4.2rem", overflow: "auto" }
	          },
	          exercise.map(function (item, i) {
	            return test_log[i].delta_student_rating ? _react2.default.createElement(
	              _list2.default.Item,
	              { extra: _react2.default.createElement(_icon2.default, { type: test_log[i].exercise_state ? 'check' : 'cross' }), key: i },
	              _react2.default.createElement(
	                'span',
	                { style: { color: "#CCC" } },
	                i + 1
	              )
	            ) : _react2.default.createElement(
	              _list2.default.Item,
	              { arrow: 'horizontal', onClick: function onClick(e) {
	                  return _this2.jumpToExercise(e, i);
	                }, key: i },
	              i + 1
	            );
	          })
	        )
	      ), { animationType: 'slide-up', onMaskClose: function onMaskClose(e) {
	          return _this2.onMaskClose();
	        } });
	    }
	  }, {
	    key: 'renderTitle',
	    value: function renderTitle() {
	      var _props3 = this.props,
	          exercise = _props3.exercise,
	          exindex = _props3.exindex;
	      var _exercise$exindex = exercise[exindex],
	          title = _exercise$exindex.title,
	          title_img_url = _exercise$exindex.title_img_url,
	          title_audio_url = _exercise$exindex.title_audio_url;

	      return _react2.default.createElement(
	        'div',
	        { style: { margin: '30px 0 18px 0', fontSize: '0.3rem' } },
	        _react2.default.createElement(_renderer2.default, { content: title }),
	        _react2.default.createElement('img', { src: 'http://opgtvzbwx.bkt.clouddn.com/2_title_img', height: '3rem' }),
	        ')',
	        _react2.default.createElement(
	          'audio',
	          { src: 'http://opgtvzbwx.bkt.clouddn.com/2_title_audio', controls: 'controls' },
	          'Your browser does not support the audio element.'
	        )
	      );
	    }
	  }, {
	    key: 'renderAnswer',
	    value: function renderAnswer() {
	      var _this3 = this;

	      var _props4 = this.props,
	          exercise = _props4.exercise,
	          exindex = _props4.exindex;
	      var _exercise$exindex2 = exercise[exindex],
	          exercise_type = _exercise$exindex2.exercise_type,
	          answers = _exercise$exindex2.answers;
	      //选择题

	      if (exercise_type == 1) {
	        return _react2.default.createElement(
	          _list2.default,
	          null,
	          answers.map(function (i, index) {
	            return _react2.default.createElement(
	              CheckboxItem,
	              { key: index, onChange: function onChange() {
	                  return _this3.onSelectChange(index);
	                }, wrap: true },
	              _react2.default.createElement(_renderer2.default, { content: i.value })
	            );
	          })
	        );
	      } else if (exercise_type == 0) {
	        //TO-DO: 添加多个填空答案
	        return _react2.default.createElement(_app2.default, { onChange: function onChange(v) {
	            return _this3.onInputChange(v);
	          } });
	      }
	    }
	  }, {
	    key: 'renderModal',
	    value: function renderModal() {
	      var _this4 = this;

	      var defaultLog = {
	        delta_student_rating: 0,
	        exercise_state: 0
	      };
	      var _props5 = this.props,
	          modalOpen = _props5.modalOpen,
	          record = _props5.record,
	          exindex = _props5.exindex,
	          exercise = _props5.exercise,
	          test_log = _props5.test_log;
	      var breakdown = exercise[exindex].breakdown;

	      var _ref = test_log && test_log[exindex] ? test_log[exindex] : defaultLog,
	          delta_student_rating = _ref.delta_student_rating,
	          exercise_state = _ref.exercise_state;

	      var title = '很遗憾，错了！';
	      var delta_tip = delta_student_rating < 0 ? delta_student_rating : '+' + delta_student_rating;
	      if (exercise_state) {
	        title = 'Bingo!';
	      }
	      return _react2.default.createElement(
	        _modal2.default,
	        {
	          transparent: true,
	          title: title,
	          maskClosable: false,
	          visible: modalOpen,
	          footer: [{
	            text: '',
	            onPress: function onPress() {
	              return _this4.onContinue();
	            } }]
	        },
	        delta_tip,
	        _react2.default.createElement('br', null)
	      );
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this5 = this;

	      var _props6 = this.props,
	          exercise = _props6.exercise,
	          exindex = _props6.exindex,
	          record = _props6.record;

	      console.log(exindex);
	      var _exercise$exindex3 = exercise[exindex],
	          title = _exercise$exindex3.title,
	          options = _exercise$exindex3.options;

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

	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(_navBar2.default, {
	          mode: 'light',
	          onLeftClick: function onLeftClick() {
	            return console.log('onLeftClick');
	          },
	          rightContent: [_react2.default.createElement(
	            _button2.default,
	            { inline: true, type: 'ghost', size: 'small', onClick: function onClick(e) {
	                return _this5.onPopup(e);
	              } },
	            exindex + 1
	          )]
	        }),
	        _react2.default.createElement(
	          _wingBlank2.default,
	          null,
	          _react2.default.createElement(
	            'div',
	            { style: { margin: '30px 0 18px 0', fontSize: '0.3rem' } },
	            _react2.default.createElement(_renderer2.default, { content: title })
	          )
	        ),
	        this.renderAnswer(),
	        _react2.default.createElement(
	          'div',
	          { style: {
	              display: 'flex',
	              position: 'fixed',
	              bottom: '0',
	              width: '100%',
	              height: "1.2rem",
	              borderTop: "solid 1px #CCC"
	            } },
	          _react2.default.createElement(
	            'div',
	            { style: { float: 'left', margin: "0.2rem 1rem 0 0.5rem", width: "40%" } },
	            _react2.default.createElement(
	              'div',
	              { 'aria-hidden': 'true', style: { fontSize: "0.3rem", color: "00AA00", marginBottom: "0.1rem" } },
	              record.correct,
	              ' / ',
	              exercise.length
	            ),
	            _react2.default.createElement(
	              'div',
	              null,
	              _react2.default.createElement(_progress2.default, { percent: record.correct / exercise.length * 100, position: 'normal' })
	            )
	          ),
	          _react2.default.createElement(
	            _button2.default,
	            { style: { float: 'left', margin: '0.2rem 0 0 0' },
	              onClick: function onClick(e) {
	                return _this5.props.submitExerciseLog(exercise[exindex], _this5.userAnswer);
	              },
	              type: 'primary', inline: true },
	            'Submit'
	          )
	        ),
	        this.renderModal()
	      );
	    }
	  }]);

	  return Question;
	}(_react2.default.Component);

	exports.default = (0, _reactRedux.connect)(function (state) {
	  var test_state = state.testData.toJS();
	  console.log(test_state);
	  var exercise = test_state.exercise,
	      exindex = test_state.exindex,
	      test_log = test_state.test_log,
	      modalOpen = test_state.modalOpen,
	      record = test_state.record,
	      exercise_st = test_state.exercise_st,
	      start_time = test_state.start_time;

	  return {
	    //整个测试以同一个开始时间
	    start_time: start_time,
	    //跳转题目页面开始时间
	    exercise_st: exercise_st,
	    exercise: exercise,
	    exindex: exindex,
	    test_log: test_log,
	    modalOpen: modalOpen,
	    record: record
	  };
	}, action)(Question);

/***/ },
/* 272 */,
/* 273 */,
/* 274 */,
/* 275 */,
/* 276 */,
/* 277 */,
/* 278 */,
/* 279 */,
/* 280 */,
/* 281 */,
/* 282 */,
/* 283 */,
/* 284 */,
/* 285 */,
/* 286 */,
/* 287 */,
/* 288 */,
/* 289 */,
/* 290 */,
/* 291 */,
/* 292 */,
/* 293 */,
/* 294 */,
/* 295 */,
/* 296 */,
/* 297 */,
/* 298 */,
/* 299 */,
/* 300 */,
/* 301 */,
/* 302 */,
/* 303 */,
/* 304 */,
/* 305 */,
/* 306 */,
/* 307 */,
/* 308 */,
/* 309 */,
/* 310 */,
/* 311 */,
/* 312 */,
/* 313 */,
/* 314 */,
/* 315 */,
/* 316 */,
/* 317 */,
/* 318 */,
/* 319 */,
/* 320 */,
/* 321 */,
/* 322 */,
/* 323 */,
/* 324 */,
/* 325 */,
/* 326 */,
/* 327 */,
/* 328 */,
/* 329 */,
/* 330 */,
/* 331 */,
/* 332 */,
/* 333 */,
/* 334 */,
/* 335 */,
/* 336 */,
/* 337 */,
/* 338 */,
/* 339 */,
/* 340 */,
/* 341 */,
/* 342 */,
/* 343 */,
/* 344 */,
/* 345 */,
/* 346 */,
/* 347 */,
/* 348 */,
/* 349 */,
/* 350 */,
/* 351 */,
/* 352 */,
/* 353 */,
/* 354 */,
/* 355 */,
/* 356 */,
/* 357 */,
/* 358 */,
/* 359 */,
/* 360 */,
/* 361 */,
/* 362 */,
/* 363 */,
/* 364 */,
/* 365 */,
/* 366 */,
/* 367 */,
/* 368 */,
/* 369 */,
/* 370 */,
/* 371 */,
/* 372 */,
/* 373 */,
/* 374 */,
/* 375 */,
/* 376 */,
/* 377 */,
/* 378 */,
/* 379 */,
/* 380 */,
/* 381 */,
/* 382 */,
/* 383 */,
/* 384 */,
/* 385 */,
/* 386 */,
/* 387 */,
/* 388 */,
/* 389 */,
/* 390 */,
/* 391 */,
/* 392 */,
/* 393 */,
/* 394 */,
/* 395 */,
/* 396 */,
/* 397 */,
/* 398 */,
/* 399 */,
/* 400 */,
/* 401 */,
/* 402 */,
/* 403 */,
/* 404 */,
/* 405 */,
/* 406 */,
/* 407 */,
/* 408 */,
/* 409 */,
/* 410 */,
/* 411 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';__webpack_require__(273);
	__webpack_require__(412);

/***/ },
/* 412 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(413);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(277)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../../css-loader/index.js!../../../../postcss-loader/lib/index.js!./index.css", function() {
				var newContent = require("!!../../../../css-loader/index.js!../../../../postcss-loader/lib/index.js!./index.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 413 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(276)();
	// imports


	// module
	exports.push([module.id, ".hairline-remove-right-bottom {\n  border-bottom: 0;\n}\n.hairline-remove-right-bottom:after {\n  display: none;\n}\n.hairline-remove-right-bottom-bak:after {\n  display: none;\n}\n.hairline-remove-left-top:before {\n  display: none;\n}\n.am-popup-mask {\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.4);\n  height: 100%;\n  z-index: 999;\n}\n.am-popup-mask-hidden {\n  display: none;\n}\n.am-popup-close {\n  display: none;\n}\n.am-popup {\n  position: fixed;\n  left: 0;\n  width: 100%;\n  background-color: #fff;\n  z-index: 999;\n}\n.am-popup-slide-down {\n  top: 0;\n}\n.am-popup-slide-up {\n  bottom: 0;\n}\n", ""]);

	// exports


/***/ },
/* 414 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=undefined;var _classCallCheck2=__webpack_require__(302);var _classCallCheck3=_interopRequireDefault(_classCallCheck2);

	var _react=__webpack_require__(1);var _react2=_interopRequireDefault(_react);

	var _reactDom=__webpack_require__(30);var _reactDom2=_interopRequireDefault(_reactDom);
	var _rcDialog=__webpack_require__(415);var _rcDialog2=_interopRequireDefault(_rcDialog);
	var _objectAssign=__webpack_require__(3);var _objectAssign2=_interopRequireDefault(_objectAssign);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj};}
	function create(instanceId,config,content){var afterClose=arguments.length>3&&arguments[3]!==undefined?arguments[3]:function(_x){};
	var props=(0,_objectAssign2["default"])({},{
	prefixCls:'am-popup',
	animationType:'slide-down'},
	config);var
	prefixCls=props.prefixCls,transitionName=props.transitionName,maskTransitionName=props.maskTransitionName,_props$maskClosable=props.maskClosable,maskClosable=_props$maskClosable===undefined?true:_props$maskClosable,animationType=props.animationType;
	var div=document.createElement('div');
	document.body.appendChild(div);
	function close(){
	if(div){
	_reactDom2["default"].unmountComponentAtNode(div);
	div.parentNode.removeChild(div);
	div=null;
	}
	afterClose(instanceId);
	}
	var transName='am-slide-down';
	if(animationType==='slide-up'){
	transName='am-slide-up';
	}








	var maskProps={
	onClick:function onClick(e){
	e.preventDefault();
	if(maskClosable){
	if(props.onMaskClose&&typeof props.onMaskClose==='function'){
	var res=props.onMaskClose();
	if(res&&res.then){
	res.then(function(){
	close();
	});
	}else
	{
	close();
	}
	}else
	{
	close();
	}
	}
	}};

	_reactDom2["default"].render(_react2["default"].createElement(_rcDialog2["default"],{prefixCls:prefixCls,visible:true,title:'',footer:'',className:prefixCls+'-'+animationType,transitionName:transitionName||transName,maskTransitionName:maskTransitionName||'am-fade',maskClosable:maskClosable,wrapProps:props.wrapProps||{},maskProps:props.maskProps||maskProps},
	content),
	div);
	return{
	instanceId:instanceId,
	close:close};

	}
	var ins={
	defaultInstance:null,
	instances:[]};

	var instanceId=1;var
	Popup=function Popup(){(0,_classCallCheck3["default"])(this,Popup);};exports["default"]=Popup;

	Popup.newInstance=function(){
	var j=void 0;
	return{
	show:function show(content,config){
	j=create(instanceId++,config,content,function(iId){
	for(var i=0;i<ins.instances.length;i++){
	if(ins.instances[i].instanceId===iId){
	ins.instances.splice(i,1);
	return;
	}
	}
	});
	ins.instances.push(j);
	},
	hide:function hide(){
	j.close();
	}};

	};
	Popup.show=function(content,config){
	Popup.hide();
	ins.defaultInstance=create('0',config,content,function(iId){
	if(iId==='0'){
	ins.defaultInstance=null;
	}
	});
	};
	Popup.hide=function(){
	if(ins.defaultInstance){
	ins.defaultInstance.close();
	}
	};module.exports=exports['default'];

/***/ },
/* 415 */,
/* 416 */,
/* 417 */,
/* 418 */,
/* 419 */,
/* 420 */,
/* 421 */,
/* 422 */,
/* 423 */,
/* 424 */,
/* 425 */,
/* 426 */,
/* 427 */,
/* 428 */,
/* 429 */,
/* 430 */,
/* 431 */,
/* 432 */,
/* 433 */,
/* 434 */,
/* 435 */,
/* 436 */,
/* 437 */,
/* 438 */,
/* 439 */,
/* 440 */,
/* 441 */,
/* 442 */,
/* 443 */,
/* 444 */,
/* 445 */,
/* 446 */,
/* 447 */,
/* 448 */,
/* 449 */,
/* 450 */,
/* 451 */,
/* 452 */,
/* 453 */,
/* 454 */,
/* 455 */,
/* 456 */,
/* 457 */,
/* 458 */,
/* 459 */,
/* 460 */,
/* 461 */,
/* 462 */,
/* 463 */,
/* 464 */,
/* 465 */,
/* 466 */,
/* 467 */,
/* 468 */,
/* 469 */,
/* 470 */,
/* 471 */,
/* 472 */,
/* 473 */,
/* 474 */,
/* 475 */,
/* 476 */,
/* 477 */,
/* 478 */,
/* 479 */,
/* 480 */,
/* 481 */,
/* 482 */,
/* 483 */,
/* 484 */,
/* 485 */,
/* 486 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(1);

	var _require = __webpack_require__(487),
	    View = _require.View;

	var _require2 = __webpack_require__(511),
	    components = _require2.components;

	var Keypad = components.Keypad,
	    KeypadInput = components.KeypadInput;

	var App = function (_React$Component) {
	    _inherits(App, _React$Component);

	    function App() {
	        var _ref;

	        var _temp, _this, _ret;

	        _classCallCheck(this, App);

	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }

	        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = App.__proto__ || Object.getPrototypeOf(App)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
	            keypadElement: null,
	            value: ""
	        }, _temp), _possibleConstructorReturn(_this, _ret);
	    }

	    _createClass(App, [{
	        key: 'onInputChange',
	        value: function onInputChange(value, cb) {
	            console.log(value);
	            this.props.onChange(value);
	            this.setState({ value: value }, cb);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            return React.createElement(
	                View,
	                null,
	                React.createElement(
	                    'div',
	                    {
	                        style: {
	                            marginTop: 10,
	                            marginLeft: 20,
	                            marginRight: 20,
	                            marginBottom: 40
	                        }
	                    },
	                    React.createElement(KeypadInput, {
	                        value: this.state.value,
	                        keypadElement: this.state.keypadElement,
	                        onChange: function onChange(value, cb) {
	                            return _this2.onInputChange(value, cb);
	                        },
	                        onFocus: function onFocus() {
	                            return _this2.state.keypadElement.activate();
	                        },
	                        onBlur: function onBlur() {
	                            return _this2.state.keypadElement.dismiss();
	                        }
	                    })
	                ),
	                React.createElement(Keypad, {
	                    onElementMounted: function onElementMounted(node) {
	                        if (node && !_this2.state.keypadElement) {
	                            _this2.setState({ keypadElement: node });
	                        }
	                    }
	                })
	            );
	        }
	    }]);

	    return App;
	}(React.Component);

	module.exports = App;

/***/ },
/* 487 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * This file exports components View and Text which wrap <div> and <span>.
	 * We do this so that someday in the future we can use these components with
	 * React Native.
	 *
	 * Inspired by https://github.com/necolas/react-native-web. We use aphrodite
	 * StyleSheets instead.
	 */

	module.exports = {
	  Text: __webpack_require__(488),
	  View: __webpack_require__(510)
	};

/***/ },
/* 488 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(1);

	var _require = __webpack_require__(489),
	    StyleSheet = _require.StyleSheet,
	    css = _require.css;

	var Text = function (_React$Component) {
	    _inherits(Text, _React$Component);

	    function Text() {
	        _classCallCheck(this, Text);

	        return _possibleConstructorReturn(this, (Text.__proto__ || Object.getPrototypeOf(Text)).apply(this, arguments));
	    }

	    _createClass(Text, [{
	        key: 'render',
	        value: function render() {
	            var _props = this.props,
	                numberOfLines = _props.numberOfLines,
	                style = _props.style;


	            var className = css.apply(undefined, [styles.initial].concat(_toConsumableArray(Array.isArray(style) ? style : [style]), [numberOfLines === 1 && styles.singleLineStyle]));

	            return React.createElement(
	                'span',
	                { className: className, style: this.props.dynamicStyle },
	                this.props.children
	            );
	        }
	    }]);

	    return Text;
	}(React.Component);

	// https://github.com/necolas/react-native-web/blob/master/src/components/Text/index.js


	Text.propTypes = {
	    children: React.PropTypes.oneOfType([React.PropTypes.arrayOf(React.PropTypes.node), React.PropTypes.node]),
	    // The `dynamicStyle` prop is provided for animating dynamic
	    // properties, as creating Aphrodite StyleSheets in animation loops is
	    // expensive. `dynamicStyle` should be a raw style object, rather than
	    // a StyleSheet.
	    dynamicStyle: React.PropTypes.any,
	    numberOfLines: React.PropTypes.number,
	    style: React.PropTypes.any
	};
	var styles = StyleSheet.create({
	    initial: {
	        color: 'inherit',
	        display: 'inline',
	        font: 'inherit',
	        margin: 0,
	        padding: 0,
	        textDecorationLine: 'none',
	        wordWrap: 'break-word'
	    },
	    singleLineStyle: {
	        maxWidth: '100%',
	        overflow: 'hidden',
	        textOverflow: 'ellipsis',
	        whiteSpace: 'nowrap'
	    }
	});

	module.exports = Text;

/***/ },
/* 489 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

	var _util = __webpack_require__(490);

	var _inject = __webpack_require__(491);

	var StyleSheet = {
	    create: function create(sheetDefinition) {
	        return (0, _util.mapObj)(sheetDefinition, function (_ref) {
	            var _ref2 = _slicedToArray(_ref, 2);

	            var key = _ref2[0];
	            var val = _ref2[1];

	            return [key, {
	                // TODO(emily): Make a 'production' mode which doesn't prepend
	                // the class name here, to make the generated CSS smaller.
	                _name: key + '_' + (0, _util.hashObject)(val),
	                _definition: val
	            }];
	        });
	    },

	    rehydrate: function rehydrate() {
	        var renderedClassNames = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];

	        (0, _inject.addRenderedClassNames)(renderedClassNames);
	    }
	};

	var StyleSheetServer = {
	    renderStatic: function renderStatic(renderFunc) {
	        (0, _inject.reset)();
	        (0, _inject.startBuffering)();
	        var html = renderFunc();
	        var cssContent = (0, _inject.flushToString)();

	        return {
	            html: html,
	            css: {
	                content: cssContent,
	                renderedClassNames: (0, _inject.getRenderedClassNames)()
	            }
	        };
	    }
	};

	var css = function css() {
	    for (var _len = arguments.length, styleDefinitions = Array(_len), _key = 0; _key < _len; _key++) {
	        styleDefinitions[_key] = arguments[_key];
	    }

	    // Filter out falsy values from the input, to allow for
	    // `css(a, test && c)`
	    var validDefinitions = styleDefinitions.filter(function (def) {
	        return def;
	    });

	    // Break if there aren't any valid styles.
	    if (validDefinitions.length === 0) {
	        return "";
	    }

	    var className = validDefinitions.map(function (s) {
	        return s._name;
	    }).join("-o_O-");
	    (0, _inject.injectStyleOnce)(className, '.' + className, validDefinitions.map(function (d) {
	        return d._definition;
	    }));

	    return className;
	};

	exports['default'] = {
	    StyleSheet: StyleSheet,
	    StyleSheetServer: StyleSheetServer,
	    css: css
	};
	module.exports = exports['default'];

/***/ },
/* 490 */
/***/ function(module, exports) {

	// {K1: V1, K2: V2, ...} -> [[K1, V1], [K2, V2]]
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var objectToPairs = function objectToPairs(obj) {
	    return Object.keys(obj).map(function (key) {
	        return [key, obj[key]];
	    });
	};

	exports.objectToPairs = objectToPairs;
	// [[K1, V1], [K2, V2]] -> {K1: V1, K2: V2, ...}
	var pairsToObject = function pairsToObject(pairs) {
	    var result = {};
	    pairs.forEach(function (_ref) {
	        var _ref2 = _slicedToArray(_ref, 2);

	        var key = _ref2[0];
	        var val = _ref2[1];

	        result[key] = val;
	    });
	    return result;
	};

	var mapObj = function mapObj(obj, fn) {
	    return pairsToObject(objectToPairs(obj).map(fn));
	};

	exports.mapObj = mapObj;
	// Flattens an array one level
	// [[A], [B, C, [D]]] -> [A, B, C, [D]]
	var flatten = function flatten(list) {
	    return list.reduce(function (memo, x) {
	        return memo.concat(x);
	    }, []);
	};

	exports.flatten = flatten;
	var UPPERCASE_RE = /([A-Z])/g;
	var MS_RE = /^ms-/;

	var kebabify = function kebabify(string) {
	    return string.replace(UPPERCASE_RE, '-$1').toLowerCase();
	};
	var kebabifyStyleName = function kebabifyStyleName(string) {
	    return kebabify(string).replace(MS_RE, '-ms-');
	};

	exports.kebabifyStyleName = kebabifyStyleName;
	var recursiveMerge = function recursiveMerge(a, b) {
	    // TODO(jlfwong): Handle malformed input where a and b are not the same
	    // type.

	    if (typeof a !== 'object') {
	        return b;
	    }

	    var ret = _extends({}, a);

	    Object.keys(b).forEach(function (key) {
	        if (ret.hasOwnProperty(key)) {
	            ret[key] = recursiveMerge(a[key], b[key]);
	        } else {
	            ret[key] = b[key];
	        }
	    });

	    return ret;
	};

	exports.recursiveMerge = recursiveMerge;
	/**
	 * CSS properties which accept numbers but are not in units of "px".
	 * Taken from React's CSSProperty.js
	 */
	var isUnitlessNumber = {
	    animationIterationCount: true,
	    borderImageOutset: true,
	    borderImageSlice: true,
	    borderImageWidth: true,
	    boxFlex: true,
	    boxFlexGroup: true,
	    boxOrdinalGroup: true,
	    columnCount: true,
	    flex: true,
	    flexGrow: true,
	    flexPositive: true,
	    flexShrink: true,
	    flexNegative: true,
	    flexOrder: true,
	    gridRow: true,
	    gridColumn: true,
	    fontWeight: true,
	    lineClamp: true,
	    lineHeight: true,
	    opacity: true,
	    order: true,
	    orphans: true,
	    tabSize: true,
	    widows: true,
	    zIndex: true,
	    zoom: true,

	    // SVG-related properties
	    fillOpacity: true,
	    floodOpacity: true,
	    stopOpacity: true,
	    strokeDasharray: true,
	    strokeDashoffset: true,
	    strokeMiterlimit: true,
	    strokeOpacity: true,
	    strokeWidth: true
	};

	/**
	 * Taken from React's CSSProperty.js
	 *
	 * @param {string} prefix vendor-specific prefix, eg: Webkit
	 * @param {string} key style name, eg: transitionDuration
	 * @return {string} style name prefixed with `prefix`, properly camelCased, eg:
	 * WebkitTransitionDuration
	 */
	function prefixKey(prefix, key) {
	    return prefix + key.charAt(0).toUpperCase() + key.substring(1);
	}

	/**
	 * Support style names that may come passed in prefixed by adding permutations
	 * of vendor prefixes.
	 * Taken from React's CSSProperty.js
	 */
	var prefixes = ['Webkit', 'ms', 'Moz', 'O'];

	// Using Object.keys here, or else the vanilla for-in loop makes IE8 go into an
	// infinite loop, because it iterates over the newly added props too.
	// Taken from React's CSSProperty.js
	Object.keys(isUnitlessNumber).forEach(function (prop) {
	    prefixes.forEach(function (prefix) {
	        isUnitlessNumber[prefixKey(prefix, prop)] = isUnitlessNumber[prop];
	    });
	});

	var stringifyValue = function stringifyValue(key, prop) {
	    if (typeof prop === "number") {
	        if (isUnitlessNumber[key]) {
	            return "" + prop;
	        } else {
	            return prop + "px";
	        }
	    } else {
	        return prop;
	    }
	};

	exports.stringifyValue = stringifyValue;
	/**
	 * JS Implementation of MurmurHash2
	 *
	 * @author <a href="mailto:gary.court@gmail.com">Gary Court</a>
	 * @see http://github.com/garycourt/murmurhash-js
	 * @author <a href="mailto:aappleby@gmail.com">Austin Appleby</a>
	 * @see http://sites.google.com/site/murmurhash/
	 *
	 * @param {string} str ASCII only
	 * @return {string} Base 36 encoded hash result
	 */
	function murmurhash2_32_gc(str) {
	    var l = str.length;
	    var h = l;
	    var i = 0;
	    var k = undefined;

	    while (l >= 4) {
	        k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24;

	        k = (k & 0xffff) * 0x5bd1e995 + (((k >>> 16) * 0x5bd1e995 & 0xffff) << 16);
	        k ^= k >>> 24;
	        k = (k & 0xffff) * 0x5bd1e995 + (((k >>> 16) * 0x5bd1e995 & 0xffff) << 16);

	        h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16) ^ k;

	        l -= 4;
	        ++i;
	    }

	    switch (l) {
	        case 3:
	            h ^= (str.charCodeAt(i + 2) & 0xff) << 16;
	        case 2:
	            h ^= (str.charCodeAt(i + 1) & 0xff) << 8;
	        case 1:
	            h ^= str.charCodeAt(i) & 0xff;
	            h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16);
	    }

	    h ^= h >>> 13;
	    h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16);
	    h ^= h >>> 15;

	    return (h >>> 0).toString(36);
	}

	// Hash a javascript object using JSON.stringify. This is very fast, about 3
	// microseconds on my computer for a sample object:
	// http://jsperf.com/test-hashfnv32a-hash/5
	//
	// Note that this uses JSON.stringify to stringify the objects so in order for
	// this to produce consistent hashes browsers need to have a consistent
	// ordering of objects. Ben Alpert says that Facebook depends on this, so we
	// can probably depend on this too.
	var hashObject = function hashObject(object) {
	    return murmurhash2_32_gc(JSON.stringify(object));
	};

	exports.hashObject = hashObject;
	var IMPORTANT_RE = /^([^:]+:.*?)( !important)?;$/;

	// Given a single style rule string like "a: b;", adds !important to generate
	// "a: b !important;".
	var importantify = function importantify(string) {
	    return string.replace(IMPORTANT_RE, function (_, base, important) {
	        return base + " !important;";
	    });
	};
	exports.importantify = importantify;

/***/ },
/* 491 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _asap = __webpack_require__(492);

	var _asap2 = _interopRequireDefault(_asap);

	var _generate = __webpack_require__(494);

	var _util = __webpack_require__(490);

	// The current <style> tag we are inserting into, or null if we haven't
	// inserted anything yet. We could find this each time using
	// `document.querySelector("style[data-aphrodite"])`, but holding onto it is
	// faster.
	var styleTag = null;

	// Inject a string of styles into a <style> tag in the head of the document. This
	// will automatically create a style tag and then continue to use it for
	// multiple injections. It will also use a style tag with the `data-aphrodite`
	// tag on it if that exists in the DOM. This could be used for e.g. reusing the
	// same style tag that server-side rendering inserts.
	var injectStyleTag = function injectStyleTag(cssContents) {
	    if (styleTag == null) {
	        // Try to find a style tag with the `data-aphrodite` attribute first.
	        styleTag = document.querySelector("style[data-aphrodite]");

	        // If that doesn't work, generate a new style tag.
	        if (styleTag == null) {
	            // Taken from
	            // http://stackoverflow.com/questions/524696/how-to-create-a-style-tag-with-javascript
	            var head = document.head || document.getElementsByTagName('head')[0];
	            styleTag = document.createElement('style');

	            styleTag.type = 'text/css';
	            styleTag.setAttribute("data-aphrodite", "");
	            head.appendChild(styleTag);
	        }
	    }

	    if (styleTag.styleSheet) {
	        styleTag.styleSheet.cssText += cssContents;
	    } else {
	        styleTag.appendChild(document.createTextNode(cssContents));
	    }
	};

	// Custom handlers for stringifying CSS values that have side effects
	// (such as fontFamily, which can cause @font-face rules to be injected)
	var stringHandlers = {
	    // With fontFamily we look for objects that are passed in and interpret
	    // them as @font-face rules that we need to inject. The value of fontFamily
	    // can either be a string (as normal), an object (a single font face), or
	    // an array of objects and strings.
	    fontFamily: function fontFamily(val) {
	        if (Array.isArray(val)) {
	            return val.map(fontFamily).join(",");
	        } else if (typeof val === "object") {
	            injectStyleOnce(val.fontFamily, "@font-face", [val], false);
	            return '"' + val.fontFamily + '"';
	        } else {
	            return val;
	        }
	    },

	    // With animationName we look for an object that contains keyframes and
	    // inject them as an `@keyframes` block, returning a uniquely generated
	    // name. The keyframes object should look like
	    //  animationName: {
	    //    from: {
	    //      left: 0,
	    //      top: 0,
	    //    },
	    //    '50%': {
	    //      left: 15,
	    //      top: 5,
	    //    },
	    //    to: {
	    //      left: 20,
	    //      top: 20,
	    //    }
	    //  }
	    // TODO(emily): `stringHandlers` doesn't let us rename the key, so I have
	    // to use `animationName` here. Improve that so we can call this
	    // `animation` instead of `animationName`.
	    animationName: function animationName(val) {
	        if (typeof val !== "object") {
	            return val;
	        }

	        // Generate a unique name based on the hash of the object. We can't
	        // just use the hash because the name can't start with a number.
	        // TODO(emily): this probably makes debugging hard, allow a custom
	        // name?
	        var name = 'keyframe_' + (0, _util.hashObject)(val);

	        // Since keyframes need 3 layers of nesting, we use `generateCSS` to
	        // build the inner layers and wrap it in `@keyframes` ourselves.
	        var finalVal = '@keyframes ' + name + '{';
	        Object.keys(val).forEach(function (key) {
	            finalVal += (0, _generate.generateCSS)(key, [val[key]], stringHandlers, false);
	        });
	        finalVal += '}';

	        injectGeneratedCSSOnce(name, finalVal);

	        return name;
	    }
	};

	// This is a map from Aphrodite's generated class names to `true` (acting as a
	// set of class names)
	var alreadyInjected = {};

	// This is the buffer of styles which have not yet been flushed.
	var injectionBuffer = "";

	// A flag to tell if we are already buffering styles. This could happen either
	// because we scheduled a flush call already, so newly added styles will
	// already be flushed, or because we are statically buffering on the server.
	var isBuffering = false;

	var injectGeneratedCSSOnce = function injectGeneratedCSSOnce(key, generatedCSS) {
	    if (!alreadyInjected[key]) {
	        if (!isBuffering) {
	            // We should never be automatically buffering on the server (or any
	            // place without a document), so guard against that.
	            if (typeof document === "undefined") {
	                throw new Error("Cannot automatically buffer without a document");
	            }

	            // If we're not already buffering, schedule a call to flush the
	            // current styles.
	            isBuffering = true;
	            (0, _asap2['default'])(flushToStyleTag);
	        }

	        injectionBuffer += generatedCSS;
	        alreadyInjected[key] = true;
	    }
	};

	var injectStyleOnce = function injectStyleOnce(key, selector, definitions, useImportant) {
	    if (!alreadyInjected[key]) {
	        var generated = (0, _generate.generateCSS)(selector, definitions, stringHandlers, useImportant);

	        injectGeneratedCSSOnce(key, generated);
	    }
	};

	exports.injectStyleOnce = injectStyleOnce;
	var reset = function reset() {
	    injectionBuffer = "";
	    alreadyInjected = {};
	    isBuffering = false;
	    styleTag = null;
	};

	exports.reset = reset;
	var startBuffering = function startBuffering() {
	    if (isBuffering) {
	        throw new Error("Cannot buffer while already buffering");
	    }
	    isBuffering = true;
	};

	exports.startBuffering = startBuffering;
	var flushToString = function flushToString() {
	    isBuffering = false;
	    var ret = injectionBuffer;
	    injectionBuffer = "";
	    return ret;
	};

	exports.flushToString = flushToString;
	var flushToStyleTag = function flushToStyleTag() {
	    var cssContent = flushToString();
	    if (cssContent.length > 0) {
	        injectStyleTag(cssContent);
	    }
	};

	exports.flushToStyleTag = flushToStyleTag;
	var getRenderedClassNames = function getRenderedClassNames() {
	    return Object.keys(alreadyInjected);
	};

	exports.getRenderedClassNames = getRenderedClassNames;
	var addRenderedClassNames = function addRenderedClassNames(classNames) {
	    classNames.forEach(function (className) {
	        alreadyInjected[className] = true;
	    });
	};
	exports.addRenderedClassNames = addRenderedClassNames;

/***/ },
/* 492 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	// rawAsap provides everything we need except exception management.
	var rawAsap = __webpack_require__(493);
	// RawTasks are recycled to reduce GC churn.
	var freeTasks = [];
	// We queue errors to ensure they are thrown in right order (FIFO).
	// Array-as-queue is good enough here, since we are just dealing with exceptions.
	var pendingErrors = [];
	var requestErrorThrow = rawAsap.makeRequestCallFromTimer(throwFirstError);

	function throwFirstError() {
	    if (pendingErrors.length) {
	        throw pendingErrors.shift();
	    }
	}

	/**
	 * Calls a task as soon as possible after returning, in its own event, with priority
	 * over other events like animation, reflow, and repaint. An error thrown from an
	 * event will not interrupt, nor even substantially slow down the processing of
	 * other events, but will be rather postponed to a lower priority event.
	 * @param {{call}} task A callable object, typically a function that takes no
	 * arguments.
	 */
	module.exports = asap;
	function asap(task) {
	    var rawTask;
	    if (freeTasks.length) {
	        rawTask = freeTasks.pop();
	    } else {
	        rawTask = new RawTask();
	    }
	    rawTask.task = task;
	    rawAsap(rawTask);
	}

	// We wrap tasks with recyclable task objects.  A task object implements
	// `call`, just like a function.
	function RawTask() {
	    this.task = null;
	}

	// The sole purpose of wrapping the task is to catch the exception and recycle
	// the task object after its single use.
	RawTask.prototype.call = function () {
	    try {
	        this.task.call();
	    } catch (error) {
	        if (asap.onerror) {
	            // This hook exists purely for testing purposes.
	            // Its name will be periodically randomized to break any code that
	            // depends on its existence.
	            asap.onerror(error);
	        } else {
	            // In a web browser, exceptions are not fatal. However, to avoid
	            // slowing down the queue of pending tasks, we rethrow the error in a
	            // lower priority turn.
	            pendingErrors.push(error);
	            requestErrorThrow();
	        }
	    } finally {
	        this.task = null;
	        freeTasks[freeTasks.length] = this;
	    }
	};


/***/ },
/* 493 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {"use strict";

	// Use the fastest means possible to execute a task in its own turn, with
	// priority over other events including IO, animation, reflow, and redraw
	// events in browsers.
	//
	// An exception thrown by a task will permanently interrupt the processing of
	// subsequent tasks. The higher level `asap` function ensures that if an
	// exception is thrown by a task, that the task queue will continue flushing as
	// soon as possible, but if you use `rawAsap` directly, you are responsible to
	// either ensure that no exceptions are thrown from your task, or to manually
	// call `rawAsap.requestFlush` if an exception is thrown.
	module.exports = rawAsap;
	function rawAsap(task) {
	    if (!queue.length) {
	        requestFlush();
	        flushing = true;
	    }
	    // Equivalent to push, but avoids a function call.
	    queue[queue.length] = task;
	}

	var queue = [];
	// Once a flush has been requested, no further calls to `requestFlush` are
	// necessary until the next `flush` completes.
	var flushing = false;
	// `requestFlush` is an implementation-specific method that attempts to kick
	// off a `flush` event as quickly as possible. `flush` will attempt to exhaust
	// the event queue before yielding to the browser's own event loop.
	var requestFlush;
	// The position of the next task to execute in the task queue. This is
	// preserved between calls to `flush` so that it can be resumed if
	// a task throws an exception.
	var index = 0;
	// If a task schedules additional tasks recursively, the task queue can grow
	// unbounded. To prevent memory exhaustion, the task queue will periodically
	// truncate already-completed tasks.
	var capacity = 1024;

	// The flush function processes all tasks that have been scheduled with
	// `rawAsap` unless and until one of those tasks throws an exception.
	// If a task throws an exception, `flush` ensures that its state will remain
	// consistent and will resume where it left off when called again.
	// However, `flush` does not make any arrangements to be called again if an
	// exception is thrown.
	function flush() {
	    while (index < queue.length) {
	        var currentIndex = index;
	        // Advance the index before calling the task. This ensures that we will
	        // begin flushing on the next task the task throws an error.
	        index = index + 1;
	        queue[currentIndex].call();
	        // Prevent leaking memory for long chains of recursive calls to `asap`.
	        // If we call `asap` within tasks scheduled by `asap`, the queue will
	        // grow, but to avoid an O(n) walk for every task we execute, we don't
	        // shift tasks off the queue after they have been executed.
	        // Instead, we periodically shift 1024 tasks off the queue.
	        if (index > capacity) {
	            // Manually shift all values starting at the index back to the
	            // beginning of the queue.
	            for (var scan = 0, newLength = queue.length - index; scan < newLength; scan++) {
	                queue[scan] = queue[scan + index];
	            }
	            queue.length -= index;
	            index = 0;
	        }
	    }
	    queue.length = 0;
	    index = 0;
	    flushing = false;
	}

	// `requestFlush` is implemented using a strategy based on data collected from
	// every available SauceLabs Selenium web driver worker at time of writing.
	// https://docs.google.com/spreadsheets/d/1mG-5UYGup5qxGdEMWkhP6BWCz053NUb2E1QoUTU16uA/edit#gid=783724593

	// Safari 6 and 6.1 for desktop, iPad, and iPhone are the only browsers that
	// have WebKitMutationObserver but not un-prefixed MutationObserver.
	// Must use `global` or `self` instead of `window` to work in both frames and web
	// workers. `global` is a provision of Browserify, Mr, Mrs, or Mop.

	/* globals self */
	var scope = typeof global !== "undefined" ? global : self;
	var BrowserMutationObserver = scope.MutationObserver || scope.WebKitMutationObserver;

	// MutationObservers are desirable because they have high priority and work
	// reliably everywhere they are implemented.
	// They are implemented in all modern browsers.
	//
	// - Android 4-4.3
	// - Chrome 26-34
	// - Firefox 14-29
	// - Internet Explorer 11
	// - iPad Safari 6-7.1
	// - iPhone Safari 7-7.1
	// - Safari 6-7
	if (typeof BrowserMutationObserver === "function") {
	    requestFlush = makeRequestCallFromMutationObserver(flush);

	// MessageChannels are desirable because they give direct access to the HTML
	// task queue, are implemented in Internet Explorer 10, Safari 5.0-1, and Opera
	// 11-12, and in web workers in many engines.
	// Although message channels yield to any queued rendering and IO tasks, they
	// would be better than imposing the 4ms delay of timers.
	// However, they do not work reliably in Internet Explorer or Safari.

	// Internet Explorer 10 is the only browser that has setImmediate but does
	// not have MutationObservers.
	// Although setImmediate yields to the browser's renderer, it would be
	// preferrable to falling back to setTimeout since it does not have
	// the minimum 4ms penalty.
	// Unfortunately there appears to be a bug in Internet Explorer 10 Mobile (and
	// Desktop to a lesser extent) that renders both setImmediate and
	// MessageChannel useless for the purposes of ASAP.
	// https://github.com/kriskowal/q/issues/396

	// Timers are implemented universally.
	// We fall back to timers in workers in most engines, and in foreground
	// contexts in the following browsers.
	// However, note that even this simple case requires nuances to operate in a
	// broad spectrum of browsers.
	//
	// - Firefox 3-13
	// - Internet Explorer 6-9
	// - iPad Safari 4.3
	// - Lynx 2.8.7
	} else {
	    requestFlush = makeRequestCallFromTimer(flush);
	}

	// `requestFlush` requests that the high priority event queue be flushed as
	// soon as possible.
	// This is useful to prevent an error thrown in a task from stalling the event
	// queue if the exception handled by Node.js’s
	// `process.on("uncaughtException")` or by a domain.
	rawAsap.requestFlush = requestFlush;

	// To request a high priority event, we induce a mutation observer by toggling
	// the text of a text node between "1" and "-1".
	function makeRequestCallFromMutationObserver(callback) {
	    var toggle = 1;
	    var observer = new BrowserMutationObserver(callback);
	    var node = document.createTextNode("");
	    observer.observe(node, {characterData: true});
	    return function requestCall() {
	        toggle = -toggle;
	        node.data = toggle;
	    };
	}

	// The message channel technique was discovered by Malte Ubl and was the
	// original foundation for this library.
	// http://www.nonblocking.io/2011/06/windownexttick.html

	// Safari 6.0.5 (at least) intermittently fails to create message ports on a
	// page's first load. Thankfully, this version of Safari supports
	// MutationObservers, so we don't need to fall back in that case.

	// function makeRequestCallFromMessageChannel(callback) {
	//     var channel = new MessageChannel();
	//     channel.port1.onmessage = callback;
	//     return function requestCall() {
	//         channel.port2.postMessage(0);
	//     };
	// }

	// For reasons explained above, we are also unable to use `setImmediate`
	// under any circumstances.
	// Even if we were, there is another bug in Internet Explorer 10.
	// It is not sufficient to assign `setImmediate` to `requestFlush` because
	// `setImmediate` must be called *by name* and therefore must be wrapped in a
	// closure.
	// Never forget.

	// function makeRequestCallFromSetImmediate(callback) {
	//     return function requestCall() {
	//         setImmediate(callback);
	//     };
	// }

	// Safari 6.0 has a problem where timers will get lost while the user is
	// scrolling. This problem does not impact ASAP because Safari 6.0 supports
	// mutation observers, so that implementation is used instead.
	// However, if we ever elect to use timers in Safari, the prevalent work-around
	// is to add a scroll event listener that calls for a flush.

	// `setTimeout` does not call the passed callback if the delay is less than
	// approximately 7 in web workers in Firefox 8 through 18, and sometimes not
	// even then.

	function makeRequestCallFromTimer(callback) {
	    return function requestCall() {
	        // We dispatch a timeout with a specified delay of 0 for engines that
	        // can reliably accommodate that request. This will usually be snapped
	        // to a 4 milisecond delay, but once we're flushing, there's no delay
	        // between events.
	        var timeoutHandle = setTimeout(handleTimer, 0);
	        // However, since this timer gets frequently dropped in Firefox
	        // workers, we enlist an interval handle that will try to fire
	        // an event 20 times per second until it succeeds.
	        var intervalHandle = setInterval(handleTimer, 50);

	        function handleTimer() {
	            // Whichever timer succeeds will cancel both timers and
	            // execute the callback.
	            clearTimeout(timeoutHandle);
	            clearInterval(intervalHandle);
	            callback();
	        }
	    };
	}

	// This is for `asap.js` only.
	// Its name will be periodically randomized to break any code that depends on
	// its existence.
	rawAsap.makeRequestCallFromTimer = makeRequestCallFromTimer;

	// ASAP was originally a nextTick shim included in Q. This was factored out
	// into this ASAP package. It was later adapted to RSVP which made further
	// amendments. These decisions, particularly to marginalize MessageChannel and
	// to capture the MutationObserver implementation in a closure, were integrated
	// back into ASAP proper.
	// https://github.com/tildeio/rsvp.js/blob/cddf7232546a9cf858524b75cde6f9edf72620a7/lib/rsvp/asap.js

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 494 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _inlineStylePrefixAll = __webpack_require__(495);

	var _inlineStylePrefixAll2 = _interopRequireDefault(_inlineStylePrefixAll);

	var _util = __webpack_require__(490);

	var generateCSS = function generateCSS(selector, styleTypes, stringHandlers, useImportant) {
	    var merged = styleTypes.reduce(_util.recursiveMerge);

	    var declarations = {};
	    var mediaQueries = {};
	    var pseudoStyles = {};

	    Object.keys(merged).forEach(function (key) {
	        if (key[0] === ':') {
	            pseudoStyles[key] = merged[key];
	        } else if (key[0] === '@') {
	            mediaQueries[key] = merged[key];
	        } else {
	            declarations[key] = merged[key];
	        }
	    });

	    return generateCSSRuleset(selector, declarations, stringHandlers, useImportant) + Object.keys(pseudoStyles).map(function (pseudoSelector) {
	        return generateCSSRuleset(selector + pseudoSelector, pseudoStyles[pseudoSelector], stringHandlers, useImportant);
	    }).join("") + Object.keys(mediaQueries).map(function (mediaQuery) {
	        var ruleset = generateCSS(selector, [mediaQueries[mediaQuery]], stringHandlers, useImportant);
	        return mediaQuery + '{' + ruleset + '}';
	    }).join("");
	};

	exports.generateCSS = generateCSS;
	var runStringHandlers = function runStringHandlers(declarations, stringHandlers) {
	    var result = {};

	    Object.keys(declarations).forEach(function (key) {
	        // If a handler exists for this particular key, let it interpret
	        // that value first before continuing
	        if (stringHandlers && stringHandlers.hasOwnProperty(key)) {
	            result[key] = stringHandlers[key](declarations[key]);
	        } else {
	            result[key] = declarations[key];
	        }
	    });

	    return result;
	};

	var generateCSSRuleset = function generateCSSRuleset(selector, declarations, stringHandlers, useImportant) {
	    var handledDeclarations = runStringHandlers(declarations, stringHandlers);

	    var prefixedDeclarations = (0, _inlineStylePrefixAll2['default'])(handledDeclarations);

	    var prefixedRules = (0, _util.flatten)((0, _util.objectToPairs)(prefixedDeclarations).map(function (_ref) {
	        var _ref2 = _slicedToArray(_ref, 2);

	        var key = _ref2[0];
	        var value = _ref2[1];

	        if (Array.isArray(value)) {
	            var _ret = (function () {
	                // inline-style-prefix-all returns an array when there should be
	                // multiple rules, we will flatten to single rules

	                var prefixedValues = [];
	                var unprefixedValues = [];

	                value.forEach(function (v) {
	                    if (v.indexOf('-') === 0) {
	                        prefixedValues.push(v);
	                    } else {
	                        unprefixedValues.push(v);
	                    }
	                });

	                prefixedValues.sort();
	                unprefixedValues.sort();

	                return {
	                    v: prefixedValues.concat(unprefixedValues).map(function (v) {
	                        return [key, v];
	                    })
	                };
	            })();

	            if (typeof _ret === 'object') return _ret.v;
	        }
	        return [[key, value]];
	    }));

	    var rules = prefixedRules.map(function (_ref3) {
	        var _ref32 = _slicedToArray(_ref3, 2);

	        var key = _ref32[0];
	        var value = _ref32[1];

	        var stringValue = (0, _util.stringifyValue)(key, value);
	        var ret = (0, _util.kebabifyStyleName)(key) + ':' + stringValue + ';';
	        return useImportant === false ? ret : (0, _util.importantify)(ret);
	    }).join("");

	    if (rules) {
	        return selector + '{' + rules + '}';
	    } else {
	        return "";
	    }
	};
	exports.generateCSSRuleset = generateCSSRuleset;

/***/ },
/* 495 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = prefixAll;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _prefixProps = __webpack_require__(496);

	var _prefixProps2 = _interopRequireDefault(_prefixProps);

	var _utilsCapitalizeString = __webpack_require__(497);

	var _utilsCapitalizeString2 = _interopRequireDefault(_utilsCapitalizeString);

	var _utilsAssign = __webpack_require__(498);

	var _utilsAssign2 = _interopRequireDefault(_utilsAssign);

	var _pluginsCalc = __webpack_require__(499);

	var _pluginsCalc2 = _interopRequireDefault(_pluginsCalc);

	var _pluginsCursor = __webpack_require__(503);

	var _pluginsCursor2 = _interopRequireDefault(_pluginsCursor);

	var _pluginsFlex = __webpack_require__(504);

	var _pluginsFlex2 = _interopRequireDefault(_pluginsFlex);

	var _pluginsSizing = __webpack_require__(505);

	var _pluginsSizing2 = _interopRequireDefault(_pluginsSizing);

	var _pluginsGradient = __webpack_require__(506);

	var _pluginsGradient2 = _interopRequireDefault(_pluginsGradient);

	var _pluginsTransition = __webpack_require__(507);

	var _pluginsTransition2 = _interopRequireDefault(_pluginsTransition);

	// special flexbox specifications

	var _pluginsFlexboxIE = __webpack_require__(508);

	var _pluginsFlexboxIE2 = _interopRequireDefault(_pluginsFlexboxIE);

	var _pluginsFlexboxOld = __webpack_require__(509);

	var _pluginsFlexboxOld2 = _interopRequireDefault(_pluginsFlexboxOld);

	var plugins = [_pluginsCalc2['default'], _pluginsCursor2['default'], _pluginsSizing2['default'], _pluginsGradient2['default'], _pluginsTransition2['default'], _pluginsFlexboxIE2['default'], _pluginsFlexboxOld2['default'], _pluginsFlex2['default']];

	/**
	 * Returns a prefixed version of the style object using all vendor prefixes
	 * @param {Object} styles - Style object that gets prefixed properties added
	 * @returns {Object} - Style object with prefixed properties and values
	 */

	function prefixAll(styles) {
	  return Object.keys(styles).reduce(function (prefixedStyles, property) {
	    var value = styles[property];
	    if (value instanceof Object && !Array.isArray(value)) {
	      // recurse through nested style objects
	      prefixedStyles[property] = prefixAll(value);
	    } else {
	      Object.keys(_prefixProps2['default']).forEach(function (prefix) {
	        var properties = _prefixProps2['default'][prefix];
	        // add prefixes if needed
	        if (properties[property]) {
	          prefixedStyles[prefix + (0, _utilsCapitalizeString2['default'])(property)] = value;
	        }
	      });

	      // resolve every special plugins
	      plugins.forEach(function (plugin) {
	        return (0, _utilsAssign2['default'])(prefixedStyles, plugin(property, value));
	      });
	    }

	    return prefixedStyles;
	  }, styles);
	}

	module.exports = exports['default'];

/***/ },
/* 496 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = { "Webkit": { "transform": true, "transformOrigin": true, "transformOriginX": true, "transformOriginY": true, "backfaceVisibility": true, "perspective": true, "perspectiveOrigin": true, "transformStyle": true, "transformOriginZ": true, "animation": true, "animationDelay": true, "animationDirection": true, "animationFillMode": true, "animationDuration": true, "animationIterationCount": true, "animationName": true, "animationPlayState": true, "animationTimingFunction": true, "appearance": true, "userSelect": true, "fontKerning": true, "textEmphasisPosition": true, "textEmphasis": true, "textEmphasisStyle": true, "textEmphasisColor": true, "boxDecorationBreak": true, "clipPath": true, "maskImage": true, "maskMode": true, "maskRepeat": true, "maskPosition": true, "maskClip": true, "maskOrigin": true, "maskSize": true, "maskComposite": true, "mask": true, "maskBorderSource": true, "maskBorderMode": true, "maskBorderSlice": true, "maskBorderWidth": true, "maskBorderOutset": true, "maskBorderRepeat": true, "maskBorder": true, "maskType": true, "textDecorationStyle": true, "textDecorationSkip": true, "textDecorationLine": true, "textDecorationColor": true, "filter": true, "fontFeatureSettings": true, "breakAfter": true, "breakBefore": true, "breakInside": true, "columnCount": true, "columnFill": true, "columnGap": true, "columnRule": true, "columnRuleColor": true, "columnRuleStyle": true, "columnRuleWidth": true, "columns": true, "columnSpan": true, "columnWidth": true, "flex": true, "flexBasis": true, "flexDirection": true, "flexGrow": true, "flexFlow": true, "flexShrink": true, "flexWrap": true, "alignContent": true, "alignItems": true, "alignSelf": true, "justifyContent": true, "order": true, "transition": true, "transitionDelay": true, "transitionDuration": true, "transitionProperty": true, "transitionTimingFunction": true, "backdropFilter": true, "scrollSnapType": true, "scrollSnapPointsX": true, "scrollSnapPointsY": true, "scrollSnapDestination": true, "scrollSnapCoordinate": true, "shapeImageThreshold": true, "shapeImageMargin": true, "shapeImageOutside": true, "hyphens": true, "flowInto": true, "flowFrom": true, "regionFragment": true, "textSizeAdjust": true, "borderImage": true, "borderImageOutset": true, "borderImageRepeat": true, "borderImageSlice": true, "borderImageSource": true, "borderImageWidth": true, "tabSize": true, "objectFit": true, "objectPosition": true }, "Moz": { "appearance": true, "userSelect": true, "boxSizing": true, "textAlignLast": true, "textDecorationStyle": true, "textDecorationSkip": true, "textDecorationLine": true, "textDecorationColor": true, "tabSize": true, "hyphens": true, "fontFeatureSettings": true, "breakAfter": true, "breakBefore": true, "breakInside": true, "columnCount": true, "columnFill": true, "columnGap": true, "columnRule": true, "columnRuleColor": true, "columnRuleStyle": true, "columnRuleWidth": true, "columns": true, "columnSpan": true, "columnWidth": true }, "ms": { "flex": true, "flexBasis": false, "flexDirection": true, "flexGrow": false, "flexFlow": true, "flexShrink": false, "flexWrap": true, "alignContent": false, "alignItems": false, "alignSelf": false, "justifyContent": false, "order": false, "transform": true, "transformOrigin": true, "transformOriginX": true, "transformOriginY": true, "userSelect": true, "wrapFlow": true, "wrapThrough": true, "wrapMargin": true, "scrollSnapType": true, "scrollSnapPointsX": true, "scrollSnapPointsY": true, "scrollSnapDestination": true, "scrollSnapCoordinate": true, "touchAction": true, "hyphens": true, "flowInto": true, "flowFrom": true, "breakBefore": true, "breakAfter": true, "breakInside": true, "regionFragment": true, "gridTemplateColumns": true, "gridTemplateRows": true, "gridTemplateAreas": true, "gridTemplate": true, "gridAutoColumns": true, "gridAutoRows": true, "gridAutoFlow": true, "grid": true, "gridRowStart": true, "gridColumnStart": true, "gridRowEnd": true, "gridRow": true, "gridColumn": true, "gridColumnEnd": true, "gridColumnGap": true, "gridRowGap": true, "gridArea": true, "gridGap": true, "textSizeAdjust": true } };
	module.exports = exports["default"];

/***/ },
/* 497 */
/***/ function(module, exports) {

	// helper to capitalize strings
	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports["default"] = function (str) {
	  return str.charAt(0).toUpperCase() + str.slice(1);
	};

	module.exports = exports["default"];

/***/ },
/* 498 */
/***/ function(module, exports) {

	// leight polyfill for Object.assign
	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports["default"] = function (base) {
	  var extend = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	  return Object.keys(extend).reduce(function (out, key) {
	    base[key] = extend[key];
	    return out;
	  }, {});
	};

	module.exports = exports["default"];

/***/ },
/* 499 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = calc;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _utilsJoinPrefixedRules = __webpack_require__(500);

	var _utilsJoinPrefixedRules2 = _interopRequireDefault(_utilsJoinPrefixedRules);

	var _utilsIsPrefixedValue = __webpack_require__(502);

	var _utilsIsPrefixedValue2 = _interopRequireDefault(_utilsIsPrefixedValue);

	function calc(property, value) {
	  if (typeof value === 'string' && value.indexOf('calc(') > -1) {
	    if ((0, _utilsIsPrefixedValue2['default'])(value)) return;

	    return (0, _utilsJoinPrefixedRules2['default'])(property, value, function (prefix, value) {
	      return value.replace(/calc\(/g, prefix + 'calc(');
	    });
	  }
	}

	module.exports = exports['default'];

/***/ },
/* 500 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var _camelToDashCase = __webpack_require__(501);

	var _camelToDashCase2 = _interopRequireDefault(_camelToDashCase);

	// returns a style object with a single concated prefixed value string

	exports['default'] = function (property, value) {
	  var replacer = arguments.length <= 2 || arguments[2] === undefined ? function (prefix, value) {
	    return prefix + value;
	  } : arguments[2];
	  return (function () {
	    return _defineProperty({}, property, ['-webkit-', '-moz-', ''].map(function (prefix) {
	      return replacer(prefix, value);
	    }));
	  })();
	};

	module.exports = exports['default'];

/***/ },
/* 501 */
/***/ function(module, exports) {

	/**
	 * Converts a camel-case string to a dash-case string
	 * @param {string} str - str that gets converted to dash-case
	 */
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	exports['default'] = function (str) {
	  return str.replace(/([a-z]|^)([A-Z])/g, function (match, p1, p2) {
	    return p1 + '-' + p2.toLowerCase();
	  }).replace('ms-', '-ms-');
	};

	module.exports = exports['default'];

/***/ },
/* 502 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	exports['default'] = function (value) {
	  if (Array.isArray(value)) value = value.join(',');

	  return value.match(/-webkit-|-moz-|-ms-/) !== null;
	};

	module.exports = exports['default'];

/***/ },
/* 503 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = cursor;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _utilsJoinPrefixedRules = __webpack_require__(500);

	var _utilsJoinPrefixedRules2 = _interopRequireDefault(_utilsJoinPrefixedRules);

	var values = {
	  'zoom-in': true,
	  'zoom-out': true,
	  'grab': true,
	  'grabbing': true
	};

	function cursor(property, value) {
	  if (property === 'cursor' && values[value]) {
	    return (0, _utilsJoinPrefixedRules2['default'])(property, value);
	  }
	}

	module.exports = exports['default'];

/***/ },
/* 504 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = flex;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _utilsCamelToDashCase = __webpack_require__(501);

	var _utilsCamelToDashCase2 = _interopRequireDefault(_utilsCamelToDashCase);

	var values = { flex: true, 'inline-flex': true };

	function flex(property, value) {
	  if (property === 'display' && values[value]) {
	    return {
	      display: ['-webkit-box', '-moz-box', '-ms-' + value + 'box', '-webkit-' + value, value]
	    };
	  }
	}

	module.exports = exports['default'];

/***/ },
/* 505 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = sizing;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _utilsJoinPrefixedRules = __webpack_require__(500);

	var _utilsJoinPrefixedRules2 = _interopRequireDefault(_utilsJoinPrefixedRules);

	var properties = {
	  maxHeight: true,
	  maxWidth: true,
	  width: true,
	  height: true,
	  columnWidth: true,
	  minWidth: true,
	  minHeight: true
	};
	var values = {
	  'min-content': true,
	  'max-content': true,
	  'fill-available': true,
	  'fit-content': true,
	  'contain-floats': true
	};

	function sizing(property, value) {
	  if (properties[property] && values[value]) {
	    return (0, _utilsJoinPrefixedRules2['default'])(property, value);
	  }
	}

	module.exports = exports['default'];

/***/ },
/* 506 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = gradient;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _utilsJoinPrefixedRules = __webpack_require__(500);

	var _utilsJoinPrefixedRules2 = _interopRequireDefault(_utilsJoinPrefixedRules);

	var _utilsIsPrefixedValue = __webpack_require__(502);

	var _utilsIsPrefixedValue2 = _interopRequireDefault(_utilsIsPrefixedValue);

	var values = /linear-gradient|radial-gradient|repeating-linear-gradient|repeating-radial-gradient/;

	function gradient(property, value) {
	  if (typeof value === 'string' && value.match(values) !== null) {
	    if ((0, _utilsIsPrefixedValue2['default'])(value)) return;

	    return (0, _utilsJoinPrefixedRules2['default'])(property, value);
	  }
	}

	module.exports = exports['default'];

/***/ },
/* 507 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = transition;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var _utilsCamelToDashCase = __webpack_require__(501);

	var _utilsCamelToDashCase2 = _interopRequireDefault(_utilsCamelToDashCase);

	var _utilsCapitalizeString = __webpack_require__(497);

	var _utilsCapitalizeString2 = _interopRequireDefault(_utilsCapitalizeString);

	var _utilsIsPrefixedValue = __webpack_require__(502);

	var _utilsIsPrefixedValue2 = _interopRequireDefault(_utilsIsPrefixedValue);

	var _prefixProps = __webpack_require__(496);

	var _prefixProps2 = _interopRequireDefault(_prefixProps);

	var properties = {
	  transition: true,
	  transitionProperty: true,
	  WebkitTransition: true,
	  WebkitTransitionProperty: true
	};

	function transition(property, value) {
	  // also check for already prefixed transitions
	  if (typeof value === 'string' && properties[property]) {
	    var _ref2;

	    var outputValue = prefixValue(value);
	    var webkitOutput = outputValue.split(',').filter(function (value) {
	      return value.match(/-moz-|-ms-/) === null;
	    }).join(',');

	    // if the property is already prefixed
	    if (property.indexOf('Webkit') > -1) {
	      return _defineProperty({}, property, webkitOutput);
	    }

	    return _ref2 = {}, _defineProperty(_ref2, 'Webkit' + (0, _utilsCapitalizeString2['default'])(property), webkitOutput), _defineProperty(_ref2, property, outputValue), _ref2;
	  }
	}

	function prefixValue(value) {
	  if ((0, _utilsIsPrefixedValue2['default'])(value)) {
	    return value;
	  }

	  // only split multi values, not cubic beziers
	  var multipleValues = value.split(/,(?![^()]*(?:\([^()]*\))?\))/g);

	  // iterate each single value and check for transitioned properties
	  // that need to be prefixed as well
	  multipleValues.forEach(function (val, index) {
	    multipleValues[index] = Object.keys(_prefixProps2['default']).reduce(function (out, prefix) {
	      var dashCasePrefix = '-' + prefix.toLowerCase() + '-';

	      Object.keys(_prefixProps2['default'][prefix]).forEach(function (prop) {
	        var dashCaseProperty = (0, _utilsCamelToDashCase2['default'])(prop);

	        if (val.indexOf(dashCaseProperty) > -1) {
	          // join all prefixes and create a new value
	          out = val.replace(dashCaseProperty, dashCasePrefix + dashCaseProperty) + ',' + out;
	        }
	      });
	      return out;
	    }, val);
	  });

	  return multipleValues.join(',');
	}
	module.exports = exports['default'];

/***/ },
/* 508 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = flexboxIE;

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var alternativeValues = {
	  'space-around': 'distribute',
	  'space-between': 'justify',
	  'flex-start': 'start',
	  'flex-end': 'end'
	};
	var alternativeProps = {
	  alignContent: 'msFlexLinePack',
	  alignSelf: 'msFlexItemAlign',
	  alignItems: 'msFlexAlign',
	  justifyContent: 'msFlexPack',
	  order: 'msFlexOrder',
	  flexGrow: 'msFlexPositive',
	  flexShrink: 'msFlexNegative',
	  flexBasis: 'msPreferredSize'
	};

	function flexboxIE(property, value) {
	  if (alternativeProps[property]) {
	    return _defineProperty({}, alternativeProps[property], alternativeValues[value] || value);
	  }
	}

	module.exports = exports['default'];

/***/ },
/* 509 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = flexboxOld;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var _utilsCamelToDashCase = __webpack_require__(501);

	var _utilsCamelToDashCase2 = _interopRequireDefault(_utilsCamelToDashCase);

	var alternativeValues = {
	  'space-around': 'justify',
	  'space-between': 'justify',
	  'flex-start': 'start',
	  'flex-end': 'end',
	  'wrap-reverse': 'multiple',
	  wrap: 'multiple'
	};

	var alternativeProps = {
	  alignItems: 'WebkitBoxAlign',
	  justifyContent: 'WebkitBoxPack',
	  flexWrap: 'WebkitBoxLines'
	};

	function flexboxOld(property, value) {
	  if (property === 'flexDirection') {
	    return {
	      WebkitBoxOrient: value.indexOf('column') > -1 ? 'vertical' : 'horizontal',
	      WebkitBoxDirection: value.indexOf('reverse') > -1 ? 'reverse' : 'normal'
	    };
	  }
	  if (alternativeProps[property]) {
	    return _defineProperty({}, alternativeProps[property], alternativeValues[value] || value);
	  }
	}

	module.exports = exports['default'];

/***/ },
/* 510 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(1);

	var _require = __webpack_require__(489),
	    StyleSheet = _require.StyleSheet,
	    css = _require.css;

	var View = function (_React$Component) {
	    _inherits(View, _React$Component);

	    function View() {
	        _classCallCheck(this, View);

	        return _possibleConstructorReturn(this, (View.__proto__ || Object.getPrototypeOf(View)).apply(this, arguments));
	    }

	    _createClass(View, [{
	        key: 'render',
	        value: function render() {
	            var className = css.apply(undefined, [View.styles.initial].concat(_toConsumableArray(Array.isArray(this.props.style) ? this.props.style : [this.props.style]))) + (this.props.extraClassName ? ' ' + this.props.extraClassName : "");

	            return React.createElement(
	                'div',
	                {
	                    className: className,
	                    style: this.props.dynamicStyle,
	                    onClick: this.props.onClick,
	                    onTouchCancel: this.props.onTouchCancel,
	                    onTouchEnd: this.props.onTouchEnd,
	                    onTouchMove: this.props.onTouchMove,
	                    onTouchStart: this.props.onTouchStart,
	                    'aria-label': this.props.ariaLabel,
	                    role: this.props.role
	                },
	                this.props.children
	            );
	        }
	    }]);

	    return View;
	}(React.Component);

	View.propTypes = {
	    ariaLabel: React.PropTypes.string,
	    children: React.PropTypes.oneOfType([React.PropTypes.arrayOf(React.PropTypes.node), React.PropTypes.node]),
	    // The `dynamicStyle` prop is provided for animating dynamic
	    // properties, as creating Aphrodite StyleSheets in animation loops is
	    // expensive. `dynamicStyle` should be a raw style object, rather than
	    // a StyleSheet.
	    dynamicStyle: React.PropTypes.any,
	    // The `extraClassName` prop should almost never be used. It gives the
	    // client a way to provide an additional CSS class name, to augment
	    // the class name generated by Aphrodite. (Right now, it's only used to
	    // disable some externally-applied CSS that would otherwise be far too
	    // difficult to override with inline styles.)
	    extraClassName: React.PropTypes.string,
	    numberOfLines: React.PropTypes.number,
	    onClick: React.PropTypes.func,
	    onTouchCancel: React.PropTypes.func,
	    onTouchEnd: React.PropTypes.func,
	    onTouchMove: React.PropTypes.func,
	    onTouchStart: React.PropTypes.func,
	    role: React.PropTypes.string,
	    style: React.PropTypes.any
	};
	View.styles = StyleSheet.create({
	    // From: https://github.com/necolas/react-native-web/blob/master/src/components/View/index.js
	    initial: {
	        alignItems: 'stretch',
	        borderWidth: 0,
	        borderStyle: 'solid',
	        boxSizing: 'border-box',
	        display: 'flex',
	        flexBasis: 'auto',
	        flexDirection: 'column',
	        margin: 0,
	        padding: 0,
	        position: 'relative',
	        // button and anchor reset
	        backgroundColor: 'transparent',
	        color: 'inherit',
	        font: 'inherit',
	        textAlign: 'inherit',
	        textDecorationLine: 'none',
	        // list reset
	        listStyle: 'none',
	        // fix flexbox bugs
	        maxWidth: '100%',
	        minHeight: 0,
	        minWidth: 0
	    }
	});


	module.exports = View;

/***/ },
/* 511 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * A single entry-point for all of the external-facing functionality.
	 */

	var components = {
	    Keypad: __webpack_require__(512),
	    KeypadInput: __webpack_require__(637)
	};

	var _require = __webpack_require__(610),
	    KeypadTypes = _require.KeypadTypes;

	var consts = { KeypadTypes: KeypadTypes };

	var _require2 = __webpack_require__(611),
	    keypadConfigurationPropType = _require2.keypadConfigurationPropType,
	    keypadElementPropType = _require2.keypadElementPropType;

	var propTypes = { keypadConfigurationPropType: keypadConfigurationPropType, keypadElementPropType: keypadElementPropType };

	module.exports = {
	    components: components,
	    consts: consts,
	    propTypes: propTypes
	};

/***/ },
/* 512 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(1);

	var _require = __webpack_require__(513),
	    Provider = _require.Provider;

	var KeypadContainer = __webpack_require__(547);

	var _require2 = __webpack_require__(551),
	    activateKeypad = _require2.activateKeypad,
	    dismissKeypad = _require2.dismissKeypad,
	    configureKeypad = _require2.configureKeypad,
	    setCursor = _require2.setCursor,
	    setKeyHandler = _require2.setKeyHandler;

	var createStore = __webpack_require__(633);

	var ProvidedKeypad = function (_React$Component) {
	    _inherits(ProvidedKeypad, _React$Component);

	    function ProvidedKeypad() {
	        var _ref;

	        var _temp, _this, _ret;

	        _classCallCheck(this, ProvidedKeypad);

	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }

	        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ProvidedKeypad.__proto__ || Object.getPrototypeOf(ProvidedKeypad)).call.apply(_ref, [this].concat(args))), _this), _this.activate = function () {
	            _this.store.dispatch(activateKeypad());
	        }, _this.dismiss = function () {
	            _this.store.dispatch(dismissKeypad());
	        }, _this.configure = function (configuration, cb) {
	            _this.store.dispatch(configureKeypad(configuration));

	            // HACK(charlie): In Perseus, triggering a focus causes the keypad to
	            // animate into view and re-configure. We'd like to provide the option
	            // to re-render the re-configured keypad before animating it into view,
	            // to avoid jank in the animation. As such, we support passing a
	            // callback into `configureKeypad`. However, implementing this properly
	            // would require middleware, etc., so we just hack it on with
	            // `setTimeout` for now.
	            setTimeout(function () {
	                return cb && cb();
	            });
	        }, _this.setCursor = function (cursor) {
	            _this.store.dispatch(setCursor(cursor));
	        }, _this.setKeyHandler = function (keyHandler) {
	            _this.store.dispatch(setKeyHandler(keyHandler));
	        }, _temp), _possibleConstructorReturn(_this, _ret);
	    }

	    _createClass(ProvidedKeypad, [{
	        key: 'componentWillMount',
	        value: function componentWillMount() {
	            this.store = createStore();
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            var _props = this.props,
	                _onElementMounted = _props.onElementMounted,
	                rest = _objectWithoutProperties(_props, ['onElementMounted']);

	            return React.createElement(
	                Provider,
	                { store: this.store },
	                React.createElement(KeypadContainer, _extends({
	                    onElementMounted: function onElementMounted(element) {
	                        // Append the dispatch methods that we want to expose
	                        // externally to the returned React element.
	                        var elementWithDispatchMethods = _extends({}, element, {
	                            activate: _this2.activate,
	                            dismiss: _this2.dismiss,
	                            configure: _this2.configure,
	                            setCursor: _this2.setCursor,
	                            setKeyHandler: _this2.setKeyHandler
	                        });
	                        _onElementMounted && _onElementMounted(elementWithDispatchMethods);
	                    }
	                }, rest))
	            );
	        }
	    }]);

	    return ProvidedKeypad;
	}(React.Component);

	ProvidedKeypad.propTypes = {
	    onElementMounted: React.PropTypes.func
	};


	module.exports = ProvidedKeypad;

/***/ },
/* 513 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.connect = exports.Provider = undefined;

	var _Provider = __webpack_require__(514);

	var _Provider2 = _interopRequireDefault(_Provider);

	var _connect = __webpack_require__(522);

	var _connect2 = _interopRequireDefault(_connect);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	exports.Provider = _Provider2["default"];
	exports.connect = _connect2["default"];

/***/ },
/* 514 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports["default"] = undefined;

	var _react = __webpack_require__(1);

	var _propTypes = __webpack_require__(515);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _storeShape = __webpack_require__(520);

	var _storeShape2 = _interopRequireDefault(_storeShape);

	var _warning = __webpack_require__(521);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var didWarnAboutReceivingStore = false;
	function warnAboutReceivingStore() {
	  if (didWarnAboutReceivingStore) {
	    return;
	  }
	  didWarnAboutReceivingStore = true;

	  (0, _warning2["default"])('<Provider> does not support changing `store` on the fly. ' + 'It is most likely that you see this error because you updated to ' + 'Redux 2.x and React Redux 2.x which no longer hot reload reducers ' + 'automatically. See https://github.com/reactjs/react-redux/releases/' + 'tag/v2.0.0 for the migration instructions.');
	}

	var Provider = function (_Component) {
	  _inherits(Provider, _Component);

	  Provider.prototype.getChildContext = function getChildContext() {
	    return { store: this.store };
	  };

	  function Provider(props, context) {
	    _classCallCheck(this, Provider);

	    var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

	    _this.store = props.store;
	    return _this;
	  }

	  Provider.prototype.render = function render() {
	    return _react.Children.only(this.props.children);
	  };

	  return Provider;
	}(_react.Component);

	exports["default"] = Provider;


	if (false) {
	  Provider.prototype.componentWillReceiveProps = function (nextProps) {
	    var store = this.store;
	    var nextStore = nextProps.store;


	    if (store !== nextStore) {
	      warnAboutReceivingStore();
	    }
	  };
	}

	Provider.propTypes = {
	  store: _storeShape2["default"].isRequired,
	  children: _propTypes2["default"].element.isRequired
	};
	Provider.childContextTypes = {
	  store: _storeShape2["default"].isRequired
	};

/***/ },
/* 515 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	if (false) {
	  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
	    Symbol.for &&
	    Symbol.for('react.element')) ||
	    0xeac7;

	  var isValidElement = function(object) {
	    return typeof object === 'object' &&
	      object !== null &&
	      object.$$typeof === REACT_ELEMENT_TYPE;
	  };

	  // By explicitly using `prop-types` you are opting into new development behavior.
	  // http://fb.me/prop-types-in-prod
	  var throwOnDirectAccess = true;
	  module.exports = require('./factoryWithTypeCheckers')(isValidElement, throwOnDirectAccess);
	} else {
	  // By explicitly using `prop-types` you are opting into new production behavior.
	  // http://fb.me/prop-types-in-prod
	  module.exports = __webpack_require__(516)();
	}


/***/ },
/* 516 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	var emptyFunction = __webpack_require__(517);
	var invariant = __webpack_require__(518);
	var ReactPropTypesSecret = __webpack_require__(519);

	module.exports = function() {
	  function shim(props, propName, componentName, location, propFullName, secret) {
	    if (secret === ReactPropTypesSecret) {
	      // It is still safe when called from React.
	      return;
	    }
	    invariant(
	      false,
	      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	      'Use PropTypes.checkPropTypes() to call them. ' +
	      'Read more at http://fb.me/use-check-prop-types'
	    );
	  };
	  shim.isRequired = shim;
	  function getShim() {
	    return shim;
	  };
	  // Important!
	  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
	  var ReactPropTypes = {
	    array: shim,
	    bool: shim,
	    func: shim,
	    number: shim,
	    object: shim,
	    string: shim,
	    symbol: shim,

	    any: shim,
	    arrayOf: getShim,
	    element: shim,
	    instanceOf: getShim,
	    node: shim,
	    objectOf: getShim,
	    oneOf: getShim,
	    oneOfType: getShim,
	    shape: getShim
	  };

	  ReactPropTypes.checkPropTypes = emptyFunction;
	  ReactPropTypes.PropTypes = ReactPropTypes;

	  return ReactPropTypes;
	};


/***/ },
/* 517 */
/***/ function(module, exports) {

	"use strict";

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */

	function makeEmptyFunction(arg) {
	  return function () {
	    return arg;
	  };
	}

	/**
	 * This function accepts and discards inputs; it has no side effects. This is
	 * primarily useful idiomatically for overridable function endpoints which
	 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
	 */
	var emptyFunction = function emptyFunction() {};

	emptyFunction.thatReturns = makeEmptyFunction;
	emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
	emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
	emptyFunction.thatReturnsNull = makeEmptyFunction(null);
	emptyFunction.thatReturnsThis = function () {
	  return this;
	};
	emptyFunction.thatReturnsArgument = function (arg) {
	  return arg;
	};

	module.exports = emptyFunction;

/***/ },
/* 518 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */

	var validateFormat = function validateFormat(format) {};

	if (false) {
	  validateFormat = function validateFormat(format) {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  };
	}

	function invariant(condition, format, a, b, c, d, e, f) {
	  validateFormat(format);

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(format.replace(/%s/g, function () {
	        return args[argIndex++];
	      }));
	      error.name = 'Invariant Violation';
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	}

	module.exports = invariant;

/***/ },
/* 519 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

	module.exports = ReactPropTypesSecret;


/***/ },
/* 520 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _propTypes = __webpack_require__(515);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	exports["default"] = _propTypes2["default"].shape({
	  subscribe: _propTypes2["default"].func.isRequired,
	  dispatch: _propTypes2["default"].func.isRequired,
	  getState: _propTypes2["default"].func.isRequired
	});

/***/ },
/* 521 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports["default"] = warning;
	/**
	 * Prints a warning in the console if it exists.
	 *
	 * @param {String} message The warning message.
	 * @returns {void}
	 */
	function warning(message) {
	  /* eslint-disable no-console */
	  if (typeof console !== 'undefined' && typeof console.error === 'function') {
	    console.error(message);
	  }
	  /* eslint-enable no-console */
	  try {
	    // This error was thrown as a convenience so that if you enable
	    // "break on all exceptions" in your console,
	    // it would pause the execution at this line.
	    throw new Error(message);
	    /* eslint-disable no-empty */
	  } catch (e) {}
	  /* eslint-enable no-empty */
	}

/***/ },
/* 522 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports["default"] = connect;

	var _react = __webpack_require__(1);

	var _storeShape = __webpack_require__(520);

	var _storeShape2 = _interopRequireDefault(_storeShape);

	var _shallowEqual = __webpack_require__(523);

	var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

	var _wrapActionCreators = __webpack_require__(524);

	var _wrapActionCreators2 = _interopRequireDefault(_wrapActionCreators);

	var _warning = __webpack_require__(521);

	var _warning2 = _interopRequireDefault(_warning);

	var _isPlainObject = __webpack_require__(527);

	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

	var _hoistNonReactStatics = __webpack_require__(545);

	var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

	var _invariant = __webpack_require__(546);

	var _invariant2 = _interopRequireDefault(_invariant);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var defaultMapStateToProps = function defaultMapStateToProps(state) {
	  return {};
	}; // eslint-disable-line no-unused-vars
	var defaultMapDispatchToProps = function defaultMapDispatchToProps(dispatch) {
	  return { dispatch: dispatch };
	};
	var defaultMergeProps = function defaultMergeProps(stateProps, dispatchProps, parentProps) {
	  return _extends({}, parentProps, stateProps, dispatchProps);
	};

	function getDisplayName(WrappedComponent) {
	  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
	}

	var errorObject = { value: null };
	function tryCatch(fn, ctx) {
	  try {
	    return fn.apply(ctx);
	  } catch (e) {
	    errorObject.value = e;
	    return errorObject;
	  }
	}

	// Helps track hot reloading.
	var nextVersion = 0;

	function connect(mapStateToProps, mapDispatchToProps, mergeProps) {
	  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

	  var shouldSubscribe = Boolean(mapStateToProps);
	  var mapState = mapStateToProps || defaultMapStateToProps;

	  var mapDispatch = void 0;
	  if (typeof mapDispatchToProps === 'function') {
	    mapDispatch = mapDispatchToProps;
	  } else if (!mapDispatchToProps) {
	    mapDispatch = defaultMapDispatchToProps;
	  } else {
	    mapDispatch = (0, _wrapActionCreators2["default"])(mapDispatchToProps);
	  }

	  var finalMergeProps = mergeProps || defaultMergeProps;
	  var _options$pure = options.pure,
	      pure = _options$pure === undefined ? true : _options$pure,
	      _options$withRef = options.withRef,
	      withRef = _options$withRef === undefined ? false : _options$withRef;

	  var checkMergedEquals = pure && finalMergeProps !== defaultMergeProps;

	  // Helps track hot reloading.
	  var version = nextVersion++;

	  return function wrapWithConnect(WrappedComponent) {
	    var connectDisplayName = 'Connect(' + getDisplayName(WrappedComponent) + ')';

	    function checkStateShape(props, methodName) {
	      if (!(0, _isPlainObject2["default"])(props)) {
	        (0, _warning2["default"])(methodName + '() in ' + connectDisplayName + ' must return a plain object. ' + ('Instead received ' + props + '.'));
	      }
	    }

	    function computeMergedProps(stateProps, dispatchProps, parentProps) {
	      var mergedProps = finalMergeProps(stateProps, dispatchProps, parentProps);
	      if (false) {
	        checkStateShape(mergedProps, 'mergeProps');
	      }
	      return mergedProps;
	    }

	    var Connect = function (_Component) {
	      _inherits(Connect, _Component);

	      Connect.prototype.shouldComponentUpdate = function shouldComponentUpdate() {
	        return !pure || this.haveOwnPropsChanged || this.hasStoreStateChanged;
	      };

	      function Connect(props, context) {
	        _classCallCheck(this, Connect);

	        var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

	        _this.version = version;
	        _this.store = props.store || context.store;

	        (0, _invariant2["default"])(_this.store, 'Could not find "store" in either the context or ' + ('props of "' + connectDisplayName + '". ') + 'Either wrap the root component in a <Provider>, ' + ('or explicitly pass "store" as a prop to "' + connectDisplayName + '".'));

	        var storeState = _this.store.getState();
	        _this.state = { storeState: storeState };
	        _this.clearCache();
	        return _this;
	      }

	      Connect.prototype.computeStateProps = function computeStateProps(store, props) {
	        if (!this.finalMapStateToProps) {
	          return this.configureFinalMapState(store, props);
	        }

	        var state = store.getState();
	        var stateProps = this.doStatePropsDependOnOwnProps ? this.finalMapStateToProps(state, props) : this.finalMapStateToProps(state);

	        if (false) {
	          checkStateShape(stateProps, 'mapStateToProps');
	        }
	        return stateProps;
	      };

	      Connect.prototype.configureFinalMapState = function configureFinalMapState(store, props) {
	        var mappedState = mapState(store.getState(), props);
	        var isFactory = typeof mappedState === 'function';

	        this.finalMapStateToProps = isFactory ? mappedState : mapState;
	        this.doStatePropsDependOnOwnProps = this.finalMapStateToProps.length !== 1;

	        if (isFactory) {
	          return this.computeStateProps(store, props);
	        }

	        if (false) {
	          checkStateShape(mappedState, 'mapStateToProps');
	        }
	        return mappedState;
	      };

	      Connect.prototype.computeDispatchProps = function computeDispatchProps(store, props) {
	        if (!this.finalMapDispatchToProps) {
	          return this.configureFinalMapDispatch(store, props);
	        }

	        var dispatch = store.dispatch;

	        var dispatchProps = this.doDispatchPropsDependOnOwnProps ? this.finalMapDispatchToProps(dispatch, props) : this.finalMapDispatchToProps(dispatch);

	        if (false) {
	          checkStateShape(dispatchProps, 'mapDispatchToProps');
	        }
	        return dispatchProps;
	      };

	      Connect.prototype.configureFinalMapDispatch = function configureFinalMapDispatch(store, props) {
	        var mappedDispatch = mapDispatch(store.dispatch, props);
	        var isFactory = typeof mappedDispatch === 'function';

	        this.finalMapDispatchToProps = isFactory ? mappedDispatch : mapDispatch;
	        this.doDispatchPropsDependOnOwnProps = this.finalMapDispatchToProps.length !== 1;

	        if (isFactory) {
	          return this.computeDispatchProps(store, props);
	        }

	        if (false) {
	          checkStateShape(mappedDispatch, 'mapDispatchToProps');
	        }
	        return mappedDispatch;
	      };

	      Connect.prototype.updateStatePropsIfNeeded = function updateStatePropsIfNeeded() {
	        var nextStateProps = this.computeStateProps(this.store, this.props);
	        if (this.stateProps && (0, _shallowEqual2["default"])(nextStateProps, this.stateProps)) {
	          return false;
	        }

	        this.stateProps = nextStateProps;
	        return true;
	      };

	      Connect.prototype.updateDispatchPropsIfNeeded = function updateDispatchPropsIfNeeded() {
	        var nextDispatchProps = this.computeDispatchProps(this.store, this.props);
	        if (this.dispatchProps && (0, _shallowEqual2["default"])(nextDispatchProps, this.dispatchProps)) {
	          return false;
	        }

	        this.dispatchProps = nextDispatchProps;
	        return true;
	      };

	      Connect.prototype.updateMergedPropsIfNeeded = function updateMergedPropsIfNeeded() {
	        var nextMergedProps = computeMergedProps(this.stateProps, this.dispatchProps, this.props);
	        if (this.mergedProps && checkMergedEquals && (0, _shallowEqual2["default"])(nextMergedProps, this.mergedProps)) {
	          return false;
	        }

	        this.mergedProps = nextMergedProps;
	        return true;
	      };

	      Connect.prototype.isSubscribed = function isSubscribed() {
	        return typeof this.unsubscribe === 'function';
	      };

	      Connect.prototype.trySubscribe = function trySubscribe() {
	        if (shouldSubscribe && !this.unsubscribe) {
	          this.unsubscribe = this.store.subscribe(this.handleChange.bind(this));
	          this.handleChange();
	        }
	      };

	      Connect.prototype.tryUnsubscribe = function tryUnsubscribe() {
	        if (this.unsubscribe) {
	          this.unsubscribe();
	          this.unsubscribe = null;
	        }
	      };

	      Connect.prototype.componentDidMount = function componentDidMount() {
	        this.trySubscribe();
	      };

	      Connect.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	        if (!pure || !(0, _shallowEqual2["default"])(nextProps, this.props)) {
	          this.haveOwnPropsChanged = true;
	        }
	      };

	      Connect.prototype.componentWillUnmount = function componentWillUnmount() {
	        this.tryUnsubscribe();
	        this.clearCache();
	      };

	      Connect.prototype.clearCache = function clearCache() {
	        this.dispatchProps = null;
	        this.stateProps = null;
	        this.mergedProps = null;
	        this.haveOwnPropsChanged = true;
	        this.hasStoreStateChanged = true;
	        this.haveStatePropsBeenPrecalculated = false;
	        this.statePropsPrecalculationError = null;
	        this.renderedElement = null;
	        this.finalMapDispatchToProps = null;
	        this.finalMapStateToProps = null;
	      };

	      Connect.prototype.handleChange = function handleChange() {
	        if (!this.unsubscribe) {
	          return;
	        }

	        var storeState = this.store.getState();
	        var prevStoreState = this.state.storeState;
	        if (pure && prevStoreState === storeState) {
	          return;
	        }

	        if (pure && !this.doStatePropsDependOnOwnProps) {
	          var haveStatePropsChanged = tryCatch(this.updateStatePropsIfNeeded, this);
	          if (!haveStatePropsChanged) {
	            return;
	          }
	          if (haveStatePropsChanged === errorObject) {
	            this.statePropsPrecalculationError = errorObject.value;
	          }
	          this.haveStatePropsBeenPrecalculated = true;
	        }

	        this.hasStoreStateChanged = true;
	        this.setState({ storeState: storeState });
	      };

	      Connect.prototype.getWrappedInstance = function getWrappedInstance() {
	        (0, _invariant2["default"])(withRef, 'To access the wrapped instance, you need to specify ' + '{ withRef: true } as the fourth argument of the connect() call.');

	        return this.refs.wrappedInstance;
	      };

	      Connect.prototype.render = function render() {
	        var haveOwnPropsChanged = this.haveOwnPropsChanged,
	            hasStoreStateChanged = this.hasStoreStateChanged,
	            haveStatePropsBeenPrecalculated = this.haveStatePropsBeenPrecalculated,
	            statePropsPrecalculationError = this.statePropsPrecalculationError,
	            renderedElement = this.renderedElement;


	        this.haveOwnPropsChanged = false;
	        this.hasStoreStateChanged = false;
	        this.haveStatePropsBeenPrecalculated = false;
	        this.statePropsPrecalculationError = null;

	        if (statePropsPrecalculationError) {
	          throw statePropsPrecalculationError;
	        }

	        var shouldUpdateStateProps = true;
	        var shouldUpdateDispatchProps = true;
	        if (pure && renderedElement) {
	          shouldUpdateStateProps = hasStoreStateChanged || haveOwnPropsChanged && this.doStatePropsDependOnOwnProps;
	          shouldUpdateDispatchProps = haveOwnPropsChanged && this.doDispatchPropsDependOnOwnProps;
	        }

	        var haveStatePropsChanged = false;
	        var haveDispatchPropsChanged = false;
	        if (haveStatePropsBeenPrecalculated) {
	          haveStatePropsChanged = true;
	        } else if (shouldUpdateStateProps) {
	          haveStatePropsChanged = this.updateStatePropsIfNeeded();
	        }
	        if (shouldUpdateDispatchProps) {
	          haveDispatchPropsChanged = this.updateDispatchPropsIfNeeded();
	        }

	        var haveMergedPropsChanged = true;
	        if (haveStatePropsChanged || haveDispatchPropsChanged || haveOwnPropsChanged) {
	          haveMergedPropsChanged = this.updateMergedPropsIfNeeded();
	        } else {
	          haveMergedPropsChanged = false;
	        }

	        if (!haveMergedPropsChanged && renderedElement) {
	          return renderedElement;
	        }

	        if (withRef) {
	          this.renderedElement = (0, _react.createElement)(WrappedComponent, _extends({}, this.mergedProps, {
	            ref: 'wrappedInstance'
	          }));
	        } else {
	          this.renderedElement = (0, _react.createElement)(WrappedComponent, this.mergedProps);
	        }

	        return this.renderedElement;
	      };

	      return Connect;
	    }(_react.Component);

	    Connect.displayName = connectDisplayName;
	    Connect.WrappedComponent = WrappedComponent;
	    Connect.contextTypes = {
	      store: _storeShape2["default"]
	    };
	    Connect.propTypes = {
	      store: _storeShape2["default"]
	    };

	    if (false) {
	      Connect.prototype.componentWillUpdate = function componentWillUpdate() {
	        if (this.version === version) {
	          return;
	        }

	        // We are hot reloading!
	        this.version = version;
	        this.trySubscribe();
	        this.clearCache();
	      };
	    }

	    return (0, _hoistNonReactStatics2["default"])(Connect, WrappedComponent);
	  };
	}

/***/ },
/* 523 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports["default"] = shallowEqual;
	function shallowEqual(objA, objB) {
	  if (objA === objB) {
	    return true;
	  }

	  var keysA = Object.keys(objA);
	  var keysB = Object.keys(objB);

	  if (keysA.length !== keysB.length) {
	    return false;
	  }

	  // Test for A's keys different from B.
	  var hasOwn = Object.prototype.hasOwnProperty;
	  for (var i = 0; i < keysA.length; i++) {
	    if (!hasOwn.call(objB, keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
	      return false;
	    }
	  }

	  return true;
	}

/***/ },
/* 524 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports["default"] = wrapActionCreators;

	var _redux = __webpack_require__(525);

	function wrapActionCreators(actionCreators) {
	  return function (dispatch) {
	    return (0, _redux.bindActionCreators)(actionCreators, dispatch);
	  };
	}

/***/ },
/* 525 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.compose = exports.applyMiddleware = exports.bindActionCreators = exports.combineReducers = exports.createStore = undefined;

	var _createStore = __webpack_require__(526);

	var _createStore2 = _interopRequireDefault(_createStore);

	var _combineReducers = __webpack_require__(540);

	var _combineReducers2 = _interopRequireDefault(_combineReducers);

	var _bindActionCreators = __webpack_require__(542);

	var _bindActionCreators2 = _interopRequireDefault(_bindActionCreators);

	var _applyMiddleware = __webpack_require__(543);

	var _applyMiddleware2 = _interopRequireDefault(_applyMiddleware);

	var _compose = __webpack_require__(544);

	var _compose2 = _interopRequireDefault(_compose);

	var _warning = __webpack_require__(541);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	/*
	* This is a dummy function to check if the function name has been altered by minification.
	* If the function has been minified and NODE_ENV !== 'production', warn the user.
	*/
	function isCrushed() {}

	if (false) {
	  (0, _warning2['default'])('You are currently using minified code outside of NODE_ENV === \'production\'. ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) ' + 'to ensure you have the correct code for your production build.');
	}

	exports.createStore = _createStore2['default'];
	exports.combineReducers = _combineReducers2['default'];
	exports.bindActionCreators = _bindActionCreators2['default'];
	exports.applyMiddleware = _applyMiddleware2['default'];
	exports.compose = _compose2['default'];

/***/ },
/* 526 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.ActionTypes = undefined;
	exports['default'] = createStore;

	var _isPlainObject = __webpack_require__(527);

	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

	var _symbolObservable = __webpack_require__(537);

	var _symbolObservable2 = _interopRequireDefault(_symbolObservable);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	/**
	 * These are private action types reserved by Redux.
	 * For any unknown actions, you must return the current state.
	 * If the current state is undefined, you must return the initial state.
	 * Do not reference these action types directly in your code.
	 */
	var ActionTypes = exports.ActionTypes = {
	  INIT: '@@redux/INIT'

	  /**
	   * Creates a Redux store that holds the state tree.
	   * The only way to change the data in the store is to call `dispatch()` on it.
	   *
	   * There should only be a single store in your app. To specify how different
	   * parts of the state tree respond to actions, you may combine several reducers
	   * into a single reducer function by using `combineReducers`.
	   *
	   * @param {Function} reducer A function that returns the next state tree, given
	   * the current state tree and the action to handle.
	   *
	   * @param {any} [preloadedState] The initial state. You may optionally specify it
	   * to hydrate the state from the server in universal apps, or to restore a
	   * previously serialized user session.
	   * If you use `combineReducers` to produce the root reducer function, this must be
	   * an object with the same shape as `combineReducers` keys.
	   *
	   * @param {Function} [enhancer] The store enhancer. You may optionally specify it
	   * to enhance the store with third-party capabilities such as middleware,
	   * time travel, persistence, etc. The only store enhancer that ships with Redux
	   * is `applyMiddleware()`.
	   *
	   * @returns {Store} A Redux store that lets you read the state, dispatch actions
	   * and subscribe to changes.
	   */
	};function createStore(reducer, preloadedState, enhancer) {
	  var _ref2;

	  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
	    enhancer = preloadedState;
	    preloadedState = undefined;
	  }

	  if (typeof enhancer !== 'undefined') {
	    if (typeof enhancer !== 'function') {
	      throw new Error('Expected the enhancer to be a function.');
	    }

	    return enhancer(createStore)(reducer, preloadedState);
	  }

	  if (typeof reducer !== 'function') {
	    throw new Error('Expected the reducer to be a function.');
	  }

	  var currentReducer = reducer;
	  var currentState = preloadedState;
	  var currentListeners = [];
	  var nextListeners = currentListeners;
	  var isDispatching = false;

	  function ensureCanMutateNextListeners() {
	    if (nextListeners === currentListeners) {
	      nextListeners = currentListeners.slice();
	    }
	  }

	  /**
	   * Reads the state tree managed by the store.
	   *
	   * @returns {any} The current state tree of your application.
	   */
	  function getState() {
	    return currentState;
	  }

	  /**
	   * Adds a change listener. It will be called any time an action is dispatched,
	   * and some part of the state tree may potentially have changed. You may then
	   * call `getState()` to read the current state tree inside the callback.
	   *
	   * You may call `dispatch()` from a change listener, with the following
	   * caveats:
	   *
	   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
	   * If you subscribe or unsubscribe while the listeners are being invoked, this
	   * will not have any effect on the `dispatch()` that is currently in progress.
	   * However, the next `dispatch()` call, whether nested or not, will use a more
	   * recent snapshot of the subscription list.
	   *
	   * 2. The listener should not expect to see all state changes, as the state
	   * might have been updated multiple times during a nested `dispatch()` before
	   * the listener is called. It is, however, guaranteed that all subscribers
	   * registered before the `dispatch()` started will be called with the latest
	   * state by the time it exits.
	   *
	   * @param {Function} listener A callback to be invoked on every dispatch.
	   * @returns {Function} A function to remove this change listener.
	   */
	  function subscribe(listener) {
	    if (typeof listener !== 'function') {
	      throw new Error('Expected listener to be a function.');
	    }

	    var isSubscribed = true;

	    ensureCanMutateNextListeners();
	    nextListeners.push(listener);

	    return function unsubscribe() {
	      if (!isSubscribed) {
	        return;
	      }

	      isSubscribed = false;

	      ensureCanMutateNextListeners();
	      var index = nextListeners.indexOf(listener);
	      nextListeners.splice(index, 1);
	    };
	  }

	  /**
	   * Dispatches an action. It is the only way to trigger a state change.
	   *
	   * The `reducer` function, used to create the store, will be called with the
	   * current state tree and the given `action`. Its return value will
	   * be considered the **next** state of the tree, and the change listeners
	   * will be notified.
	   *
	   * The base implementation only supports plain object actions. If you want to
	   * dispatch a Promise, an Observable, a thunk, or something else, you need to
	   * wrap your store creating function into the corresponding middleware. For
	   * example, see the documentation for the `redux-thunk` package. Even the
	   * middleware will eventually dispatch plain object actions using this method.
	   *
	   * @param {Object} action A plain object representing “what changed”. It is
	   * a good idea to keep actions serializable so you can record and replay user
	   * sessions, or use the time travelling `redux-devtools`. An action must have
	   * a `type` property which may not be `undefined`. It is a good idea to use
	   * string constants for action types.
	   *
	   * @returns {Object} For convenience, the same action object you dispatched.
	   *
	   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
	   * return something else (for example, a Promise you can await).
	   */
	  function dispatch(action) {
	    if (!(0, _isPlainObject2['default'])(action)) {
	      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
	    }

	    if (typeof action.type === 'undefined') {
	      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
	    }

	    if (isDispatching) {
	      throw new Error('Reducers may not dispatch actions.');
	    }

	    try {
	      isDispatching = true;
	      currentState = currentReducer(currentState, action);
	    } finally {
	      isDispatching = false;
	    }

	    var listeners = currentListeners = nextListeners;
	    for (var i = 0; i < listeners.length; i++) {
	      var listener = listeners[i];
	      listener();
	    }

	    return action;
	  }

	  /**
	   * Replaces the reducer currently used by the store to calculate the state.
	   *
	   * You might need this if your app implements code splitting and you want to
	   * load some of the reducers dynamically. You might also need this if you
	   * implement a hot reloading mechanism for Redux.
	   *
	   * @param {Function} nextReducer The reducer for the store to use instead.
	   * @returns {void}
	   */
	  function replaceReducer(nextReducer) {
	    if (typeof nextReducer !== 'function') {
	      throw new Error('Expected the nextReducer to be a function.');
	    }

	    currentReducer = nextReducer;
	    dispatch({ type: ActionTypes.INIT });
	  }

	  /**
	   * Interoperability point for observable/reactive libraries.
	   * @returns {observable} A minimal observable of state changes.
	   * For more information, see the observable proposal:
	   * https://github.com/tc39/proposal-observable
	   */
	  function observable() {
	    var _ref;

	    var outerSubscribe = subscribe;
	    return _ref = {
	      /**
	       * The minimal observable subscription method.
	       * @param {Object} observer Any object that can be used as an observer.
	       * The observer object should have a `next` method.
	       * @returns {subscription} An object with an `unsubscribe` method that can
	       * be used to unsubscribe the observable from the store, and prevent further
	       * emission of values from the observable.
	       */
	      subscribe: function subscribe(observer) {
	        if (typeof observer !== 'object') {
	          throw new TypeError('Expected the observer to be an object.');
	        }

	        function observeState() {
	          if (observer.next) {
	            observer.next(getState());
	          }
	        }

	        observeState();
	        var unsubscribe = outerSubscribe(observeState);
	        return { unsubscribe: unsubscribe };
	      }
	    }, _ref[_symbolObservable2['default']] = function () {
	      return this;
	    }, _ref;
	  }

	  // When a store is created, an "INIT" action is dispatched so that every
	  // reducer returns their initial state. This effectively populates
	  // the initial state tree.
	  dispatch({ type: ActionTypes.INIT });

	  return _ref2 = {
	    dispatch: dispatch,
	    subscribe: subscribe,
	    getState: getState,
	    replaceReducer: replaceReducer
	  }, _ref2[_symbolObservable2['default']] = observable, _ref2;
	}

/***/ },
/* 527 */
/***/ function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(528),
	    getPrototype = __webpack_require__(534),
	    isObjectLike = __webpack_require__(536);

	/** `Object#toString` result references. */
	var objectTag = '[object Object]';

	/** Used for built-in method references. */
	var funcProto = Function.prototype,
	    objectProto = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/** Used to infer the `Object` constructor. */
	var objectCtorString = funcToString.call(Object);

	/**
	 * Checks if `value` is a plain object, that is, an object created by the
	 * `Object` constructor or one with a `[[Prototype]]` of `null`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.8.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * _.isPlainObject(new Foo);
	 * // => false
	 *
	 * _.isPlainObject([1, 2, 3]);
	 * // => false
	 *
	 * _.isPlainObject({ 'x': 0, 'y': 0 });
	 * // => true
	 *
	 * _.isPlainObject(Object.create(null));
	 * // => true
	 */
	function isPlainObject(value) {
	  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
	    return false;
	  }
	  var proto = getPrototype(value);
	  if (proto === null) {
	    return true;
	  }
	  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
	  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
	    funcToString.call(Ctor) == objectCtorString;
	}

	module.exports = isPlainObject;


/***/ },
/* 528 */
/***/ function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(529),
	    getRawTag = __webpack_require__(532),
	    objectToString = __webpack_require__(533);

	/** `Object#toString` result references. */
	var nullTag = '[object Null]',
	    undefinedTag = '[object Undefined]';

	/** Built-in value references. */
	var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

	/**
	 * The base implementation of `getTag` without fallbacks for buggy environments.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	function baseGetTag(value) {
	  if (value == null) {
	    return value === undefined ? undefinedTag : nullTag;
	  }
	  return (symToStringTag && symToStringTag in Object(value))
	    ? getRawTag(value)
	    : objectToString(value);
	}

	module.exports = baseGetTag;


/***/ },
/* 529 */
/***/ function(module, exports, __webpack_require__) {

	var root = __webpack_require__(530);

	/** Built-in value references. */
	var Symbol = root.Symbol;

	module.exports = Symbol;


/***/ },
/* 530 */
/***/ function(module, exports, __webpack_require__) {

	var freeGlobal = __webpack_require__(531);

	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();

	module.exports = root;


/***/ },
/* 531 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

	module.exports = freeGlobal;

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 532 */
/***/ function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(529);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;

	/** Built-in value references. */
	var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

	/**
	 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the raw `toStringTag`.
	 */
	function getRawTag(value) {
	  var isOwn = hasOwnProperty.call(value, symToStringTag),
	      tag = value[symToStringTag];

	  try {
	    value[symToStringTag] = undefined;
	    var unmasked = true;
	  } catch (e) {}

	  var result = nativeObjectToString.call(value);
	  if (unmasked) {
	    if (isOwn) {
	      value[symToStringTag] = tag;
	    } else {
	      delete value[symToStringTag];
	    }
	  }
	  return result;
	}

	module.exports = getRawTag;


/***/ },
/* 533 */
/***/ function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;

	/**
	 * Converts `value` to a string using `Object.prototype.toString`.
	 *
	 * @private
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 */
	function objectToString(value) {
	  return nativeObjectToString.call(value);
	}

	module.exports = objectToString;


/***/ },
/* 534 */
/***/ function(module, exports, __webpack_require__) {

	var overArg = __webpack_require__(535);

	/** Built-in value references. */
	var getPrototype = overArg(Object.getPrototypeOf, Object);

	module.exports = getPrototype;


/***/ },
/* 535 */
/***/ function(module, exports) {

	/**
	 * Creates a unary function that invokes `func` with its argument transformed.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {Function} transform The argument transform.
	 * @returns {Function} Returns the new function.
	 */
	function overArg(func, transform) {
	  return function(arg) {
	    return func(transform(arg));
	  };
	}

	module.exports = overArg;


/***/ },
/* 536 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return value != null && typeof value == 'object';
	}

	module.exports = isObjectLike;


/***/ },
/* 537 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(538);


/***/ },
/* 538 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, module) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ponyfill = __webpack_require__(539);

	var _ponyfill2 = _interopRequireDefault(_ponyfill);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var root; /* global window */


	if (typeof self !== 'undefined') {
	  root = self;
	} else if (typeof window !== 'undefined') {
	  root = window;
	} else if (typeof global !== 'undefined') {
	  root = global;
	} else if (true) {
	  root = module;
	} else {
	  root = Function('return this')();
	}

	var result = (0, _ponyfill2['default'])(root);
	exports['default'] = result;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(187)(module)))

/***/ },
/* 539 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports['default'] = symbolObservablePonyfill;
	function symbolObservablePonyfill(root) {
		var result;
		var _Symbol = root.Symbol;

		if (typeof _Symbol === 'function') {
			if (_Symbol.observable) {
				result = _Symbol.observable;
			} else {
				result = _Symbol('observable');
				_Symbol.observable = result;
			}
		} else {
			result = '@@observable';
		}

		return result;
	};

/***/ },
/* 540 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = combineReducers;

	var _createStore = __webpack_require__(526);

	var _isPlainObject = __webpack_require__(527);

	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

	var _warning = __webpack_require__(541);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function getUndefinedStateErrorMessage(key, action) {
	  var actionType = action && action.type;
	  var actionName = actionType && '"' + actionType.toString() + '"' || 'an action';

	  return 'Given action ' + actionName + ', reducer "' + key + '" returned undefined. ' + 'To ignore an action, you must explicitly return the previous state. ' + 'If you want this reducer to hold no value, you can return null instead of undefined.';
	}

	function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
	  var reducerKeys = Object.keys(reducers);
	  var argumentName = action && action.type === _createStore.ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

	  if (reducerKeys.length === 0) {
	    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
	  }

	  if (!(0, _isPlainObject2['default'])(inputState)) {
	    return 'The ' + argumentName + ' has unexpected type of "' + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + '". Expected argument to be an object with the following ' + ('keys: "' + reducerKeys.join('", "') + '"');
	  }

	  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
	    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
	  });

	  unexpectedKeys.forEach(function (key) {
	    unexpectedKeyCache[key] = true;
	  });

	  if (unexpectedKeys.length > 0) {
	    return 'Unexpected ' + (unexpectedKeys.length > 1 ? 'keys' : 'key') + ' ' + ('"' + unexpectedKeys.join('", "') + '" found in ' + argumentName + '. ') + 'Expected to find one of the known reducer keys instead: ' + ('"' + reducerKeys.join('", "') + '". Unexpected keys will be ignored.');
	  }
	}

	function assertReducerShape(reducers) {
	  Object.keys(reducers).forEach(function (key) {
	    var reducer = reducers[key];
	    var initialState = reducer(undefined, { type: _createStore.ActionTypes.INIT });

	    if (typeof initialState === 'undefined') {
	      throw new Error('Reducer "' + key + '" returned undefined during initialization. ' + 'If the state passed to the reducer is undefined, you must ' + 'explicitly return the initial state. The initial state may ' + 'not be undefined. If you don\'t want to set a value for this reducer, ' + 'you can use null instead of undefined.');
	    }

	    var type = '@@redux/PROBE_UNKNOWN_ACTION_' + Math.random().toString(36).substring(7).split('').join('.');
	    if (typeof reducer(undefined, { type: type }) === 'undefined') {
	      throw new Error('Reducer "' + key + '" returned undefined when probed with a random type. ' + ('Don\'t try to handle ' + _createStore.ActionTypes.INIT + ' or other actions in "redux/*" ') + 'namespace. They are considered private. Instead, you must return the ' + 'current state for any unknown actions, unless it is undefined, ' + 'in which case you must return the initial state, regardless of the ' + 'action type. The initial state may not be undefined, but can be null.');
	    }
	  });
	}

	/**
	 * Turns an object whose values are different reducer functions, into a single
	 * reducer function. It will call every child reducer, and gather their results
	 * into a single state object, whose keys correspond to the keys of the passed
	 * reducer functions.
	 *
	 * @param {Object} reducers An object whose values correspond to different
	 * reducer functions that need to be combined into one. One handy way to obtain
	 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
	 * undefined for any action. Instead, they should return their initial state
	 * if the state passed to them was undefined, and the current state for any
	 * unrecognized action.
	 *
	 * @returns {Function} A reducer function that invokes every reducer inside the
	 * passed object, and builds a state object with the same shape.
	 */
	function combineReducers(reducers) {
	  var reducerKeys = Object.keys(reducers);
	  var finalReducers = {};
	  for (var i = 0; i < reducerKeys.length; i++) {
	    var key = reducerKeys[i];

	    if (false) {
	      if (typeof reducers[key] === 'undefined') {
	        (0, _warning2['default'])('No reducer provided for key "' + key + '"');
	      }
	    }

	    if (typeof reducers[key] === 'function') {
	      finalReducers[key] = reducers[key];
	    }
	  }
	  var finalReducerKeys = Object.keys(finalReducers);

	  var unexpectedKeyCache = void 0;
	  if (false) {
	    unexpectedKeyCache = {};
	  }

	  var shapeAssertionError = void 0;
	  try {
	    assertReducerShape(finalReducers);
	  } catch (e) {
	    shapeAssertionError = e;
	  }

	  return function combination() {
	    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	    var action = arguments[1];

	    if (shapeAssertionError) {
	      throw shapeAssertionError;
	    }

	    if (false) {
	      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);
	      if (warningMessage) {
	        (0, _warning2['default'])(warningMessage);
	      }
	    }

	    var hasChanged = false;
	    var nextState = {};
	    for (var _i = 0; _i < finalReducerKeys.length; _i++) {
	      var _key = finalReducerKeys[_i];
	      var reducer = finalReducers[_key];
	      var previousStateForKey = state[_key];
	      var nextStateForKey = reducer(previousStateForKey, action);
	      if (typeof nextStateForKey === 'undefined') {
	        var errorMessage = getUndefinedStateErrorMessage(_key, action);
	        throw new Error(errorMessage);
	      }
	      nextState[_key] = nextStateForKey;
	      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
	    }
	    return hasChanged ? nextState : state;
	  };
	}

/***/ },
/* 541 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = warning;
	/**
	 * Prints a warning in the console if it exists.
	 *
	 * @param {String} message The warning message.
	 * @returns {void}
	 */
	function warning(message) {
	  /* eslint-disable no-console */
	  if (typeof console !== 'undefined' && typeof console.error === 'function') {
	    console.error(message);
	  }
	  /* eslint-enable no-console */
	  try {
	    // This error was thrown as a convenience so that if you enable
	    // "break on all exceptions" in your console,
	    // it would pause the execution at this line.
	    throw new Error(message);
	    /* eslint-disable no-empty */
	  } catch (e) {}
	  /* eslint-enable no-empty */
	}

/***/ },
/* 542 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = bindActionCreators;
	function bindActionCreator(actionCreator, dispatch) {
	  return function () {
	    return dispatch(actionCreator.apply(undefined, arguments));
	  };
	}

	/**
	 * Turns an object whose values are action creators, into an object with the
	 * same keys, but with every function wrapped into a `dispatch` call so they
	 * may be invoked directly. This is just a convenience method, as you can call
	 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
	 *
	 * For convenience, you can also pass a single function as the first argument,
	 * and get a function in return.
	 *
	 * @param {Function|Object} actionCreators An object whose values are action
	 * creator functions. One handy way to obtain it is to use ES6 `import * as`
	 * syntax. You may also pass a single function.
	 *
	 * @param {Function} dispatch The `dispatch` function available on your Redux
	 * store.
	 *
	 * @returns {Function|Object} The object mimicking the original object, but with
	 * every action creator wrapped into the `dispatch` call. If you passed a
	 * function as `actionCreators`, the return value will also be a single
	 * function.
	 */
	function bindActionCreators(actionCreators, dispatch) {
	  if (typeof actionCreators === 'function') {
	    return bindActionCreator(actionCreators, dispatch);
	  }

	  if (typeof actionCreators !== 'object' || actionCreators === null) {
	    throw new Error('bindActionCreators expected an object or a function, instead received ' + (actionCreators === null ? 'null' : typeof actionCreators) + '. ' + 'Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
	  }

	  var keys = Object.keys(actionCreators);
	  var boundActionCreators = {};
	  for (var i = 0; i < keys.length; i++) {
	    var key = keys[i];
	    var actionCreator = actionCreators[key];
	    if (typeof actionCreator === 'function') {
	      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
	    }
	  }
	  return boundActionCreators;
	}

/***/ },
/* 543 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports['default'] = applyMiddleware;

	var _compose = __webpack_require__(544);

	var _compose2 = _interopRequireDefault(_compose);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	/**
	 * Creates a store enhancer that applies middleware to the dispatch method
	 * of the Redux store. This is handy for a variety of tasks, such as expressing
	 * asynchronous actions in a concise manner, or logging every action payload.
	 *
	 * See `redux-thunk` package as an example of the Redux middleware.
	 *
	 * Because middleware is potentially asynchronous, this should be the first
	 * store enhancer in the composition chain.
	 *
	 * Note that each middleware will be given the `dispatch` and `getState` functions
	 * as named arguments.
	 *
	 * @param {...Function} middlewares The middleware chain to be applied.
	 * @returns {Function} A store enhancer applying the middleware.
	 */
	function applyMiddleware() {
	  for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
	    middlewares[_key] = arguments[_key];
	  }

	  return function (createStore) {
	    return function (reducer, preloadedState, enhancer) {
	      var store = createStore(reducer, preloadedState, enhancer);
	      var _dispatch = store.dispatch;
	      var chain = [];

	      var middlewareAPI = {
	        getState: store.getState,
	        dispatch: function dispatch(action) {
	          return _dispatch(action);
	        }
	      };
	      chain = middlewares.map(function (middleware) {
	        return middleware(middlewareAPI);
	      });
	      _dispatch = _compose2['default'].apply(undefined, chain)(store.dispatch);

	      return _extends({}, store, {
	        dispatch: _dispatch
	      });
	    };
	  };
	}

/***/ },
/* 544 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports["default"] = compose;
	/**
	 * Composes single-argument functions from right to left. The rightmost
	 * function can take multiple arguments as it provides the signature for
	 * the resulting composite function.
	 *
	 * @param {...Function} funcs The functions to compose.
	 * @returns {Function} A function obtained by composing the argument functions
	 * from right to left. For example, compose(f, g, h) is identical to doing
	 * (...args) => f(g(h(...args))).
	 */

	function compose() {
	  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
	    funcs[_key] = arguments[_key];
	  }

	  if (funcs.length === 0) {
	    return function (arg) {
	      return arg;
	    };
	  }

	  if (funcs.length === 1) {
	    return funcs[0];
	  }

	  return funcs.reduce(function (a, b) {
	    return function () {
	      return a(b.apply(undefined, arguments));
	    };
	  });
	}

/***/ },
/* 545 */
/***/ function(module, exports) {

	/**
	 * Copyright 2015, Yahoo! Inc.
	 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
	 */
	'use strict';

	var REACT_STATICS = {
	    childContextTypes: true,
	    contextTypes: true,
	    defaultProps: true,
	    displayName: true,
	    getDefaultProps: true,
	    mixins: true,
	    propTypes: true,
	    type: true
	};

	var KNOWN_STATICS = {
	    name: true,
	    length: true,
	    prototype: true,
	    caller: true,
	    arguments: true,
	    arity: true
	};

	var isGetOwnPropertySymbolsAvailable = typeof Object.getOwnPropertySymbols === 'function';

	module.exports = function hoistNonReactStatics(targetComponent, sourceComponent, customStatics) {
	    if (typeof sourceComponent !== 'string') { // don't hoist over string (html) components
	        var keys = Object.getOwnPropertyNames(sourceComponent);

	        /* istanbul ignore else */
	        if (isGetOwnPropertySymbolsAvailable) {
	            keys = keys.concat(Object.getOwnPropertySymbols(sourceComponent));
	        }

	        for (var i = 0; i < keys.length; ++i) {
	            if (!REACT_STATICS[keys[i]] && !KNOWN_STATICS[keys[i]] && (!customStatics || !customStatics[keys[i]])) {
	                try {
	                    targetComponent[keys[i]] = sourceComponent[keys[i]];
	                } catch (error) {

	                }
	            }
	        }
	    }

	    return targetComponent;
	};


/***/ },
/* 546 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */

	var invariant = function(condition, format, a, b, c, d, e, f) {
	  if (false) {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  }

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error(
	        'Minified exception occurred; use the non-minified dev environment ' +
	        'for the full error message and additional helpful warnings.'
	      );
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(
	        format.replace(/%s/g, function() { return args[argIndex++]; })
	      );
	      error.name = 'Invariant Violation';
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	};

	module.exports = invariant;


/***/ },
/* 547 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(1);

	var _require = __webpack_require__(513),
	    connect = _require.connect;

	var _require2 = __webpack_require__(489),
	    StyleSheet = _require2.StyleSheet;

	var _require3 = __webpack_require__(487),
	    View = _require3.View;

	var FractionKeypad = __webpack_require__(548);
	var ExpressionKeypad = __webpack_require__(626);
	var NavigationPad = __webpack_require__(632);
	var zIndexes = __webpack_require__(618);

	var _require4 = __webpack_require__(551),
	    setPageSize = _require4.setPageSize;

	var _require5 = __webpack_require__(611),
	    keyIdPropType = _require5.keyIdPropType;

	var _require6 = __webpack_require__(610),
	    KeypadTypes = _require6.KeypadTypes,
	    LayoutModes = _require6.LayoutModes;

	var _require7 = __webpack_require__(563),
	    row = _require7.row,
	    centered = _require7.centered,
	    fullWidth = _require7.fullWidth;

	var _require8 = __webpack_require__(564),
	    innerBorderColor = _require8.innerBorderColor,
	    innerBorderStyle = _require8.innerBorderStyle,
	    innerBorderWidthPx = _require8.innerBorderWidthPx,
	    compactKeypadBorderRadiusPx = _require8.compactKeypadBorderRadiusPx;

	var KeypadContainer = function (_React$Component) {
	    _inherits(KeypadContainer, _React$Component);

	    function KeypadContainer() {
	        var _ref;

	        var _temp, _this, _ret;

	        _classCallCheck(this, KeypadContainer);

	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }

	        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = KeypadContainer.__proto__ || Object.getPrototypeOf(KeypadContainer)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
	            hasBeenActivated: false,
	            viewportWidth: "100vw"
	        }, _this._throttleResizeHandler = function () {
	            // Throttle the resize callbacks.
	            // https://developer.mozilla.org/en-US/docs/Web/Events/resize
	            if (_this._resizeTimeout == null) {
	                _this._resizeTimeout = setTimeout(function () {
	                    _this._resizeTimeout = null;

	                    _this._onResize();
	                }, 66);
	            }
	        }, _this._onResize = function () {
	            // Whenever the page resizes, we need to force an update, as the button
	            // heights and keypad width are computed based on horizontal space.
	            _this.setState({
	                viewportWidth: window.innerWidth
	            });

	            _this.props.onPageSizeChange(window.innerWidth, window.innerHeight);
	        }, _this.renderKeypad = function () {
	            var _this$props = _this.props,
	                extraKeys = _this$props.extraKeys,
	                keypadType = _this$props.keypadType,
	                layoutMode = _this$props.layoutMode,
	                navigationPadEnabled = _this$props.navigationPadEnabled;


	            var keypadProps = {
	                extraKeys: extraKeys,
	                // HACK(charlie): In order to properly round the corners of the
	                // compact keypad, we need to instruct some of our child views to
	                // crop themselves. At least we're colocating all the layout
	                // information in this component, though.
	                roundTopLeft: layoutMode === LayoutModes.COMPACT && !navigationPadEnabled,
	                roundTopRight: layoutMode === LayoutModes.COMPACT
	            };

	            // Select the appropriate keyboard given the type.
	            // TODO(charlie): In the future, we might want to move towards a
	            // data-driven approach to defining keyboard layouts, and have a
	            // generic keyboard that takes some "keyboard data" and renders it.
	            // However, the keyboards differ pretty heavily right now and it's not
	            // clear what that format would look like exactly. Plus, there aren't
	            // very many of them. So to keep us moving, we'll just hardcode.
	            switch (keypadType) {
	                case KeypadTypes.FRACTION:
	                    return React.createElement(FractionKeypad, keypadProps);

	                case KeypadTypes.EXPRESSION:
	                    return React.createElement(ExpressionKeypad, keypadProps);

	                default:
	                    throw new Error("Invalid keypad type: " + keypadType);
	            }
	        }, _temp), _possibleConstructorReturn(_this, _ret);
	    }

	    _createClass(KeypadContainer, [{
	        key: 'componentWillMount',
	        value: function componentWillMount() {
	            if (this.props.active) {
	                this.setState({
	                    hasBeenActivated: this.props.active
	                });
	            }
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            // Relay the initial size metrics.
	            this._onResize();

	            // And update it on resize.
	            window.addEventListener("resize", this._throttleResizeHandler);
	            window.addEventListener("orientationchange", this._throttleResizeHandler);
	        }
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            if (!this.state.hasBeenActivated && nextProps.active) {
	                this.setState({
	                    hasBeenActivated: true
	                });
	            }
	        }
	    }, {
	        key: 'componentDidUpdate',
	        value: function componentDidUpdate(prevProps) {
	            if (prevProps.active && !this.props.active) {
	                this.props.onDismiss && this.props.onDismiss();
	            }
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            window.removeEventListener("resize", this._throttleResizeHandler);
	            window.removeEventListener("orientationchange", this._throttleResizeHandler);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            var _props = this.props,
	                active = _props.active,
	                layoutMode = _props.layoutMode,
	                navigationPadEnabled = _props.navigationPadEnabled,
	                onElementMounted = _props.onElementMounted,
	                style = _props.style;
	            var hasBeenActivated = this.state.hasBeenActivated;

	            // NOTE(charlie): We render the transforms as pure inline styles to
	            // avoid an Aphrodite bug in mobile Safari.
	            //   See: https://github.com/Khan/aphrodite/issues/68.

	            var dynamicStyle = _extends({}, active ? inlineStyles.active : inlineStyles.hidden, !active && !hasBeenActivated ? inlineStyles.invisible : {});

	            var keypadContainerStyle = [row, centered, fullWidth, styles.keypadContainer].concat(_toConsumableArray(Array.isArray(style) ? style : [style]));

	            var keypadStyle = [row, styles.keypadBorder, layoutMode === LayoutModes.FULLSCREEN ? styles.fullscreen : styles.compact];

	            // TODO(charlie): When the keypad is shorter than the width of the
	            // screen, add a border on its left and right edges, and round out the
	            // corners.
	            return React.createElement(
	                View,
	                {
	                    style: keypadContainerStyle,
	                    dynamicStyle: dynamicStyle,
	                    extraClassName: 'keypad-container'
	                },
	                React.createElement(
	                    View,
	                    {
	                        style: keypadStyle,
	                        ref: function ref(element) {
	                            if (!_this2.hasMounted && element) {
	                                _this2.hasMounted = true;
	                                onElementMounted(element);
	                            }
	                        }
	                    },
	                    navigationPadEnabled && React.createElement(NavigationPad, {
	                        roundTopLeft: layoutMode === LayoutModes.COMPACT,
	                        style: styles.navigationPadContainer
	                    }),
	                    React.createElement(
	                        View,
	                        { style: styles.keypadLayout },
	                        this.renderKeypad()
	                    )
	                )
	            );
	        }
	    }]);

	    return KeypadContainer;
	}(React.Component);

	KeypadContainer.propTypes = {
	    active: React.PropTypes.bool,
	    extraKeys: React.PropTypes.arrayOf(keyIdPropType),
	    keypadType: React.PropTypes.oneOf(Object.keys(KeypadTypes)).isRequired,
	    layoutMode: React.PropTypes.oneOf(Object.keys(LayoutModes)).isRequired,
	    navigationPadEnabled: React.PropTypes.bool.isRequired,
	    onDismiss: React.PropTypes.func,
	    // A callback that should be triggered with the root React element on
	    // mount.
	    onElementMounted: React.PropTypes.func,
	    onPageSizeChange: React.PropTypes.func.isRequired,
	    style: React.PropTypes.any
	};


	var keypadAnimationDurationMs = 300;
	var borderWidthPx = 1;

	var styles = StyleSheet.create({
	    keypadContainer: {
	        bottom: 0,
	        left: 0,
	        right: 0,
	        position: 'fixed',
	        transition: keypadAnimationDurationMs + 'ms ease-out',
	        transitionProperty: 'transform',
	        zIndex: zIndexes.keypad
	    },

	    keypadBorder: {
	        boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.1)',
	        borderColor: 'rgba(0, 0, 0, 0.2)',
	        borderStyle: 'solid'
	    },

	    fullscreen: {
	        borderTopWidth: borderWidthPx
	    },

	    compact: {
	        borderTopRightRadius: compactKeypadBorderRadiusPx,
	        borderTopLeftRadius: compactKeypadBorderRadiusPx,

	        borderTopWidth: borderWidthPx,
	        borderRightWidth: borderWidthPx,
	        borderLeftWidth: borderWidthPx
	    },

	    navigationPadContainer: {
	        // Add a separator between the navigation pad and the keypad.
	        borderRight: innerBorderWidthPx + 'px ' + innerBorderStyle + ' ' + ('' + innerBorderColor),
	        boxSizing: 'content-box'
	    },

	    // Defer to the navigation pad, such that the navigation pad is always
	    // rendered at full-width, and the keypad takes up just the remaining space.
	    // TODO(charlie): Avoid shrinking the keys and, instead, make the keypad
	    // scrollable.
	    keypadLayout: {
	        flexGrow: 1,
	        // Avoid unitless flex-basis, per: https://philipwalton.com/articles/normalizing-cross-browser-flexbox-bugs/
	        flexBasis: '0%'
	    }
	});

	// Note: these don't go through an autoprefixer/aphrodite.
	var inlineStyles = {
	    // If the keypad is yet to have ever been activated, we keep it invisible
	    // so as to avoid, e.g., the keypad flashing at the bottom of the page
	    // during the initial render.
	    invisible: {
	        visibility: 'hidden'
	    },

	    hidden: {
	        msTransform: 'translate3d(0, 100%, 0)',
	        WebkitTransform: 'translate3d(0, 100%, 0)',
	        transform: 'translate3d(0, 100%, 0)'
	    },

	    active: {
	        msTransform: 'translate3d(0, 0, 0)',
	        WebkitTransform: 'translate3d(0, 0, 0)',
	        transform: 'translate3d(0, 0, 0)'
	    }
	};

	var mapStateToProps = function mapStateToProps(state) {
	    return _extends({}, state.keypad, {
	        layoutMode: state.layout.layoutMode,
	        navigationPadEnabled: state.layout.navigationPadEnabled
	    });
	};

	var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	    return {
	        onPageSizeChange: function onPageSizeChange(pageWidthPx, pageHeightPx) {
	            dispatch(setPageSize(pageWidthPx, pageHeightPx));
	        }
	    };
	};

	module.exports = connect(mapStateToProps, mapDispatchToProps)(KeypadContainer);

/***/ },
/* 548 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * A keypad that includes the digits, as well as the symbols required to deal
	 * with fractions, decimals, and percents.
	 */

	var React = __webpack_require__(1);

	var _require = __webpack_require__(513),
	    connect = _require.connect;

	var _require2 = __webpack_require__(487),
	    View = _require2.View;

	var Keypad = __webpack_require__(549);
	var TouchableKeypadButton = __webpack_require__(621);

	var _require3 = __webpack_require__(563),
	    row = _require3.row,
	    roundedTopLeft = _require3.roundedTopLeft,
	    roundedTopRight = _require3.roundedTopRight;

	var _require4 = __webpack_require__(610),
	    BorderStyles = _require4.BorderStyles;

	var CursorContexts = __webpack_require__(615);

	var _require5 = __webpack_require__(611),
	    cursorContextPropType = _require5.cursorContextPropType;

	var KeyConfigs = __webpack_require__(612);

	var FractionKeypad = function (_React$Component) {
	    _inherits(FractionKeypad, _React$Component);

	    function FractionKeypad() {
	        _classCallCheck(this, FractionKeypad);

	        return _possibleConstructorReturn(this, (FractionKeypad.__proto__ || Object.getPrototypeOf(FractionKeypad)).apply(this, arguments));
	    }

	    _createClass(FractionKeypad, [{
	        key: 'render',


	        // Since we include a two-key popover in the top-right, when the popover
	        // is visible, the keypad will expand to fill the equivalent of five
	        // rows vertically.
	        value: function render() {
	            var _props = this.props,
	                cursorContext = _props.cursorContext,
	                dynamicJumpOut = _props.dynamicJumpOut,
	                roundTopLeft = _props.roundTopLeft,
	                roundTopRight = _props.roundTopRight;


	            var dismissOrJumpOutKey = void 0;
	            if (dynamicJumpOut) {
	                switch (cursorContext) {
	                    case CursorContexts.IN_PARENS:
	                        dismissOrJumpOutKey = KeyConfigs.JUMP_OUT_PARENTHESES;
	                        break;

	                    case CursorContexts.IN_SUPER_SCRIPT:
	                        dismissOrJumpOutKey = KeyConfigs.JUMP_OUT_EXPONENT;
	                        break;

	                    case CursorContexts.IN_SUB_SCRIPT:
	                        dismissOrJumpOutKey = KeyConfigs.JUMP_OUT_BASE;
	                        break;

	                    case CursorContexts.BEFORE_FRACTION:
	                        dismissOrJumpOutKey = KeyConfigs.JUMP_INTO_NUMERATOR;
	                        break;

	                    case CursorContexts.IN_NUMERATOR:
	                        dismissOrJumpOutKey = KeyConfigs.JUMP_OUT_NUMERATOR;
	                        break;

	                    case CursorContexts.IN_DENOMINATOR:
	                        dismissOrJumpOutKey = KeyConfigs.JUMP_OUT_DENOMINATOR;
	                        break;

	                    case CursorContexts.NONE:
	                    default:
	                        dismissOrJumpOutKey = KeyConfigs.DISMISS;
	                        break;
	                }
	            } else {
	                dismissOrJumpOutKey = KeyConfigs.DISMISS;
	            }

	            return React.createElement(
	                Keypad,
	                null,
	                React.createElement(
	                    View,
	                    { style: row },
	                    React.createElement(TouchableKeypadButton, {
	                        keyConfig: KeyConfigs.NUM_7,
	                        borders: BorderStyles.NONE,
	                        style: roundTopLeft && roundedTopLeft
	                    }),
	                    React.createElement(TouchableKeypadButton, {
	                        keyConfig: KeyConfigs.NUM_8,
	                        borders: BorderStyles.NONE
	                    }),
	                    React.createElement(TouchableKeypadButton, {
	                        keyConfig: KeyConfigs.NUM_9,
	                        borders: BorderStyles.NONE
	                    }),
	                    React.createElement(TouchableKeypadButton, {
	                        keyConfig: KeyConfigs.FRAC_MULTI,
	                        disabled:
	                        // NOTE(charlie): It's only sufficient to use
	                        // `IN_NUMERATOR` and `IN_DENOMINATOR` here because we
	                        // don't support parentheses in this keypad. If we did,
	                        // then when the cursor was inside a parenthetical
	                        // expression in a numerator or denominator, this check
	                        // would fail.
	                        cursorContext === CursorContexts.IN_NUMERATOR || cursorContext === CursorContexts.IN_DENOMINATOR,
	                        style: roundTopRight && roundedTopRight
	                    })
	                ),
	                React.createElement(
	                    View,
	                    { style: row },
	                    React.createElement(TouchableKeypadButton, {
	                        keyConfig: KeyConfigs.NUM_4,
	                        borders: BorderStyles.NONE
	                    }),
	                    React.createElement(TouchableKeypadButton, {
	                        keyConfig: KeyConfigs.NUM_5,
	                        borders: BorderStyles.NONE
	                    }),
	                    React.createElement(TouchableKeypadButton, {
	                        keyConfig: KeyConfigs.NUM_6,
	                        borders: BorderStyles.NONE
	                    }),
	                    React.createElement(TouchableKeypadButton, { keyConfig: KeyConfigs.PERCENT })
	                ),
	                React.createElement(
	                    View,
	                    { style: row },
	                    React.createElement(TouchableKeypadButton, {
	                        keyConfig: KeyConfigs.NUM_1,
	                        borders: BorderStyles.BOTTOM
	                    }),
	                    React.createElement(TouchableKeypadButton, {
	                        keyConfig: KeyConfigs.NUM_2,
	                        borders: BorderStyles.NONE
	                    }),
	                    React.createElement(TouchableKeypadButton, {
	                        keyConfig: KeyConfigs.NUM_3,
	                        borders: BorderStyles.BOTTOM
	                    }),
	                    React.createElement(TouchableKeypadButton, {
	                        keyConfig: KeyConfigs.BACKSPACE,
	                        borders: BorderStyles.LEFT
	                    })
	                ),
	                React.createElement(
	                    View,
	                    { style: row },
	                    React.createElement(TouchableKeypadButton, {
	                        keyConfig: KeyConfigs.NEGATIVE,
	                        borders: BorderStyles.NONE
	                    }),
	                    React.createElement(TouchableKeypadButton, {
	                        keyConfig: KeyConfigs.NUM_0,
	                        borders: BorderStyles.LEFT
	                    }),
	                    React.createElement(TouchableKeypadButton, {
	                        keyConfig: KeyConfigs.DECIMAL,
	                        borders: BorderStyles.LEFT
	                    }),
	                    React.createElement(TouchableKeypadButton, {
	                        keyConfig: dismissOrJumpOutKey,
	                        borders: BorderStyles.LEFT
	                    })
	                )
	            );
	        }
	    }]);

	    return FractionKeypad;
	}(React.Component);

	FractionKeypad.propTypes = {
	    cursorContext: cursorContextPropType.isRequired,
	    dynamicJumpOut: React.PropTypes.bool,
	    roundTopLeft: React.PropTypes.bool,
	    roundTopRight: React.PropTypes.bool
	};
	FractionKeypad.rows = 4;
	FractionKeypad.columns = 4;
	FractionKeypad.maxVisibleRows = 5;
	FractionKeypad.numPages = 1;


	var mapStateToProps = function mapStateToProps(state) {
	    return {
	        cursorContext: state.input.cursor.context,
	        dynamicJumpOut: !state.layout.navigationPadEnabled
	    };
	};

	module.exports = connect(mapStateToProps)(FractionKeypad);

/***/ },
/* 549 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * A keypad component that acts as a container for rows or columns of buttons,
	 * and manages the rendering of echo animations on top of those buttons.
	 */

	var React = __webpack_require__(1);
	var ReactDOM = __webpack_require__(550);

	var _require = __webpack_require__(513),
	    connect = _require.connect;

	var _require2 = __webpack_require__(551),
	    _removeEcho = _require2.removeEcho;

	var _require3 = __webpack_require__(487),
	    View = _require3.View;

	var EchoManager = __webpack_require__(552);
	var PopoverManager = __webpack_require__(619);

	var _require4 = __webpack_require__(611),
	    echoPropType = _require4.echoPropType,
	    popoverPropType = _require4.popoverPropType;

	var Keypad = function (_React$Component) {
	    _inherits(Keypad, _React$Component);

	    function Keypad() {
	        var _ref;

	        var _temp, _this, _ret;

	        _classCallCheck(this, Keypad);

	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }

	        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Keypad.__proto__ || Object.getPrototypeOf(Keypad)).call.apply(_ref, [this].concat(args))), _this), _this._computeContainer = function () {
	            var domNode = ReactDOM.findDOMNode(_this);
	            _this._container = domNode.getBoundingClientRect();
	        }, _this._updateSizeAndPosition = function () {
	            // Mark the container for recalculation next time the keypad is
	            // opened.
	            // TODO(charlie): Since we're not recalculating the container
	            // immediately, if you were to resize the page while a popover were
	            // active, you'd likely get unexpected behavior. This seems very
	            // difficult to do and, as such, incredibly unlikely, but we may
	            // want to reconsider the caching here.
	            _this._container = null;
	        }, _this._onResize = function () {
	            // Whenever the page resizes, we need to recompute the container's
	            // bounding box. This is the only time that the bounding box can change.

	            // Throttle resize events -- taken from:
	            //    https://developer.mozilla.org/en-US/docs/Web/Events/resize
	            if (_this._resizeTimeout == null) {
	                _this._resizeTimeout = setTimeout(function () {
	                    _this._resizeTimeout = null;

	                    if (_this._isMounted) {
	                        _this._updateSizeAndPosition();
	                    }
	                }, 66);
	            }
	        }, _temp), _possibleConstructorReturn(_this, _ret);
	    }

	    _createClass(Keypad, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            this._isMounted = true;

	            window.addEventListener("resize", this._onResize);
	            this._updateSizeAndPosition();
	        }
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(newProps) {
	            if (!this._container && (newProps.popover || newProps.echoes.length)) {
	                this._computeContainer();
	            }
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            this._isMounted = false;

	            window.removeEventListener("resize", this._onResize);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            var _props = this.props,
	                children = _props.children,
	                echoes = _props.echoes,
	                removeEcho = _props.removeEcho,
	                popover = _props.popover,
	                style = _props.style;

	            // Translate the echo boxes, as they'll be positioned absolutely to
	            // this relative container.

	            var relativeEchoes = echoes.map(function (echo) {
	                var initialBounds = echo.initialBounds,
	                    rest = _objectWithoutProperties(echo, ['initialBounds']);

	                return _extends({}, rest, {
	                    initialBounds: {
	                        top: initialBounds.top - _this2._container.top,
	                        right: initialBounds.right - _this2._container.left,
	                        bottom: initialBounds.bottom - _this2._container.top,
	                        left: initialBounds.left - _this2._container.left,
	                        width: initialBounds.width,
	                        height: initialBounds.height
	                    }
	                });
	            });

	            // Translate the popover bounds from page-absolute to keypad-relative.
	            // Note that we only need three bounds, since popovers are anchored to
	            // the bottom left corners of the keys over which they appear.
	            var relativePopover = popover && _extends({}, popover, {
	                bounds: {
	                    bottom: this._container.height - (popover.bounds.bottom - this._container.top),
	                    left: popover.bounds.left - this._container.left,
	                    width: popover.bounds.width
	                }
	            });

	            return React.createElement(
	                View,
	                { style: style },
	                children,
	                React.createElement(EchoManager, {
	                    echoes: relativeEchoes,
	                    onAnimationFinish: removeEcho
	                }),
	                React.createElement(PopoverManager, { popover: relativePopover })
	            );
	        }
	    }]);

	    return Keypad;
	}(React.Component);

	Keypad.propTypes = {
	    // Whether the keypad is active, i.e., whether it should be rendered as
	    // visible or invisible.
	    active: React.PropTypes.bool,
	    children: React.PropTypes.oneOfType([React.PropTypes.arrayOf(React.PropTypes.node), React.PropTypes.node]),
	    echoes: React.PropTypes.arrayOf(echoPropType).isRequired,
	    popover: popoverPropType,
	    removeEcho: React.PropTypes.func.isRequired,
	    style: React.PropTypes.any
	};


	var mapStateToProps = function mapStateToProps(state) {
	    return _extends({}, state.echoes, {
	        active: state.keypad.active,
	        popover: state.gestures.popover
	    });
	};

	var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	    return {
	        removeEcho: function removeEcho(animationId) {
	            dispatch(_removeEcho(animationId));
	        }
	    };
	};

	module.exports = connect(mapStateToProps, mapDispatchToProps)(Keypad);

/***/ },
/* 550 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(31);


/***/ },
/* 551 */
/***/ function(module, exports) {

	'use strict';

	module.exports = {
	    // naming convetion: verb + noun
	    // the noun should be one of the other properties in the object that's
	    // being dispatched
	    dismissKeypad: function dismissKeypad() {
	        return {
	            type: 'DismissKeypad'
	        };
	    },
	    activateKeypad: function activateKeypad() {
	        return {
	            type: 'ActivateKeypad'
	        };
	    },


	    /**
	     * Configure the keypad with the provided configuration parameters.
	     *
	     * See: `prop-types.js#keypadConfigurationPropType`.
	     */
	    configureKeypad: function configureKeypad(configuration) {
	        return {
	            type: 'ConfigureKeypad',
	            configuration: configuration
	        };
	    },
	    setPageSize: function setPageSize(pageWidthPx, pageHeightPx) {
	        return {
	            type: 'SetPageSize',
	            pageWidthPx: pageWidthPx,
	            pageHeightPx: pageHeightPx
	        };
	    },
	    removeEcho: function removeEcho(animationId) {
	        return {
	            type: 'RemoveEcho',
	            animationId: animationId
	        };
	    },


	    // Input-related actions.
	    setKeyHandler: function setKeyHandler(keyHandler) {
	        return {
	            type: 'SetKeyHandler',
	            keyHandler: keyHandler
	        };
	    },
	    setCursor: function setCursor(cursor) {
	        return {
	            type: 'SetCursor',
	            cursor: cursor
	        };
	    }
	};

/***/ },
/* 552 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * A component that renders and animates the selection state effect effect.
	 */

	var React = __webpack_require__(1);
	var ReactCSSTransitionGroup = __webpack_require__(553);
	var KeypadButton = __webpack_require__(560);
	var KeyConfigs = __webpack_require__(612);

	var _require = __webpack_require__(610),
	    KeyTypes = _require.KeyTypes,
	    EchoAnimationTypes = _require.EchoAnimationTypes;

	var _require2 = __webpack_require__(611),
	    echoPropType = _require2.echoPropType,
	    bordersPropType = _require2.bordersPropType,
	    boundingBoxPropType = _require2.boundingBoxPropType,
	    keyIdPropType = _require2.keyIdPropType;

	var zIndexes = __webpack_require__(618);

	var Echo = function (_React$Component) {
	    _inherits(Echo, _React$Component);

	    function Echo() {
	        _classCallCheck(this, Echo);

	        return _possibleConstructorReturn(this, (Echo.__proto__ || Object.getPrototypeOf(Echo)).apply(this, arguments));
	    }

	    _createClass(Echo, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            // NOTE(charlie): This is somewhat unfortunate, as the component is
	            // encoding information about its own animation, of which it should be
	            // ignorant. However, there doesn't seem to be a cleaner way to make
	            // this happen, and at least here, all the animation context is
	            // colocated in this file.
	            var _props = this.props,
	                animationDurationMs = _props.animationDurationMs,
	                onAnimationFinish = _props.onAnimationFinish;

	            setTimeout(function () {
	                return onAnimationFinish();
	            }, animationDurationMs);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _props2 = this.props,
	                borders = _props2.borders,
	                id = _props2.id,
	                initialBounds = _props2.initialBounds;
	            var icon = KeyConfigs[id].icon;


	            var containerStyle = _extends({
	                zIndex: zIndexes.echo,
	                position: 'absolute',
	                pointerEvents: 'none'
	            }, initialBounds);

	            // NOTE(charlie): In some browsers, Aphrodite doesn't seem to flush its
	            // styles quickly enough, so there's a flickering effect on the first
	            // animation. Thus, it's much safer to do the styles purely inline.
	            // <View> makes this difficult because some of its defaults, which are
	            // applied via StyleSheet, will override our inlines.
	            return React.createElement(
	                'div',
	                { style: containerStyle },
	                React.createElement(KeypadButton, {
	                    name: id,
	                    icon: icon,
	                    type: KeyTypes.ECHO,
	                    borders: borders
	                })
	            );
	        }
	    }]);

	    return Echo;
	}(React.Component);

	Echo.propTypes = {
	    animationDurationMs: React.PropTypes.number.isRequired,
	    borders: bordersPropType,
	    id: keyIdPropType.isRequired,
	    initialBounds: boundingBoxPropType.isRequired,
	    onAnimationFinish: React.PropTypes.func.isRequired
	};

	var EchoManager = function (_React$Component2) {
	    _inherits(EchoManager, _React$Component2);

	    function EchoManager() {
	        var _ref;

	        var _temp, _this2, _ret;

	        _classCallCheck(this, EchoManager);

	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }

	        return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = EchoManager.__proto__ || Object.getPrototypeOf(EchoManager)).call.apply(_ref, [this].concat(args))), _this2), _this2._animationConfigForType = function (animationType) {
	            // NOTE(charlie): These must be kept in sync with the transition
	            // durations and classnames specified in echo.css.
	            var animationDurationMs = void 0;
	            var animationTransitionName = void 0;

	            switch (animationType) {
	                case EchoAnimationTypes.SLIDE_AND_FADE:
	                    animationDurationMs = 400;
	                    animationTransitionName = 'echo-slide-and-fade';
	                    break;

	                case EchoAnimationTypes.FADE_ONLY:
	                    animationDurationMs = 300;
	                    animationTransitionName = 'echo-fade-only';
	                    break;

	                case EchoAnimationTypes.LONG_FADE_ONLY:
	                    animationDurationMs = 400;
	                    animationTransitionName = 'echo-long-fade-only';
	                    break;

	                default:
	                    throw new Error("Invalid echo animation type:", animationType);
	            }

	            return {
	                animationDurationMs: animationDurationMs,
	                animationTransitionName: animationTransitionName
	            };
	        }, _temp), _possibleConstructorReturn(_this2, _ret);
	    }

	    _createClass(EchoManager, [{
	        key: 'render',
	        value: function render() {
	            var _this3 = this;

	            var _props3 = this.props,
	                echoes = _props3.echoes,
	                _onAnimationFinish = _props3.onAnimationFinish;


	            return React.createElement(
	                'span',
	                null,
	                Object.keys(EchoAnimationTypes).map(function (animationType) {
	                    // Collect the relevant parameters for the animation type, and
	                    // filter for the appropriate echoes.
	                    var _animationConfigForTy = _this3._animationConfigForType(animationType),
	                        animationDurationMs = _animationConfigForTy.animationDurationMs,
	                        animationTransitionName = _animationConfigForTy.animationTransitionName;

	                    var echoesForType = echoes.filter(function (echo) {
	                        return echo.animationType === animationType;
	                    });

	                    // TODO(charlie): Manage this animation with Aphrodite styles.
	                    // Right now, there's a bug in the autoprefixer that breaks CSS
	                    // transitions on mobile Safari.
	                    // See: https://github.com/Khan/aphrodite/issues/68.
	                    // As such, we have to do this with a stylesheet.
	                    return React.createElement(
	                        ReactCSSTransitionGroup,
	                        {
	                            transitionName: animationTransitionName,
	                            transitionEnter: true,
	                            transitionLeave: false,
	                            transitionEnterTimeout: animationDurationMs,
	                            key: animationType
	                        },
	                        echoesForType.map(function (echo) {
	                            var animationId = echo.animationId;

	                            return React.createElement(Echo, _extends({
	                                key: animationId,
	                                animationDurationMs: animationDurationMs,
	                                onAnimationFinish: function onAnimationFinish() {
	                                    return _onAnimationFinish(animationId);
	                                }
	                            }, echo));
	                        })
	                    );
	                })
	            );
	        }
	    }]);

	    return EchoManager;
	}(React.Component);

	EchoManager.propTypes = {
	    echoes: React.PropTypes.arrayOf(echoPropType),
	    onAnimationFinish: React.PropTypes.func.isRequired
	};


	module.exports = EchoManager;

/***/ },
/* 553 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(554);

/***/ },
/* 554 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactCSSTransitionGroup
	 */

	'use strict';

	var _assign = __webpack_require__(3);

	var React = __webpack_require__(2);

	var ReactTransitionGroup = __webpack_require__(555);
	var ReactCSSTransitionGroupChild = __webpack_require__(557);

	function createTransitionTimeoutPropValidator(transitionType) {
	  var timeoutPropName = 'transition' + transitionType + 'Timeout';
	  var enabledPropName = 'transition' + transitionType;

	  return function (props) {
	    // If the transition is enabled
	    if (props[enabledPropName]) {
	      // If no timeout duration is provided
	      if (props[timeoutPropName] == null) {
	        return new Error(timeoutPropName + ' wasn\'t supplied to ReactCSSTransitionGroup: ' + 'this can cause unreliable animations and won\'t be supported in ' + 'a future version of React. See ' + 'https://fb.me/react-animation-transition-group-timeout for more ' + 'information.');

	        // If the duration isn't a number
	      } else if (typeof props[timeoutPropName] !== 'number') {
	          return new Error(timeoutPropName + ' must be a number (in milliseconds)');
	        }
	    }
	  };
	}

	/**
	 * An easy way to perform CSS transitions and animations when a React component
	 * enters or leaves the DOM.
	 * See https://facebook.github.io/react/docs/animation.html#high-level-api-reactcsstransitiongroup
	 */
	var ReactCSSTransitionGroup = React.createClass({
	  displayName: 'ReactCSSTransitionGroup',

	  propTypes: {
	    transitionName: ReactCSSTransitionGroupChild.propTypes.name,

	    transitionAppear: React.PropTypes.bool,
	    transitionEnter: React.PropTypes.bool,
	    transitionLeave: React.PropTypes.bool,
	    transitionAppearTimeout: createTransitionTimeoutPropValidator('Appear'),
	    transitionEnterTimeout: createTransitionTimeoutPropValidator('Enter'),
	    transitionLeaveTimeout: createTransitionTimeoutPropValidator('Leave')
	  },

	  getDefaultProps: function () {
	    return {
	      transitionAppear: false,
	      transitionEnter: true,
	      transitionLeave: true
	    };
	  },

	  _wrapChild: function (child) {
	    // We need to provide this childFactory so that
	    // ReactCSSTransitionGroupChild can receive updates to name, enter, and
	    // leave while it is leaving.
	    return React.createElement(ReactCSSTransitionGroupChild, {
	      name: this.props.transitionName,
	      appear: this.props.transitionAppear,
	      enter: this.props.transitionEnter,
	      leave: this.props.transitionLeave,
	      appearTimeout: this.props.transitionAppearTimeout,
	      enterTimeout: this.props.transitionEnterTimeout,
	      leaveTimeout: this.props.transitionLeaveTimeout
	    }, child);
	  },

	  render: function () {
	    return React.createElement(ReactTransitionGroup, _assign({}, this.props, { childFactory: this._wrapChild }));
	  }
	});

	module.exports = ReactCSSTransitionGroup;

/***/ },
/* 555 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactTransitionGroup
	 */

	'use strict';

	var _assign = __webpack_require__(3);

	var React = __webpack_require__(2);
	var ReactInstanceMap = __webpack_require__(109);
	var ReactTransitionChildMapping = __webpack_require__(556);

	var emptyFunction = __webpack_require__(11);

	/**
	 * A basis for animations. When children are declaratively added or removed,
	 * special lifecycle hooks are called.
	 * See https://facebook.github.io/react/docs/animation.html#low-level-api-reacttransitiongroup
	 */
	var ReactTransitionGroup = React.createClass({
	  displayName: 'ReactTransitionGroup',

	  propTypes: {
	    component: React.PropTypes.any,
	    childFactory: React.PropTypes.func
	  },

	  getDefaultProps: function () {
	    return {
	      component: 'span',
	      childFactory: emptyFunction.thatReturnsArgument
	    };
	  },

	  getInitialState: function () {
	    return {
	      // TODO: can we get useful debug information to show at this point?
	      children: ReactTransitionChildMapping.getChildMapping(this.props.children)
	    };
	  },

	  componentWillMount: function () {
	    this.currentlyTransitioningKeys = {};
	    this.keysToEnter = [];
	    this.keysToLeave = [];
	  },

	  componentDidMount: function () {
	    var initialChildMapping = this.state.children;
	    for (var key in initialChildMapping) {
	      if (initialChildMapping[key]) {
	        this.performAppear(key);
	      }
	    }
	  },

	  componentWillReceiveProps: function (nextProps) {
	    var nextChildMapping;
	    if (false) {
	      nextChildMapping = ReactTransitionChildMapping.getChildMapping(nextProps.children, ReactInstanceMap.get(this)._debugID);
	    } else {
	      nextChildMapping = ReactTransitionChildMapping.getChildMapping(nextProps.children);
	    }
	    var prevChildMapping = this.state.children;

	    this.setState({
	      children: ReactTransitionChildMapping.mergeChildMappings(prevChildMapping, nextChildMapping)
	    });

	    var key;

	    for (key in nextChildMapping) {
	      var hasPrev = prevChildMapping && prevChildMapping.hasOwnProperty(key);
	      if (nextChildMapping[key] && !hasPrev && !this.currentlyTransitioningKeys[key]) {
	        this.keysToEnter.push(key);
	      }
	    }

	    for (key in prevChildMapping) {
	      var hasNext = nextChildMapping && nextChildMapping.hasOwnProperty(key);
	      if (prevChildMapping[key] && !hasNext && !this.currentlyTransitioningKeys[key]) {
	        this.keysToLeave.push(key);
	      }
	    }

	    // If we want to someday check for reordering, we could do it here.
	  },

	  componentDidUpdate: function () {
	    var keysToEnter = this.keysToEnter;
	    this.keysToEnter = [];
	    keysToEnter.forEach(this.performEnter);

	    var keysToLeave = this.keysToLeave;
	    this.keysToLeave = [];
	    keysToLeave.forEach(this.performLeave);
	  },

	  performAppear: function (key) {
	    this.currentlyTransitioningKeys[key] = true;

	    var component = this.refs[key];

	    if (component.componentWillAppear) {
	      component.componentWillAppear(this._handleDoneAppearing.bind(this, key));
	    } else {
	      this._handleDoneAppearing(key);
	    }
	  },

	  _handleDoneAppearing: function (key) {
	    var component = this.refs[key];
	    if (component.componentDidAppear) {
	      component.componentDidAppear();
	    }

	    delete this.currentlyTransitioningKeys[key];

	    var currentChildMapping;
	    if (false) {
	      currentChildMapping = ReactTransitionChildMapping.getChildMapping(this.props.children, ReactInstanceMap.get(this)._debugID);
	    } else {
	      currentChildMapping = ReactTransitionChildMapping.getChildMapping(this.props.children);
	    }

	    if (!currentChildMapping || !currentChildMapping.hasOwnProperty(key)) {
	      // This was removed before it had fully appeared. Remove it.
	      this.performLeave(key);
	    }
	  },

	  performEnter: function (key) {
	    this.currentlyTransitioningKeys[key] = true;

	    var component = this.refs[key];

	    if (component.componentWillEnter) {
	      component.componentWillEnter(this._handleDoneEntering.bind(this, key));
	    } else {
	      this._handleDoneEntering(key);
	    }
	  },

	  _handleDoneEntering: function (key) {
	    var component = this.refs[key];
	    if (component.componentDidEnter) {
	      component.componentDidEnter();
	    }

	    delete this.currentlyTransitioningKeys[key];

	    var currentChildMapping;
	    if (false) {
	      currentChildMapping = ReactTransitionChildMapping.getChildMapping(this.props.children, ReactInstanceMap.get(this)._debugID);
	    } else {
	      currentChildMapping = ReactTransitionChildMapping.getChildMapping(this.props.children);
	    }

	    if (!currentChildMapping || !currentChildMapping.hasOwnProperty(key)) {
	      // This was removed before it had fully entered. Remove it.
	      this.performLeave(key);
	    }
	  },

	  performLeave: function (key) {
	    this.currentlyTransitioningKeys[key] = true;

	    var component = this.refs[key];
	    if (component.componentWillLeave) {
	      component.componentWillLeave(this._handleDoneLeaving.bind(this, key));
	    } else {
	      // Note that this is somewhat dangerous b/c it calls setState()
	      // again, effectively mutating the component before all the work
	      // is done.
	      this._handleDoneLeaving(key);
	    }
	  },

	  _handleDoneLeaving: function (key) {
	    var component = this.refs[key];

	    if (component.componentDidLeave) {
	      component.componentDidLeave();
	    }

	    delete this.currentlyTransitioningKeys[key];

	    var currentChildMapping;
	    if (false) {
	      currentChildMapping = ReactTransitionChildMapping.getChildMapping(this.props.children, ReactInstanceMap.get(this)._debugID);
	    } else {
	      currentChildMapping = ReactTransitionChildMapping.getChildMapping(this.props.children);
	    }

	    if (currentChildMapping && currentChildMapping.hasOwnProperty(key)) {
	      // This entered again before it fully left. Add it again.
	      this.performEnter(key);
	    } else {
	      this.setState(function (state) {
	        var newChildren = _assign({}, state.children);
	        delete newChildren[key];
	        return { children: newChildren };
	      });
	    }
	  },

	  render: function () {
	    // TODO: we could get rid of the need for the wrapper node
	    // by cloning a single child
	    var childrenToRender = [];
	    for (var key in this.state.children) {
	      var child = this.state.children[key];
	      if (child) {
	        // You may need to apply reactive updates to a child as it is leaving.
	        // The normal React way to do it won't work since the child will have
	        // already been removed. In case you need this behavior you can provide
	        // a childFactory function to wrap every child, even the ones that are
	        // leaving.
	        childrenToRender.push(React.cloneElement(this.props.childFactory(child), { ref: key, key: key }));
	      }
	    }

	    // Do not forward ReactTransitionGroup props to primitive DOM nodes
	    var props = _assign({}, this.props);
	    delete props.transitionLeave;
	    delete props.transitionName;
	    delete props.transitionAppear;
	    delete props.transitionEnter;
	    delete props.childFactory;
	    delete props.transitionLeaveTimeout;
	    delete props.transitionEnterTimeout;
	    delete props.transitionAppearTimeout;
	    delete props.component;

	    return React.createElement(this.props.component, props, childrenToRender);
	  }
	});

	module.exports = ReactTransitionGroup;

/***/ },
/* 556 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactTransitionChildMapping
	 */

	'use strict';

	var flattenChildren = __webpack_require__(121);

	var ReactTransitionChildMapping = {
	  /**
	   * Given `this.props.children`, return an object mapping key to child. Just
	   * simple syntactic sugar around flattenChildren().
	   *
	   * @param {*} children `this.props.children`
	   * @param {number=} selfDebugID Optional debugID of the current internal instance.
	   * @return {object} Mapping of key to child
	   */
	  getChildMapping: function (children, selfDebugID) {
	    if (!children) {
	      return children;
	    }

	    if (false) {
	      return flattenChildren(children, selfDebugID);
	    }

	    return flattenChildren(children);
	  },

	  /**
	   * When you're adding or removing children some may be added or removed in the
	   * same render pass. We want to show *both* since we want to simultaneously
	   * animate elements in and out. This function takes a previous set of keys
	   * and a new set of keys and merges them with its best guess of the correct
	   * ordering. In the future we may expose some of the utilities in
	   * ReactMultiChild to make this easy, but for now React itself does not
	   * directly have this concept of the union of prevChildren and nextChildren
	   * so we implement it here.
	   *
	   * @param {object} prev prev children as returned from
	   * `ReactTransitionChildMapping.getChildMapping()`.
	   * @param {object} next next children as returned from
	   * `ReactTransitionChildMapping.getChildMapping()`.
	   * @return {object} a key set that contains all keys in `prev` and all keys
	   * in `next` in a reasonable order.
	   */
	  mergeChildMappings: function (prev, next) {
	    prev = prev || {};
	    next = next || {};

	    function getValueForKey(key) {
	      if (next.hasOwnProperty(key)) {
	        return next[key];
	      } else {
	        return prev[key];
	      }
	    }

	    // For each key of `next`, the list of keys to insert before that key in
	    // the combined list
	    var nextKeysPending = {};

	    var pendingKeys = [];
	    for (var prevKey in prev) {
	      if (next.hasOwnProperty(prevKey)) {
	        if (pendingKeys.length) {
	          nextKeysPending[prevKey] = pendingKeys;
	          pendingKeys = [];
	        }
	      } else {
	        pendingKeys.push(prevKey);
	      }
	    }

	    var i;
	    var childMapping = {};
	    for (var nextKey in next) {
	      if (nextKeysPending.hasOwnProperty(nextKey)) {
	        for (i = 0; i < nextKeysPending[nextKey].length; i++) {
	          var pendingNextKey = nextKeysPending[nextKey][i];
	          childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
	        }
	      }
	      childMapping[nextKey] = getValueForKey(nextKey);
	    }

	    // Finally, add the keys which didn't appear before any key in `next`
	    for (i = 0; i < pendingKeys.length; i++) {
	      childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
	    }

	    return childMapping;
	  }
	};

	module.exports = ReactTransitionChildMapping;

/***/ },
/* 557 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactCSSTransitionGroupChild
	 */

	'use strict';

	var React = __webpack_require__(2);
	var ReactDOM = __webpack_require__(31);

	var CSSCore = __webpack_require__(558);
	var ReactTransitionEvents = __webpack_require__(559);

	var onlyChild = __webpack_require__(29);

	var TICK = 17;

	var ReactCSSTransitionGroupChild = React.createClass({
	  displayName: 'ReactCSSTransitionGroupChild',

	  propTypes: {
	    name: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.shape({
	      enter: React.PropTypes.string,
	      leave: React.PropTypes.string,
	      active: React.PropTypes.string
	    }), React.PropTypes.shape({
	      enter: React.PropTypes.string,
	      enterActive: React.PropTypes.string,
	      leave: React.PropTypes.string,
	      leaveActive: React.PropTypes.string,
	      appear: React.PropTypes.string,
	      appearActive: React.PropTypes.string
	    })]).isRequired,

	    // Once we require timeouts to be specified, we can remove the
	    // boolean flags (appear etc.) and just accept a number
	    // or a bool for the timeout flags (appearTimeout etc.)
	    appear: React.PropTypes.bool,
	    enter: React.PropTypes.bool,
	    leave: React.PropTypes.bool,
	    appearTimeout: React.PropTypes.number,
	    enterTimeout: React.PropTypes.number,
	    leaveTimeout: React.PropTypes.number
	  },

	  transition: function (animationType, finishCallback, userSpecifiedDelay) {
	    var node = ReactDOM.findDOMNode(this);

	    if (!node) {
	      if (finishCallback) {
	        finishCallback();
	      }
	      return;
	    }

	    var className = this.props.name[animationType] || this.props.name + '-' + animationType;
	    var activeClassName = this.props.name[animationType + 'Active'] || className + '-active';
	    var timeout = null;

	    var endListener = function (e) {
	      if (e && e.target !== node) {
	        return;
	      }

	      clearTimeout(timeout);

	      CSSCore.removeClass(node, className);
	      CSSCore.removeClass(node, activeClassName);

	      ReactTransitionEvents.removeEndEventListener(node, endListener);

	      // Usually this optional callback is used for informing an owner of
	      // a leave animation and telling it to remove the child.
	      if (finishCallback) {
	        finishCallback();
	      }
	    };

	    CSSCore.addClass(node, className);

	    // Need to do this to actually trigger a transition.
	    this.queueClassAndNode(activeClassName, node);

	    // If the user specified a timeout delay.
	    if (userSpecifiedDelay) {
	      // Clean-up the animation after the specified delay
	      timeout = setTimeout(endListener, userSpecifiedDelay);
	      this.transitionTimeouts.push(timeout);
	    } else {
	      // DEPRECATED: this listener will be removed in a future version of react
	      ReactTransitionEvents.addEndEventListener(node, endListener);
	    }
	  },

	  queueClassAndNode: function (className, node) {
	    this.classNameAndNodeQueue.push({
	      className: className,
	      node: node
	    });

	    if (!this.timeout) {
	      this.timeout = setTimeout(this.flushClassNameAndNodeQueue, TICK);
	    }
	  },

	  flushClassNameAndNodeQueue: function () {
	    if (this.isMounted()) {
	      this.classNameAndNodeQueue.forEach(function (obj) {
	        CSSCore.addClass(obj.node, obj.className);
	      });
	    }
	    this.classNameAndNodeQueue.length = 0;
	    this.timeout = null;
	  },

	  componentWillMount: function () {
	    this.classNameAndNodeQueue = [];
	    this.transitionTimeouts = [];
	  },

	  componentWillUnmount: function () {
	    if (this.timeout) {
	      clearTimeout(this.timeout);
	    }
	    this.transitionTimeouts.forEach(function (timeout) {
	      clearTimeout(timeout);
	    });

	    this.classNameAndNodeQueue.length = 0;
	  },

	  componentWillAppear: function (done) {
	    if (this.props.appear) {
	      this.transition('appear', done, this.props.appearTimeout);
	    } else {
	      done();
	    }
	  },

	  componentWillEnter: function (done) {
	    if (this.props.enter) {
	      this.transition('enter', done, this.props.enterTimeout);
	    } else {
	      done();
	    }
	  },

	  componentWillLeave: function (done) {
	    if (this.props.leave) {
	      this.transition('leave', done, this.props.leaveTimeout);
	    } else {
	      done();
	    }
	  },

	  render: function () {
	    return onlyChild(this.props.children);
	  }
	});

	module.exports = ReactCSSTransitionGroupChild;

/***/ },
/* 558 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks
	 */

	var invariant = __webpack_require__(7);

	/**
	 * The CSSCore module specifies the API (and implements most of the methods)
	 * that should be used when dealing with the display of elements (via their
	 * CSS classes and visibility on screen. It is an API focused on mutating the
	 * display and not reading it as no logical state should be encoded in the
	 * display of elements.
	 */

	/* Slow implementation for browsers that don't natively support .matches() */
	function matchesSelector_SLOW(element, selector) {
	  var root = element;
	  while (root.parentNode) {
	    root = root.parentNode;
	  }

	  var all = root.querySelectorAll(selector);
	  return Array.prototype.indexOf.call(all, element) !== -1;
	}

	var CSSCore = {

	  /**
	   * Adds the class passed in to the element if it doesn't already have it.
	   *
	   * @param {DOMElement} element the element to set the class on
	   * @param {string} className the CSS className
	   * @return {DOMElement} the element passed in
	   */
	  addClass: function addClass(element, className) {
	    !!/\s/.test(className) ?  false ? invariant(false, 'CSSCore.addClass takes only a single class name. "%s" contains ' + 'multiple classes.', className) : invariant(false) : void 0;

	    if (className) {
	      if (element.classList) {
	        element.classList.add(className);
	      } else if (!CSSCore.hasClass(element, className)) {
	        element.className = element.className + ' ' + className;
	      }
	    }
	    return element;
	  },

	  /**
	   * Removes the class passed in from the element
	   *
	   * @param {DOMElement} element the element to set the class on
	   * @param {string} className the CSS className
	   * @return {DOMElement} the element passed in
	   */
	  removeClass: function removeClass(element, className) {
	    !!/\s/.test(className) ?  false ? invariant(false, 'CSSCore.removeClass takes only a single class name. "%s" contains ' + 'multiple classes.', className) : invariant(false) : void 0;

	    if (className) {
	      if (element.classList) {
	        element.classList.remove(className);
	      } else if (CSSCore.hasClass(element, className)) {
	        element.className = element.className.replace(new RegExp('(^|\\s)' + className + '(?:\\s|$)', 'g'), '$1').replace(/\s+/g, ' ') // multiple spaces to one
	        .replace(/^\s*|\s*$/g, ''); // trim the ends
	      }
	    }
	    return element;
	  },

	  /**
	   * Helper to add or remove a class from an element based on a condition.
	   *
	   * @param {DOMElement} element the element to set the class on
	   * @param {string} className the CSS className
	   * @param {*} bool condition to whether to add or remove the class
	   * @return {DOMElement} the element passed in
	   */
	  conditionClass: function conditionClass(element, className, bool) {
	    return (bool ? CSSCore.addClass : CSSCore.removeClass)(element, className);
	  },

	  /**
	   * Tests whether the element has the class specified.
	   *
	   * @param {DOMNode|DOMWindow} element the element to check the class on
	   * @param {string} className the CSS className
	   * @return {boolean} true if the element has the class, false if not
	   */
	  hasClass: function hasClass(element, className) {
	    !!/\s/.test(className) ?  false ? invariant(false, 'CSS.hasClass takes only a single class name.') : invariant(false) : void 0;
	    if (element.classList) {
	      return !!className && element.classList.contains(className);
	    }
	    return (' ' + element.className + ' ').indexOf(' ' + className + ' ') > -1;
	  },

	  /**
	   * Tests whether the element matches the selector specified
	   *
	   * @param {DOMNode|DOMWindow} element the element that we are querying
	   * @param {string} selector the CSS selector
	   * @return {boolean} true if the element matches the selector, false if not
	   */
	  matchesSelector: function matchesSelector(element, selector) {
	    var matchesImpl = element.matches || element.webkitMatchesSelector || element.mozMatchesSelector || element.msMatchesSelector || function (s) {
	      return matchesSelector_SLOW(element, s);
	    };
	    return matchesImpl.call(element, selector);
	  }

	};

	module.exports = CSSCore;

/***/ },
/* 559 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactTransitionEvents
	 */

	'use strict';

	var ExecutionEnvironment = __webpack_require__(45);

	var getVendorPrefixedEventName = __webpack_require__(99);

	var endEvents = [];

	function detectEvents() {
	  var animEnd = getVendorPrefixedEventName('animationend');
	  var transEnd = getVendorPrefixedEventName('transitionend');

	  if (animEnd) {
	    endEvents.push(animEnd);
	  }

	  if (transEnd) {
	    endEvents.push(transEnd);
	  }
	}

	if (ExecutionEnvironment.canUseDOM) {
	  detectEvents();
	}

	// We use the raw {add|remove}EventListener() call because EventListener
	// does not know how to remove event listeners and we really should
	// clean up. Also, these events are not triggered in older browsers
	// so we should be A-OK here.

	function addEventListener(node, eventName, eventListener) {
	  node.addEventListener(eventName, eventListener, false);
	}

	function removeEventListener(node, eventName, eventListener) {
	  node.removeEventListener(eventName, eventListener, false);
	}

	var ReactTransitionEvents = {
	  addEndEventListener: function (node, eventListener) {
	    if (endEvents.length === 0) {
	      // If CSS transitions are not supported, trigger an "end animation"
	      // event immediately.
	      window.setTimeout(eventListener, 0);
	      return;
	    }
	    endEvents.forEach(function (endEvent) {
	      addEventListener(node, endEvent, eventListener);
	    });
	  },

	  removeEndEventListener: function (node, eventListener) {
	    if (endEvents.length === 0) {
	      return;
	    }
	    endEvents.forEach(function (endEvent) {
	      removeEventListener(node, endEvent, eventListener);
	    });
	  }
	};

	module.exports = ReactTransitionEvents;

/***/ },
/* 560 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * A component that renders a keypad button.
	 */

	var React = __webpack_require__(1);

	var _require = __webpack_require__(513),
	    connect = _require.connect;

	var _require2 = __webpack_require__(489),
	    StyleSheet = _require2.StyleSheet,
	    css = _require2.css;

	var _require3 = __webpack_require__(487),
	    View = _require3.View;

	var Icon = __webpack_require__(561);
	var MultiSymbolGrid = __webpack_require__(616);
	var CornerDecal = __webpack_require__(617);

	var _require4 = __webpack_require__(610),
	    KeyTypes = _require4.KeyTypes,
	    BorderDirections = _require4.BorderDirections,
	    BorderStyles = _require4.BorderStyles;

	var _require5 = __webpack_require__(564),
	    brightGreen = _require5.brightGreen,
	    innerBorderColor = _require5.innerBorderColor,
	    innerBorderStyle = _require5.innerBorderStyle,
	    innerBorderWidthPx = _require5.innerBorderWidthPx,
	    valueGrey = _require5.valueGrey,
	    operatorGrey = _require5.operatorGrey,
	    controlGrey = _require5.controlGrey,
	    emptyGrey = _require5.emptyGrey;

	var _require6 = __webpack_require__(611),
	    bordersPropType = _require6.bordersPropType,
	    iconPropType = _require6.iconPropType,
	    keyConfigPropType = _require6.keyConfigPropType;

	var KeypadButton = function (_React$PureComponent) {
	    _inherits(KeypadButton, _React$PureComponent);

	    function KeypadButton() {
	        var _ref;

	        var _temp, _this, _ret;

	        _classCallCheck(this, KeypadButton);

	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }

	        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = KeypadButton.__proto__ || Object.getPrototypeOf(KeypadButton)).call.apply(_ref, [this].concat(args))), _this), _this._preInjectStyles = function () {
	            // HACK(charlie): Pre-inject all of the possible styles for the button.
	            // This avoids a flickering effect in the echo animation whereby the
	            // echoes vary in size as they animate. Note that we need to account for
	            // the "initial" styles that `View` will include, as these styles are
	            // applied to `View` components and Aphrodite will consolidate the style
	            // object. This method must be called whenever a property that
	            // influences the possible outcomes of `this._getFocusStyle` and
	            // `this._getButtonStyle` changes (such as `this.buttonSizeStyle`).
	            var _iteratorNormalCompletion = true;
	            var _didIteratorError = false;
	            var _iteratorError = undefined;

	            try {
	                for (var _iterator = Object.keys(KeyTypes)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                    var type = _step.value;

	                    css.apply(undefined, [View.styles.initial].concat(_toConsumableArray(_this._getFocusStyle(type))));

	                    var _iteratorNormalCompletion2 = true;
	                    var _didIteratorError2 = false;
	                    var _iteratorError2 = undefined;

	                    try {
	                        for (var _iterator2 = Object.values(BorderStyles)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	                            var borders = _step2.value;

	                            css.apply(undefined, [View.styles.initial].concat(_toConsumableArray(_this._getButtonStyle(type, borders))));
	                        }
	                    } catch (err) {
	                        _didIteratorError2 = true;
	                        _iteratorError2 = err;
	                    } finally {
	                        try {
	                            if (!_iteratorNormalCompletion2 && _iterator2.return) {
	                                _iterator2.return();
	                            }
	                        } finally {
	                            if (_didIteratorError2) {
	                                throw _iteratorError2;
	                            }
	                        }
	                    }
	                }
	            } catch (err) {
	                _didIteratorError = true;
	                _iteratorError = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion && _iterator.return) {
	                        _iterator.return();
	                    }
	                } finally {
	                    if (_didIteratorError) {
	                        throw _iteratorError;
	                    }
	                }
	            }
	        }, _this._getFocusStyle = function (type) {
	            var focusBackgroundStyle = void 0;
	            if (type === KeyTypes.INPUT_NAVIGATION || type === KeyTypes.KEYPAD_NAVIGATION) {
	                focusBackgroundStyle = styles.light;
	            } else {
	                focusBackgroundStyle = styles.bright;
	            }

	            return [styles.focusBox, focusBackgroundStyle];
	        }, _this._getButtonStyle = function (type, borders, style) {
	            // Select the appropriate style for the button.
	            var backgroundStyle = void 0;
	            switch (type) {
	                case KeyTypes.EMPTY:
	                    backgroundStyle = styles.empty;
	                    break;

	                case KeyTypes.MANY:
	                case KeyTypes.VALUE:
	                    backgroundStyle = styles.value;
	                    break;

	                case KeyTypes.OPERATOR:
	                    backgroundStyle = styles.operator;
	                    break;

	                case KeyTypes.INPUT_NAVIGATION:
	                case KeyTypes.KEYPAD_NAVIGATION:
	                    backgroundStyle = styles.control;
	                    break;

	                case KeyTypes.ECHO:
	                    backgroundStyle = null;
	                    break;
	            }

	            var borderStyle = [];
	            if (borders.indexOf(BorderDirections.LEFT) !== -1) {
	                borderStyle.push(styles.leftBorder);
	            }
	            if (borders.indexOf(BorderDirections.BOTTOM) !== -1) {
	                borderStyle.push(styles.bottomBorder);
	            }

	            return [styles.buttonBase, backgroundStyle].concat(borderStyle, [type === KeyTypes.ECHO && styles.echo, _this.buttonSizeStyle], _toConsumableArray(Array.isArray(style) ? style : [style]));
	        }, _temp), _possibleConstructorReturn(_this, _ret);
	    }

	    _createClass(KeypadButton, [{
	        key: 'componentWillMount',
	        value: function componentWillMount() {
	            this.buttonSizeStyle = styleForButtonDimensions(this.props.heightPx, this.props.widthPx);
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            this._preInjectStyles();
	        }
	    }, {
	        key: 'componentWillUpdate',
	        value: function componentWillUpdate(newProps, newState) {
	            // Only recompute the Aphrodite StyleSheet when the button height has
	            // changed. Though it is safe to recompute the StyleSheet (since
	            // they're content-addressable), it saves us a bunch of hashing and
	            // other work to cache it here.
	            if (newProps.heightPx !== this.props.heightPx || newProps.widthPx !== this.props.widthPx) {
	                this.buttonSizeStyle = styleForButtonDimensions(newProps.heightPx, newProps.widthPx);

	                this._preInjectStyles();
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _props = this.props,
	                ariaLabel = _props.ariaLabel,
	                borders = _props.borders,
	                childKeys = _props.childKeys,
	                disabled = _props.disabled,
	                focused = _props.focused,
	                icon = _props.icon,
	                onTouchCancel = _props.onTouchCancel,
	                onTouchEnd = _props.onTouchEnd,
	                onTouchMove = _props.onTouchMove,
	                onTouchStart = _props.onTouchStart,
	                popoverEnabled = _props.popoverEnabled,
	                style = _props.style,
	                type = _props.type;

	            // We render in the focus state if the key is focused, or if it's an
	            // echo.

	            var renderFocused = !disabled && focused || popoverEnabled || type === KeyTypes.ECHO;
	            var buttonStyle = this._getButtonStyle(type, borders, style);
	            var focusStyle = this._getFocusStyle(type);
	            var iconWrapperStyle = [styles.iconWrapper, disabled && styles.disabled];

	            var eventHandlers = {
	                onTouchCancel: onTouchCancel, onTouchEnd: onTouchEnd, onTouchMove: onTouchMove, onTouchStart: onTouchStart
	            };

	            var maybeFocusBox = renderFocused && React.createElement(View, { style: focusStyle });
	            var maybeCornerDecal = !renderFocused && !disabled && childKeys && childKeys.length > 0 && React.createElement(CornerDecal, { style: styles.decalInset });

	            if (type === KeyTypes.EMPTY) {
	                return React.createElement(View, _extends({ style: buttonStyle }, eventHandlers));
	            } else if (type === KeyTypes.MANY) {
	                // TODO(charlie): Make the long-press interaction accessible. See
	                // the TODO in key-configs.js for more.
	                var manyButtonA11yMarkup = {
	                    role: 'button',
	                    ariaLabel: childKeys[0].ariaLabel
	                };
	                var icons = childKeys.map(function (keyConfig) {
	                    return keyConfig.icon;
	                });
	                return React.createElement(
	                    View,
	                    _extends({
	                        style: buttonStyle
	                    }, eventHandlers, manyButtonA11yMarkup),
	                    maybeFocusBox,
	                    React.createElement(
	                        View,
	                        { style: iconWrapperStyle },
	                        React.createElement(MultiSymbolGrid, { icons: icons, focused: renderFocused })
	                    ),
	                    maybeCornerDecal
	                );
	            } else {
	                var a11yMarkup = {
	                    role: 'button',
	                    ariaLabel: ariaLabel
	                };

	                return React.createElement(
	                    View,
	                    _extends({ style: buttonStyle }, eventHandlers, a11yMarkup),
	                    maybeFocusBox,
	                    React.createElement(
	                        View,
	                        { style: iconWrapperStyle },
	                        React.createElement(Icon, { icon: icon, focused: renderFocused })
	                    ),
	                    maybeCornerDecal
	                );
	            }
	        }
	    }]);

	    return KeypadButton;
	}(React.PureComponent);

	KeypadButton.propTypes = {
	    ariaLabel: React.PropTypes.string,
	    // The borders to display on the button. Typically, this should be set
	    // using one of the preset `BorderStyles` options.
	    borders: bordersPropType,
	    // Any additional keys that can be accessed by long-pressing on the
	    // button.
	    childKeys: React.PropTypes.arrayOf(keyConfigPropType),
	    // Whether the button should be rendered in a 'disabled' state, i.e.,
	    // without any touch feedback.
	    disabled: React.PropTypes.bool,
	    focused: React.PropTypes.bool,
	    heightPx: React.PropTypes.number.isRequired,
	    icon: iconPropType,
	    onTouchCancel: React.PropTypes.func,
	    onTouchEnd: React.PropTypes.func,
	    onTouchMove: React.PropTypes.func,
	    onTouchStart: React.PropTypes.func,
	    popoverEnabled: React.PropTypes.bool,
	    style: React.PropTypes.any,
	    type: React.PropTypes.oneOf(Object.keys(KeyTypes)).isRequired,
	    // NOTE(charlie): We may want to make this optional for phone layouts
	    // (and rely on Flexbox instead), since it might not be pixel perfect
	    // with borders and such.
	    widthPx: React.PropTypes.number.isRequired
	};
	KeypadButton.defaultProps = {
	    borders: BorderStyles.ALL,
	    childKeys: [],
	    disabled: false,
	    focused: false,
	    popoverEnabled: false
	};


	var focusInsetPx = 4;
	var focusBoxZIndex = 0;

	var styles = StyleSheet.create({
	    buttonBase: {
	        // HACK(benkomalo): support old style flex box in Android browsers
	        '-webkit-box-flex': '1',
	        flex: 1,
	        cursor: 'pointer',
	        // Make the text unselectable
	        userSelect: 'none',
	        justifyContent: 'center',
	        alignItems: 'center',
	        // Borders are made selectively visible.
	        borderColor: innerBorderColor,
	        borderStyle: innerBorderStyle,
	        boxSizing: 'border-box'
	    },

	    decalInset: {
	        top: focusInsetPx,
	        right: focusInsetPx
	    },

	    // Overrides for the echo state, where we want to render the borders for
	    // layout purposes, but we don't want them to be visible.
	    echo: {
	        borderColor: 'transparent'
	    },

	    // Background colors and other base styles that may vary between key types.
	    value: {
	        backgroundColor: valueGrey
	    },
	    operator: {
	        backgroundColor: operatorGrey
	    },
	    control: {
	        backgroundColor: controlGrey
	    },
	    empty: {
	        backgroundColor: emptyGrey,
	        cursor: 'default'
	    },

	    bright: {
	        backgroundColor: brightGreen
	    },
	    light: {
	        backgroundColor: 'rgba(33, 36, 44, 0.1)'
	    },

	    iconWrapper: {
	        zIndex: focusBoxZIndex + 1
	    },

	    focusBox: {
	        position: 'absolute',
	        zIndex: focusBoxZIndex,
	        left: focusInsetPx,
	        right: focusInsetPx,
	        bottom: focusInsetPx,
	        top: focusInsetPx,
	        borderRadius: 1
	    },

	    disabled: {
	        opacity: 0.3
	    },

	    // Styles used to render the appropriate borders. Buttons are only allowed
	    // to render left and bottom borders, to simplify layout.
	    leftBorder: {
	        borderLeftWidth: innerBorderWidthPx
	    },
	    bottomBorder: {
	        borderBottomWidth: innerBorderWidthPx
	    }
	});

	var styleForButtonDimensions = function styleForButtonDimensions(heightPx, widthPx) {
	    return StyleSheet.create({
	        buttonSize: {
	            height: heightPx,
	            width: widthPx,
	            maxWidth: widthPx
	        }
	    }).buttonSize;
	};

	var mapStateToProps = function mapStateToProps(state) {
	    return state.layout.buttonDimensions;
	};

	module.exports = connect(mapStateToProps)(KeypadButton);

/***/ },
/* 561 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * A component that renders an icon for a symbol with the given name.
	 */

	var React = __webpack_require__(1);

	var _require = __webpack_require__(489),
	    StyleSheet = _require.StyleSheet;

	var MathIcon = __webpack_require__(562);
	var SvgIcon = __webpack_require__(565);
	var TextIcon = __webpack_require__(609);

	var _require2 = __webpack_require__(610),
	    IconTypes = _require2.IconTypes;

	var _require3 = __webpack_require__(611),
	    iconPropType = _require3.iconPropType;

	var _require4 = __webpack_require__(564),
	    gray25 = _require4.gray25;

	var focusedColor = '#FFF';
	var unfocusedColor = gray25;

	var Icon = function (_React$PureComponent) {
	    _inherits(Icon, _React$PureComponent);

	    function Icon() {
	        _classCallCheck(this, Icon);

	        return _possibleConstructorReturn(this, (Icon.__proto__ || Object.getPrototypeOf(Icon)).apply(this, arguments));
	    }

	    _createClass(Icon, [{
	        key: 'render',
	        value: function render() {
	            var _props = this.props,
	                focused = _props.focused,
	                icon = _props.icon,
	                style = _props.style;


	            var styleWithFocus = [focused ? styles.focused : styles.unfocused].concat(_toConsumableArray(Array.isArray(style) ? style : [style]));

	            switch (icon.type) {
	                case IconTypes.MATH:
	                    return React.createElement(MathIcon, {
	                        math: icon.data,
	                        style: styleWithFocus
	                    });

	                case IconTypes.SVG:
	                    // TODO(charlie): Support passing style objects to `SvgIcon`.
	                    // This will require migrating the individual icons to use
	                    // `currentColor` and accept a `className` prop, rather than
	                    // relying on an explicit color prop.
	                    return React.createElement(SvgIcon, {
	                        name: icon.data,
	                        color: focused ? focusedColor : unfocusedColor
	                    });

	                case IconTypes.TEXT:
	                    return React.createElement(TextIcon, {
	                        character: icon.data,
	                        style: styleWithFocus
	                    });
	            }

	            throw new Error("No icon or symbol provided");
	        }
	    }]);

	    return Icon;
	}(React.PureComponent);

	Icon.propTypes = {
	    focused: React.PropTypes.bool,
	    icon: iconPropType.isRequired,
	    // An Aphrodite style object, or an array of Aphrodite style objects.
	    // Note that custom styles will only be applied to text and math icons
	    // (and not SVG icons).
	    style: React.PropTypes.any
	};


	var styles = StyleSheet.create({
	    unfocused: {
	        color: unfocusedColor
	    },

	    focused: {
	        color: focusedColor
	    }
	});

	module.exports = Icon;

/***/ },
/* 562 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * A component that renders an icon with math (via KaTeX).
	 */

	var React = __webpack_require__(1);
	var ReactDOM = __webpack_require__(550);

	var _require = __webpack_require__(489),
	    StyleSheet = _require.StyleSheet;

	var _require2 = __webpack_require__(487),
	    View = _require2.View;

	var _require3 = __webpack_require__(563),
	    row = _require3.row,
	    centered = _require3.centered;

	var _require4 = __webpack_require__(564),
	    iconSizeHeightPx = _require4.iconSizeHeightPx,
	    iconSizeWidthPx = _require4.iconSizeWidthPx;

	var MathIcon = function (_React$Component) {
	    _inherits(MathIcon, _React$Component);

	    function MathIcon() {
	        var _ref;

	        var _temp, _this, _ret;

	        _classCallCheck(this, MathIcon);

	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }

	        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = MathIcon.__proto__ || Object.getPrototypeOf(MathIcon)).call.apply(_ref, [this].concat(args))), _this), _this._renderMath = function () {
	            var math = _this.props.math;

	            window.katex.render(math, ReactDOM.findDOMNode(_this));
	        }, _temp), _possibleConstructorReturn(_this, _ret);
	    }

	    _createClass(MathIcon, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            this._renderMath();
	        }
	    }, {
	        key: 'componentDidUpdate',
	        value: function componentDidUpdate(prevProps) {
	            if (prevProps.math !== this.props.math) {
	                this._renderMath();
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var style = this.props.style;


	            var containerStyle = [row, centered, styles.size, styles.base].concat(_toConsumableArray(Array.isArray(style) ? style : [style]));

	            return React.createElement(View, { style: containerStyle });
	        }
	    }]);

	    return MathIcon;
	}(React.Component);

	MathIcon.propTypes = {
	    math: React.PropTypes.string.isRequired,
	    style: React.PropTypes.any
	};


	var styles = StyleSheet.create({
	    size: {
	        height: iconSizeHeightPx,
	        width: iconSizeWidthPx
	    },

	    base: {
	        fontSize: 25
	    }
	});

	module.exports = MathIcon;

/***/ },
/* 563 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Common styles shared across components.
	 */

	var _require = __webpack_require__(489),
	    StyleSheet = _require.StyleSheet;

	var _require2 = __webpack_require__(564),
	    compactKeypadBorderRadiusPx = _require2.compactKeypadBorderRadiusPx;

	module.exports = StyleSheet.create({
	    row: {
	        flexDirection: 'row'
	    },
	    column: {
	        flexDirection: 'column'
	    },
	    oneColumn: {
	        flexGrow: 1
	    },
	    fullWidth: {
	        width: '100%'
	    },
	    stretch: {
	        alignItems: 'stretch'
	    },
	    centered: {
	        justifyContent: 'center',
	        alignItems: 'center'
	    },
	    centeredText: {
	        textAlign: 'center'
	    },
	    roundedTopLeft: {
	        borderTopLeftRadius: compactKeypadBorderRadiusPx
	    },
	    roundedTopRight: {
	        borderTopRightRadius: compactKeypadBorderRadiusPx
	    }
	});

/***/ },
/* 564 */
/***/ function(module, exports) {

	'use strict';

	/**
	 * Common parameters used to style components.
	 */

	var gray85 = '#D6D8DA';

	module.exports = {
	    brightGreen: '#78C008',
	    gray17: '#21242C',
	    gray25: '#3B3E40',
	    gray68: '#888D93',
	    gray76: '#BABEC2',
	    gray85: gray85,
	    iconSizeHeightPx: 48,
	    iconSizeWidthPx: 48,
	    compactKeypadBorderRadiusPx: 4,
	    cursorHandleRadiusPx: 11,

	    // The amount to multiply the radius by to get the distance from the
	    // center to the tip of the cursor handle.  The cursor is a circle with
	    // one quadrant replace with a square.  The hypotenuse of the square is
	    // 1.41 times the radius of the circle.
	    cursorHandleDistanceMultiplier: 1.41,

	    // Keypad button colors
	    valueGrey: '#FFF',
	    operatorGrey: '#FAFAFA',
	    controlGrey: '#F6F7F7',
	    emptyGrey: '#F0F1F2',

	    // Constants defining any borders between elements in the keypad.
	    innerBorderColor: gray85,
	    innerBorderStyle: 'solid',
	    innerBorderWidthPx: 1,

	    // The width at which a device is classified as a "tablet" for the purposes
	    // of the keypad layout.
	    tabletCutoffPx: 600,

	    // The dimensions that define various components in the tree, which may be
	    // needed outside of those components in order to determine various layout
	    // parameters.
	    pageIndicatorHeightPx: 16,
	    navigationPadWidthPx: 192,
	    // HACK(charlie): This should be injected by webapp somehow.
	    // TODO(charlie): Add a link to the webapp location as soon as the footer
	    // has settled down.
	    toolbarHeightPx: 60
	};

/***/ },
/* 565 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * A component that renders a single SVG icon.
	 */

	var React = __webpack_require__(1);

	var Iconography = __webpack_require__(566);

	var SvgIcon = function (_React$Component) {
	    _inherits(SvgIcon, _React$Component);

	    function SvgIcon() {
	        _classCallCheck(this, SvgIcon);

	        return _possibleConstructorReturn(this, (SvgIcon.__proto__ || Object.getPrototypeOf(SvgIcon)).apply(this, arguments));
	    }

	    _createClass(SvgIcon, [{
	        key: 'render',
	        value: function render() {
	            var _props = this.props,
	                color = _props.color,
	                name = _props.name;


	            var SvgForName = Iconography[name];
	            return React.createElement(SvgForName, { color: color });
	        }
	    }]);

	    return SvgIcon;
	}(React.Component);

	SvgIcon.propTypes = {
	    color: React.PropTypes.string.isRequired,
	    name: React.PropTypes.string.isRequired
	};


	module.exports = SvgIcon;

/***/ },
/* 566 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * A directory of autogenerated icon components.
	 */

	module.exports = {
	    COS: __webpack_require__(567),
	    LOG: __webpack_require__(568),
	    EQUAL: __webpack_require__(569),
	    BACKSPACE: __webpack_require__(570),
	    SQRT: __webpack_require__(571),
	    EXP: __webpack_require__(572),
	    NEQ: __webpack_require__(573),
	    GEQ: __webpack_require__(574),
	    LN: __webpack_require__(575),
	    DISMISS: __webpack_require__(576),
	    SIN: __webpack_require__(577),
	    LT: __webpack_require__(578),
	    CUBE_ROOT: __webpack_require__(579),
	    PLUS: __webpack_require__(580),
	    TAN: __webpack_require__(581),
	    LEFT: __webpack_require__(582),
	    UP: __webpack_require__(584),
	    DOWN: __webpack_require__(585),
	    LEFT_PAREN: __webpack_require__(586),
	    RIGHT_PAREN: __webpack_require__(587),
	    GT: __webpack_require__(588),
	    DIVIDE: __webpack_require__(589),
	    PERIOD: __webpack_require__(590),
	    PERCENT: __webpack_require__(591),
	    TIMES: __webpack_require__(592),
	    EXP_3: __webpack_require__(593),
	    EXP_2: __webpack_require__(594),
	    RIGHT: __webpack_require__(595),
	    CDOT: __webpack_require__(596),
	    LOG_N: __webpack_require__(597),
	    LEQ: __webpack_require__(598),
	    MINUS: __webpack_require__(599),
	    NEGATIVE: __webpack_require__(599),
	    RADICAL: __webpack_require__(600),
	    FRAC_INCLUSIVE: __webpack_require__(601),
	    FRAC_EXCLUSIVE: __webpack_require__(602),
	    JUMP_OUT_PARENTHESES: __webpack_require__(603),
	    JUMP_OUT_EXPONENT: __webpack_require__(604),
	    JUMP_OUT_BASE: __webpack_require__(605),
	    JUMP_INTO_NUMERATOR: __webpack_require__(606),
	    JUMP_OUT_NUMERATOR: __webpack_require__(607),
	    JUMP_OUT_DENOMINATOR: __webpack_require__(608)
	};

/***/ },
/* 567 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * An autogenerated component that renders the COS iconograpy in SVG.
	 *
	 * Generated with: https://gist.github.com/crm416/3c7abc88e520eaed72347af240b32590.
	 */
	var React = __webpack_require__(1);

	var Cos = function (_React$Component) {
	    _inherits(Cos, _React$Component);

	    function Cos() {
	        _classCallCheck(this, Cos);

	        return _possibleConstructorReturn(this, (Cos.__proto__ || Object.getPrototypeOf(Cos)).apply(this, arguments));
	    }

	    _createClass(Cos, [{
	        key: "render",
	        value: function render() {
	            return React.createElement(
	                "svg",
	                { width: "48", height: "48", viewBox: "0 0 48 48" },
	                React.createElement(
	                    "g",
	                    { fill: "none", fillRule: "evenodd" },
	                    React.createElement("path", { fill: "none", d: "M0 0h48v48H0z" }),
	                    React.createElement("path", { fill: "none", d: "M13 12h24v24H13z" }),
	                    React.createElement("path", { d: "M18.182 29.168c1.386 0 2.226-.602 2.674-1.232l-1.162-1.078a1.707 1.707 0 0 1-1.428.728c-1.078 0-1.834-.798-1.834-1.974s.756-1.96 1.834-1.96c.616 0 1.106.252 1.428.728l1.162-1.092c-.448-.616-1.288-1.218-2.674-1.218-2.086 0-3.584 1.47-3.584 3.542 0 2.086 1.498 3.556 3.584 3.556zm6.972 0c2.24 0 3.584-1.624 3.584-3.556 0-1.918-1.344-3.542-3.584-3.542-2.226 0-3.57 1.624-3.57 3.542 0 1.932 1.344 3.556 3.57 3.556zm0-1.582c-1.106 0-1.722-.91-1.722-1.974 0-1.05.616-1.96 1.722-1.96 1.106 0 1.736.91 1.736 1.96 0 1.064-.63 1.974-1.736 1.974zm7.336 1.582c1.876 0 2.926-.938 2.926-2.17 0-2.73-4.004-1.89-4.004-2.898 0-.378.42-.672 1.064-.672.826 0 1.596.35 2.002.784l.714-1.218c-.672-.532-1.582-.924-2.73-.924-1.778 0-2.772.994-2.772 2.128 0 2.66 4.018 1.75 4.018 2.87 0 .42-.364.728-1.134.728-.84 0-1.848-.462-2.338-.924l-.77 1.246c.714.658 1.848 1.05 3.024 1.05z", fill: this.props.color })
	                )
	            );
	        }
	    }]);

	    return Cos;
	}(React.Component);

	Cos.propTypes = {
	    color: React.PropTypes.string.isRequired
	};


	module.exports = Cos;

/***/ },
/* 568 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * An autogenerated component that renders the LOG iconograpy in SVG.
	 *
	 * Generated with: https://gist.github.com/crm416/3c7abc88e520eaed72347af240b32590.
	 */
	var React = __webpack_require__(1);

	var Log = function (_React$Component) {
	    _inherits(Log, _React$Component);

	    function Log() {
	        _classCallCheck(this, Log);

	        return _possibleConstructorReturn(this, (Log.__proto__ || Object.getPrototypeOf(Log)).apply(this, arguments));
	    }

	    _createClass(Log, [{
	        key: "render",
	        value: function render() {
	            return React.createElement(
	                "svg",
	                { width: "48", height: "48", viewBox: "0 0 48 48" },
	                React.createElement(
	                    "g",
	                    { fill: "none", fillRule: "evenodd" },
	                    React.createElement("path", { fill: "none", d: "M0 0h48v48H0z" }),
	                    React.createElement("path", { d: "M16.776 29v-9.338h-1.778V29h1.778zm4.9.168c2.24 0 3.584-1.624 3.584-3.556 0-1.918-1.344-3.542-3.584-3.542-2.226 0-3.57 1.624-3.57 3.542 0 1.932 1.344 3.556 3.57 3.556zm0-1.582c-1.106 0-1.722-.91-1.722-1.974 0-1.05.616-1.96 1.722-1.96 1.106 0 1.736.91 1.736 1.96 0 1.064-.63 1.974-1.736 1.974zm7.672 4.158c1.666 0 3.654-.63 3.654-3.206v-6.3H31.21v.868c-.546-.686-1.274-1.036-2.086-1.036-1.708 0-2.982 1.232-2.982 3.444 0 2.254 1.288 3.444 2.982 3.444.826 0 1.554-.392 2.086-1.064v.686c0 1.33-1.008 1.708-1.862 1.708-.854 0-1.568-.238-2.114-.84l-.798 1.288c.854.742 1.75 1.008 2.912 1.008zm.336-4.368c-1.008 0-1.708-.7-1.708-1.862 0-1.162.7-1.862 1.708-1.862.588 0 1.232.322 1.526.77v2.184c-.294.434-.938.77-1.526.77z", fill: this.props.color })
	                )
	            );
	        }
	    }]);

	    return Log;
	}(React.Component);

	Log.propTypes = {
	    color: React.PropTypes.string.isRequired
	};


	module.exports = Log;

/***/ },
/* 569 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * An autogenerated component that renders the EQUAL iconograpy in SVG.
	 *
	 * Generated with: https://gist.github.com/crm416/3c7abc88e520eaed72347af240b32590.
	 */
	var React = __webpack_require__(1);

	var Equal = function (_React$Component) {
	    _inherits(Equal, _React$Component);

	    function Equal() {
	        _classCallCheck(this, Equal);

	        return _possibleConstructorReturn(this, (Equal.__proto__ || Object.getPrototypeOf(Equal)).apply(this, arguments));
	    }

	    _createClass(Equal, [{
	        key: "render",
	        value: function render() {
	            return React.createElement(
	                "svg",
	                { width: "48", height: "48", viewBox: "0 0 48 48" },
	                React.createElement(
	                    "g",
	                    { fill: "none", fillRule: "evenodd" },
	                    React.createElement("path", { fill: "none", d: "M0 0h48v48H0z" }),
	                    React.createElement("path", { fill: "none", d: "M12 12h24v24H12z" }),
	                    React.createElement("path", { d: "M16 21h17M16 27h17", stroke: this.props.color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" })
	                )
	            );
	        }
	    }]);

	    return Equal;
	}(React.Component);

	Equal.propTypes = {
	    color: React.PropTypes.string.isRequired
	};


	module.exports = Equal;

/***/ },
/* 570 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	/**
	 * An autogenerated component that renders the BACKSPACE iconograpy in SVG.
	 *
	 * Generated with: https://gist.github.com/crm416/3c7abc88e520eaed72347af240b32590.
	 */
	var React = __webpack_require__(1);

	var Backspace = function Backspace() {
	  return React.createElement(
	    "svg",
	    { width: "48", height: "48", viewBox: "0 0 48 48" },
	    React.createElement(
	      "g",
	      { fill: "none", fillRule: "evenodd" },
	      React.createElement("path", { fill: "none", d: "M0 0h48v48H0z" }),
	      React.createElement("path", { d: "M13 24l6 6h14V18H19l-6 6zm-1.414-1.414l6-6A2 2 0 0 1 19 16h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H19a2 2 0 0 1-1.414-.586l-6-6a2 2 0 0 1 0-2.828z", fill: "#888D93" }),
	      React.createElement("path", { d: "M23 21l6 6M29 21l-6 6", stroke: "#888D93", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" })
	    )
	  );
	};

	module.exports = Backspace;

/***/ },
/* 571 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * An autogenerated component that renders the SQRT iconograpy in SVG.
	 *
	 * Generated with: https://gist.github.com/crm416/3c7abc88e520eaed72347af240b32590.
	 */
	var React = __webpack_require__(1);

	var Sqrt = function (_React$Component) {
	    _inherits(Sqrt, _React$Component);

	    function Sqrt() {
	        _classCallCheck(this, Sqrt);

	        return _possibleConstructorReturn(this, (Sqrt.__proto__ || Object.getPrototypeOf(Sqrt)).apply(this, arguments));
	    }

	    _createClass(Sqrt, [{
	        key: "render",
	        value: function render() {
	            return React.createElement(
	                "svg",
	                { width: "48", height: "48", viewBox: "0 0 48 48" },
	                React.createElement(
	                    "g",
	                    { fill: "none", fillRule: "evenodd" },
	                    React.createElement("path", { fill: "none", d: "M0 0h48v48H0z" }),
	                    React.createElement("path", { stroke: this.props.color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", d: "M14 29l4 6 9-14h7" })
	                )
	            );
	        }
	    }]);

	    return Sqrt;
	}(React.Component);

	Sqrt.propTypes = {
	    color: React.PropTypes.string.isRequired
	};


	module.exports = Sqrt;

/***/ },
/* 572 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * An autogenerated component that renders the EXP iconograpy in SVG.
	 *
	 * Generated with: https://gist.github.com/crm416/3c7abc88e520eaed72347af240b32590.
	 */
	var React = __webpack_require__(1);

	var Exp = function (_React$Component) {
	    _inherits(Exp, _React$Component);

	    function Exp() {
	        _classCallCheck(this, Exp);

	        return _possibleConstructorReturn(this, (Exp.__proto__ || Object.getPrototypeOf(Exp)).apply(this, arguments));
	    }

	    _createClass(Exp, [{
	        key: "render",
	        value: function render() {
	            return React.createElement(
	                "svg",
	                { width: "48", height: "48", viewBox: "0 0 48 48" },
	                React.createElement(
	                    "g",
	                    { fill: "none", fillRule: "evenodd" },
	                    React.createElement("path", { fill: "none", d: "M0 0h48v48H0z" }),
	                    React.createElement("path", { d: "M28 16.997c0-.55.453-.997.997-.997h6.006c.55 0 .997.453.997.997v6.006c0 .55-.453.997-.997.997h-6.006c-.55 0-.997-.453-.997-.997v-6.006zM30 18h4v4h-4v-4zM14 21c0-.552.456-1 1.002-1h9.996A1 1 0 0 1 26 21v14c0 .552-.456 1-1.002 1h-9.996A1 1 0 0 1 14 35V21zm2 1h8v12h-8V22z", fill: this.props.color })
	                )
	            );
	        }
	    }]);

	    return Exp;
	}(React.Component);

	Exp.propTypes = {
	    color: React.PropTypes.string.isRequired
	};


	module.exports = Exp;

/***/ },
/* 573 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * An autogenerated component that renders the NEQ iconograpy in SVG.
	 *
	 * Generated with: https://gist.github.com/crm416/3c7abc88e520eaed72347af240b32590.
	 */
	var React = __webpack_require__(1);

	var Neq = function (_React$Component) {
	    _inherits(Neq, _React$Component);

	    function Neq() {
	        _classCallCheck(this, Neq);

	        return _possibleConstructorReturn(this, (Neq.__proto__ || Object.getPrototypeOf(Neq)).apply(this, arguments));
	    }

	    _createClass(Neq, [{
	        key: "render",
	        value: function render() {
	            return React.createElement(
	                "svg",
	                { width: "48", height: "48", viewBox: "0 0 48 48" },
	                React.createElement(
	                    "g",
	                    { fill: "none", fillRule: "evenodd" },
	                    React.createElement("path", { fill: "none", d: "M0 0h48v48H0z" }),
	                    React.createElement("path", { fill: "none", d: "M12 12h24v24H12z" }),
	                    React.createElement("path", { d: "M19 33l10-18M16 21h17M16 27h17", stroke: this.props.color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" })
	                )
	            );
	        }
	    }]);

	    return Neq;
	}(React.Component);

	Neq.propTypes = {
	    color: React.PropTypes.string.isRequired
	};


	module.exports = Neq;

/***/ },
/* 574 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * An autogenerated component that renders the GEQ iconograpy in SVG.
	 *
	 * Generated with: https://gist.github.com/crm416/3c7abc88e520eaed72347af240b32590.
	 */
	var React = __webpack_require__(1);

	var Geq = function (_React$Component) {
	    _inherits(Geq, _React$Component);

	    function Geq() {
	        _classCallCheck(this, Geq);

	        return _possibleConstructorReturn(this, (Geq.__proto__ || Object.getPrototypeOf(Geq)).apply(this, arguments));
	    }

	    _createClass(Geq, [{
	        key: "render",
	        value: function render() {
	            return React.createElement(
	                "svg",
	                { width: "48", height: "48", viewBox: "0 0 48 48" },
	                React.createElement(
	                    "g",
	                    { fill: "none", fillRule: "evenodd" },
	                    React.createElement("path", { fill: "none", d: "M0 0h48v48H0z" }),
	                    React.createElement("path", { fill: "none", d: "M12 12h24v24H12z" }),
	                    React.createElement("path", { d: "M16 33h16M16 30l16-6-16-6", stroke: this.props.color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" })
	                )
	            );
	        }
	    }]);

	    return Geq;
	}(React.Component);

	Geq.propTypes = {
	    color: React.PropTypes.string.isRequired
	};


	module.exports = Geq;

/***/ },
/* 575 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * An autogenerated component that renders the LN iconograpy in SVG.
	 *
	 * Generated with: https://gist.github.com/crm416/3c7abc88e520eaed72347af240b32590.
	 */
	var React = __webpack_require__(1);

	var Ln = function (_React$Component) {
	    _inherits(Ln, _React$Component);

	    function Ln() {
	        _classCallCheck(this, Ln);

	        return _possibleConstructorReturn(this, (Ln.__proto__ || Object.getPrototypeOf(Ln)).apply(this, arguments));
	    }

	    _createClass(Ln, [{
	        key: "render",
	        value: function render() {
	            return React.createElement(
	                "svg",
	                { width: "48", height: "48", viewBox: "0 0 48 48" },
	                React.createElement(
	                    "g",
	                    { fill: "none", fillRule: "evenodd" },
	                    React.createElement("path", { fill: "none", d: "M0 0h48v48H0z" }),
	                    React.createElement("path", { d: "M20.836 29v-9.338h-1.778V29h1.778zm8.106 0v-4.774c0-1.316-.714-2.156-2.198-2.156-1.106 0-1.932.532-2.366 1.05v-.882H22.6V29h1.778v-4.55c.294-.406.84-.798 1.54-.798.756 0 1.246.322 1.246 1.26V29h1.778z", fill: this.props.color })
	                )
	            );
	        }
	    }]);

	    return Ln;
	}(React.Component);

	Ln.propTypes = {
	    color: React.PropTypes.string.isRequired
	};


	module.exports = Ln;

/***/ },
/* 576 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	/**
	 * An autogenerated component that renders the DISMISS iconograpy in SVG.
	 *
	 * Generated with: https://gist.github.com/crm416/3c7abc88e520eaed72347af240b32590.
	 */
	var React = __webpack_require__(1);

	var Dismiss = function Dismiss() {
	  return React.createElement(
	    "svg",
	    { width: "48", height: "48", viewBox: "0 0 48 48" },
	    React.createElement(
	      "g",
	      { fill: "none", fillRule: "evenodd" },
	      React.createElement("path", { fill: "none", d: "M0 0h48v48H0z" }),
	      React.createElement("path", { d: "M18 21l6 6 6-6", strokeLinecap: "round", strokeWidth: "2", stroke: "#71B307", strokeLinejoin: "round" })
	    )
	  );
	};

	module.exports = Dismiss;

/***/ },
/* 577 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * An autogenerated component that renders the SIN iconograpy in SVG.
	 *
	 * Generated with: https://gist.github.com/crm416/3c7abc88e520eaed72347af240b32590.
	 */
	var React = __webpack_require__(1);

	var Sin = function (_React$Component) {
	    _inherits(Sin, _React$Component);

	    function Sin() {
	        _classCallCheck(this, Sin);

	        return _possibleConstructorReturn(this, (Sin.__proto__ || Object.getPrototypeOf(Sin)).apply(this, arguments));
	    }

	    _createClass(Sin, [{
	        key: "render",
	        value: function render() {
	            return React.createElement(
	                "svg",
	                { width: "48", height: "48", viewBox: "0 0 48 48" },
	                React.createElement(
	                    "g",
	                    { fill: "none", fillRule: "evenodd" },
	                    React.createElement("path", { fill: "none", d: "M0 0h48v48H0z" }),
	                    React.createElement("path", { fill: "none", d: "M12 12h24v24H12z" }),
	                    React.createElement("path", { d: "M18.655 29.168c1.876 0 2.926-.938 2.926-2.17 0-2.73-4.004-1.89-4.004-2.898 0-.378.42-.672 1.064-.672.826 0 1.596.35 2.002.784l.714-1.218c-.672-.532-1.582-.924-2.73-.924-1.778 0-2.772.994-2.772 2.128 0 2.66 4.018 1.75 4.018 2.87 0 .42-.364.728-1.134.728-.84 0-1.848-.462-2.338-.924l-.77 1.246c.714.658 1.848 1.05 3.024 1.05zm5.124-7.658c.588 0 1.064-.476 1.064-1.064 0-.588-.476-1.05-1.064-1.05a1.06 1.06 0 0 0-1.064 1.05c0 .588.49 1.064 1.064 1.064zm.896 7.49v-6.762h-1.778V29h1.778zm8.106 0v-4.774c0-1.316-.714-2.156-2.198-2.156-1.106 0-1.932.532-2.366 1.05v-.882h-1.778V29h1.778v-4.55c.294-.406.84-.798 1.54-.798.756 0 1.246.322 1.246 1.26V29h1.778z", fill: this.props.color })
	                )
	            );
	        }
	    }]);

	    return Sin;
	}(React.Component);

	Sin.propTypes = {
	    color: React.PropTypes.string.isRequired
	};


	module.exports = Sin;

/***/ },
/* 578 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * An autogenerated component that renders the LT iconograpy in SVG.
	 *
	 * Generated with: https://gist.github.com/crm416/3c7abc88e520eaed72347af240b32590.
	 */
	var React = __webpack_require__(1);

	var Lt = function (_React$Component) {
	    _inherits(Lt, _React$Component);

	    function Lt() {
	        _classCallCheck(this, Lt);

	        return _possibleConstructorReturn(this, (Lt.__proto__ || Object.getPrototypeOf(Lt)).apply(this, arguments));
	    }

	    _createClass(Lt, [{
	        key: "render",
	        value: function render() {
	            return React.createElement(
	                "svg",
	                { width: "48", height: "48", viewBox: "0 0 48 48" },
	                React.createElement(
	                    "g",
	                    { fill: "none", fillRule: "evenodd" },
	                    React.createElement("path", { fill: "none", d: "M0 0h48v48H0z" }),
	                    React.createElement("path", { fill: "none", d: "M12 12h24v24H12z" }),
	                    React.createElement("path", { stroke: this.props.color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", d: "M32 30l-16-6 16-6" })
	                )
	            );
	        }
	    }]);

	    return Lt;
	}(React.Component);

	Lt.propTypes = {
	    color: React.PropTypes.string.isRequired
	};


	module.exports = Lt;

/***/ },
/* 579 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * An autogenerated component that renders the CUBE_ROOT iconograpy in SVG.
	 *
	 * Generated with: https://gist.github.com/crm416/3c7abc88e520eaed72347af240b32590.
	 */
	var React = __webpack_require__(1);

	var CubeRoot = function (_React$Component) {
	    _inherits(CubeRoot, _React$Component);

	    function CubeRoot() {
	        _classCallCheck(this, CubeRoot);

	        return _possibleConstructorReturn(this, (CubeRoot.__proto__ || Object.getPrototypeOf(CubeRoot)).apply(this, arguments));
	    }

	    _createClass(CubeRoot, [{
	        key: "render",
	        value: function render() {
	            return React.createElement(
	                "svg",
	                { width: "48", height: "48", viewBox: "0 0 48 48" },
	                React.createElement(
	                    "g",
	                    { fill: "none", fillRule: "evenodd" },
	                    React.createElement("path", { fill: "none", d: "M0 0h48v48H0z" }),
	                    React.createElement("path", { d: "M17.91 23.12c1.66 0 2.76-.81 2.76-1.98 0-.96-.86-1.51-1.57-1.58.79-.13 1.46-.72 1.46-1.5 0-1.1-.95-1.83-2.65-1.83-1.23 0-2.11.45-2.67 1.08l.83 1.08c.47-.42 1.05-.64 1.66-.64.64 0 1.12.19 1.12.61 0 .35-.39.52-1.08.52-.25 0-.77 0-.9-.01v1.53c.1-.01.61-.01.9-.01.91 0 1.19.18 1.19.56 0 .37-.38.65-1.12.65-.58 0-1.34-.23-1.82-.7l-.87 1.17c.52.6 1.48 1.05 2.76 1.05z", fill: this.props.color }),
	                    React.createElement("path", { stroke: this.props.color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", d: "M14 29l4 6 9-14h7" })
	                )
	            );
	        }
	    }]);

	    return CubeRoot;
	}(React.Component);

	CubeRoot.propTypes = {
	    color: React.PropTypes.string.isRequired
	};


	module.exports = CubeRoot;

/***/ },
/* 580 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * An autogenerated component that renders the PLUS iconograpy in SVG.
	 *
	 * Generated with: https://gist.github.com/crm416/3c7abc88e520eaed72347af240b32590.
	 */
	var React = __webpack_require__(1);

	var Plus = function (_React$Component) {
	    _inherits(Plus, _React$Component);

	    function Plus() {
	        _classCallCheck(this, Plus);

	        return _possibleConstructorReturn(this, (Plus.__proto__ || Object.getPrototypeOf(Plus)).apply(this, arguments));
	    }

	    _createClass(Plus, [{
	        key: "render",
	        value: function render() {
	            return React.createElement(
	                "svg",
	                { width: "48", height: "48", viewBox: "0 0 48 48" },
	                React.createElement(
	                    "g",
	                    { fill: "none", fillRule: "evenodd" },
	                    React.createElement("path", { fill: "none", d: "M0 0h48v48H0z" }),
	                    React.createElement("path", { d: "M19 24h10M24 29V19", stroke: this.props.color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" })
	                )
	            );
	        }
	    }]);

	    return Plus;
	}(React.Component);

	Plus.propTypes = {
	    color: React.PropTypes.string.isRequired
	};


	module.exports = Plus;

/***/ },
/* 581 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * An autogenerated component that renders the TAN iconograpy in SVG.
	 *
	 * Generated with: https://gist.github.com/crm416/3c7abc88e520eaed72347af240b32590.
	 */
	var React = __webpack_require__(1);

	var Tan = function (_React$Component) {
	    _inherits(Tan, _React$Component);

	    function Tan() {
	        _classCallCheck(this, Tan);

	        return _possibleConstructorReturn(this, (Tan.__proto__ || Object.getPrototypeOf(Tan)).apply(this, arguments));
	    }

	    _createClass(Tan, [{
	        key: "render",
	        value: function render() {
	            return React.createElement(
	                "svg",
	                { width: "48", height: "48", viewBox: "0 0 48 48" },
	                React.createElement(
	                    "g",
	                    { fill: "none", fillRule: "evenodd" },
	                    React.createElement("path", { fill: "none", d: "M0 0h48v48H0z" }),
	                    React.createElement("path", { fill: "none", d: "M12 12h24v24H12z" }),
	                    React.createElement("path", { d: "M16.93 29.168c.742 0 1.218-.196 1.484-.434l-.378-1.344c-.098.098-.35.196-.616.196-.392 0-.616-.322-.616-.742v-3.052h1.372v-1.554h-1.372V20.39h-1.792v1.848h-1.12v1.554h1.12v3.528c0 1.204.672 1.848 1.918 1.848zM25.232 29v-4.368c0-1.946-1.414-2.562-2.954-2.562-1.064 0-2.128.336-2.954 1.064l.672 1.19c.574-.532 1.246-.798 1.974-.798.896 0 1.484.448 1.484 1.134v.91c-.448-.532-1.246-.826-2.142-.826-1.078 0-2.352.602-2.352 2.184 0 1.512 1.274 2.24 2.352 2.24.882 0 1.68-.322 2.142-.868v.7h1.778zm-3.206-1.036c-.7 0-1.274-.364-1.274-.994 0-.658.574-1.022 1.274-1.022.574 0 1.134.196 1.428.588v.84c-.294.392-.854.588-1.428.588zM33.338 29v-4.774c0-1.316-.714-2.156-2.198-2.156-1.106 0-1.932.532-2.366 1.05v-.882h-1.778V29h1.778v-4.55c.294-.406.84-.798 1.54-.798.756 0 1.246.322 1.246 1.26V29h1.778z", fill: this.props.color })
	                )
	            );
	        }
	    }]);

	    return Tan;
	}(React.Component);

	Tan.propTypes = {
	    color: React.PropTypes.string.isRequired
	};


	module.exports = Tan;

/***/ },
/* 582 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * An component that renders the LEFT iconograpy in SVG.
	 */
	var React = __webpack_require__(1);

	var Arrow = __webpack_require__(583);

	var Left = function Left() {
	  return React.createElement(
	    'svg',
	    { width: '48', height: '48', viewBox: '0 0 48 48' },
	    React.createElement(Arrow, null)
	  );
	};

	module.exports = Left;

/***/ },
/* 583 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	/**
	 * An arrow icon, used by the other navigational keys.
	 */
	var React = __webpack_require__(1);

	var Arrow = function Arrow(props) {
	  return React.createElement(
	    "g",
	    _extends({ fill: "none", fillRule: "evenodd" }, props),
	    React.createElement("path", { fill: "none", d: "M0 0h48v48H0z" }),
	    React.createElement("path", { fill: "none", d: "M12 12h24v24H12z" }),
	    React.createElement("path", { stroke: "#888D93", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", d: "M22 18l-6 6 6 6M16 24h16" })
	  );
	};

	module.exports = Arrow;

/***/ },
/* 584 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * A component that renders the UP iconograpy in SVG.
	 */
	var React = __webpack_require__(1);

	var Arrow = __webpack_require__(583);

	var Up = function Up() {
	    return React.createElement(
	        'svg',
	        { width: '48', height: '48', viewBox: '0 0 48 48' },
	        React.createElement(Arrow, { transform: 'rotate(90 24 24)' })
	    );
	};

	module.exports = Up;

/***/ },
/* 585 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * A component that renders the DOWN iconograpy in SVG.
	 */
	var React = __webpack_require__(1);

	var Arrow = __webpack_require__(583);

	var Down = function Down() {
	    return React.createElement(
	        'svg',
	        { width: '48', height: '48', viewBox: '0 0 48 48' },
	        React.createElement(Arrow, { transform: 'rotate(270 24 24)' })
	    );
	};

	module.exports = Down;

/***/ },
/* 586 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * An autogenerated component that renders the LEFT_PAREN iconograpy in SVG.
	 *
	 * Generated with: https://gist.github.com/crm416/3c7abc88e520eaed72347af240b32590.
	 */
	var React = __webpack_require__(1);

	var LeftParen = function (_React$Component) {
	    _inherits(LeftParen, _React$Component);

	    function LeftParen() {
	        _classCallCheck(this, LeftParen);

	        return _possibleConstructorReturn(this, (LeftParen.__proto__ || Object.getPrototypeOf(LeftParen)).apply(this, arguments));
	    }

	    _createClass(LeftParen, [{
	        key: "render",
	        value: function render() {
	            return React.createElement(
	                "svg",
	                { width: "48", height: "48", viewBox: "0 0 48 48" },
	                React.createElement(
	                    "g",
	                    { fill: "none", fillRule: "evenodd" },
	                    React.createElement("path", { fill: "none", d: "M0 0h48v48H0z" }),
	                    React.createElement("path", { fill: "none", d: "M12 12h24v24H12z" }),
	                    React.createElement("path", { d: "M26 14c-4 6-4 14 0 20", stroke: this.props.color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" })
	                )
	            );
	        }
	    }]);

	    return LeftParen;
	}(React.Component);

	LeftParen.propTypes = {
	    color: React.PropTypes.string.isRequired
	};


	module.exports = LeftParen;

/***/ },
/* 587 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * An autogenerated component that renders the RIGHT_PAREN iconograpy in SVG.
	 *
	 * Generated with: https://gist.github.com/crm416/3c7abc88e520eaed72347af240b32590.
	 */
	var React = __webpack_require__(1);

	var RightParen = function (_React$Component) {
	    _inherits(RightParen, _React$Component);

	    function RightParen() {
	        _classCallCheck(this, RightParen);

	        return _possibleConstructorReturn(this, (RightParen.__proto__ || Object.getPrototypeOf(RightParen)).apply(this, arguments));
	    }

	    _createClass(RightParen, [{
	        key: "render",
	        value: function render() {
	            return React.createElement(
	                "svg",
	                { width: "48", height: "48", viewBox: "0 0 48 48" },
	                React.createElement(
	                    "g",
	                    { fill: "none", fillRule: "evenodd" },
	                    React.createElement("path", { fill: "none", d: "M0 0h48v48H0z" }),
	                    React.createElement("path", { fill: "none", d: "M12 12h24v24H12z" }),
	                    React.createElement("path", { d: "M23 14c4 6 4 14 0 20", stroke: this.props.color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" })
	                )
	            );
	        }
	    }]);

	    return RightParen;
	}(React.Component);

	RightParen.propTypes = {
	    color: React.PropTypes.string.isRequired
	};


	module.exports = RightParen;

/***/ },
/* 588 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * An autogenerated component that renders the GT iconograpy in SVG.
	 *
	 * Generated with: https://gist.github.com/crm416/3c7abc88e520eaed72347af240b32590.
	 */
	var React = __webpack_require__(1);

	var Gt = function (_React$Component) {
	    _inherits(Gt, _React$Component);

	    function Gt() {
	        _classCallCheck(this, Gt);

	        return _possibleConstructorReturn(this, (Gt.__proto__ || Object.getPrototypeOf(Gt)).apply(this, arguments));
	    }

	    _createClass(Gt, [{
	        key: "render",
	        value: function render() {
	            return React.createElement(
	                "svg",
	                { width: "48", height: "48", viewBox: "0 0 48 48" },
	                React.createElement(
	                    "g",
	                    { fill: "none", fillRule: "evenodd" },
	                    React.createElement("path", { fill: "none", d: "M0 0h48v48H0z" }),
	                    React.createElement("path", { fill: "none", d: "M12 12h24v24H12z" }),
	                    React.createElement("path", { stroke: this.props.color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", d: "M16 30l16-6-16-6" })
	                )
	            );
	        }
	    }]);

	    return Gt;
	}(React.Component);

	Gt.propTypes = {
	    color: React.PropTypes.string.isRequired
	};


	module.exports = Gt;

/***/ },
/* 589 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * An autogenerated component that renders the DIVIDE iconograpy in SVG.
	 *
	 * Generated with: https://gist.github.com/crm416/3c7abc88e520eaed72347af240b32590.
	 */
	var React = __webpack_require__(1);

	var Divide = function (_React$Component) {
	    _inherits(Divide, _React$Component);

	    function Divide() {
	        _classCallCheck(this, Divide);

	        return _possibleConstructorReturn(this, (Divide.__proto__ || Object.getPrototypeOf(Divide)).apply(this, arguments));
	    }

	    _createClass(Divide, [{
	        key: "render",
	        value: function render() {
	            return React.createElement(
	                "svg",
	                { width: "48", height: "48", viewBox: "0 0 48 48" },
	                React.createElement(
	                    "g",
	                    { fill: "none", fillRule: "evenodd" },
	                    React.createElement("path", { fill: "none", d: "M0 0h48v48H0z" }),
	                    React.createElement("path", { d: "M19 24h10", stroke: this.props.color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }),
	                    React.createElement("circle", { fill: this.props.color, cx: "24", cy: "19.5", r: "1.5" }),
	                    React.createElement("circle", { fill: this.props.color, cx: "24", cy: "28.5", r: "1.5" })
	                )
	            );
	        }
	    }]);

	    return Divide;
	}(React.Component);

	Divide.propTypes = {
	    color: React.PropTypes.string.isRequired
	};


	module.exports = Divide;

/***/ },
/* 590 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * An autogenerated component that renders the PERIOD iconograpy in SVG.
	 *
	 * Generated with: https://gist.github.com/crm416/3c7abc88e520eaed72347af240b32590.
	 */
	var React = __webpack_require__(1);

	var Period = function (_React$Component) {
	    _inherits(Period, _React$Component);

	    function Period() {
	        _classCallCheck(this, Period);

	        return _possibleConstructorReturn(this, (Period.__proto__ || Object.getPrototypeOf(Period)).apply(this, arguments));
	    }

	    _createClass(Period, [{
	        key: "render",
	        value: function render() {
	            return React.createElement(
	                "svg",
	                { width: "48", height: "48", viewBox: "0 0 48 48" },
	                React.createElement(
	                    "g",
	                    { fill: "none", fillRule: "evenodd" },
	                    React.createElement("path", { fill: "none", d: "M0 0h48v48H0z" }),
	                    React.createElement("circle", { fill: this.props.color, cx: "24", cy: "30", r: "2" })
	                )
	            );
	        }
	    }]);

	    return Period;
	}(React.Component);

	Period.propTypes = {
	    color: React.PropTypes.string.isRequired
	};


	module.exports = Period;

/***/ },
/* 591 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * An autogenerated component that renders the PERCENT iconograpy in SVG.
	 *
	 * Generated with: https://gist.github.com/crm416/3c7abc88e520eaed72347af240b32590.
	 */
	var React = __webpack_require__(1);

	var Percent = function (_React$Component) {
	    _inherits(Percent, _React$Component);

	    function Percent() {
	        _classCallCheck(this, Percent);

	        return _possibleConstructorReturn(this, (Percent.__proto__ || Object.getPrototypeOf(Percent)).apply(this, arguments));
	    }

	    _createClass(Percent, [{
	        key: "render",
	        value: function render() {
	            return React.createElement(
	                "svg",
	                { width: "48", height: "48", viewBox: "0 0 48 48" },
	                React.createElement(
	                    "g",
	                    { fill: "none", fillRule: "evenodd" },
	                    React.createElement("path", { fill: "none", d: "M0 0h48v48H0z" }),
	                    React.createElement(
	                        "g",
	                        { transform: "translate(12 12)" },
	                        React.createElement("path", { fill: "none", d: "M0 0h24v24H0z" }),
	                        React.createElement("path", { d: "M16 4L8 20", stroke: this.props.color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }),
	                        React.createElement("circle", { stroke: this.props.color, strokeWidth: "2", cx: "7", cy: "7", r: "3" }),
	                        React.createElement("circle", { stroke: this.props.color, strokeWidth: "2", cx: "17", cy: "17", r: "3" })
	                    )
	                )
	            );
	        }
	    }]);

	    return Percent;
	}(React.Component);

	Percent.propTypes = {
	    color: React.PropTypes.string.isRequired
	};


	module.exports = Percent;

/***/ },
/* 592 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * An autogenerated component that renders the TIMES iconograpy in SVG.
	 *
	 * Generated with: https://gist.github.com/crm416/3c7abc88e520eaed72347af240b32590.
	 */
	var React = __webpack_require__(1);

	var Times = function (_React$Component) {
	    _inherits(Times, _React$Component);

	    function Times() {
	        _classCallCheck(this, Times);

	        return _possibleConstructorReturn(this, (Times.__proto__ || Object.getPrototypeOf(Times)).apply(this, arguments));
	    }

	    _createClass(Times, [{
	        key: "render",
	        value: function render() {
	            return React.createElement(
	                "svg",
	                { width: "48", height: "48", viewBox: "0 0 48 48" },
	                React.createElement(
	                    "g",
	                    { fill: "none", fillRule: "evenodd" },
	                    React.createElement("path", { fill: "none", d: "M0 0h48v48H0z" }),
	                    React.createElement("path", { fill: "none", d: "M12 12h24v24H12z" }),
	                    React.createElement("path", { d: "M20 20l8 8M28 20l-8 8", stroke: this.props.color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" })
	                )
	            );
	        }
	    }]);

	    return Times;
	}(React.Component);

	Times.propTypes = {
	    color: React.PropTypes.string.isRequired
	};


	module.exports = Times;

/***/ },
/* 593 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * An autogenerated component that renders the EXP_3 iconograpy in SVG.
	 *
	 * Generated with: https://gist.github.com/crm416/3c7abc88e520eaed72347af240b32590.
	 */
	var React = __webpack_require__(1);

	var Exp3 = function (_React$Component) {
	    _inherits(Exp3, _React$Component);

	    function Exp3() {
	        _classCallCheck(this, Exp3);

	        return _possibleConstructorReturn(this, (Exp3.__proto__ || Object.getPrototypeOf(Exp3)).apply(this, arguments));
	    }

	    _createClass(Exp3, [{
	        key: "render",
	        value: function render() {
	            return React.createElement(
	                "svg",
	                { width: "48", height: "48", viewBox: "0 0 48 48" },
	                React.createElement(
	                    "g",
	                    { fill: "none", fillRule: "evenodd" },
	                    React.createElement("path", { fill: "none", d: "M0 0h48v48H0z" }),
	                    React.createElement("path", { d: "M14 21c0-.552.456-1 1.002-1h9.996A1 1 0 0 1 26 21v14c0 .552-.456 1-1.002 1h-9.996A1 1 0 0 1 14 35V21zm2 1h8v12h-8V22zM30.92 23.12c1.66 0 2.76-.81 2.76-1.98 0-.96-.86-1.51-1.57-1.58.79-.13 1.46-.72 1.46-1.5 0-1.1-.95-1.83-2.65-1.83-1.23 0-2.11.45-2.67 1.08l.83 1.08c.47-.42 1.05-.64 1.66-.64.64 0 1.12.19 1.12.61 0 .35-.39.52-1.08.52-.25 0-.77 0-.9-.01v1.53c.1-.01.61-.01.9-.01.91 0 1.19.18 1.19.56 0 .37-.38.65-1.12.65-.58 0-1.34-.23-1.82-.7l-.87 1.17c.52.6 1.48 1.05 2.76 1.05z", fill: this.props.color })
	                )
	            );
	        }
	    }]);

	    return Exp3;
	}(React.Component);

	Exp3.propTypes = {
	    color: React.PropTypes.string.isRequired
	};


	module.exports = Exp3;

/***/ },
/* 594 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * An autogenerated component that renders the EXP_2 iconograpy in SVG.
	 *
	 * Generated with: https://gist.github.com/crm416/3c7abc88e520eaed72347af240b32590.
	 */
	var React = __webpack_require__(1);

	var Exp2 = function (_React$Component) {
	    _inherits(Exp2, _React$Component);

	    function Exp2() {
	        _classCallCheck(this, Exp2);

	        return _possibleConstructorReturn(this, (Exp2.__proto__ || Object.getPrototypeOf(Exp2)).apply(this, arguments));
	    }

	    _createClass(Exp2, [{
	        key: "render",
	        value: function render() {
	            return React.createElement(
	                "svg",
	                { width: "48", height: "48", viewBox: "0 0 48 48" },
	                React.createElement(
	                    "g",
	                    { fill: "none", fillRule: "evenodd" },
	                    React.createElement("path", { fill: "none", d: "M0 0h48v48H0z" }),
	                    React.createElement("path", { d: "M14 21c0-.552.456-1 1.002-1h9.996A1 1 0 0 1 26 21v14c0 .552-.456 1-1.002 1h-9.996A1 1 0 0 1 14 35V21zm2 1h8v12h-8V22zM33.67 23v-1.5h-2.44c1.66-1.16 2.39-2.03 2.39-3.05 0-1.34-1.13-2.22-2.7-2.22-.93 0-1.99.33-2.7 1.11l.95 1.14c.48-.45 1.04-.73 1.78-.73.49 0 .92.24.92.7 0 .66-.54 1.12-3.43 3.21V23h5.23z", fill: this.props.color })
	                )
	            );
	        }
	    }]);

	    return Exp2;
	}(React.Component);

	Exp2.propTypes = {
	    color: React.PropTypes.string.isRequired
	};


	module.exports = Exp2;

/***/ },
/* 595 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * A component that renders the RIGHT iconograpy in SVG.
	 */
	var React = __webpack_require__(1);

	var Arrow = __webpack_require__(583);

	var Right = function Right() {
	    return React.createElement(
	        'svg',
	        { width: '48', height: '48', viewBox: '0 0 48 48' },
	        React.createElement(Arrow, { transform: 'rotate(180 24 24)' })
	    );
	};

	module.exports = Right;

/***/ },
/* 596 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * An autogenerated component that renders the CDOT iconograpy in SVG.
	 *
	 * Generated with: https://gist.github.com/crm416/3c7abc88e520eaed72347af240b32590.
	 */
	var React = __webpack_require__(1);

	var Cdot = function (_React$Component) {
	    _inherits(Cdot, _React$Component);

	    function Cdot() {
	        _classCallCheck(this, Cdot);

	        return _possibleConstructorReturn(this, (Cdot.__proto__ || Object.getPrototypeOf(Cdot)).apply(this, arguments));
	    }

	    _createClass(Cdot, [{
	        key: "render",
	        value: function render() {
	            return React.createElement(
	                "svg",
	                { width: "48", height: "48", viewBox: "0 0 48 48" },
	                React.createElement(
	                    "g",
	                    { fill: "none", fillRule: "evenodd" },
	                    React.createElement("path", { fill: "none", d: "M0 0h48v48H0z" }),
	                    React.createElement(
	                        "g",
	                        { transform: "translate(12 12)" },
	                        React.createElement("path", { fill: "none", d: "M0 0h24v24H0z" }),
	                        React.createElement("circle", { fill: this.props.color, cx: "12", cy: "12", r: "3" })
	                    )
	                )
	            );
	        }
	    }]);

	    return Cdot;
	}(React.Component);

	Cdot.propTypes = {
	    color: React.PropTypes.string.isRequired
	};


	module.exports = Cdot;

/***/ },
/* 597 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * An autogenerated component that renders the LOG_N iconograpy in SVG.
	 *
	 * Generated with: https://gist.github.com/crm416/3c7abc88e520eaed72347af240b32590.
	 */
	var React = __webpack_require__(1);

	var LogN = function (_React$Component) {
	    _inherits(LogN, _React$Component);

	    function LogN() {
	        _classCallCheck(this, LogN);

	        return _possibleConstructorReturn(this, (LogN.__proto__ || Object.getPrototypeOf(LogN)).apply(this, arguments));
	    }

	    _createClass(LogN, [{
	        key: "render",
	        value: function render() {
	            return React.createElement(
	                "svg",
	                { width: "48", height: "48", viewBox: "0 0 48 48" },
	                React.createElement(
	                    "g",
	                    { fill: "none", fillRule: "evenodd" },
	                    React.createElement("path", { fill: "none", d: "M0 0h48v48H0z" }),
	                    React.createElement("path", { d: "M30 28.997c0-.55.453-.997.997-.997h6.006c.55 0 .997.453.997.997v6.006c0 .55-.453.997-.997.997h-6.006c-.55 0-.997-.453-.997-.997v-6.006zM32 30h4v4h-4v-4zM12.776 29v-9.338h-1.778V29h1.778zm4.9.168c2.24 0 3.584-1.624 3.584-3.556 0-1.918-1.344-3.542-3.584-3.542-2.226 0-3.57 1.624-3.57 3.542 0 1.932 1.344 3.556 3.57 3.556zm0-1.582c-1.106 0-1.722-.91-1.722-1.974 0-1.05.616-1.96 1.722-1.96 1.106 0 1.736.91 1.736 1.96 0 1.064-.63 1.974-1.736 1.974zm7.672 4.158c1.666 0 3.654-.63 3.654-3.206v-6.3H27.21v.868c-.546-.686-1.274-1.036-2.086-1.036-1.708 0-2.982 1.232-2.982 3.444 0 2.254 1.288 3.444 2.982 3.444.826 0 1.554-.392 2.086-1.064v.686c0 1.33-1.008 1.708-1.862 1.708-.854 0-1.568-.238-2.114-.84l-.798 1.288c.854.742 1.75 1.008 2.912 1.008zm.336-4.368c-1.008 0-1.708-.7-1.708-1.862 0-1.162.7-1.862 1.708-1.862.588 0 1.232.322 1.526.77v2.184c-.294.434-.938.77-1.526.77z", fill: this.props.color })
	                )
	            );
	        }
	    }]);

	    return LogN;
	}(React.Component);

	LogN.propTypes = {
	    color: React.PropTypes.string.isRequired
	};


	module.exports = LogN;

/***/ },
/* 598 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * An autogenerated component that renders the LEQ iconograpy in SVG.
	 *
	 * Generated with: https://gist.github.com/crm416/3c7abc88e520eaed72347af240b32590.
	 */
	var React = __webpack_require__(1);

	var Leq = function (_React$Component) {
	    _inherits(Leq, _React$Component);

	    function Leq() {
	        _classCallCheck(this, Leq);

	        return _possibleConstructorReturn(this, (Leq.__proto__ || Object.getPrototypeOf(Leq)).apply(this, arguments));
	    }

	    _createClass(Leq, [{
	        key: "render",
	        value: function render() {
	            return React.createElement(
	                "svg",
	                { width: "48", height: "48", viewBox: "0 0 48 48" },
	                React.createElement(
	                    "g",
	                    { fill: "none", fillRule: "evenodd" },
	                    React.createElement("path", { fill: "none", d: "M0 0h48v48H0z" }),
	                    React.createElement("path", { fill: "none", d: "M12 12h24v24H12z" }),
	                    React.createElement("path", { d: "M16 33h16M32 30l-16-6 16-6", stroke: this.props.color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" })
	                )
	            );
	        }
	    }]);

	    return Leq;
	}(React.Component);

	Leq.propTypes = {
	    color: React.PropTypes.string.isRequired
	};


	module.exports = Leq;

/***/ },
/* 599 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * An autogenerated component that renders the MINUS iconograpy in SVG.
	 *
	 * Generated with: https://gist.github.com/crm416/3c7abc88e520eaed72347af240b32590.
	 */
	var React = __webpack_require__(1);

	var Minus = function (_React$Component) {
	    _inherits(Minus, _React$Component);

	    function Minus() {
	        _classCallCheck(this, Minus);

	        return _possibleConstructorReturn(this, (Minus.__proto__ || Object.getPrototypeOf(Minus)).apply(this, arguments));
	    }

	    _createClass(Minus, [{
	        key: "render",
	        value: function render() {
	            return React.createElement(
	                "svg",
	                { width: "48", height: "48", viewBox: "0 0 48 48" },
	                React.createElement(
	                    "g",
	                    { fill: "none", fillRule: "evenodd" },
	                    React.createElement("path", { fill: "none", d: "M0 0h48v48H0z" }),
	                    React.createElement("path", { d: "M19 24h10", stroke: this.props.color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" })
	                )
	            );
	        }
	    }]);

	    return Minus;
	}(React.Component);

	Minus.propTypes = {
	    color: React.PropTypes.string.isRequired
	};


	module.exports = Minus;

/***/ },
/* 600 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * An autogenerated component that renders the RADICAL iconograpy in SVG.
	 *
	 * Generated with: https://gist.github.com/crm416/3c7abc88e520eaed72347af240b32590.
	 */
	var React = __webpack_require__(1);

	var Radical = function (_React$Component) {
	    _inherits(Radical, _React$Component);

	    function Radical() {
	        _classCallCheck(this, Radical);

	        return _possibleConstructorReturn(this, (Radical.__proto__ || Object.getPrototypeOf(Radical)).apply(this, arguments));
	    }

	    _createClass(Radical, [{
	        key: "render",
	        value: function render() {
	            return React.createElement(
	                "svg",
	                { width: "48", height: "48", viewBox: "0 0 48 48" },
	                React.createElement(
	                    "g",
	                    { fill: "none", fillRule: "evenodd" },
	                    React.createElement("path", { fill: "none", d: "M0 0h48v48H0z" }),
	                    React.createElement("path", { d: "M13 16.997c0-.55.453-.997.997-.997h6.006c.55 0 .997.453.997.997v6.006c0 .55-.453.997-.997.997h-6.006c-.55 0-.997-.453-.997-.997v-6.006zM15 18h4v4h-4v-4z", fill: this.props.color }),
	                    React.createElement("path", { stroke: this.props.color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", d: "M14 29l4 6 9-14h7" })
	                )
	            );
	        }
	    }]);

	    return Radical;
	}(React.Component);

	Radical.propTypes = {
	    color: React.PropTypes.string.isRequired
	};


	module.exports = Radical;

/***/ },
/* 601 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * An autogenerated component that renders the FRAC_INCLUSIVE iconograpy in SVG.
	 *
	 * Generated with: https://gist.github.com/crm416/3c7abc88e520eaed72347af240b32590.
	 */
	var React = __webpack_require__(1);

	var FracInclusive = function (_React$Component) {
	    _inherits(FracInclusive, _React$Component);

	    function FracInclusive() {
	        _classCallCheck(this, FracInclusive);

	        return _possibleConstructorReturn(this, (FracInclusive.__proto__ || Object.getPrototypeOf(FracInclusive)).apply(this, arguments));
	    }

	    _createClass(FracInclusive, [{
	        key: "render",
	        value: function render() {
	            return React.createElement(
	                "svg",
	                { width: "48", height: "48", viewBox: "0 0 48 48" },
	                React.createElement(
	                    "g",
	                    { fill: "none", fillRule: "evenodd" },
	                    React.createElement("path", { fill: "none", d: "M0 0h48v48H0z" }),
	                    React.createElement(
	                        "g",
	                        { transform: "translate(12 12)" },
	                        React.createElement("path", { fill: "none", d: "M0 0h24v24H0z" }),
	                        React.createElement("path", { d: "M8 16.997c0-.55.453-.997.997-.997h6.006c.55 0 .997.453.997.997v6.006c0 .55-.453.997-.997.997H8.997c-.55 0-.997-.453-.997-.997v-6.006zM10 18h4v4h-4v-4z", fill: this.props.color }),
	                        React.createElement("rect", { fill: this.props.color, x: "2", y: "11", width: "20", height: "2", rx: "1" }),
	                        React.createElement("path", { d: "M8 .997C8 .447 8.453 0 8.997 0h6.006c.55 0 .997.453.997.997v6.006c0 .55-.453.997-.997.997H8.997C8.447 8 8 7.547 8 7.003V.997zM10 2h4v4h-4V2z", fill: this.props.color })
	                    )
	                )
	            );
	        }
	    }]);

	    return FracInclusive;
	}(React.Component);

	FracInclusive.propTypes = {
	    color: React.PropTypes.string.isRequired
	};


	module.exports = FracInclusive;

/***/ },
/* 602 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * An autogenerated component that renders the FRAC_EXCLUSIVE iconograpy in SVG.
	 *
	 * Generated with: https://gist.github.com/crm416/3c7abc88e520eaed72347af240b32590.
	 */
	var React = __webpack_require__(1);

	var FracExclusive = function (_React$Component) {
	    _inherits(FracExclusive, _React$Component);

	    function FracExclusive() {
	        _classCallCheck(this, FracExclusive);

	        return _possibleConstructorReturn(this, (FracExclusive.__proto__ || Object.getPrototypeOf(FracExclusive)).apply(this, arguments));
	    }

	    _createClass(FracExclusive, [{
	        key: "render",
	        value: function render() {
	            return React.createElement(
	                "svg",
	                { width: "48", height: "48", viewBox: "0 0 48 48" },
	                React.createElement(
	                    "g",
	                    { fill: "none", fillRule: "evenodd" },
	                    React.createElement("path", { fill: "none", d: "M0 0h48v48H0z" }),
	                    React.createElement(
	                        "g",
	                        { transform: "translate(12 12)" },
	                        React.createElement("path", { fill: "none", d: "M0 0h24v24H0z" }),
	                        React.createElement("path", { d: "M13 16.997c0-.55.453-.997.997-.997h6.006c.55 0 .997.453.997.997v6.006c0 .55-.453.997-.997.997h-6.006c-.55 0-.997-.453-.997-.997v-6.006zM15 18h4v4h-4v-4z", fill: this.props.color }),
	                        React.createElement("rect", { fill: this.props.color, x: "10", y: "11", width: "14", height: "2", rx: "1" }),
	                        React.createElement("path", { d: "M13 .997c0-.55.453-.997.997-.997h6.006c.55 0 .997.453.997.997v6.006c0 .55-.453.997-.997.997h-6.006c-.55 0-.997-.453-.997-.997V.997zM15 2h4v4h-4V2zM0 8.997C0 8.447.453 8 .997 8h6.006c.55 0 .997.453.997.997v6.006c0 .55-.453.997-.997.997H.997C.447 16 0 15.547 0 15.003V8.997zM2 10h4v4H2v-4z", fill: this.props.color })
	                    )
	                )
	            );
	        }
	    }]);

	    return FracExclusive;
	}(React.Component);

	FracExclusive.propTypes = {
	    color: React.PropTypes.string.isRequired
	};


	module.exports = FracExclusive;

/***/ },
/* 603 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	/**
	 * An autogenerated component that renders the JUMP_OUT_PARENTHESES iconograpy in SVG.
	 *
	 * Generated with: https://gist.github.com/crm416/3c7abc88e520eaed72347af240b32590.
	 */
	var React = __webpack_require__(1);

	var JumpOutParentheses = function JumpOutParentheses() {
	  return React.createElement(
	    "svg",
	    { width: "48", height: "48", viewBox: "0 0 48 48" },
	    React.createElement(
	      "g",
	      { fill: "none", fillRule: "evenodd" },
	      React.createElement("path", { fill: "none", d: "M0 0h48v48H0z" }),
	      React.createElement("path", { fill: "none", d: "M12 12h24v24H12z" }),
	      React.createElement("path", { d: "M24 18c3 3 3 9 0 12M18 18c-3 3-3 9 0 12", stroke: "#888D93", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }),
	      React.createElement("path", { stroke: "#78C008", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", d: "M32 27l3-3-3-3M22 24h12" })
	    )
	  );
	};

	module.exports = JumpOutParentheses;

/***/ },
/* 604 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	/**
	 * An autogenerated component that renders the JUMP_OUT_EXPONENT iconograpy in SVG.
	 *
	 * Generated with: https://gist.github.com/crm416/3c7abc88e520eaed72347af240b32590.
	 */
	var React = __webpack_require__(1);

	var JumpOutExponent = function JumpOutExponent() {
	  return React.createElement(
	    "svg",
	    { width: "48", height: "48", viewBox: "0 0 48 48" },
	    React.createElement(
	      "g",
	      { fill: "none", fillRule: "evenodd" },
	      React.createElement("path", { fill: "none", d: "M0 0h48v48H0z" }),
	      React.createElement("path", { fill: "none", d: "M12 12h24v24H12z" }),
	      React.createElement("path", { d: "M35 19v16M23 19l8 8M31 23v4h-4", stroke: "#78C008", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }),
	      React.createElement("path", { d: "M12 12.997c0-.55.453-.997.997-.997h6.006c.55 0 .997.453.997.997v6.006c0 .55-.453.997-.997.997h-6.006c-.55 0-.997-.453-.997-.997v-6.006zM14 14h4v4h-4v-4z", fill: "#888D93" })
	    )
	  );
	};

	module.exports = JumpOutExponent;

/***/ },
/* 605 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	/**
	 * An autogenerated component that renders the JUMP_OUT_BASE iconograpy in SVG.
	 *
	 * Generated with: https://gist.github.com/crm416/3c7abc88e520eaed72347af240b32590.
	 */
	var React = __webpack_require__(1);

	var JumpOutBase = function JumpOutBase() {
	  return React.createElement(
	    "svg",
	    { width: "48", height: "48", viewBox: "0 0 48 48" },
	    React.createElement(
	      "g",
	      { fill: "none", fillRule: "evenodd" },
	      React.createElement("path", { fill: "none", d: "M0 0h48v48H0z" }),
	      React.createElement("path", { fill: "none", d: "M12 12h24v24H12z" }),
	      React.createElement("path", { d: "M12 28.997c0-.55.453-.997.997-.997h6.006c.55 0 .997.453.997.997v6.006c0 .55-.453.997-.997.997h-6.006c-.55 0-.997-.453-.997-.997v-6.006zM14 30h4v4h-4v-4z", fill: "#888D93" }),
	      React.createElement("path", { d: "M35 13v16M23 29l8-8M27 21h4v4", stroke: "#78C008", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" })
	    )
	  );
	};

	module.exports = JumpOutBase;

/***/ },
/* 606 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	/**
	 * An autogenerated component that renders the JUMP_INTO_NUMERATOR iconograpy in SVG.
	 *
	 * Generated with: https://gist.github.com/crm416/3c7abc88e520eaed72347af240b32590.
	 */
	var React = __webpack_require__(1);

	var JumpIntoNumerator = function JumpIntoNumerator() {
	  return React.createElement(
	    "svg",
	    { width: "48", height: "48", viewBox: "0 0 48 48" },
	    React.createElement(
	      "g",
	      { fill: "none", fillRule: "evenodd" },
	      React.createElement("path", { fill: "none", d: "M0 0h48v48H0z" }),
	      React.createElement("path", { fill: "none", d: "M12 12h24v24H12z" }),
	      React.createElement("path", { d: "M13 16v16M17 22l6-6M23 20v-4h-4", stroke: "#78C008", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }),
	      React.createElement("path", { d: "M26 27.997c0-.55.453-.997.997-.997h6.006c.55 0 .997.453.997.997v6.006c0 .55-.453.997-.997.997h-6.006c-.55 0-.997-.453-.997-.997v-6.006zM28 29h4v4h-4v-4z", fill: "#888D93" }),
	      React.createElement("path", { d: "M35 24H25", stroke: "#888D93", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }),
	      React.createElement("path", { d: "M26 13.997c0-.55.453-.997.997-.997h6.006c.55 0 .997.453.997.997v6.006c0 .55-.453.997-.997.997h-6.006c-.55 0-.997-.453-.997-.997v-6.006zM28 15h4v4h-4v-4z", fill: "#78C008" })
	    )
	  );
	};

	module.exports = JumpIntoNumerator;

/***/ },
/* 607 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	/**
	 * An autogenerated component that renders the JUMP_OUT_NUMERATOR iconograpy in SVG.
	 *
	 * Generated with: https://gist.github.com/crm416/3c7abc88e520eaed72347af240b32590.
	 */
	var React = __webpack_require__(1);

	var JumpOutNumerator = function JumpOutNumerator() {
	  return React.createElement(
	    "svg",
	    { width: "48", height: "48", viewBox: "0 0 48 48" },
	    React.createElement(
	      "g",
	      { fill: "none", fillRule: "evenodd" },
	      React.createElement("path", { fill: "none", d: "M0 0h48v48H0z" }),
	      React.createElement("path", { fill: "none", d: "M12 12h24v24H12z" }),
	      React.createElement("path", { stroke: "#78C008", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", d: "M33 29l-3 3-3-3M30 18v14" }),
	      React.createElement("path", { d: "M16 27.997c0-.55.453-.997.997-.997h6.006c.55 0 .997.453.997.997v6.006c0 .55-.453.997-.997.997h-6.006c-.55 0-.997-.453-.997-.997v-6.006zM18 29h4v4h-4v-4z", fill: "#78C008" }),
	      React.createElement("path", { d: "M25 24H15", stroke: "#888D93", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }),
	      React.createElement("path", { d: "M16 13.997c0-.55.453-.997.997-.997h6.006c.55 0 .997.453.997.997v6.006c0 .55-.453.997-.997.997h-6.006c-.55 0-.997-.453-.997-.997v-6.006zM18 15h4v4h-4v-4z", fill: "#888D93" })
	    )
	  );
	};

	module.exports = JumpOutNumerator;

/***/ },
/* 608 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	/**
	 * An autogenerated component that renders the JUMP_OUT_DENOMINATOR iconograpy in SVG.
	 *
	 * Generated with: https://gist.github.com/crm416/3c7abc88e520eaed72347af240b32590.
	 */
	var React = __webpack_require__(1);

	var JumpOutDenominator = function JumpOutDenominator() {
	  return React.createElement(
	    "svg",
	    { width: "48", height: "48", viewBox: "0 0 48 48" },
	    React.createElement(
	      "g",
	      { fill: "none", fillRule: "evenodd" },
	      React.createElement("path", { d: "M0 0h48v48H0z" }),
	      React.createElement("path", { d: "M12 12h24v24H12z" }),
	      React.createElement("path", { d: "M35 16v16m-4-4v-4h-4m-2 6l6-6", stroke: "#78C008", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }),
	      React.createElement("path", { d: "M14 27.997c0-.55.453-.997.997-.997h6.006c.55 0 .997.453.997.997v6.006c0 .55-.453.997-.997.997h-6.006c-.55 0-.997-.453-.997-.997v-6.006zM16 29h4v4h-4v-4z", fill: "#888D93" }),
	      React.createElement("path", { d: "M23 24H13", stroke: "#888D93", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }),
	      React.createElement("path", { d: "M14 13.997c0-.55.453-.997.997-.997h6.006c.55 0 .997.453.997.997v6.006c0 .55-.453.997-.997.997h-6.006c-.55 0-.997-.453-.997-.997v-6.006zM16 15h4v4h-4v-4z", fill: "#888D93" })
	    )
	  );
	};

	module.exports = JumpOutDenominator;

/***/ },
/* 609 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * A component that renders a text-based icon.
	 */

	var React = __webpack_require__(1);

	var _require = __webpack_require__(489),
	    StyleSheet = _require.StyleSheet;

	var _require2 = __webpack_require__(487),
	    View = _require2.View,
	    Text = _require2.Text;

	var _require3 = __webpack_require__(563),
	    row = _require3.row,
	    centered = _require3.centered;

	var _require4 = __webpack_require__(564),
	    iconSizeHeightPx = _require4.iconSizeHeightPx,
	    iconSizeWidthPx = _require4.iconSizeWidthPx;

	var TextIcon = function (_React$Component) {
	    _inherits(TextIcon, _React$Component);

	    function TextIcon() {
	        _classCallCheck(this, TextIcon);

	        return _possibleConstructorReturn(this, (TextIcon.__proto__ || Object.getPrototypeOf(TextIcon)).apply(this, arguments));
	    }

	    _createClass(TextIcon, [{
	        key: 'render',
	        value: function render() {
	            var _props = this.props,
	                character = _props.character,
	                style = _props.style;


	            var containerStyle = [row, centered, styles.size, styles.base].concat(_toConsumableArray(Array.isArray(style) ? style : [style]));
	            return React.createElement(
	                View,
	                { style: containerStyle },
	                React.createElement(
	                    Text,
	                    null,
	                    character
	                )
	            );
	        }
	    }]);

	    return TextIcon;
	}(React.Component);

	TextIcon.propTypes = {
	    character: React.PropTypes.string.isRequired,
	    style: React.PropTypes.any
	};


	var styles = StyleSheet.create({
	    size: {
	        height: iconSizeHeightPx,
	        width: iconSizeWidthPx
	    },

	    base: {
	        fontFamily: 'Proxima Nova',
	        fontSize: 25
	    }
	});

	module.exports = TextIcon;

/***/ },
/* 610 */
/***/ function(module, exports) {

	'use strict';

	/**
	 * Constants that are shared between multiple files.
	 */

	module.exports = {
	    KeypadTypes: {
	        FRACTION: 'FRACTION',
	        EXPRESSION: 'EXPRESSION'
	    },

	    KeyTypes: {
	        EMPTY: 'EMPTY',
	        // For numerals, variables, and any other characters that themselves
	        // compose 'values'.
	        VALUE: 'VALUE',
	        // For buttons that insert or adjust math in an input.
	        OPERATOR: 'OPERATOR',
	        // For buttons that move the cursor in an input (including via
	        // deletion).
	        INPUT_NAVIGATION: 'INPUT_NAVIGATION',
	        // For buttons that modify the broader keypad state (e.g., by changing
	        // the visible pane).
	        KEYPAD_NAVIGATION: 'KEYPAD_NAVIGATION',
	        // For buttons that house multiple buttons and have no action
	        // themselves.
	        MANY: 'MANY',
	        // For the echo animation that appears on press.
	        ECHO: 'ECHO'
	    },

	    DeviceOrientations: {
	        LANDSCAPE: 'LANDSCAPE',
	        PORTRAIT: 'PORTRAIT'
	    },

	    DeviceTypes: {
	        PHONE: 'PHONE',
	        TABLET: 'TABLET'
	    },

	    LayoutModes: {
	        FULLSCREEN: 'FULLSCREEN',
	        COMPACT: 'COMPACT'
	    },

	    BorderDirections: {
	        LEFT: 'LEFT',
	        BOTTOM: 'BOTTOM'
	    },
	    BorderStyles: {
	        LEFT: ['LEFT'],
	        BOTTOM: ['BOTTOM'],
	        ALL: ['LEFT', 'BOTTOM'],
	        NONE: []
	    },

	    IconTypes: {
	        MATH: 'MATH',
	        SVG: 'SVG',
	        TEXT: 'TEXT'
	    },

	    DecimalSeparators: {
	        COMMA: 'COMMA',
	        PERIOD: 'PERIOD'
	    },

	    EchoAnimationTypes: {
	        SLIDE_AND_FADE: 'SLIDE_AND_FADE',
	        FADE_ONLY: 'FADE_ONLY',
	        LONG_FADE_ONLY: 'LONG_FADE_ONLY'
	    }
	};

/***/ },
/* 611 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * React PropTypes that may be shared between components.
	 */

	var React = __webpack_require__(1);

	var KeyConfigs = __webpack_require__(612);
	var CursorContexts = __webpack_require__(615);

	var _require = __webpack_require__(610),
	    BorderDirections = _require.BorderDirections,
	    EchoAnimationTypes = _require.EchoAnimationTypes,
	    IconTypes = _require.IconTypes,
	    KeyTypes = _require.KeyTypes,
	    KeypadTypes = _require.KeypadTypes;

	var iconPropType = React.PropTypes.shape({
	    type: React.PropTypes.oneOf(Object.keys(IconTypes)).isRequired,
	    data: React.PropTypes.string.isRequired
	});

	var keyIdPropType = React.PropTypes.oneOf(Object.keys(KeyConfigs));

	var keyConfigPropType = React.PropTypes.shape({
	    ariaLabel: React.PropTypes.string,
	    id: keyIdPropType.isRequired,
	    type: React.PropTypes.oneOf(Object.keys(KeyTypes)).isRequired,
	    childKeyIds: React.PropTypes.arrayOf(keyIdPropType),
	    icon: iconPropType.isRequired
	});

	var keypadConfigurationPropType = React.PropTypes.shape({
	    keypadType: React.PropTypes.oneOf(Object.keys(KeypadTypes)).isRequired,
	    extraKeys: React.PropTypes.arrayOf(keyIdPropType)
	});

	// NOTE(charlie): This is a React element.
	var keypadElementPropType = React.PropTypes.shape({
	    activate: React.PropTypes.func.isRequired,
	    dismiss: React.PropTypes.func.isRequired,
	    configure: React.PropTypes.func.isRequired,
	    setCursor: React.PropTypes.func.isRequired,
	    setKeyHandler: React.PropTypes.func.isRequired
	});

	var bordersPropType = React.PropTypes.arrayOf(React.PropTypes.oneOf(Object.keys(BorderDirections)));

	var boundingBoxPropType = React.PropTypes.shape({
	    height: React.PropTypes.number,
	    width: React.PropTypes.number,
	    top: React.PropTypes.number,
	    right: React.PropTypes.number,
	    bottom: React.PropTypes.number,
	    left: React.PropTypes.number
	});

	var echoPropType = React.PropTypes.shape({
	    animationId: React.PropTypes.string.isRequired,
	    animationType: React.PropTypes.oneOf(Object.keys(EchoAnimationTypes)).isRequired,
	    borders: bordersPropType,
	    id: keyIdPropType.isRequired,
	    initialBounds: boundingBoxPropType.isRequired
	});

	var cursorContextPropType = React.PropTypes.oneOf(Object.keys(CursorContexts));

	var popoverPropType = React.PropTypes.shape({
	    parentId: keyIdPropType.isRequired,
	    bounds: boundingBoxPropType.isRequired,
	    childKeyIds: React.PropTypes.arrayOf(keyIdPropType).isRequired
	});

	var childrenPropType = React.PropTypes.oneOfType([React.PropTypes.arrayOf(React.PropTypes.node), React.PropTypes.node]);

	module.exports = {
	    keyConfigPropType: keyConfigPropType,
	    keyIdPropType: keyIdPropType,
	    keypadConfigurationPropType: keypadConfigurationPropType,
	    keypadElementPropType: keypadElementPropType,
	    bordersPropType: bordersPropType,
	    boundingBoxPropType: boundingBoxPropType,
	    echoPropType: echoPropType,
	    cursorContextPropType: cursorContextPropType,
	    popoverPropType: popoverPropType,
	    iconPropType: iconPropType,
	    childrenPropType: childrenPropType
	};

/***/ },
/* 612 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _KeyConfigs;

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	/**
	 * This file contains configuration settings for the buttons in the keypad.
	 */

	/* globals i18n */

	var Keys = __webpack_require__(613);

	var _require = __webpack_require__(610),
	    DecimalSeparators = _require.DecimalSeparators,
	    IconTypes = _require.IconTypes,
	    KeyTypes = _require.KeyTypes;

	var _require2 = __webpack_require__(614),
	    decimalSeparator = _require2.decimalSeparator;

	var KeyConfigs = (_KeyConfigs = {}, _defineProperty(_KeyConfigs, Keys.PLUS, {
	    type: KeyTypes.OPERATOR,
	    // I18N: A label for a plus sign.
	    ariaLabel: i18n._('Plus')
	}), _defineProperty(_KeyConfigs, Keys.MINUS, {
	    type: KeyTypes.OPERATOR,
	    // I18N: A label for a minus sign.
	    ariaLabel: i18n._('Minus')
	}), _defineProperty(_KeyConfigs, Keys.NEGATIVE, {
	    type: KeyTypes.VALUE,
	    // I18N: A label for a minus sign.
	    ariaLabel: i18n._('Negative')
	}), _defineProperty(_KeyConfigs, Keys.TIMES, {
	    type: KeyTypes.OPERATOR,
	    // I18N: A label for a multiplication sign (represented with an 'x').
	    ariaLabel: i18n._('Multiply')
	}), _defineProperty(_KeyConfigs, Keys.DIVIDE, {
	    type: KeyTypes.OPERATOR,
	    // I18N: A label for a division sign.
	    ariaLabel: i18n._('Divide')
	}), _defineProperty(_KeyConfigs, Keys.DECIMAL, {
	    type: KeyTypes.VALUE,
	    // I18N: A label for a decimal symbol.
	    ariaLabel: i18n._('Decimal'),
	    icon: decimalSeparator === DecimalSeparators.COMMA ? {
	        // TODO(charlie): Get an SVG icon for the comma, or verify with
	        // design that the text-rendered version is acceptable.
	        type: IconTypes.TEXT,
	        data: ','
	    } : {
	        type: IconTypes.SVG,
	        data: Keys.PERIOD
	    }
	}), _defineProperty(_KeyConfigs, Keys.PERCENT, {
	    type: KeyTypes.OPERATOR,
	    // I18N: A label for a percent sign.
	    ariaLabel: i18n._('Percent')
	}), _defineProperty(_KeyConfigs, Keys.CDOT, {
	    type: KeyTypes.OPERATOR,
	    // I18N: A label for a multiplication sign (represented as a dot).
	    ariaLabel: i18n._('Multiply')
	}), _defineProperty(_KeyConfigs, Keys.EQUAL, {
	    type: KeyTypes.OPERATOR,
	    ariaLabel: i18n._('Equals sign')
	}), _defineProperty(_KeyConfigs, Keys.NEQ, {
	    type: KeyTypes.OPERATOR,
	    ariaLabel: i18n._('Not-equals sign')
	}), _defineProperty(_KeyConfigs, Keys.GT, {
	    type: KeyTypes.OPERATOR,
	    // I18N: A label for a 'greater than' sign (represented as '>').
	    ariaLabel: i18n._('Greater than sign')
	}), _defineProperty(_KeyConfigs, Keys.LT, {
	    type: KeyTypes.OPERATOR,
	    // I18N: A label for a 'less than' sign (represented as '<').
	    ariaLabel: i18n._('Less than sign')
	}), _defineProperty(_KeyConfigs, Keys.GEQ, {
	    type: KeyTypes.OPERATOR,
	    ariaLabel: i18n._('Greater than or equal to sign')
	}), _defineProperty(_KeyConfigs, Keys.LEQ, {
	    type: KeyTypes.OPERATOR,
	    ariaLabel: i18n._('Less than or equal to sign')
	}), _defineProperty(_KeyConfigs, Keys.FRAC_INCLUSIVE, {
	    type: KeyTypes.OPERATOR,
	    // I18N: A label for a button that creates a new fraction and puts the
	    // current expression in the numerator of that fraction.
	    ariaLabel: i18n._('Fraction, with current expression in numerator')
	}), _defineProperty(_KeyConfigs, Keys.FRAC_EXCLUSIVE, {
	    type: KeyTypes.OPERATOR,
	    // I18N: A label for a button that creates a new fraction next to the
	    // cursor.
	    ariaLabel: i18n._('Fraction, excluding the current expression')
	}), _defineProperty(_KeyConfigs, Keys.EXP, {
	    type: KeyTypes.OPERATOR,
	    // I18N: A label for a button that will allow the user to input a custom
	    // exponent.
	    ariaLabel: i18n._('Custom exponent')
	}), _defineProperty(_KeyConfigs, Keys.EXP_2, {
	    type: KeyTypes.OPERATOR,
	    // I18N: A label for a button that will square (take to the second
	    // power) some math.
	    ariaLabel: i18n._('Square')
	}), _defineProperty(_KeyConfigs, Keys.EXP_3, {
	    type: KeyTypes.OPERATOR,
	    // I18N: A label for a button that will cube (take to the third power)
	    // some math.
	    ariaLabel: i18n._('Cube')
	}), _defineProperty(_KeyConfigs, Keys.SQRT, {
	    type: KeyTypes.OPERATOR,
	    ariaLabel: i18n._('Square root')
	}), _defineProperty(_KeyConfigs, Keys.CUBE_ROOT, {
	    type: KeyTypes.OPERATOR,
	    ariaLabel: i18n._('Cube root')
	}), _defineProperty(_KeyConfigs, Keys.RADICAL, {
	    type: KeyTypes.OPERATOR,
	    ariaLabel: i18n._('Radical with custom root')
	}), _defineProperty(_KeyConfigs, Keys.LEFT_PAREN, {
	    type: KeyTypes.OPERATOR,
	    ariaLabel: i18n._('Left parenthesis')
	}), _defineProperty(_KeyConfigs, Keys.RIGHT_PAREN, {
	    type: KeyTypes.OPERATOR,
	    ariaLabel: i18n._('Right parenthesis')
	}), _defineProperty(_KeyConfigs, Keys.LN, {
	    type: KeyTypes.OPERATOR,
	    ariaLabel: i18n._('Natural logarithm')
	}), _defineProperty(_KeyConfigs, Keys.LOG, {
	    type: KeyTypes.OPERATOR,
	    ariaLabel: i18n._('Logarithm with base 10')
	}), _defineProperty(_KeyConfigs, Keys.LOG_N, {
	    type: KeyTypes.OPERATOR,
	    ariaLabel: i18n._('Logarithm with custom base')
	}), _defineProperty(_KeyConfigs, Keys.SIN, {
	    type: KeyTypes.OPERATOR,
	    ariaLabel: i18n._('Sine')
	}), _defineProperty(_KeyConfigs, Keys.COS, {
	    type: KeyTypes.OPERATOR,
	    ariaLabel: i18n._('Cosine')
	}), _defineProperty(_KeyConfigs, Keys.TAN, {
	    type: KeyTypes.OPERATOR,
	    ariaLabel: i18n._('Tangent')
	}), _defineProperty(_KeyConfigs, Keys.PI, {
	    type: KeyTypes.VALUE,
	    ariaLabel: i18n._('Pi'),
	    icon: {
	        type: IconTypes.MATH,
	        data: '\\pi'
	    }
	}), _defineProperty(_KeyConfigs, Keys.THETA, {
	    type: KeyTypes.VALUE,
	    ariaLabel: i18n._('Theta'),
	    icon: {
	        type: IconTypes.MATH,
	        data: '\\theta'
	    }
	}), _defineProperty(_KeyConfigs, Keys.NOOP, {
	    type: KeyTypes.EMPTY
	}), _defineProperty(_KeyConfigs, Keys.UP, {
	    type: KeyTypes.INPUT_NAVIGATION,
	    ariaLabel: i18n._('Up arrow')
	}), _defineProperty(_KeyConfigs, Keys.RIGHT, {
	    type: KeyTypes.INPUT_NAVIGATION,
	    ariaLabel: i18n._('Right arrow')
	}), _defineProperty(_KeyConfigs, Keys.DOWN, {
	    type: KeyTypes.INPUT_NAVIGATION,
	    ariaLabel: i18n._('Down arrow')
	}), _defineProperty(_KeyConfigs, Keys.LEFT, {
	    type: KeyTypes.INPUT_NAVIGATION,
	    ariaLabel: i18n._('Left arrow')
	}), _defineProperty(_KeyConfigs, Keys.JUMP_OUT_PARENTHESES, {
	    type: KeyTypes.INPUT_NAVIGATION,
	    ariaLabel: i18n._('Navigate right out of a set of parentheses')
	}), _defineProperty(_KeyConfigs, Keys.JUMP_OUT_EXPONENT, {
	    type: KeyTypes.INPUT_NAVIGATION,
	    ariaLabel: i18n._('Navigate right out of an exponent')
	}), _defineProperty(_KeyConfigs, Keys.JUMP_OUT_BASE, {
	    type: KeyTypes.INPUT_NAVIGATION,
	    ariaLabel: i18n._('Navigate right out of a base')
	}), _defineProperty(_KeyConfigs, Keys.JUMP_INTO_NUMERATOR, {
	    type: KeyTypes.INPUT_NAVIGATION,
	    ariaLabel: i18n._('Navigate right into the numerator of a fraction')
	}), _defineProperty(_KeyConfigs, Keys.JUMP_OUT_NUMERATOR, {
	    type: KeyTypes.INPUT_NAVIGATION,
	    ariaLabel: i18n._('Navigate right out of the numerator and into the denominator')
	}), _defineProperty(_KeyConfigs, Keys.JUMP_OUT_DENOMINATOR, {
	    type: KeyTypes.INPUT_NAVIGATION,
	    ariaLabel: i18n._('Navigate right out of the denominator of a fraction')
	}), _defineProperty(_KeyConfigs, Keys.BACKSPACE, {
	    type: KeyTypes.INPUT_NAVIGATION,
	    // I18N: A label for a button that will delete some input.
	    ariaLabel: i18n._('Delete')
	}), _defineProperty(_KeyConfigs, Keys.DISMISS, {
	    type: KeyTypes.KEYPAD_NAVIGATION,
	    // I18N: A label for a button that will dismiss/hide a keypad.
	    ariaLabel: i18n._('Dismiss')
	}), _KeyConfigs);

	// Add in any multi-function buttons. By default, these keys will mix in any
	// configuration settings from their default child key (i.e., the first key in
	// the `childKeyIds` array).
	// TODO(charlie): Make the multi-function button's long-press interaction
	// accessible.
	KeyConfigs[Keys.FRAC_MULTI] = {
	    childKeyIds: [Keys.FRAC_INCLUSIVE, Keys.FRAC_EXCLUSIVE]
	};

	// TODO(charlie): Use the numeral color for the 'Many' key.
	KeyConfigs[Keys.MANY] = {
	    type: KeyTypes.MANY
	    // childKeyIds will be configured by the client.
	};

	// Add in every numeral.
	var NUMBERS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
	    for (var _iterator = NUMBERS[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	        var num = _step.value;

	        // TODO(charlie): Consider removing the SVG icons that we have for the
	        // numeral keys. They can be rendered just as easily with text (though that
	        // would mean that we'd be using text beyond the variable key).
	        var textRepresentation = '' + num;
	        KeyConfigs['NUM_' + num] = {
	            type: KeyTypes.VALUE,
	            ariaLabel: textRepresentation,
	            icon: {
	                type: IconTypes.TEXT,
	                data: textRepresentation
	            }
	        };
	    }

	    // Add in every variable.
	} catch (err) {
	    _didIteratorError = true;
	    _iteratorError = err;
	} finally {
	    try {
	        if (!_iteratorNormalCompletion && _iterator.return) {
	            _iterator.return();
	        }
	    } finally {
	        if (_didIteratorError) {
	            throw _iteratorError;
	        }
	    }
	}

	var LETTERS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
	var _iteratorNormalCompletion2 = true;
	var _didIteratorError2 = false;
	var _iteratorError2 = undefined;

	try {
	    for (var _iterator2 = LETTERS[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	        var letter = _step2.value;

	        var lowerCaseVariable = letter.toLowerCase();
	        var upperCaseVariable = letter.toUpperCase();

	        var _arr = [lowerCaseVariable, upperCaseVariable];
	        for (var _i = 0; _i < _arr.length; _i++) {
	            var _textRepresentation = _arr[_i];
	            KeyConfigs[_textRepresentation] = {
	                type: KeyTypes.VALUE,
	                ariaLabel: _textRepresentation,
	                icon: {
	                    type: IconTypes.MATH,
	                    data: _textRepresentation
	                }
	            };
	        }
	    }
	} catch (err) {
	    _didIteratorError2 = true;
	    _iteratorError2 = err;
	} finally {
	    try {
	        if (!_iteratorNormalCompletion2 && _iterator2.return) {
	            _iterator2.return();
	        }
	    } finally {
	        if (_didIteratorError2) {
	            throw _iteratorError2;
	        }
	    }
	}

	var _iteratorNormalCompletion3 = true;
	var _didIteratorError3 = false;
	var _iteratorError3 = undefined;

	try {
	    for (var _iterator3 = Object.keys(KeyConfigs)[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	        var key = _step3.value;

	        KeyConfigs[key] = _extends({
	            id: key,
	            // Default to an SVG icon indexed by the key name.
	            icon: {
	                type: IconTypes.SVG,
	                data: key
	            }
	        }, KeyConfigs[key]);
	    }
	} catch (err) {
	    _didIteratorError3 = true;
	    _iteratorError3 = err;
	} finally {
	    try {
	        if (!_iteratorNormalCompletion3 && _iterator3.return) {
	            _iterator3.return();
	        }
	    } finally {
	        if (_didIteratorError3) {
	            throw _iteratorError3;
	        }
	    }
	}

	module.exports = KeyConfigs;

/***/ },
/* 613 */
/***/ function(module, exports) {

	'use strict';

	/**
	 * This file contains constants for keypad buttons that aren't single
	 * alphanumeric characters.
	 */

	// TODO(charlie): There's duplication between this file and key-configs.js.
	// We should clean it up by removing this file and requiring clients to use the
	// `id` field on the key configurations.
	var Keys = {
	    PLUS: 'PLUS',
	    MINUS: 'MINUS',
	    NEGATIVE: 'NEGATIVE',
	    TIMES: 'TIMES',
	    DIVIDE: 'DIVIDE',
	    DECIMAL: 'DECIMAL',
	    PERIOD: 'PERIOD',
	    PERCENT: 'PERCENT',
	    CDOT: 'CDOT',
	    EQUAL: 'EQUAL',
	    NEQ: 'NEQ',
	    GT: 'GT',
	    LT: 'LT',
	    GEQ: 'GEQ',
	    LEQ: 'LEQ',
	    FRAC_INCLUSIVE: 'FRAC_INCLUSIVE',
	    FRAC_EXCLUSIVE: 'FRAC_EXCLUSIVE',
	    EXP: 'EXP',
	    EXP_2: 'EXP_2',
	    EXP_3: 'EXP_3',
	    SQRT: 'SQRT',
	    CUBE_ROOT: 'CUBE_ROOT',
	    RADICAL: 'RADICAL',
	    LEFT_PAREN: 'LEFT_PAREN',
	    RIGHT_PAREN: 'RIGHT_PAREN',
	    LN: 'LN',
	    LOG: 'LOG',
	    LOG_N: 'LOG_N',
	    SIN: 'SIN',
	    COS: 'COS',
	    TAN: 'TAN',

	    // TODO(charlie): Add in additional Greek letters.
	    PI: 'PI',
	    THETA: 'THETA',

	    UP: 'UP',
	    RIGHT: 'RIGHT',
	    DOWN: 'DOWN',
	    LEFT: 'LEFT',
	    BACKSPACE: 'BACKSPACE',
	    DISMISS: 'DISMISS',

	    JUMP_OUT_PARENTHESES: 'JUMP_OUT_PARENTHESES',
	    JUMP_OUT_EXPONENT: 'JUMP_OUT_EXPONENT',
	    JUMP_OUT_BASE: 'JUMP_OUT_BASE',
	    JUMP_INTO_NUMERATOR: 'JUMP_INTO_NUMERATOR',
	    JUMP_OUT_NUMERATOR: 'JUMP_OUT_NUMERATOR',
	    JUMP_OUT_DENOMINATOR: 'JUMP_OUT_DENOMINATOR',

	    NOOP: 'NOOP',

	    // Multi-functional keys.
	    FRAC_MULTI: 'FRAC_MULTI',

	    // A custom key that captures an arbitrary number of symbols but has no
	    // 'default' symbol or action.
	    MANY: 'MANY'
	};

	module.exports = Keys;

/***/ },
/* 614 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _require = __webpack_require__(610),
	    DecimalSeparators = _require.DecimalSeparators;

	// We expect `window.icu` to be exposed by the parent. When in doubt, we fall
	// back to a period. We can only depend on a subset of what localeplanet
	// provides, however -- the things in `icu-slim.js` (there's a copy in ../lib/
	// for reference).


	var decimalSeparator = void 0;
	if (typeof window !== 'undefined' && window.icu && window.icu.getDecimalFormatSymbols().decimal_separator === ',') {
	    decimalSeparator = DecimalSeparators.COMMA;
	} else {
	    decimalSeparator = DecimalSeparators.PERIOD;
	}

	module.exports = {
	    decimalSeparator: decimalSeparator
	};

/***/ },
/* 615 */
/***/ function(module, exports) {

	'use strict';

	/**
	 * Constants that define the various contexts in which a cursor can exist. The
	 * active context is determined first by looking at the cursor's siblings (e.g.,
	 * for the `BEFORE_FRACTION` context), and then at its direct parent. Though a
	 * cursor could in theory be nested in multiple contexts, we only care about the
	 * immediate context.
	 *
	 * TODO(charlie): Add a context to represent being inside of a radical. Right
	 * now, we show the dismiss button rather than allowing the user to jump out of
	 * the radical.
	 */

	module.exports = {
	    // The cursor is not in any of the other viable contexts.
	    NONE: 'NONE',
	    // The cursor is within a set of parentheses.
	    IN_PARENS: 'IN_PARENS',
	    // The cursor is within a superscript (e.g., an exponent).
	    IN_SUPER_SCRIPT: 'IN_SUPER_SCRIPT',
	    // The cursor is within a subscript (e.g., the base of a custom logarithm).
	    IN_SUB_SCRIPT: 'IN_SUB_SCRIPT',
	    // The cursor is in the numerator of a fraction.
	    IN_NUMERATOR: 'IN_NUMERATOR',
	    // The cursor is in the denominator of a fraction.
	    IN_DENOMINATOR: 'IN_DENOMINATOR',
	    // The cursor is sitting before a fraction; that is, the cursor is within
	    // what looks to be a mixed number preceding a fraction. This will only be
	    // the case when the only math between the cursor and the fraction to its
	    // write is non-leaf math (numbers and variables).
	    BEFORE_FRACTION: 'BEFORE_FRACTION'
	};

/***/ },
/* 616 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * A grid of symbols, rendered as text and positioned based on the number of
	 * symbols provided. Up to four symbols will be shown.
	 */

	var React = __webpack_require__(1);

	var _require = __webpack_require__(489),
	    StyleSheet = _require.StyleSheet;

	var _require2 = __webpack_require__(487),
	    View = _require2.View;

	var Icon = __webpack_require__(561);

	var _require3 = __webpack_require__(610),
	    IconTypes = _require3.IconTypes;

	var _require4 = __webpack_require__(611),
	    iconPropType = _require4.iconPropType;

	var _require5 = __webpack_require__(563),
	    row = _require5.row,
	    column = _require5.column,
	    centered = _require5.centered,
	    fullWidth = _require5.fullWidth;

	var _require6 = __webpack_require__(564),
	    iconSizeHeightPx = _require6.iconSizeHeightPx,
	    iconSizeWidthPx = _require6.iconSizeWidthPx;

	var MultiSymbolGrid = function (_React$Component) {
	    _inherits(MultiSymbolGrid, _React$Component);

	    function MultiSymbolGrid() {
	        _classCallCheck(this, MultiSymbolGrid);

	        return _possibleConstructorReturn(this, (MultiSymbolGrid.__proto__ || Object.getPrototypeOf(MultiSymbolGrid)).apply(this, arguments));
	    }

	    _createClass(MultiSymbolGrid, [{
	        key: 'render',
	        value: function render() {
	            var _props = this.props,
	                focused = _props.focused,
	                icons = _props.icons;

	            // Validate that we only received math-based icons. Right now, this
	            // component only supports math icons (and it should only be passed
	            // variables and Greek letters, which are always rendered as math).
	            // Supporting other types of icons is possible but would require
	            // some styles coercion and doesn't seem worthwhile right now.

	            icons.forEach(function (icon) {
	                if (icon.type !== IconTypes.MATH) {
	                    throw new Error('Received invalid icon: type=' + icon.type + ', ' + ('data=' + icon.data));
	                }
	            });

	            if (icons.length === 1) {
	                return React.createElement(Icon, { icon: icons[0], focused: focused });
	            } else {
	                var primaryIconStyle = styles.base;
	                var secondaryIconStyle = [styles.base, styles.secondary];

	                if (icons.length === 2) {
	                    return React.createElement(
	                        View,
	                        { style: [row, styles.size] },
	                        React.createElement(
	                            View,
	                            { style: [column, centered, fullWidth, styles.middleLeft]
	                            },
	                            React.createElement(Icon, {
	                                style: primaryIconStyle,
	                                icon: icons[0],
	                                focused: focused
	                            })
	                        ),
	                        React.createElement(
	                            View,
	                            { style: [column, centered, fullWidth, styles.middleRight]
	                            },
	                            React.createElement(Icon, {
	                                style: secondaryIconStyle,
	                                icon: icons[1],
	                                focused: focused
	                            })
	                        )
	                    );
	                } else if (icons.length >= 3) {
	                    return React.createElement(
	                        View,
	                        { style: [column, styles.size] },
	                        React.createElement(
	                            View,
	                            { style: row },
	                            React.createElement(
	                                View,
	                                { style: [centered, fullWidth, styles.topLeft] },
	                                React.createElement(Icon, {
	                                    style: primaryIconStyle,
	                                    icon: icons[0],
	                                    focused: focused
	                                })
	                            ),
	                            React.createElement(
	                                View,
	                                { style: [centered, fullWidth, styles.topRight] },
	                                React.createElement(Icon, {
	                                    style: secondaryIconStyle,
	                                    icon: icons[1],
	                                    focused: focused
	                                })
	                            )
	                        ),
	                        React.createElement(
	                            View,
	                            { style: row },
	                            React.createElement(
	                                View,
	                                { style: [centered, fullWidth, styles.bottomLeft] },
	                                React.createElement(Icon, {
	                                    style: secondaryIconStyle,
	                                    icon: icons[2],
	                                    focused: focused
	                                })
	                            ),
	                            React.createElement(
	                                View,
	                                { style: [centered, fullWidth, styles.bottomRight] },
	                                icons[3] && React.createElement(Icon, {
	                                    style: secondaryIconStyle,
	                                    icon: icons[3],
	                                    focused: focused
	                                })
	                            )
	                        )
	                    );
	                }
	            }

	            throw new Error("Invalid number of icons:", icons.length);
	        }
	    }]);

	    return MultiSymbolGrid;
	}(React.Component);

	MultiSymbolGrid.propTypes = {
	    focused: React.PropTypes.bool,
	    icons: React.PropTypes.arrayOf(iconPropType).isRequired
	};


	var verticalInsetPx = 2;
	var horizontalInsetPx = 4;

	var styles = StyleSheet.create({
	    size: {
	        height: iconSizeHeightPx,
	        width: iconSizeWidthPx
	    },

	    // For the three- and four-icon layouts.
	    bottomLeft: {
	        marginBottom: verticalInsetPx,
	        marginLeft: horizontalInsetPx
	    },
	    topLeft: {
	        marginTop: verticalInsetPx,
	        marginLeft: horizontalInsetPx
	    },
	    topRight: {
	        marginTop: verticalInsetPx,
	        marginRight: horizontalInsetPx
	    },
	    bottomRight: {
	        marginBottom: verticalInsetPx,
	        marginRight: horizontalInsetPx
	    },

	    // For the two-icon layout.
	    middleLeft: {
	        marginLeft: horizontalInsetPx
	    },
	    middleRight: {
	        marginRight: horizontalInsetPx
	    },

	    base: {
	        fontSize: 18
	    },

	    secondary: {
	        opacity: 0.3
	    }
	});

	module.exports = MultiSymbolGrid;

/***/ },
/* 617 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * A small triangular decal to sit in the corner of a parent component.
	 */

	var React = __webpack_require__(1);

	var _require = __webpack_require__(489),
	    StyleSheet = _require.StyleSheet;

	var _require2 = __webpack_require__(487),
	    View = _require2.View;

	var _require3 = __webpack_require__(564),
	    gray25 = _require3.gray25;

	var CornerDecal = function (_React$Component) {
	    _inherits(CornerDecal, _React$Component);

	    function CornerDecal() {
	        _classCallCheck(this, CornerDecal);

	        return _possibleConstructorReturn(this, (CornerDecal.__proto__ || Object.getPrototypeOf(CornerDecal)).apply(this, arguments));
	    }

	    _createClass(CornerDecal, [{
	        key: 'render',
	        value: function render() {
	            var style = this.props.style;


	            var containerStyle = [styles.container].concat(_toConsumableArray(Array.isArray(style) ? style : [style]));

	            return React.createElement(
	                View,
	                { style: containerStyle },
	                React.createElement(
	                    'svg',
	                    {
	                        width: triangleSizePx,
	                        height: triangleSizePx,
	                        viewBox: '4 4 8 8'
	                    },
	                    React.createElement('path', {
	                        fill: gray25,
	                        opacity: '0.3',
	                        d: 'M5.29289322,5.70710678 L10.2928932,10.7071068 C10.9228581,11.3370716 12,10.8909049 12,10 L12,5 C12,4.44771525 11.5522847,4 11,4 L6,4 C5.10909515,4 4.66292836,5.07714192 5.29289322,5.70710678 Z' // @Nolint
	                    })
	                )
	            );
	        }
	    }]);

	    return CornerDecal;
	}(React.Component);

	CornerDecal.propTypes = {
	    style: React.PropTypes.any
	};


	var triangleSizePx = 7;

	var styles = StyleSheet.create({
	    container: {
	        position: "absolute",
	        top: 0,
	        right: 0,
	        width: triangleSizePx,
	        height: triangleSizePx
	    }
	});

	module.exports = CornerDecal;

/***/ },
/* 618 */
/***/ function(module, exports) {

	"use strict";

	/**
	 * This file contains all of the z-index values used throughout the math-input
	 * component and its children.
	 */

	module.exports = {
	  popover: 1,
	  echo: 2,
	  keypad: 1060
	};

/***/ },
/* 619 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * A component that renders and animates the popovers that appear over the
	 * multi-functional keys.
	 */

	var React = __webpack_require__(1);
	var ReactCSSTransitionGroup = __webpack_require__(553);

	var KeyConfigs = __webpack_require__(612);
	var MultiSymbolPopover = __webpack_require__(620);

	var _require = __webpack_require__(611),
	    boundingBoxPropType = _require.boundingBoxPropType,
	    keyConfigPropType = _require.keyConfigPropType,
	    popoverPropType = _require.popoverPropType;

	// NOTE(charlie): These must be kept in sync with the transition durations and
	// classnames specified in popover.less.


	var animationTransitionName = 'popover';
	var animationDurationMs = 200;

	// A container component used to position a popover absolutely at a specific
	// position.

	var PopoverContainer = function (_React$Component) {
	    _inherits(PopoverContainer, _React$Component);

	    function PopoverContainer() {
	        _classCallCheck(this, PopoverContainer);

	        return _possibleConstructorReturn(this, (PopoverContainer.__proto__ || Object.getPrototypeOf(PopoverContainer)).apply(this, arguments));
	    }

	    _createClass(PopoverContainer, [{
	        key: 'render',
	        value: function render() {
	            var _props = this.props,
	                bounds = _props.bounds,
	                childKeys = _props.childKeys;


	            var containerStyle = _extends({
	                position: 'absolute'
	            }, bounds);

	            return React.createElement(
	                'div',
	                { style: containerStyle },
	                React.createElement(MultiSymbolPopover, { keys: childKeys })
	            );
	        }
	    }]);

	    return PopoverContainer;
	}(React.Component);

	PopoverContainer.propTypes = {
	    bounds: boundingBoxPropType.isRequired,
	    childKeys: React.PropTypes.arrayOf(keyConfigPropType).isRequired
	};

	var PopoverManager = function (_React$Component2) {
	    _inherits(PopoverManager, _React$Component2);

	    function PopoverManager() {
	        _classCallCheck(this, PopoverManager);

	        return _possibleConstructorReturn(this, (PopoverManager.__proto__ || Object.getPrototypeOf(PopoverManager)).apply(this, arguments));
	    }

	    _createClass(PopoverManager, [{
	        key: 'render',
	        value: function render() {
	            var popover = this.props.popover;


	            return React.createElement(
	                ReactCSSTransitionGroup,
	                {
	                    transitionName: animationTransitionName,
	                    transitionEnter: true,
	                    transitionLeave: false,
	                    transitionEnterTimeout: animationDurationMs
	                },
	                popover && React.createElement(PopoverContainer, {
	                    key: popover.childKeyIds[0],
	                    bounds: popover.bounds,
	                    childKeys: popover.childKeyIds.map(function (id) {
	                        return KeyConfigs[id];
	                    })
	                })
	            );
	        }
	    }]);

	    return PopoverManager;
	}(React.Component);

	PopoverManager.propTypes = {
	    popover: popoverPropType
	};


	module.exports = PopoverManager;

/***/ },
/* 620 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * A popover that renders a set of keys floating above the page.
	 */

	var React = __webpack_require__(1);

	var _require = __webpack_require__(489),
	    StyleSheet = _require.StyleSheet;

	var _require2 = __webpack_require__(487),
	    View = _require2.View;

	var _require3 = __webpack_require__(611),
	    keyConfigPropType = _require3.keyConfigPropType;

	var _require4 = __webpack_require__(610),
	    BorderStyles = _require4.BorderStyles;

	var zIndexes = __webpack_require__(618);

	var MultiSymbolPopover = function (_React$Component) {
	    _inherits(MultiSymbolPopover, _React$Component);

	    function MultiSymbolPopover() {
	        _classCallCheck(this, MultiSymbolPopover);

	        return _possibleConstructorReturn(this, (MultiSymbolPopover.__proto__ || Object.getPrototypeOf(MultiSymbolPopover)).apply(this, arguments));
	    }

	    _createClass(MultiSymbolPopover, [{
	        key: 'render',
	        value: function render() {
	            var keys = this.props.keys;

	            // TODO(charlie): We have to require this lazily because of a cyclic
	            // dependence in our components.

	            var TouchableKeypadButton = __webpack_require__(621);
	            return React.createElement(
	                View,
	                { style: styles.container },
	                keys.map(function (key) {
	                    return React.createElement(TouchableKeypadButton, {
	                        key: key.id,
	                        keyConfig: key,
	                        borders: BorderStyles.NONE
	                    });
	                })
	            );
	        }
	    }]);

	    return MultiSymbolPopover;
	}(React.Component);

	MultiSymbolPopover.propTypes = {
	    keys: React.PropTypes.arrayOf(keyConfigPropType)
	};


	var styles = StyleSheet.create({
	    container: {
	        flexDirection: 'column-reverse',
	        position: 'relative',
	        width: '100%',
	        borderRadius: 2,
	        boxShadow: '0 2px 6px rgba(0, 0, 0, 0.3)',
	        zIndex: zIndexes.popover
	    },

	    popoverButton: {
	        backgroundColor: '#FFF',
	        borderWidth: 0
	    }
	});

	module.exports = MultiSymbolPopover;

/***/ },
/* 621 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * A touchable wrapper around the base KeypadButton component. This button is
	 * responsible for keeping our button ID system (which will be used to handle
	 * touch events globally) opaque to the KeypadButton.
	 */

	var React = __webpack_require__(1);
	var ReactDOM = __webpack_require__(550);

	var _require = __webpack_require__(513),
	    connect = _require.connect;

	var _require2 = __webpack_require__(489),
	    StyleSheet = _require2.StyleSheet;

	var KeypadButton = __webpack_require__(560);
	var KeyConfigs = __webpack_require__(612);
	var GestureManager = __webpack_require__(622);

	var _require3 = __webpack_require__(611),
	    bordersPropType = _require3.bordersPropType,
	    keyIdPropType = _require3.keyIdPropType;

	var _require4 = __webpack_require__(610),
	    KeyTypes = _require4.KeyTypes;

	var TouchableKeypadButton = function (_React$Component) {
	    _inherits(TouchableKeypadButton, _React$Component);

	    function TouchableKeypadButton() {
	        _classCallCheck(this, TouchableKeypadButton);

	        return _possibleConstructorReturn(this, (TouchableKeypadButton.__proto__ || Object.getPrototypeOf(TouchableKeypadButton)).apply(this, arguments));
	    }

	    _createClass(TouchableKeypadButton, [{
	        key: 'shouldComponentUpdate',
	        value: function shouldComponentUpdate(newProps) {
	            // We take advantage of a few different properties of our key
	            // configuration system. Namely, we know that the other props flow
	            // directly from the ID, and thus don't need to be checked. If a key has
	            // a custom style, we bail out (this should be rare).
	            return newProps.id !== this.props.id || newProps.gestureManager !== this.props.gestureManager || newProps.focused !== this.props.focused || newProps.disabled !== this.props.disabled || newProps.popoverEnabled !== this.props.popoverEnabled || newProps.type !== this.props.type || !!newProps.style;
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            var _props = this.props,
	                gestureManager = _props.gestureManager,
	                id = _props.id;

	            gestureManager.unregisterDOMNode(id);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _props2 = this.props,
	                borders = _props2.borders,
	                childKeyIds = _props2.childKeyIds,
	                disabled = _props2.disabled,
	                gestureManager = _props2.gestureManager,
	                id = _props2.id,
	                style = _props2.style,
	                rest = _objectWithoutProperties(_props2, ['borders', 'childKeyIds', 'disabled', 'gestureManager', 'id', 'style']);

	            // Only bind the relevant event handlers if the key is enabled.


	            var eventHandlers = disabled ? {
	                onTouchStart: function onTouchStart(evt) {
	                    return evt.preventDefault();
	                }
	            } : {
	                onTouchStart: function onTouchStart(evt) {
	                    return gestureManager.onTouchStart(evt, id);
	                },
	                onTouchEnd: function onTouchEnd(evt) {
	                    return gestureManager.onTouchEnd(evt);
	                },
	                onTouchMove: function onTouchMove(evt) {
	                    return gestureManager.onTouchMove(evt);
	                },
	                onTouchCancel: function onTouchCancel(evt) {
	                    return gestureManager.onTouchCancel(evt);
	                }
	            };

	            var styleWithAddons = [].concat(_toConsumableArray(Array.isArray(style) ? style : [style]), [styles.preventScrolls]);

	            return React.createElement(KeypadButton, _extends({
	                ref: function ref(node) {
	                    return gestureManager.registerDOMNode(id, ReactDOM.findDOMNode(node), childKeyIds, borders);
	                },
	                borders: borders,
	                disabled: disabled,
	                style: styleWithAddons
	            }, eventHandlers, rest));
	        }
	    }]);

	    return TouchableKeypadButton;
	}(React.Component);

	TouchableKeypadButton.propTypes = {
	    borders: bordersPropType,
	    childKeyIds: React.PropTypes.arrayOf(keyIdPropType),
	    disabled: React.PropTypes.bool,
	    focused: React.PropTypes.bool,
	    gestureManager: React.PropTypes.instanceOf(GestureManager),
	    id: keyIdPropType.isRequired,
	    popoverEnabled: React.PropTypes.bool,
	    style: React.PropTypes.any,
	    type: React.PropTypes.oneOf(Object.keys(KeyTypes)).isRequired
	};


	var extractProps = function extractProps(keyConfig) {
	    var ariaLabel = keyConfig.ariaLabel,
	        icon = keyConfig.icon,
	        type = keyConfig.type;

	    return { ariaLabel: ariaLabel, icon: icon, type: type };
	};

	var mapStateToProps = function mapStateToProps(state, ownProps) {
	    var gestures = state.gestures;

	    var keyConfig = ownProps.keyConfig,
	        rest = _objectWithoutProperties(ownProps, ['keyConfig']);

	    var id = keyConfig.id,
	        childKeyIds = keyConfig.childKeyIds,
	        type = keyConfig.type;


	    var childKeys = childKeyIds && childKeyIds.map(function (id) {
	        return KeyConfigs[id];
	    });

	    // Override with the default child props, if the key is a multi-symbol key
	    // (but not a many-symbol key, which operates under different rules).
	    var useFirstChildProps = type !== KeyTypes.MANY && childKeys && childKeys.length > 0;

	    return _extends({}, rest, {
	        childKeyIds: childKeyIds,
	        gestureManager: gestures.gestureManager,
	        id: id,

	        // Add in some gesture state.
	        focused: gestures.focus === id,
	        popoverEnabled: gestures.popover && gestures.popover.parentId === id,

	        // Pass down the child keys and any extracted props.
	        childKeys: childKeys
	    }, extractProps(useFirstChildProps ? childKeys[0] : keyConfig));
	};

	var styles = StyleSheet.create({
	    preventScrolls: {
	        // Touch events that start in the touchable buttons shouldn't be
	        // allowed to produce page scrolls.
	        touchAction: "none"
	    }
	});

	module.exports = connect(mapStateToProps)(TouchableKeypadButton);

/***/ },
/* 622 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * A high-level manager for our gesture system. In particular, this class
	 * connects our various bits of logic for managing gestures and interactions,
	 * and links them together.
	 */

	var NodeManager = __webpack_require__(623);
	var PopoverStateMachine = __webpack_require__(624);
	var GestureStateMachine = __webpack_require__(625);

	var coordsForEvent = function coordsForEvent(evt) {
	    return [evt.changedTouches[0].clientX, evt.changedTouches[0].clientY];
	};

	var GestureManager = function () {
	    function GestureManager(options, handlers, disabledSwipeKeys, multiPressableKeys) {
	        var _this = this;

	        _classCallCheck(this, GestureManager);

	        var swipeEnabled = options.swipeEnabled;


	        this.swipeEnabled = swipeEnabled;

	        // Events aren't tracked until event tracking is enabled.
	        this.trackEvents = false;

	        this.nodeManager = new NodeManager();
	        this.popoverStateMachine = new PopoverStateMachine({
	            onActiveNodesChanged: function onActiveNodesChanged(activeNodes) {
	                var popover = activeNodes.popover,
	                    rest = _objectWithoutProperties(activeNodes, ['popover']);

	                handlers.onActiveNodesChanged(_extends({
	                    popover: popover && {
	                        parentId: popover.parentId,
	                        bounds: _this.nodeManager.layoutPropsForId(popover.parentId).initialBounds,
	                        childKeyIds: popover.childIds
	                    }
	                }, rest));
	            },
	            /**
	             * `onClick` takes two arguments:
	             *
	             * @param {string} keyId - the identifier key that should initiate
	             *                         a click
	             * @param {string} domNodeId - the identifier of the DOM node on
	             *                             which the click should be considered
	             *                             to have occurred
	             * @param {bool} inPopover - whether the key was contained within a
	             *                           popover
	             *
	             * These two parameters will often be equivalent. They will differ,
	             * though, when a popover button is itself clicked, in which case
	             * we need to mimic the effects of clicking on its 'primary' child
	             * key, but animate the click on the popover button.
	             */
	            onClick: function onClick(keyId, domNodeId, inPopover) {
	                handlers.onClick(keyId, _this.nodeManager.layoutPropsForId(domNodeId), inPopover);
	            }
	        });
	        this.gestureStateMachine = new GestureStateMachine({
	            onFocus: function onFocus(id) {
	                _this.popoverStateMachine.onFocus(id);
	            },
	            onLongPress: function onLongPress(id) {
	                _this.popoverStateMachine.onLongPress(id);
	            },
	            onTouchEnd: function onTouchEnd(id) {
	                _this.popoverStateMachine.onTouchEnd(id);
	            },
	            onBlur: function onBlur() {
	                _this.popoverStateMachine.onBlur();
	            },
	            onSwipeChange: handlers.onSwipeChange,
	            onSwipeEnd: handlers.onSwipeEnd,
	            onTrigger: function onTrigger(id) {
	                _this.popoverStateMachine.onTrigger(id);
	            }
	        }, {}, disabledSwipeKeys, multiPressableKeys);
	    }

	    /**
	     * Handle a touch-start event that originated in a node registered with the
	     * gesture system.
	     *
	     * @param {TouchEvent} evt - the raw touch event from the browser
	     * @param {string} id - the identifier of the DOM node in which the touch
	     *                      occurred
	     */


	    _createClass(GestureManager, [{
	        key: 'onTouchStart',
	        value: function onTouchStart(evt, id) {
	            if (!this.trackEvents) {
	                return;
	            }

	            var _coordsForEvent = coordsForEvent(evt),
	                _coordsForEvent2 = _slicedToArray(_coordsForEvent, 1),
	                x = _coordsForEvent2[0];

	            // TODO(charlie): It doesn't seem to be guaranteed that every touch
	            // event on `changedTouches` originates from the node through which this
	            // touch event was sent. In that case, we'd be inappropriately reporting
	            // the starting node ID.


	            for (var i = 0; i < evt.changedTouches.length; i++) {
	                this.gestureStateMachine.onTouchStart(function () {
	                    return id;
	                }, evt.changedTouches[i].identifier, x);
	            }

	            // If an event started in a view that we're managing, we'll handle it
	            // all the way through.
	            evt.preventDefault();
	        }

	        /**
	         * Handle a touch-move event that originated in a node registered with the
	         * gesture system.
	         *
	         * @param {TouchEvent} evt - the raw touch event from the browser
	         */

	    }, {
	        key: 'onTouchMove',
	        value: function onTouchMove(evt) {
	            var _this2 = this;

	            if (!this.trackEvents) {
	                return;
	            }

	            var swipeLocked = this.popoverStateMachine.isPopoverVisible();
	            var swipeEnabled = this.swipeEnabled && !swipeLocked;

	            var _coordsForEvent3 = coordsForEvent(evt),
	                _coordsForEvent4 = _slicedToArray(_coordsForEvent3, 2),
	                x = _coordsForEvent4[0],
	                y = _coordsForEvent4[1];

	            for (var i = 0; i < evt.changedTouches.length; i++) {
	                this.gestureStateMachine.onTouchMove(function () {
	                    return _this2.nodeManager.idForCoords(x, y);
	                }, evt.changedTouches[i].identifier, x, swipeEnabled);
	            }
	        }

	        /**
	         * Handle a touch-end event that originated in a node registered with the
	         * gesture system.
	         *
	         * @param {TouchEvent} evt - the raw touch event from the browser
	         */

	    }, {
	        key: 'onTouchEnd',
	        value: function onTouchEnd(evt) {
	            var _this3 = this;

	            if (!this.trackEvents) {
	                return;
	            }

	            var _coordsForEvent5 = coordsForEvent(evt),
	                _coordsForEvent6 = _slicedToArray(_coordsForEvent5, 2),
	                x = _coordsForEvent6[0],
	                y = _coordsForEvent6[1];

	            for (var i = 0; i < evt.changedTouches.length; i++) {
	                this.gestureStateMachine.onTouchEnd(function () {
	                    return _this3.nodeManager.idForCoords(x, y);
	                }, evt.changedTouches[i].identifier, x);
	            }
	        }

	        /**
	         * Handle a touch-cancel event that originated in a node registered with the
	         * gesture system.
	         *
	         * @param {TouchEvent} evt - the raw touch event from the browser
	         */

	    }, {
	        key: 'onTouchCancel',
	        value: function onTouchCancel(evt) {
	            if (!this.trackEvents) {
	                return;
	            }

	            for (var i = 0; i < evt.changedTouches.length; i++) {
	                this.gestureStateMachine.onTouchCancel(evt.changedTouches[i].identifier);
	            }
	        }

	        /**
	         * Register a DOM node with a given identifier.
	         *
	         * @param {string} id - the identifier of the given node
	         * @param {node} domNode - the DOM node linked to the identifier
	         * @param {string[]} childIds - the identifiers of any DOM nodes that
	         *                              should be considered children of this node,
	         *                              in that they should take priority when
	         *                              intercepting touch events
	         * @param {object} borders - an opaque object describing the node's borders
	         */

	    }, {
	        key: 'registerDOMNode',
	        value: function registerDOMNode(id, domNode, childIds, borders) {
	            this.nodeManager.registerDOMNode(id, domNode, childIds, borders);
	            this.popoverStateMachine.registerPopover(id, childIds);
	        }

	        /**
	         * Unregister the DOM node with the given identifier.
	         *
	         * @param {string} id - the identifier of the node to unregister
	         */

	    }, {
	        key: 'unregisterDOMNode',
	        value: function unregisterDOMNode(id) {
	            this.nodeManager.unregisterDOMNode(id);
	            this.popoverStateMachine.unregisterPopover(id);
	        }

	        /**
	         * Enable event tracking for the gesture manager.
	         */

	    }, {
	        key: 'enableEventTracking',
	        value: function enableEventTracking() {
	            this.trackEvents = true;
	        }

	        /**
	         * Disable event tracking for the gesture manager. When called, the gesture
	         * manager will drop any events received by managed nodes.
	         */

	    }, {
	        key: 'disableEventTracking',
	        value: function disableEventTracking() {
	            this.trackEvents = false;
	        }
	    }]);

	    return GestureManager;
	}();

	module.exports = GestureManager;

/***/ },
/* 623 */
/***/ function(module, exports) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * A manager for our node-to-ID system. In particular, this class is
	 * responsible for maintaing a mapping between DOM nodes and node IDs, and
	 * translating touch events from the raw positions at which they occur to the
	 * nodes over which they are occurring. This differs from browser behavior, in
	 * which touch events are only sent to the node in which a touch started.
	 */

	var NodeManager = function () {
	    function NodeManager() {
	        var _this = this;

	        _classCallCheck(this, NodeManager);

	        // A mapping from IDs to DOM nodes.
	        this._nodesById = {};

	        // A mapping from IDs to the borders around the DOM nodes, which can be
	        // useful for layout purposes.
	        this._bordersById = {};

	        // An ordered list of IDs, where DOM nodes that are "higher" on the
	        // page come earlier in the list. Note that an ID may be present in
	        // this ordered list but not be registered to a DOM node (i.e., if it
	        // is registered as a child of another DOM node, but hasn't appeared in
	        // the DOM yet).
	        this._orderedIds = [];

	        // Cache bounding boxes aggressively, re-computing on page resize. Our
	        // caching here makes the strict assumption that if a node is reasonably
	        // assumed to be on-screen, its bounds won't change. For example, if we
	        // see that a touch occurred within the bounds of a node, we cache those
	        // bounds.
	        // TODO(charlie): It'd be great if we could pre-compute these when the
	        // page is idle and the keypad is visible (i.e., the nodes are in their
	        // proper positions).
	        this._cachedBoundingBoxesById = {};
	        window.addEventListener('resize', function () {
	            _this._cachedBoundingBoxesById = {};
	        });
	    }

	    /**
	     * Register a DOM node with a given identifier.
	     *
	     * @param {string} id - the identifier of the given node
	     * @param {node} domNode - the DOM node linked to the identifier
	     * @param {object} borders - an opaque object describing the node's borders
	     */


	    _createClass(NodeManager, [{
	        key: 'registerDOMNode',
	        value: function registerDOMNode(id, domNode, childIds, borders) {
	            this._nodesById[id] = domNode;
	            this._bordersById[id] = borders;

	            // Make sure that any children appear first.
	            // TODO(charlie): This is a very simplistic system that wouldn't
	            // properly handle multiple levels of nesting.
	            var allIds = [].concat(_toConsumableArray(childIds || []), [id], _toConsumableArray(this._orderedIds));

	            // De-dupe the list of IDs.
	            var orderedIds = [];
	            var seenIds = {};
	            var _iteratorNormalCompletion = true;
	            var _didIteratorError = false;
	            var _iteratorError = undefined;

	            try {
	                for (var _iterator = allIds[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                    var _id = _step.value;

	                    if (!seenIds[_id]) {
	                        orderedIds.push(_id);
	                        seenIds[_id] = true;
	                    }
	                }
	            } catch (err) {
	                _didIteratorError = true;
	                _iteratorError = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion && _iterator.return) {
	                        _iterator.return();
	                    }
	                } finally {
	                    if (_didIteratorError) {
	                        throw _iteratorError;
	                    }
	                }
	            }

	            this._orderedIds = orderedIds;
	        }

	        /**
	         * Unregister the DOM node with the given identifier.
	         *
	         * @param {string} id - the identifier of the node to unregister
	         */

	    }, {
	        key: 'unregisterDOMNode',
	        value: function unregisterDOMNode(id) {
	            delete this._nodesById[id];
	        }

	        /**
	         * Return the identifier of the topmost node located at the given
	         * coordinates.
	         *
	         * @param {number} x - the x coordinate at which to search for a node
	         * @param {number} y - the y coordinate at which to search for a node
	         * @returns {null|string} - null or the identifier of the topmost node at
	         *                          the given coordinates
	         */

	    }, {
	        key: 'idForCoords',
	        value: function idForCoords(x, y) {
	            var _iteratorNormalCompletion2 = true;
	            var _didIteratorError2 = false;
	            var _iteratorError2 = undefined;

	            try {
	                for (var _iterator2 = this._orderedIds[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	                    var id = _step2.value;

	                    var domNode = this._nodesById[id];
	                    if (domNode) {
	                        var bounds = domNode.getBoundingClientRect();
	                        if (bounds.left <= x && bounds.right > x && bounds.top <= y && bounds.bottom > y) {
	                            this._cachedBoundingBoxesById[id] = bounds;
	                            return id;
	                        }
	                    }
	                }
	            } catch (err) {
	                _didIteratorError2 = true;
	                _iteratorError2 = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
	                        _iterator2.return();
	                    }
	                } finally {
	                    if (_didIteratorError2) {
	                        throw _iteratorError2;
	                    }
	                }
	            }
	        }

	        /**
	         * Return the necessary layout information, including the bounds and border
	         * values, for the node with the given identifier.
	         *
	         * @param {string} id - the identifier of the node for which to return the
	         *                      layout information
	         * @returns {object} - the bounding client rect for the given node, along
	         *                     with its borders
	         */

	    }, {
	        key: 'layoutPropsForId',
	        value: function layoutPropsForId(id) {
	            if (!this._cachedBoundingBoxesById[id]) {
	                this._cachedBoundingBoxesById[id] = this._nodesById[id].getBoundingClientRect();
	            }

	            return {
	                initialBounds: this._cachedBoundingBoxesById[id],
	                borders: this._bordersById[id]
	            };
	        }
	    }]);

	    return NodeManager;
	}();

	module.exports = NodeManager;

/***/ },
/* 624 */
/***/ function(module, exports) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * A state machine for the popover state. In particular, this class manages the
	 * mapping of parent nodes to their children, and translates touch events that
	 * traverse various nodes to actions that are conditioned on whether a popover
	 * is present.
	 */

	var PopoverStateMachine = function () {
	    function PopoverStateMachine(handlers) {
	        _classCallCheck(this, PopoverStateMachine);

	        this.handlers = handlers;

	        this.activePopover = null;
	        this.popovers = {};
	    }

	    /**
	     * Register a popover container as containing a set of children.
	     *
	     * @param {string} id - the identifier of the popover container
	     * @param {string[]} childIds - the identifiers of the nodes contained in
	     *                              the popover container
	     */


	    _createClass(PopoverStateMachine, [{
	        key: "registerPopover",
	        value: function registerPopover(id, childIds) {
	            this.popovers[id] = childIds;
	        }

	        /**
	         * Unregister a popover container.
	         *
	         * @param {string} id - the identifier of the popover container to
	         *                      unregister
	         */

	    }, {
	        key: "unregisterPopover",
	        value: function unregisterPopover(id) {
	            delete this.popovers[id];
	        }

	        /**
	         * @returns {boolean} - whether a popover is active and visible
	         */

	    }, {
	        key: "isPopoverVisible",
	        value: function isPopoverVisible() {
	            return this.activePopover != null;
	        }

	        /**
	         * Blur the active nodes.
	         */

	    }, {
	        key: "onBlur",
	        value: function onBlur() {
	            this.activePopover = null;
	            this.handlers.onActiveNodesChanged({
	                popover: null,
	                focus: null
	            });
	        }

	        /**
	         * Handle a focus event on the node with the given identifier.
	         *
	         * @param {string} id - the identifier of the node that was focused
	         */

	    }, {
	        key: "onFocus",
	        value: function onFocus(id) {
	            if (this.activePopover) {
	                // If we have a popover that is currently active, we focus this
	                // node if it's in the popover, and remove any highlight otherwise.
	                if (this._isNodeInsidePopover(this.activePopover, id)) {
	                    this.handlers.onActiveNodesChanged({
	                        popover: {
	                            parentId: this.activePopover,
	                            childIds: this.popovers[this.activePopover]
	                        },
	                        focus: id
	                    });
	                } else {
	                    this.handlers.onActiveNodesChanged({
	                        popover: {
	                            parentId: this.activePopover,
	                            childIds: this.popovers[this.activePopover]
	                        },
	                        focus: null
	                    });
	                }
	            } else {
	                this.activePopover = null;
	                this.handlers.onActiveNodesChanged({
	                    popover: null,
	                    focus: id
	                });
	            }
	        }

	        /**
	         * Handle a long press event on the node with the given identifier.
	         *
	         * @param {string} id - the identifier of the node that was long-pressed
	         */

	    }, {
	        key: "onLongPress",
	        value: function onLongPress(id) {
	            // We only care about long presses if they occur on a popover, and we
	            // don't already have a popover active.
	            if (!this.activePopover && this.popovers[id]) {
	                // NOTE(charlie): There's an assumption here that focusing the
	                // first child is the correct behavior for a newly focused popover.
	                // This relies on the fact that the children are rendered
	                // bottom-up. If that rendering changes, this logic will need to
	                // change as well.
	                this.activePopover = id;
	                this.handlers.onActiveNodesChanged({
	                    popover: {
	                        parentId: this.activePopover,
	                        childIds: this.popovers[this.activePopover]
	                    },
	                    focus: this._defaultNodeForPopover(this.activePopover)
	                });
	            }
	        }

	        /**
	         * Handle the trigger (click or hold) of the node with the given identifier.
	         *
	         * @param {string} id - the identifier of the node that was triggered
	        */

	    }, {
	        key: "onTrigger",
	        value: function onTrigger(id) {
	            this.handlers.onClick(id, id, false);
	        }

	        /**
	         * Handle a touch-end event on the node with the given identifier.
	         *
	         * @param {string} id - the identifier of the node over which the touch
	         *                      ended
	         */

	    }, {
	        key: "onTouchEnd",
	        value: function onTouchEnd(id) {
	            var inPopover = !!this.activePopover;
	            if (inPopover) {
	                // If we have a popover that is currently active, we trigger a
	                // click on this node if and only if it's in the popover, with the
	                // exception that, if the node passed back _is_ the active popover,
	                // then we trigger its default node. This latter case should only
	                // be triggered if the user were to tap down on a popover-enabled
	                // node, hold for long enough for the popover to appear, and then
	                // release without ever moving their finger, in which case, the
	                // underlying gesture system would have no idea that the popover's
	                // first child node was now focused.
	                if (this._isNodeInsidePopover(this.activePopover, id)) {
	                    this.handlers.onClick(id, id, inPopover);
	                } else if (this.activePopover === id) {
	                    var keyId = this._defaultNodeForPopover(id);
	                    this.handlers.onClick(keyId, keyId, inPopover);
	                }
	            } else if (this.popovers[id]) {
	                // Otherwise, if the node is itself a popover revealer, trigger the
	                // clicking of its default node, but pass back the popover node ID
	                // for layout purposes.
	                var _keyId = this._defaultNodeForPopover(id);
	                var domNodeId = id;
	                this.handlers.onClick(_keyId, domNodeId, inPopover);
	            } else if (id != null) {
	                // Finally, if we have no active popover, and we touched up over a
	                // valid key, trigger a click.
	                this.onTrigger(id);
	            }

	            this.onBlur();
	        }
	    }, {
	        key: "_isNodeInsidePopover",
	        value: function _isNodeInsidePopover(popover, id) {
	            return this.popovers[popover].includes(id);
	        }
	    }, {
	        key: "_defaultNodeForPopover",
	        value: function _defaultNodeForPopover(popover) {
	            return this.popovers[popover][0];
	        }
	    }]);

	    return PopoverStateMachine;
	}();

	module.exports = PopoverStateMachine;

/***/ },
/* 625 */
/***/ function(module, exports) {

	"use strict";

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * The state machine that backs our gesture system. In particular, this state
	 * machine manages the interplay between focuses, touch ups, and swiping.
	 * It is entirely ignorant of the existence of popovers and the positions of
	 * DOM nodes, operating solely on IDs. The state machine does accommodate for
	 * multi-touch interactions, tracking gesture state on a per-touch basis.
	 */

	var defaults = {
	    longPressWaitTimeMs: 50,
	    swipeThresholdPx: 20,
	    holdIntervalMs: 250
	};

	var GestureStateMachine = function () {
	    function GestureStateMachine(handlers, options, swipeDisabledNodeIds, multiPressableKeys) {
	        _classCallCheck(this, GestureStateMachine);

	        this.handlers = handlers;
	        this.options = _extends({}, defaults, options);
	        this.swipeDisabledNodeIds = swipeDisabledNodeIds || [];
	        this.multiPressableKeys = multiPressableKeys || [];

	        // TODO(charlie): Flow-type this file. It's not great that we're now
	        // passing around these opaque state objects.
	        this.touchState = {};
	        this.swipeState = null;
	    }

	    _createClass(GestureStateMachine, [{
	        key: "_maybeCancelLongPressForTouch",
	        value: function _maybeCancelLongPressForTouch(touchId) {
	            var longPressTimeoutId = this.touchState[touchId].longPressTimeoutId;

	            if (longPressTimeoutId) {
	                clearTimeout(longPressTimeoutId);
	                this.touchState[touchId] = _extends({}, this.touchState[touchId], {
	                    longPressTimeoutId: null
	                });
	            }
	        }
	    }, {
	        key: "_maybeCancelPressAndHoldForTouch",
	        value: function _maybeCancelPressAndHoldForTouch(touchId) {
	            var pressAndHoldIntervalId = this.touchState[touchId].pressAndHoldIntervalId;

	            if (pressAndHoldIntervalId) {
	                // If there was an interval set to detect holds, clear it out.
	                clearInterval(pressAndHoldIntervalId);
	                this.touchState[touchId] = _extends({}, this.touchState[touchId], {
	                    pressAndHoldIntervalId: null
	                });
	            }
	        }
	    }, {
	        key: "_cleanupTouchEvent",
	        value: function _cleanupTouchEvent(touchId) {
	            this._maybeCancelLongPressForTouch(touchId);
	            this._maybeCancelPressAndHoldForTouch(touchId);
	            delete this.touchState[touchId];
	        }

	        /**
	         * Handle a focus event on the node with the given identifier, which may be
	         * `null` to indicate that the user has dragged their finger off of any
	         * registered nodes, but is still in the middle of a gesture.
	         *
	         * @param {string|null} id - the identifier of the newly focused node, or
	         *                           `null` if no node is focused
	         * @param {number} touchId - a unique identifier associated with the touch
	         */

	    }, {
	        key: "_onFocus",
	        value: function _onFocus(id, touchId) {
	            var _this = this;

	            // If we're in the middle of a long-press, cancel it.
	            this._maybeCancelLongPressForTouch(touchId);

	            // Reset any existing hold-detecting interval.
	            this._maybeCancelPressAndHoldForTouch(touchId);

	            // Set the focused node ID and handle the focus event.
	            // Note: we can call `onFocus` with `null` IDs. The semantics of an
	            // `onFocus` with a `null` ID differs from that of `onBlur`. The former
	            // indicates that a gesture that can focus future nodes is still in
	            // progress, but that no node is currently focused. The latter
	            // indicates that the gesture has ended and nothing will be focused.
	            this.touchState[touchId] = _extends({}, this.touchState[touchId], {
	                activeNodeId: id
	            });
	            this.handlers.onFocus(id);

	            if (id) {
	                // Handle logic for repeating button presses.
	                if (this.multiPressableKeys.includes(id)) {
	                    // Start by triggering a click, iOS style.
	                    this.handlers.onTrigger(id);

	                    // Set up a new hold detector for the current button.
	                    this.touchState[touchId] = _extends({}, this.touchState[touchId], {
	                        pressAndHoldIntervalId: setInterval(function () {
	                            // On every cycle, trigger the click handler.
	                            _this.handlers.onTrigger(id);
	                        }, this.options.holdIntervalMs)
	                    });
	                } else {
	                    // Set up a new hold detector for the current button.
	                    this.touchState[touchId] = _extends({}, this.touchState[touchId], {
	                        longPressTimeoutId: setTimeout(function () {
	                            _this.handlers.onLongPress(id);
	                            _this.touchState[touchId] = _extends({}, _this.touchState[touchId], {
	                                longPressTimeoutId: null
	                            });
	                        }, this.options.longPressWaitTimeMs)
	                    });
	                }
	            }
	        }

	        /**
	         * Clear out all active gesture information.
	         */

	    }, {
	        key: "_onSwipeStart",
	        value: function _onSwipeStart() {
	            var _iteratorNormalCompletion = true;
	            var _didIteratorError = false;
	            var _iteratorError = undefined;

	            try {
	                for (var _iterator = Object.keys(this.touchState)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                    var activeTouchId = _step.value;

	                    this._maybeCancelLongPressForTouch(activeTouchId);
	                    this._maybeCancelPressAndHoldForTouch(activeTouchId);
	                }
	            } catch (err) {
	                _didIteratorError = true;
	                _iteratorError = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion && _iterator.return) {
	                        _iterator.return();
	                    }
	                } finally {
	                    if (_didIteratorError) {
	                        throw _iteratorError;
	                    }
	                }
	            }

	            this.touchState = {};
	            this.handlers.onBlur();
	        }

	        /**
	         * A function that returns the identifier of the node over which the touch
	         * event occurred. This is provided as a piece of lazy computation, as
	         * computing the DOM node for a given point is expensive, and the state
	         * machine won't always need that information. For example, if the user is
	         * swiping, then `onTouchMove` needs to be performant and doesn't care about
	         * the node over which the touch occurred.
	         *
	         * @typedef idComputation
	         * @returns {DOMNode} - the identifier of the node over which the touch
	         *                      occurred
	         */

	        /**
	         * Handle a touch-start event on the node with the given identifer.
	         *
	         * @param {idComputation} getId - a function that returns identifier of the
	         *                                node over which the start event occurred
	         * @param {number} touchId - a unique identifier associated with the touch
	         */

	    }, {
	        key: "onTouchStart",
	        value: function onTouchStart(getId, touchId, pageX) {
	            // Ignore any touch events that start mid-swipe.
	            if (this.swipeState) {
	                return;
	            }

	            if (this.touchState[touchId]) {
	                // It turns out we can get multiple touch starts with no
	                // intervening move, end, or cancel events in Android WebViews.
	                // TODO(benkomalo): it's not entirely clear why this happens, but
	                // it seems to happen with the backspace button. It may be related
	                // to FastClick (https://github.com/ftlabs/fastclick/issues/71)
	                // though I haven't verified, and it's probably good to be robust
	                // here anyways.
	                return;
	            }

	            var startingNodeId = getId();
	            this.touchState[touchId] = {
	                swipeLocked: this.swipeDisabledNodeIds.includes(startingNodeId),
	                startX: pageX
	            };

	            this._onFocus(startingNodeId, touchId);
	        }

	        /**
	         * Handle a touch-move event on the node with the given identifer.
	         *
	         * @param {idComputation} getId - a function that returns identifier of the
	         *                                node over which the move event occurred
	         * @param {number} touchId - a unique identifier associated with the touch
	         * @param {number} pageX - the x coordinate of the touch
	         * @param {boolean} swipeEnabled - whether the system should allow for
	         *                                 transitions into a swiping state
	         */

	    }, {
	        key: "onTouchMove",
	        value: function onTouchMove(getId, touchId, pageX, swipeEnabled) {
	            if (this.swipeState) {
	                // Only respect the finger that started a swipe. Any other lingering
	                // gestures are ignored.
	                if (this.swipeState.touchId === touchId) {
	                    this.handlers.onSwipeChange(pageX - this.swipeState.startX);
	                }
	            } else if (this.touchState[touchId]) {
	                // It could be touch events started outside the keypad and
	                // moved into it; ignore them.
	                var _touchState$touchId = this.touchState[touchId],
	                    activeNodeId = _touchState$touchId.activeNodeId,
	                    startX = _touchState$touchId.startX,
	                    swipeLocked = _touchState$touchId.swipeLocked;


	                var dx = pageX - startX;
	                var shouldBeginSwiping = swipeEnabled && !swipeLocked && Math.abs(dx) > this.options.swipeThresholdPx;

	                if (shouldBeginSwiping) {
	                    this._onSwipeStart();

	                    // Trigger the swipe.
	                    this.swipeState = {
	                        touchId: touchId,
	                        startX: startX
	                    };
	                    this.handlers.onSwipeChange(pageX - this.swipeState.startX);
	                } else {
	                    var id = getId();
	                    if (id !== activeNodeId) {
	                        this._onFocus(id, touchId);
	                    }
	                }
	            }
	        }

	        /**
	         * Handle a touch-end event on the node with the given identifer.
	         *
	         * @param {idComputation} getId - a function that returns identifier of the
	         *                                node over which the end event occurred
	         * @param {number} touchId - a unique identifier associated with the touch
	         * @param {number} pageX - the x coordinate of the touch
	         */

	    }, {
	        key: "onTouchEnd",
	        value: function onTouchEnd(getId, touchId, pageX) {
	            if (this.swipeState) {
	                // Only respect the finger that started a swipe. Any other lingering
	                // gestures are ignored.
	                if (this.swipeState.touchId === touchId) {
	                    this.handlers.onSwipeEnd(pageX - this.swipeState.startX);
	                    this.swipeState = null;
	                }
	            } else if (this.touchState[touchId]) {
	                // It could be touch events started outside the keypad and
	                // moved into it; ignore them.
	                var _touchState$touchId2 = this.touchState[touchId],
	                    activeNodeId = _touchState$touchId2.activeNodeId,
	                    pressAndHoldIntervalId = _touchState$touchId2.pressAndHoldIntervalId;


	                this._cleanupTouchEvent(touchId);

	                var didPressAndHold = !!pressAndHoldIntervalId;
	                if (didPressAndHold) {
	                    // We don't trigger a touch end if there was a press and hold,
	                    // because the key has been triggered at least once and calling
	                    // the onTouchEnd handler would add an extra trigger.
	                    this.handlers.onBlur();
	                } else {
	                    // Trigger a touch-end. There's no need to notify clients of a
	                    // blur as clients are responsible for handling any cleanup in
	                    // their touch-end handlers.
	                    this.handlers.onTouchEnd(activeNodeId);
	                }
	            }
	        }

	        /**
	         * Handle a touch-cancel event.
	         */

	    }, {
	        key: "onTouchCancel",
	        value: function onTouchCancel(touchId) {
	            // If a touch is cancelled and we're swiping, end the swipe with no
	            // displacement.
	            if (this.swipeState) {
	                if (this.swipeState.touchId === touchId) {
	                    this.handlers.onSwipeEnd(0);
	                    this.swipeState = null;
	                }
	            } else if (this.touchState[touchId]) {
	                // Otherwise, trigger a full blur. We don't want to trigger a
	                // touch-up, since the cancellation means that the user probably
	                // didn't release over a key intentionally.
	                this._cleanupTouchEvent(touchId);
	                this.handlers.onBlur();
	            }
	        }
	    }]);

	    return GestureStateMachine;
	}();

	module.exports = GestureStateMachine;

/***/ },
/* 626 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * A keypad that includes all of the expression symbols.
	 */

	var React = __webpack_require__(1);

	var _require = __webpack_require__(513),
	    connect = _require.connect;

	var _require2 = __webpack_require__(489),
	    StyleSheet = _require2.StyleSheet;

	var _require3 = __webpack_require__(487),
	    View = _require3.View;

	var TwoPageKeypad = __webpack_require__(627);
	var ManyKeypadButton = __webpack_require__(630);
	var TouchableKeypadButton = __webpack_require__(621);

	var _require4 = __webpack_require__(563),
	    row = _require4.row,
	    column = _require4.column,
	    oneColumn = _require4.oneColumn,
	    fullWidth = _require4.fullWidth,
	    roundedTopLeft = _require4.roundedTopLeft,
	    roundedTopRight = _require4.roundedTopRight;

	var _require5 = __webpack_require__(610),
	    BorderStyles = _require5.BorderStyles;

	var _require6 = __webpack_require__(564),
	    valueGrey = _require6.valueGrey,
	    controlGrey = _require6.controlGrey;

	var _require7 = __webpack_require__(611),
	    cursorContextPropType = _require7.cursorContextPropType,
	    keyIdPropType = _require7.keyIdPropType;

	var KeyConfigs = __webpack_require__(612);
	var CursorContexts = __webpack_require__(615);

	var ExpressionKeypad = function (_React$Component) {
	    _inherits(ExpressionKeypad, _React$Component);

	    function ExpressionKeypad() {
	        _classCallCheck(this, ExpressionKeypad);

	        return _possibleConstructorReturn(this, (ExpressionKeypad.__proto__ || Object.getPrototypeOf(ExpressionKeypad)).apply(this, arguments));
	    }

	    _createClass(ExpressionKeypad, [{
	        key: 'render',


	        // Though we include an infinite-key popover in the bottom-left, it's
	        // assumed that we don't need to accommodate cases in which that key
	        // contains more than four children.
	        value: function render() {
	            var _props = this.props,
	                currentPage = _props.currentPage,
	                cursorContext = _props.cursorContext,
	                dynamicJumpOut = _props.dynamicJumpOut,
	                extraKeys = _props.extraKeys,
	                roundTopLeft = _props.roundTopLeft,
	                roundTopRight = _props.roundTopRight;


	            var dismissOrJumpOutKey = void 0;
	            if (dynamicJumpOut) {
	                switch (cursorContext) {
	                    case CursorContexts.IN_PARENS:
	                        dismissOrJumpOutKey = KeyConfigs.JUMP_OUT_PARENTHESES;
	                        break;

	                    case CursorContexts.IN_SUPER_SCRIPT:
	                        dismissOrJumpOutKey = KeyConfigs.JUMP_OUT_EXPONENT;
	                        break;

	                    case CursorContexts.IN_SUB_SCRIPT:
	                        dismissOrJumpOutKey = KeyConfigs.JUMP_OUT_BASE;
	                        break;

	                    case CursorContexts.BEFORE_FRACTION:
	                        dismissOrJumpOutKey = KeyConfigs.JUMP_INTO_NUMERATOR;
	                        break;

	                    case CursorContexts.IN_NUMERATOR:
	                        dismissOrJumpOutKey = KeyConfigs.JUMP_OUT_NUMERATOR;
	                        break;

	                    case CursorContexts.IN_DENOMINATOR:
	                        dismissOrJumpOutKey = KeyConfigs.JUMP_OUT_DENOMINATOR;
	                        break;

	                    case CursorContexts.NONE:
	                    default:
	                        dismissOrJumpOutKey = KeyConfigs.DISMISS;
	                        break;
	                }
	            } else {
	                dismissOrJumpOutKey = KeyConfigs.DISMISS;
	            }

	            var rightPageStyle = [row, fullWidth, styles.rightPage, roundTopRight && roundedTopRight];
	            var rightPage = React.createElement(
	                View,
	                { style: rightPageStyle },
	                React.createElement(
	                    View,
	                    { style: [column, oneColumn] },
	                    React.createElement(TouchableKeypadButton, {
	                        keyConfig: KeyConfigs.NUM_7,
	                        borders: BorderStyles.NONE
	                    }),
	                    React.createElement(TouchableKeypadButton, {
	                        keyConfig: KeyConfigs.NUM_4,
	                        borders: BorderStyles.NONE
	                    }),
	                    React.createElement(TouchableKeypadButton, {
	                        keyConfig: KeyConfigs.NUM_1,
	                        borders: BorderStyles.BOTTOM
	                    }),
	                    React.createElement(ManyKeypadButton, {
	                        keys: extraKeys,
	                        borders: BorderStyles.NONE
	                    })
	                ),
	                React.createElement(
	                    View,
	                    { style: [column, oneColumn] },
	                    React.createElement(TouchableKeypadButton, {
	                        keyConfig: KeyConfigs.NUM_8,
	                        borders: BorderStyles.NONE
	                    }),
	                    React.createElement(TouchableKeypadButton, {
	                        keyConfig: KeyConfigs.NUM_5,
	                        borders: BorderStyles.NONE
	                    }),
	                    React.createElement(TouchableKeypadButton, {
	                        keyConfig: KeyConfigs.NUM_2,
	                        borders: BorderStyles.NONE
	                    }),
	                    React.createElement(TouchableKeypadButton, {
	                        keyConfig: KeyConfigs.NUM_0,
	                        borders: BorderStyles.LEFT
	                    })
	                ),
	                React.createElement(
	                    View,
	                    { style: [column, oneColumn] },
	                    React.createElement(TouchableKeypadButton, {
	                        keyConfig: KeyConfigs.NUM_9,
	                        borders: BorderStyles.NONE
	                    }),
	                    React.createElement(TouchableKeypadButton, {
	                        keyConfig: KeyConfigs.NUM_6,
	                        borders: BorderStyles.NONE
	                    }),
	                    React.createElement(TouchableKeypadButton, {
	                        keyConfig: KeyConfigs.NUM_3,
	                        borders: BorderStyles.BOTTOM
	                    }),
	                    React.createElement(TouchableKeypadButton, {
	                        keyConfig: KeyConfigs.DECIMAL,
	                        borders: BorderStyles.LEFT
	                    })
	                ),
	                React.createElement(
	                    View,
	                    { style: [column, oneColumn] },
	                    React.createElement(TouchableKeypadButton, {
	                        keyConfig: KeyConfigs.DIVIDE,
	                        borders: BorderStyles.LEFT
	                    }),
	                    React.createElement(TouchableKeypadButton, {
	                        keyConfig: KeyConfigs.TIMES,
	                        borders: BorderStyles.LEFT
	                    }),
	                    React.createElement(TouchableKeypadButton, {
	                        keyConfig: KeyConfigs.MINUS,
	                        borders: BorderStyles.LEFT
	                    }),
	                    React.createElement(TouchableKeypadButton, {
	                        keyConfig: KeyConfigs.PLUS,
	                        borders: BorderStyles.LEFT
	                    })
	                ),
	                React.createElement(
	                    View,
	                    { style: [column, oneColumn] },
	                    React.createElement(TouchableKeypadButton, {
	                        keyConfig: KeyConfigs.FRAC_INCLUSIVE,
	                        style: roundTopRight && roundedTopRight
	                    }),
	                    React.createElement(TouchableKeypadButton, { keyConfig: KeyConfigs.CDOT }),
	                    React.createElement(TouchableKeypadButton, {
	                        keyConfig: KeyConfigs.BACKSPACE,
	                        borders: BorderStyles.LEFT
	                    }),
	                    React.createElement(TouchableKeypadButton, {
	                        keyConfig: dismissOrJumpOutKey,
	                        borders: BorderStyles.LEFT
	                    })
	                )
	            );

	            var leftPageStyle = [row, fullWidth, styles.leftPage, roundTopLeft && roundedTopLeft];
	            var leftPage = React.createElement(
	                View,
	                { style: leftPageStyle },
	                React.createElement(
	                    View,
	                    { style: [column, oneColumn] },
	                    React.createElement(TouchableKeypadButton, {
	                        keyConfig: KeyConfigs.EXP_2,
	                        borders: BorderStyles.NONE,
	                        style: roundTopLeft && roundedTopLeft
	                    }),
	                    React.createElement(TouchableKeypadButton, {
	                        keyConfig: KeyConfigs.SQRT,
	                        borders: BorderStyles.NONE
	                    }),
	                    React.createElement(TouchableKeypadButton, {
	                        keyConfig: KeyConfigs.LOG,
	                        borders: BorderStyles.BOTTOM
	                    }),
	                    React.createElement(TouchableKeypadButton, {
	                        keyConfig: KeyConfigs.SIN,
	                        borders: BorderStyles.NONE
	                    })
	                ),
	                React.createElement(
	                    View,
	                    { style: [column, oneColumn] },
	                    React.createElement(TouchableKeypadButton, {
	                        keyConfig: KeyConfigs.EXP_3,
	                        borders: BorderStyles.NONE
	                    }),
	                    React.createElement(TouchableKeypadButton, {
	                        keyConfig: KeyConfigs.CUBE_ROOT,
	                        borders: BorderStyles.NONE
	                    }),
	                    React.createElement(TouchableKeypadButton, {
	                        keyConfig: KeyConfigs.LN,
	                        borders: BorderStyles.BOTTOM
	                    }),
	                    React.createElement(TouchableKeypadButton, {
	                        keyConfig: KeyConfigs.COS,
	                        borders: BorderStyles.NONE
	                    })
	                ),
	                React.createElement(
	                    View,
	                    { style: [column, oneColumn] },
	                    React.createElement(TouchableKeypadButton, {
	                        keyConfig: KeyConfigs.EXP,
	                        borders: BorderStyles.NONE
	                    }),
	                    React.createElement(TouchableKeypadButton, {
	                        keyConfig: KeyConfigs.RADICAL,
	                        borders: BorderStyles.NONE
	                    }),
	                    React.createElement(TouchableKeypadButton, {
	                        keyConfig: KeyConfigs.LOG_N,
	                        borders: BorderStyles.BOTTOM
	                    }),
	                    React.createElement(TouchableKeypadButton, {
	                        keyConfig: KeyConfigs.TAN,
	                        borders: BorderStyles.NONE
	                    })
	                ),
	                React.createElement(
	                    View,
	                    { style: [column, oneColumn] },
	                    React.createElement(TouchableKeypadButton, {
	                        keyConfig: KeyConfigs.GEQ,
	                        borders: BorderStyles.LEFT
	                    }),
	                    React.createElement(TouchableKeypadButton, {
	                        keyConfig: KeyConfigs.EQUAL,
	                        borders: BorderStyles.LEFT
	                    }),
	                    React.createElement(TouchableKeypadButton, { keyConfig: KeyConfigs.LEQ }),
	                    React.createElement(TouchableKeypadButton, {
	                        keyConfig: KeyConfigs.LEFT_PAREN,
	                        borders: BorderStyles.LEFT
	                    })
	                ),
	                React.createElement(
	                    View,
	                    { style: [column, oneColumn] },
	                    React.createElement(TouchableKeypadButton, {
	                        keyConfig: KeyConfigs.GT,
	                        borders: BorderStyles.NONE
	                    }),
	                    React.createElement(TouchableKeypadButton, {
	                        keyConfig: KeyConfigs.NEQ,
	                        borders: BorderStyles.NONE
	                    }),
	                    React.createElement(TouchableKeypadButton, {
	                        keyConfig: KeyConfigs.LT,
	                        borders: BorderStyles.BOTTOM
	                    }),
	                    React.createElement(TouchableKeypadButton, {
	                        keyConfig: KeyConfigs.RIGHT_PAREN,
	                        borders: BorderStyles.NONE
	                    })
	                )
	            );

	            return React.createElement(TwoPageKeypad, {
	                currentPage: currentPage,
	                rightPage: rightPage,
	                leftPage: leftPage
	            });
	        }
	    }]);

	    return ExpressionKeypad;
	}(React.Component);

	ExpressionKeypad.propTypes = {
	    currentPage: React.PropTypes.number.isRequired,
	    cursorContext: cursorContextPropType.isRequired,
	    dynamicJumpOut: React.PropTypes.bool,
	    extraKeys: React.PropTypes.arrayOf(keyIdPropType),
	    roundTopLeft: React.PropTypes.bool,
	    roundTopRight: React.PropTypes.bool
	};
	ExpressionKeypad.rows = 4;
	ExpressionKeypad.columns = 5;
	ExpressionKeypad.maxVisibleRows = 4;
	ExpressionKeypad.numPages = 2;


	var styles = StyleSheet.create({
	    // NOTE(charlie): These backgrounds are applied to as to fill in some
	    // unfortunate 'cracks' in the layout. However, not all keys in the first
	    // page use this background color (namely, the 'command' keys, backspace and
	    // dismiss).
	    // TODO(charlie): Apply the proper background between the 'command' keys.
	    rightPage: {
	        backgroundColor: valueGrey
	    },

	    leftPage: {
	        backgroundColor: controlGrey
	    }
	});

	var mapStateToProps = function mapStateToProps(state) {
	    return {
	        currentPage: state.pager.currentPage,
	        cursorContext: state.input.cursor.context,
	        dynamicJumpOut: !state.layout.navigationPadEnabled
	    };
	};

	module.exports = connect(mapStateToProps)(ExpressionKeypad);

/***/ },
/* 627 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * A keypad with two pages of keys.
	 */

	var React = __webpack_require__(1);

	var _require = __webpack_require__(513),
	    connect = _require.connect;

	var _require2 = __webpack_require__(489),
	    StyleSheet = _require2.StyleSheet;

	var Keypad = __webpack_require__(549);
	var ViewPager = __webpack_require__(628);
	var PagerIndicator = __webpack_require__(629);

	var _require3 = __webpack_require__(487),
	    View = _require3.View;

	var _require4 = __webpack_require__(563),
	    column = _require4.column,
	    row = _require4.row,
	    fullWidth = _require4.fullWidth;

	var _require5 = __webpack_require__(564),
	    innerBorderColor = _require5.innerBorderColor,
	    innerBorderStyle = _require5.innerBorderStyle,
	    innerBorderWidthPx = _require5.innerBorderWidthPx,
	    gray85 = _require5.gray85;

	var TwoPageKeypad = function (_React$Component) {
	    _inherits(TwoPageKeypad, _React$Component);

	    function TwoPageKeypad() {
	        _classCallCheck(this, TwoPageKeypad);

	        return _possibleConstructorReturn(this, (TwoPageKeypad.__proto__ || Object.getPrototypeOf(TwoPageKeypad)).apply(this, arguments));
	    }

	    _createClass(TwoPageKeypad, [{
	        key: 'render',
	        value: function render() {
	            var _props = this.props,
	                currentPage = _props.currentPage,
	                leftPage = _props.leftPage,
	                paginationEnabled = _props.paginationEnabled,
	                rightPage = _props.rightPage;


	            if (paginationEnabled) {
	                return React.createElement(
	                    Keypad,
	                    { style: [column, styles.keypad] },
	                    React.createElement(PagerIndicator, { numPages: 2, currentPage: currentPage }),
	                    React.createElement(
	                        View,
	                        { style: styles.borderTop },
	                        React.createElement(
	                            ViewPager,
	                            null,
	                            leftPage,
	                            rightPage
	                        )
	                    )
	                );
	            } else {
	                return React.createElement(
	                    Keypad,
	                    { style: styles.keypad },
	                    React.createElement(
	                        View,
	                        { style: row },
	                        React.createElement(
	                            View,
	                            { style: fullWidth },
	                            leftPage
	                        ),
	                        React.createElement(
	                            View,
	                            { style: [styles.borderLeft, fullWidth] },
	                            rightPage
	                        )
	                    )
	                );
	            }
	        }
	    }]);

	    return TwoPageKeypad;
	}(React.Component);

	TwoPageKeypad.propTypes = {
	    currentPage: React.PropTypes.oneOf([0, 1]).isRequired,
	    leftPage: React.PropTypes.node.isRequired,
	    paginationEnabled: React.PropTypes.bool.isRequired,
	    rightPage: React.PropTypes.node.isRequired
	};


	var styles = StyleSheet.create({
	    keypad: {
	        // Set the background to light grey, so that when the user drags the
	        // keypad pages past the edges, there's a grey backdrop.
	        backgroundColor: gray85
	    },

	    borderTop: {
	        borderTop: innerBorderWidthPx + 'px ' + innerBorderStyle + ' ' + ('' + innerBorderColor)
	    },
	    borderLeft: {
	        borderLeft: innerBorderWidthPx + 'px ' + innerBorderStyle + ' ' + ('' + innerBorderColor),
	        boxSizing: 'content-box'
	    }
	});

	var mapStateToProps = function mapStateToProps(state) {
	    return {
	        paginationEnabled: state.layout.paginationEnabled
	    };
	};

	module.exports = connect(mapStateToProps)(TwoPageKeypad);

/***/ },
/* 628 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * A view pager that allows for pagination in the horizontal direction.
	 * Right now, there are a number of limitations built into the system. Namely:
	 *  - It only supports pagination in the horizontal direction.
	 *  - It supports exactly two pages.
	 */

	var React = __webpack_require__(1);

	var _require = __webpack_require__(513),
	    connect = _require.connect;

	var _require2 = __webpack_require__(489),
	    StyleSheet = _require2.StyleSheet;

	var _require3 = __webpack_require__(487),
	    View = _require3.View;

	var _require4 = __webpack_require__(563),
	    row = _require4.row;

	var _require5 = __webpack_require__(611),
	    childrenPropType = _require5.childrenPropType;

	var _require6 = __webpack_require__(564),
	    innerBorderColor = _require6.innerBorderColor,
	    innerBorderStyle = _require6.innerBorderStyle,
	    innerBorderWidthPx = _require6.innerBorderWidthPx;

	var ViewPager = function (_React$Component) {
	    _inherits(ViewPager, _React$Component);

	    function ViewPager() {
	        var _ref;

	        var _temp, _this, _ret;

	        _classCallCheck(this, ViewPager);

	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }

	        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ViewPager.__proto__ || Object.getPrototypeOf(ViewPager)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
	            animationDurationMs: 0
	        }, _temp), _possibleConstructorReturn(_this, _ret);
	    }

	    _createClass(ViewPager, [{
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(newProps) {
	            // Compute the appropriate animation length, if the pager should
	            // animate to its next position.
	            var animationDurationMs = void 0;
	            if (newProps.animateToPosition) {
	                var finalTranslateX = newProps.translateX;
	                var prevTranslateX = this.props.translateX;

	                // We animate at a rate of 1 pixel per millisecond, and thus we can
	                // use the displacement as the animation duration.
	                animationDurationMs = Math.abs(finalTranslateX - prevTranslateX);
	            } else {
	                animationDurationMs = 0;
	            }
	            this.setState({
	                animationDurationMs: animationDurationMs
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _props = this.props,
	                children = _props.children,
	                pageWidthPx = _props.pageWidthPx,
	                translateX = _props.translateX;
	            var animationDurationMs = this.state.animationDurationMs;


	            var pagerStyle = [row, styles.twoPagePager];

	            var transform = {
	                msTransform: 'translate3d(' + translateX + 'px, 0, 0)',
	                WebkitTransform: 'translate3d(' + translateX + 'px, 0, 0)',
	                transform: 'translate3d(' + translateX + 'px, 0, 0)'
	            };
	            var animate = animationDurationMs ? {
	                msTransitionProperty: 'transform',
	                WebkitTransitionProperty: 'transform',
	                transitionProperty: 'transform',
	                msTransitionDuration: animationDurationMs + 'ms',
	                WebkitTransitionDuration: animationDurationMs + 'ms',
	                transitionDuration: animationDurationMs + 'ms',
	                msTransitionTimingFunction: 'ease-out',
	                WebkitTransitionTimingFunction: 'ease-out',
	                transitionTimingFunction: 'ease-out'
	            } : {};
	            var dynamicPagerStyle = _extends({}, transform, animate);

	            var dynamicPageStyle = {
	                width: pageWidthPx
	            };

	            return React.createElement(
	                View,
	                { style: pagerStyle, dynamicStyle: dynamicPagerStyle },
	                React.createElement(
	                    View,
	                    { dynamicStyle: dynamicPageStyle },
	                    children[0]
	                ),
	                React.createElement(
	                    View,
	                    { style: styles.rightPage, dynamicStyle: dynamicPageStyle },
	                    children[1]
	                )
	            );
	        }
	    }]);

	    return ViewPager;
	}(React.Component);

	ViewPager.propTypes = {
	    // Whether the page should animate to its next specified position.
	    animateToPosition: React.PropTypes.bool,
	    children: childrenPropType,
	    pageWidthPx: React.PropTypes.number.isRequired,
	    translateX: React.PropTypes.number.isRequired
	};


	var styles = StyleSheet.create({
	    twoPagePager: {
	        alignSelf: 'flex-start',
	        // Note: By default, <View> sets a `maxWidth` of 100% to fix some
	        // Flexbox bugs. We have to override it to accommodate for our two
	        // pages. The exact value here isn't super important, as long as it's
	        // large enough to accommodate for two pages (so, 200%) and some
	        // separators.
	        maxWidth: '250%'
	    },

	    rightPage: {
	        borderLeft: innerBorderWidthPx + 'px ' + innerBorderStyle + ' ' + ('' + innerBorderColor),
	        boxSizing: 'content-box'
	    }
	});

	var mapStateToProps = function mapStateToProps(state) {
	    var _state$pager = state.pager,
	        animateToPosition = _state$pager.animateToPosition,
	        currentPage = _state$pager.currentPage,
	        dx = _state$pager.dx,
	        pageWidthPx = _state$pager.pageWidthPx;

	    return {
	        animateToPosition: animateToPosition,
	        pageWidthPx: pageWidthPx,
	        translateX: -currentPage * (pageWidthPx + innerBorderWidthPx) + dx
	    };
	};

	module.exports = connect(mapStateToProps)(ViewPager);

/***/ },
/* 629 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * A component that renders a view pager indicator, with a circular icon for
	 * each page.
	 */

	var React = __webpack_require__(1);

	var _require = __webpack_require__(489),
	    StyleSheet = _require.StyleSheet;

	var _require2 = __webpack_require__(487),
	    View = _require2.View;

	var _require3 = __webpack_require__(564),
	    pageIndicatorHeightPx = _require3.pageIndicatorHeightPx,
	    gray68 = _require3.gray68,
	    gray85 = _require3.gray85;

	var PagerIcon = function (_React$Component) {
	    _inherits(PagerIcon, _React$Component);

	    function PagerIcon() {
	        _classCallCheck(this, PagerIcon);

	        return _possibleConstructorReturn(this, (PagerIcon.__proto__ || Object.getPrototypeOf(PagerIcon)).apply(this, arguments));
	    }

	    _createClass(PagerIcon, [{
	        key: 'render',
	        value: function render() {
	            var _props = this.props,
	                active = _props.active,
	                radiusPx = _props.radiusPx;


	            var fillColor = active ? gray68 : gray85;

	            return React.createElement(
	                'svg',
	                { width: 2 * radiusPx, height: 2 * radiusPx },
	                React.createElement('circle', {
	                    cx: radiusPx,
	                    cy: radiusPx,
	                    r: radiusPx,
	                    fill: fillColor
	                })
	            );
	        }
	    }]);

	    return PagerIcon;
	}(React.Component);

	PagerIcon.propTypes = {
	    active: React.PropTypes.bool,
	    radiusPx: React.PropTypes.number
	};
	PagerIcon.defaultProps = {
	    active: false,
	    radiusPx: 4
	};

	var PagerIndicator = function (_React$Component2) {
	    _inherits(PagerIndicator, _React$Component2);

	    function PagerIndicator() {
	        _classCallCheck(this, PagerIndicator);

	        return _possibleConstructorReturn(this, (PagerIndicator.__proto__ || Object.getPrototypeOf(PagerIndicator)).apply(this, arguments));
	    }

	    _createClass(PagerIndicator, [{
	        key: 'render',
	        value: function render() {
	            var _props2 = this.props,
	                currentPage = _props2.currentPage,
	                numPages = _props2.numPages;


	            var pagerIconRadiusPx = 4;

	            // Collect the various indicator circles.
	            var indicators = [];
	            for (var i = 0; i < numPages; i++) {
	                indicators.push(React.createElement(PagerIcon, {
	                    key: i,
	                    active: i === currentPage,
	                    radiusPx: pagerIconRadiusPx
	                }));
	            }

	            // Size the box that contains the icons to accommodate for proper
	            // spacing, and let Flexbox take care of the details.
	            var totalIconWidthPx = 2 * pagerIconRadiusPx * numPages;
	            var totalSpacingWidthPx = 2 * pagerIconRadiusPx * (numPages - 1);
	            var iconStripSize = {
	                width: totalIconWidthPx + totalSpacingWidthPx
	            };

	            return React.createElement(
	                View,
	                { style: styles.indicatorStrip },
	                React.createElement(
	                    View,
	                    { style: styles.iconStrip, dynamicStyle: iconStripSize },
	                    indicators
	                )
	            );
	        }
	    }]);

	    return PagerIndicator;
	}(React.Component);

	PagerIndicator.propTypes = {
	    currentPage: React.PropTypes.number.isRequired,
	    numPages: React.PropTypes.number.isRequired
	};


	var styles = StyleSheet.create({
	    indicatorStrip: {
	        backgroundColor: '#F0F1F2',
	        flexDirection: 'row',
	        justifyContent: 'center',
	        alignItems: 'center',
	        height: pageIndicatorHeightPx
	    },
	    iconStrip: {
	        flexDirection: 'row',
	        justifyContent: 'space-between'
	    }
	});

	module.exports = PagerIndicator;

/***/ },
/* 630 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * A keypad button that displays an arbitrary number of symbols, with no
	 * 'default' symbol.
	 */

	var React = __webpack_require__(1);

	var EmptyKeypadButton = __webpack_require__(631);
	var TouchableKeypadButton = __webpack_require__(621);

	var Keys = __webpack_require__(613);
	var KeyConfigs = __webpack_require__(612);

	var _require = __webpack_require__(610),
	    KeyTypes = _require.KeyTypes;

	var _require2 = __webpack_require__(611),
	    keyIdPropType = _require2.keyIdPropType;

	var ManyKeypadButton = function (_React$Component) {
	    _inherits(ManyKeypadButton, _React$Component);

	    function ManyKeypadButton() {
	        _classCallCheck(this, ManyKeypadButton);

	        return _possibleConstructorReturn(this, (ManyKeypadButton.__proto__ || Object.getPrototypeOf(ManyKeypadButton)).apply(this, arguments));
	    }

	    _createClass(ManyKeypadButton, [{
	        key: 'render',
	        value: function render() {
	            var _props = this.props,
	                keys = _props.keys,
	                rest = _objectWithoutProperties(_props, ['keys']);

	            // If we have no extra symbols, render an empty button. If we have just
	            // one, render a standard button. Otherwise, capture them all in a
	            // single button.


	            if (keys.length === 0) {
	                return React.createElement(EmptyKeypadButton, rest);
	            } else if (keys.length === 1) {
	                var keyConfig = KeyConfigs[keys[0]];
	                return React.createElement(TouchableKeypadButton, _extends({ keyConfig: keyConfig }, rest));
	            } else {
	                var _keyConfig = {
	                    id: Keys.MANY,
	                    type: KeyTypes.MANY,
	                    childKeyIds: keys
	                };
	                return React.createElement(TouchableKeypadButton, _extends({ keyConfig: _keyConfig }, rest));
	            }
	        }
	    }]);

	    return ManyKeypadButton;
	}(React.Component);

	ManyKeypadButton.propTypes = {
	    keys: React.PropTypes.arrayOf(keyIdPropType).isRequired
	};


	module.exports = ManyKeypadButton;

/***/ },
/* 631 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * A keypad button containing no symbols and triggering no actions on click.
	 */

	var React = __webpack_require__(1);

	var _require = __webpack_require__(513),
	    connect = _require.connect;

	var GestureManager = __webpack_require__(622);
	var KeyConfigs = __webpack_require__(612);
	var KeypadButton = __webpack_require__(560);

	var EmptyKeypadButton = function (_React$Component) {
	    _inherits(EmptyKeypadButton, _React$Component);

	    function EmptyKeypadButton() {
	        _classCallCheck(this, EmptyKeypadButton);

	        return _possibleConstructorReturn(this, (EmptyKeypadButton.__proto__ || Object.getPrototypeOf(EmptyKeypadButton)).apply(this, arguments));
	    }

	    _createClass(EmptyKeypadButton, [{
	        key: 'render',
	        value: function render() {
	            var _props = this.props,
	                gestureManager = _props.gestureManager,
	                rest = _objectWithoutProperties(_props, ['gestureManager']);

	            // Register touch events on the button, but don't register its DOM node
	            // or compute focus state or anything like that. We want the gesture
	            // manager to know about touch events that start on empty buttons, but
	            // we don't need it to know about their DOM nodes, as it doesn't need
	            // to focus them or trigger presses.


	            return React.createElement(KeypadButton, _extends({
	                onTouchStart: function onTouchStart(evt) {
	                    return gestureManager.onTouchStart(evt);
	                },
	                onTouchEnd: function onTouchEnd(evt) {
	                    return gestureManager.onTouchEnd(evt);
	                },
	                onTouchMove: function onTouchMove(evt) {
	                    return gestureManager.onTouchMove(evt);
	                },
	                onTouchCancel: function onTouchCancel(evt) {
	                    return gestureManager.onTouchCancel(evt);
	                }
	            }, KeyConfigs.NOOP, rest));
	        }
	    }]);

	    return EmptyKeypadButton;
	}(React.Component);

	EmptyKeypadButton.propTypes = {
	    gestureManager: React.PropTypes.instanceOf(GestureManager)
	};


	var mapStateToProps = function mapStateToProps(state) {
	    var gestures = state.gestures;

	    return {
	        gestureManager: gestures.gestureManager
	    };
	};

	module.exports = connect(mapStateToProps)(EmptyKeypadButton);

/***/ },
/* 632 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * A component that renders a navigation pad, which consists of an arrow for
	 * each possible direction.
	 */
	var React = __webpack_require__(1);

	var _require = __webpack_require__(489),
	    StyleSheet = _require.StyleSheet;

	var _require2 = __webpack_require__(487),
	    View = _require2.View;

	var TouchableKeypadButton = __webpack_require__(621);

	var _require3 = __webpack_require__(563),
	    row = _require3.row,
	    column = _require3.column,
	    centered = _require3.centered,
	    stretch = _require3.stretch,
	    roundedTopLeft = _require3.roundedTopLeft;

	var _require4 = __webpack_require__(564),
	    navigationPadWidthPx = _require4.navigationPadWidthPx,
	    controlGrey = _require4.controlGrey,
	    valueGrey = _require4.valueGrey,
	    gray85 = _require4.gray85;

	var _require5 = __webpack_require__(610),
	    BorderStyles = _require5.BorderStyles;

	var KeyConfigs = __webpack_require__(612);

	var NavigationPad = function (_React$Component) {
	    _inherits(NavigationPad, _React$Component);

	    function NavigationPad() {
	        _classCallCheck(this, NavigationPad);

	        return _possibleConstructorReturn(this, (NavigationPad.__proto__ || Object.getPrototypeOf(NavigationPad)).apply(this, arguments));
	    }

	    _createClass(NavigationPad, [{
	        key: 'render',
	        value: function render() {
	            // TODO(charlie): Disable the navigational arrows depending on the
	            // cursor context.
	            var _props = this.props,
	                roundTopLeft = _props.roundTopLeft,
	                style = _props.style;


	            var containerStyle = [column, centered, styles.container, roundTopLeft && roundedTopLeft].concat(_toConsumableArray(Array.isArray(style) ? style : [style]));

	            return React.createElement(
	                View,
	                { style: containerStyle },
	                React.createElement(
	                    View,
	                    { style: [row, centered] },
	                    React.createElement(TouchableKeypadButton, {
	                        keyConfig: KeyConfigs.UP,
	                        borders: BorderStyles.NONE,
	                        style: [styles.navigationKey, styles.topArrow]
	                    })
	                ),
	                React.createElement(
	                    View,
	                    { style: [row, centered, stretch] },
	                    React.createElement(TouchableKeypadButton, {
	                        keyConfig: KeyConfigs.LEFT,
	                        borders: BorderStyles.NONE,
	                        style: [styles.navigationKey, styles.leftArrow]
	                    }),
	                    React.createElement(View, { style: styles.horizontalSpacer }),
	                    React.createElement(TouchableKeypadButton, {
	                        keyConfig: KeyConfigs.RIGHT,
	                        borders: BorderStyles.NONE,
	                        style: [styles.navigationKey, styles.rightArrow]
	                    })
	                ),
	                React.createElement(
	                    View,
	                    { style: [row, centered] },
	                    React.createElement(TouchableKeypadButton, {
	                        keyConfig: KeyConfigs.DOWN,
	                        borders: BorderStyles.NONE,
	                        style: [styles.navigationKey, styles.bottomArrow]
	                    })
	                )
	            );
	        }
	    }]);

	    return NavigationPad;
	}(React.Component);

	NavigationPad.propTypes = {
	    roundTopLeft: React.PropTypes.bool,
	    style: React.PropTypes.any
	};


	var buttonSizePx = 48;
	var borderRadiusPx = 4;
	var borderWidthPx = 1;

	var styles = StyleSheet.create({
	    container: {
	        backgroundColor: controlGrey,
	        width: navigationPadWidthPx
	    },

	    navigationKey: {
	        borderColor: gray85,
	        backgroundColor: valueGrey,
	        width: buttonSizePx,
	        height: buttonSizePx,

	        // Override the default box-sizing so that our buttons are
	        // `buttonSizePx` exclusive of their borders.
	        boxSizing: 'content-box'
	    },

	    topArrow: {
	        borderTopWidth: borderWidthPx,
	        borderLeftWidth: borderWidthPx,
	        borderRightWidth: borderWidthPx,
	        borderTopLeftRadius: borderRadiusPx,
	        borderTopRightRadius: borderRadiusPx
	    },

	    rightArrow: {
	        borderTopWidth: borderWidthPx,
	        borderRightWidth: borderWidthPx,
	        borderBottomWidth: borderWidthPx,
	        borderTopRightRadius: borderRadiusPx,
	        borderBottomRightRadius: borderRadiusPx
	    },

	    bottomArrow: {
	        borderBottomWidth: borderWidthPx,
	        borderLeftWidth: borderWidthPx,
	        borderRightWidth: borderWidthPx,
	        borderBottomLeftRadius: borderRadiusPx,
	        borderBottomRightRadius: borderRadiusPx
	    },

	    leftArrow: {
	        borderTopWidth: borderWidthPx,
	        borderBottomWidth: borderWidthPx,
	        borderLeftWidth: borderWidthPx,
	        borderTopLeftRadius: borderRadiusPx,
	        borderBottomLeftRadius: borderRadiusPx
	    },

	    horizontalSpacer: {
	        background: valueGrey,
	        // No need to set a height -- the spacer will be stretched by its
	        // parent.
	        width: buttonSizePx
	    }
	});

	module.exports = NavigationPad;

/***/ },
/* 633 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _keypadForType;

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var Redux = __webpack_require__(525);

	var _require = __webpack_require__(564),
	    tabletCutoffPx = _require.tabletCutoffPx;

	var computeLayoutParameters = __webpack_require__(634);

	var _require2 = __webpack_require__(610),
	    DeviceOrientations = _require2.DeviceOrientations,
	    DeviceTypes = _require2.DeviceTypes,
	    EchoAnimationTypes = _require2.EchoAnimationTypes,
	    KeyTypes = _require2.KeyTypes,
	    KeypadTypes = _require2.KeypadTypes,
	    LayoutModes = _require2.LayoutModes;

	var Keys = __webpack_require__(613);
	var KeyConfigs = __webpack_require__(612);
	var CursorContexts = __webpack_require__(615);
	var GestureManager = __webpack_require__(622);
	var VelocityTracker = __webpack_require__(635);

	var FractionKeypad = __webpack_require__(548);
	var ExpressionKeypad = __webpack_require__(626);

	var keypadForType = (_keypadForType = {}, _defineProperty(_keypadForType, KeypadTypes.FRACTION, FractionKeypad), _defineProperty(_keypadForType, KeypadTypes.EXPRESSION, ExpressionKeypad), _keypadForType);

	var createStore = function createStore() {
	    var initialInputState = {
	        keyHandler: null,
	        cursor: {
	            context: CursorContexts.NONE
	        }
	    };

	    var inputReducer = function inputReducer() {
	        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialInputState;
	        var action = arguments[1];

	        switch (action.type) {
	            case 'SetKeyHandler':
	                return _extends({}, state, {
	                    keyHandler: action.keyHandler
	                });

	            case 'PressKey':
	                var keyConfig = KeyConfigs[action.key];
	                if (keyConfig.type !== KeyTypes.KEYPAD_NAVIGATION) {
	                    // This is probably an anti-pattern but it works for the
	                    // case where we don't actually control the state but we
	                    // still want to communicate with the other object
	                    return _extends({}, state, {
	                        cursor: state.keyHandler(keyConfig.id)
	                    });
	                }

	                // TODO(kevinb) get state from MathQuill and store it?
	                return state;

	            case 'SetCursor':
	                return _extends({}, state, {
	                    cursor: action.cursor
	                });

	            default:
	                return state;
	        }
	    };

	    var defaultKeypadType = KeypadTypes.EXPRESSION;

	    var initialKeypadState = {
	        extraKeys: ['x', 'y', Keys.THETA, Keys.PI],
	        keypadType: defaultKeypadType,
	        active: false
	    };

	    var keypadReducer = function keypadReducer() {
	        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialKeypadState;
	        var action = arguments[1];

	        switch (action.type) {
	            case 'DismissKeypad':
	                return _extends({}, state, {
	                    active: false
	                });

	            case 'ActivateKeypad':
	                return _extends({}, state, {
	                    active: true
	                });

	            case 'ConfigureKeypad':
	                return _extends({}, state, {
	                    // Default `extraKeys` to the empty array.
	                    extraKeys: []
	                }, action.configuration);

	            case 'PressKey':
	                var keyConfig = KeyConfigs[action.key];
	                // NOTE(charlie): Our keypad system operates by triggering key
	                // presses with key IDs in a dumb manner, such that the keys
	                // don't know what they can do--instead, the store is
	                // responsible for interpreting key presses and triggering the
	                // right actions when they occur. Hence, we figure off a
	                // dismissal here rather than dispatching a dismiss action in
	                // the first place.
	                if (keyConfig.id === Keys.DISMISS) {
	                    return keypadReducer(state, { type: 'DismissKeypad' });
	                }
	                return state;

	            default:
	                return state;
	        }
	    };

	    // We default to the right-most page. This is done so-as to enforce a
	    // consistent orientation between the view pager layout and the flattened
	    // layout, where our default page appears on the far right.
	    var getDefaultPage = function getDefaultPage(numPages) {
	        return numPages - 1;
	    };

	    var initialPagerState = {
	        animateToPosition: false,
	        currentPage: getDefaultPage(keypadForType[defaultKeypadType].numPages),
	        // The cumulative differential in the horizontal direction for the
	        // current swipe.
	        dx: 0,
	        numPages: keypadForType[defaultKeypadType].numPages,
	        pageWidthPx: 0,
	        velocityTracker: new VelocityTracker()
	    };

	    var pagerReducer = function pagerReducer() {
	        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialPagerState;
	        var action = arguments[1];

	        switch (action.type) {
	            case 'ConfigureKeypad':
	                var keypadType = action.configuration.keypadType;
	                var numPages = keypadForType[keypadType].numPages;

	                return _extends({}, state, {
	                    numPages: numPages,
	                    animateToPosition: false,
	                    currentPage: getDefaultPage(numPages),
	                    dx: 0
	                });

	            case 'SetPageSize':
	                return _extends({}, state, {
	                    pageWidthPx: action.pageWidthPx
	                });

	            case 'PressKey':
	                var keyConfig = KeyConfigs[action.key];

	                // Reset the keypad page if the user performs a math operation.
	                if (keyConfig.type === KeyTypes.VALUE || keyConfig.type === KeyTypes.OPERATOR) {
	                    return pagerReducer(state, { type: 'ResetKeypadPage' });
	                }
	                return state;

	            case 'ResetKeypadPage':
	                return _extends({}, state, {
	                    animateToPosition: true,
	                    // We start at the right-most page.
	                    currentPage: getDefaultPage(state.numPages),
	                    dx: 0
	                });

	            case 'PageKeypadRight':
	                var nextPage = Math.min(state.currentPage + 1, state.numPages - 1);
	                return _extends({}, state, {
	                    animateToPosition: true,
	                    currentPage: nextPage,
	                    dx: 0
	                });

	            case 'PageKeypadLeft':
	                var prevPage = Math.max(state.currentPage - 1, 0);
	                return _extends({}, state, {
	                    animateToPosition: true,
	                    currentPage: prevPage,
	                    dx: 0
	                });

	            case 'OnSwipeChange':
	                state.velocityTracker.push(action.dx);

	                return _extends({}, state, {
	                    animateToPosition: false,
	                    dx: action.dx
	                });

	            case 'OnSwipeEnd':
	                var pageWidthPx = state.pageWidthPx,
	                    velocityTracker = state.velocityTracker;
	                var dx = action.dx;

	                var velocity = velocityTracker.getVelocity();

	                // NOTE(charlie): These will need refinement. The velocity comes
	                // from Framer.
	                var minFlingVelocity = 0.1;
	                var minFlingDistance = 10;

	                var shouldPageRight = dx < -pageWidthPx / 2 || velocity < -minFlingVelocity && dx < -minFlingDistance;

	                var shouldPageLeft = dx > pageWidthPx / 2 || velocity > minFlingVelocity && dx > minFlingDistance;

	                if (shouldPageRight) {
	                    return pagerReducer(state, { type: 'PageKeypadRight' });
	                } else if (shouldPageLeft) {
	                    return pagerReducer(state, { type: 'PageKeypadLeft' });
	                }

	                return _extends({}, state, {
	                    animateToPosition: true,
	                    dx: 0
	                });

	            default:
	                return state;
	        }
	    };

	    var createGestureManager = function createGestureManager(swipeEnabled) {
	        return new GestureManager({
	            swipeEnabled: swipeEnabled
	        }, {
	            onSwipeChange: function onSwipeChange(dx) {
	                store.dispatch({
	                    type: 'OnSwipeChange',
	                    dx: dx
	                });
	            },
	            onSwipeEnd: function onSwipeEnd(dx) {
	                store.dispatch({
	                    type: 'OnSwipeEnd',
	                    dx: dx
	                });
	            },
	            onActiveNodesChanged: function onActiveNodesChanged(activeNodes) {
	                store.dispatch({
	                    type: 'SetActiveNodes',
	                    activeNodes: activeNodes
	                });
	            },
	            onClick: function onClick(key, layoutProps, inPopover) {
	                store.dispatch(_extends({
	                    type: 'PressKey',
	                    key: key
	                }, layoutProps, {
	                    inPopover: inPopover
	                }));
	            }
	        }, [], [Keys.BACKSPACE, Keys.UP, Keys.RIGHT, Keys.DOWN, Keys.LEFT]);
	    };

	    var initialGestureState = {
	        popover: null,
	        focus: null,
	        gestureManager: createGestureManager(keypadForType[defaultKeypadType].numPages > 1)
	    };

	    var gestureReducer = function gestureReducer() {
	        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialGestureState;
	        var action = arguments[1];

	        switch (action.type) {
	            case 'DismissKeypad':
	                // NOTE(charlie): In the past, we enforced the "gesture manager
	                // will not receive any events when the keypad is hidden"
	                // assumption by assuming that the keypad would be hidden when
	                // dismissed and, as such, that none of its managed DOM nodes
	                // would be able to receive touch events. However, on mobile
	                // Safari, we're seeing that some of the keys receive touch
	                // events even when off-screen, inexplicably. So, to guard
	                // against that bug and make the contract explicit, we enable
	                // and disable event tracking on activation and dismissal.
	                state.gestureManager.disableEventTracking();
	                return state;

	            case 'ActivateKeypad':
	                state.gestureManager.enableEventTracking();
	                return state;

	            case 'SetActiveNodes':
	                return _extends({}, state, action.activeNodes);

	            case 'ConfigureKeypad':
	                var keypadType = action.configuration.keypadType;
	                var numPages = keypadForType[keypadType].numPages;

	                var swipeEnabled = numPages > 1;
	                return {
	                    popover: null,
	                    focus: null,
	                    gestureManager: createGestureManager(swipeEnabled)
	                };

	            default:
	                return state;
	        }
	    };

	    // Used to generate unique animation IDs for the echo animations. The actual
	    // values are irrelevant as long as they are unique.
	    var _lastAnimationId = 0;

	    var initialEchoState = {
	        echoes: []
	    };

	    var echoReducer = function echoReducer() {
	        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialEchoState;
	        var action = arguments[1];

	        switch (action.type) {
	            case 'PressKey':
	                var keyConfig = KeyConfigs[action.key];

	                // Add in the echo animation if the user performs a math
	                // operation.
	                if (keyConfig.type === KeyTypes.VALUE || keyConfig.type === KeyTypes.OPERATOR) {
	                    return _extends({}, state, {
	                        echoes: [].concat(_toConsumableArray(state.echoes), [{
	                            animationId: "" + _lastAnimationId++,
	                            animationType: action.inPopover ? EchoAnimationTypes.LONG_FADE_ONLY : EchoAnimationTypes.FADE_ONLY,
	                            borders: action.borders,
	                            id: keyConfig.id,
	                            initialBounds: action.initialBounds
	                        }])
	                    });
	                }
	                return state;

	            case 'RemoveEcho':
	                var remainingEchoes = state.echoes.filter(function (echo) {
	                    return echo.animationId !== action.animationId;
	                });
	                return _extends({}, state, {
	                    echoes: remainingEchoes
	                });

	            default:
	                return state;
	        }
	    };

	    var initialLayoutState = {
	        gridDimensions: {
	            numRows: keypadForType[defaultKeypadType].rows,
	            numColumns: keypadForType[defaultKeypadType].columns,
	            numMaxVisibleRows: keypadForType[defaultKeypadType].maxVisibleRows,
	            numPages: keypadForType[defaultKeypadType].numPages
	        },
	        buttonDimensions: {
	            widthPx: 48,
	            heightPx: 48
	        },
	        pageDimensions: {
	            pageWidthPx: 0,
	            pageHeightPx: 0
	        },
	        layoutMode: LayoutModes.FULLSCREEN,
	        paginationEnabled: false,
	        navigationPadEnabled: false
	    };

	    /**
	     * Compute the additional layout state based on the provided page and grid
	     * dimensions.
	     */
	    var layoutParametersForDimensions = function layoutParametersForDimensions(pageDimensions, gridDimensions) {
	        var pageWidthPx = pageDimensions.pageWidthPx,
	            pageHeightPx = pageDimensions.pageHeightPx;

	        // Determine the device type and orientation.

	        var deviceOrientation = pageWidthPx > pageHeightPx ? DeviceOrientations.LANDSCAPE : DeviceOrientations.PORTRAIT;
	        var deviceType = Math.min(pageWidthPx, pageHeightPx) > tabletCutoffPx ? DeviceTypes.TABLET : DeviceTypes.PHONE;

	        // Using that information, make some decisions (or assumptions)
	        // about the resulting layout.
	        var navigationPadEnabled = deviceType === DeviceTypes.TABLET;
	        var paginationEnabled = deviceType === DeviceTypes.PHONE && deviceOrientation === DeviceOrientations.PORTRAIT;

	        var deviceInfo = { deviceOrientation: deviceOrientation, deviceType: deviceType };
	        var layoutOptions = {
	            navigationPadEnabled: navigationPadEnabled,
	            paginationEnabled: paginationEnabled,
	            // HACK(charlie): It's not great that we're making assumptions about
	            // the toolbar (which is rendered by webapp, and should always be
	            // visible and anchored to the bottom of the page for phone and
	            // tablet exercises). But this is primarily a heuristic (the goal is
	            // to preserve a 'good' amount of space between the top of the
	            // keypad and the top of the page) so we afford to have some margin
	            // of error.
	            toolbarEnabled: true
	        };

	        return _extends({}, computeLayoutParameters(gridDimensions, pageDimensions, deviceInfo, layoutOptions), {
	            // Pass along some of the layout information, so that other
	            // components in the heirarchy can adapt appropriately.
	            navigationPadEnabled: navigationPadEnabled,
	            paginationEnabled: paginationEnabled
	        });
	    };

	    var layoutReducer = function layoutReducer() {
	        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialLayoutState;
	        var action = arguments[1];

	        switch (action.type) {
	            case 'ConfigureKeypad':
	                var keypadType = action.configuration.keypadType;

	                var gridDimensions = {
	                    numRows: keypadForType[keypadType].rows,
	                    numColumns: keypadForType[keypadType].columns,
	                    numMaxVisibleRows: keypadForType[keypadType].maxVisibleRows,
	                    numPages: keypadForType[keypadType].numPages
	                };

	                return _extends({}, state, layoutParametersForDimensions(state.pageDimensions, gridDimensions), {
	                    gridDimensions: gridDimensions
	                });

	            case 'SetPageSize':
	                var pageWidthPx = action.pageWidthPx,
	                    pageHeightPx = action.pageHeightPx;

	                var pageDimensions = { pageWidthPx: pageWidthPx, pageHeightPx: pageHeightPx };

	                return _extends({}, state, layoutParametersForDimensions(pageDimensions, state.gridDimensions), {
	                    pageDimensions: pageDimensions
	                });

	            default:
	                return state;
	        }
	    };

	    var reducer = Redux.combineReducers({
	        input: inputReducer,
	        keypad: keypadReducer,
	        pager: pagerReducer,
	        gestures: gestureReducer,
	        echoes: echoReducer,
	        layout: layoutReducer
	    });

	    // TODO(charlie): This non-inlined return is necessary so as to allow the
	    // gesture manager to dispatch actions on the store in its callbacks. We
	    // should come up with a better pattern to remove the two-way dependency.
	    var store = Redux.createStore(reducer);

	    return store;
	};

	module.exports = createStore;

/***/ },
/* 634 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * An algorithm for computing the appropriate layout parameters for the keypad,
	 * including the size of the buttons and whether or not to render fullscreen,
	 * taking into account a number of factors including the size of the screen, the
	 * orientation of the screen, the presence of browser chrome, the presence of
	 * other exercise-related chrome, the size of the input box, the parameters that
	 * define the keypad (i.e., the number of rows, columns, and pages), and so
	 * forth.
	 *
	 * The computations herein make some strong assumptions about the sizes of
	 * various other elements and the situations under which they will be visible
	 * (e.g., browser chrome). However, this is just a heuristic--it's not crucial
	 * that our buttons are sized in a pixel-perfect manner, but rather, that we
	 * make a balanced use of space.
	 *
	 * Note that one goal of the algorithm is to avoid resizing the keypad in the
	 * face of dynamic browser chrome. In order to avoid that awkwardness, we tend
	 * to be conservative in our measurements and make things smaller than they
	 * might need to be.
	 */

	var _require = __webpack_require__(610),
	    DeviceTypes = _require.DeviceTypes,
	    DeviceOrientations = _require.DeviceOrientations,
	    LayoutModes = _require.LayoutModes;

	var _require2 = __webpack_require__(564),
	    pageIndicatorHeightPx = _require2.pageIndicatorHeightPx,
	    toolbarHeightPx = _require2.toolbarHeightPx,
	    navigationPadWidthPx = _require2.navigationPadWidthPx,
	    innerBorderWidthPx = _require2.innerBorderWidthPx;

	var minButtonHeight = 48;
	var maxButtonSize = 64;
	var minSpaceAboveKeypad = 32;

	// These values are taken from an iPhone 5, but should be consistent with the
	// iPhone 4 as well. Regardless, these are meant to be representative of the
	// possible types of browser chrome that could appear in various context, rather
	// than pixel-perfect for every device.
	var safariNavBarWhenShrunk = 44;
	var safariNavBarWhenExpanded = 64;
	var safariToolbar = 44;

	// In mobile Safari, the browser chrome is completely hidden in landscape,
	// though a shrunken navbar and full-sized toolbar on scroll. In portrait, the
	// shrunken navbar is always visible, but expands on scroll (and the toolbar
	// appears as well).
	var maxLandscapeBrowserChrome = safariNavBarWhenShrunk + safariToolbar;
	var maxPortraitBrowserChrome = safariToolbar + (safariNavBarWhenExpanded - safariNavBarWhenShrunk);

	// This represents the 'worst case' aspect ratio that we care about (for
	// portrait layouts). It's taken from the iPhone 4. The height is computed by
	// taking the height of the device and removing the persistent, shrunken navbar.
	// (We don't need to account for the expanded navbar, since we include the
	// difference when reserving space above the keypad.)
	var worstCaseAspectRatio = 320 / (480 - safariNavBarWhenShrunk);

	var computeLayoutParameters = function computeLayoutParameters(_ref, _ref2, _ref3, _ref4) {
	    var numColumns = _ref.numColumns,
	        numMaxVisibleRows = _ref.numMaxVisibleRows,
	        numPages = _ref.numPages;
	    var pageWidthPx = _ref2.pageWidthPx,
	        pageHeightPx = _ref2.pageHeightPx;
	    var deviceOrientation = _ref3.deviceOrientation,
	        deviceType = _ref3.deviceType;
	    var navigationPadEnabled = _ref4.navigationPadEnabled,
	        paginationEnabled = _ref4.paginationEnabled,
	        toolbarEnabled = _ref4.toolbarEnabled;

	    // First, compute some values that will be used in multiple computations.
	    var effectiveNumColumns = paginationEnabled ? numColumns : numColumns * numPages;

	    // Then, compute the button dimensions based on the provided parameters.
	    var buttonDimensions = void 0;
	    if (deviceType === DeviceTypes.PHONE) {
	        var isLandscape = deviceOrientation === DeviceOrientations.LANDSCAPE;

	        // In many cases, the browser chrome will already have been factored
	        // into `pageHeightPx`. But we have no way of knowing if that's
	        // the case or not. As such, we take a conservative approach and
	        // assume that the chrome is _never_ included in `pageHeightPx`.
	        var browserChromeHeight = isLandscape ? maxLandscapeBrowserChrome : maxPortraitBrowserChrome;

	        // Count up all the space that we need to reserve on the page.
	        // Namely, we need to account for:
	        //  1. Space between the keypad and the top of the page.
	        //  2. The presence of the exercise toolbar.
	        //  3. The presence of the view pager indicator.
	        //  4. Any browser chrome that may appear later.
	        var reservedSpace = minSpaceAboveKeypad + browserChromeHeight + (toolbarEnabled ? toolbarHeightPx : 0) + (paginationEnabled ? pageIndicatorHeightPx : 0);

	        // Next, compute the effective width and height. We can use the page
	        // width as the effective width. For the height, though, we take
	        // another conservative measure when in portrait by assuming that
	        // the device has the worst possible aspect ratio. In other words,
	        // we ignore the device height in portrait and assume the worst.
	        // This prevents the keypad from changing size when browser chrome
	        // appears and disappears.
	        var effectiveWidth = pageWidthPx;
	        var effectiveHeight = isLandscape ? pageHeightPx : pageWidthPx / worstCaseAspectRatio;
	        var maxKeypadHeight = effectiveHeight - reservedSpace;

	        // Finally, compute the button height and width. In computing the
	        // height, accommodate for the maximum number of rows that will ever be
	        // visible (since the toggling of popovers can increase the number of
	        // visible rows).
	        var buttonHeightPx = Math.max(Math.min(maxKeypadHeight / numMaxVisibleRows, maxButtonSize), minButtonHeight);

	        var buttonWidthPx = void 0;
	        if (numPages > 1) {
	            var _effectiveNumColumns = paginationEnabled ? numColumns : numColumns * numPages;
	            buttonWidthPx = effectiveWidth / _effectiveNumColumns;
	        } else {
	            buttonWidthPx = isLandscape ? maxButtonSize : effectiveWidth / numColumns;
	        }

	        buttonDimensions = {
	            widthPx: buttonWidthPx,
	            heightPx: buttonHeightPx
	        };
	    } else if (deviceType === DeviceTypes.TABLET) {
	        buttonDimensions = {
	            widthPx: maxButtonSize,
	            heightPx: maxButtonSize
	        };
	    } else {
	        throw new Error("Invalid device type: " + deviceType);
	    }

	    // Finally, determine whether the keypad should be rendered in the
	    // fullscreen layout by determining its resultant width.
	    var numSeparators = (navigationPadEnabled ? 1 : 0) + (!paginationEnabled ? numPages - 1 : 0);
	    var keypadWidth = effectiveNumColumns * buttonDimensions.widthPx + (navigationPadEnabled ? navigationPadWidthPx : 0) + numSeparators * innerBorderWidthPx;
	    return {
	        buttonDimensions: buttonDimensions,
	        layoutMode: keypadWidth >= pageWidthPx ? LayoutModes.FULLSCREEN : LayoutModes.COMPACT
	    };
	};

	module.exports = computeLayoutParameters;

/***/ },
/* 635 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * A system for tracking gesture velocity in a single dimension.
	 *
	 * Velocity is computed by smoothing linearly over the gestures that have
	 * occurred in the last 100 milliseconds.
	 */

	var now = __webpack_require__(636);

	var VelocityTracker = function () {
	    function VelocityTracker(options) {
	        _classCallCheck(this, VelocityTracker);

	        this.options = _extends({
	            velocityTimeout: 100
	        }, options);
	        this._events = [];
	    }

	    /**
	     * Pushes an event with the given displacement onto the event buffer,
	     * associating it with a timestamp. Note that, as this method computes the
	     * timestamp for the event at calltime, it should be called immediately
	     * after the event occurs.
	     *
	     * @param {number} x - the cumulative displacement of the event
	     */


	    _createClass(VelocityTracker, [{
	        key: 'push',
	        value: function push(x) {
	            this._events.push({
	                x: x,
	                t: now()
	            });
	        }

	        /**
	         * Compute the velocity with respect to the events that have been tracked
	         * by the system. Velocity is computed by smoothing linearly over recent
	         * displacement values.
	         *
	         * Note that, for performance reasons, a call to `getVelocity` will clear
	         * out the event buffer. As such, repeated calls will not return the same
	         * value (in particular, a second call in quick succession will return 0).
	         *
	         * @returns {number} the velocity associated with the tracker
	         */

	    }, {
	        key: 'getVelocity',
	        value: function getVelocity() {
	            var events = this._getEvents();

	            if (events.length < 2) {
	                return 0;
	            } else {
	                var current = events[events.length - 1];
	                var first = events[0];
	                var dt = current.t - first.t;
	                return (current.x - first.x) / dt;
	            }
	        }

	        /**
	         * Filter the tracked events to exclude any events that occurred too far in
	         * the past, and reset the event buffer.
	         *
	         * @returns {number[]} an array of displacements corresponding to events
	         *                     that occurred in the past `velocityTimeout`
	         *                     milliseconds
	         */

	    }, {
	        key: '_getEvents',
	        value: function _getEvents() {
	            var threshold = now() - this.options.velocityTimeout;
	            var recentEvents = this._events.filter(function (event) {
	                return event.t > threshold;
	            });
	            this._events = [];
	            return recentEvents;
	        }
	    }]);

	    return VelocityTracker;
	}();

	module.exports = VelocityTracker;

/***/ },
/* 636 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {// Generated by CoffeeScript 1.7.1
	(function() {
	  var getNanoSeconds, hrtime, loadTime;

	  if ((typeof performance !== "undefined" && performance !== null) && performance.now) {
	    module.exports = function() {
	      return performance.now();
	    };
	  } else if ((typeof process !== "undefined" && process !== null) && process.hrtime) {
	    module.exports = function() {
	      return (getNanoSeconds() - loadTime) / 1e6;
	    };
	    hrtime = process.hrtime;
	    getNanoSeconds = function() {
	      var hr;
	      hr = hrtime();
	      return hr[0] * 1e9 + hr[1];
	    };
	    loadTime = getNanoSeconds();
	  } else if (Date.now) {
	    module.exports = function() {
	      return Date.now() - loadTime;
	    };
	    loadTime = Date.now();
	  } else {
	    module.exports = function() {
	      return new Date().getTime() - loadTime;
	    };
	    loadTime = new Date().getTime();
	  }

	}).call(this);

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(111)))

/***/ },
/* 637 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/* globals i18n */

	var React = __webpack_require__(1);
	var ReactDOM = __webpack_require__(550);

	var _require = __webpack_require__(489),
	    StyleSheet = _require.StyleSheet;

	var _require2 = __webpack_require__(487),
	    View = _require2.View;

	var CursorHandle = __webpack_require__(638);
	var MathWrapper = __webpack_require__(639);
	var scrollIntoView = __webpack_require__(641);
	var DragListener = __webpack_require__(642);

	var _require3 = __webpack_require__(564),
	    cursorHandleRadiusPx = _require3.cursorHandleRadiusPx,
	    cursorHandleDistanceMultiplier = _require3.cursorHandleDistanceMultiplier,
	    gray76 = _require3.gray76;

	var _require4 = __webpack_require__(611),
	    keypadElementPropType = _require4.keypadElementPropType;

	var _require5 = __webpack_require__(564),
	    brightGreen = _require5.brightGreen,
	    gray17 = _require5.gray17;

	var constrainingFrictionFactor = 0.8;

	var MathInput = function (_React$Component) {
	    _inherits(MathInput, _React$Component);

	    function MathInput() {
	        var _ref;

	        var _temp, _this, _ret;

	        _classCallCheck(this, MathInput);

	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }

	        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = MathInput.__proto__ || Object.getPrototypeOf(MathInput)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
	            focused: false,
	            handle: {
	                animateIntoPosition: false,
	                visible: false,
	                x: 0,
	                y: 0
	            }
	        }, _this._clearKeypadBoundsCache = function (keypadNode) {
	            _this._keypadBounds = null;
	        }, _this._cacheKeypadBounds = function (keypadNode) {
	            _this._keypadBounds = keypadNode.getBoundingClientRect();
	        }, _this._getKeypadBounds = function () {
	            if (!_this._keypadBounds) {
	                var node = ReactDOM.findDOMNode(_this.props.keypadElement);
	                _this._cacheKeypadBounds(node);
	            }
	            return _this._keypadBounds;
	        }, _this._updateCursorHandle = function (animateIntoPosition) {
	            var containerBounds = _this._container.getBoundingClientRect();
	            var cursor = _this._container.querySelector('.mq-cursor');
	            var cursorBounds = cursor.getBoundingClientRect();

	            var cursorWidth = cursorBounds.width;
	            var gapBelowCursor = 2;

	            _this.setState({
	                handle: {
	                    visible: true,
	                    animateIntoPosition: animateIntoPosition,
	                    // We subtract containerBounds' left/top to correct for the
	                    // position of the container within the page.
	                    x: cursorBounds.left + cursorWidth / 2 - containerBounds.left,
	                    y: cursorBounds.bottom + gapBelowCursor - containerBounds.top
	                }
	            });
	        }, _this._hideCursorHandle = function () {
	            _this.setState({
	                handle: {
	                    visible: false,
	                    x: 0,
	                    y: 0
	                }
	            });
	        }, _this.blur = function () {
	            _this.mathField.blur();
	            _this.props.onBlur && _this.props.onBlur();
	            _this.setState({ focused: false, handle: { visible: false } });
	        }, _this.focus = function () {
	            // Pass this component's handleKey method to the keypad so it can call
	            // it whenever it needs to trigger a keypress action.
	            _this.props.keypadElement.setKeyHandler(function (key) {
	                var cursor = _this.mathField.pressKey(key);

	                // Trigger an `onChange` if the value in the input changed, and hide
	                // the cursor handle whenever the user types a key. If the value
	                // changed as a result of a keypress, we need to be careful not to
	                // call `setState` until after `onChange` has resolved.
	                var hideCursor = function hideCursor() {
	                    _this.setState({
	                        handle: {
	                            visible: false
	                        }
	                    });
	                };
	                var value = _this.mathField.getContent();
	                if (_this.props.value !== value) {
	                    _this.props.onChange(value, hideCursor);
	                } else {
	                    hideCursor();
	                }

	                return cursor;
	            });

	            _this.mathField.focus();
	            _this.props.onFocus && _this.props.onFocus();
	            _this.setState({ focused: true }, function () {
	                // NOTE(charlie): We use `setTimeout` to allow for a layout pass to
	                // occur. Otherwise, the keypad is measured incorrectly. Ideally,
	                // we'd use requestAnimationFrame here, but it's unsupported on
	                // Android Browser 4.3.
	                setTimeout(function () {
	                    if (_this._isMounted) {
	                        // TODO(benkomalo): the keypad is animating at this point,
	                        // so we can't call _cacheKeypadBounds(), even though
	                        // it'd be nice to do so. It should probably be the case
	                        // that the higher level controller tells us when the
	                        // keypad is settled (then scrollIntoView wouldn't have
	                        // to make assumptions about that either).
	                        var maybeKeypadNode = _this.props.keypadElement && ReactDOM.findDOMNode(_this.props.keypadElement);
	                        scrollIntoView(_this._container, maybeKeypadNode);
	                    }
	                });
	            });
	        }, _this._findHitNode = function (containerBounds, x, y, dx, dy) {
	            while (y >= containerBounds.top && y <= containerBounds.bottom) {
	                y += dy;

	                var points = [[x - dx, y], [x, y], [x + dx, y]];

	                var elements = points.map(function (point) {
	                    var _document;

	                    return (_document = document).elementFromPoint.apply(_document, _toConsumableArray(point));
	                })
	                // We exclude the root container itself and any nodes marked
	                // as non-leaf which are fractions, parens, and roots.  The
	                // children of those nodes are included in the list because
	                // those are the items we care about placing the cursor next
	                // to.
	                //
	                // MathQuill's mq-non-leaf is not applied to all non-leaf nodes
	                // so the naming is a bit confusing.  Although fractions are
	                // included, neither mq-numerator nor mq-denominator nodes are
	                // and neither are subscripts or superscripts.
	                .filter(function (element) {
	                    return element && _this._root.contains(element) && (!element.classList.contains('mq-root-block') && !element.classList.contains('mq-non-leaf') || element.classList.contains('mq-empty') || element.classList.contains('mq-hasCursor'));
	                });

	                var hitNode = null;

	                // Contains only DOMNodes without child elements.  These should
	                // contain some amount of text though.
	                var leafElements = [];

	                // Contains only DOMNodes with child elements.
	                var nonLeafElements = [];

	                var max = 0;
	                var counts = {};
	                var elementsById = {};

	                var _iteratorNormalCompletion = true;
	                var _didIteratorError = false;
	                var _iteratorError = undefined;

	                try {
	                    for (var _iterator = elements[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                        var element = _step.value;

	                        var id = element.getAttribute('mathquill-command-id');
	                        if (id != null) {
	                            leafElements.push(element);

	                            counts[id] = (counts[id] || 0) + 1;
	                            elementsById[id] = element;
	                        } else {
	                            nonLeafElements.push(element);
	                        }
	                    }

	                    // When determining which DOMNode to place the cursor beside, we
	                    // prefer leaf nodes.  Hitting a leaf node is a good sign that the
	                    // cursor is really close to some piece of math that has been
	                    // rendered because leaf nodes contain text.  Non-leaf nodes may
	                    // contain a lot of whitespace so the cursor may be further away
	                    // from actual text within the expression.
	                    //
	                    // Since we're doing three hit tests per loop it's possible that
	                    // we hit multiple leaf nodes at the same time.  In this case we
	                    // we prefer the DOMNode with the most hits.
	                    // TODO(kevinb) consider preferring nodes hit by [x, y].
	                } catch (err) {
	                    _didIteratorError = true;
	                    _iteratorError = err;
	                } finally {
	                    try {
	                        if (!_iteratorNormalCompletion && _iterator.return) {
	                            _iterator.return();
	                        }
	                    } finally {
	                        if (_didIteratorError) {
	                            throw _iteratorError;
	                        }
	                    }
	                }

	                var _iteratorNormalCompletion2 = true;
	                var _didIteratorError2 = false;
	                var _iteratorError2 = undefined;

	                try {
	                    for (var _iterator2 = Object.entries(counts)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	                        var _step2$value = _slicedToArray(_step2.value, 2),
	                            _id = _step2$value[0],
	                            count = _step2$value[1];

	                        if (count > max) {
	                            max = count;
	                            hitNode = elementsById[_id];
	                        }
	                    }

	                    // It's possible that two non-leaf nodes are right beside each
	                    // other.  We don't bother counting the number of hits for each,
	                    // b/c this seems like an unlikely situation.  Also, ignoring the
	                    // hit count in the situation should not have serious effects on
	                    // the overall accuracy of the algorithm.
	                } catch (err) {
	                    _didIteratorError2 = true;
	                    _iteratorError2 = err;
	                } finally {
	                    try {
	                        if (!_iteratorNormalCompletion2 && _iterator2.return) {
	                            _iterator2.return();
	                        }
	                    } finally {
	                        if (_didIteratorError2) {
	                            throw _iteratorError2;
	                        }
	                    }
	                }

	                if (hitNode == null && nonLeafElements.length > 0) {
	                    hitNode = nonLeafElements[0];
	                }

	                if (hitNode !== null) {
	                    _this.mathField.setCursorPosition(x, y, hitNode);
	                    return true;
	                }
	            }

	            return false;
	        }, _this._insertCursorAtClosestNode = function (x, y) {
	            var cursor = _this.mathField.getCursor();

	            // Pre-emptively check if the input has any child nodes; if not, the
	            // input is empty, so we throw the cursor at the start.
	            if (!_this._root.hasChildNodes()) {
	                cursor.insAtLeftEnd(_this.mathField.mathField.__controller.root);
	                return;
	            }

	            if (y > _this._containerBounds.bottom) {
	                y = _this._containerBounds.bottom;
	            } else if (y < _this._containerBounds.top) {
	                y = _this._containerBounds.top + 10;
	            }

	            var dy = void 0;

	            // Vertical spacing between hit tests
	            // dy is negative because we're moving upwards.
	            dy = -8;

	            // Horizontal spacing between hit tests
	            // Note: This value depends on the font size.  If the gap is too small
	            // we end up placing the cursor at the end of the expression when we
	            // shouldn't.
	            var dx = 5;

	            if (_this._findHitNode(_this._containerBounds, x, y, dx, dy)) {
	                return;
	            }

	            // If we haven't found anything start from the top.
	            y = _this._containerBounds.top;

	            // dy is positive b/c we're going downwards.
	            dy = 8;

	            if (_this._findHitNode(_this._containerBounds, x, y, dx, dy)) {
	                return;
	            }

	            var firstChildBounds = _this._root.firstChild.getBoundingClientRect();
	            var lastChildBounds = _this._root.lastChild.getBoundingClientRect();

	            var left = firstChildBounds.left;
	            var right = lastChildBounds.right;

	            // We've exhausted all of the options. We're likely either to the right
	            // or left of all of the math, so we place the cursor at the end to
	            // which it's closest.
	            if (Math.abs(x - right) < Math.abs(x - left)) {
	                cursor.insAtRightEnd(_this.mathField.mathField.__controller.root);
	            } else {
	                cursor.insAtLeftEnd(_this.mathField.mathField.__controller.root);
	            }
	            // In that event, we need to update the cursor context ourselves.
	            _this.props.keypadElement && _this.props.keypadElement.setCursor({
	                context: _this.mathField.contextForCursor(cursor)
	            });
	        }, _this.handleTouchStart = function (e) {
	            e.stopPropagation();

	            // Hide the cursor handle on touch start, if the handle itself isn't
	            // handling the touch event.
	            _this._hideCursorHandle();

	            // Cache the container bounds, so as to avoid re-computing. If we don't
	            // have any content, then it's not necessary, since the cursor can't be
	            // moved anyway.
	            if (_this.mathField.getContent() !== "") {
	                _this._containerBounds = _this._container.getBoundingClientRect();

	                // Make the cursor visible and set the handle-less cursor's
	                // location.
	                var touch = e.changedTouches[0];
	                _this._insertCursorAtClosestNode(touch.clientX, touch.clientY);
	            }

	            // Trigger a focus event, if we're not already focused.
	            if (!_this.state.focused) {
	                _this.focus();
	            }
	        }, _this.handleTouchMove = function (e) {
	            e.stopPropagation();

	            // Update the handle-less cursor's location on move, if there's any
	            // content in the box. Note that if the user touched outside the keypad
	            // (e.g., with a different finger) during this touch interaction, we
	            // may have blurred, in which case we should ignore the touch (since
	            // the cursor is no longer visible and the input is no longer
	            // highlighted).
	            if (_this.mathField.getContent() !== "" && _this.state.focused) {
	                var touch = e.changedTouches[0];
	                _this._insertCursorAtClosestNode(touch.clientX, touch.clientY);
	            }
	        }, _this.handleTouchEnd = function (e) {
	            e.stopPropagation();

	            // And on touch-end, reveal the cursor, unless the input is empty. Note
	            // that if the user touched outside the keypad (e.g., with a different
	            // finger) during this touch interaction, we may have blurred, in which
	            // case we should ignore the touch (since the cursor is no longer
	            // visible and the input is no longer highlighted).
	            if (_this.mathField.getContent() !== "" && _this.state.focused) {
	                _this._updateCursorHandle();
	            }
	        }, _this.onCursorHandleTouchStart = function (e) {
	            // NOTE(charlie): The cursor handle is a child of this view, so whenever
	            // it receives a touch event, that event would also typically be bubbled
	            // up to our own handlers. However, we want the cursor to handle its own
	            // touch events, and for this view to only handle touch events that
	            // don't affect the cursor. As such, we `stopPropagation` on any touch
	            // events that are being handled by the cursor, so as to avoid handling
	            // them in our own touch handlers.
	            e.stopPropagation();

	            e.preventDefault();

	            // Cache the container bounds, so as to avoid re-computing.
	            _this._containerBounds = _this._container.getBoundingClientRect();
	        }, _this._constrainToBound = function (value, min, max, friction) {
	            if (value < min) {
	                return min + (value - min) * friction;
	            } else if (value > max) {
	                return max + (value - max) * friction;
	            } else {
	                return value;
	            }
	        }, _this.onCursorHandleTouchMove = function (e) {
	            e.stopPropagation();

	            var x = e.changedTouches[0].clientX;
	            var y = e.changedTouches[0].clientY;

	            var relativeX = x - _this._containerBounds.left;
	            var relativeY = y - 2 * cursorHandleRadiusPx * cursorHandleDistanceMultiplier - _this._containerBounds.top;

	            // We subtract the containerBounds left/top to correct for the
	            // MathInput's position on the page. On top of that, we subtract an
	            // additional 2 x {height of the cursor} so that the bottom of the
	            // cursor tracks the user's finger, to make it visible under their
	            // touch.
	            _this.setState({
	                handle: {
	                    animateIntoPosition: false,
	                    visible: true,
	                    // TODO(charlie): Use clientX and clientY to avoid the need for
	                    // scroll offsets. This likely also means that the cursor
	                    // detection doesn't work when scrolled, since we're not
	                    // offsetting those values.
	                    x: _this._constrainToBound(relativeX, 0, _this._containerBounds.width, constrainingFrictionFactor),
	                    y: _this._constrainToBound(relativeY, 0, _this._containerBounds.height, constrainingFrictionFactor)
	                }
	            });

	            // Use a y-coordinate that's just above where the user is actually
	            // touching because they're dragging the handle which is a little
	            // below where the cursor actually is.
	            var distanceAboveFingerToTrySelecting = 22;
	            var adjustedY = y - distanceAboveFingerToTrySelecting;

	            _this._insertCursorAtClosestNode(x, adjustedY);
	        }, _this.onCursorHandleTouchEnd = function (e) {
	            e.stopPropagation();

	            _this._updateCursorHandle(true);
	        }, _this.onCursorHandleTouchCancel = function (e) {
	            e.stopPropagation();

	            _this._updateCursorHandle(true);
	        }, _temp), _possibleConstructorReturn(_this, _ret);
	    }

	    _createClass(MathInput, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var _this2 = this;

	            this._isMounted = true;

	            this.mathField = new MathWrapper(this._mathContainer, {}, {
	                onCursorMove: function onCursorMove(cursor) {
	                    // TODO(charlie): It's not great that there is so much coupling
	                    // between this keypad and the input behavior. We should wrap
	                    // this `MathInput` component in an intermediary component
	                    // that translates accesses on the keypad into vanilla props,
	                    // to make this input keypad-agnostic.
	                    _this2.props.keypadElement && _this2.props.keypadElement.setCursor(cursor);
	                }
	            });

	            // NOTE(charlie): MathQuill binds this handler to manage its
	            // drag-to-select behavior. For reasons that I can't explain, the event
	            // itself gets triggered even if you tap slightly outside of the
	            // bound container (maybe 5px outside of any boundary). As a result, the
	            // cursor appears when tapping at those locations, even though the input
	            // itself doesn't receive any touch start or mouse down event and, as
	            // such, doesn't focus itself. This makes for a confusing UX, as the
	            // cursor appears, but the keypad does not and the input otherwise
	            // treats itself as unfocused. Thankfully, we don't need this behavior--
	            // we manage all of the cursor interactions ourselves--so we can safely
	            // unbind the handler.
	            this.mathField.mathField.__controller.container.unbind('mousedown.mathquill');

	            // NOTE(charlie): MathQuill uses this method to do some layout in the
	            // case that an input overflows its bounds and must become scrollable.
	            // As it causes layout jank due to jQuery animations of scroll
	            // properties, we disable it unless it is explicitly requested (as it
	            // should be in the case of a fixed-width input).
	            if (!this.props.scrollable) {
	                this.mathField.mathField.__controller.scrollHoriz = function () {};
	            }

	            this.mathField.setContent(this.props.value);

	            this._container = ReactDOM.findDOMNode(this);

	            this._root = this._container.querySelector('.mq-root-block');
	            this._root.style.fontSize = fontSizePt + 'pt';

	            // Record the initial scroll displacement on touch start. This allows
	            // us to detect whether a touch event was a scroll and only blur the
	            // input on non-scrolls--blurring the input on scroll makes for a
	            // frustrating user experience.
	            this.touchStartInitialScroll = null;
	            this.recordTouchStartOutside = function (evt) {
	                if (_this2.state.focused) {
	                    // Only blur if the touch is both outside of the input, and
	                    // above or to the left or right of the keypad (if it has been
	                    // provided). The reasoning for not blurring when touches occur
	                    // below the keypad is that the keypad may be anchored above
	                    // the 'Check answer' bottom bar, in which case, we don't want
	                    // to dismiss the keypad on check.
	                    // TODO(charlie): Inject this logic.
	                    if (!_this2._container.contains(evt.target)) {
	                        var touchDidStartInOrBelowKeypad = false;
	                        if (_this2.props.keypadElement) {
	                            var bounds = _this2._getKeypadBounds();
	                            for (var i = 0; i < evt.changedTouches.length; i++) {
	                                var _ref2 = [evt.changedTouches[i].clientX, evt.changedTouches[i].clientY],
	                                    x = _ref2[0],
	                                    y = _ref2[1];

	                                if (bounds.left <= x && bounds.right >= x && bounds.top <= y && bounds.bottom >= y || bounds.bottom < y) {
	                                    touchDidStartInOrBelowKeypad = true;
	                                    break;
	                                }
	                            }
	                        }

	                        if (!touchDidStartInOrBelowKeypad) {
	                            _this2.didTouchOutside = true;

	                            if (_this2.dragListener) {
	                                _this2.dragListener.detach();
	                            }

	                            _this2.dragListener = new DragListener(function () {
	                                _this2.didScroll = true;
	                                _this2.dragListener.detach();
	                            }, evt);
	                            _this2.dragListener.attach();
	                        }
	                    }
	                }
	            };

	            this.blurOnTouchEndOutside = function (evt) {
	                // If the user didn't scroll, blur the input.
	                // TODO(charlie): Verify that the touch that ended actually started
	                // outside the keypad. Right now, you can touch down on the keypad,
	                // touch elsewhere, release the finger on the keypad, and trigger a
	                // dismissal. This code needs to be generalized to handle
	                // multi-touch.
	                if (_this2.state.focused && _this2.didTouchOutside && !_this2.didScroll) {
	                    _this2.blur();
	                }

	                _this2.didTouchOutside = false;
	                _this2.didScroll = false;

	                if (_this2.dragListener) {
	                    _this2.dragListener.detach();
	                    _this2.removeListeners = null;
	                }
	            };

	            window.addEventListener('touchstart', this.recordTouchStartOutside);
	            window.addEventListener('touchend', this.blurOnTouchEndOutside);
	            window.addEventListener('touchcancel', this.blurOnTouchEndOutside);

	            // HACK(benkomalo): if the window resizes, the keypad bounds can
	            // change. That's a bit peeking into the internals of the keypad
	            // itself, since we know bounds can change only when the viewport
	            // changes, but seems like a rare enough thing to get wrong that it's
	            // not worth wiring up extra things for the technical "purity" of
	            // having the keypad notify of changes to us.
	            window.addEventListener('resize', this._clearKeypadBoundsCache);
	            window.addEventListener('orientationchange', this._clearKeypadBoundsCache);
	        }
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(props) {
	            if (this.props.keypadElement !== props.keypadElement) {
	                this._clearKeypadBoundsCache();
	            }
	        }
	    }, {
	        key: 'componentDidUpdate',
	        value: function componentDidUpdate() {
	            if (this.mathField.getContent() !== this.props.value) {
	                this.mathField.setContent(this.props.value);
	            }
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            this._isMounted = false;

	            window.removeEventListener('touchstart', this.recordTouchStartOutside);
	            window.removeEventListener('touchend', this.blurOnTouchEndOutside);
	            window.removeEventListener('touchcancel', this.blurOnTouchEndOutside);
	            window.removeEventListener('resize', this._clearKeypadBoundsCache());
	            window.removeEventListener('orientationchange', this._clearKeypadBoundsCache());
	        }

	        /** Gets and cache they bounds of the keypadElement */


	        /**
	         * Tries to determine which DOM node to place the cursor next to based on
	         * where the user drags the cursor handle.  If it finds a node it will
	         * place the cursor next to it, update the handle to be under the cursor,
	         * and return true.  If it doesn't find a node, it returns false.
	         *
	         * It searches for nodes by doing it tests at the following points:
	         *
	         *   (x - dx, y), (x, y), (x + dx, y)
	         *
	         * If it doesn't find any nodes from the rendered math it will update y
	         * by adding dy.
	         *
	         * The algorithm ends its search when y goes outside the bounds of
	         * containerBounds.
	         *
	         * @param {ClientRect} containerBounds - bounds of the container node
	         * @param {number} x - the initial x coordinate in the viewport
	         * @param {number} y - the initial y coordinate in the viewport
	         * @param {number} dx - horizontal spacing between elementFromPoint calls
	         * @param {number} dy - vertical spacing between elementFromPoint calls,
	         *                      sign determines direction.
	         * @returns {boolean} - true if a node was hit, false otherwise.
	         */


	        /**
	         * Inserts the cursor at the DOM node closest to the given coordinates,
	         * based on hit-tests conducted using #_findHitNode.
	         *
	         * @param {number} x - the x coordinate in the viewport
	         * @param {number} y - the y coordinate in the viewport
	         */


	        /**
	         * When a touch starts in the cursor handle, we track it so as to avoid
	         * handling any touch events ourself.
	         *
	         * @param {TouchEvent} e - the raw touch event from the browser
	         */


	        /**
	         * When the user moves the cursor handle update the position of the cursor
	         * and the handle.
	         *
	         * @param {TouchEvent} e - the raw touch event from the browser
	         */


	        /**
	         * When the user releases the cursor handle, animate it back into place.
	         *
	         * @param {TouchEvent} e - the raw touch event from the browser
	         */


	        /**
	         * If the gesture is cancelled mid-drag, simply hide it.
	         *
	         * @param {TouchEvent} e - the raw touch event from the browser
	         */

	    }, {
	        key: 'render',
	        value: function render() {
	            var _this3 = this;

	            var _state = this.state,
	                focused = _state.focused,
	                handle = _state.handle;
	            var style = this.props.style;

	            // Calculate the appropriate padding based on the border width (which is
	            // considered 'padding', since we're using 'border-box') and the fact
	            // that MathQuill automatically applies 2px of padding to the inner
	            // input.

	            var normalBorderWidthPx = 1;
	            var focusedBorderWidthPx = 2;
	            var borderWidthPx = this.state.focused ? focusedBorderWidthPx : normalBorderWidthPx;
	            var builtInMathQuillPadding = 2;
	            var paddingInset = totalDesiredPadding - borderWidthPx - builtInMathQuillPadding;

	            // Now, translate that to the appropriate padding for each direction.
	            // The complication here is that we want numerals to be centered within
	            // the input. However, Symbola (MathQuill's font of choice) renders
	            // numerals with approximately 3px of padding below and 1px of padding
	            // above (to make room for ascenders and descenders). So we ignore those
	            // padding values for the vertical directions.
	            var symbolaPaddingBottom = 3;
	            var symbolaPaddingTop = 1;
	            var padding = {
	                paddingTop: paddingInset - symbolaPaddingTop,
	                paddingRight: paddingInset,
	                paddingBottom: paddingInset - symbolaPaddingBottom,
	                paddingLeft: paddingInset
	            };

	            var innerStyle = _extends({}, inlineStyles.innerContainer, {
	                borderWidth: borderWidthPx
	            }, padding, focused ? { borderColor: brightGreen } : {}, style);

	            return React.createElement(
	                View,
	                {
	                    style: styles.input,
	                    onTouchStart: this.handleTouchStart,
	                    onTouchMove: this.handleTouchMove,
	                    onTouchEnd: this.handleTouchEnd,
	                    onClick: function onClick(e) {
	                        return e.stopPropagation();
	                    },
	                    role: 'textbox',
	                    ariaLabel: i18n._('Math input box')
	                },
	                React.createElement(
	                    'div',
	                    { className: 'keypad-input' },
	                    React.createElement('div', {
	                        ref: function ref(node) {
	                            _this3._mathContainer = ReactDOM.findDOMNode(node);
	                        },
	                        style: innerStyle
	                    })
	                ),
	                focused && handle.visible && React.createElement(CursorHandle, _extends({}, handle, {
	                    onTouchStart: this.onCursorHandleTouchStart,
	                    onTouchMove: this.onCursorHandleTouchMove,
	                    onTouchEnd: this.onCursorHandleTouchEnd,
	                    onTouchCancel: this.onCursorHandleTouchCancel
	                }))
	            );
	        }
	    }]);

	    return MathInput;
	}(React.Component);

	MathInput.propTypes = {
	    // The React element node associated with the keypad that will send
	    // key-press events to this input. If provided, this can be used to:
	    //   (1) Avoid blurring the input, on user interaction with the keypad.
	    //   (2) Scroll the input into view, if it would otherwise be obscured
	    //       by the keypad on focus.
	    keypadElement: keypadElementPropType,
	    onBlur: React.PropTypes.func,
	    onChange: React.PropTypes.func.isRequired,
	    onFocus: React.PropTypes.func,
	    // Whether the input should be scrollable. This is typically only
	    // necessary when a fixed width has been provided through the `style`
	    // prop.
	    scrollable: React.PropTypes.bool,
	    // An extra, vanilla style object, to be applied to the math input.
	    style: React.PropTypes.any,
	    value: React.PropTypes.string
	};
	MathInput.defaultProps = {
	    scrollable: false,
	    style: {},
	    value: ""
	};


	var fontSizePt = 18;

	// The height of numerals in Symbola (rendered at 18pt) is about 20px (though
	// they render at 24px due to padding for ascenders and descenders). We want our
	// box to be laid out such that there's 8px of padding between a numeral and the
	// edge of the input, so we use this 20px number as our 'base height' and
	// account for the ascender and descender padding when computing the additional
	// padding in our `render` method.
	var numeralHeightPx = 20;
	var totalDesiredPadding = 8;
	var minHeightPx = numeralHeightPx + totalDesiredPadding * 2;
	var minWidthPx = 64;

	var styles = StyleSheet.create({
	    input: {
	        position: 'relative',
	        display: 'inline-block',
	        verticalAlign: 'middle'
	    }
	});

	var inlineStyles = {
	    // Styles for the inner, MathQuill-ified input element. It's important that
	    // these are done with regular inline styles rather than Aphrodite classes
	    // as MathQuill adds CSS class names to the element outside of the typical
	    // React flow; assigning a class to the element can thus disrupt MathQuill
	    // behavior. For example, if the client provided new styles to be applied
	    // on focus and the styles here were applied with Aphrodite, then Aphrodite
	    // would merge the provided styles with the base styles here, producing a
	    // new CSS class name that we would apply to the element, clobbering any CSS
	    // class names that MathQuill had applied itself.
	    innerContainer: {
	        backgroundColor: 'white',
	        display: 'flex',
	        minHeight: minHeightPx,
	        minWidth: minWidthPx,
	        boxSizing: 'border-box',
	        position: 'relative',
	        overflow: 'hidden',
	        borderStyle: 'solid',
	        borderColor: gray76,
	        borderRadius: 4,
	        color: gray17
	    }
	};

	module.exports = MathInput;

/***/ },
/* 638 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * Renders the green tear-shaped handle under the cursor.
	 */

	var React = __webpack_require__(1);

	var _require = __webpack_require__(564),
	    cursorHandleRadiusPx = _require.cursorHandleRadiusPx,
	    brightGreen = _require.brightGreen,
	    cursorHandleDistanceMultiplier = _require.cursorHandleDistanceMultiplier;

	var touchTargetRadiusPx = 22;
	var touchTargetHeightPx = 2 * touchTargetRadiusPx;
	var touchTargetWidthPx = 2 * touchTargetRadiusPx;

	var cursorRadiusPx = cursorHandleRadiusPx;
	var cursorHeightPx = cursorHandleDistanceMultiplier * cursorRadiusPx + cursorRadiusPx;
	var cursorWidthPx = 2 * cursorRadiusPx;

	var CursorHandle = function (_React$Component) {
	    _inherits(CursorHandle, _React$Component);

	    function CursorHandle() {
	        _classCallCheck(this, CursorHandle);

	        return _possibleConstructorReturn(this, (CursorHandle.__proto__ || Object.getPrototypeOf(CursorHandle)).apply(this, arguments));
	    }

	    _createClass(CursorHandle, [{
	        key: 'render',
	        value: function render() {
	            var _props = this.props,
	                x = _props.x,
	                y = _props.y,
	                animateIntoPosition = _props.animateIntoPosition;


	            var animationStyle = animateIntoPosition ? {
	                msTransitionDuration: '100ms',
	                WebkitTransitionDuration: '100ms',
	                transitionDuration: '100ms',
	                msTransitionProperty: 'transform',
	                WebkitTransitionProperty: 'transform',
	                transitionProperty: 'transform'
	            } : {};
	            var transformString = 'translate(' + x + 'px, ' + y + 'px)';

	            var outerStyle = _extends({
	                position: 'absolute',
	                // This is essentially webapp's interactiveComponent + 1.
	                // TODO(charlie): Pull in those styles somehow to avoid breakages.
	                zIndex: 4,
	                left: -touchTargetWidthPx / 2,
	                top: 0,
	                msTransform: transformString,
	                WebkitTransform: transformString,
	                transform: transformString,
	                width: touchTargetWidthPx,
	                height: touchTargetHeightPx,
	                // Touch events that start on the cursor shouldn't be allowed to
	                // produce page scrolls.
	                touchAction: "none"
	            }, animationStyle);

	            var innerStyle = {
	                marginLeft: touchTargetRadiusPx - cursorRadiusPx
	            };

	            return React.createElement(
	                'span',
	                {
	                    style: outerStyle,
	                    onTouchStart: this.props.onTouchStart,
	                    onTouchMove: this.props.onTouchMove,
	                    onTouchEnd: this.props.onTouchEnd,
	                    onTouchCancel: this.props.onTouchCancel
	                },
	                React.createElement(
	                    'svg',
	                    {
	                        width: cursorWidthPx,
	                        height: cursorHeightPx,
	                        viewBox: '-' + cursorRadiusPx + ' 0 ' + cursorWidthPx + ' ' + cursorHeightPx,
	                        style: innerStyle
	                    },
	                    React.createElement('path', {
	                        d: 'M 0 0\n                        L -' + 0.707 * cursorRadiusPx + ' ' + 0.707 * cursorRadiusPx + '\n                        A ' + cursorRadiusPx + ' ' + cursorRadiusPx + ', 0, 1, 0,\n                          ' + 0.707 * cursorRadiusPx + ' ' + 0.707 * cursorRadiusPx + '\n                        Z',
	                        fill: brightGreen
	                    })
	                )
	            );
	        }
	    }]);

	    return CursorHandle;
	}(React.Component);

	CursorHandle.propTypes = {
	    animateIntoPosition: React.PropTypes.bool,
	    onTouchCancel: React.PropTypes.func.isRequired,
	    onTouchEnd: React.PropTypes.func.isRequired,
	    onTouchMove: React.PropTypes.func.isRequired,
	    onTouchStart: React.PropTypes.func.isRequired,
	    visible: React.PropTypes.bool.isRequired,
	    x: React.PropTypes.number.isRequired,
	    y: React.PropTypes.number.isRequired
	};
	CursorHandle.defaultProps = {
	    animateIntoPosition: false,
	    visible: false,
	    x: 0,
	    y: 0
	};


	module.exports = CursorHandle;

/***/ },
/* 639 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _KeyActions, _NormalCommands, _KeysForJumpContext;

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	/**
	 * This file contains a wrapper around MathQuill so that we can provide a
	 * more regular interface for the functionality we need while insulating us
	 * from MathQuill changes.
	 */

	var $ = __webpack_require__(640);
	// TODO(kevinb) allow test code to use const MathQuill = require('mathquill');
	var MathQuill = window.MathQuill;

	var Keys = __webpack_require__(613);
	var CursorContexts = __webpack_require__(615);

	var _require = __webpack_require__(610),
	    DecimalSeparators = _require.DecimalSeparators;

	var _require2 = __webpack_require__(614),
	    decimalSeparator = _require2.decimalSeparator;

	var decimalSymbol = decimalSeparator === DecimalSeparators.COMMA ? ',' : '.';

	var WRITE = 'write';
	var CMD = 'cmd';
	var KEYSTROKE = 'keystroke';
	var MQ_END = 0;

	// A mapping from keys that can be pressed on a keypad to the way in which
	// MathQuill should modify its input in response to that key-press. Any keys
	// that do not provide explicit actions (like the numeral keys) will merely
	// write their contents to MathQuill.
	var KeyActions = (_KeyActions = {}, _defineProperty(_KeyActions, Keys.PLUS, { str: '+', fn: WRITE }), _defineProperty(_KeyActions, Keys.MINUS, { str: '-', fn: WRITE }), _defineProperty(_KeyActions, Keys.NEGATIVE, { str: '-', fn: WRITE }), _defineProperty(_KeyActions, Keys.TIMES, { str: '\\times', fn: WRITE }), _defineProperty(_KeyActions, Keys.DIVIDE, { str: '\\div', fn: WRITE }), _defineProperty(_KeyActions, Keys.DECIMAL, {
	    str: decimalSymbol,
	    fn: WRITE
	}), _defineProperty(_KeyActions, Keys.EQUAL, { str: '=', fn: WRITE }), _defineProperty(_KeyActions, Keys.NEQ, { str: '\\neq', fn: WRITE }), _defineProperty(_KeyActions, Keys.CDOT, { str: '\\cdot', fn: WRITE }), _defineProperty(_KeyActions, Keys.PERCENT, { str: '%', fn: WRITE }), _defineProperty(_KeyActions, Keys.LEFT_PAREN, { str: '(', fn: CMD }), _defineProperty(_KeyActions, Keys.RIGHT_PAREN, { str: ')', fn: CMD }), _defineProperty(_KeyActions, Keys.SQRT, { str: 'sqrt', fn: CMD }), _defineProperty(_KeyActions, Keys.PI, { str: 'pi', fn: CMD }), _defineProperty(_KeyActions, Keys.THETA, { str: 'theta', fn: CMD }), _defineProperty(_KeyActions, Keys.RADICAL, { str: 'nthroot', fn: CMD }), _defineProperty(_KeyActions, Keys.LT, { str: '<', fn: WRITE }), _defineProperty(_KeyActions, Keys.LEQ, { str: '\\leq', fn: WRITE }), _defineProperty(_KeyActions, Keys.GT, { str: '>', fn: WRITE }), _defineProperty(_KeyActions, Keys.GEQ, { str: '\\geq', fn: WRITE }), _defineProperty(_KeyActions, Keys.UP, { str: 'Up', fn: KEYSTROKE }), _defineProperty(_KeyActions, Keys.DOWN, { str: 'Down', fn: KEYSTROKE }), _defineProperty(_KeyActions, Keys.FRAC_INCLUSIVE, { str: '/', fn: CMD }), _KeyActions);

	var NormalCommands = (_NormalCommands = {}, _defineProperty(_NormalCommands, Keys.LOG, 'log'), _defineProperty(_NormalCommands, Keys.LN, 'ln'), _defineProperty(_NormalCommands, Keys.SIN, 'sin'), _defineProperty(_NormalCommands, Keys.COS, 'cos'), _defineProperty(_NormalCommands, Keys.TAN, 'tan'), _NormalCommands);

	var ArithmeticOperators = ['+', '-', '\\cdot', '\\times', '\\div'];
	var EqualityOperators = ['=', '\\neq', '<', '\\leq', '>', '\\geq'];

	var Numerals = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
	var GreekLetters = ['\\theta', '\\pi'];
	var Letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

	// We only consider numerals, variables, and Greek Letters to be proper
	// leaf nodes.
	var ValidLeaves = [].concat(Numerals, GreekLetters, _toConsumableArray(Letters.map(function (letter) {
	    return letter.toLowerCase();
	})), _toConsumableArray(Letters.map(function (letter) {
	    return letter.toUpperCase();
	})));

	var KeysForJumpContext = (_KeysForJumpContext = {}, _defineProperty(_KeysForJumpContext, CursorContexts.IN_PARENS, Keys.JUMP_OUT_PARENTHESES), _defineProperty(_KeysForJumpContext, CursorContexts.IN_SUPER_SCRIPT, Keys.JUMP_OUT_EXPONENT), _defineProperty(_KeysForJumpContext, CursorContexts.IN_SUB_SCRIPT, Keys.JUMP_OUT_BASE), _defineProperty(_KeysForJumpContext, CursorContexts.BEFORE_FRACTION, Keys.JUMP_INTO_NUMERATOR), _defineProperty(_KeysForJumpContext, CursorContexts.IN_NUMERATOR, Keys.JUMP_OUT_NUMERATOR), _defineProperty(_KeysForJumpContext, CursorContexts.IN_DENOMINATOR, Keys.JUMP_OUT_DENOMINATOR), _KeysForJumpContext);

	var MathWrapper = function () {
	    function MathWrapper(element) {
	        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	        var callbacks = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

	        _classCallCheck(this, MathWrapper);

	        this.MQ = MathQuill.getInterface(2);
	        this.mathField = this.MQ.MathField(element, {
	            // use a span instead of a textarea so that we don't bring up the
	            // native keyboard on mobile when selecting the input
	            substituteTextarea: function substituteTextarea() {
	                return document.createElement('span');
	            }
	        });
	        this.callbacks = callbacks;
	    }

	    _createClass(MathWrapper, [{
	        key: 'focus',
	        value: function focus() {
	            // HACK(charlie): We shouldn't reaching into MathQuill internals like
	            // this, but it's the easiest way to allow us to manage the focus state
	            // ourselves.
	            var controller = this.mathField.__controller;
	            controller.cursor.show();

	            // Set MathQuill's internal state to reflect the focus, otherwise it
	            // will consistently try to hide the cursor on key-press and introduce
	            // layout jank.
	            controller.blurred = false;
	        }
	    }, {
	        key: 'blur',
	        value: function blur() {
	            var controller = this.mathField.__controller;
	            controller.cursor.hide();
	            controller.blurred = true;
	        }
	    }, {
	        key: '_writeNormalFunction',
	        value: function _writeNormalFunction(name) {
	            this.mathField.write('\\' + name + '\\left(\\right)');
	            this.mathField.keystroke('Left');
	        }

	        /**
	         * Handle a key press and return the resulting cursor state.
	         *
	         * @param {Key} key - an enum representing the key that was pressed
	         * @returns {object} a cursor object, consisting of a cursor context
	         */

	    }, {
	        key: 'pressKey',
	        value: function pressKey(key) {
	            var cursor = this.mathField.__controller.cursor;

	            if (key in KeyActions) {
	                var _KeyActions$key = KeyActions[key],
	                    str = _KeyActions$key.str,
	                    fn = _KeyActions$key.fn;


	                if (str && fn) {
	                    this.mathField[fn](str);
	                }
	            } else if (Object.keys(NormalCommands).includes(key)) {
	                this._writeNormalFunction(NormalCommands[key]);
	            } else if (key === Keys.FRAC_EXCLUSIVE) {
	                // If there's nothing to the left of the cursor, then we want to
	                // leave the cursor to the left of the fraction after creating it.
	                var shouldNavigateLeft = cursor[this.MQ.L] === MQ_END;
	                this.mathField.cmd('\\frac');
	                if (shouldNavigateLeft) {
	                    this.mathField.keystroke('Left');
	                }
	            } else if (key === Keys.LOG_N) {
	                this.mathField.write('log_{ }\\left(\\right)');
	                this.mathField.keystroke('Left'); // into parentheses
	                this.mathField.keystroke('Left'); // out of parentheses
	                this.mathField.keystroke('Left'); // into index
	            } else if (key === Keys.CUBE_ROOT) {
	                this.mathField.write('\\sqrt[3]{}');
	                this.mathField.keystroke('Left'); // under the root
	            } else if (key === Keys.EXP || key === Keys.EXP_2 || key === Keys.EXP_3) {
	                this._handleExponent(cursor, key);
	            } else if (key === Keys.JUMP_OUT_PARENTHESES || key === Keys.JUMP_OUT_EXPONENT || key === Keys.JUMP_OUT_BASE || key === Keys.JUMP_INTO_NUMERATOR || key === Keys.JUMP_OUT_NUMERATOR || key === Keys.JUMP_OUT_DENOMINATOR) {
	                this._handleJumpOut(cursor, key);
	            } else if (key === Keys.BACKSPACE) {
	                this._handleBackspace(cursor);
	            } else if (key === Keys.LEFT) {
	                this._handleLeftArrow(cursor);
	            } else if (key === Keys.RIGHT || key === Keys.JUMP_OUT) {
	                this._handleRightArrow(cursor);
	            } else if (/^[a-zA-Z]$/.test(key)) {
	                this.mathField[WRITE](key);
	            } else if (/^NUM_\d/.test(key)) {
	                this.mathField[WRITE](key[4]);
	            }

	            if (!cursor.selection) {
	                // don't show the cursor for selections
	                cursor.show();
	            }

	            if (this.callbacks.onSelectionChanged) {
	                this.callbacks.onSelectionChanged(cursor.selection);
	            }

	            // NOTE(charlie): It's insufficient to do this as an `edited` handler
	            // on the MathField, as that handler isn't triggered on navigation
	            // events.
	            return {
	                context: this.contextForCursor(cursor)
	            };
	        }

	        /**
	         * Place the cursor beside the node located at the given coordinates.
	         *
	         * @param {number} x - the x coordinate in the viewport
	         * @param {number} y - the y coordinate in the viewport
	         * @param {Node} hitNode - the node next to which the cursor should be
	         *                         placed; if provided, the coordinates will be used
	         *                         to determine on which side of the node the cursor
	         *                         should be placed
	         */

	    }, {
	        key: 'setCursorPosition',
	        value: function setCursorPosition(x, y, hitNode) {
	            var el = hitNode || document.elementFromPoint(x, y);

	            if (el) {
	                var cursor = this.getCursor();

	                if (el.hasAttribute('mq-root-block')) {
	                    // If we're in the empty area place the cursor at the right
	                    // end of the expression.
	                    cursor.insAtRightEnd(this.mathField.__controller.root);
	                } else {
	                    // Otherwise place beside the element at x, y.
	                    var controller = this.mathField.__controller;

	                    var pageX = x - document.body.scrollLeft;
	                    var pageY = y - document.body.scrollTop;
	                    controller.seek($(el), pageX, pageY).cursor.startSelection();

	                    // Unless that would leave us mid-command, in which case, we
	                    // need to adjust and place the cursor inside the parens
	                    // following the command.
	                    var command = this._maybeFindCommand(cursor[this.MQ.L]);
	                    if (command && command.endNode) {
	                        // NOTE(charlie): endNode should definitely be \left(.
	                        cursor.insLeftOf(command.endNode);
	                        this.mathField.keystroke('Right');
	                    }
	                }

	                if (this.callbacks.onCursorMove) {
	                    this.callbacks.onCursorMove({
	                        context: this.contextForCursor(cursor)
	                    });
	                }
	            }
	        }
	    }, {
	        key: 'getCursor',
	        value: function getCursor() {
	            return this.mathField.__controller.cursor;
	        }
	    }, {
	        key: 'getSelection',
	        value: function getSelection() {
	            return this.getCursor().selection;
	        }
	    }, {
	        key: 'getContent',
	        value: function getContent() {
	            return this.mathField.latex();
	        }
	    }, {
	        key: 'setContent',
	        value: function setContent(latex) {
	            this.mathField.latex(latex);
	        }
	    }, {
	        key: 'isEmpty',
	        value: function isEmpty() {
	            var cursor = this.getCursor();
	            return cursor.parent.id === 1 && cursor[1] === 0 && cursor[-1] === 0;
	        }

	        // Notes about MathQuill
	        //
	        // MathQuill's stores its layout as nested linked lists.  Each node in the
	        // list has this.MQ.L '-1' and this.MQ.R '1' properties that define links to
	        // the left and right nodes respectively.  They also have
	        //
	        // ctrlSeq: contains the latex code snippet that defines that node.
	        // jQ: jQuery object for the DOM node(s) for this MathQuill node.
	        // ends: pointers to the nodes at the ends of the container.
	        // parent: parent node.
	        // blocks: an array containing one or more nodes that make up the node.
	        // sub?: subscript node if there is one as is the case in log_n
	        //
	        // All of the code below is super fragile.  Please be especially careful
	        // when upgrading MathQuill.

	    }, {
	        key: '_handleBackspaceInNthRoot',
	        value: function _handleBackspaceInNthRoot(cursor) {
	            var isAtLeftEnd = cursor[this.MQ.L] === MQ_END;

	            var isRootEmpty = this._isInsideEmptyNode(cursor.parent.parent.blocks[0].ends);

	            if (isAtLeftEnd) {
	                this._selectNode(cursor.parent.parent, cursor);

	                if (isRootEmpty) {
	                    this.mathField.keystroke('Backspace');
	                }
	            } else {
	                this.mathField.keystroke('Backspace');
	            }
	        }

	        /**
	         * Advances the cursor to the next logical position.
	         *
	         * @param {cursor} cursor
	         * @private
	         */

	    }, {
	        key: '_handleJumpOut',
	        value: function _handleJumpOut(cursor, key) {
	            var context = this.contextForCursor(cursor);

	            // Validate that the current cursor context matches the key's intent.
	            if (KeysForJumpContext[context] !== key) {
	                // If we don't have a valid cursor context, yet the user was able
	                // to trigger a jump-out key, that's a broken invariant. Rather
	                // than throw an error (which would kick the user out of the
	                // exercise), we do nothing, as a fallback strategy. The user can
	                // still move the cursor manually.
	                return;
	            }

	            switch (context) {
	                case CursorContexts.IN_PARENS:
	                    // Insert at the end of the parentheses, and then navigate right
	                    // once more to get 'beyond' the parentheses.
	                    cursor.insRightOf(cursor.parent.parent);
	                    break;

	                case CursorContexts.BEFORE_FRACTION:
	                    // Find the nearest fraction to the right of the cursor.
	                    var fractionNode = void 0;
	                    var visitor = cursor;
	                    while (visitor[this.MQ.R] !== MQ_END) {
	                        if (this._isFraction(visitor[this.MQ.R])) {
	                            fractionNode = visitor[this.MQ.R];
	                        }
	                        visitor = visitor[this.MQ.R];
	                    }

	                    // Jump into it!
	                    cursor.insLeftOf(fractionNode);
	                    this.mathField.keystroke('Right');
	                    break;

	                case CursorContexts.IN_NUMERATOR:
	                    // HACK(charlie): I can't find a better way to do this. The goal
	                    // is to place the cursor at the start of the matching
	                    // denominator. So, we identify the appropriate node, and
	                    // continue rightwards until we find ourselves inside of it.
	                    // It's possible that there are cases in which we don't reach
	                    // the denominator, though I can't think of any.
	                    var siblingDenominator = cursor.parent.parent.blocks[1];
	                    while (cursor.parent !== siblingDenominator) {
	                        this.mathField.keystroke('Right');
	                    }
	                    break;

	                case CursorContexts.IN_DENOMINATOR:
	                    cursor.insRightOf(cursor.parent.parent);
	                    break;

	                case CursorContexts.IN_SUB_SCRIPT:
	                    // Insert just beyond the superscript.
	                    cursor.insRightOf(cursor.parent.parent);

	                    // Navigate right once more, if we're right before parens. This
	                    // is to handle the standard case in which the subscript is the
	                    // base of a custom log.
	                    if (this._isParens(cursor[this.MQ.R])) {
	                        this.mathField.keystroke('Right');
	                    }
	                    break;

	                case CursorContexts.IN_SUPER_SCRIPT:
	                    // Insert just beyond the superscript.
	                    cursor.insRightOf(cursor.parent.parent);
	                    break;

	                default:
	                    throw new Error('Attempted to \'Jump Out\' from node, but found no ' + ('appropriate cursor context: ' + context));
	            }
	        }

	        /**
	         * Selects and deletes part of the expression based on the cursor location.
	         * See inline comments for precise behavior of different cases.
	         *
	         * @param {cursor} cursor
	         * @private
	         */

	    }, {
	        key: '_handleBackspace',
	        value: function _handleBackspace(cursor) {
	            if (!cursor.selection) {
	                var parent = cursor.parent;
	                var grandparent = parent.parent;
	                var leftNode = cursor[this.MQ.L];

	                if (this._isFraction(leftNode)) {
	                    this._selectNode(leftNode, cursor);
	                } else if (this._isSquareRoot(leftNode)) {
	                    this._selectNode(leftNode, cursor);
	                } else if (this._isNthRoot(leftNode)) {
	                    this._selectNode(leftNode, cursor);
	                } else if (this._isNthRootIndex(parent)) {
	                    this._handleBackspaceInRootIndex(cursor);
	                } else if (leftNode.ctrlSeq === '\\left(') {
	                    this._handleBackspaceOutsideParens(cursor);
	                } else if (grandparent.ctrlSeq === '\\left(') {
	                    this._handleBackspaceInsideParens(cursor);
	                } else if (this._isInsideLogIndex(cursor)) {
	                    this._handleBackspaceInLogIndex(cursor);
	                } else if (leftNode.ctrlSeq === '\\ge ' || leftNode.ctrlSeq === '\\le ') {
	                    this._handleBackspaceAfterLigaturedSymbol(cursor);
	                } else if (this._isNthRoot(grandparent) && leftNode === MQ_END) {
	                    this._handleBackspaceInNthRoot(cursor);
	                } else {
	                    this.mathField.keystroke('Backspace');
	                }
	            } else {
	                this.mathField.keystroke('Backspace');
	            }
	        }
	    }, {
	        key: '_handleLeftArrow',
	        value: function _handleLeftArrow(cursor) {
	            // If we're inside a function, and just after the left parentheses, we
	            // need to skip the entire function name, rather than move the cursor
	            // inside of it. For example, when hitting left from within the
	            // parentheses in `cos()`, we want to place the cursor to the left of
	            // the entire expression, rather than between the `s` and the left
	            // parenthesis.
	            // From the cursor's perspective, this requires that our left node is
	            // the MQ_END node, that our grandparent is the left parenthesis, and
	            // the nodes to the left of our grandparent comprise a valid function
	            // name.
	            if (cursor[this.MQ.L] === MQ_END) {
	                var parent = cursor.parent;
	                var grandparent = parent.parent;
	                if (grandparent.ctrlSeq === '\\left(') {
	                    var command = this._maybeFindCommandBeforeParens(grandparent);
	                    if (command) {
	                        cursor.insLeftOf(command.startNode);
	                        return;
	                    }
	                }
	            }

	            // Otherwise, we default to the standard MathQull left behavior.
	            this.mathField.keystroke('Left');
	        }
	    }, {
	        key: '_handleRightArrow',
	        value: function _handleRightArrow(cursor) {
	            var command = this._maybeFindCommand(cursor[this.MQ.R]);
	            if (command) {
	                // Similarly, if a function is to our right, then we need to place
	                // the cursor at the start of its parenthetical content, which is
	                // done by putting it to the left of ites parentheses and then
	                // moving right once.
	                cursor.insLeftOf(command.endNode);
	                this.mathField.keystroke('Right');
	            } else {
	                // Otherwise, we default to the standard MathQull right behavior.
	                this.mathField.keystroke('Right');
	            }
	        }
	    }, {
	        key: '_handleExponent',
	        value: function _handleExponent(cursor, key) {
	            // If there's an invalid operator preceding the cursor (anything that
	            // knowingly cannot be raised to a power), add an empty set of
	            // parentheses and apply the exponent to that.
	            var invalidPrefixes = [].concat(ArithmeticOperators, EqualityOperators);

	            var precedingNode = cursor[this.MQ.L];
	            var shouldPrefixWithParens = precedingNode === MQ_END || invalidPrefixes.includes(precedingNode.ctrlSeq.trim());
	            if (shouldPrefixWithParens) {
	                this.mathField.write('\\left(\\right)');
	            }

	            // Insert the appropriate exponent operator.
	            switch (key) {
	                case Keys.EXP:
	                    this.mathField.cmd('^');
	                    break;

	                case Keys.EXP_2:
	                case Keys.EXP_3:
	                    this.mathField.write('^' + (key === Keys.EXP_2 ? 2 : 3));

	                    // If we enter a square or a cube, we should leave the cursor
	                    // within the newly inserted parens, if they exist. This takes
	                    // exactly four left strokes, since the cursor by default would
	                    // end up to the right of the exponent.
	                    if (shouldPrefixWithParens) {
	                        this.mathField.keystroke('Left');
	                        this.mathField.keystroke('Left');
	                        this.mathField.keystroke('Left');
	                        this.mathField.keystroke('Left');
	                    }
	                    break;

	                default:
	                    throw new Error('Invalid exponent key: ' + key);
	            }
	        }

	        /**
	         * Return the start node, end node, and full name of the command of which
	         * the initial node is a part, or `null` if the node is not part of a
	         * command.
	         *
	         * @param {node} initialNode - the node to included as part of the command
	         * @returns {null|object} - `null` or an object containing the start node
	         *                          (`startNode`), end node (`endNode`), and full
	         *                          name (`name`) of the command
	         * @private
	         */

	    }, {
	        key: '_maybeFindCommand',
	        value: function _maybeFindCommand(initialNode) {
	            if (!initialNode) {
	                return null;
	            }

	            // MathQuill stores commands as separate characters so that
	            // users can delete commands one character at a time.  We iterate over
	            // the nodes from right to left until we hit a sequence starting with a
	            // '\\', which signifies the start of a command; then we iterate from
	            // left to right until we hit a '\\left(', which signifies the end of a
	            // command.  If we encounter any character that doesn't belong in a
	            // command, we return null.  We match a single character at a time.
	            // Ex) ['\\l', 'o', 'g ', '\\left(', ...]
	            var commandCharRegex = /^[a-z]$/;
	            var commandStartRegex = /^\\[a-z]$/;
	            var commandEndSeq = '\\left(';

	            // Note: We whitelist the set of valid commands, since relying solely on
	            // a command being prefixed with a backslash leads to undesired
	            // behavior. For example, Greek symbols, left parentheses, and square
	            // roots all get treated as commands.
	            var validCommands = ['\\log', '\\ln', '\\cos', '\\sin', '\\tan'];

	            var name = '';
	            var startNode = void 0;
	            var endNode = void 0;

	            // Collect the portion of the command from the current node, leftwards
	            // until the start of the command.
	            var node = initialNode;
	            while (node !== 0) {
	                var ctrlSeq = node.ctrlSeq.trim();
	                if (commandCharRegex.test(ctrlSeq)) {
	                    name = ctrlSeq + name;
	                } else if (commandStartRegex.test(ctrlSeq)) {
	                    name = ctrlSeq + name;
	                    startNode = node;
	                    break;
	                } else {
	                    break;
	                }

	                node = node[this.MQ.L];
	            }

	            // If we hit the start of a command, then grab the rest of it by
	            // iterating rightwards to compute the full name of the command, along
	            // with its terminal node.
	            if (startNode) {
	                // Next, iterate from the start to the right.
	                node = initialNode[this.MQ.R];
	                while (node !== 0) {
	                    var _ctrlSeq = node.ctrlSeq.trim();
	                    if (commandCharRegex.test(_ctrlSeq)) {
	                        // If we have a single character, add it to the command
	                        // name.
	                        name = name + _ctrlSeq;
	                    } else if (_ctrlSeq === commandEndSeq) {
	                        // If we hit the command end delimiter (the left
	                        // parentheses surrounding its arguments), stop.
	                        endNode = node;
	                        break;
	                    }

	                    node = node[this.MQ.R];
	                }
	                if (validCommands.includes(name)) {
	                    return { name: name, startNode: startNode, endNode: endNode };
	                } else {
	                    return null;
	                }
	            } else {
	                return null;
	            }
	        }

	        /**
	         * Return the start node, end node, and full name of the command to the left
	         * of `\\left(`, or `null` if there is no command.
	         *
	         * @param {node} leftParenNode - node where .ctrlSeq == `\\left(`
	         * @returns {null|object} - `null` or an object containing the start node
	         *                          (`startNode`), end node (`endNode`), and full
	         *                          name (`name`) of the command
	         * @private
	         */

	    }, {
	        key: '_maybeFindCommandBeforeParens',
	        value: function _maybeFindCommandBeforeParens(leftParenNode) {
	            return this._maybeFindCommand(leftParenNode[this.MQ.L]);
	        }
	    }, {
	        key: '_selectNode',
	        value: function _selectNode(node, cursor) {
	            cursor.insLeftOf(node);
	            cursor.startSelection();
	            cursor.insRightOf(node);
	            cursor.select();
	            cursor.endSelection();
	        }
	    }, {
	        key: '_isFraction',
	        value: function _isFraction(node) {
	            return node.jQ && node.jQ.hasClass('mq-fraction');
	        }
	    }, {
	        key: '_isNumerator',
	        value: function _isNumerator(node) {
	            return node.jQ && node.jQ.hasClass('mq-numerator');
	        }
	    }, {
	        key: '_isDenominator',
	        value: function _isDenominator(node) {
	            return node.jQ && node.jQ.hasClass('mq-denominator');
	        }
	    }, {
	        key: '_isSubScript',
	        value: function _isSubScript(node) {
	            // NOTE(charlie): MyScript has a structure whereby its superscripts seem
	            // to be represented as a parent node with 'mq-sup-only' containing a
	            // single child with 'mq-sup'.
	            return node.jQ && (node.jQ.hasClass('mq-sub-only') || node.jQ.hasClass('mq-sub'));
	        }
	    }, {
	        key: '_isSuperScript',
	        value: function _isSuperScript(node) {
	            // NOTE(charlie): MyScript has a structure whereby its superscripts seem
	            // to be represented as a parent node with 'mq-sup-only' containing a
	            // single child with 'mq-sup'.
	            return node.jQ && (node.jQ.hasClass('mq-sup-only') || node.jQ.hasClass('mq-sup'));
	        }
	    }, {
	        key: '_isParens',
	        value: function _isParens(node) {
	            return node && node.ctrlSeq === '\\left(';
	        }
	    }, {
	        key: '_isLeaf',
	        value: function _isLeaf(node) {
	            return node && node.ctrlSeq && ValidLeaves.includes(node.ctrlSeq.trim());
	        }
	    }, {
	        key: '_isSquareRoot',
	        value: function _isSquareRoot(node) {
	            return node.blocks && node.blocks[0].jQ && node.blocks[0].jQ.hasClass('mq-sqrt-stem');
	        }
	    }, {
	        key: '_isNthRoot',
	        value: function _isNthRoot(node) {
	            return node.blocks && node.blocks[0].jQ && node.blocks[0].jQ.hasClass('mq-nthroot');
	        }
	    }, {
	        key: '_isNthRootIndex',
	        value: function _isNthRootIndex(node) {
	            return node.jQ && node.jQ.hasClass('mq-nthroot');
	        }
	    }, {
	        key: '_isInsideLogIndex',
	        value: function _isInsideLogIndex(cursor) {
	            var grandparent = cursor.parent.parent;

	            if (grandparent && grandparent.jQ.hasClass('mq-supsub')) {
	                var command = this._maybeFindCommandBeforeParens(grandparent);

	                if (command && command.name === '\\log') {
	                    return true;
	                }
	            }

	            return false;
	        }
	    }, {
	        key: '_isInsideEmptyNode',
	        value: function _isInsideEmptyNode(cursor) {
	            return cursor[this.MQ.L] === MQ_END && cursor[this.MQ.R] === MQ_END;
	        }
	    }, {
	        key: '_handleBackspaceInRootIndex',
	        value: function _handleBackspaceInRootIndex(cursor) {
	            if (this._isInsideEmptyNode(cursor)) {
	                // When deleting the index in a nthroot, we change from the nthroot
	                // to a sqrt, e.g. \sqrt[|]{35x-5} => |\sqrt{35x-5}.  If there's no
	                // content under the root, then we delete the whole thing.

	                var grandparent = cursor.parent.parent;
	                var latex = grandparent.latex();
	                var reinsertionPoint = grandparent[this.MQ.L];

	                this._selectNode(grandparent, cursor);

	                var rootIsEmpty = grandparent.blocks[1].jQ.text() === '';

	                if (rootIsEmpty) {
	                    // If there is not content under the root then simply delete
	                    // the whole thing.
	                    this.mathField.keystroke('Backspace');
	                } else {
	                    // Replace the nthroot with a sqrt if there was content under
	                    // the root.

	                    // Start by deleting the selection.
	                    this.mathField.keystroke('Backspace');

	                    // Replace the nth-root with a sqrt.
	                    this.mathField.write(latex.replace(/^\\sqrt\[\]/, '\\sqrt'));

	                    // Adjust the cursor to be to the left the sqrt.
	                    if (reinsertionPoint === MQ_END) {
	                        this.mathField.moveToDirEnd(this.MQ.L);
	                    } else {
	                        cursor.insRightOf(reinsertionPoint);
	                    }
	                }
	            } else {
	                if (cursor[this.MQ.L] !== MQ_END) {
	                    // If the cursor is not at the leftmost position inside the
	                    // root's index, delete a character.
	                    this.mathField.keystroke('Backspace');
	                } else {
	                    // TODO(kevinb) verify that we want this behavior after testing
	                    // Do nothing because we haven't completely deleted the
	                    // index of the radical.
	                }
	            }
	        }
	    }, {
	        key: '_handleBackspaceInLogIndex',
	        value: function _handleBackspaceInLogIndex(cursor) {
	            if (this._isInsideEmptyNode(cursor)) {
	                var grandparent = cursor.parent.parent;
	                var command = this._maybeFindCommandBeforeParens(grandparent);

	                cursor.insLeftOf(command.startNode);
	                cursor.startSelection();

	                if (grandparent[this.MQ.R] !== MQ_END) {
	                    cursor.insRightOf(grandparent[this.MQ.R]);
	                } else {
	                    cursor.insRightOf(grandparent);
	                }

	                cursor.select();
	                cursor.endSelection();

	                var isLogBodyEmpty = grandparent[this.MQ.R].contentjQ.text() === '';

	                if (isLogBodyEmpty) {
	                    // If there's no content inside the log's parens then delete the
	                    // whole thing.
	                    this.mathField.keystroke('Backspace');
	                }
	            } else {
	                this.mathField.keystroke('Backspace');
	            }
	        }
	    }, {
	        key: '_handleBackspaceOutsideParens',
	        value: function _handleBackspaceOutsideParens(cursor) {
	            // In this case the node with '\\left(' for its ctrlSeq
	            // is the parent of the expression contained within the
	            // parentheses.
	            //
	            // Handle selecting an expression before deleting:
	            // (x+1)| => |(x+1)|
	            // \log(x+1)| => |\log(x+1)|

	            var leftNode = cursor[this.MQ.L];
	            var rightNode = cursor[this.MQ.R];
	            var command = this._maybeFindCommandBeforeParens(leftNode);

	            if (command && command.startNode) {
	                // There's a command before the parens so we select it as well as
	                // the parens.
	                cursor.insLeftOf(command.startNode);
	                cursor.startSelection();
	                if (rightNode === MQ_END) {
	                    cursor.insAtRightEnd(cursor.parent);
	                } else {
	                    cursor.insLeftOf(rightNode);
	                }
	                cursor.select();
	                cursor.endSelection();
	            } else {
	                cursor.startSelection();
	                cursor.insLeftOf(leftNode); // left of \\left(
	                cursor.select();
	                cursor.endSelection();
	            }
	        }
	    }, {
	        key: '_handleBackspaceInsideParens',
	        value: function _handleBackspaceInsideParens(cursor) {
	            // Handle situations when the cursor is inside parens or a
	            // command that uses parens, e.g. \log() or \tan()
	            //
	            // MathQuill represents log(x+1) in roughly the following way
	            // [l, o, g, \\left[parent:[x, +, 1]]]
	            //
	            // If the cursor is inside the parentheses it's next to one of:
	            // x, +, or 1.  This makes sub_sub_expr its parent and sub_expr
	            // it's parent.
	            //
	            // Interestingly parent doesn't have any nodes to the left or
	            // right of it (even though the corresponding DOM node has
	            // ( and ) characters on either side.
	            //
	            // The grandparent's ctrlSeq is `\\left(`. The `\\right)` isn't
	            // stored anywhere.  NOTE(kevinb): I believe this is because
	            // MathQuill knows what the close paren should be and does the
	            // right thing at render time.
	            //
	            // This conditional branch handles the following cases:
	            // - \log(x+1|) => \log(x+|)
	            // - \log(|x+1) => |\log(x+1)|
	            // - \log(|) => |

	            if (cursor[this.MQ.L] !== MQ_END) {
	                // This command contains math and there's some math to
	                // the left of the cursor that we should delete normally
	                // before doing anything special.
	                this.mathField.keystroke('Backspace');
	                return;
	            }

	            var grandparent = cursor.parent.parent;

	            // If the cursors is inside the parens at the start but the command
	            // has a subscript as is the case in log_n then move the cursor into
	            // the subscript, e.g. \log_{5}(|x+1) => \log_{5|}(x+1)

	            if (grandparent[this.MQ.L].sub) {
	                // if there is a subscript
	                if (grandparent[this.MQ.L].sub.jQ.text()) {
	                    // and it contains text
	                    // move the cursor to the right end of the subscript
	                    cursor.insAtRightEnd(grandparent[this.MQ.L].sub);
	                    return;
	                }
	            }

	            // Determine if the parens are empty before we modify the
	            // cursor's position.
	            var isEmpty = this._isInsideEmptyNode(cursor);

	            // Insert the cursor to the left of the command if there is one
	            // or before the '\\left(` if there isn't
	            var command = this._maybeFindCommandBeforeParens(grandparent);

	            cursor.insLeftOf(command && command.startNode || grandparent);
	            cursor.startSelection();
	            cursor.insRightOf(grandparent);
	            cursor.select();
	            cursor.endSelection();

	            // Delete the selection, but only if the parens were empty to
	            // begin with.
	            if (isEmpty) {
	                this.mathField.keystroke('Backspace');
	            }
	        }
	    }, {
	        key: '_handleBackspaceAfterLigaturedSymbol',
	        value: function _handleBackspaceAfterLigaturedSymbol(cursor) {
	            this.mathField.keystroke('Backspace');
	            this.mathField.keystroke('Backspace');
	        }
	    }, {
	        key: 'contextForCursor',
	        value: function contextForCursor(cursor) {
	            // First, try to find any fraction to the right, unimpeded.
	            var visitor = cursor;
	            while (visitor[this.MQ.R] !== MQ_END) {
	                if (this._isFraction(visitor[this.MQ.R])) {
	                    return CursorContexts.BEFORE_FRACTION;
	                } else if (!this._isLeaf(visitor[this.MQ.R])) {
	                    break;
	                }
	                visitor = visitor[this.MQ.R];
	            }

	            // If that didn't work, check if the parent or grandparent is a special
	            // context, so that we can jump outwards.
	            if (this._isParens(cursor.parent && cursor.parent.parent)) {
	                return CursorContexts.IN_PARENS;
	            } else if (this._isNumerator(cursor.parent)) {
	                return CursorContexts.IN_NUMERATOR;
	            } else if (this._isDenominator(cursor.parent)) {
	                return CursorContexts.IN_DENOMINATOR;
	            } else if (this._isSubScript(cursor.parent)) {
	                return CursorContexts.IN_SUB_SCRIPT;
	            } else if (this._isSuperScript(cursor.parent)) {
	                return CursorContexts.IN_SUPER_SCRIPT;
	            } else {
	                return CursorContexts.NONE;
	            }
	        }
	    }, {
	        key: '_isAtTopLevel',
	        value: function _isAtTopLevel(cursor) {
	            return !cursor.parent.parent;
	        }
	    }]);

	    return MathWrapper;
	}();

	module.exports = MathWrapper;

/***/ },
/* 640 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * jQuery JavaScript Library v2.2.4
	 * http://jquery.com/
	 *
	 * Includes Sizzle.js
	 * http://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2016-05-20T17:23Z
	 */

	(function( global, factory ) {

		if ( typeof module === "object" && typeof module.exports === "object" ) {
			// For CommonJS and CommonJS-like environments where a proper `window`
			// is present, execute the factory and get jQuery.
			// For environments that do not have a `window` with a `document`
			// (such as Node.js), expose a factory as module.exports.
			// This accentuates the need for the creation of a real `window`.
			// e.g. var jQuery = require("jquery")(window);
			// See ticket #14549 for more info.
			module.exports = global.document ?
				factory( global, true ) :
				function( w ) {
					if ( !w.document ) {
						throw new Error( "jQuery requires a window with a document" );
					}
					return factory( w );
				};
		} else {
			factory( global );
		}

	// Pass this if window is not defined yet
	}(typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

	// Support: Firefox 18+
	// Can't be in strict mode, several libs including ASP.NET trace
	// the stack via arguments.caller.callee and Firefox dies if
	// you try to trace through "use strict" call chains. (#13335)
	//"use strict";
	var arr = [];

	var document = window.document;

	var slice = arr.slice;

	var concat = arr.concat;

	var push = arr.push;

	var indexOf = arr.indexOf;

	var class2type = {};

	var toString = class2type.toString;

	var hasOwn = class2type.hasOwnProperty;

	var support = {};



	var
		version = "2.2.4",

		// Define a local copy of jQuery
		jQuery = function( selector, context ) {

			// The jQuery object is actually just the init constructor 'enhanced'
			// Need init if jQuery is called (just allow error to be thrown if not included)
			return new jQuery.fn.init( selector, context );
		},

		// Support: Android<4.1
		// Make sure we trim BOM and NBSP
		rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

		// Matches dashed string for camelizing
		rmsPrefix = /^-ms-/,
		rdashAlpha = /-([\da-z])/gi,

		// Used by jQuery.camelCase as callback to replace()
		fcamelCase = function( all, letter ) {
			return letter.toUpperCase();
		};

	jQuery.fn = jQuery.prototype = {

		// The current version of jQuery being used
		jquery: version,

		constructor: jQuery,

		// Start with an empty selector
		selector: "",

		// The default length of a jQuery object is 0
		length: 0,

		toArray: function() {
			return slice.call( this );
		},

		// Get the Nth element in the matched element set OR
		// Get the whole matched element set as a clean array
		get: function( num ) {
			return num != null ?

				// Return just the one element from the set
				( num < 0 ? this[ num + this.length ] : this[ num ] ) :

				// Return all the elements in a clean array
				slice.call( this );
		},

		// Take an array of elements and push it onto the stack
		// (returning the new matched element set)
		pushStack: function( elems ) {

			// Build a new jQuery matched element set
			var ret = jQuery.merge( this.constructor(), elems );

			// Add the old object onto the stack (as a reference)
			ret.prevObject = this;
			ret.context = this.context;

			// Return the newly-formed element set
			return ret;
		},

		// Execute a callback for every element in the matched set.
		each: function( callback ) {
			return jQuery.each( this, callback );
		},

		map: function( callback ) {
			return this.pushStack( jQuery.map( this, function( elem, i ) {
				return callback.call( elem, i, elem );
			} ) );
		},

		slice: function() {
			return this.pushStack( slice.apply( this, arguments ) );
		},

		first: function() {
			return this.eq( 0 );
		},

		last: function() {
			return this.eq( -1 );
		},

		eq: function( i ) {
			var len = this.length,
				j = +i + ( i < 0 ? len : 0 );
			return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
		},

		end: function() {
			return this.prevObject || this.constructor();
		},

		// For internal use only.
		// Behaves like an Array's method, not like a jQuery method.
		push: push,
		sort: arr.sort,
		splice: arr.splice
	};

	jQuery.extend = jQuery.fn.extend = function() {
		var options, name, src, copy, copyIsArray, clone,
			target = arguments[ 0 ] || {},
			i = 1,
			length = arguments.length,
			deep = false;

		// Handle a deep copy situation
		if ( typeof target === "boolean" ) {
			deep = target;

			// Skip the boolean and the target
			target = arguments[ i ] || {};
			i++;
		}

		// Handle case when target is a string or something (possible in deep copy)
		if ( typeof target !== "object" && !jQuery.isFunction( target ) ) {
			target = {};
		}

		// Extend jQuery itself if only one argument is passed
		if ( i === length ) {
			target = this;
			i--;
		}

		for ( ; i < length; i++ ) {

			// Only deal with non-null/undefined values
			if ( ( options = arguments[ i ] ) != null ) {

				// Extend the base object
				for ( name in options ) {
					src = target[ name ];
					copy = options[ name ];

					// Prevent never-ending loop
					if ( target === copy ) {
						continue;
					}

					// Recurse if we're merging plain objects or arrays
					if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
						( copyIsArray = jQuery.isArray( copy ) ) ) ) {

						if ( copyIsArray ) {
							copyIsArray = false;
							clone = src && jQuery.isArray( src ) ? src : [];

						} else {
							clone = src && jQuery.isPlainObject( src ) ? src : {};
						}

						// Never move original objects, clone them
						target[ name ] = jQuery.extend( deep, clone, copy );

					// Don't bring in undefined values
					} else if ( copy !== undefined ) {
						target[ name ] = copy;
					}
				}
			}
		}

		// Return the modified object
		return target;
	};

	jQuery.extend( {

		// Unique for each copy of jQuery on the page
		expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

		// Assume jQuery is ready without the ready module
		isReady: true,

		error: function( msg ) {
			throw new Error( msg );
		},

		noop: function() {},

		isFunction: function( obj ) {
			return jQuery.type( obj ) === "function";
		},

		isArray: Array.isArray,

		isWindow: function( obj ) {
			return obj != null && obj === obj.window;
		},

		isNumeric: function( obj ) {

			// parseFloat NaNs numeric-cast false positives (null|true|false|"")
			// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
			// subtraction forces infinities to NaN
			// adding 1 corrects loss of precision from parseFloat (#15100)
			var realStringObj = obj && obj.toString();
			return !jQuery.isArray( obj ) && ( realStringObj - parseFloat( realStringObj ) + 1 ) >= 0;
		},

		isPlainObject: function( obj ) {
			var key;

			// Not plain objects:
			// - Any object or value whose internal [[Class]] property is not "[object Object]"
			// - DOM nodes
			// - window
			if ( jQuery.type( obj ) !== "object" || obj.nodeType || jQuery.isWindow( obj ) ) {
				return false;
			}

			// Not own constructor property must be Object
			if ( obj.constructor &&
					!hasOwn.call( obj, "constructor" ) &&
					!hasOwn.call( obj.constructor.prototype || {}, "isPrototypeOf" ) ) {
				return false;
			}

			// Own properties are enumerated firstly, so to speed up,
			// if last one is own, then all properties are own
			for ( key in obj ) {}

			return key === undefined || hasOwn.call( obj, key );
		},

		isEmptyObject: function( obj ) {
			var name;
			for ( name in obj ) {
				return false;
			}
			return true;
		},

		type: function( obj ) {
			if ( obj == null ) {
				return obj + "";
			}

			// Support: Android<4.0, iOS<6 (functionish RegExp)
			return typeof obj === "object" || typeof obj === "function" ?
				class2type[ toString.call( obj ) ] || "object" :
				typeof obj;
		},

		// Evaluates a script in a global context
		globalEval: function( code ) {
			var script,
				indirect = eval;

			code = jQuery.trim( code );

			if ( code ) {

				// If the code includes a valid, prologue position
				// strict mode pragma, execute code by injecting a
				// script tag into the document.
				if ( code.indexOf( "use strict" ) === 1 ) {
					script = document.createElement( "script" );
					script.text = code;
					document.head.appendChild( script ).parentNode.removeChild( script );
				} else {

					// Otherwise, avoid the DOM node creation, insertion
					// and removal by using an indirect global eval

					indirect( code );
				}
			}
		},

		// Convert dashed to camelCase; used by the css and data modules
		// Support: IE9-11+
		// Microsoft forgot to hump their vendor prefix (#9572)
		camelCase: function( string ) {
			return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
		},

		nodeName: function( elem, name ) {
			return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
		},

		each: function( obj, callback ) {
			var length, i = 0;

			if ( isArrayLike( obj ) ) {
				length = obj.length;
				for ( ; i < length; i++ ) {
					if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
						break;
					}
				}
			} else {
				for ( i in obj ) {
					if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
						break;
					}
				}
			}

			return obj;
		},

		// Support: Android<4.1
		trim: function( text ) {
			return text == null ?
				"" :
				( text + "" ).replace( rtrim, "" );
		},

		// results is for internal usage only
		makeArray: function( arr, results ) {
			var ret = results || [];

			if ( arr != null ) {
				if ( isArrayLike( Object( arr ) ) ) {
					jQuery.merge( ret,
						typeof arr === "string" ?
						[ arr ] : arr
					);
				} else {
					push.call( ret, arr );
				}
			}

			return ret;
		},

		inArray: function( elem, arr, i ) {
			return arr == null ? -1 : indexOf.call( arr, elem, i );
		},

		merge: function( first, second ) {
			var len = +second.length,
				j = 0,
				i = first.length;

			for ( ; j < len; j++ ) {
				first[ i++ ] = second[ j ];
			}

			first.length = i;

			return first;
		},

		grep: function( elems, callback, invert ) {
			var callbackInverse,
				matches = [],
				i = 0,
				length = elems.length,
				callbackExpect = !invert;

			// Go through the array, only saving the items
			// that pass the validator function
			for ( ; i < length; i++ ) {
				callbackInverse = !callback( elems[ i ], i );
				if ( callbackInverse !== callbackExpect ) {
					matches.push( elems[ i ] );
				}
			}

			return matches;
		},

		// arg is for internal usage only
		map: function( elems, callback, arg ) {
			var length, value,
				i = 0,
				ret = [];

			// Go through the array, translating each of the items to their new values
			if ( isArrayLike( elems ) ) {
				length = elems.length;
				for ( ; i < length; i++ ) {
					value = callback( elems[ i ], i, arg );

					if ( value != null ) {
						ret.push( value );
					}
				}

			// Go through every key on the object,
			} else {
				for ( i in elems ) {
					value = callback( elems[ i ], i, arg );

					if ( value != null ) {
						ret.push( value );
					}
				}
			}

			// Flatten any nested arrays
			return concat.apply( [], ret );
		},

		// A global GUID counter for objects
		guid: 1,

		// Bind a function to a context, optionally partially applying any
		// arguments.
		proxy: function( fn, context ) {
			var tmp, args, proxy;

			if ( typeof context === "string" ) {
				tmp = fn[ context ];
				context = fn;
				fn = tmp;
			}

			// Quick check to determine if target is callable, in the spec
			// this throws a TypeError, but we will just return undefined.
			if ( !jQuery.isFunction( fn ) ) {
				return undefined;
			}

			// Simulated bind
			args = slice.call( arguments, 2 );
			proxy = function() {
				return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
			};

			// Set the guid of unique handler to the same of original handler, so it can be removed
			proxy.guid = fn.guid = fn.guid || jQuery.guid++;

			return proxy;
		},

		now: Date.now,

		// jQuery.support is not used in Core but other projects attach their
		// properties to it so it needs to exist.
		support: support
	} );

	// JSHint would error on this code due to the Symbol not being defined in ES5.
	// Defining this global in .jshintrc would create a danger of using the global
	// unguarded in another place, it seems safer to just disable JSHint for these
	// three lines.
	/* jshint ignore: start */
	if ( typeof Symbol === "function" ) {
		jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
	}
	/* jshint ignore: end */

	// Populate the class2type map
	jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
	function( i, name ) {
		class2type[ "[object " + name + "]" ] = name.toLowerCase();
	} );

	function isArrayLike( obj ) {

		// Support: iOS 8.2 (not reproducible in simulator)
		// `in` check used to prevent JIT error (gh-2145)
		// hasOwn isn't used here due to false negatives
		// regarding Nodelist length in IE
		var length = !!obj && "length" in obj && obj.length,
			type = jQuery.type( obj );

		if ( type === "function" || jQuery.isWindow( obj ) ) {
			return false;
		}

		return type === "array" || length === 0 ||
			typeof length === "number" && length > 0 && ( length - 1 ) in obj;
	}
	var Sizzle =
	/*!
	 * Sizzle CSS Selector Engine v2.2.1
	 * http://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2015-10-17
	 */
	(function( window ) {

	var i,
		support,
		Expr,
		getText,
		isXML,
		tokenize,
		compile,
		select,
		outermostContext,
		sortInput,
		hasDuplicate,

		// Local document vars
		setDocument,
		document,
		docElem,
		documentIsHTML,
		rbuggyQSA,
		rbuggyMatches,
		matches,
		contains,

		// Instance-specific data
		expando = "sizzle" + 1 * new Date(),
		preferredDoc = window.document,
		dirruns = 0,
		done = 0,
		classCache = createCache(),
		tokenCache = createCache(),
		compilerCache = createCache(),
		sortOrder = function( a, b ) {
			if ( a === b ) {
				hasDuplicate = true;
			}
			return 0;
		},

		// General-purpose constants
		MAX_NEGATIVE = 1 << 31,

		// Instance methods
		hasOwn = ({}).hasOwnProperty,
		arr = [],
		pop = arr.pop,
		push_native = arr.push,
		push = arr.push,
		slice = arr.slice,
		// Use a stripped-down indexOf as it's faster than native
		// http://jsperf.com/thor-indexof-vs-for/5
		indexOf = function( list, elem ) {
			var i = 0,
				len = list.length;
			for ( ; i < len; i++ ) {
				if ( list[i] === elem ) {
					return i;
				}
			}
			return -1;
		},

		booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

		// Regular expressions

		// http://www.w3.org/TR/css3-selectors/#whitespace
		whitespace = "[\\x20\\t\\r\\n\\f]",

		// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
		identifier = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",

		// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
		attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
			// Operator (capture 2)
			"*([*^$|!~]?=)" + whitespace +
			// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
			"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
			"*\\]",

		pseudos = ":(" + identifier + ")(?:\\((" +
			// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
			// 1. quoted (capture 3; capture 4 or capture 5)
			"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
			// 2. simple (capture 6)
			"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
			// 3. anything else (capture 2)
			".*" +
			")\\)|)",

		// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
		rwhitespace = new RegExp( whitespace + "+", "g" ),
		rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

		rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
		rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

		rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

		rpseudo = new RegExp( pseudos ),
		ridentifier = new RegExp( "^" + identifier + "$" ),

		matchExpr = {
			"ID": new RegExp( "^#(" + identifier + ")" ),
			"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
			"TAG": new RegExp( "^(" + identifier + "|[*])" ),
			"ATTR": new RegExp( "^" + attributes ),
			"PSEUDO": new RegExp( "^" + pseudos ),
			"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
				"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
				"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
			"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
			// For use in libraries implementing .is()
			// We use this for POS matching in `select`
			"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
				whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
		},

		rinputs = /^(?:input|select|textarea|button)$/i,
		rheader = /^h\d$/i,

		rnative = /^[^{]+\{\s*\[native \w/,

		// Easily-parseable/retrievable ID or TAG or CLASS selectors
		rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

		rsibling = /[+~]/,
		rescape = /'|\\/g,

		// CSS escapes http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
		runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
		funescape = function( _, escaped, escapedWhitespace ) {
			var high = "0x" + escaped - 0x10000;
			// NaN means non-codepoint
			// Support: Firefox<24
			// Workaround erroneous numeric interpretation of +"0x"
			return high !== high || escapedWhitespace ?
				escaped :
				high < 0 ?
					// BMP codepoint
					String.fromCharCode( high + 0x10000 ) :
					// Supplemental Plane codepoint (surrogate pair)
					String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
		},

		// Used for iframes
		// See setDocument()
		// Removing the function wrapper causes a "Permission Denied"
		// error in IE
		unloadHandler = function() {
			setDocument();
		};

	// Optimize for push.apply( _, NodeList )
	try {
		push.apply(
			(arr = slice.call( preferredDoc.childNodes )),
			preferredDoc.childNodes
		);
		// Support: Android<4.0
		// Detect silently failing push.apply
		arr[ preferredDoc.childNodes.length ].nodeType;
	} catch ( e ) {
		push = { apply: arr.length ?

			// Leverage slice if possible
			function( target, els ) {
				push_native.apply( target, slice.call(els) );
			} :

			// Support: IE<9
			// Otherwise append directly
			function( target, els ) {
				var j = target.length,
					i = 0;
				// Can't trust NodeList.length
				while ( (target[j++] = els[i++]) ) {}
				target.length = j - 1;
			}
		};
	}

	function Sizzle( selector, context, results, seed ) {
		var m, i, elem, nid, nidselect, match, groups, newSelector,
			newContext = context && context.ownerDocument,

			// nodeType defaults to 9, since context defaults to document
			nodeType = context ? context.nodeType : 9;

		results = results || [];

		// Return early from calls with invalid selector or context
		if ( typeof selector !== "string" || !selector ||
			nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

			return results;
		}

		// Try to shortcut find operations (as opposed to filters) in HTML documents
		if ( !seed ) {

			if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
				setDocument( context );
			}
			context = context || document;

			if ( documentIsHTML ) {

				// If the selector is sufficiently simple, try using a "get*By*" DOM method
				// (excepting DocumentFragment context, where the methods don't exist)
				if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

					// ID selector
					if ( (m = match[1]) ) {

						// Document context
						if ( nodeType === 9 ) {
							if ( (elem = context.getElementById( m )) ) {

								// Support: IE, Opera, Webkit
								// TODO: identify versions
								// getElementById can match elements by name instead of ID
								if ( elem.id === m ) {
									results.push( elem );
									return results;
								}
							} else {
								return results;
							}

						// Element context
						} else {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( newContext && (elem = newContext.getElementById( m )) &&
								contains( context, elem ) &&
								elem.id === m ) {

								results.push( elem );
								return results;
							}
						}

					// Type selector
					} else if ( match[2] ) {
						push.apply( results, context.getElementsByTagName( selector ) );
						return results;

					// Class selector
					} else if ( (m = match[3]) && support.getElementsByClassName &&
						context.getElementsByClassName ) {

						push.apply( results, context.getElementsByClassName( m ) );
						return results;
					}
				}

				// Take advantage of querySelectorAll
				if ( support.qsa &&
					!compilerCache[ selector + " " ] &&
					(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {

					if ( nodeType !== 1 ) {
						newContext = context;
						newSelector = selector;

					// qSA looks outside Element context, which is not what we want
					// Thanks to Andrew Dupont for this workaround technique
					// Support: IE <=8
					// Exclude object elements
					} else if ( context.nodeName.toLowerCase() !== "object" ) {

						// Capture the context ID, setting it first if necessary
						if ( (nid = context.getAttribute( "id" )) ) {
							nid = nid.replace( rescape, "\\$&" );
						} else {
							context.setAttribute( "id", (nid = expando) );
						}

						// Prefix every selector in the list
						groups = tokenize( selector );
						i = groups.length;
						nidselect = ridentifier.test( nid ) ? "#" + nid : "[id='" + nid + "']";
						while ( i-- ) {
							groups[i] = nidselect + " " + toSelector( groups[i] );
						}
						newSelector = groups.join( "," );

						// Expand context for sibling selectors
						newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
							context;
					}

					if ( newSelector ) {
						try {
							push.apply( results,
								newContext.querySelectorAll( newSelector )
							);
							return results;
						} catch ( qsaError ) {
						} finally {
							if ( nid === expando ) {
								context.removeAttribute( "id" );
							}
						}
					}
				}
			}
		}

		// All others
		return select( selector.replace( rtrim, "$1" ), context, results, seed );
	}

	/**
	 * Create key-value caches of limited size
	 * @returns {function(string, object)} Returns the Object data after storing it on itself with
	 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
	 *	deleting the oldest entry
	 */
	function createCache() {
		var keys = [];

		function cache( key, value ) {
			// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
			if ( keys.push( key + " " ) > Expr.cacheLength ) {
				// Only keep the most recent entries
				delete cache[ keys.shift() ];
			}
			return (cache[ key + " " ] = value);
		}
		return cache;
	}

	/**
	 * Mark a function for special use by Sizzle
	 * @param {Function} fn The function to mark
	 */
	function markFunction( fn ) {
		fn[ expando ] = true;
		return fn;
	}

	/**
	 * Support testing using an element
	 * @param {Function} fn Passed the created div and expects a boolean result
	 */
	function assert( fn ) {
		var div = document.createElement("div");

		try {
			return !!fn( div );
		} catch (e) {
			return false;
		} finally {
			// Remove from its parent by default
			if ( div.parentNode ) {
				div.parentNode.removeChild( div );
			}
			// release memory in IE
			div = null;
		}
	}

	/**
	 * Adds the same handler for all of the specified attrs
	 * @param {String} attrs Pipe-separated list of attributes
	 * @param {Function} handler The method that will be applied
	 */
	function addHandle( attrs, handler ) {
		var arr = attrs.split("|"),
			i = arr.length;

		while ( i-- ) {
			Expr.attrHandle[ arr[i] ] = handler;
		}
	}

	/**
	 * Checks document order of two siblings
	 * @param {Element} a
	 * @param {Element} b
	 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
	 */
	function siblingCheck( a, b ) {
		var cur = b && a,
			diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
				( ~b.sourceIndex || MAX_NEGATIVE ) -
				( ~a.sourceIndex || MAX_NEGATIVE );

		// Use IE sourceIndex if available on both nodes
		if ( diff ) {
			return diff;
		}

		// Check if b follows a
		if ( cur ) {
			while ( (cur = cur.nextSibling) ) {
				if ( cur === b ) {
					return -1;
				}
			}
		}

		return a ? 1 : -1;
	}

	/**
	 * Returns a function to use in pseudos for input types
	 * @param {String} type
	 */
	function createInputPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === type;
		};
	}

	/**
	 * Returns a function to use in pseudos for buttons
	 * @param {String} type
	 */
	function createButtonPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return (name === "input" || name === "button") && elem.type === type;
		};
	}

	/**
	 * Returns a function to use in pseudos for positionals
	 * @param {Function} fn
	 */
	function createPositionalPseudo( fn ) {
		return markFunction(function( argument ) {
			argument = +argument;
			return markFunction(function( seed, matches ) {
				var j,
					matchIndexes = fn( [], seed.length, argument ),
					i = matchIndexes.length;

				// Match elements found at the specified indexes
				while ( i-- ) {
					if ( seed[ (j = matchIndexes[i]) ] ) {
						seed[j] = !(matches[j] = seed[j]);
					}
				}
			});
		});
	}

	/**
	 * Checks a node for validity as a Sizzle context
	 * @param {Element|Object=} context
	 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
	 */
	function testContext( context ) {
		return context && typeof context.getElementsByTagName !== "undefined" && context;
	}

	// Expose support vars for convenience
	support = Sizzle.support = {};

	/**
	 * Detects XML nodes
	 * @param {Element|Object} elem An element or a document
	 * @returns {Boolean} True iff elem is a non-HTML XML node
	 */
	isXML = Sizzle.isXML = function( elem ) {
		// documentElement is verified for cases where it doesn't yet exist
		// (such as loading iframes in IE - #4833)
		var documentElement = elem && (elem.ownerDocument || elem).documentElement;
		return documentElement ? documentElement.nodeName !== "HTML" : false;
	};

	/**
	 * Sets document-related variables once based on the current document
	 * @param {Element|Object} [doc] An element or document object to use to set the document
	 * @returns {Object} Returns the current document
	 */
	setDocument = Sizzle.setDocument = function( node ) {
		var hasCompare, parent,
			doc = node ? node.ownerDocument || node : preferredDoc;

		// Return early if doc is invalid or already selected
		if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
			return document;
		}

		// Update global variables
		document = doc;
		docElem = document.documentElement;
		documentIsHTML = !isXML( document );

		// Support: IE 9-11, Edge
		// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
		if ( (parent = document.defaultView) && parent.top !== parent ) {
			// Support: IE 11
			if ( parent.addEventListener ) {
				parent.addEventListener( "unload", unloadHandler, false );

			// Support: IE 9 - 10 only
			} else if ( parent.attachEvent ) {
				parent.attachEvent( "onunload", unloadHandler );
			}
		}

		/* Attributes
		---------------------------------------------------------------------- */

		// Support: IE<8
		// Verify that getAttribute really returns attributes and not properties
		// (excepting IE8 booleans)
		support.attributes = assert(function( div ) {
			div.className = "i";
			return !div.getAttribute("className");
		});

		/* getElement(s)By*
		---------------------------------------------------------------------- */

		// Check if getElementsByTagName("*") returns only elements
		support.getElementsByTagName = assert(function( div ) {
			div.appendChild( document.createComment("") );
			return !div.getElementsByTagName("*").length;
		});

		// Support: IE<9
		support.getElementsByClassName = rnative.test( document.getElementsByClassName );

		// Support: IE<10
		// Check if getElementById returns elements by name
		// The broken getElementById methods don't pick up programatically-set names,
		// so use a roundabout getElementsByName test
		support.getById = assert(function( div ) {
			docElem.appendChild( div ).id = expando;
			return !document.getElementsByName || !document.getElementsByName( expando ).length;
		});

		// ID find and filter
		if ( support.getById ) {
			Expr.find["ID"] = function( id, context ) {
				if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
					var m = context.getElementById( id );
					return m ? [ m ] : [];
				}
			};
			Expr.filter["ID"] = function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					return elem.getAttribute("id") === attrId;
				};
			};
		} else {
			// Support: IE6/7
			// getElementById is not reliable as a find shortcut
			delete Expr.find["ID"];

			Expr.filter["ID"] =  function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					var node = typeof elem.getAttributeNode !== "undefined" &&
						elem.getAttributeNode("id");
					return node && node.value === attrId;
				};
			};
		}

		// Tag
		Expr.find["TAG"] = support.getElementsByTagName ?
			function( tag, context ) {
				if ( typeof context.getElementsByTagName !== "undefined" ) {
					return context.getElementsByTagName( tag );

				// DocumentFragment nodes don't have gEBTN
				} else if ( support.qsa ) {
					return context.querySelectorAll( tag );
				}
			} :

			function( tag, context ) {
				var elem,
					tmp = [],
					i = 0,
					// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
					results = context.getElementsByTagName( tag );

				// Filter out possible comments
				if ( tag === "*" ) {
					while ( (elem = results[i++]) ) {
						if ( elem.nodeType === 1 ) {
							tmp.push( elem );
						}
					}

					return tmp;
				}
				return results;
			};

		// Class
		Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
			if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
				return context.getElementsByClassName( className );
			}
		};

		/* QSA/matchesSelector
		---------------------------------------------------------------------- */

		// QSA and matchesSelector support

		// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
		rbuggyMatches = [];

		// qSa(:focus) reports false when true (Chrome 21)
		// We allow this because of a bug in IE8/9 that throws an error
		// whenever `document.activeElement` is accessed on an iframe
		// So, we allow :focus to pass through QSA all the time to avoid the IE error
		// See http://bugs.jquery.com/ticket/13378
		rbuggyQSA = [];

		if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
			// Build QSA regex
			// Regex strategy adopted from Diego Perini
			assert(function( div ) {
				// Select is set to empty string on purpose
				// This is to test IE's treatment of not explicitly
				// setting a boolean content attribute,
				// since its presence should be enough
				// http://bugs.jquery.com/ticket/12359
				docElem.appendChild( div ).innerHTML = "<a id='" + expando + "'></a>" +
					"<select id='" + expando + "-\r\\' msallowcapture=''>" +
					"<option selected=''></option></select>";

				// Support: IE8, Opera 11-12.16
				// Nothing should be selected when empty strings follow ^= or $= or *=
				// The test attribute must be unknown in Opera but "safe" for WinRT
				// http://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
				if ( div.querySelectorAll("[msallowcapture^='']").length ) {
					rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
				}

				// Support: IE8
				// Boolean attributes and "value" are not treated correctly
				if ( !div.querySelectorAll("[selected]").length ) {
					rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
				}

				// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
				if ( !div.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
					rbuggyQSA.push("~=");
				}

				// Webkit/Opera - :checked should return selected option elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				// IE8 throws error here and will not see later tests
				if ( !div.querySelectorAll(":checked").length ) {
					rbuggyQSA.push(":checked");
				}

				// Support: Safari 8+, iOS 8+
				// https://bugs.webkit.org/show_bug.cgi?id=136851
				// In-page `selector#id sibing-combinator selector` fails
				if ( !div.querySelectorAll( "a#" + expando + "+*" ).length ) {
					rbuggyQSA.push(".#.+[+~]");
				}
			});

			assert(function( div ) {
				// Support: Windows 8 Native Apps
				// The type and name attributes are restricted during .innerHTML assignment
				var input = document.createElement("input");
				input.setAttribute( "type", "hidden" );
				div.appendChild( input ).setAttribute( "name", "D" );

				// Support: IE8
				// Enforce case-sensitivity of name attribute
				if ( div.querySelectorAll("[name=d]").length ) {
					rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
				}

				// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
				// IE8 throws error here and will not see later tests
				if ( !div.querySelectorAll(":enabled").length ) {
					rbuggyQSA.push( ":enabled", ":disabled" );
				}

				// Opera 10-11 does not throw on post-comma invalid pseudos
				div.querySelectorAll("*,:x");
				rbuggyQSA.push(",.*:");
			});
		}

		if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
			docElem.webkitMatchesSelector ||
			docElem.mozMatchesSelector ||
			docElem.oMatchesSelector ||
			docElem.msMatchesSelector) )) ) {

			assert(function( div ) {
				// Check to see if it's possible to do matchesSelector
				// on a disconnected node (IE 9)
				support.disconnectedMatch = matches.call( div, "div" );

				// This should fail with an exception
				// Gecko does not error, returns false instead
				matches.call( div, "[s!='']:x" );
				rbuggyMatches.push( "!=", pseudos );
			});
		}

		rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
		rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

		/* Contains
		---------------------------------------------------------------------- */
		hasCompare = rnative.test( docElem.compareDocumentPosition );

		// Element contains another
		// Purposefully self-exclusive
		// As in, an element does not contain itself
		contains = hasCompare || rnative.test( docElem.contains ) ?
			function( a, b ) {
				var adown = a.nodeType === 9 ? a.documentElement : a,
					bup = b && b.parentNode;
				return a === bup || !!( bup && bup.nodeType === 1 && (
					adown.contains ?
						adown.contains( bup ) :
						a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
				));
			} :
			function( a, b ) {
				if ( b ) {
					while ( (b = b.parentNode) ) {
						if ( b === a ) {
							return true;
						}
					}
				}
				return false;
			};

		/* Sorting
		---------------------------------------------------------------------- */

		// Document order sorting
		sortOrder = hasCompare ?
		function( a, b ) {

			// Flag for duplicate removal
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}

			// Sort on method existence if only one input has compareDocumentPosition
			var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
			if ( compare ) {
				return compare;
			}

			// Calculate position if both inputs belong to the same document
			compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
				a.compareDocumentPosition( b ) :

				// Otherwise we know they are disconnected
				1;

			// Disconnected nodes
			if ( compare & 1 ||
				(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

				// Choose the first element that is related to our preferred document
				if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
					return -1;
				}
				if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
					return 1;
				}

				// Maintain original order
				return sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;
			}

			return compare & 4 ? -1 : 1;
		} :
		function( a, b ) {
			// Exit early if the nodes are identical
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}

			var cur,
				i = 0,
				aup = a.parentNode,
				bup = b.parentNode,
				ap = [ a ],
				bp = [ b ];

			// Parentless nodes are either documents or disconnected
			if ( !aup || !bup ) {
				return a === document ? -1 :
					b === document ? 1 :
					aup ? -1 :
					bup ? 1 :
					sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;

			// If the nodes are siblings, we can do a quick check
			} else if ( aup === bup ) {
				return siblingCheck( a, b );
			}

			// Otherwise we need full lists of their ancestors for comparison
			cur = a;
			while ( (cur = cur.parentNode) ) {
				ap.unshift( cur );
			}
			cur = b;
			while ( (cur = cur.parentNode) ) {
				bp.unshift( cur );
			}

			// Walk down the tree looking for a discrepancy
			while ( ap[i] === bp[i] ) {
				i++;
			}

			return i ?
				// Do a sibling check if the nodes have a common ancestor
				siblingCheck( ap[i], bp[i] ) :

				// Otherwise nodes in our document sort first
				ap[i] === preferredDoc ? -1 :
				bp[i] === preferredDoc ? 1 :
				0;
		};

		return document;
	};

	Sizzle.matches = function( expr, elements ) {
		return Sizzle( expr, null, null, elements );
	};

	Sizzle.matchesSelector = function( elem, expr ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}

		// Make sure that attribute selectors are quoted
		expr = expr.replace( rattributeQuotes, "='$1']" );

		if ( support.matchesSelector && documentIsHTML &&
			!compilerCache[ expr + " " ] &&
			( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
			( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

			try {
				var ret = matches.call( elem, expr );

				// IE 9's matchesSelector returns false on disconnected nodes
				if ( ret || support.disconnectedMatch ||
						// As well, disconnected nodes are said to be in a document
						// fragment in IE 9
						elem.document && elem.document.nodeType !== 11 ) {
					return ret;
				}
			} catch (e) {}
		}

		return Sizzle( expr, document, null, [ elem ] ).length > 0;
	};

	Sizzle.contains = function( context, elem ) {
		// Set document vars if needed
		if ( ( context.ownerDocument || context ) !== document ) {
			setDocument( context );
		}
		return contains( context, elem );
	};

	Sizzle.attr = function( elem, name ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}

		var fn = Expr.attrHandle[ name.toLowerCase() ],
			// Don't get fooled by Object.prototype properties (jQuery #13807)
			val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
				fn( elem, name, !documentIsHTML ) :
				undefined;

		return val !== undefined ?
			val :
			support.attributes || !documentIsHTML ?
				elem.getAttribute( name ) :
				(val = elem.getAttributeNode(name)) && val.specified ?
					val.value :
					null;
	};

	Sizzle.error = function( msg ) {
		throw new Error( "Syntax error, unrecognized expression: " + msg );
	};

	/**
	 * Document sorting and removing duplicates
	 * @param {ArrayLike} results
	 */
	Sizzle.uniqueSort = function( results ) {
		var elem,
			duplicates = [],
			j = 0,
			i = 0;

		// Unless we *know* we can detect duplicates, assume their presence
		hasDuplicate = !support.detectDuplicates;
		sortInput = !support.sortStable && results.slice( 0 );
		results.sort( sortOrder );

		if ( hasDuplicate ) {
			while ( (elem = results[i++]) ) {
				if ( elem === results[ i ] ) {
					j = duplicates.push( i );
				}
			}
			while ( j-- ) {
				results.splice( duplicates[ j ], 1 );
			}
		}

		// Clear input after sorting to release objects
		// See https://github.com/jquery/sizzle/pull/225
		sortInput = null;

		return results;
	};

	/**
	 * Utility function for retrieving the text value of an array of DOM nodes
	 * @param {Array|Element} elem
	 */
	getText = Sizzle.getText = function( elem ) {
		var node,
			ret = "",
			i = 0,
			nodeType = elem.nodeType;

		if ( !nodeType ) {
			// If no nodeType, this is expected to be an array
			while ( (node = elem[i++]) ) {
				// Do not traverse comment nodes
				ret += getText( node );
			}
		} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
			// Use textContent for elements
			// innerText usage removed for consistency of new lines (jQuery #11153)
			if ( typeof elem.textContent === "string" ) {
				return elem.textContent;
			} else {
				// Traverse its children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					ret += getText( elem );
				}
			}
		} else if ( nodeType === 3 || nodeType === 4 ) {
			return elem.nodeValue;
		}
		// Do not include comment or processing instruction nodes

		return ret;
	};

	Expr = Sizzle.selectors = {

		// Can be adjusted by the user
		cacheLength: 50,

		createPseudo: markFunction,

		match: matchExpr,

		attrHandle: {},

		find: {},

		relative: {
			">": { dir: "parentNode", first: true },
			" ": { dir: "parentNode" },
			"+": { dir: "previousSibling", first: true },
			"~": { dir: "previousSibling" }
		},

		preFilter: {
			"ATTR": function( match ) {
				match[1] = match[1].replace( runescape, funescape );

				// Move the given value to match[3] whether quoted or unquoted
				match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

				if ( match[2] === "~=" ) {
					match[3] = " " + match[3] + " ";
				}

				return match.slice( 0, 4 );
			},

			"CHILD": function( match ) {
				/* matches from matchExpr["CHILD"]
					1 type (only|nth|...)
					2 what (child|of-type)
					3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
					4 xn-component of xn+y argument ([+-]?\d*n|)
					5 sign of xn-component
					6 x of xn-component
					7 sign of y-component
					8 y of y-component
				*/
				match[1] = match[1].toLowerCase();

				if ( match[1].slice( 0, 3 ) === "nth" ) {
					// nth-* requires argument
					if ( !match[3] ) {
						Sizzle.error( match[0] );
					}

					// numeric x and y parameters for Expr.filter.CHILD
					// remember that false/true cast respectively to 0/1
					match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
					match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

				// other types prohibit arguments
				} else if ( match[3] ) {
					Sizzle.error( match[0] );
				}

				return match;
			},

			"PSEUDO": function( match ) {
				var excess,
					unquoted = !match[6] && match[2];

				if ( matchExpr["CHILD"].test( match[0] ) ) {
					return null;
				}

				// Accept quoted arguments as-is
				if ( match[3] ) {
					match[2] = match[4] || match[5] || "";

				// Strip excess characters from unquoted arguments
				} else if ( unquoted && rpseudo.test( unquoted ) &&
					// Get excess from tokenize (recursively)
					(excess = tokenize( unquoted, true )) &&
					// advance to the next closing parenthesis
					(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

					// excess is a negative index
					match[0] = match[0].slice( 0, excess );
					match[2] = unquoted.slice( 0, excess );
				}

				// Return only captures needed by the pseudo filter method (type and argument)
				return match.slice( 0, 3 );
			}
		},

		filter: {

			"TAG": function( nodeNameSelector ) {
				var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
				return nodeNameSelector === "*" ?
					function() { return true; } :
					function( elem ) {
						return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
					};
			},

			"CLASS": function( className ) {
				var pattern = classCache[ className + " " ];

				return pattern ||
					(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
					classCache( className, function( elem ) {
						return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
					});
			},

			"ATTR": function( name, operator, check ) {
				return function( elem ) {
					var result = Sizzle.attr( elem, name );

					if ( result == null ) {
						return operator === "!=";
					}
					if ( !operator ) {
						return true;
					}

					result += "";

					return operator === "=" ? result === check :
						operator === "!=" ? result !== check :
						operator === "^=" ? check && result.indexOf( check ) === 0 :
						operator === "*=" ? check && result.indexOf( check ) > -1 :
						operator === "$=" ? check && result.slice( -check.length ) === check :
						operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
						operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
						false;
				};
			},

			"CHILD": function( type, what, argument, first, last ) {
				var simple = type.slice( 0, 3 ) !== "nth",
					forward = type.slice( -4 ) !== "last",
					ofType = what === "of-type";

				return first === 1 && last === 0 ?

					// Shortcut for :nth-*(n)
					function( elem ) {
						return !!elem.parentNode;
					} :

					function( elem, context, xml ) {
						var cache, uniqueCache, outerCache, node, nodeIndex, start,
							dir = simple !== forward ? "nextSibling" : "previousSibling",
							parent = elem.parentNode,
							name = ofType && elem.nodeName.toLowerCase(),
							useCache = !xml && !ofType,
							diff = false;

						if ( parent ) {

							// :(first|last|only)-(child|of-type)
							if ( simple ) {
								while ( dir ) {
									node = elem;
									while ( (node = node[ dir ]) ) {
										if ( ofType ?
											node.nodeName.toLowerCase() === name :
											node.nodeType === 1 ) {

											return false;
										}
									}
									// Reverse direction for :only-* (if we haven't yet done so)
									start = dir = type === "only" && !start && "nextSibling";
								}
								return true;
							}

							start = [ forward ? parent.firstChild : parent.lastChild ];

							// non-xml :nth-child(...) stores cache data on `parent`
							if ( forward && useCache ) {

								// Seek `elem` from a previously-cached index

								// ...in a gzip-friendly way
								node = parent;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex && cache[ 2 ];
								node = nodeIndex && parent.childNodes[ nodeIndex ];

								while ( (node = ++nodeIndex && node && node[ dir ] ||

									// Fallback to seeking `elem` from the start
									(diff = nodeIndex = 0) || start.pop()) ) {

									// When found, cache indexes on `parent` and break
									if ( node.nodeType === 1 && ++diff && node === elem ) {
										uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
										break;
									}
								}

							} else {
								// Use previously-cached element index if available
								if ( useCache ) {
									// ...in a gzip-friendly way
									node = elem;
									outerCache = node[ expando ] || (node[ expando ] = {});

									// Support: IE <9 only
									// Defend against cloned attroperties (jQuery gh-1709)
									uniqueCache = outerCache[ node.uniqueID ] ||
										(outerCache[ node.uniqueID ] = {});

									cache = uniqueCache[ type ] || [];
									nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
									diff = nodeIndex;
								}

								// xml :nth-child(...)
								// or :nth-last-child(...) or :nth(-last)?-of-type(...)
								if ( diff === false ) {
									// Use the same loop as above to seek `elem` from the start
									while ( (node = ++nodeIndex && node && node[ dir ] ||
										(diff = nodeIndex = 0) || start.pop()) ) {

										if ( ( ofType ?
											node.nodeName.toLowerCase() === name :
											node.nodeType === 1 ) &&
											++diff ) {

											// Cache the index of each encountered element
											if ( useCache ) {
												outerCache = node[ expando ] || (node[ expando ] = {});

												// Support: IE <9 only
												// Defend against cloned attroperties (jQuery gh-1709)
												uniqueCache = outerCache[ node.uniqueID ] ||
													(outerCache[ node.uniqueID ] = {});

												uniqueCache[ type ] = [ dirruns, diff ];
											}

											if ( node === elem ) {
												break;
											}
										}
									}
								}
							}

							// Incorporate the offset, then check against cycle size
							diff -= last;
							return diff === first || ( diff % first === 0 && diff / first >= 0 );
						}
					};
			},

			"PSEUDO": function( pseudo, argument ) {
				// pseudo-class names are case-insensitive
				// http://www.w3.org/TR/selectors/#pseudo-classes
				// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
				// Remember that setFilters inherits from pseudos
				var args,
					fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
						Sizzle.error( "unsupported pseudo: " + pseudo );

				// The user may use createPseudo to indicate that
				// arguments are needed to create the filter function
				// just as Sizzle does
				if ( fn[ expando ] ) {
					return fn( argument );
				}

				// But maintain support for old signatures
				if ( fn.length > 1 ) {
					args = [ pseudo, pseudo, "", argument ];
					return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
						markFunction(function( seed, matches ) {
							var idx,
								matched = fn( seed, argument ),
								i = matched.length;
							while ( i-- ) {
								idx = indexOf( seed, matched[i] );
								seed[ idx ] = !( matches[ idx ] = matched[i] );
							}
						}) :
						function( elem ) {
							return fn( elem, 0, args );
						};
				}

				return fn;
			}
		},

		pseudos: {
			// Potentially complex pseudos
			"not": markFunction(function( selector ) {
				// Trim the selector passed to compile
				// to avoid treating leading and trailing
				// spaces as combinators
				var input = [],
					results = [],
					matcher = compile( selector.replace( rtrim, "$1" ) );

				return matcher[ expando ] ?
					markFunction(function( seed, matches, context, xml ) {
						var elem,
							unmatched = matcher( seed, null, xml, [] ),
							i = seed.length;

						// Match elements unmatched by `matcher`
						while ( i-- ) {
							if ( (elem = unmatched[i]) ) {
								seed[i] = !(matches[i] = elem);
							}
						}
					}) :
					function( elem, context, xml ) {
						input[0] = elem;
						matcher( input, null, xml, results );
						// Don't keep the element (issue #299)
						input[0] = null;
						return !results.pop();
					};
			}),

			"has": markFunction(function( selector ) {
				return function( elem ) {
					return Sizzle( selector, elem ).length > 0;
				};
			}),

			"contains": markFunction(function( text ) {
				text = text.replace( runescape, funescape );
				return function( elem ) {
					return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
				};
			}),

			// "Whether an element is represented by a :lang() selector
			// is based solely on the element's language value
			// being equal to the identifier C,
			// or beginning with the identifier C immediately followed by "-".
			// The matching of C against the element's language value is performed case-insensitively.
			// The identifier C does not have to be a valid language name."
			// http://www.w3.org/TR/selectors/#lang-pseudo
			"lang": markFunction( function( lang ) {
				// lang value must be a valid identifier
				if ( !ridentifier.test(lang || "") ) {
					Sizzle.error( "unsupported lang: " + lang );
				}
				lang = lang.replace( runescape, funescape ).toLowerCase();
				return function( elem ) {
					var elemLang;
					do {
						if ( (elemLang = documentIsHTML ?
							elem.lang :
							elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

							elemLang = elemLang.toLowerCase();
							return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
						}
					} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
					return false;
				};
			}),

			// Miscellaneous
			"target": function( elem ) {
				var hash = window.location && window.location.hash;
				return hash && hash.slice( 1 ) === elem.id;
			},

			"root": function( elem ) {
				return elem === docElem;
			},

			"focus": function( elem ) {
				return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
			},

			// Boolean properties
			"enabled": function( elem ) {
				return elem.disabled === false;
			},

			"disabled": function( elem ) {
				return elem.disabled === true;
			},

			"checked": function( elem ) {
				// In CSS3, :checked should return both checked and selected elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				var nodeName = elem.nodeName.toLowerCase();
				return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
			},

			"selected": function( elem ) {
				// Accessing this property makes selected-by-default
				// options in Safari work properly
				if ( elem.parentNode ) {
					elem.parentNode.selectedIndex;
				}

				return elem.selected === true;
			},

			// Contents
			"empty": function( elem ) {
				// http://www.w3.org/TR/selectors/#empty-pseudo
				// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
				//   but not by others (comment: 8; processing instruction: 7; etc.)
				// nodeType < 6 works because attributes (2) do not appear as children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					if ( elem.nodeType < 6 ) {
						return false;
					}
				}
				return true;
			},

			"parent": function( elem ) {
				return !Expr.pseudos["empty"]( elem );
			},

			// Element/input types
			"header": function( elem ) {
				return rheader.test( elem.nodeName );
			},

			"input": function( elem ) {
				return rinputs.test( elem.nodeName );
			},

			"button": function( elem ) {
				var name = elem.nodeName.toLowerCase();
				return name === "input" && elem.type === "button" || name === "button";
			},

			"text": function( elem ) {
				var attr;
				return elem.nodeName.toLowerCase() === "input" &&
					elem.type === "text" &&

					// Support: IE<8
					// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
					( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
			},

			// Position-in-collection
			"first": createPositionalPseudo(function() {
				return [ 0 ];
			}),

			"last": createPositionalPseudo(function( matchIndexes, length ) {
				return [ length - 1 ];
			}),

			"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
				return [ argument < 0 ? argument + length : argument ];
			}),

			"even": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 0;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"odd": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 1;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; --i >= 0; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; ++i < length; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			})
		}
	};

	Expr.pseudos["nth"] = Expr.pseudos["eq"];

	// Add button/input type pseudos
	for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
		Expr.pseudos[ i ] = createInputPseudo( i );
	}
	for ( i in { submit: true, reset: true } ) {
		Expr.pseudos[ i ] = createButtonPseudo( i );
	}

	// Easy API for creating new setFilters
	function setFilters() {}
	setFilters.prototype = Expr.filters = Expr.pseudos;
	Expr.setFilters = new setFilters();

	tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
		var matched, match, tokens, type,
			soFar, groups, preFilters,
			cached = tokenCache[ selector + " " ];

		if ( cached ) {
			return parseOnly ? 0 : cached.slice( 0 );
		}

		soFar = selector;
		groups = [];
		preFilters = Expr.preFilter;

		while ( soFar ) {

			// Comma and first run
			if ( !matched || (match = rcomma.exec( soFar )) ) {
				if ( match ) {
					// Don't consume trailing commas as valid
					soFar = soFar.slice( match[0].length ) || soFar;
				}
				groups.push( (tokens = []) );
			}

			matched = false;

			// Combinators
			if ( (match = rcombinators.exec( soFar )) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					// Cast descendant combinators to space
					type: match[0].replace( rtrim, " " )
				});
				soFar = soFar.slice( matched.length );
			}

			// Filters
			for ( type in Expr.filter ) {
				if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
					(match = preFilters[ type ]( match ))) ) {
					matched = match.shift();
					tokens.push({
						value: matched,
						type: type,
						matches: match
					});
					soFar = soFar.slice( matched.length );
				}
			}

			if ( !matched ) {
				break;
			}
		}

		// Return the length of the invalid excess
		// if we're just parsing
		// Otherwise, throw an error or return tokens
		return parseOnly ?
			soFar.length :
			soFar ?
				Sizzle.error( selector ) :
				// Cache the tokens
				tokenCache( selector, groups ).slice( 0 );
	};

	function toSelector( tokens ) {
		var i = 0,
			len = tokens.length,
			selector = "";
		for ( ; i < len; i++ ) {
			selector += tokens[i].value;
		}
		return selector;
	}

	function addCombinator( matcher, combinator, base ) {
		var dir = combinator.dir,
			checkNonElements = base && dir === "parentNode",
			doneName = done++;

		return combinator.first ?
			// Check against closest ancestor/preceding element
			function( elem, context, xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						return matcher( elem, context, xml );
					}
				}
			} :

			// Check against all ancestor/preceding elements
			function( elem, context, xml ) {
				var oldCache, uniqueCache, outerCache,
					newCache = [ dirruns, doneName ];

				// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
				if ( xml ) {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							if ( matcher( elem, context, xml ) ) {
								return true;
							}
						}
					}
				} else {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							outerCache = elem[ expando ] || (elem[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

							if ( (oldCache = uniqueCache[ dir ]) &&
								oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

								// Assign to newCache so results back-propagate to previous elements
								return (newCache[ 2 ] = oldCache[ 2 ]);
							} else {
								// Reuse newcache so results back-propagate to previous elements
								uniqueCache[ dir ] = newCache;

								// A match means we're done; a fail means we have to keep checking
								if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
									return true;
								}
							}
						}
					}
				}
			};
	}

	function elementMatcher( matchers ) {
		return matchers.length > 1 ?
			function( elem, context, xml ) {
				var i = matchers.length;
				while ( i-- ) {
					if ( !matchers[i]( elem, context, xml ) ) {
						return false;
					}
				}
				return true;
			} :
			matchers[0];
	}

	function multipleContexts( selector, contexts, results ) {
		var i = 0,
			len = contexts.length;
		for ( ; i < len; i++ ) {
			Sizzle( selector, contexts[i], results );
		}
		return results;
	}

	function condense( unmatched, map, filter, context, xml ) {
		var elem,
			newUnmatched = [],
			i = 0,
			len = unmatched.length,
			mapped = map != null;

		for ( ; i < len; i++ ) {
			if ( (elem = unmatched[i]) ) {
				if ( !filter || filter( elem, context, xml ) ) {
					newUnmatched.push( elem );
					if ( mapped ) {
						map.push( i );
					}
				}
			}
		}

		return newUnmatched;
	}

	function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
		if ( postFilter && !postFilter[ expando ] ) {
			postFilter = setMatcher( postFilter );
		}
		if ( postFinder && !postFinder[ expando ] ) {
			postFinder = setMatcher( postFinder, postSelector );
		}
		return markFunction(function( seed, results, context, xml ) {
			var temp, i, elem,
				preMap = [],
				postMap = [],
				preexisting = results.length,

				// Get initial elements from seed or context
				elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

				// Prefilter to get matcher input, preserving a map for seed-results synchronization
				matcherIn = preFilter && ( seed || !selector ) ?
					condense( elems, preMap, preFilter, context, xml ) :
					elems,

				matcherOut = matcher ?
					// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
					postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

						// ...intermediate processing is necessary
						[] :

						// ...otherwise use results directly
						results :
					matcherIn;

			// Find primary matches
			if ( matcher ) {
				matcher( matcherIn, matcherOut, context, xml );
			}

			// Apply postFilter
			if ( postFilter ) {
				temp = condense( matcherOut, postMap );
				postFilter( temp, [], context, xml );

				// Un-match failing elements by moving them back to matcherIn
				i = temp.length;
				while ( i-- ) {
					if ( (elem = temp[i]) ) {
						matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
					}
				}
			}

			if ( seed ) {
				if ( postFinder || preFilter ) {
					if ( postFinder ) {
						// Get the final matcherOut by condensing this intermediate into postFinder contexts
						temp = [];
						i = matcherOut.length;
						while ( i-- ) {
							if ( (elem = matcherOut[i]) ) {
								// Restore matcherIn since elem is not yet a final match
								temp.push( (matcherIn[i] = elem) );
							}
						}
						postFinder( null, (matcherOut = []), temp, xml );
					}

					// Move matched elements from seed to results to keep them synchronized
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) &&
							(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

							seed[temp] = !(results[temp] = elem);
						}
					}
				}

			// Add elements to results, through postFinder if defined
			} else {
				matcherOut = condense(
					matcherOut === results ?
						matcherOut.splice( preexisting, matcherOut.length ) :
						matcherOut
				);
				if ( postFinder ) {
					postFinder( null, results, matcherOut, xml );
				} else {
					push.apply( results, matcherOut );
				}
			}
		});
	}

	function matcherFromTokens( tokens ) {
		var checkContext, matcher, j,
			len = tokens.length,
			leadingRelative = Expr.relative[ tokens[0].type ],
			implicitRelative = leadingRelative || Expr.relative[" "],
			i = leadingRelative ? 1 : 0,

			// The foundational matcher ensures that elements are reachable from top-level context(s)
			matchContext = addCombinator( function( elem ) {
				return elem === checkContext;
			}, implicitRelative, true ),
			matchAnyContext = addCombinator( function( elem ) {
				return indexOf( checkContext, elem ) > -1;
			}, implicitRelative, true ),
			matchers = [ function( elem, context, xml ) {
				var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
					(checkContext = context).nodeType ?
						matchContext( elem, context, xml ) :
						matchAnyContext( elem, context, xml ) );
				// Avoid hanging onto element (issue #299)
				checkContext = null;
				return ret;
			} ];

		for ( ; i < len; i++ ) {
			if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
				matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
			} else {
				matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

				// Return special upon seeing a positional matcher
				if ( matcher[ expando ] ) {
					// Find the next relative operator (if any) for proper handling
					j = ++i;
					for ( ; j < len; j++ ) {
						if ( Expr.relative[ tokens[j].type ] ) {
							break;
						}
					}
					return setMatcher(
						i > 1 && elementMatcher( matchers ),
						i > 1 && toSelector(
							// If the preceding token was a descendant combinator, insert an implicit any-element `*`
							tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
						).replace( rtrim, "$1" ),
						matcher,
						i < j && matcherFromTokens( tokens.slice( i, j ) ),
						j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
						j < len && toSelector( tokens )
					);
				}
				matchers.push( matcher );
			}
		}

		return elementMatcher( matchers );
	}

	function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
		var bySet = setMatchers.length > 0,
			byElement = elementMatchers.length > 0,
			superMatcher = function( seed, context, xml, results, outermost ) {
				var elem, j, matcher,
					matchedCount = 0,
					i = "0",
					unmatched = seed && [],
					setMatched = [],
					contextBackup = outermostContext,
					// We must always have either seed elements or outermost context
					elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
					// Use integer dirruns iff this is the outermost matcher
					dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
					len = elems.length;

				if ( outermost ) {
					outermostContext = context === document || context || outermost;
				}

				// Add elements passing elementMatchers directly to results
				// Support: IE<9, Safari
				// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
				for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
					if ( byElement && elem ) {
						j = 0;
						if ( !context && elem.ownerDocument !== document ) {
							setDocument( elem );
							xml = !documentIsHTML;
						}
						while ( (matcher = elementMatchers[j++]) ) {
							if ( matcher( elem, context || document, xml) ) {
								results.push( elem );
								break;
							}
						}
						if ( outermost ) {
							dirruns = dirrunsUnique;
						}
					}

					// Track unmatched elements for set filters
					if ( bySet ) {
						// They will have gone through all possible matchers
						if ( (elem = !matcher && elem) ) {
							matchedCount--;
						}

						// Lengthen the array for every element, matched or not
						if ( seed ) {
							unmatched.push( elem );
						}
					}
				}

				// `i` is now the count of elements visited above, and adding it to `matchedCount`
				// makes the latter nonnegative.
				matchedCount += i;

				// Apply set filters to unmatched elements
				// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
				// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
				// no element matchers and no seed.
				// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
				// case, which will result in a "00" `matchedCount` that differs from `i` but is also
				// numerically zero.
				if ( bySet && i !== matchedCount ) {
					j = 0;
					while ( (matcher = setMatchers[j++]) ) {
						matcher( unmatched, setMatched, context, xml );
					}

					if ( seed ) {
						// Reintegrate element matches to eliminate the need for sorting
						if ( matchedCount > 0 ) {
							while ( i-- ) {
								if ( !(unmatched[i] || setMatched[i]) ) {
									setMatched[i] = pop.call( results );
								}
							}
						}

						// Discard index placeholder values to get only actual matches
						setMatched = condense( setMatched );
					}

					// Add matches to results
					push.apply( results, setMatched );

					// Seedless set matches succeeding multiple successful matchers stipulate sorting
					if ( outermost && !seed && setMatched.length > 0 &&
						( matchedCount + setMatchers.length ) > 1 ) {

						Sizzle.uniqueSort( results );
					}
				}

				// Override manipulation of globals by nested matchers
				if ( outermost ) {
					dirruns = dirrunsUnique;
					outermostContext = contextBackup;
				}

				return unmatched;
			};

		return bySet ?
			markFunction( superMatcher ) :
			superMatcher;
	}

	compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
		var i,
			setMatchers = [],
			elementMatchers = [],
			cached = compilerCache[ selector + " " ];

		if ( !cached ) {
			// Generate a function of recursive functions that can be used to check each element
			if ( !match ) {
				match = tokenize( selector );
			}
			i = match.length;
			while ( i-- ) {
				cached = matcherFromTokens( match[i] );
				if ( cached[ expando ] ) {
					setMatchers.push( cached );
				} else {
					elementMatchers.push( cached );
				}
			}

			// Cache the compiled function
			cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

			// Save selector and tokenization
			cached.selector = selector;
		}
		return cached;
	};

	/**
	 * A low-level selection function that works with Sizzle's compiled
	 *  selector functions
	 * @param {String|Function} selector A selector or a pre-compiled
	 *  selector function built with Sizzle.compile
	 * @param {Element} context
	 * @param {Array} [results]
	 * @param {Array} [seed] A set of elements to match against
	 */
	select = Sizzle.select = function( selector, context, results, seed ) {
		var i, tokens, token, type, find,
			compiled = typeof selector === "function" && selector,
			match = !seed && tokenize( (selector = compiled.selector || selector) );

		results = results || [];

		// Try to minimize operations if there is only one selector in the list and no seed
		// (the latter of which guarantees us context)
		if ( match.length === 1 ) {

			// Reduce context if the leading compound selector is an ID
			tokens = match[0] = match[0].slice( 0 );
			if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
					support.getById && context.nodeType === 9 && documentIsHTML &&
					Expr.relative[ tokens[1].type ] ) {

				context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
				if ( !context ) {
					return results;

				// Precompiled matchers will still verify ancestry, so step up a level
				} else if ( compiled ) {
					context = context.parentNode;
				}

				selector = selector.slice( tokens.shift().value.length );
			}

			// Fetch a seed set for right-to-left matching
			i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
			while ( i-- ) {
				token = tokens[i];

				// Abort if we hit a combinator
				if ( Expr.relative[ (type = token.type) ] ) {
					break;
				}
				if ( (find = Expr.find[ type ]) ) {
					// Search, expanding context for leading sibling combinators
					if ( (seed = find(
						token.matches[0].replace( runescape, funescape ),
						rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
					)) ) {

						// If seed is empty or no tokens remain, we can return early
						tokens.splice( i, 1 );
						selector = seed.length && toSelector( tokens );
						if ( !selector ) {
							push.apply( results, seed );
							return results;
						}

						break;
					}
				}
			}
		}

		// Compile and execute a filtering function if one is not provided
		// Provide `match` to avoid retokenization if we modified the selector above
		( compiled || compile( selector, match ) )(
			seed,
			context,
			!documentIsHTML,
			results,
			!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
		);
		return results;
	};

	// One-time assignments

	// Sort stability
	support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

	// Support: Chrome 14-35+
	// Always assume duplicates if they aren't passed to the comparison function
	support.detectDuplicates = !!hasDuplicate;

	// Initialize against the default document
	setDocument();

	// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
	// Detached nodes confoundingly follow *each other*
	support.sortDetached = assert(function( div1 ) {
		// Should return 1, but returns 4 (following)
		return div1.compareDocumentPosition( document.createElement("div") ) & 1;
	});

	// Support: IE<8
	// Prevent attribute/property "interpolation"
	// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
	if ( !assert(function( div ) {
		div.innerHTML = "<a href='#'></a>";
		return div.firstChild.getAttribute("href") === "#" ;
	}) ) {
		addHandle( "type|href|height|width", function( elem, name, isXML ) {
			if ( !isXML ) {
				return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
			}
		});
	}

	// Support: IE<9
	// Use defaultValue in place of getAttribute("value")
	if ( !support.attributes || !assert(function( div ) {
		div.innerHTML = "<input/>";
		div.firstChild.setAttribute( "value", "" );
		return div.firstChild.getAttribute( "value" ) === "";
	}) ) {
		addHandle( "value", function( elem, name, isXML ) {
			if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
				return elem.defaultValue;
			}
		});
	}

	// Support: IE<9
	// Use getAttributeNode to fetch booleans when getAttribute lies
	if ( !assert(function( div ) {
		return div.getAttribute("disabled") == null;
	}) ) {
		addHandle( booleans, function( elem, name, isXML ) {
			var val;
			if ( !isXML ) {
				return elem[ name ] === true ? name.toLowerCase() :
						(val = elem.getAttributeNode( name )) && val.specified ?
						val.value :
					null;
			}
		});
	}

	return Sizzle;

	})( window );



	jQuery.find = Sizzle;
	jQuery.expr = Sizzle.selectors;
	jQuery.expr[ ":" ] = jQuery.expr.pseudos;
	jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
	jQuery.text = Sizzle.getText;
	jQuery.isXMLDoc = Sizzle.isXML;
	jQuery.contains = Sizzle.contains;



	var dir = function( elem, dir, until ) {
		var matched = [],
			truncate = until !== undefined;

		while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
			if ( elem.nodeType === 1 ) {
				if ( truncate && jQuery( elem ).is( until ) ) {
					break;
				}
				matched.push( elem );
			}
		}
		return matched;
	};


	var siblings = function( n, elem ) {
		var matched = [];

		for ( ; n; n = n.nextSibling ) {
			if ( n.nodeType === 1 && n !== elem ) {
				matched.push( n );
			}
		}

		return matched;
	};


	var rneedsContext = jQuery.expr.match.needsContext;

	var rsingleTag = ( /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/ );



	var risSimple = /^.[^:#\[\.,]*$/;

	// Implement the identical functionality for filter and not
	function winnow( elements, qualifier, not ) {
		if ( jQuery.isFunction( qualifier ) ) {
			return jQuery.grep( elements, function( elem, i ) {
				/* jshint -W018 */
				return !!qualifier.call( elem, i, elem ) !== not;
			} );

		}

		if ( qualifier.nodeType ) {
			return jQuery.grep( elements, function( elem ) {
				return ( elem === qualifier ) !== not;
			} );

		}

		if ( typeof qualifier === "string" ) {
			if ( risSimple.test( qualifier ) ) {
				return jQuery.filter( qualifier, elements, not );
			}

			qualifier = jQuery.filter( qualifier, elements );
		}

		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	jQuery.filter = function( expr, elems, not ) {
		var elem = elems[ 0 ];

		if ( not ) {
			expr = ":not(" + expr + ")";
		}

		return elems.length === 1 && elem.nodeType === 1 ?
			jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [] :
			jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
				return elem.nodeType === 1;
			} ) );
	};

	jQuery.fn.extend( {
		find: function( selector ) {
			var i,
				len = this.length,
				ret = [],
				self = this;

			if ( typeof selector !== "string" ) {
				return this.pushStack( jQuery( selector ).filter( function() {
					for ( i = 0; i < len; i++ ) {
						if ( jQuery.contains( self[ i ], this ) ) {
							return true;
						}
					}
				} ) );
			}

			for ( i = 0; i < len; i++ ) {
				jQuery.find( selector, self[ i ], ret );
			}

			// Needed because $( selector, context ) becomes $( context ).find( selector )
			ret = this.pushStack( len > 1 ? jQuery.unique( ret ) : ret );
			ret.selector = this.selector ? this.selector + " " + selector : selector;
			return ret;
		},
		filter: function( selector ) {
			return this.pushStack( winnow( this, selector || [], false ) );
		},
		not: function( selector ) {
			return this.pushStack( winnow( this, selector || [], true ) );
		},
		is: function( selector ) {
			return !!winnow(
				this,

				// If this is a positional/relative selector, check membership in the returned set
				// so $("p:first").is("p:last") won't return true for a doc with two "p".
				typeof selector === "string" && rneedsContext.test( selector ) ?
					jQuery( selector ) :
					selector || [],
				false
			).length;
		}
	} );


	// Initialize a jQuery object


	// A central reference to the root jQuery(document)
	var rootjQuery,

		// A simple way to check for HTML strings
		// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
		// Strict HTML recognition (#11290: must start with <)
		rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,

		init = jQuery.fn.init = function( selector, context, root ) {
			var match, elem;

			// HANDLE: $(""), $(null), $(undefined), $(false)
			if ( !selector ) {
				return this;
			}

			// Method init() accepts an alternate rootjQuery
			// so migrate can support jQuery.sub (gh-2101)
			root = root || rootjQuery;

			// Handle HTML strings
			if ( typeof selector === "string" ) {
				if ( selector[ 0 ] === "<" &&
					selector[ selector.length - 1 ] === ">" &&
					selector.length >= 3 ) {

					// Assume that strings that start and end with <> are HTML and skip the regex check
					match = [ null, selector, null ];

				} else {
					match = rquickExpr.exec( selector );
				}

				// Match html or make sure no context is specified for #id
				if ( match && ( match[ 1 ] || !context ) ) {

					// HANDLE: $(html) -> $(array)
					if ( match[ 1 ] ) {
						context = context instanceof jQuery ? context[ 0 ] : context;

						// Option to run scripts is true for back-compat
						// Intentionally let the error be thrown if parseHTML is not present
						jQuery.merge( this, jQuery.parseHTML(
							match[ 1 ],
							context && context.nodeType ? context.ownerDocument || context : document,
							true
						) );

						// HANDLE: $(html, props)
						if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
							for ( match in context ) {

								// Properties of context are called as methods if possible
								if ( jQuery.isFunction( this[ match ] ) ) {
									this[ match ]( context[ match ] );

								// ...and otherwise set as attributes
								} else {
									this.attr( match, context[ match ] );
								}
							}
						}

						return this;

					// HANDLE: $(#id)
					} else {
						elem = document.getElementById( match[ 2 ] );

						// Support: Blackberry 4.6
						// gEBID returns nodes no longer in the document (#6963)
						if ( elem && elem.parentNode ) {

							// Inject the element directly into the jQuery object
							this.length = 1;
							this[ 0 ] = elem;
						}

						this.context = document;
						this.selector = selector;
						return this;
					}

				// HANDLE: $(expr, $(...))
				} else if ( !context || context.jquery ) {
					return ( context || root ).find( selector );

				// HANDLE: $(expr, context)
				// (which is just equivalent to: $(context).find(expr)
				} else {
					return this.constructor( context ).find( selector );
				}

			// HANDLE: $(DOMElement)
			} else if ( selector.nodeType ) {
				this.context = this[ 0 ] = selector;
				this.length = 1;
				return this;

			// HANDLE: $(function)
			// Shortcut for document ready
			} else if ( jQuery.isFunction( selector ) ) {
				return root.ready !== undefined ?
					root.ready( selector ) :

					// Execute immediately if ready is not present
					selector( jQuery );
			}

			if ( selector.selector !== undefined ) {
				this.selector = selector.selector;
				this.context = selector.context;
			}

			return jQuery.makeArray( selector, this );
		};

	// Give the init function the jQuery prototype for later instantiation
	init.prototype = jQuery.fn;

	// Initialize central reference
	rootjQuery = jQuery( document );


	var rparentsprev = /^(?:parents|prev(?:Until|All))/,

		// Methods guaranteed to produce a unique set when starting from a unique set
		guaranteedUnique = {
			children: true,
			contents: true,
			next: true,
			prev: true
		};

	jQuery.fn.extend( {
		has: function( target ) {
			var targets = jQuery( target, this ),
				l = targets.length;

			return this.filter( function() {
				var i = 0;
				for ( ; i < l; i++ ) {
					if ( jQuery.contains( this, targets[ i ] ) ) {
						return true;
					}
				}
			} );
		},

		closest: function( selectors, context ) {
			var cur,
				i = 0,
				l = this.length,
				matched = [],
				pos = rneedsContext.test( selectors ) || typeof selectors !== "string" ?
					jQuery( selectors, context || this.context ) :
					0;

			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( pos ?
						pos.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}

			return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
		},

		// Determine the position of an element within the set
		index: function( elem ) {

			// No argument, return index in parent
			if ( !elem ) {
				return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
			}

			// Index in selector
			if ( typeof elem === "string" ) {
				return indexOf.call( jQuery( elem ), this[ 0 ] );
			}

			// Locate the position of the desired element
			return indexOf.call( this,

				// If it receives a jQuery object, the first element is used
				elem.jquery ? elem[ 0 ] : elem
			);
		},

		add: function( selector, context ) {
			return this.pushStack(
				jQuery.uniqueSort(
					jQuery.merge( this.get(), jQuery( selector, context ) )
				)
			);
		},

		addBack: function( selector ) {
			return this.add( selector == null ?
				this.prevObject : this.prevObject.filter( selector )
			);
		}
	} );

	function sibling( cur, dir ) {
		while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
		return cur;
	}

	jQuery.each( {
		parent: function( elem ) {
			var parent = elem.parentNode;
			return parent && parent.nodeType !== 11 ? parent : null;
		},
		parents: function( elem ) {
			return dir( elem, "parentNode" );
		},
		parentsUntil: function( elem, i, until ) {
			return dir( elem, "parentNode", until );
		},
		next: function( elem ) {
			return sibling( elem, "nextSibling" );
		},
		prev: function( elem ) {
			return sibling( elem, "previousSibling" );
		},
		nextAll: function( elem ) {
			return dir( elem, "nextSibling" );
		},
		prevAll: function( elem ) {
			return dir( elem, "previousSibling" );
		},
		nextUntil: function( elem, i, until ) {
			return dir( elem, "nextSibling", until );
		},
		prevUntil: function( elem, i, until ) {
			return dir( elem, "previousSibling", until );
		},
		siblings: function( elem ) {
			return siblings( ( elem.parentNode || {} ).firstChild, elem );
		},
		children: function( elem ) {
			return siblings( elem.firstChild );
		},
		contents: function( elem ) {
			return elem.contentDocument || jQuery.merge( [], elem.childNodes );
		}
	}, function( name, fn ) {
		jQuery.fn[ name ] = function( until, selector ) {
			var matched = jQuery.map( this, fn, until );

			if ( name.slice( -5 ) !== "Until" ) {
				selector = until;
			}

			if ( selector && typeof selector === "string" ) {
				matched = jQuery.filter( selector, matched );
			}

			if ( this.length > 1 ) {

				// Remove duplicates
				if ( !guaranteedUnique[ name ] ) {
					jQuery.uniqueSort( matched );
				}

				// Reverse order for parents* and prev-derivatives
				if ( rparentsprev.test( name ) ) {
					matched.reverse();
				}
			}

			return this.pushStack( matched );
		};
	} );
	var rnotwhite = ( /\S+/g );



	// Convert String-formatted options into Object-formatted ones
	function createOptions( options ) {
		var object = {};
		jQuery.each( options.match( rnotwhite ) || [], function( _, flag ) {
			object[ flag ] = true;
		} );
		return object;
	}

	/*
	 * Create a callback list using the following parameters:
	 *
	 *	options: an optional list of space-separated options that will change how
	 *			the callback list behaves or a more traditional option object
	 *
	 * By default a callback list will act like an event callback list and can be
	 * "fired" multiple times.
	 *
	 * Possible options:
	 *
	 *	once:			will ensure the callback list can only be fired once (like a Deferred)
	 *
	 *	memory:			will keep track of previous values and will call any callback added
	 *					after the list has been fired right away with the latest "memorized"
	 *					values (like a Deferred)
	 *
	 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
	 *
	 *	stopOnFalse:	interrupt callings when a callback returns false
	 *
	 */
	jQuery.Callbacks = function( options ) {

		// Convert options from String-formatted to Object-formatted if needed
		// (we check in cache first)
		options = typeof options === "string" ?
			createOptions( options ) :
			jQuery.extend( {}, options );

		var // Flag to know if list is currently firing
			firing,

			// Last fire value for non-forgettable lists
			memory,

			// Flag to know if list was already fired
			fired,

			// Flag to prevent firing
			locked,

			// Actual callback list
			list = [],

			// Queue of execution data for repeatable lists
			queue = [],

			// Index of currently firing callback (modified by add/remove as needed)
			firingIndex = -1,

			// Fire callbacks
			fire = function() {

				// Enforce single-firing
				locked = options.once;

				// Execute callbacks for all pending executions,
				// respecting firingIndex overrides and runtime changes
				fired = firing = true;
				for ( ; queue.length; firingIndex = -1 ) {
					memory = queue.shift();
					while ( ++firingIndex < list.length ) {

						// Run callback and check for early termination
						if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
							options.stopOnFalse ) {

							// Jump to end and forget the data so .add doesn't re-fire
							firingIndex = list.length;
							memory = false;
						}
					}
				}

				// Forget the data if we're done with it
				if ( !options.memory ) {
					memory = false;
				}

				firing = false;

				// Clean up if we're done firing for good
				if ( locked ) {

					// Keep an empty list if we have data for future add calls
					if ( memory ) {
						list = [];

					// Otherwise, this object is spent
					} else {
						list = "";
					}
				}
			},

			// Actual Callbacks object
			self = {

				// Add a callback or a collection of callbacks to the list
				add: function() {
					if ( list ) {

						// If we have memory from a past run, we should fire after adding
						if ( memory && !firing ) {
							firingIndex = list.length - 1;
							queue.push( memory );
						}

						( function add( args ) {
							jQuery.each( args, function( _, arg ) {
								if ( jQuery.isFunction( arg ) ) {
									if ( !options.unique || !self.has( arg ) ) {
										list.push( arg );
									}
								} else if ( arg && arg.length && jQuery.type( arg ) !== "string" ) {

									// Inspect recursively
									add( arg );
								}
							} );
						} )( arguments );

						if ( memory && !firing ) {
							fire();
						}
					}
					return this;
				},

				// Remove a callback from the list
				remove: function() {
					jQuery.each( arguments, function( _, arg ) {
						var index;
						while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
							list.splice( index, 1 );

							// Handle firing indexes
							if ( index <= firingIndex ) {
								firingIndex--;
							}
						}
					} );
					return this;
				},

				// Check if a given callback is in the list.
				// If no argument is given, return whether or not list has callbacks attached.
				has: function( fn ) {
					return fn ?
						jQuery.inArray( fn, list ) > -1 :
						list.length > 0;
				},

				// Remove all callbacks from the list
				empty: function() {
					if ( list ) {
						list = [];
					}
					return this;
				},

				// Disable .fire and .add
				// Abort any current/pending executions
				// Clear all callbacks and values
				disable: function() {
					locked = queue = [];
					list = memory = "";
					return this;
				},
				disabled: function() {
					return !list;
				},

				// Disable .fire
				// Also disable .add unless we have memory (since it would have no effect)
				// Abort any pending executions
				lock: function() {
					locked = queue = [];
					if ( !memory ) {
						list = memory = "";
					}
					return this;
				},
				locked: function() {
					return !!locked;
				},

				// Call all callbacks with the given context and arguments
				fireWith: function( context, args ) {
					if ( !locked ) {
						args = args || [];
						args = [ context, args.slice ? args.slice() : args ];
						queue.push( args );
						if ( !firing ) {
							fire();
						}
					}
					return this;
				},

				// Call all the callbacks with the given arguments
				fire: function() {
					self.fireWith( this, arguments );
					return this;
				},

				// To know if the callbacks have already been called at least once
				fired: function() {
					return !!fired;
				}
			};

		return self;
	};


	jQuery.extend( {

		Deferred: function( func ) {
			var tuples = [

					// action, add listener, listener list, final state
					[ "resolve", "done", jQuery.Callbacks( "once memory" ), "resolved" ],
					[ "reject", "fail", jQuery.Callbacks( "once memory" ), "rejected" ],
					[ "notify", "progress", jQuery.Callbacks( "memory" ) ]
				],
				state = "pending",
				promise = {
					state: function() {
						return state;
					},
					always: function() {
						deferred.done( arguments ).fail( arguments );
						return this;
					},
					then: function( /* fnDone, fnFail, fnProgress */ ) {
						var fns = arguments;
						return jQuery.Deferred( function( newDefer ) {
							jQuery.each( tuples, function( i, tuple ) {
								var fn = jQuery.isFunction( fns[ i ] ) && fns[ i ];

								// deferred[ done | fail | progress ] for forwarding actions to newDefer
								deferred[ tuple[ 1 ] ]( function() {
									var returned = fn && fn.apply( this, arguments );
									if ( returned && jQuery.isFunction( returned.promise ) ) {
										returned.promise()
											.progress( newDefer.notify )
											.done( newDefer.resolve )
											.fail( newDefer.reject );
									} else {
										newDefer[ tuple[ 0 ] + "With" ](
											this === promise ? newDefer.promise() : this,
											fn ? [ returned ] : arguments
										);
									}
								} );
							} );
							fns = null;
						} ).promise();
					},

					// Get a promise for this deferred
					// If obj is provided, the promise aspect is added to the object
					promise: function( obj ) {
						return obj != null ? jQuery.extend( obj, promise ) : promise;
					}
				},
				deferred = {};

			// Keep pipe for back-compat
			promise.pipe = promise.then;

			// Add list-specific methods
			jQuery.each( tuples, function( i, tuple ) {
				var list = tuple[ 2 ],
					stateString = tuple[ 3 ];

				// promise[ done | fail | progress ] = list.add
				promise[ tuple[ 1 ] ] = list.add;

				// Handle state
				if ( stateString ) {
					list.add( function() {

						// state = [ resolved | rejected ]
						state = stateString;

					// [ reject_list | resolve_list ].disable; progress_list.lock
					}, tuples[ i ^ 1 ][ 2 ].disable, tuples[ 2 ][ 2 ].lock );
				}

				// deferred[ resolve | reject | notify ]
				deferred[ tuple[ 0 ] ] = function() {
					deferred[ tuple[ 0 ] + "With" ]( this === deferred ? promise : this, arguments );
					return this;
				};
				deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
			} );

			// Make the deferred a promise
			promise.promise( deferred );

			// Call given func if any
			if ( func ) {
				func.call( deferred, deferred );
			}

			// All done!
			return deferred;
		},

		// Deferred helper
		when: function( subordinate /* , ..., subordinateN */ ) {
			var i = 0,
				resolveValues = slice.call( arguments ),
				length = resolveValues.length,

				// the count of uncompleted subordinates
				remaining = length !== 1 ||
					( subordinate && jQuery.isFunction( subordinate.promise ) ) ? length : 0,

				// the master Deferred.
				// If resolveValues consist of only a single Deferred, just use that.
				deferred = remaining === 1 ? subordinate : jQuery.Deferred(),

				// Update function for both resolve and progress values
				updateFunc = function( i, contexts, values ) {
					return function( value ) {
						contexts[ i ] = this;
						values[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
						if ( values === progressValues ) {
							deferred.notifyWith( contexts, values );
						} else if ( !( --remaining ) ) {
							deferred.resolveWith( contexts, values );
						}
					};
				},

				progressValues, progressContexts, resolveContexts;

			// Add listeners to Deferred subordinates; treat others as resolved
			if ( length > 1 ) {
				progressValues = new Array( length );
				progressContexts = new Array( length );
				resolveContexts = new Array( length );
				for ( ; i < length; i++ ) {
					if ( resolveValues[ i ] && jQuery.isFunction( resolveValues[ i ].promise ) ) {
						resolveValues[ i ].promise()
							.progress( updateFunc( i, progressContexts, progressValues ) )
							.done( updateFunc( i, resolveContexts, resolveValues ) )
							.fail( deferred.reject );
					} else {
						--remaining;
					}
				}
			}

			// If we're not waiting on anything, resolve the master
			if ( !remaining ) {
				deferred.resolveWith( resolveContexts, resolveValues );
			}

			return deferred.promise();
		}
	} );


	// The deferred used on DOM ready
	var readyList;

	jQuery.fn.ready = function( fn ) {

		// Add the callback
		jQuery.ready.promise().done( fn );

		return this;
	};

	jQuery.extend( {

		// Is the DOM ready to be used? Set to true once it occurs.
		isReady: false,

		// A counter to track how many items to wait for before
		// the ready event fires. See #6781
		readyWait: 1,

		// Hold (or release) the ready event
		holdReady: function( hold ) {
			if ( hold ) {
				jQuery.readyWait++;
			} else {
				jQuery.ready( true );
			}
		},

		// Handle when the DOM is ready
		ready: function( wait ) {

			// Abort if there are pending holds or we're already ready
			if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
				return;
			}

			// Remember that the DOM is ready
			jQuery.isReady = true;

			// If a normal DOM Ready event fired, decrement, and wait if need be
			if ( wait !== true && --jQuery.readyWait > 0 ) {
				return;
			}

			// If there are functions bound, to execute
			readyList.resolveWith( document, [ jQuery ] );

			// Trigger any bound ready events
			if ( jQuery.fn.triggerHandler ) {
				jQuery( document ).triggerHandler( "ready" );
				jQuery( document ).off( "ready" );
			}
		}
	} );

	/**
	 * The ready event handler and self cleanup method
	 */
	function completed() {
		document.removeEventListener( "DOMContentLoaded", completed );
		window.removeEventListener( "load", completed );
		jQuery.ready();
	}

	jQuery.ready.promise = function( obj ) {
		if ( !readyList ) {

			readyList = jQuery.Deferred();

			// Catch cases where $(document).ready() is called
			// after the browser event has already occurred.
			// Support: IE9-10 only
			// Older IE sometimes signals "interactive" too soon
			if ( document.readyState === "complete" ||
				( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

				// Handle it asynchronously to allow scripts the opportunity to delay ready
				window.setTimeout( jQuery.ready );

			} else {

				// Use the handy event callback
				document.addEventListener( "DOMContentLoaded", completed );

				// A fallback to window.onload, that will always work
				window.addEventListener( "load", completed );
			}
		}
		return readyList.promise( obj );
	};

	// Kick off the DOM ready check even if the user does not
	jQuery.ready.promise();




	// Multifunctional method to get and set values of a collection
	// The value/s can optionally be executed if it's a function
	var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
		var i = 0,
			len = elems.length,
			bulk = key == null;

		// Sets many values
		if ( jQuery.type( key ) === "object" ) {
			chainable = true;
			for ( i in key ) {
				access( elems, fn, i, key[ i ], true, emptyGet, raw );
			}

		// Sets one value
		} else if ( value !== undefined ) {
			chainable = true;

			if ( !jQuery.isFunction( value ) ) {
				raw = true;
			}

			if ( bulk ) {

				// Bulk operations run against the entire set
				if ( raw ) {
					fn.call( elems, value );
					fn = null;

				// ...except when executing function values
				} else {
					bulk = fn;
					fn = function( elem, key, value ) {
						return bulk.call( jQuery( elem ), value );
					};
				}
			}

			if ( fn ) {
				for ( ; i < len; i++ ) {
					fn(
						elems[ i ], key, raw ?
						value :
						value.call( elems[ i ], i, fn( elems[ i ], key ) )
					);
				}
			}
		}

		return chainable ?
			elems :

			// Gets
			bulk ?
				fn.call( elems ) :
				len ? fn( elems[ 0 ], key ) : emptyGet;
	};
	var acceptData = function( owner ) {

		// Accepts only:
		//  - Node
		//    - Node.ELEMENT_NODE
		//    - Node.DOCUMENT_NODE
		//  - Object
		//    - Any
		/* jshint -W018 */
		return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
	};




	function Data() {
		this.expando = jQuery.expando + Data.uid++;
	}

	Data.uid = 1;

	Data.prototype = {

		register: function( owner, initial ) {
			var value = initial || {};

			// If it is a node unlikely to be stringify-ed or looped over
			// use plain assignment
			if ( owner.nodeType ) {
				owner[ this.expando ] = value;

			// Otherwise secure it in a non-enumerable, non-writable property
			// configurability must be true to allow the property to be
			// deleted with the delete operator
			} else {
				Object.defineProperty( owner, this.expando, {
					value: value,
					writable: true,
					configurable: true
				} );
			}
			return owner[ this.expando ];
		},
		cache: function( owner ) {

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( !acceptData( owner ) ) {
				return {};
			}

			// Check if the owner object already has a cache
			var value = owner[ this.expando ];

			// If not, create one
			if ( !value ) {
				value = {};

				// We can accept data for non-element nodes in modern browsers,
				// but we should not, see #8335.
				// Always return an empty object.
				if ( acceptData( owner ) ) {

					// If it is a node unlikely to be stringify-ed or looped over
					// use plain assignment
					if ( owner.nodeType ) {
						owner[ this.expando ] = value;

					// Otherwise secure it in a non-enumerable property
					// configurable must be true to allow the property to be
					// deleted when data is removed
					} else {
						Object.defineProperty( owner, this.expando, {
							value: value,
							configurable: true
						} );
					}
				}
			}

			return value;
		},
		set: function( owner, data, value ) {
			var prop,
				cache = this.cache( owner );

			// Handle: [ owner, key, value ] args
			if ( typeof data === "string" ) {
				cache[ data ] = value;

			// Handle: [ owner, { properties } ] args
			} else {

				// Copy the properties one-by-one to the cache object
				for ( prop in data ) {
					cache[ prop ] = data[ prop ];
				}
			}
			return cache;
		},
		get: function( owner, key ) {
			return key === undefined ?
				this.cache( owner ) :
				owner[ this.expando ] && owner[ this.expando ][ key ];
		},
		access: function( owner, key, value ) {
			var stored;

			// In cases where either:
			//
			//   1. No key was specified
			//   2. A string key was specified, but no value provided
			//
			// Take the "read" path and allow the get method to determine
			// which value to return, respectively either:
			//
			//   1. The entire cache object
			//   2. The data stored at the key
			//
			if ( key === undefined ||
					( ( key && typeof key === "string" ) && value === undefined ) ) {

				stored = this.get( owner, key );

				return stored !== undefined ?
					stored : this.get( owner, jQuery.camelCase( key ) );
			}

			// When the key is not a string, or both a key and value
			// are specified, set or extend (existing objects) with either:
			//
			//   1. An object of properties
			//   2. A key and value
			//
			this.set( owner, key, value );

			// Since the "set" path can have two possible entry points
			// return the expected data based on which path was taken[*]
			return value !== undefined ? value : key;
		},
		remove: function( owner, key ) {
			var i, name, camel,
				cache = owner[ this.expando ];

			if ( cache === undefined ) {
				return;
			}

			if ( key === undefined ) {
				this.register( owner );

			} else {

				// Support array or space separated string of keys
				if ( jQuery.isArray( key ) ) {

					// If "name" is an array of keys...
					// When data is initially created, via ("key", "val") signature,
					// keys will be converted to camelCase.
					// Since there is no way to tell _how_ a key was added, remove
					// both plain key and camelCase key. #12786
					// This will only penalize the array argument path.
					name = key.concat( key.map( jQuery.camelCase ) );
				} else {
					camel = jQuery.camelCase( key );

					// Try the string as a key before any manipulation
					if ( key in cache ) {
						name = [ key, camel ];
					} else {

						// If a key with the spaces exists, use it.
						// Otherwise, create an array by matching non-whitespace
						name = camel;
						name = name in cache ?
							[ name ] : ( name.match( rnotwhite ) || [] );
					}
				}

				i = name.length;

				while ( i-- ) {
					delete cache[ name[ i ] ];
				}
			}

			// Remove the expando if there's no more data
			if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

				// Support: Chrome <= 35-45+
				// Webkit & Blink performance suffers when deleting properties
				// from DOM nodes, so set to undefined instead
				// https://code.google.com/p/chromium/issues/detail?id=378607
				if ( owner.nodeType ) {
					owner[ this.expando ] = undefined;
				} else {
					delete owner[ this.expando ];
				}
			}
		},
		hasData: function( owner ) {
			var cache = owner[ this.expando ];
			return cache !== undefined && !jQuery.isEmptyObject( cache );
		}
	};
	var dataPriv = new Data();

	var dataUser = new Data();



	//	Implementation Summary
	//
	//	1. Enforce API surface and semantic compatibility with 1.9.x branch
	//	2. Improve the module's maintainability by reducing the storage
	//		paths to a single mechanism.
	//	3. Use the same single mechanism to support "private" and "user" data.
	//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
	//	5. Avoid exposing implementation details on user objects (eg. expando properties)
	//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

	var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		rmultiDash = /[A-Z]/g;

	function dataAttr( elem, key, data ) {
		var name;

		// If nothing was found internally, try to fetch any
		// data from the HTML5 data-* attribute
		if ( data === undefined && elem.nodeType === 1 ) {
			name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
			data = elem.getAttribute( name );

			if ( typeof data === "string" ) {
				try {
					data = data === "true" ? true :
						data === "false" ? false :
						data === "null" ? null :

						// Only convert to a number if it doesn't change the string
						+data + "" === data ? +data :
						rbrace.test( data ) ? jQuery.parseJSON( data ) :
						data;
				} catch ( e ) {}

				// Make sure we set the data so it isn't changed later
				dataUser.set( elem, key, data );
			} else {
				data = undefined;
			}
		}
		return data;
	}

	jQuery.extend( {
		hasData: function( elem ) {
			return dataUser.hasData( elem ) || dataPriv.hasData( elem );
		},

		data: function( elem, name, data ) {
			return dataUser.access( elem, name, data );
		},

		removeData: function( elem, name ) {
			dataUser.remove( elem, name );
		},

		// TODO: Now that all calls to _data and _removeData have been replaced
		// with direct calls to dataPriv methods, these can be deprecated.
		_data: function( elem, name, data ) {
			return dataPriv.access( elem, name, data );
		},

		_removeData: function( elem, name ) {
			dataPriv.remove( elem, name );
		}
	} );

	jQuery.fn.extend( {
		data: function( key, value ) {
			var i, name, data,
				elem = this[ 0 ],
				attrs = elem && elem.attributes;

			// Gets all values
			if ( key === undefined ) {
				if ( this.length ) {
					data = dataUser.get( elem );

					if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
						i = attrs.length;
						while ( i-- ) {

							// Support: IE11+
							// The attrs elements can be null (#14894)
							if ( attrs[ i ] ) {
								name = attrs[ i ].name;
								if ( name.indexOf( "data-" ) === 0 ) {
									name = jQuery.camelCase( name.slice( 5 ) );
									dataAttr( elem, name, data[ name ] );
								}
							}
						}
						dataPriv.set( elem, "hasDataAttrs", true );
					}
				}

				return data;
			}

			// Sets multiple values
			if ( typeof key === "object" ) {
				return this.each( function() {
					dataUser.set( this, key );
				} );
			}

			return access( this, function( value ) {
				var data, camelKey;

				// The calling jQuery object (element matches) is not empty
				// (and therefore has an element appears at this[ 0 ]) and the
				// `value` parameter was not undefined. An empty jQuery object
				// will result in `undefined` for elem = this[ 0 ] which will
				// throw an exception if an attempt to read a data cache is made.
				if ( elem && value === undefined ) {

					// Attempt to get data from the cache
					// with the key as-is
					data = dataUser.get( elem, key ) ||

						// Try to find dashed key if it exists (gh-2779)
						// This is for 2.2.x only
						dataUser.get( elem, key.replace( rmultiDash, "-$&" ).toLowerCase() );

					if ( data !== undefined ) {
						return data;
					}

					camelKey = jQuery.camelCase( key );

					// Attempt to get data from the cache
					// with the key camelized
					data = dataUser.get( elem, camelKey );
					if ( data !== undefined ) {
						return data;
					}

					// Attempt to "discover" the data in
					// HTML5 custom data-* attrs
					data = dataAttr( elem, camelKey, undefined );
					if ( data !== undefined ) {
						return data;
					}

					// We tried really hard, but the data doesn't exist.
					return;
				}

				// Set the data...
				camelKey = jQuery.camelCase( key );
				this.each( function() {

					// First, attempt to store a copy or reference of any
					// data that might've been store with a camelCased key.
					var data = dataUser.get( this, camelKey );

					// For HTML5 data-* attribute interop, we have to
					// store property names with dashes in a camelCase form.
					// This might not apply to all properties...*
					dataUser.set( this, camelKey, value );

					// *... In the case of properties that might _actually_
					// have dashes, we need to also store a copy of that
					// unchanged property.
					if ( key.indexOf( "-" ) > -1 && data !== undefined ) {
						dataUser.set( this, key, value );
					}
				} );
			}, null, value, arguments.length > 1, null, true );
		},

		removeData: function( key ) {
			return this.each( function() {
				dataUser.remove( this, key );
			} );
		}
	} );


	jQuery.extend( {
		queue: function( elem, type, data ) {
			var queue;

			if ( elem ) {
				type = ( type || "fx" ) + "queue";
				queue = dataPriv.get( elem, type );

				// Speed up dequeue by getting out quickly if this is just a lookup
				if ( data ) {
					if ( !queue || jQuery.isArray( data ) ) {
						queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
					} else {
						queue.push( data );
					}
				}
				return queue || [];
			}
		},

		dequeue: function( elem, type ) {
			type = type || "fx";

			var queue = jQuery.queue( elem, type ),
				startLength = queue.length,
				fn = queue.shift(),
				hooks = jQuery._queueHooks( elem, type ),
				next = function() {
					jQuery.dequeue( elem, type );
				};

			// If the fx queue is dequeued, always remove the progress sentinel
			if ( fn === "inprogress" ) {
				fn = queue.shift();
				startLength--;
			}

			if ( fn ) {

				// Add a progress sentinel to prevent the fx queue from being
				// automatically dequeued
				if ( type === "fx" ) {
					queue.unshift( "inprogress" );
				}

				// Clear up the last queue stop function
				delete hooks.stop;
				fn.call( elem, next, hooks );
			}

			if ( !startLength && hooks ) {
				hooks.empty.fire();
			}
		},

		// Not public - generate a queueHooks object, or return the current one
		_queueHooks: function( elem, type ) {
			var key = type + "queueHooks";
			return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
				empty: jQuery.Callbacks( "once memory" ).add( function() {
					dataPriv.remove( elem, [ type + "queue", key ] );
				} )
			} );
		}
	} );

	jQuery.fn.extend( {
		queue: function( type, data ) {
			var setter = 2;

			if ( typeof type !== "string" ) {
				data = type;
				type = "fx";
				setter--;
			}

			if ( arguments.length < setter ) {
				return jQuery.queue( this[ 0 ], type );
			}

			return data === undefined ?
				this :
				this.each( function() {
					var queue = jQuery.queue( this, type, data );

					// Ensure a hooks for this queue
					jQuery._queueHooks( this, type );

					if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
						jQuery.dequeue( this, type );
					}
				} );
		},
		dequeue: function( type ) {
			return this.each( function() {
				jQuery.dequeue( this, type );
			} );
		},
		clearQueue: function( type ) {
			return this.queue( type || "fx", [] );
		},

		// Get a promise resolved when queues of a certain type
		// are emptied (fx is the type by default)
		promise: function( type, obj ) {
			var tmp,
				count = 1,
				defer = jQuery.Deferred(),
				elements = this,
				i = this.length,
				resolve = function() {
					if ( !( --count ) ) {
						defer.resolveWith( elements, [ elements ] );
					}
				};

			if ( typeof type !== "string" ) {
				obj = type;
				type = undefined;
			}
			type = type || "fx";

			while ( i-- ) {
				tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
				if ( tmp && tmp.empty ) {
					count++;
					tmp.empty.add( resolve );
				}
			}
			resolve();
			return defer.promise( obj );
		}
	} );
	var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

	var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


	var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

	var isHidden = function( elem, el ) {

			// isHidden might be called from jQuery#filter function;
			// in that case, element will be second argument
			elem = el || elem;
			return jQuery.css( elem, "display" ) === "none" ||
				!jQuery.contains( elem.ownerDocument, elem );
		};



	function adjustCSS( elem, prop, valueParts, tween ) {
		var adjusted,
			scale = 1,
			maxIterations = 20,
			currentValue = tween ?
				function() { return tween.cur(); } :
				function() { return jQuery.css( elem, prop, "" ); },
			initial = currentValue(),
			unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

			// Starting value computation is required for potential unit mismatches
			initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
				rcssNum.exec( jQuery.css( elem, prop ) );

		if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

			// Trust units reported by jQuery.css
			unit = unit || initialInUnit[ 3 ];

			// Make sure we update the tween properties later on
			valueParts = valueParts || [];

			// Iteratively approximate from a nonzero starting point
			initialInUnit = +initial || 1;

			do {

				// If previous iteration zeroed out, double until we get *something*.
				// Use string for doubling so we don't accidentally see scale as unchanged below
				scale = scale || ".5";

				// Adjust and apply
				initialInUnit = initialInUnit / scale;
				jQuery.style( elem, prop, initialInUnit + unit );

			// Update scale, tolerating zero or NaN from tween.cur()
			// Break the loop if scale is unchanged or perfect, or if we've just had enough.
			} while (
				scale !== ( scale = currentValue() / initial ) && scale !== 1 && --maxIterations
			);
		}

		if ( valueParts ) {
			initialInUnit = +initialInUnit || +initial || 0;

			// Apply relative offset (+=/-=) if specified
			adjusted = valueParts[ 1 ] ?
				initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
				+valueParts[ 2 ];
			if ( tween ) {
				tween.unit = unit;
				tween.start = initialInUnit;
				tween.end = adjusted;
			}
		}
		return adjusted;
	}
	var rcheckableType = ( /^(?:checkbox|radio)$/i );

	var rtagName = ( /<([\w:-]+)/ );

	var rscriptType = ( /^$|\/(?:java|ecma)script/i );



	// We have to close these tags to support XHTML (#13200)
	var wrapMap = {

		// Support: IE9
		option: [ 1, "<select multiple='multiple'>", "</select>" ],

		// XHTML parsers do not magically insert elements in the
		// same way that tag soup parsers do. So we cannot shorten
		// this by omitting <tbody> or other required elements.
		thead: [ 1, "<table>", "</table>" ],
		col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
		tr: [ 2, "<table><tbody>", "</tbody></table>" ],
		td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

		_default: [ 0, "", "" ]
	};

	// Support: IE9
	wrapMap.optgroup = wrapMap.option;

	wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
	wrapMap.th = wrapMap.td;


	function getAll( context, tag ) {

		// Support: IE9-11+
		// Use typeof to avoid zero-argument method invocation on host objects (#15151)
		var ret = typeof context.getElementsByTagName !== "undefined" ?
				context.getElementsByTagName( tag || "*" ) :
				typeof context.querySelectorAll !== "undefined" ?
					context.querySelectorAll( tag || "*" ) :
				[];

		return tag === undefined || tag && jQuery.nodeName( context, tag ) ?
			jQuery.merge( [ context ], ret ) :
			ret;
	}


	// Mark scripts as having already been evaluated
	function setGlobalEval( elems, refElements ) {
		var i = 0,
			l = elems.length;

		for ( ; i < l; i++ ) {
			dataPriv.set(
				elems[ i ],
				"globalEval",
				!refElements || dataPriv.get( refElements[ i ], "globalEval" )
			);
		}
	}


	var rhtml = /<|&#?\w+;/;

	function buildFragment( elems, context, scripts, selection, ignored ) {
		var elem, tmp, tag, wrap, contains, j,
			fragment = context.createDocumentFragment(),
			nodes = [],
			i = 0,
			l = elems.length;

		for ( ; i < l; i++ ) {
			elem = elems[ i ];

			if ( elem || elem === 0 ) {

				// Add nodes directly
				if ( jQuery.type( elem ) === "object" ) {

					// Support: Android<4.1, PhantomJS<2
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

				// Convert non-html into a text node
				} else if ( !rhtml.test( elem ) ) {
					nodes.push( context.createTextNode( elem ) );

				// Convert html into DOM nodes
				} else {
					tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

					// Deserialize a standard representation
					tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
					wrap = wrapMap[ tag ] || wrapMap._default;
					tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

					// Descend through wrappers to the right content
					j = wrap[ 0 ];
					while ( j-- ) {
						tmp = tmp.lastChild;
					}

					// Support: Android<4.1, PhantomJS<2
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge( nodes, tmp.childNodes );

					// Remember the top-level container
					tmp = fragment.firstChild;

					// Ensure the created nodes are orphaned (#12392)
					tmp.textContent = "";
				}
			}
		}

		// Remove wrapper from fragment
		fragment.textContent = "";

		i = 0;
		while ( ( elem = nodes[ i++ ] ) ) {

			// Skip elements already in the context collection (trac-4087)
			if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
				if ( ignored ) {
					ignored.push( elem );
				}
				continue;
			}

			contains = jQuery.contains( elem.ownerDocument, elem );

			// Append to fragment
			tmp = getAll( fragment.appendChild( elem ), "script" );

			// Preserve script evaluation history
			if ( contains ) {
				setGlobalEval( tmp );
			}

			// Capture executables
			if ( scripts ) {
				j = 0;
				while ( ( elem = tmp[ j++ ] ) ) {
					if ( rscriptType.test( elem.type || "" ) ) {
						scripts.push( elem );
					}
				}
			}
		}

		return fragment;
	}


	( function() {
		var fragment = document.createDocumentFragment(),
			div = fragment.appendChild( document.createElement( "div" ) ),
			input = document.createElement( "input" );

		// Support: Android 4.0-4.3, Safari<=5.1
		// Check state lost if the name is set (#11217)
		// Support: Windows Web Apps (WWA)
		// `name` and `type` must use .setAttribute for WWA (#14901)
		input.setAttribute( "type", "radio" );
		input.setAttribute( "checked", "checked" );
		input.setAttribute( "name", "t" );

		div.appendChild( input );

		// Support: Safari<=5.1, Android<4.2
		// Older WebKit doesn't clone checked state correctly in fragments
		support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

		// Support: IE<=11+
		// Make sure textarea (and checkbox) defaultValue is properly cloned
		div.innerHTML = "<textarea>x</textarea>";
		support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
	} )();


	var
		rkeyEvent = /^key/,
		rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
		rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

	function returnTrue() {
		return true;
	}

	function returnFalse() {
		return false;
	}

	// Support: IE9
	// See #13393 for more info
	function safeActiveElement() {
		try {
			return document.activeElement;
		} catch ( err ) { }
	}

	function on( elem, types, selector, data, fn, one ) {
		var origFn, type;

		// Types can be a map of types/handlers
		if ( typeof types === "object" ) {

			// ( types-Object, selector, data )
			if ( typeof selector !== "string" ) {

				// ( types-Object, data )
				data = data || selector;
				selector = undefined;
			}
			for ( type in types ) {
				on( elem, type, selector, data, types[ type ], one );
			}
			return elem;
		}

		if ( data == null && fn == null ) {

			// ( types, fn )
			fn = selector;
			data = selector = undefined;
		} else if ( fn == null ) {
			if ( typeof selector === "string" ) {

				// ( types, selector, fn )
				fn = data;
				data = undefined;
			} else {

				// ( types, data, fn )
				fn = data;
				data = selector;
				selector = undefined;
			}
		}
		if ( fn === false ) {
			fn = returnFalse;
		} else if ( !fn ) {
			return elem;
		}

		if ( one === 1 ) {
			origFn = fn;
			fn = function( event ) {

				// Can use an empty set, since event contains the info
				jQuery().off( event );
				return origFn.apply( this, arguments );
			};

			// Use same guid so caller can remove using origFn
			fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
		}
		return elem.each( function() {
			jQuery.event.add( this, types, fn, data, selector );
		} );
	}

	/*
	 * Helper functions for managing events -- not part of the public interface.
	 * Props to Dean Edwards' addEvent library for many of the ideas.
	 */
	jQuery.event = {

		global: {},

		add: function( elem, types, handler, data, selector ) {

			var handleObjIn, eventHandle, tmp,
				events, t, handleObj,
				special, handlers, type, namespaces, origType,
				elemData = dataPriv.get( elem );

			// Don't attach events to noData or text/comment nodes (but allow plain objects)
			if ( !elemData ) {
				return;
			}

			// Caller can pass in an object of custom data in lieu of the handler
			if ( handler.handler ) {
				handleObjIn = handler;
				handler = handleObjIn.handler;
				selector = handleObjIn.selector;
			}

			// Make sure that the handler has a unique ID, used to find/remove it later
			if ( !handler.guid ) {
				handler.guid = jQuery.guid++;
			}

			// Init the element's event structure and main handler, if this is the first
			if ( !( events = elemData.events ) ) {
				events = elemData.events = {};
			}
			if ( !( eventHandle = elemData.handle ) ) {
				eventHandle = elemData.handle = function( e ) {

					// Discard the second event of a jQuery.event.trigger() and
					// when an event is called after a page has unloaded
					return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
						jQuery.event.dispatch.apply( elem, arguments ) : undefined;
				};
			}

			// Handle multiple events separated by a space
			types = ( types || "" ).match( rnotwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[ t ] ) || [];
				type = origType = tmp[ 1 ];
				namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

				// There *must* be a type, no attaching namespace-only handlers
				if ( !type ) {
					continue;
				}

				// If event changes its type, use the special event handlers for the changed type
				special = jQuery.event.special[ type ] || {};

				// If selector defined, determine special event api type, otherwise given type
				type = ( selector ? special.delegateType : special.bindType ) || type;

				// Update special based on newly reset type
				special = jQuery.event.special[ type ] || {};

				// handleObj is passed to all event handlers
				handleObj = jQuery.extend( {
					type: type,
					origType: origType,
					data: data,
					handler: handler,
					guid: handler.guid,
					selector: selector,
					needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
					namespace: namespaces.join( "." )
				}, handleObjIn );

				// Init the event handler queue if we're the first
				if ( !( handlers = events[ type ] ) ) {
					handlers = events[ type ] = [];
					handlers.delegateCount = 0;

					// Only use addEventListener if the special events handler returns false
					if ( !special.setup ||
						special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

						if ( elem.addEventListener ) {
							elem.addEventListener( type, eventHandle );
						}
					}
				}

				if ( special.add ) {
					special.add.call( elem, handleObj );

					if ( !handleObj.handler.guid ) {
						handleObj.handler.guid = handler.guid;
					}
				}

				// Add to the element's handler list, delegates in front
				if ( selector ) {
					handlers.splice( handlers.delegateCount++, 0, handleObj );
				} else {
					handlers.push( handleObj );
				}

				// Keep track of which events have ever been used, for event optimization
				jQuery.event.global[ type ] = true;
			}

		},

		// Detach an event or set of events from an element
		remove: function( elem, types, handler, selector, mappedTypes ) {

			var j, origCount, tmp,
				events, t, handleObj,
				special, handlers, type, namespaces, origType,
				elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

			if ( !elemData || !( events = elemData.events ) ) {
				return;
			}

			// Once for each type.namespace in types; type may be omitted
			types = ( types || "" ).match( rnotwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[ t ] ) || [];
				type = origType = tmp[ 1 ];
				namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

				// Unbind all events (on this namespace, if provided) for the element
				if ( !type ) {
					for ( type in events ) {
						jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
					}
					continue;
				}

				special = jQuery.event.special[ type ] || {};
				type = ( selector ? special.delegateType : special.bindType ) || type;
				handlers = events[ type ] || [];
				tmp = tmp[ 2 ] &&
					new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

				// Remove matching events
				origCount = j = handlers.length;
				while ( j-- ) {
					handleObj = handlers[ j ];

					if ( ( mappedTypes || origType === handleObj.origType ) &&
						( !handler || handler.guid === handleObj.guid ) &&
						( !tmp || tmp.test( handleObj.namespace ) ) &&
						( !selector || selector === handleObj.selector ||
							selector === "**" && handleObj.selector ) ) {
						handlers.splice( j, 1 );

						if ( handleObj.selector ) {
							handlers.delegateCount--;
						}
						if ( special.remove ) {
							special.remove.call( elem, handleObj );
						}
					}
				}

				// Remove generic event handler if we removed something and no more handlers exist
				// (avoids potential for endless recursion during removal of special event handlers)
				if ( origCount && !handlers.length ) {
					if ( !special.teardown ||
						special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

						jQuery.removeEvent( elem, type, elemData.handle );
					}

					delete events[ type ];
				}
			}

			// Remove data and the expando if it's no longer used
			if ( jQuery.isEmptyObject( events ) ) {
				dataPriv.remove( elem, "handle events" );
			}
		},

		dispatch: function( event ) {

			// Make a writable jQuery.Event from the native event object
			event = jQuery.event.fix( event );

			var i, j, ret, matched, handleObj,
				handlerQueue = [],
				args = slice.call( arguments ),
				handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
				special = jQuery.event.special[ event.type ] || {};

			// Use the fix-ed jQuery.Event rather than the (read-only) native event
			args[ 0 ] = event;
			event.delegateTarget = this;

			// Call the preDispatch hook for the mapped type, and let it bail if desired
			if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
				return;
			}

			// Determine handlers
			handlerQueue = jQuery.event.handlers.call( this, event, handlers );

			// Run delegates first; they may want to stop propagation beneath us
			i = 0;
			while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
				event.currentTarget = matched.elem;

				j = 0;
				while ( ( handleObj = matched.handlers[ j++ ] ) &&
					!event.isImmediatePropagationStopped() ) {

					// Triggered event must either 1) have no namespace, or 2) have namespace(s)
					// a subset or equal to those in the bound event (both can have no namespace).
					if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

						event.handleObj = handleObj;
						event.data = handleObj.data;

						ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
							handleObj.handler ).apply( matched.elem, args );

						if ( ret !== undefined ) {
							if ( ( event.result = ret ) === false ) {
								event.preventDefault();
								event.stopPropagation();
							}
						}
					}
				}
			}

			// Call the postDispatch hook for the mapped type
			if ( special.postDispatch ) {
				special.postDispatch.call( this, event );
			}

			return event.result;
		},

		handlers: function( event, handlers ) {
			var i, matches, sel, handleObj,
				handlerQueue = [],
				delegateCount = handlers.delegateCount,
				cur = event.target;

			// Support (at least): Chrome, IE9
			// Find delegate handlers
			// Black-hole SVG <use> instance trees (#13180)
			//
			// Support: Firefox<=42+
			// Avoid non-left-click in FF but don't block IE radio events (#3861, gh-2343)
			if ( delegateCount && cur.nodeType &&
				( event.type !== "click" || isNaN( event.button ) || event.button < 1 ) ) {

				for ( ; cur !== this; cur = cur.parentNode || this ) {

					// Don't check non-elements (#13208)
					// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
					if ( cur.nodeType === 1 && ( cur.disabled !== true || event.type !== "click" ) ) {
						matches = [];
						for ( i = 0; i < delegateCount; i++ ) {
							handleObj = handlers[ i ];

							// Don't conflict with Object.prototype properties (#13203)
							sel = handleObj.selector + " ";

							if ( matches[ sel ] === undefined ) {
								matches[ sel ] = handleObj.needsContext ?
									jQuery( sel, this ).index( cur ) > -1 :
									jQuery.find( sel, this, null, [ cur ] ).length;
							}
							if ( matches[ sel ] ) {
								matches.push( handleObj );
							}
						}
						if ( matches.length ) {
							handlerQueue.push( { elem: cur, handlers: matches } );
						}
					}
				}
			}

			// Add the remaining (directly-bound) handlers
			if ( delegateCount < handlers.length ) {
				handlerQueue.push( { elem: this, handlers: handlers.slice( delegateCount ) } );
			}

			return handlerQueue;
		},

		// Includes some event props shared by KeyEvent and MouseEvent
		props: ( "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase " +
			"metaKey relatedTarget shiftKey target timeStamp view which" ).split( " " ),

		fixHooks: {},

		keyHooks: {
			props: "char charCode key keyCode".split( " " ),
			filter: function( event, original ) {

				// Add which for key events
				if ( event.which == null ) {
					event.which = original.charCode != null ? original.charCode : original.keyCode;
				}

				return event;
			}
		},

		mouseHooks: {
			props: ( "button buttons clientX clientY offsetX offsetY pageX pageY " +
				"screenX screenY toElement" ).split( " " ),
			filter: function( event, original ) {
				var eventDoc, doc, body,
					button = original.button;

				// Calculate pageX/Y if missing and clientX/Y available
				if ( event.pageX == null && original.clientX != null ) {
					eventDoc = event.target.ownerDocument || document;
					doc = eventDoc.documentElement;
					body = eventDoc.body;

					event.pageX = original.clientX +
						( doc && doc.scrollLeft || body && body.scrollLeft || 0 ) -
						( doc && doc.clientLeft || body && body.clientLeft || 0 );
					event.pageY = original.clientY +
						( doc && doc.scrollTop  || body && body.scrollTop  || 0 ) -
						( doc && doc.clientTop  || body && body.clientTop  || 0 );
				}

				// Add which for click: 1 === left; 2 === middle; 3 === right
				// Note: button is not normalized, so don't use it
				if ( !event.which && button !== undefined ) {
					event.which = ( button & 1 ? 1 : ( button & 2 ? 3 : ( button & 4 ? 2 : 0 ) ) );
				}

				return event;
			}
		},

		fix: function( event ) {
			if ( event[ jQuery.expando ] ) {
				return event;
			}

			// Create a writable copy of the event object and normalize some properties
			var i, prop, copy,
				type = event.type,
				originalEvent = event,
				fixHook = this.fixHooks[ type ];

			if ( !fixHook ) {
				this.fixHooks[ type ] = fixHook =
					rmouseEvent.test( type ) ? this.mouseHooks :
					rkeyEvent.test( type ) ? this.keyHooks :
					{};
			}
			copy = fixHook.props ? this.props.concat( fixHook.props ) : this.props;

			event = new jQuery.Event( originalEvent );

			i = copy.length;
			while ( i-- ) {
				prop = copy[ i ];
				event[ prop ] = originalEvent[ prop ];
			}

			// Support: Cordova 2.5 (WebKit) (#13255)
			// All events should have a target; Cordova deviceready doesn't
			if ( !event.target ) {
				event.target = document;
			}

			// Support: Safari 6.0+, Chrome<28
			// Target should not be a text node (#504, #13143)
			if ( event.target.nodeType === 3 ) {
				event.target = event.target.parentNode;
			}

			return fixHook.filter ? fixHook.filter( event, originalEvent ) : event;
		},

		special: {
			load: {

				// Prevent triggered image.load events from bubbling to window.load
				noBubble: true
			},
			focus: {

				// Fire native event if possible so blur/focus sequence is correct
				trigger: function() {
					if ( this !== safeActiveElement() && this.focus ) {
						this.focus();
						return false;
					}
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function() {
					if ( this === safeActiveElement() && this.blur ) {
						this.blur();
						return false;
					}
				},
				delegateType: "focusout"
			},
			click: {

				// For checkbox, fire native event so checked state will be right
				trigger: function() {
					if ( this.type === "checkbox" && this.click && jQuery.nodeName( this, "input" ) ) {
						this.click();
						return false;
					}
				},

				// For cross-browser consistency, don't fire native .click() on links
				_default: function( event ) {
					return jQuery.nodeName( event.target, "a" );
				}
			},

			beforeunload: {
				postDispatch: function( event ) {

					// Support: Firefox 20+
					// Firefox doesn't alert if the returnValue field is not set.
					if ( event.result !== undefined && event.originalEvent ) {
						event.originalEvent.returnValue = event.result;
					}
				}
			}
		}
	};

	jQuery.removeEvent = function( elem, type, handle ) {

		// This "if" is needed for plain objects
		if ( elem.removeEventListener ) {
			elem.removeEventListener( type, handle );
		}
	};

	jQuery.Event = function( src, props ) {

		// Allow instantiation without the 'new' keyword
		if ( !( this instanceof jQuery.Event ) ) {
			return new jQuery.Event( src, props );
		}

		// Event object
		if ( src && src.type ) {
			this.originalEvent = src;
			this.type = src.type;

			// Events bubbling up the document may have been marked as prevented
			// by a handler lower down the tree; reflect the correct value.
			this.isDefaultPrevented = src.defaultPrevented ||
					src.defaultPrevented === undefined &&

					// Support: Android<4.0
					src.returnValue === false ?
				returnTrue :
				returnFalse;

		// Event type
		} else {
			this.type = src;
		}

		// Put explicitly provided properties onto the event object
		if ( props ) {
			jQuery.extend( this, props );
		}

		// Create a timestamp if incoming event doesn't have one
		this.timeStamp = src && src.timeStamp || jQuery.now();

		// Mark it as fixed
		this[ jQuery.expando ] = true;
	};

	// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
	// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
	jQuery.Event.prototype = {
		constructor: jQuery.Event,
		isDefaultPrevented: returnFalse,
		isPropagationStopped: returnFalse,
		isImmediatePropagationStopped: returnFalse,
		isSimulated: false,

		preventDefault: function() {
			var e = this.originalEvent;

			this.isDefaultPrevented = returnTrue;

			if ( e && !this.isSimulated ) {
				e.preventDefault();
			}
		},
		stopPropagation: function() {
			var e = this.originalEvent;

			this.isPropagationStopped = returnTrue;

			if ( e && !this.isSimulated ) {
				e.stopPropagation();
			}
		},
		stopImmediatePropagation: function() {
			var e = this.originalEvent;

			this.isImmediatePropagationStopped = returnTrue;

			if ( e && !this.isSimulated ) {
				e.stopImmediatePropagation();
			}

			this.stopPropagation();
		}
	};

	// Create mouseenter/leave events using mouseover/out and event-time checks
	// so that event delegation works in jQuery.
	// Do the same for pointerenter/pointerleave and pointerover/pointerout
	//
	// Support: Safari 7 only
	// Safari sends mouseenter too often; see:
	// https://code.google.com/p/chromium/issues/detail?id=470258
	// for the description of the bug (it existed in older Chrome versions as well).
	jQuery.each( {
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function( orig, fix ) {
		jQuery.event.special[ orig ] = {
			delegateType: fix,
			bindType: fix,

			handle: function( event ) {
				var ret,
					target = this,
					related = event.relatedTarget,
					handleObj = event.handleObj;

				// For mouseenter/leave call the handler if related is outside the target.
				// NB: No relatedTarget if the mouse left/entered the browser window
				if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
					event.type = handleObj.origType;
					ret = handleObj.handler.apply( this, arguments );
					event.type = fix;
				}
				return ret;
			}
		};
	} );

	jQuery.fn.extend( {
		on: function( types, selector, data, fn ) {
			return on( this, types, selector, data, fn );
		},
		one: function( types, selector, data, fn ) {
			return on( this, types, selector, data, fn, 1 );
		},
		off: function( types, selector, fn ) {
			var handleObj, type;
			if ( types && types.preventDefault && types.handleObj ) {

				// ( event )  dispatched jQuery.Event
				handleObj = types.handleObj;
				jQuery( types.delegateTarget ).off(
					handleObj.namespace ?
						handleObj.origType + "." + handleObj.namespace :
						handleObj.origType,
					handleObj.selector,
					handleObj.handler
				);
				return this;
			}
			if ( typeof types === "object" ) {

				// ( types-object [, selector] )
				for ( type in types ) {
					this.off( type, selector, types[ type ] );
				}
				return this;
			}
			if ( selector === false || typeof selector === "function" ) {

				// ( types [, fn] )
				fn = selector;
				selector = undefined;
			}
			if ( fn === false ) {
				fn = returnFalse;
			}
			return this.each( function() {
				jQuery.event.remove( this, types, fn, selector );
			} );
		}
	} );


	var
		rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,

		// Support: IE 10-11, Edge 10240+
		// In IE/Edge using regex groups here causes severe slowdowns.
		// See https://connect.microsoft.com/IE/feedback/details/1736512/
		rnoInnerhtml = /<script|<style|<link/i,

		// checked="checked" or checked
		rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
		rscriptTypeMasked = /^true\/(.*)/,
		rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

	// Manipulating tables requires a tbody
	function manipulationTarget( elem, content ) {
		return jQuery.nodeName( elem, "table" ) &&
			jQuery.nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ?

			elem.getElementsByTagName( "tbody" )[ 0 ] ||
				elem.appendChild( elem.ownerDocument.createElement( "tbody" ) ) :
			elem;
	}

	// Replace/restore the type attribute of script elements for safe DOM manipulation
	function disableScript( elem ) {
		elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
		return elem;
	}
	function restoreScript( elem ) {
		var match = rscriptTypeMasked.exec( elem.type );

		if ( match ) {
			elem.type = match[ 1 ];
		} else {
			elem.removeAttribute( "type" );
		}

		return elem;
	}

	function cloneCopyEvent( src, dest ) {
		var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

		if ( dest.nodeType !== 1 ) {
			return;
		}

		// 1. Copy private data: events, handlers, etc.
		if ( dataPriv.hasData( src ) ) {
			pdataOld = dataPriv.access( src );
			pdataCur = dataPriv.set( dest, pdataOld );
			events = pdataOld.events;

			if ( events ) {
				delete pdataCur.handle;
				pdataCur.events = {};

				for ( type in events ) {
					for ( i = 0, l = events[ type ].length; i < l; i++ ) {
						jQuery.event.add( dest, type, events[ type ][ i ] );
					}
				}
			}
		}

		// 2. Copy user data
		if ( dataUser.hasData( src ) ) {
			udataOld = dataUser.access( src );
			udataCur = jQuery.extend( {}, udataOld );

			dataUser.set( dest, udataCur );
		}
	}

	// Fix IE bugs, see support tests
	function fixInput( src, dest ) {
		var nodeName = dest.nodeName.toLowerCase();

		// Fails to persist the checked state of a cloned checkbox or radio button.
		if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
			dest.checked = src.checked;

		// Fails to return the selected option to the default selected state when cloning options
		} else if ( nodeName === "input" || nodeName === "textarea" ) {
			dest.defaultValue = src.defaultValue;
		}
	}

	function domManip( collection, args, callback, ignored ) {

		// Flatten any nested arrays
		args = concat.apply( [], args );

		var fragment, first, scripts, hasScripts, node, doc,
			i = 0,
			l = collection.length,
			iNoClone = l - 1,
			value = args[ 0 ],
			isFunction = jQuery.isFunction( value );

		// We can't cloneNode fragments that contain checked, in WebKit
		if ( isFunction ||
				( l > 1 && typeof value === "string" &&
					!support.checkClone && rchecked.test( value ) ) ) {
			return collection.each( function( index ) {
				var self = collection.eq( index );
				if ( isFunction ) {
					args[ 0 ] = value.call( this, index, self.html() );
				}
				domManip( self, args, callback, ignored );
			} );
		}

		if ( l ) {
			fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
			first = fragment.firstChild;

			if ( fragment.childNodes.length === 1 ) {
				fragment = first;
			}

			// Require either new content or an interest in ignored elements to invoke the callback
			if ( first || ignored ) {
				scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
				hasScripts = scripts.length;

				// Use the original fragment for the last item
				// instead of the first because it can end up
				// being emptied incorrectly in certain situations (#8070).
				for ( ; i < l; i++ ) {
					node = fragment;

					if ( i !== iNoClone ) {
						node = jQuery.clone( node, true, true );

						// Keep references to cloned scripts for later restoration
						if ( hasScripts ) {

							// Support: Android<4.1, PhantomJS<2
							// push.apply(_, arraylike) throws on ancient WebKit
							jQuery.merge( scripts, getAll( node, "script" ) );
						}
					}

					callback.call( collection[ i ], node, i );
				}

				if ( hasScripts ) {
					doc = scripts[ scripts.length - 1 ].ownerDocument;

					// Reenable scripts
					jQuery.map( scripts, restoreScript );

					// Evaluate executable scripts on first document insertion
					for ( i = 0; i < hasScripts; i++ ) {
						node = scripts[ i ];
						if ( rscriptType.test( node.type || "" ) &&
							!dataPriv.access( node, "globalEval" ) &&
							jQuery.contains( doc, node ) ) {

							if ( node.src ) {

								// Optional AJAX dependency, but won't run scripts if not present
								if ( jQuery._evalUrl ) {
									jQuery._evalUrl( node.src );
								}
							} else {
								jQuery.globalEval( node.textContent.replace( rcleanScript, "" ) );
							}
						}
					}
				}
			}
		}

		return collection;
	}

	function remove( elem, selector, keepData ) {
		var node,
			nodes = selector ? jQuery.filter( selector, elem ) : elem,
			i = 0;

		for ( ; ( node = nodes[ i ] ) != null; i++ ) {
			if ( !keepData && node.nodeType === 1 ) {
				jQuery.cleanData( getAll( node ) );
			}

			if ( node.parentNode ) {
				if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
					setGlobalEval( getAll( node, "script" ) );
				}
				node.parentNode.removeChild( node );
			}
		}

		return elem;
	}

	jQuery.extend( {
		htmlPrefilter: function( html ) {
			return html.replace( rxhtmlTag, "<$1></$2>" );
		},

		clone: function( elem, dataAndEvents, deepDataAndEvents ) {
			var i, l, srcElements, destElements,
				clone = elem.cloneNode( true ),
				inPage = jQuery.contains( elem.ownerDocument, elem );

			// Fix IE cloning issues
			if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
					!jQuery.isXMLDoc( elem ) ) {

				// We eschew Sizzle here for performance reasons: http://jsperf.com/getall-vs-sizzle/2
				destElements = getAll( clone );
				srcElements = getAll( elem );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					fixInput( srcElements[ i ], destElements[ i ] );
				}
			}

			// Copy the events from the original to the clone
			if ( dataAndEvents ) {
				if ( deepDataAndEvents ) {
					srcElements = srcElements || getAll( elem );
					destElements = destElements || getAll( clone );

					for ( i = 0, l = srcElements.length; i < l; i++ ) {
						cloneCopyEvent( srcElements[ i ], destElements[ i ] );
					}
				} else {
					cloneCopyEvent( elem, clone );
				}
			}

			// Preserve script evaluation history
			destElements = getAll( clone, "script" );
			if ( destElements.length > 0 ) {
				setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
			}

			// Return the cloned set
			return clone;
		},

		cleanData: function( elems ) {
			var data, elem, type,
				special = jQuery.event.special,
				i = 0;

			for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
				if ( acceptData( elem ) ) {
					if ( ( data = elem[ dataPriv.expando ] ) ) {
						if ( data.events ) {
							for ( type in data.events ) {
								if ( special[ type ] ) {
									jQuery.event.remove( elem, type );

								// This is a shortcut to avoid jQuery.event.remove's overhead
								} else {
									jQuery.removeEvent( elem, type, data.handle );
								}
							}
						}

						// Support: Chrome <= 35-45+
						// Assign undefined instead of using delete, see Data#remove
						elem[ dataPriv.expando ] = undefined;
					}
					if ( elem[ dataUser.expando ] ) {

						// Support: Chrome <= 35-45+
						// Assign undefined instead of using delete, see Data#remove
						elem[ dataUser.expando ] = undefined;
					}
				}
			}
		}
	} );

	jQuery.fn.extend( {

		// Keep domManip exposed until 3.0 (gh-2225)
		domManip: domManip,

		detach: function( selector ) {
			return remove( this, selector, true );
		},

		remove: function( selector ) {
			return remove( this, selector );
		},

		text: function( value ) {
			return access( this, function( value ) {
				return value === undefined ?
					jQuery.text( this ) :
					this.empty().each( function() {
						if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
							this.textContent = value;
						}
					} );
			}, null, value, arguments.length );
		},

		append: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.appendChild( elem );
				}
			} );
		},

		prepend: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.insertBefore( elem, target.firstChild );
				}
			} );
		},

		before: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this );
				}
			} );
		},

		after: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this.nextSibling );
				}
			} );
		},

		empty: function() {
			var elem,
				i = 0;

			for ( ; ( elem = this[ i ] ) != null; i++ ) {
				if ( elem.nodeType === 1 ) {

					// Prevent memory leaks
					jQuery.cleanData( getAll( elem, false ) );

					// Remove any remaining nodes
					elem.textContent = "";
				}
			}

			return this;
		},

		clone: function( dataAndEvents, deepDataAndEvents ) {
			dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
			deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

			return this.map( function() {
				return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
			} );
		},

		html: function( value ) {
			return access( this, function( value ) {
				var elem = this[ 0 ] || {},
					i = 0,
					l = this.length;

				if ( value === undefined && elem.nodeType === 1 ) {
					return elem.innerHTML;
				}

				// See if we can take a shortcut and just use innerHTML
				if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
					!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

					value = jQuery.htmlPrefilter( value );

					try {
						for ( ; i < l; i++ ) {
							elem = this[ i ] || {};

							// Remove element nodes and prevent memory leaks
							if ( elem.nodeType === 1 ) {
								jQuery.cleanData( getAll( elem, false ) );
								elem.innerHTML = value;
							}
						}

						elem = 0;

					// If using innerHTML throws an exception, use the fallback method
					} catch ( e ) {}
				}

				if ( elem ) {
					this.empty().append( value );
				}
			}, null, value, arguments.length );
		},

		replaceWith: function() {
			var ignored = [];

			// Make the changes, replacing each non-ignored context element with the new content
			return domManip( this, arguments, function( elem ) {
				var parent = this.parentNode;

				if ( jQuery.inArray( this, ignored ) < 0 ) {
					jQuery.cleanData( getAll( this ) );
					if ( parent ) {
						parent.replaceChild( elem, this );
					}
				}

			// Force callback invocation
			}, ignored );
		}
	} );

	jQuery.each( {
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function( name, original ) {
		jQuery.fn[ name ] = function( selector ) {
			var elems,
				ret = [],
				insert = jQuery( selector ),
				last = insert.length - 1,
				i = 0;

			for ( ; i <= last; i++ ) {
				elems = i === last ? this : this.clone( true );
				jQuery( insert[ i ] )[ original ]( elems );

				// Support: QtWebKit
				// .get() because push.apply(_, arraylike) throws
				push.apply( ret, elems.get() );
			}

			return this.pushStack( ret );
		};
	} );


	var iframe,
		elemdisplay = {

			// Support: Firefox
			// We have to pre-define these values for FF (#10227)
			HTML: "block",
			BODY: "block"
		};

	/**
	 * Retrieve the actual display of a element
	 * @param {String} name nodeName of the element
	 * @param {Object} doc Document object
	 */

	// Called only from within defaultDisplay
	function actualDisplay( name, doc ) {
		var elem = jQuery( doc.createElement( name ) ).appendTo( doc.body ),

			display = jQuery.css( elem[ 0 ], "display" );

		// We don't have any data stored on the element,
		// so use "detach" method as fast way to get rid of the element
		elem.detach();

		return display;
	}

	/**
	 * Try to determine the default display value of an element
	 * @param {String} nodeName
	 */
	function defaultDisplay( nodeName ) {
		var doc = document,
			display = elemdisplay[ nodeName ];

		if ( !display ) {
			display = actualDisplay( nodeName, doc );

			// If the simple way fails, read from inside an iframe
			if ( display === "none" || !display ) {

				// Use the already-created iframe if possible
				iframe = ( iframe || jQuery( "<iframe frameborder='0' width='0' height='0'/>" ) )
					.appendTo( doc.documentElement );

				// Always write a new HTML skeleton so Webkit and Firefox don't choke on reuse
				doc = iframe[ 0 ].contentDocument;

				// Support: IE
				doc.write();
				doc.close();

				display = actualDisplay( nodeName, doc );
				iframe.detach();
			}

			// Store the correct default display
			elemdisplay[ nodeName ] = display;
		}

		return display;
	}
	var rmargin = ( /^margin/ );

	var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

	var getStyles = function( elem ) {

			// Support: IE<=11+, Firefox<=30+ (#15098, #14150)
			// IE throws on elements created in popups
			// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
			var view = elem.ownerDocument.defaultView;

			if ( !view || !view.opener ) {
				view = window;
			}

			return view.getComputedStyle( elem );
		};

	var swap = function( elem, options, callback, args ) {
		var ret, name,
			old = {};

		// Remember the old values, and insert the new ones
		for ( name in options ) {
			old[ name ] = elem.style[ name ];
			elem.style[ name ] = options[ name ];
		}

		ret = callback.apply( elem, args || [] );

		// Revert the old values
		for ( name in options ) {
			elem.style[ name ] = old[ name ];
		}

		return ret;
	};


	var documentElement = document.documentElement;



	( function() {
		var pixelPositionVal, boxSizingReliableVal, pixelMarginRightVal, reliableMarginLeftVal,
			container = document.createElement( "div" ),
			div = document.createElement( "div" );

		// Finish early in limited (non-browser) environments
		if ( !div.style ) {
			return;
		}

		// Support: IE9-11+
		// Style of cloned element affects source element cloned (#8908)
		div.style.backgroundClip = "content-box";
		div.cloneNode( true ).style.backgroundClip = "";
		support.clearCloneStyle = div.style.backgroundClip === "content-box";

		container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" +
			"padding:0;margin-top:1px;position:absolute";
		container.appendChild( div );

		// Executing both pixelPosition & boxSizingReliable tests require only one layout
		// so they're executed at the same time to save the second computation.
		function computeStyleTests() {
			div.style.cssText =

				// Support: Firefox<29, Android 2.3
				// Vendor-prefix box-sizing
				"-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;" +
				"position:relative;display:block;" +
				"margin:auto;border:1px;padding:1px;" +
				"top:1%;width:50%";
			div.innerHTML = "";
			documentElement.appendChild( container );

			var divStyle = window.getComputedStyle( div );
			pixelPositionVal = divStyle.top !== "1%";
			reliableMarginLeftVal = divStyle.marginLeft === "2px";
			boxSizingReliableVal = divStyle.width === "4px";

			// Support: Android 4.0 - 4.3 only
			// Some styles come back with percentage values, even though they shouldn't
			div.style.marginRight = "50%";
			pixelMarginRightVal = divStyle.marginRight === "4px";

			documentElement.removeChild( container );
		}

		jQuery.extend( support, {
			pixelPosition: function() {

				// This test is executed only once but we still do memoizing
				// since we can use the boxSizingReliable pre-computing.
				// No need to check if the test was already performed, though.
				computeStyleTests();
				return pixelPositionVal;
			},
			boxSizingReliable: function() {
				if ( boxSizingReliableVal == null ) {
					computeStyleTests();
				}
				return boxSizingReliableVal;
			},
			pixelMarginRight: function() {

				// Support: Android 4.0-4.3
				// We're checking for boxSizingReliableVal here instead of pixelMarginRightVal
				// since that compresses better and they're computed together anyway.
				if ( boxSizingReliableVal == null ) {
					computeStyleTests();
				}
				return pixelMarginRightVal;
			},
			reliableMarginLeft: function() {

				// Support: IE <=8 only, Android 4.0 - 4.3 only, Firefox <=3 - 37
				if ( boxSizingReliableVal == null ) {
					computeStyleTests();
				}
				return reliableMarginLeftVal;
			},
			reliableMarginRight: function() {

				// Support: Android 2.3
				// Check if div with explicit width and no margin-right incorrectly
				// gets computed margin-right based on width of container. (#3333)
				// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
				// This support function is only executed once so no memoizing is needed.
				var ret,
					marginDiv = div.appendChild( document.createElement( "div" ) );

				// Reset CSS: box-sizing; display; margin; border; padding
				marginDiv.style.cssText = div.style.cssText =

					// Support: Android 2.3
					// Vendor-prefix box-sizing
					"-webkit-box-sizing:content-box;box-sizing:content-box;" +
					"display:block;margin:0;border:0;padding:0";
				marginDiv.style.marginRight = marginDiv.style.width = "0";
				div.style.width = "1px";
				documentElement.appendChild( container );

				ret = !parseFloat( window.getComputedStyle( marginDiv ).marginRight );

				documentElement.removeChild( container );
				div.removeChild( marginDiv );

				return ret;
			}
		} );
	} )();


	function curCSS( elem, name, computed ) {
		var width, minWidth, maxWidth, ret,
			style = elem.style;

		computed = computed || getStyles( elem );
		ret = computed ? computed.getPropertyValue( name ) || computed[ name ] : undefined;

		// Support: Opera 12.1x only
		// Fall back to style even without computed
		// computed is undefined for elems on document fragments
		if ( ( ret === "" || ret === undefined ) && !jQuery.contains( elem.ownerDocument, elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// Support: IE9
		// getPropertyValue is only needed for .css('filter') (#12537)
		if ( computed ) {

			// A tribute to the "awesome hack by Dean Edwards"
			// Android Browser returns percentage for some values,
			// but width seems to be reliably pixels.
			// This is against the CSSOM draft spec:
			// http://dev.w3.org/csswg/cssom/#resolved-values
			if ( !support.pixelMarginRight() && rnumnonpx.test( ret ) && rmargin.test( name ) ) {

				// Remember the original values
				width = style.width;
				minWidth = style.minWidth;
				maxWidth = style.maxWidth;

				// Put in the new values to get a computed value out
				style.minWidth = style.maxWidth = style.width = ret;
				ret = computed.width;

				// Revert the changed values
				style.width = width;
				style.minWidth = minWidth;
				style.maxWidth = maxWidth;
			}
		}

		return ret !== undefined ?

			// Support: IE9-11+
			// IE returns zIndex value as an integer.
			ret + "" :
			ret;
	}


	function addGetHookIf( conditionFn, hookFn ) {

		// Define the hook, we'll check on the first run if it's really needed.
		return {
			get: function() {
				if ( conditionFn() ) {

					// Hook not needed (or it's not possible to use it due
					// to missing dependency), remove it.
					delete this.get;
					return;
				}

				// Hook needed; redefine it so that the support test is not executed again.
				return ( this.get = hookFn ).apply( this, arguments );
			}
		};
	}


	var

		// Swappable if display is none or starts with table
		// except "table", "table-cell", or "table-caption"
		// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
		rdisplayswap = /^(none|table(?!-c[ea]).+)/,

		cssShow = { position: "absolute", visibility: "hidden", display: "block" },
		cssNormalTransform = {
			letterSpacing: "0",
			fontWeight: "400"
		},

		cssPrefixes = [ "Webkit", "O", "Moz", "ms" ],
		emptyStyle = document.createElement( "div" ).style;

	// Return a css property mapped to a potentially vendor prefixed property
	function vendorPropName( name ) {

		// Shortcut for names that are not vendor prefixed
		if ( name in emptyStyle ) {
			return name;
		}

		// Check for vendor prefixed names
		var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
			i = cssPrefixes.length;

		while ( i-- ) {
			name = cssPrefixes[ i ] + capName;
			if ( name in emptyStyle ) {
				return name;
			}
		}
	}

	function setPositiveNumber( elem, value, subtract ) {

		// Any relative (+/-) values have already been
		// normalized at this point
		var matches = rcssNum.exec( value );
		return matches ?

			// Guard against undefined "subtract", e.g., when used as in cssHooks
			Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
			value;
	}

	function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
		var i = extra === ( isBorderBox ? "border" : "content" ) ?

			// If we already have the right measurement, avoid augmentation
			4 :

			// Otherwise initialize for horizontal or vertical properties
			name === "width" ? 1 : 0,

			val = 0;

		for ( ; i < 4; i += 2 ) {

			// Both box models exclude margin, so add it if we want it
			if ( extra === "margin" ) {
				val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
			}

			if ( isBorderBox ) {

				// border-box includes padding, so remove it if we want content
				if ( extra === "content" ) {
					val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
				}

				// At this point, extra isn't border nor margin, so remove border
				if ( extra !== "margin" ) {
					val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			} else {

				// At this point, extra isn't content, so add padding
				val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

				// At this point, extra isn't content nor padding, so add border
				if ( extra !== "padding" ) {
					val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			}
		}

		return val;
	}

	function getWidthOrHeight( elem, name, extra ) {

		// Start with offset property, which is equivalent to the border-box value
		var valueIsBorderBox = true,
			val = name === "width" ? elem.offsetWidth : elem.offsetHeight,
			styles = getStyles( elem ),
			isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

		// Some non-html elements return undefined for offsetWidth, so check for null/undefined
		// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
		// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
		if ( val <= 0 || val == null ) {

			// Fall back to computed then uncomputed css if necessary
			val = curCSS( elem, name, styles );
			if ( val < 0 || val == null ) {
				val = elem.style[ name ];
			}

			// Computed unit is not pixels. Stop here and return.
			if ( rnumnonpx.test( val ) ) {
				return val;
			}

			// Check for style in case a browser which returns unreliable values
			// for getComputedStyle silently falls back to the reliable elem.style
			valueIsBorderBox = isBorderBox &&
				( support.boxSizingReliable() || val === elem.style[ name ] );

			// Normalize "", auto, and prepare for extra
			val = parseFloat( val ) || 0;
		}

		// Use the active box-sizing model to add/subtract irrelevant styles
		return ( val +
			augmentWidthOrHeight(
				elem,
				name,
				extra || ( isBorderBox ? "border" : "content" ),
				valueIsBorderBox,
				styles
			)
		) + "px";
	}

	function showHide( elements, show ) {
		var display, elem, hidden,
			values = [],
			index = 0,
			length = elements.length;

		for ( ; index < length; index++ ) {
			elem = elements[ index ];
			if ( !elem.style ) {
				continue;
			}

			values[ index ] = dataPriv.get( elem, "olddisplay" );
			display = elem.style.display;
			if ( show ) {

				// Reset the inline display of this element to learn if it is
				// being hidden by cascaded rules or not
				if ( !values[ index ] && display === "none" ) {
					elem.style.display = "";
				}

				// Set elements which have been overridden with display: none
				// in a stylesheet to whatever the default browser style is
				// for such an element
				if ( elem.style.display === "" && isHidden( elem ) ) {
					values[ index ] = dataPriv.access(
						elem,
						"olddisplay",
						defaultDisplay( elem.nodeName )
					);
				}
			} else {
				hidden = isHidden( elem );

				if ( display !== "none" || !hidden ) {
					dataPriv.set(
						elem,
						"olddisplay",
						hidden ? display : jQuery.css( elem, "display" )
					);
				}
			}
		}

		// Set the display of most of the elements in a second loop
		// to avoid the constant reflow
		for ( index = 0; index < length; index++ ) {
			elem = elements[ index ];
			if ( !elem.style ) {
				continue;
			}
			if ( !show || elem.style.display === "none" || elem.style.display === "" ) {
				elem.style.display = show ? values[ index ] || "" : "none";
			}
		}

		return elements;
	}

	jQuery.extend( {

		// Add in style property hooks for overriding the default
		// behavior of getting and setting a style property
		cssHooks: {
			opacity: {
				get: function( elem, computed ) {
					if ( computed ) {

						// We should always get a number back from opacity
						var ret = curCSS( elem, "opacity" );
						return ret === "" ? "1" : ret;
					}
				}
			}
		},

		// Don't automatically add "px" to these possibly-unitless properties
		cssNumber: {
			"animationIterationCount": true,
			"columnCount": true,
			"fillOpacity": true,
			"flexGrow": true,
			"flexShrink": true,
			"fontWeight": true,
			"lineHeight": true,
			"opacity": true,
			"order": true,
			"orphans": true,
			"widows": true,
			"zIndex": true,
			"zoom": true
		},

		// Add in properties whose names you wish to fix before
		// setting or getting the value
		cssProps: {
			"float": "cssFloat"
		},

		// Get and set the style property on a DOM Node
		style: function( elem, name, value, extra ) {

			// Don't set styles on text and comment nodes
			if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
				return;
			}

			// Make sure that we're working with the right name
			var ret, type, hooks,
				origName = jQuery.camelCase( name ),
				style = elem.style;

			name = jQuery.cssProps[ origName ] ||
				( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

			// Gets hook for the prefixed version, then unprefixed version
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

			// Check if we're setting a value
			if ( value !== undefined ) {
				type = typeof value;

				// Convert "+=" or "-=" to relative numbers (#7345)
				if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
					value = adjustCSS( elem, name, ret );

					// Fixes bug #9237
					type = "number";
				}

				// Make sure that null and NaN values aren't set (#7116)
				if ( value == null || value !== value ) {
					return;
				}

				// If a number was passed in, add the unit (except for certain CSS properties)
				if ( type === "number" ) {
					value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
				}

				// Support: IE9-11+
				// background-* props affect original clone's values
				if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
					style[ name ] = "inherit";
				}

				// If a hook was provided, use that value, otherwise just set the specified value
				if ( !hooks || !( "set" in hooks ) ||
					( value = hooks.set( elem, value, extra ) ) !== undefined ) {

					style[ name ] = value;
				}

			} else {

				// If a hook was provided get the non-computed value from there
				if ( hooks && "get" in hooks &&
					( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

					return ret;
				}

				// Otherwise just get the value from the style object
				return style[ name ];
			}
		},

		css: function( elem, name, extra, styles ) {
			var val, num, hooks,
				origName = jQuery.camelCase( name );

			// Make sure that we're working with the right name
			name = jQuery.cssProps[ origName ] ||
				( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

			// Try prefixed name followed by the unprefixed name
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

			// If a hook was provided get the computed value from there
			if ( hooks && "get" in hooks ) {
				val = hooks.get( elem, true, extra );
			}

			// Otherwise, if a way to get the computed value exists, use that
			if ( val === undefined ) {
				val = curCSS( elem, name, styles );
			}

			// Convert "normal" to computed value
			if ( val === "normal" && name in cssNormalTransform ) {
				val = cssNormalTransform[ name ];
			}

			// Make numeric if forced or a qualifier was provided and val looks numeric
			if ( extra === "" || extra ) {
				num = parseFloat( val );
				return extra === true || isFinite( num ) ? num || 0 : val;
			}
			return val;
		}
	} );

	jQuery.each( [ "height", "width" ], function( i, name ) {
		jQuery.cssHooks[ name ] = {
			get: function( elem, computed, extra ) {
				if ( computed ) {

					// Certain elements can have dimension info if we invisibly show them
					// but it must have a current display style that would benefit
					return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&
						elem.offsetWidth === 0 ?
							swap( elem, cssShow, function() {
								return getWidthOrHeight( elem, name, extra );
							} ) :
							getWidthOrHeight( elem, name, extra );
				}
			},

			set: function( elem, value, extra ) {
				var matches,
					styles = extra && getStyles( elem ),
					subtract = extra && augmentWidthOrHeight(
						elem,
						name,
						extra,
						jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
						styles
					);

				// Convert to pixels if value adjustment is needed
				if ( subtract && ( matches = rcssNum.exec( value ) ) &&
					( matches[ 3 ] || "px" ) !== "px" ) {

					elem.style[ name ] = value;
					value = jQuery.css( elem, name );
				}

				return setPositiveNumber( elem, value, subtract );
			}
		};
	} );

	jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
		function( elem, computed ) {
			if ( computed ) {
				return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
					elem.getBoundingClientRect().left -
						swap( elem, { marginLeft: 0 }, function() {
							return elem.getBoundingClientRect().left;
						} )
					) + "px";
			}
		}
	);

	// Support: Android 2.3
	jQuery.cssHooks.marginRight = addGetHookIf( support.reliableMarginRight,
		function( elem, computed ) {
			if ( computed ) {
				return swap( elem, { "display": "inline-block" },
					curCSS, [ elem, "marginRight" ] );
			}
		}
	);

	// These hooks are used by animate to expand properties
	jQuery.each( {
		margin: "",
		padding: "",
		border: "Width"
	}, function( prefix, suffix ) {
		jQuery.cssHooks[ prefix + suffix ] = {
			expand: function( value ) {
				var i = 0,
					expanded = {},

					// Assumes a single number if not a string
					parts = typeof value === "string" ? value.split( " " ) : [ value ];

				for ( ; i < 4; i++ ) {
					expanded[ prefix + cssExpand[ i ] + suffix ] =
						parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
				}

				return expanded;
			}
		};

		if ( !rmargin.test( prefix ) ) {
			jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
		}
	} );

	jQuery.fn.extend( {
		css: function( name, value ) {
			return access( this, function( elem, name, value ) {
				var styles, len,
					map = {},
					i = 0;

				if ( jQuery.isArray( name ) ) {
					styles = getStyles( elem );
					len = name.length;

					for ( ; i < len; i++ ) {
						map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
					}

					return map;
				}

				return value !== undefined ?
					jQuery.style( elem, name, value ) :
					jQuery.css( elem, name );
			}, name, value, arguments.length > 1 );
		},
		show: function() {
			return showHide( this, true );
		},
		hide: function() {
			return showHide( this );
		},
		toggle: function( state ) {
			if ( typeof state === "boolean" ) {
				return state ? this.show() : this.hide();
			}

			return this.each( function() {
				if ( isHidden( this ) ) {
					jQuery( this ).show();
				} else {
					jQuery( this ).hide();
				}
			} );
		}
	} );


	function Tween( elem, options, prop, end, easing ) {
		return new Tween.prototype.init( elem, options, prop, end, easing );
	}
	jQuery.Tween = Tween;

	Tween.prototype = {
		constructor: Tween,
		init: function( elem, options, prop, end, easing, unit ) {
			this.elem = elem;
			this.prop = prop;
			this.easing = easing || jQuery.easing._default;
			this.options = options;
			this.start = this.now = this.cur();
			this.end = end;
			this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
		},
		cur: function() {
			var hooks = Tween.propHooks[ this.prop ];

			return hooks && hooks.get ?
				hooks.get( this ) :
				Tween.propHooks._default.get( this );
		},
		run: function( percent ) {
			var eased,
				hooks = Tween.propHooks[ this.prop ];

			if ( this.options.duration ) {
				this.pos = eased = jQuery.easing[ this.easing ](
					percent, this.options.duration * percent, 0, 1, this.options.duration
				);
			} else {
				this.pos = eased = percent;
			}
			this.now = ( this.end - this.start ) * eased + this.start;

			if ( this.options.step ) {
				this.options.step.call( this.elem, this.now, this );
			}

			if ( hooks && hooks.set ) {
				hooks.set( this );
			} else {
				Tween.propHooks._default.set( this );
			}
			return this;
		}
	};

	Tween.prototype.init.prototype = Tween.prototype;

	Tween.propHooks = {
		_default: {
			get: function( tween ) {
				var result;

				// Use a property on the element directly when it is not a DOM element,
				// or when there is no matching style property that exists.
				if ( tween.elem.nodeType !== 1 ||
					tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
					return tween.elem[ tween.prop ];
				}

				// Passing an empty string as a 3rd parameter to .css will automatically
				// attempt a parseFloat and fallback to a string if the parse fails.
				// Simple values such as "10px" are parsed to Float;
				// complex values such as "rotate(1rad)" are returned as-is.
				result = jQuery.css( tween.elem, tween.prop, "" );

				// Empty strings, null, undefined and "auto" are converted to 0.
				return !result || result === "auto" ? 0 : result;
			},
			set: function( tween ) {

				// Use step hook for back compat.
				// Use cssHook if its there.
				// Use .style if available and use plain properties where available.
				if ( jQuery.fx.step[ tween.prop ] ) {
					jQuery.fx.step[ tween.prop ]( tween );
				} else if ( tween.elem.nodeType === 1 &&
					( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
						jQuery.cssHooks[ tween.prop ] ) ) {
					jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
				} else {
					tween.elem[ tween.prop ] = tween.now;
				}
			}
		}
	};

	// Support: IE9
	// Panic based approach to setting things on disconnected nodes
	Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
		set: function( tween ) {
			if ( tween.elem.nodeType && tween.elem.parentNode ) {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	};

	jQuery.easing = {
		linear: function( p ) {
			return p;
		},
		swing: function( p ) {
			return 0.5 - Math.cos( p * Math.PI ) / 2;
		},
		_default: "swing"
	};

	jQuery.fx = Tween.prototype.init;

	// Back Compat <1.8 extension point
	jQuery.fx.step = {};




	var
		fxNow, timerId,
		rfxtypes = /^(?:toggle|show|hide)$/,
		rrun = /queueHooks$/;

	// Animations created synchronously will run synchronously
	function createFxNow() {
		window.setTimeout( function() {
			fxNow = undefined;
		} );
		return ( fxNow = jQuery.now() );
	}

	// Generate parameters to create a standard animation
	function genFx( type, includeWidth ) {
		var which,
			i = 0,
			attrs = { height: type };

		// If we include width, step value is 1 to do all cssExpand values,
		// otherwise step value is 2 to skip over Left and Right
		includeWidth = includeWidth ? 1 : 0;
		for ( ; i < 4 ; i += 2 - includeWidth ) {
			which = cssExpand[ i ];
			attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
		}

		if ( includeWidth ) {
			attrs.opacity = attrs.width = type;
		}

		return attrs;
	}

	function createTween( value, prop, animation ) {
		var tween,
			collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
			index = 0,
			length = collection.length;
		for ( ; index < length; index++ ) {
			if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

				// We're done with this property
				return tween;
			}
		}
	}

	function defaultPrefilter( elem, props, opts ) {
		/* jshint validthis: true */
		var prop, value, toggle, tween, hooks, oldfire, display, checkDisplay,
			anim = this,
			orig = {},
			style = elem.style,
			hidden = elem.nodeType && isHidden( elem ),
			dataShow = dataPriv.get( elem, "fxshow" );

		// Handle queue: false promises
		if ( !opts.queue ) {
			hooks = jQuery._queueHooks( elem, "fx" );
			if ( hooks.unqueued == null ) {
				hooks.unqueued = 0;
				oldfire = hooks.empty.fire;
				hooks.empty.fire = function() {
					if ( !hooks.unqueued ) {
						oldfire();
					}
				};
			}
			hooks.unqueued++;

			anim.always( function() {

				// Ensure the complete handler is called before this completes
				anim.always( function() {
					hooks.unqueued--;
					if ( !jQuery.queue( elem, "fx" ).length ) {
						hooks.empty.fire();
					}
				} );
			} );
		}

		// Height/width overflow pass
		if ( elem.nodeType === 1 && ( "height" in props || "width" in props ) ) {

			// Make sure that nothing sneaks out
			// Record all 3 overflow attributes because IE9-10 do not
			// change the overflow attribute when overflowX and
			// overflowY are set to the same value
			opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

			// Set display property to inline-block for height/width
			// animations on inline elements that are having width/height animated
			display = jQuery.css( elem, "display" );

			// Test default display if display is currently "none"
			checkDisplay = display === "none" ?
				dataPriv.get( elem, "olddisplay" ) || defaultDisplay( elem.nodeName ) : display;

			if ( checkDisplay === "inline" && jQuery.css( elem, "float" ) === "none" ) {
				style.display = "inline-block";
			}
		}

		if ( opts.overflow ) {
			style.overflow = "hidden";
			anim.always( function() {
				style.overflow = opts.overflow[ 0 ];
				style.overflowX = opts.overflow[ 1 ];
				style.overflowY = opts.overflow[ 2 ];
			} );
		}

		// show/hide pass
		for ( prop in props ) {
			value = props[ prop ];
			if ( rfxtypes.exec( value ) ) {
				delete props[ prop ];
				toggle = toggle || value === "toggle";
				if ( value === ( hidden ? "hide" : "show" ) ) {

					// If there is dataShow left over from a stopped hide or show
					// and we are going to proceed with show, we should pretend to be hidden
					if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
						hidden = true;
					} else {
						continue;
					}
				}
				orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );

			// Any non-fx value stops us from restoring the original display value
			} else {
				display = undefined;
			}
		}

		if ( !jQuery.isEmptyObject( orig ) ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", {} );
			}

			// Store state if its toggle - enables .stop().toggle() to "reverse"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}
			if ( hidden ) {
				jQuery( elem ).show();
			} else {
				anim.done( function() {
					jQuery( elem ).hide();
				} );
			}
			anim.done( function() {
				var prop;

				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
			for ( prop in orig ) {
				tween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );

				if ( !( prop in dataShow ) ) {
					dataShow[ prop ] = tween.start;
					if ( hidden ) {
						tween.end = tween.start;
						tween.start = prop === "width" || prop === "height" ? 1 : 0;
					}
				}
			}

		// If this is a noop like .hide().hide(), restore an overwritten display value
		} else if ( ( display === "none" ? defaultDisplay( elem.nodeName ) : display ) === "inline" ) {
			style.display = display;
		}
	}

	function propFilter( props, specialEasing ) {
		var index, name, easing, value, hooks;

		// camelCase, specialEasing and expand cssHook pass
		for ( index in props ) {
			name = jQuery.camelCase( index );
			easing = specialEasing[ name ];
			value = props[ index ];
			if ( jQuery.isArray( value ) ) {
				easing = value[ 1 ];
				value = props[ index ] = value[ 0 ];
			}

			if ( index !== name ) {
				props[ name ] = value;
				delete props[ index ];
			}

			hooks = jQuery.cssHooks[ name ];
			if ( hooks && "expand" in hooks ) {
				value = hooks.expand( value );
				delete props[ name ];

				// Not quite $.extend, this won't overwrite existing keys.
				// Reusing 'index' because we have the correct "name"
				for ( index in value ) {
					if ( !( index in props ) ) {
						props[ index ] = value[ index ];
						specialEasing[ index ] = easing;
					}
				}
			} else {
				specialEasing[ name ] = easing;
			}
		}
	}

	function Animation( elem, properties, options ) {
		var result,
			stopped,
			index = 0,
			length = Animation.prefilters.length,
			deferred = jQuery.Deferred().always( function() {

				// Don't match elem in the :animated selector
				delete tick.elem;
			} ),
			tick = function() {
				if ( stopped ) {
					return false;
				}
				var currentTime = fxNow || createFxNow(),
					remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

					// Support: Android 2.3
					// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
					temp = remaining / animation.duration || 0,
					percent = 1 - temp,
					index = 0,
					length = animation.tweens.length;

				for ( ; index < length ; index++ ) {
					animation.tweens[ index ].run( percent );
				}

				deferred.notifyWith( elem, [ animation, percent, remaining ] );

				if ( percent < 1 && length ) {
					return remaining;
				} else {
					deferred.resolveWith( elem, [ animation ] );
					return false;
				}
			},
			animation = deferred.promise( {
				elem: elem,
				props: jQuery.extend( {}, properties ),
				opts: jQuery.extend( true, {
					specialEasing: {},
					easing: jQuery.easing._default
				}, options ),
				originalProperties: properties,
				originalOptions: options,
				startTime: fxNow || createFxNow(),
				duration: options.duration,
				tweens: [],
				createTween: function( prop, end ) {
					var tween = jQuery.Tween( elem, animation.opts, prop, end,
							animation.opts.specialEasing[ prop ] || animation.opts.easing );
					animation.tweens.push( tween );
					return tween;
				},
				stop: function( gotoEnd ) {
					var index = 0,

						// If we are going to the end, we want to run all the tweens
						// otherwise we skip this part
						length = gotoEnd ? animation.tweens.length : 0;
					if ( stopped ) {
						return this;
					}
					stopped = true;
					for ( ; index < length ; index++ ) {
						animation.tweens[ index ].run( 1 );
					}

					// Resolve when we played the last frame; otherwise, reject
					if ( gotoEnd ) {
						deferred.notifyWith( elem, [ animation, 1, 0 ] );
						deferred.resolveWith( elem, [ animation, gotoEnd ] );
					} else {
						deferred.rejectWith( elem, [ animation, gotoEnd ] );
					}
					return this;
				}
			} ),
			props = animation.props;

		propFilter( props, animation.opts.specialEasing );

		for ( ; index < length ; index++ ) {
			result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
			if ( result ) {
				if ( jQuery.isFunction( result.stop ) ) {
					jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
						jQuery.proxy( result.stop, result );
				}
				return result;
			}
		}

		jQuery.map( props, createTween, animation );

		if ( jQuery.isFunction( animation.opts.start ) ) {
			animation.opts.start.call( elem, animation );
		}

		jQuery.fx.timer(
			jQuery.extend( tick, {
				elem: elem,
				anim: animation,
				queue: animation.opts.queue
			} )
		);

		// attach callbacks from options
		return animation.progress( animation.opts.progress )
			.done( animation.opts.done, animation.opts.complete )
			.fail( animation.opts.fail )
			.always( animation.opts.always );
	}

	jQuery.Animation = jQuery.extend( Animation, {
		tweeners: {
			"*": [ function( prop, value ) {
				var tween = this.createTween( prop, value );
				adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
				return tween;
			} ]
		},

		tweener: function( props, callback ) {
			if ( jQuery.isFunction( props ) ) {
				callback = props;
				props = [ "*" ];
			} else {
				props = props.match( rnotwhite );
			}

			var prop,
				index = 0,
				length = props.length;

			for ( ; index < length ; index++ ) {
				prop = props[ index ];
				Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
				Animation.tweeners[ prop ].unshift( callback );
			}
		},

		prefilters: [ defaultPrefilter ],

		prefilter: function( callback, prepend ) {
			if ( prepend ) {
				Animation.prefilters.unshift( callback );
			} else {
				Animation.prefilters.push( callback );
			}
		}
	} );

	jQuery.speed = function( speed, easing, fn ) {
		var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
			complete: fn || !fn && easing ||
				jQuery.isFunction( speed ) && speed,
			duration: speed,
			easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
		};

		opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ?
			opt.duration : opt.duration in jQuery.fx.speeds ?
				jQuery.fx.speeds[ opt.duration ] : jQuery.fx.speeds._default;

		// Normalize opt.queue - true/undefined/null -> "fx"
		if ( opt.queue == null || opt.queue === true ) {
			opt.queue = "fx";
		}

		// Queueing
		opt.old = opt.complete;

		opt.complete = function() {
			if ( jQuery.isFunction( opt.old ) ) {
				opt.old.call( this );
			}

			if ( opt.queue ) {
				jQuery.dequeue( this, opt.queue );
			}
		};

		return opt;
	};

	jQuery.fn.extend( {
		fadeTo: function( speed, to, easing, callback ) {

			// Show any hidden elements after setting opacity to 0
			return this.filter( isHidden ).css( "opacity", 0 ).show()

				// Animate to the value specified
				.end().animate( { opacity: to }, speed, easing, callback );
		},
		animate: function( prop, speed, easing, callback ) {
			var empty = jQuery.isEmptyObject( prop ),
				optall = jQuery.speed( speed, easing, callback ),
				doAnimation = function() {

					// Operate on a copy of prop so per-property easing won't be lost
					var anim = Animation( this, jQuery.extend( {}, prop ), optall );

					// Empty animations, or finishing resolves immediately
					if ( empty || dataPriv.get( this, "finish" ) ) {
						anim.stop( true );
					}
				};
				doAnimation.finish = doAnimation;

			return empty || optall.queue === false ?
				this.each( doAnimation ) :
				this.queue( optall.queue, doAnimation );
		},
		stop: function( type, clearQueue, gotoEnd ) {
			var stopQueue = function( hooks ) {
				var stop = hooks.stop;
				delete hooks.stop;
				stop( gotoEnd );
			};

			if ( typeof type !== "string" ) {
				gotoEnd = clearQueue;
				clearQueue = type;
				type = undefined;
			}
			if ( clearQueue && type !== false ) {
				this.queue( type || "fx", [] );
			}

			return this.each( function() {
				var dequeue = true,
					index = type != null && type + "queueHooks",
					timers = jQuery.timers,
					data = dataPriv.get( this );

				if ( index ) {
					if ( data[ index ] && data[ index ].stop ) {
						stopQueue( data[ index ] );
					}
				} else {
					for ( index in data ) {
						if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
							stopQueue( data[ index ] );
						}
					}
				}

				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this &&
						( type == null || timers[ index ].queue === type ) ) {

						timers[ index ].anim.stop( gotoEnd );
						dequeue = false;
						timers.splice( index, 1 );
					}
				}

				// Start the next in the queue if the last step wasn't forced.
				// Timers currently will call their complete callbacks, which
				// will dequeue but only if they were gotoEnd.
				if ( dequeue || !gotoEnd ) {
					jQuery.dequeue( this, type );
				}
			} );
		},
		finish: function( type ) {
			if ( type !== false ) {
				type = type || "fx";
			}
			return this.each( function() {
				var index,
					data = dataPriv.get( this ),
					queue = data[ type + "queue" ],
					hooks = data[ type + "queueHooks" ],
					timers = jQuery.timers,
					length = queue ? queue.length : 0;

				// Enable finishing flag on private data
				data.finish = true;

				// Empty the queue first
				jQuery.queue( this, type, [] );

				if ( hooks && hooks.stop ) {
					hooks.stop.call( this, true );
				}

				// Look for any active animations, and finish them
				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
						timers[ index ].anim.stop( true );
						timers.splice( index, 1 );
					}
				}

				// Look for any animations in the old queue and finish them
				for ( index = 0; index < length; index++ ) {
					if ( queue[ index ] && queue[ index ].finish ) {
						queue[ index ].finish.call( this );
					}
				}

				// Turn off finishing flag
				delete data.finish;
			} );
		}
	} );

	jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
		var cssFn = jQuery.fn[ name ];
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return speed == null || typeof speed === "boolean" ?
				cssFn.apply( this, arguments ) :
				this.animate( genFx( name, true ), speed, easing, callback );
		};
	} );

	// Generate shortcuts for custom animations
	jQuery.each( {
		slideDown: genFx( "show" ),
		slideUp: genFx( "hide" ),
		slideToggle: genFx( "toggle" ),
		fadeIn: { opacity: "show" },
		fadeOut: { opacity: "hide" },
		fadeToggle: { opacity: "toggle" }
	}, function( name, props ) {
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return this.animate( props, speed, easing, callback );
		};
	} );

	jQuery.timers = [];
	jQuery.fx.tick = function() {
		var timer,
			i = 0,
			timers = jQuery.timers;

		fxNow = jQuery.now();

		for ( ; i < timers.length; i++ ) {
			timer = timers[ i ];

			// Checks the timer has not already been removed
			if ( !timer() && timers[ i ] === timer ) {
				timers.splice( i--, 1 );
			}
		}

		if ( !timers.length ) {
			jQuery.fx.stop();
		}
		fxNow = undefined;
	};

	jQuery.fx.timer = function( timer ) {
		jQuery.timers.push( timer );
		if ( timer() ) {
			jQuery.fx.start();
		} else {
			jQuery.timers.pop();
		}
	};

	jQuery.fx.interval = 13;
	jQuery.fx.start = function() {
		if ( !timerId ) {
			timerId = window.setInterval( jQuery.fx.tick, jQuery.fx.interval );
		}
	};

	jQuery.fx.stop = function() {
		window.clearInterval( timerId );

		timerId = null;
	};

	jQuery.fx.speeds = {
		slow: 600,
		fast: 200,

		// Default speed
		_default: 400
	};


	// Based off of the plugin by Clint Helfers, with permission.
	// http://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
	jQuery.fn.delay = function( time, type ) {
		time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
		type = type || "fx";

		return this.queue( type, function( next, hooks ) {
			var timeout = window.setTimeout( next, time );
			hooks.stop = function() {
				window.clearTimeout( timeout );
			};
		} );
	};


	( function() {
		var input = document.createElement( "input" ),
			select = document.createElement( "select" ),
			opt = select.appendChild( document.createElement( "option" ) );

		input.type = "checkbox";

		// Support: iOS<=5.1, Android<=4.2+
		// Default value for a checkbox should be "on"
		support.checkOn = input.value !== "";

		// Support: IE<=11+
		// Must access selectedIndex to make default options select
		support.optSelected = opt.selected;

		// Support: Android<=2.3
		// Options inside disabled selects are incorrectly marked as disabled
		select.disabled = true;
		support.optDisabled = !opt.disabled;

		// Support: IE<=11+
		// An input loses its value after becoming a radio
		input = document.createElement( "input" );
		input.value = "t";
		input.type = "radio";
		support.radioValue = input.value === "t";
	} )();


	var boolHook,
		attrHandle = jQuery.expr.attrHandle;

	jQuery.fn.extend( {
		attr: function( name, value ) {
			return access( this, jQuery.attr, name, value, arguments.length > 1 );
		},

		removeAttr: function( name ) {
			return this.each( function() {
				jQuery.removeAttr( this, name );
			} );
		}
	} );

	jQuery.extend( {
		attr: function( elem, name, value ) {
			var ret, hooks,
				nType = elem.nodeType;

			// Don't get/set attributes on text, comment and attribute nodes
			if ( nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}

			// Fallback to prop when attributes are not supported
			if ( typeof elem.getAttribute === "undefined" ) {
				return jQuery.prop( elem, name, value );
			}

			// All attributes are lowercase
			// Grab necessary hook if one is defined
			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
				name = name.toLowerCase();
				hooks = jQuery.attrHooks[ name ] ||
					( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
			}

			if ( value !== undefined ) {
				if ( value === null ) {
					jQuery.removeAttr( elem, name );
					return;
				}

				if ( hooks && "set" in hooks &&
					( ret = hooks.set( elem, value, name ) ) !== undefined ) {
					return ret;
				}

				elem.setAttribute( name, value + "" );
				return value;
			}

			if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
				return ret;
			}

			ret = jQuery.find.attr( elem, name );

			// Non-existent attributes return null, we normalize to undefined
			return ret == null ? undefined : ret;
		},

		attrHooks: {
			type: {
				set: function( elem, value ) {
					if ( !support.radioValue && value === "radio" &&
						jQuery.nodeName( elem, "input" ) ) {
						var val = elem.value;
						elem.setAttribute( "type", value );
						if ( val ) {
							elem.value = val;
						}
						return value;
					}
				}
			}
		},

		removeAttr: function( elem, value ) {
			var name, propName,
				i = 0,
				attrNames = value && value.match( rnotwhite );

			if ( attrNames && elem.nodeType === 1 ) {
				while ( ( name = attrNames[ i++ ] ) ) {
					propName = jQuery.propFix[ name ] || name;

					// Boolean attributes get special treatment (#10870)
					if ( jQuery.expr.match.bool.test( name ) ) {

						// Set corresponding property to false
						elem[ propName ] = false;
					}

					elem.removeAttribute( name );
				}
			}
		}
	} );

	// Hooks for boolean attributes
	boolHook = {
		set: function( elem, value, name ) {
			if ( value === false ) {

				// Remove boolean attributes when set to false
				jQuery.removeAttr( elem, name );
			} else {
				elem.setAttribute( name, name );
			}
			return name;
		}
	};
	jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
		var getter = attrHandle[ name ] || jQuery.find.attr;

		attrHandle[ name ] = function( elem, name, isXML ) {
			var ret, handle;
			if ( !isXML ) {

				// Avoid an infinite loop by temporarily removing this function from the getter
				handle = attrHandle[ name ];
				attrHandle[ name ] = ret;
				ret = getter( elem, name, isXML ) != null ?
					name.toLowerCase() :
					null;
				attrHandle[ name ] = handle;
			}
			return ret;
		};
	} );




	var rfocusable = /^(?:input|select|textarea|button)$/i,
		rclickable = /^(?:a|area)$/i;

	jQuery.fn.extend( {
		prop: function( name, value ) {
			return access( this, jQuery.prop, name, value, arguments.length > 1 );
		},

		removeProp: function( name ) {
			return this.each( function() {
				delete this[ jQuery.propFix[ name ] || name ];
			} );
		}
	} );

	jQuery.extend( {
		prop: function( elem, name, value ) {
			var ret, hooks,
				nType = elem.nodeType;

			// Don't get/set properties on text, comment and attribute nodes
			if ( nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}

			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

				// Fix name and attach hooks
				name = jQuery.propFix[ name ] || name;
				hooks = jQuery.propHooks[ name ];
			}

			if ( value !== undefined ) {
				if ( hooks && "set" in hooks &&
					( ret = hooks.set( elem, value, name ) ) !== undefined ) {
					return ret;
				}

				return ( elem[ name ] = value );
			}

			if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
				return ret;
			}

			return elem[ name ];
		},

		propHooks: {
			tabIndex: {
				get: function( elem ) {

					// elem.tabIndex doesn't always return the
					// correct value when it hasn't been explicitly set
					// http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
					// Use proper attribute retrieval(#12072)
					var tabindex = jQuery.find.attr( elem, "tabindex" );

					return tabindex ?
						parseInt( tabindex, 10 ) :
						rfocusable.test( elem.nodeName ) ||
							rclickable.test( elem.nodeName ) && elem.href ?
								0 :
								-1;
				}
			}
		},

		propFix: {
			"for": "htmlFor",
			"class": "className"
		}
	} );

	// Support: IE <=11 only
	// Accessing the selectedIndex property
	// forces the browser to respect setting selected
	// on the option
	// The getter ensures a default option is selected
	// when in an optgroup
	if ( !support.optSelected ) {
		jQuery.propHooks.selected = {
			get: function( elem ) {
				var parent = elem.parentNode;
				if ( parent && parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
				return null;
			},
			set: function( elem ) {
				var parent = elem.parentNode;
				if ( parent ) {
					parent.selectedIndex;

					if ( parent.parentNode ) {
						parent.parentNode.selectedIndex;
					}
				}
			}
		};
	}

	jQuery.each( [
		"tabIndex",
		"readOnly",
		"maxLength",
		"cellSpacing",
		"cellPadding",
		"rowSpan",
		"colSpan",
		"useMap",
		"frameBorder",
		"contentEditable"
	], function() {
		jQuery.propFix[ this.toLowerCase() ] = this;
	} );




	var rclass = /[\t\r\n\f]/g;

	function getClass( elem ) {
		return elem.getAttribute && elem.getAttribute( "class" ) || "";
	}

	jQuery.fn.extend( {
		addClass: function( value ) {
			var classes, elem, cur, curValue, clazz, j, finalValue,
				i = 0;

			if ( jQuery.isFunction( value ) ) {
				return this.each( function( j ) {
					jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
				} );
			}

			if ( typeof value === "string" && value ) {
				classes = value.match( rnotwhite ) || [];

				while ( ( elem = this[ i++ ] ) ) {
					curValue = getClass( elem );
					cur = elem.nodeType === 1 &&
						( " " + curValue + " " ).replace( rclass, " " );

					if ( cur ) {
						j = 0;
						while ( ( clazz = classes[ j++ ] ) ) {
							if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
								cur += clazz + " ";
							}
						}

						// Only assign if different to avoid unneeded rendering.
						finalValue = jQuery.trim( cur );
						if ( curValue !== finalValue ) {
							elem.setAttribute( "class", finalValue );
						}
					}
				}
			}

			return this;
		},

		removeClass: function( value ) {
			var classes, elem, cur, curValue, clazz, j, finalValue,
				i = 0;

			if ( jQuery.isFunction( value ) ) {
				return this.each( function( j ) {
					jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
				} );
			}

			if ( !arguments.length ) {
				return this.attr( "class", "" );
			}

			if ( typeof value === "string" && value ) {
				classes = value.match( rnotwhite ) || [];

				while ( ( elem = this[ i++ ] ) ) {
					curValue = getClass( elem );

					// This expression is here for better compressibility (see addClass)
					cur = elem.nodeType === 1 &&
						( " " + curValue + " " ).replace( rclass, " " );

					if ( cur ) {
						j = 0;
						while ( ( clazz = classes[ j++ ] ) ) {

							// Remove *all* instances
							while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
								cur = cur.replace( " " + clazz + " ", " " );
							}
						}

						// Only assign if different to avoid unneeded rendering.
						finalValue = jQuery.trim( cur );
						if ( curValue !== finalValue ) {
							elem.setAttribute( "class", finalValue );
						}
					}
				}
			}

			return this;
		},

		toggleClass: function( value, stateVal ) {
			var type = typeof value;

			if ( typeof stateVal === "boolean" && type === "string" ) {
				return stateVal ? this.addClass( value ) : this.removeClass( value );
			}

			if ( jQuery.isFunction( value ) ) {
				return this.each( function( i ) {
					jQuery( this ).toggleClass(
						value.call( this, i, getClass( this ), stateVal ),
						stateVal
					);
				} );
			}

			return this.each( function() {
				var className, i, self, classNames;

				if ( type === "string" ) {

					// Toggle individual class names
					i = 0;
					self = jQuery( this );
					classNames = value.match( rnotwhite ) || [];

					while ( ( className = classNames[ i++ ] ) ) {

						// Check each className given, space separated list
						if ( self.hasClass( className ) ) {
							self.removeClass( className );
						} else {
							self.addClass( className );
						}
					}

				// Toggle whole class name
				} else if ( value === undefined || type === "boolean" ) {
					className = getClass( this );
					if ( className ) {

						// Store className if set
						dataPriv.set( this, "__className__", className );
					}

					// If the element has a class name or if we're passed `false`,
					// then remove the whole classname (if there was one, the above saved it).
					// Otherwise bring back whatever was previously saved (if anything),
					// falling back to the empty string if nothing was stored.
					if ( this.setAttribute ) {
						this.setAttribute( "class",
							className || value === false ?
							"" :
							dataPriv.get( this, "__className__" ) || ""
						);
					}
				}
			} );
		},

		hasClass: function( selector ) {
			var className, elem,
				i = 0;

			className = " " + selector + " ";
			while ( ( elem = this[ i++ ] ) ) {
				if ( elem.nodeType === 1 &&
					( " " + getClass( elem ) + " " ).replace( rclass, " " )
						.indexOf( className ) > -1
				) {
					return true;
				}
			}

			return false;
		}
	} );




	var rreturn = /\r/g,
		rspaces = /[\x20\t\r\n\f]+/g;

	jQuery.fn.extend( {
		val: function( value ) {
			var hooks, ret, isFunction,
				elem = this[ 0 ];

			if ( !arguments.length ) {
				if ( elem ) {
					hooks = jQuery.valHooks[ elem.type ] ||
						jQuery.valHooks[ elem.nodeName.toLowerCase() ];

					if ( hooks &&
						"get" in hooks &&
						( ret = hooks.get( elem, "value" ) ) !== undefined
					) {
						return ret;
					}

					ret = elem.value;

					return typeof ret === "string" ?

						// Handle most common string cases
						ret.replace( rreturn, "" ) :

						// Handle cases where value is null/undef or number
						ret == null ? "" : ret;
				}

				return;
			}

			isFunction = jQuery.isFunction( value );

			return this.each( function( i ) {
				var val;

				if ( this.nodeType !== 1 ) {
					return;
				}

				if ( isFunction ) {
					val = value.call( this, i, jQuery( this ).val() );
				} else {
					val = value;
				}

				// Treat null/undefined as ""; convert numbers to string
				if ( val == null ) {
					val = "";

				} else if ( typeof val === "number" ) {
					val += "";

				} else if ( jQuery.isArray( val ) ) {
					val = jQuery.map( val, function( value ) {
						return value == null ? "" : value + "";
					} );
				}

				hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

				// If set returns undefined, fall back to normal setting
				if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
					this.value = val;
				}
			} );
		}
	} );

	jQuery.extend( {
		valHooks: {
			option: {
				get: function( elem ) {

					var val = jQuery.find.attr( elem, "value" );
					return val != null ?
						val :

						// Support: IE10-11+
						// option.text throws exceptions (#14686, #14858)
						// Strip and collapse whitespace
						// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
						jQuery.trim( jQuery.text( elem ) ).replace( rspaces, " " );
				}
			},
			select: {
				get: function( elem ) {
					var value, option,
						options = elem.options,
						index = elem.selectedIndex,
						one = elem.type === "select-one" || index < 0,
						values = one ? null : [],
						max = one ? index + 1 : options.length,
						i = index < 0 ?
							max :
							one ? index : 0;

					// Loop through all the selected options
					for ( ; i < max; i++ ) {
						option = options[ i ];

						// IE8-9 doesn't update selected after form reset (#2551)
						if ( ( option.selected || i === index ) &&

								// Don't return options that are disabled or in a disabled optgroup
								( support.optDisabled ?
									!option.disabled : option.getAttribute( "disabled" ) === null ) &&
								( !option.parentNode.disabled ||
									!jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {

							// Get the specific value for the option
							value = jQuery( option ).val();

							// We don't need an array for one selects
							if ( one ) {
								return value;
							}

							// Multi-Selects return an array
							values.push( value );
						}
					}

					return values;
				},

				set: function( elem, value ) {
					var optionSet, option,
						options = elem.options,
						values = jQuery.makeArray( value ),
						i = options.length;

					while ( i-- ) {
						option = options[ i ];
						if ( option.selected =
							jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
						) {
							optionSet = true;
						}
					}

					// Force browsers to behave consistently when non-matching value is set
					if ( !optionSet ) {
						elem.selectedIndex = -1;
					}
					return values;
				}
			}
		}
	} );

	// Radios and checkboxes getter/setter
	jQuery.each( [ "radio", "checkbox" ], function() {
		jQuery.valHooks[ this ] = {
			set: function( elem, value ) {
				if ( jQuery.isArray( value ) ) {
					return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
				}
			}
		};
		if ( !support.checkOn ) {
			jQuery.valHooks[ this ].get = function( elem ) {
				return elem.getAttribute( "value" ) === null ? "on" : elem.value;
			};
		}
	} );




	// Return jQuery for attributes-only inclusion


	var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;

	jQuery.extend( jQuery.event, {

		trigger: function( event, data, elem, onlyHandlers ) {

			var i, cur, tmp, bubbleType, ontype, handle, special,
				eventPath = [ elem || document ],
				type = hasOwn.call( event, "type" ) ? event.type : event,
				namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

			cur = tmp = elem = elem || document;

			// Don't do events on text and comment nodes
			if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
				return;
			}

			// focus/blur morphs to focusin/out; ensure we're not firing them right now
			if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
				return;
			}

			if ( type.indexOf( "." ) > -1 ) {

				// Namespaced trigger; create a regexp to match event type in handle()
				namespaces = type.split( "." );
				type = namespaces.shift();
				namespaces.sort();
			}
			ontype = type.indexOf( ":" ) < 0 && "on" + type;

			// Caller can pass in a jQuery.Event object, Object, or just an event type string
			event = event[ jQuery.expando ] ?
				event :
				new jQuery.Event( type, typeof event === "object" && event );

			// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
			event.isTrigger = onlyHandlers ? 2 : 3;
			event.namespace = namespaces.join( "." );
			event.rnamespace = event.namespace ?
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
				null;

			// Clean up the event in case it is being reused
			event.result = undefined;
			if ( !event.target ) {
				event.target = elem;
			}

			// Clone any incoming data and prepend the event, creating the handler arg list
			data = data == null ?
				[ event ] :
				jQuery.makeArray( data, [ event ] );

			// Allow special events to draw outside the lines
			special = jQuery.event.special[ type ] || {};
			if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
				return;
			}

			// Determine event propagation path in advance, per W3C events spec (#9951)
			// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
			if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

				bubbleType = special.delegateType || type;
				if ( !rfocusMorph.test( bubbleType + type ) ) {
					cur = cur.parentNode;
				}
				for ( ; cur; cur = cur.parentNode ) {
					eventPath.push( cur );
					tmp = cur;
				}

				// Only add window if we got to document (e.g., not plain obj or detached DOM)
				if ( tmp === ( elem.ownerDocument || document ) ) {
					eventPath.push( tmp.defaultView || tmp.parentWindow || window );
				}
			}

			// Fire handlers on the event path
			i = 0;
			while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {

				event.type = i > 1 ?
					bubbleType :
					special.bindType || type;

				// jQuery handler
				handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
					dataPriv.get( cur, "handle" );
				if ( handle ) {
					handle.apply( cur, data );
				}

				// Native handler
				handle = ontype && cur[ ontype ];
				if ( handle && handle.apply && acceptData( cur ) ) {
					event.result = handle.apply( cur, data );
					if ( event.result === false ) {
						event.preventDefault();
					}
				}
			}
			event.type = type;

			// If nobody prevented the default action, do it now
			if ( !onlyHandlers && !event.isDefaultPrevented() ) {

				if ( ( !special._default ||
					special._default.apply( eventPath.pop(), data ) === false ) &&
					acceptData( elem ) ) {

					// Call a native DOM method on the target with the same name name as the event.
					// Don't do default actions on window, that's where global variables be (#6170)
					if ( ontype && jQuery.isFunction( elem[ type ] ) && !jQuery.isWindow( elem ) ) {

						// Don't re-trigger an onFOO event when we call its FOO() method
						tmp = elem[ ontype ];

						if ( tmp ) {
							elem[ ontype ] = null;
						}

						// Prevent re-triggering of the same event, since we already bubbled it above
						jQuery.event.triggered = type;
						elem[ type ]();
						jQuery.event.triggered = undefined;

						if ( tmp ) {
							elem[ ontype ] = tmp;
						}
					}
				}
			}

			return event.result;
		},

		// Piggyback on a donor event to simulate a different one
		// Used only for `focus(in | out)` events
		simulate: function( type, elem, event ) {
			var e = jQuery.extend(
				new jQuery.Event(),
				event,
				{
					type: type,
					isSimulated: true
				}
			);

			jQuery.event.trigger( e, null, elem );
		}

	} );

	jQuery.fn.extend( {

		trigger: function( type, data ) {
			return this.each( function() {
				jQuery.event.trigger( type, data, this );
			} );
		},
		triggerHandler: function( type, data ) {
			var elem = this[ 0 ];
			if ( elem ) {
				return jQuery.event.trigger( type, data, elem, true );
			}
		}
	} );


	jQuery.each( ( "blur focus focusin focusout load resize scroll unload click dblclick " +
		"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
		"change select submit keydown keypress keyup error contextmenu" ).split( " " ),
		function( i, name ) {

		// Handle event binding
		jQuery.fn[ name ] = function( data, fn ) {
			return arguments.length > 0 ?
				this.on( name, null, data, fn ) :
				this.trigger( name );
		};
	} );

	jQuery.fn.extend( {
		hover: function( fnOver, fnOut ) {
			return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
		}
	} );




	support.focusin = "onfocusin" in window;


	// Support: Firefox
	// Firefox doesn't have focus(in | out) events
	// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
	//
	// Support: Chrome, Safari
	// focus(in | out) events fire after focus & blur events,
	// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
	// Related ticket - https://code.google.com/p/chromium/issues/detail?id=449857
	if ( !support.focusin ) {
		jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

			// Attach a single capturing handler on the document while someone wants focusin/focusout
			var handler = function( event ) {
				jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
			};

			jQuery.event.special[ fix ] = {
				setup: function() {
					var doc = this.ownerDocument || this,
						attaches = dataPriv.access( doc, fix );

					if ( !attaches ) {
						doc.addEventListener( orig, handler, true );
					}
					dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
				},
				teardown: function() {
					var doc = this.ownerDocument || this,
						attaches = dataPriv.access( doc, fix ) - 1;

					if ( !attaches ) {
						doc.removeEventListener( orig, handler, true );
						dataPriv.remove( doc, fix );

					} else {
						dataPriv.access( doc, fix, attaches );
					}
				}
			};
		} );
	}
	var location = window.location;

	var nonce = jQuery.now();

	var rquery = ( /\?/ );



	// Support: Android 2.3
	// Workaround failure to string-cast null input
	jQuery.parseJSON = function( data ) {
		return JSON.parse( data + "" );
	};


	// Cross-browser xml parsing
	jQuery.parseXML = function( data ) {
		var xml;
		if ( !data || typeof data !== "string" ) {
			return null;
		}

		// Support: IE9
		try {
			xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
		} catch ( e ) {
			xml = undefined;
		}

		if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
			jQuery.error( "Invalid XML: " + data );
		}
		return xml;
	};


	var
		rhash = /#.*$/,
		rts = /([?&])_=[^&]*/,
		rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

		// #7653, #8125, #8152: local protocol detection
		rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		rnoContent = /^(?:GET|HEAD)$/,
		rprotocol = /^\/\//,

		/* Prefilters
		 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
		 * 2) These are called:
		 *    - BEFORE asking for a transport
		 *    - AFTER param serialization (s.data is a string if s.processData is true)
		 * 3) key is the dataType
		 * 4) the catchall symbol "*" can be used
		 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
		 */
		prefilters = {},

		/* Transports bindings
		 * 1) key is the dataType
		 * 2) the catchall symbol "*" can be used
		 * 3) selection will start with transport dataType and THEN go to "*" if needed
		 */
		transports = {},

		// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
		allTypes = "*/".concat( "*" ),

		// Anchor tag for parsing the document origin
		originAnchor = document.createElement( "a" );
		originAnchor.href = location.href;

	// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
	function addToPrefiltersOrTransports( structure ) {

		// dataTypeExpression is optional and defaults to "*"
		return function( dataTypeExpression, func ) {

			if ( typeof dataTypeExpression !== "string" ) {
				func = dataTypeExpression;
				dataTypeExpression = "*";
			}

			var dataType,
				i = 0,
				dataTypes = dataTypeExpression.toLowerCase().match( rnotwhite ) || [];

			if ( jQuery.isFunction( func ) ) {

				// For each dataType in the dataTypeExpression
				while ( ( dataType = dataTypes[ i++ ] ) ) {

					// Prepend if requested
					if ( dataType[ 0 ] === "+" ) {
						dataType = dataType.slice( 1 ) || "*";
						( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

					// Otherwise append
					} else {
						( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
					}
				}
			}
		};
	}

	// Base inspection function for prefilters and transports
	function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

		var inspected = {},
			seekingTransport = ( structure === transports );

		function inspect( dataType ) {
			var selected;
			inspected[ dataType ] = true;
			jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
				var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
				if ( typeof dataTypeOrTransport === "string" &&
					!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

					options.dataTypes.unshift( dataTypeOrTransport );
					inspect( dataTypeOrTransport );
					return false;
				} else if ( seekingTransport ) {
					return !( selected = dataTypeOrTransport );
				}
			} );
			return selected;
		}

		return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
	}

	// A special extend for ajax options
	// that takes "flat" options (not to be deep extended)
	// Fixes #9887
	function ajaxExtend( target, src ) {
		var key, deep,
			flatOptions = jQuery.ajaxSettings.flatOptions || {};

		for ( key in src ) {
			if ( src[ key ] !== undefined ) {
				( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
			}
		}
		if ( deep ) {
			jQuery.extend( true, target, deep );
		}

		return target;
	}

	/* Handles responses to an ajax request:
	 * - finds the right dataType (mediates between content-type and expected dataType)
	 * - returns the corresponding response
	 */
	function ajaxHandleResponses( s, jqXHR, responses ) {

		var ct, type, finalDataType, firstDataType,
			contents = s.contents,
			dataTypes = s.dataTypes;

		// Remove auto dataType and get content-type in the process
		while ( dataTypes[ 0 ] === "*" ) {
			dataTypes.shift();
			if ( ct === undefined ) {
				ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
			}
		}

		// Check if we're dealing with a known content-type
		if ( ct ) {
			for ( type in contents ) {
				if ( contents[ type ] && contents[ type ].test( ct ) ) {
					dataTypes.unshift( type );
					break;
				}
			}
		}

		// Check to see if we have a response for the expected dataType
		if ( dataTypes[ 0 ] in responses ) {
			finalDataType = dataTypes[ 0 ];
		} else {

			// Try convertible dataTypes
			for ( type in responses ) {
				if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
					finalDataType = type;
					break;
				}
				if ( !firstDataType ) {
					firstDataType = type;
				}
			}

			// Or just use first one
			finalDataType = finalDataType || firstDataType;
		}

		// If we found a dataType
		// We add the dataType to the list if needed
		// and return the corresponding response
		if ( finalDataType ) {
			if ( finalDataType !== dataTypes[ 0 ] ) {
				dataTypes.unshift( finalDataType );
			}
			return responses[ finalDataType ];
		}
	}

	/* Chain conversions given the request and the original response
	 * Also sets the responseXXX fields on the jqXHR instance
	 */
	function ajaxConvert( s, response, jqXHR, isSuccess ) {
		var conv2, current, conv, tmp, prev,
			converters = {},

			// Work with a copy of dataTypes in case we need to modify it for conversion
			dataTypes = s.dataTypes.slice();

		// Create converters map with lowercased keys
		if ( dataTypes[ 1 ] ) {
			for ( conv in s.converters ) {
				converters[ conv.toLowerCase() ] = s.converters[ conv ];
			}
		}

		current = dataTypes.shift();

		// Convert to each sequential dataType
		while ( current ) {

			if ( s.responseFields[ current ] ) {
				jqXHR[ s.responseFields[ current ] ] = response;
			}

			// Apply the dataFilter if provided
			if ( !prev && isSuccess && s.dataFilter ) {
				response = s.dataFilter( response, s.dataType );
			}

			prev = current;
			current = dataTypes.shift();

			if ( current ) {

			// There's only work to do if current dataType is non-auto
				if ( current === "*" ) {

					current = prev;

				// Convert response if prev dataType is non-auto and differs from current
				} else if ( prev !== "*" && prev !== current ) {

					// Seek a direct converter
					conv = converters[ prev + " " + current ] || converters[ "* " + current ];

					// If none found, seek a pair
					if ( !conv ) {
						for ( conv2 in converters ) {

							// If conv2 outputs current
							tmp = conv2.split( " " );
							if ( tmp[ 1 ] === current ) {

								// If prev can be converted to accepted input
								conv = converters[ prev + " " + tmp[ 0 ] ] ||
									converters[ "* " + tmp[ 0 ] ];
								if ( conv ) {

									// Condense equivalence converters
									if ( conv === true ) {
										conv = converters[ conv2 ];

									// Otherwise, insert the intermediate dataType
									} else if ( converters[ conv2 ] !== true ) {
										current = tmp[ 0 ];
										dataTypes.unshift( tmp[ 1 ] );
									}
									break;
								}
							}
						}
					}

					// Apply converter (if not an equivalence)
					if ( conv !== true ) {

						// Unless errors are allowed to bubble, catch and return them
						if ( conv && s.throws ) {
							response = conv( response );
						} else {
							try {
								response = conv( response );
							} catch ( e ) {
								return {
									state: "parsererror",
									error: conv ? e : "No conversion from " + prev + " to " + current
								};
							}
						}
					}
				}
			}
		}

		return { state: "success", data: response };
	}

	jQuery.extend( {

		// Counter for holding the number of active queries
		active: 0,

		// Last-Modified header cache for next request
		lastModified: {},
		etag: {},

		ajaxSettings: {
			url: location.href,
			type: "GET",
			isLocal: rlocalProtocol.test( location.protocol ),
			global: true,
			processData: true,
			async: true,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			/*
			timeout: 0,
			data: null,
			dataType: null,
			username: null,
			password: null,
			cache: null,
			throws: false,
			traditional: false,
			headers: {},
			*/

			accepts: {
				"*": allTypes,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},

			contents: {
				xml: /\bxml\b/,
				html: /\bhtml/,
				json: /\bjson\b/
			},

			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},

			// Data converters
			// Keys separate source (or catchall "*") and destination types with a single space
			converters: {

				// Convert anything to text
				"* text": String,

				// Text to html (true = no transformation)
				"text html": true,

				// Evaluate text as a json expression
				"text json": jQuery.parseJSON,

				// Parse text as xml
				"text xml": jQuery.parseXML
			},

			// For options that shouldn't be deep extended:
			// you can add your own custom options here if
			// and when you create one that shouldn't be
			// deep extended (see ajaxExtend)
			flatOptions: {
				url: true,
				context: true
			}
		},

		// Creates a full fledged settings object into target
		// with both ajaxSettings and settings fields.
		// If target is omitted, writes into ajaxSettings.
		ajaxSetup: function( target, settings ) {
			return settings ?

				// Building a settings object
				ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

				// Extending ajaxSettings
				ajaxExtend( jQuery.ajaxSettings, target );
		},

		ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
		ajaxTransport: addToPrefiltersOrTransports( transports ),

		// Main method
		ajax: function( url, options ) {

			// If url is an object, simulate pre-1.5 signature
			if ( typeof url === "object" ) {
				options = url;
				url = undefined;
			}

			// Force options to be an object
			options = options || {};

			var transport,

				// URL without anti-cache param
				cacheURL,

				// Response headers
				responseHeadersString,
				responseHeaders,

				// timeout handle
				timeoutTimer,

				// Url cleanup var
				urlAnchor,

				// To know if global events are to be dispatched
				fireGlobals,

				// Loop variable
				i,

				// Create the final options object
				s = jQuery.ajaxSetup( {}, options ),

				// Callbacks context
				callbackContext = s.context || s,

				// Context for global events is callbackContext if it is a DOM node or jQuery collection
				globalEventContext = s.context &&
					( callbackContext.nodeType || callbackContext.jquery ) ?
						jQuery( callbackContext ) :
						jQuery.event,

				// Deferreds
				deferred = jQuery.Deferred(),
				completeDeferred = jQuery.Callbacks( "once memory" ),

				// Status-dependent callbacks
				statusCode = s.statusCode || {},

				// Headers (they are sent all at once)
				requestHeaders = {},
				requestHeadersNames = {},

				// The jqXHR state
				state = 0,

				// Default abort message
				strAbort = "canceled",

				// Fake xhr
				jqXHR = {
					readyState: 0,

					// Builds headers hashtable if needed
					getResponseHeader: function( key ) {
						var match;
						if ( state === 2 ) {
							if ( !responseHeaders ) {
								responseHeaders = {};
								while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
									responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
								}
							}
							match = responseHeaders[ key.toLowerCase() ];
						}
						return match == null ? null : match;
					},

					// Raw string
					getAllResponseHeaders: function() {
						return state === 2 ? responseHeadersString : null;
					},

					// Caches the header
					setRequestHeader: function( name, value ) {
						var lname = name.toLowerCase();
						if ( !state ) {
							name = requestHeadersNames[ lname ] = requestHeadersNames[ lname ] || name;
							requestHeaders[ name ] = value;
						}
						return this;
					},

					// Overrides response content-type header
					overrideMimeType: function( type ) {
						if ( !state ) {
							s.mimeType = type;
						}
						return this;
					},

					// Status-dependent callbacks
					statusCode: function( map ) {
						var code;
						if ( map ) {
							if ( state < 2 ) {
								for ( code in map ) {

									// Lazy-add the new callback in a way that preserves old ones
									statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
								}
							} else {

								// Execute the appropriate callbacks
								jqXHR.always( map[ jqXHR.status ] );
							}
						}
						return this;
					},

					// Cancel the request
					abort: function( statusText ) {
						var finalText = statusText || strAbort;
						if ( transport ) {
							transport.abort( finalText );
						}
						done( 0, finalText );
						return this;
					}
				};

			// Attach deferreds
			deferred.promise( jqXHR ).complete = completeDeferred.add;
			jqXHR.success = jqXHR.done;
			jqXHR.error = jqXHR.fail;

			// Remove hash character (#7531: and string promotion)
			// Add protocol if not provided (prefilters might expect it)
			// Handle falsy url in the settings object (#10093: consistency with old signature)
			// We also use the url parameter if available
			s.url = ( ( url || s.url || location.href ) + "" ).replace( rhash, "" )
				.replace( rprotocol, location.protocol + "//" );

			// Alias method option to type as per ticket #12004
			s.type = options.method || options.type || s.method || s.type;

			// Extract dataTypes list
			s.dataTypes = jQuery.trim( s.dataType || "*" ).toLowerCase().match( rnotwhite ) || [ "" ];

			// A cross-domain request is in order when the origin doesn't match the current origin.
			if ( s.crossDomain == null ) {
				urlAnchor = document.createElement( "a" );

				// Support: IE8-11+
				// IE throws exception if url is malformed, e.g. http://example.com:80x/
				try {
					urlAnchor.href = s.url;

					// Support: IE8-11+
					// Anchor's host property isn't correctly set when s.url is relative
					urlAnchor.href = urlAnchor.href;
					s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
						urlAnchor.protocol + "//" + urlAnchor.host;
				} catch ( e ) {

					// If there is an error parsing the URL, assume it is crossDomain,
					// it can be rejected by the transport if it is invalid
					s.crossDomain = true;
				}
			}

			// Convert data if not already a string
			if ( s.data && s.processData && typeof s.data !== "string" ) {
				s.data = jQuery.param( s.data, s.traditional );
			}

			// Apply prefilters
			inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

			// If request was aborted inside a prefilter, stop there
			if ( state === 2 ) {
				return jqXHR;
			}

			// We can fire global events as of now if asked to
			// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
			fireGlobals = jQuery.event && s.global;

			// Watch for a new set of requests
			if ( fireGlobals && jQuery.active++ === 0 ) {
				jQuery.event.trigger( "ajaxStart" );
			}

			// Uppercase the type
			s.type = s.type.toUpperCase();

			// Determine if request has content
			s.hasContent = !rnoContent.test( s.type );

			// Save the URL in case we're toying with the If-Modified-Since
			// and/or If-None-Match header later on
			cacheURL = s.url;

			// More options handling for requests with no content
			if ( !s.hasContent ) {

				// If data is available, append data to url
				if ( s.data ) {
					cacheURL = ( s.url += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data );

					// #9682: remove data so that it's not used in an eventual retry
					delete s.data;
				}

				// Add anti-cache in url if needed
				if ( s.cache === false ) {
					s.url = rts.test( cacheURL ) ?

						// If there is already a '_' parameter, set its value
						cacheURL.replace( rts, "$1_=" + nonce++ ) :

						// Otherwise add one to the end
						cacheURL + ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + nonce++;
				}
			}

			// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
			if ( s.ifModified ) {
				if ( jQuery.lastModified[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
				}
				if ( jQuery.etag[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
				}
			}

			// Set the correct header, if data is being sent
			if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
				jqXHR.setRequestHeader( "Content-Type", s.contentType );
			}

			// Set the Accepts header for the server, depending on the dataType
			jqXHR.setRequestHeader(
				"Accept",
				s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
					s.accepts[ s.dataTypes[ 0 ] ] +
						( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
					s.accepts[ "*" ]
			);

			// Check for headers option
			for ( i in s.headers ) {
				jqXHR.setRequestHeader( i, s.headers[ i ] );
			}

			// Allow custom headers/mimetypes and early abort
			if ( s.beforeSend &&
				( s.beforeSend.call( callbackContext, jqXHR, s ) === false || state === 2 ) ) {

				// Abort if not done already and return
				return jqXHR.abort();
			}

			// Aborting is no longer a cancellation
			strAbort = "abort";

			// Install callbacks on deferreds
			for ( i in { success: 1, error: 1, complete: 1 } ) {
				jqXHR[ i ]( s[ i ] );
			}

			// Get transport
			transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

			// If no transport, we auto-abort
			if ( !transport ) {
				done( -1, "No Transport" );
			} else {
				jqXHR.readyState = 1;

				// Send global event
				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
				}

				// If request was aborted inside ajaxSend, stop there
				if ( state === 2 ) {
					return jqXHR;
				}

				// Timeout
				if ( s.async && s.timeout > 0 ) {
					timeoutTimer = window.setTimeout( function() {
						jqXHR.abort( "timeout" );
					}, s.timeout );
				}

				try {
					state = 1;
					transport.send( requestHeaders, done );
				} catch ( e ) {

					// Propagate exception as error if not done
					if ( state < 2 ) {
						done( -1, e );

					// Simply rethrow otherwise
					} else {
						throw e;
					}
				}
			}

			// Callback for when everything is done
			function done( status, nativeStatusText, responses, headers ) {
				var isSuccess, success, error, response, modified,
					statusText = nativeStatusText;

				// Called once
				if ( state === 2 ) {
					return;
				}

				// State is "done" now
				state = 2;

				// Clear timeout if it exists
				if ( timeoutTimer ) {
					window.clearTimeout( timeoutTimer );
				}

				// Dereference transport for early garbage collection
				// (no matter how long the jqXHR object will be used)
				transport = undefined;

				// Cache response headers
				responseHeadersString = headers || "";

				// Set readyState
				jqXHR.readyState = status > 0 ? 4 : 0;

				// Determine if successful
				isSuccess = status >= 200 && status < 300 || status === 304;

				// Get response data
				if ( responses ) {
					response = ajaxHandleResponses( s, jqXHR, responses );
				}

				// Convert no matter what (that way responseXXX fields are always set)
				response = ajaxConvert( s, response, jqXHR, isSuccess );

				// If successful, handle type chaining
				if ( isSuccess ) {

					// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
					if ( s.ifModified ) {
						modified = jqXHR.getResponseHeader( "Last-Modified" );
						if ( modified ) {
							jQuery.lastModified[ cacheURL ] = modified;
						}
						modified = jqXHR.getResponseHeader( "etag" );
						if ( modified ) {
							jQuery.etag[ cacheURL ] = modified;
						}
					}

					// if no content
					if ( status === 204 || s.type === "HEAD" ) {
						statusText = "nocontent";

					// if not modified
					} else if ( status === 304 ) {
						statusText = "notmodified";

					// If we have data, let's convert it
					} else {
						statusText = response.state;
						success = response.data;
						error = response.error;
						isSuccess = !error;
					}
				} else {

					// Extract error from statusText and normalize for non-aborts
					error = statusText;
					if ( status || !statusText ) {
						statusText = "error";
						if ( status < 0 ) {
							status = 0;
						}
					}
				}

				// Set data for the fake xhr object
				jqXHR.status = status;
				jqXHR.statusText = ( nativeStatusText || statusText ) + "";

				// Success/Error
				if ( isSuccess ) {
					deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
				} else {
					deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
				}

				// Status-dependent callbacks
				jqXHR.statusCode( statusCode );
				statusCode = undefined;

				if ( fireGlobals ) {
					globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
						[ jqXHR, s, isSuccess ? success : error ] );
				}

				// Complete
				completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

					// Handle the global AJAX counter
					if ( !( --jQuery.active ) ) {
						jQuery.event.trigger( "ajaxStop" );
					}
				}
			}

			return jqXHR;
		},

		getJSON: function( url, data, callback ) {
			return jQuery.get( url, data, callback, "json" );
		},

		getScript: function( url, callback ) {
			return jQuery.get( url, undefined, callback, "script" );
		}
	} );

	jQuery.each( [ "get", "post" ], function( i, method ) {
		jQuery[ method ] = function( url, data, callback, type ) {

			// Shift arguments if data argument was omitted
			if ( jQuery.isFunction( data ) ) {
				type = type || callback;
				callback = data;
				data = undefined;
			}

			// The url can be an options object (which then must have .url)
			return jQuery.ajax( jQuery.extend( {
				url: url,
				type: method,
				dataType: type,
				data: data,
				success: callback
			}, jQuery.isPlainObject( url ) && url ) );
		};
	} );


	jQuery._evalUrl = function( url ) {
		return jQuery.ajax( {
			url: url,

			// Make this explicit, since user can override this through ajaxSetup (#11264)
			type: "GET",
			dataType: "script",
			async: false,
			global: false,
			"throws": true
		} );
	};


	jQuery.fn.extend( {
		wrapAll: function( html ) {
			var wrap;

			if ( jQuery.isFunction( html ) ) {
				return this.each( function( i ) {
					jQuery( this ).wrapAll( html.call( this, i ) );
				} );
			}

			if ( this[ 0 ] ) {

				// The elements to wrap the target around
				wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

				if ( this[ 0 ].parentNode ) {
					wrap.insertBefore( this[ 0 ] );
				}

				wrap.map( function() {
					var elem = this;

					while ( elem.firstElementChild ) {
						elem = elem.firstElementChild;
					}

					return elem;
				} ).append( this );
			}

			return this;
		},

		wrapInner: function( html ) {
			if ( jQuery.isFunction( html ) ) {
				return this.each( function( i ) {
					jQuery( this ).wrapInner( html.call( this, i ) );
				} );
			}

			return this.each( function() {
				var self = jQuery( this ),
					contents = self.contents();

				if ( contents.length ) {
					contents.wrapAll( html );

				} else {
					self.append( html );
				}
			} );
		},

		wrap: function( html ) {
			var isFunction = jQuery.isFunction( html );

			return this.each( function( i ) {
				jQuery( this ).wrapAll( isFunction ? html.call( this, i ) : html );
			} );
		},

		unwrap: function() {
			return this.parent().each( function() {
				if ( !jQuery.nodeName( this, "body" ) ) {
					jQuery( this ).replaceWith( this.childNodes );
				}
			} ).end();
		}
	} );


	jQuery.expr.filters.hidden = function( elem ) {
		return !jQuery.expr.filters.visible( elem );
	};
	jQuery.expr.filters.visible = function( elem ) {

		// Support: Opera <= 12.12
		// Opera reports offsetWidths and offsetHeights less than zero on some elements
		// Use OR instead of AND as the element is not visible if either is true
		// See tickets #10406 and #13132
		return elem.offsetWidth > 0 || elem.offsetHeight > 0 || elem.getClientRects().length > 0;
	};




	var r20 = /%20/g,
		rbracket = /\[\]$/,
		rCRLF = /\r?\n/g,
		rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
		rsubmittable = /^(?:input|select|textarea|keygen)/i;

	function buildParams( prefix, obj, traditional, add ) {
		var name;

		if ( jQuery.isArray( obj ) ) {

			// Serialize array item.
			jQuery.each( obj, function( i, v ) {
				if ( traditional || rbracket.test( prefix ) ) {

					// Treat each array item as a scalar.
					add( prefix, v );

				} else {

					// Item is non-scalar (array or object), encode its numeric index.
					buildParams(
						prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
						v,
						traditional,
						add
					);
				}
			} );

		} else if ( !traditional && jQuery.type( obj ) === "object" ) {

			// Serialize object item.
			for ( name in obj ) {
				buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
			}

		} else {

			// Serialize scalar item.
			add( prefix, obj );
		}
	}

	// Serialize an array of form elements or a set of
	// key/values into a query string
	jQuery.param = function( a, traditional ) {
		var prefix,
			s = [],
			add = function( key, value ) {

				// If value is a function, invoke it and return its value
				value = jQuery.isFunction( value ) ? value() : ( value == null ? "" : value );
				s[ s.length ] = encodeURIComponent( key ) + "=" + encodeURIComponent( value );
			};

		// Set traditional to true for jQuery <= 1.3.2 behavior.
		if ( traditional === undefined ) {
			traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
		}

		// If an array was passed in, assume that it is an array of form elements.
		if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

			// Serialize the form elements
			jQuery.each( a, function() {
				add( this.name, this.value );
			} );

		} else {

			// If traditional, encode the "old" way (the way 1.3.2 or older
			// did it), otherwise encode params recursively.
			for ( prefix in a ) {
				buildParams( prefix, a[ prefix ], traditional, add );
			}
		}

		// Return the resulting serialization
		return s.join( "&" ).replace( r20, "+" );
	};

	jQuery.fn.extend( {
		serialize: function() {
			return jQuery.param( this.serializeArray() );
		},
		serializeArray: function() {
			return this.map( function() {

				// Can add propHook for "elements" to filter or add form elements
				var elements = jQuery.prop( this, "elements" );
				return elements ? jQuery.makeArray( elements ) : this;
			} )
			.filter( function() {
				var type = this.type;

				// Use .is( ":disabled" ) so that fieldset[disabled] works
				return this.name && !jQuery( this ).is( ":disabled" ) &&
					rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
					( this.checked || !rcheckableType.test( type ) );
			} )
			.map( function( i, elem ) {
				var val = jQuery( this ).val();

				return val == null ?
					null :
					jQuery.isArray( val ) ?
						jQuery.map( val, function( val ) {
							return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
						} ) :
						{ name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
			} ).get();
		}
	} );


	jQuery.ajaxSettings.xhr = function() {
		try {
			return new window.XMLHttpRequest();
		} catch ( e ) {}
	};

	var xhrSuccessStatus = {

			// File protocol always yields status code 0, assume 200
			0: 200,

			// Support: IE9
			// #1450: sometimes IE returns 1223 when it should be 204
			1223: 204
		},
		xhrSupported = jQuery.ajaxSettings.xhr();

	support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
	support.ajax = xhrSupported = !!xhrSupported;

	jQuery.ajaxTransport( function( options ) {
		var callback, errorCallback;

		// Cross domain only allowed if supported through XMLHttpRequest
		if ( support.cors || xhrSupported && !options.crossDomain ) {
			return {
				send: function( headers, complete ) {
					var i,
						xhr = options.xhr();

					xhr.open(
						options.type,
						options.url,
						options.async,
						options.username,
						options.password
					);

					// Apply custom fields if provided
					if ( options.xhrFields ) {
						for ( i in options.xhrFields ) {
							xhr[ i ] = options.xhrFields[ i ];
						}
					}

					// Override mime type if needed
					if ( options.mimeType && xhr.overrideMimeType ) {
						xhr.overrideMimeType( options.mimeType );
					}

					// X-Requested-With header
					// For cross-domain requests, seeing as conditions for a preflight are
					// akin to a jigsaw puzzle, we simply never set it to be sure.
					// (it can always be set on a per-request basis or even using ajaxSetup)
					// For same-domain requests, won't change header if already provided.
					if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
						headers[ "X-Requested-With" ] = "XMLHttpRequest";
					}

					// Set headers
					for ( i in headers ) {
						xhr.setRequestHeader( i, headers[ i ] );
					}

					// Callback
					callback = function( type ) {
						return function() {
							if ( callback ) {
								callback = errorCallback = xhr.onload =
									xhr.onerror = xhr.onabort = xhr.onreadystatechange = null;

								if ( type === "abort" ) {
									xhr.abort();
								} else if ( type === "error" ) {

									// Support: IE9
									// On a manual native abort, IE9 throws
									// errors on any property access that is not readyState
									if ( typeof xhr.status !== "number" ) {
										complete( 0, "error" );
									} else {
										complete(

											// File: protocol always yields status 0; see #8605, #14207
											xhr.status,
											xhr.statusText
										);
									}
								} else {
									complete(
										xhrSuccessStatus[ xhr.status ] || xhr.status,
										xhr.statusText,

										// Support: IE9 only
										// IE9 has no XHR2 but throws on binary (trac-11426)
										// For XHR2 non-text, let the caller handle it (gh-2498)
										( xhr.responseType || "text" ) !== "text"  ||
										typeof xhr.responseText !== "string" ?
											{ binary: xhr.response } :
											{ text: xhr.responseText },
										xhr.getAllResponseHeaders()
									);
								}
							}
						};
					};

					// Listen to events
					xhr.onload = callback();
					errorCallback = xhr.onerror = callback( "error" );

					// Support: IE9
					// Use onreadystatechange to replace onabort
					// to handle uncaught aborts
					if ( xhr.onabort !== undefined ) {
						xhr.onabort = errorCallback;
					} else {
						xhr.onreadystatechange = function() {

							// Check readyState before timeout as it changes
							if ( xhr.readyState === 4 ) {

								// Allow onerror to be called first,
								// but that will not handle a native abort
								// Also, save errorCallback to a variable
								// as xhr.onerror cannot be accessed
								window.setTimeout( function() {
									if ( callback ) {
										errorCallback();
									}
								} );
							}
						};
					}

					// Create the abort callback
					callback = callback( "abort" );

					try {

						// Do send the request (this may raise an exception)
						xhr.send( options.hasContent && options.data || null );
					} catch ( e ) {

						// #14683: Only rethrow if this hasn't been notified as an error yet
						if ( callback ) {
							throw e;
						}
					}
				},

				abort: function() {
					if ( callback ) {
						callback();
					}
				}
			};
		}
	} );




	// Install script dataType
	jQuery.ajaxSetup( {
		accepts: {
			script: "text/javascript, application/javascript, " +
				"application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /\b(?:java|ecma)script\b/
		},
		converters: {
			"text script": function( text ) {
				jQuery.globalEval( text );
				return text;
			}
		}
	} );

	// Handle cache's special case and crossDomain
	jQuery.ajaxPrefilter( "script", function( s ) {
		if ( s.cache === undefined ) {
			s.cache = false;
		}
		if ( s.crossDomain ) {
			s.type = "GET";
		}
	} );

	// Bind script tag hack transport
	jQuery.ajaxTransport( "script", function( s ) {

		// This transport only deals with cross domain requests
		if ( s.crossDomain ) {
			var script, callback;
			return {
				send: function( _, complete ) {
					script = jQuery( "<script>" ).prop( {
						charset: s.scriptCharset,
						src: s.url
					} ).on(
						"load error",
						callback = function( evt ) {
							script.remove();
							callback = null;
							if ( evt ) {
								complete( evt.type === "error" ? 404 : 200, evt.type );
							}
						}
					);

					// Use native DOM manipulation to avoid our domManip AJAX trickery
					document.head.appendChild( script[ 0 ] );
				},
				abort: function() {
					if ( callback ) {
						callback();
					}
				}
			};
		}
	} );




	var oldCallbacks = [],
		rjsonp = /(=)\?(?=&|$)|\?\?/;

	// Default jsonp settings
	jQuery.ajaxSetup( {
		jsonp: "callback",
		jsonpCallback: function() {
			var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
			this[ callback ] = true;
			return callback;
		}
	} );

	// Detect, normalize options and install callbacks for jsonp requests
	jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

		var callbackName, overwritten, responseContainer,
			jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
				"url" :
				typeof s.data === "string" &&
					( s.contentType || "" )
						.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
					rjsonp.test( s.data ) && "data"
			);

		// Handle iff the expected data type is "jsonp" or we have a parameter to set
		if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

			// Get callback name, remembering preexisting value associated with it
			callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
				s.jsonpCallback() :
				s.jsonpCallback;

			// Insert callback into url or form data
			if ( jsonProp ) {
				s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
			} else if ( s.jsonp !== false ) {
				s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
			}

			// Use data converter to retrieve json after script execution
			s.converters[ "script json" ] = function() {
				if ( !responseContainer ) {
					jQuery.error( callbackName + " was not called" );
				}
				return responseContainer[ 0 ];
			};

			// Force json dataType
			s.dataTypes[ 0 ] = "json";

			// Install callback
			overwritten = window[ callbackName ];
			window[ callbackName ] = function() {
				responseContainer = arguments;
			};

			// Clean-up function (fires after converters)
			jqXHR.always( function() {

				// If previous value didn't exist - remove it
				if ( overwritten === undefined ) {
					jQuery( window ).removeProp( callbackName );

				// Otherwise restore preexisting value
				} else {
					window[ callbackName ] = overwritten;
				}

				// Save back as free
				if ( s[ callbackName ] ) {

					// Make sure that re-using the options doesn't screw things around
					s.jsonpCallback = originalSettings.jsonpCallback;

					// Save the callback name for future use
					oldCallbacks.push( callbackName );
				}

				// Call if it was a function and we have a response
				if ( responseContainer && jQuery.isFunction( overwritten ) ) {
					overwritten( responseContainer[ 0 ] );
				}

				responseContainer = overwritten = undefined;
			} );

			// Delegate to script
			return "script";
		}
	} );




	// Argument "data" should be string of html
	// context (optional): If specified, the fragment will be created in this context,
	// defaults to document
	// keepScripts (optional): If true, will include scripts passed in the html string
	jQuery.parseHTML = function( data, context, keepScripts ) {
		if ( !data || typeof data !== "string" ) {
			return null;
		}
		if ( typeof context === "boolean" ) {
			keepScripts = context;
			context = false;
		}
		context = context || document;

		var parsed = rsingleTag.exec( data ),
			scripts = !keepScripts && [];

		// Single tag
		if ( parsed ) {
			return [ context.createElement( parsed[ 1 ] ) ];
		}

		parsed = buildFragment( [ data ], context, scripts );

		if ( scripts && scripts.length ) {
			jQuery( scripts ).remove();
		}

		return jQuery.merge( [], parsed.childNodes );
	};


	// Keep a copy of the old load method
	var _load = jQuery.fn.load;

	/**
	 * Load a url into a page
	 */
	jQuery.fn.load = function( url, params, callback ) {
		if ( typeof url !== "string" && _load ) {
			return _load.apply( this, arguments );
		}

		var selector, type, response,
			self = this,
			off = url.indexOf( " " );

		if ( off > -1 ) {
			selector = jQuery.trim( url.slice( off ) );
			url = url.slice( 0, off );
		}

		// If it's a function
		if ( jQuery.isFunction( params ) ) {

			// We assume that it's the callback
			callback = params;
			params = undefined;

		// Otherwise, build a param string
		} else if ( params && typeof params === "object" ) {
			type = "POST";
		}

		// If we have elements to modify, make the request
		if ( self.length > 0 ) {
			jQuery.ajax( {
				url: url,

				// If "type" variable is undefined, then "GET" method will be used.
				// Make value of this field explicit since
				// user can override it through ajaxSetup method
				type: type || "GET",
				dataType: "html",
				data: params
			} ).done( function( responseText ) {

				// Save response for use in complete callback
				response = arguments;

				self.html( selector ?

					// If a selector was specified, locate the right elements in a dummy div
					// Exclude scripts to avoid IE 'Permission Denied' errors
					jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

					// Otherwise use the full result
					responseText );

			// If the request succeeds, this function gets "data", "status", "jqXHR"
			// but they are ignored because response was set above.
			// If it fails, this function gets "jqXHR", "status", "error"
			} ).always( callback && function( jqXHR, status ) {
				self.each( function() {
					callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
				} );
			} );
		}

		return this;
	};




	// Attach a bunch of functions for handling common AJAX events
	jQuery.each( [
		"ajaxStart",
		"ajaxStop",
		"ajaxComplete",
		"ajaxError",
		"ajaxSuccess",
		"ajaxSend"
	], function( i, type ) {
		jQuery.fn[ type ] = function( fn ) {
			return this.on( type, fn );
		};
	} );




	jQuery.expr.filters.animated = function( elem ) {
		return jQuery.grep( jQuery.timers, function( fn ) {
			return elem === fn.elem;
		} ).length;
	};




	/**
	 * Gets a window from an element
	 */
	function getWindow( elem ) {
		return jQuery.isWindow( elem ) ? elem : elem.nodeType === 9 && elem.defaultView;
	}

	jQuery.offset = {
		setOffset: function( elem, options, i ) {
			var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
				position = jQuery.css( elem, "position" ),
				curElem = jQuery( elem ),
				props = {};

			// Set position first, in-case top/left are set even on static elem
			if ( position === "static" ) {
				elem.style.position = "relative";
			}

			curOffset = curElem.offset();
			curCSSTop = jQuery.css( elem, "top" );
			curCSSLeft = jQuery.css( elem, "left" );
			calculatePosition = ( position === "absolute" || position === "fixed" ) &&
				( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

			// Need to be able to calculate position if either
			// top or left is auto and position is either absolute or fixed
			if ( calculatePosition ) {
				curPosition = curElem.position();
				curTop = curPosition.top;
				curLeft = curPosition.left;

			} else {
				curTop = parseFloat( curCSSTop ) || 0;
				curLeft = parseFloat( curCSSLeft ) || 0;
			}

			if ( jQuery.isFunction( options ) ) {

				// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
				options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
			}

			if ( options.top != null ) {
				props.top = ( options.top - curOffset.top ) + curTop;
			}
			if ( options.left != null ) {
				props.left = ( options.left - curOffset.left ) + curLeft;
			}

			if ( "using" in options ) {
				options.using.call( elem, props );

			} else {
				curElem.css( props );
			}
		}
	};

	jQuery.fn.extend( {
		offset: function( options ) {
			if ( arguments.length ) {
				return options === undefined ?
					this :
					this.each( function( i ) {
						jQuery.offset.setOffset( this, options, i );
					} );
			}

			var docElem, win,
				elem = this[ 0 ],
				box = { top: 0, left: 0 },
				doc = elem && elem.ownerDocument;

			if ( !doc ) {
				return;
			}

			docElem = doc.documentElement;

			// Make sure it's not a disconnected DOM node
			if ( !jQuery.contains( docElem, elem ) ) {
				return box;
			}

			box = elem.getBoundingClientRect();
			win = getWindow( doc );
			return {
				top: box.top + win.pageYOffset - docElem.clientTop,
				left: box.left + win.pageXOffset - docElem.clientLeft
			};
		},

		position: function() {
			if ( !this[ 0 ] ) {
				return;
			}

			var offsetParent, offset,
				elem = this[ 0 ],
				parentOffset = { top: 0, left: 0 };

			// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
			// because it is its only offset parent
			if ( jQuery.css( elem, "position" ) === "fixed" ) {

				// Assume getBoundingClientRect is there when computed position is fixed
				offset = elem.getBoundingClientRect();

			} else {

				// Get *real* offsetParent
				offsetParent = this.offsetParent();

				// Get correct offsets
				offset = this.offset();
				if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
					parentOffset = offsetParent.offset();
				}

				// Add offsetParent borders
				parentOffset.top += jQuery.css( offsetParent[ 0 ], "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true );
			}

			// Subtract parent offsets and element margins
			return {
				top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
				left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
			};
		},

		// This method will return documentElement in the following cases:
		// 1) For the element inside the iframe without offsetParent, this method will return
		//    documentElement of the parent window
		// 2) For the hidden or detached element
		// 3) For body or html element, i.e. in case of the html node - it will return itself
		//
		// but those exceptions were never presented as a real life use-cases
		// and might be considered as more preferable results.
		//
		// This logic, however, is not guaranteed and can change at any point in the future
		offsetParent: function() {
			return this.map( function() {
				var offsetParent = this.offsetParent;

				while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
					offsetParent = offsetParent.offsetParent;
				}

				return offsetParent || documentElement;
			} );
		}
	} );

	// Create scrollLeft and scrollTop methods
	jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
		var top = "pageYOffset" === prop;

		jQuery.fn[ method ] = function( val ) {
			return access( this, function( elem, method, val ) {
				var win = getWindow( elem );

				if ( val === undefined ) {
					return win ? win[ prop ] : elem[ method ];
				}

				if ( win ) {
					win.scrollTo(
						!top ? val : win.pageXOffset,
						top ? val : win.pageYOffset
					);

				} else {
					elem[ method ] = val;
				}
			}, method, val, arguments.length );
		};
	} );

	// Support: Safari<7-8+, Chrome<37-44+
	// Add the top/left cssHooks using jQuery.fn.position
	// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
	// Blink bug: https://code.google.com/p/chromium/issues/detail?id=229280
	// getComputedStyle returns percent when specified for top/left/bottom/right;
	// rather than make the css module depend on the offset module, just check for it here
	jQuery.each( [ "top", "left" ], function( i, prop ) {
		jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
			function( elem, computed ) {
				if ( computed ) {
					computed = curCSS( elem, prop );

					// If curCSS returns percentage, fallback to offset
					return rnumnonpx.test( computed ) ?
						jQuery( elem ).position()[ prop ] + "px" :
						computed;
				}
			}
		);
	} );


	// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
	jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
		jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
			function( defaultExtra, funcName ) {

			// Margin is only for outerHeight, outerWidth
			jQuery.fn[ funcName ] = function( margin, value ) {
				var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
					extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

				return access( this, function( elem, type, value ) {
					var doc;

					if ( jQuery.isWindow( elem ) ) {

						// As of 5/8/2012 this will yield incorrect results for Mobile Safari, but there
						// isn't a whole lot we can do. See pull request at this URL for discussion:
						// https://github.com/jquery/jquery/pull/764
						return elem.document.documentElement[ "client" + name ];
					}

					// Get document width or height
					if ( elem.nodeType === 9 ) {
						doc = elem.documentElement;

						// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
						// whichever is greatest
						return Math.max(
							elem.body[ "scroll" + name ], doc[ "scroll" + name ],
							elem.body[ "offset" + name ], doc[ "offset" + name ],
							doc[ "client" + name ]
						);
					}

					return value === undefined ?

						// Get width or height on the element, requesting but not forcing parseFloat
						jQuery.css( elem, type, extra ) :

						// Set width or height on the element
						jQuery.style( elem, type, value, extra );
				}, type, chainable ? margin : undefined, chainable, null );
			};
		} );
	} );


	jQuery.fn.extend( {

		bind: function( types, data, fn ) {
			return this.on( types, null, data, fn );
		},
		unbind: function( types, fn ) {
			return this.off( types, null, fn );
		},

		delegate: function( selector, types, data, fn ) {
			return this.on( types, selector, data, fn );
		},
		undelegate: function( selector, types, fn ) {

			// ( namespace ) or ( selector, types [, fn] )
			return arguments.length === 1 ?
				this.off( selector, "**" ) :
				this.off( types, selector || "**", fn );
		},
		size: function() {
			return this.length;
		}
	} );

	jQuery.fn.andSelf = jQuery.fn.addBack;




	// Register as a named AMD module, since jQuery can be concatenated with other
	// files that may use define, but not via a proper concatenation script that
	// understands anonymous AMD modules. A named AMD is safest and most robust
	// way to register. Lowercase jquery is used because AMD module names are
	// derived from file names, and jQuery is normally delivered in a lowercase
	// file name. Do this after creating the global so that if an AMD module wants
	// to call noConflict to hide this version of jQuery, it will work.

	// Note that for maximum portability, libraries that are not jQuery should
	// declare themselves as anonymous modules, and avoid setting a global if an
	// AMD loader is present. jQuery is a special case. For more information, see
	// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

	if ( true ) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
			return jQuery;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}



	var

		// Map over jQuery in case of overwrite
		_jQuery = window.jQuery,

		// Map over the $ in case of overwrite
		_$ = window.$;

	jQuery.noConflict = function( deep ) {
		if ( window.$ === jQuery ) {
			window.$ = _$;
		}

		if ( deep && window.jQuery === jQuery ) {
			window.jQuery = _jQuery;
		}

		return jQuery;
	};

	// Expose jQuery and $ identifiers, even in AMD
	// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
	// and CommonJS for browser emulators (#13566)
	if ( !noGlobal ) {
		window.jQuery = window.$ = jQuery;
	}

	return jQuery;
	}));


/***/ },
/* 641 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * A single function used to scroll a DOM node into view, optionally taking into
	 * account that it may be obscured by the custom keypad. The logic makes the
	 * strong assumption that the keypad will be anchored to the bottom of the page
	 * in calculating its height, as this method may be called before the keypad has
	 * animated into view.
	 *
	 * TODO(charlie): Move this scroll logic out of our components and into a higher
	 * level in the component tree--perhaps even into webapp, beyond Perseus.
	 */

	var _require = __webpack_require__(564),
	    toolbarHeightPx = _require.toolbarHeightPx;

	var scrollIntoView = function scrollIntoView(containerNode, keypadNode) {
	    // TODO(charlie): There's no need for us to be reading the keypad bounds
	    // here, since they're pre-determined by logic in the store. We should
	    // instead pass around an object that knows the bounds.
	    var containerBounds = containerNode.getBoundingClientRect();
	    var containerBottomPx = containerBounds.bottom;
	    var containerTopPx = containerBounds.top;

	    var desiredMarginPx = 16;

	    if (keypadNode) {
	        // NOTE(charlie): We can't use the bounding rect of the keypad,
	        // as it is likely in the process of animating in. Instead, to
	        // calculate its top, we make the strong assumption that the
	        // keypad will end up anchored at the bottom of the page, but above the
	        // toolbar, and use its height, which is known at this point. Note that,
	        // in the native apps (where the toolbar is rendered natively), this
	        // will result in us leaving excess space between the input and the
	        // keypad, but that seems okay.
	        var pageHeightPx = window.innerHeight;
	        var keypadHeightPx = keypadNode.clientHeight;
	        var keypadTopPx = pageHeightPx - (keypadHeightPx + toolbarHeightPx);

	        if (containerBottomPx > keypadTopPx) {
	            // If the input would be obscured by the keypad, scroll such that
	            // the bottom of the input is just above the top of the keypad,
	            // taking care not to scroll the input out of view.
	            var scrollOffset = Math.min(containerBottomPx - keypadTopPx + desiredMarginPx, containerTopPx);

	            document.body.scrollTop += scrollOffset;
	            return;
	        }
	    }

	    // Alternatively, if the input is out of the viewport or nearly out
	    // of the viewport, scroll it into view. We can do this regardless
	    // of whether the keypad has been provided.
	    if (containerTopPx < desiredMarginPx) {
	        document.body.scrollTop -= containerBounds.height + desiredMarginPx;
	    }
	};

	module.exports = scrollIntoView;

/***/ },
/* 642 */
/***/ function(module, exports) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * A gesture recognizer that detects 'drags', crudely defined as either scrolls
	 * or touches that move a sufficient distance.
	 */

	// The 'slop' factor, after which we consider the use to be dragging. The value
	// is taken from the Android SDK. It won't be robust to page zoom and the like,
	// but it should be good enough for our purposes.
	var touchSlopPx = 8;

	var DragListener = function () {
	    function DragListener(onDrag, initialEvent) {
	        _classCallCheck(this, DragListener);

	        // We detect drags in two ways. First, by listening for the window
	        // scroll event (we consider any legitimate scroll to be a drag).
	        this._scrollListener = function () {
	            onDrag();
	        };

	        // And second, by listening for touch moves and tracking the each
	        // finger's displacement. This allows us to track, e.g., when the user
	        // scrolls within an individual view.
	        var touchLocationsById = {};
	        for (var i = 0; i < initialEvent.changedTouches.length; i++) {
	            var touch = initialEvent.changedTouches[i];
	            touchLocationsById[touch.identifier] = [touch.clientX, touch.clientY];
	        }

	        this._moveListener = function (evt) {
	            for (var _i = 0; _i < evt.changedTouches.length; _i++) {
	                var _touch = evt.changedTouches[_i];
	                var initialTouchLocation = touchLocationsById[_touch.identifier];
	                if (initialTouchLocation) {
	                    var touchLocation = [_touch.clientX, _touch.clientY];
	                    var dx = touchLocation[0] - initialTouchLocation[0];
	                    var dy = touchLocation[1] - initialTouchLocation[1];

	                    var squaredDist = dx * dx + dy * dy;
	                    var squaredTouchSlop = touchSlopPx * touchSlopPx;

	                    if (squaredDist > squaredTouchSlop) {
	                        onDrag();
	                    }
	                }
	            }
	        };

	        // Clean-up any terminated gestures, since some browsers reuse
	        // identifiers.
	        this._endAndCancelListener = function (evt) {
	            for (var _i2 = 0; _i2 < evt.changedTouches.length; _i2++) {
	                delete touchLocationsById[evt.changedTouches[_i2].identifier];
	            }
	        };
	    }

	    _createClass(DragListener, [{
	        key: 'attach',
	        value: function attach() {
	            window.addEventListener('scroll', this._scrollListener);
	            window.addEventListener('touchmove', this._moveListener);
	            window.addEventListener('touchend', this._endAndCancelListener);
	            window.addEventListener('touchcancel', this._endAndCancelListener);
	        }
	    }, {
	        key: 'detach',
	        value: function detach() {
	            window.removeEventListener('scroll', this._scrollListener);
	            window.removeEventListener('touchmove', this._moveListener);
	            window.removeEventListener('touchend', this._endAndCancelListener);
	            window.removeEventListener('touchcancel', this._endAndCancelListener);
	        }
	    }]);

	    return DragListener;
	}();

	module.exports = DragListener;

/***/ }
]));