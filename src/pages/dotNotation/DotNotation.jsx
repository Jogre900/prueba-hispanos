import React from 'react'
import PropTypes from 'prop-types'
const Hello = ({ name }) => {
  return (
    <div>
      <h2>Hello! {name}</h2>
    </div>
  )
}

const Bye = ({ name }) => {
  return (
    <div>
      <h2>Good bye! {name}</h2>
    </div>
  )
}

const SaySomething = {
  Hello: (props) => <Hello {...props} />,
  Bye: (props) => <Bye {...props} />
}

const DotNotation = () => {
  return (
    <div>
      <h2>DotNotation</h2>
      <div>
        <SaySomething.Hello />
        <SaySomething.Bye name="ass hole" />
      </div>
    </div>
  )
}

export default DotNotation

SaySomething.propTypes = {
  name: PropTypes.string
}

Hello.propTypes = {
  name: PropTypes.string
}

Bye.propTypes = {
  name: PropTypes.string
}
