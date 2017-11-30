const React = require('react');

const {View} = require('../fake-react-native-web');
const {components} = require('../index');

const {Keypad, KeypadInput} = components;

const App = React.createClass({
    getInitialState() {
        return {
            keypadElement: null,
            value: this.props.value ? this.props.value : "",
        };
    },

    // shouldComponentUpdate(nextProps, nextState) {
    //   return this.props.value !== nextProps.value;
    // },

    onInputChange(value, cb){
        //this.props.onChange(value);
        this.setState({value}, cb);
    },

    render() {
        return <View>
            <div
                style={{
                    marginTop: 10,
                    marginLeft: 20,
                    marginRight: 20,
                    marginBottom: 40,
                }}
            >
                <KeypadInput
                    value={this.state.value}
                    keypadElement={this.state.keypadElement}
                    onChange={(value, cb) => this.onInputChange(value, cb)}
                    onFocus={() => this.state.keypadElement.activate()}
                    onBlur={() => this.state.keypadElement.dismiss()}
                />
            </div>
            <Keypad
                onElementMounted={node => {
                    if (node && !this.state.keypadElement) {
                        this.setState({keypadElement: node});
                    }
                }}
            />
        </View>;
    },
});

module.exports = App;
