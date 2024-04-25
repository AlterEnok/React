import React, { Component } from 'react';
import User from './User';
import Pagination from './Pagination';

class UsersList extends Component {
    state = {
        currentPage: 1,
        users: this.props.users,
    };

    goPrevPage = () => {
        this.setState(prevState => ({
            currentPage: prevState.currentPage - 1,
        }));
    };

    goNextPage = () => {
        this.setState(prevState => ({
            currentPage: prevState.currentPage + 1,
        }));
    };

    render() {
        const { users, currentPage } = this.state;
        const itemsPerPage = 3;
        const startIdx = (currentPage - 1) * itemsPerPage;
        const endIdx = startIdx + itemsPerPage;
        const displayedUsers = users.slice(startIdx, endIdx);

        return (
            <div>
                <Pagination
                    goPrev={this.goPrevPage}
                    goNext={this.goNextPage}
                    currentPage={currentPage}
                    totalItems={users.length}
                    itemsPerPage={itemsPerPage}
                />
                <ul className="users">
                    {displayedUsers.map(user => (
                        <User key={user.id} {...user} />
                    ))}
                </ul>
            </div>
        );
    }
}

export default UsersList;