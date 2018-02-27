import React, { propTypes } from 'react'
import { connect } from 'react-redux'
import { loadPhonewords } from './acition'

class Phonewords extends React.Component {
  constructor(props) {
    super(props)
  }

  click() {
    // skip empty string
    if (!(/\S/.test(this.refs.numbers.value))) return;
    this.props.testClick(this.refs.numbers.value);
  }

  render() {
    return (
        <div>
          <h1>Zadej Cislo</h1>
          <input ref="numbers"/>
          <button onClick={this.click.bind(this)}>chci videt co mi nabidnes</button>
          <div>
            {this.props.phonewords.map((word, i) => {
              return (<span>{word}, </span>)
            })}
          </div>
        </div>
      )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    testClick: (numbers) => dispatch(loadPhonewords(numbers)),
  }
};

const mapStateToProps = (state) => {
  return state;
};

const DefaultApp = connect(mapStateToProps,  mapDispatchToProps)(Phonewords);

export default DefaultApp;