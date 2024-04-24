import React, { Component } from 'react';
import User from './User';

class UsersList extends Component {
    state = {
        sorting: null,
        users: this.props.users,
    };

    toggleSorting = () => {
        const newSorting = this.state.sorting === 'asc'
            ? 'desc'
            : 'asc';
        const sortedUsers = this.props.users.slice().sort((a, b) => {
            if (newSorting === 'asc') {
                return a.age - b.age;
            } else {
                return b.age - a.age;
            }
        });
        this.setState({
            sorting: newSorting,
            users: sortedUsers,
        });
    };

    render() {
        let usersList = this.state.users;

        return (
            <div>
                <button className="btn" onClick={this.toggleSorting}>
                    {this.state.sorting === 'asc' ? 'Age' : this.state.sorting === 'desc' ? 'Age' : '-'}
                </button>
                <ul className="users">
                    {usersList.map(user => (
                        <User key={user.id} {...user} />
                    ))}
                </ul>
            </div>
        );
    }
}

export default UsersList;