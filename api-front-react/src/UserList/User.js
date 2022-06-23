import React from "react"
import PropTypes from "prop-types"

class User extends React.Component {
  render () {
    return (
      <div>
        <div>Name: {this.props.name}</div>
       
      </div>
    );
  }
}

User.propTypes = {
  title: PropTypes.string,
  
};
export default User