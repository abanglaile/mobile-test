/**
 * An autogenerated component that renders the DIVIDE iconograpy in SVG.
 *
 * Generated with: https://gist.github.com/crm416/3c7abc88e520eaed72347af240b32590.
 */
const React = require('react');

const Divide = React.createClass({
    propTypes: {
        color: React.PropTypes.string.isRequired,
    },

    render() {
        return <svg width="48" height="48" viewBox="0 0 48 48"><g fill="none" fillRule="evenodd"><path fill="none" d="M0 0h48v48H0z"/><path d="M19 24h10" stroke={this.props.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><circle fill={this.props.color} cx="24" cy="19.5" r="1.5"/><circle fill={this.props.color} cx="24" cy="28.5" r="1.5"/></g></svg>;
    },
});

module.exports = Divide;
