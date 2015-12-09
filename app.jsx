/* 
  MinimalComponent has properties but no state. Properties 
  are set in the call to React.render
*/
var MinimalComponent = React.createClass({
  render: function() {
    return(<div className="inert">I do not do much. I do have properties. My "fruit" property is set to value {this.props.fruit}.</div>)
  }
});

React.render(<MinimalComponent fruit="banana" />, document.getElementById('test-div1'));
React.render(<MinimalComponent fruit="orange" />, document.getElementById('test-div2'));



/* ClickAwareButtonComponent has both state and properties. */

var ClickAwareButtonComponent = React.createClass({
  getInitialState: function(){
    return {
      clickCount: 0,
      otherState: 'Jim'
    };
  },
  handleClick: function() {
    console.log('I ran ' + this.state.clickCount);
    /* setState allows us to update state. Run it as setState(opts) where 
       the keys of opts are the state to update.
       You don't need to pass every key every time - i.e. existing 
       state with keys you don't pass is left untouched.
    */
    this.setState({ clickCount: 1 + Number(this.state.clickCount) });
  },
  render: function(){
    return( <button onClick={this.handleClick} >Hi from 
      the {this.props.chairType} chair. I have been 
      clicked {this.state.clickCount} times. I have otherState
      with value {this.state.otherState}
      </button> );
  }
});


React.render(<ClickAwareButtonComponent chairType="Aeron" />, document.getElementById('test-button'));
