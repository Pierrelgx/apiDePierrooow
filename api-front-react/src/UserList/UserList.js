import React, {Component} from "react"
import UserForm from "./UserForm"

const api_url = 'http://localhost:3001/api/v1/users'

    class UserList extends Component {
        constructor(props) {
            super(props)
            //items [0] == User #1 etc etc... 
            this.state = {
                items: []
            }
        }

        render() {
            return (
                <div>
                    <UserForm />
                    <ul>
                        <li>User #1</li>
                        <li>User #2</li>
                    </ul>
                </div>
            )
        }

    }

export default UserList;