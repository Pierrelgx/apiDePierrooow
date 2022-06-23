import React, {Component} from "react"
import User from "./User"
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



    // function UserList(props) {
    //     return (
    //         <div>
    //             <h1>Voici la liste des utilisateurs enregistrés sur la base de données</h1>
    //             {props.users.map((user) => {
    //                 return (
    //                     <div key={user.id}>
    //                         <h2>{user.name}</h2>
    //                     </div>
    //                 );
    //             })}
    //         </div>
    //     )
    // }






export default UserList;