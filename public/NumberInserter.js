import React, { propTypes } from 'react'
import { connect } from 'react-redux'
import { CounterActions } from './acition'

class NumberInserter extends React.Component {
  constructor(props) {
    super(props)
  }

  click() {
    this.props.testClick();
  }

  render() {
    return (
        <div>
          <h1>Zadej Cislo</h1>
          <input/>
          <button onClick={this.click.bind(this)}>chci videt co mi nabidnes</button>
        </div>
      )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    testClick: () => dispatch(CounterActions("Add"))
  }
};

const mapStateToProps = (state) => {
  return state;
};

const DefaultApp = connect(mapStateToProps,  mapDispatchToProps)(NumberInserter);

export default DefaultApp;