
import React from 'react';

import { Profile } from '../../components/Profile/profile';
import user from '../../components/data/user.json';

import Statistics from '../Statistics/statistics';
import data from '../../components/data/data.json';


import FriendList from '../FriendsList/friendList';
import friends from '../../components/data/friends.json';

import transactions from '../../components/data/transactions.json';
import TransactionHistory from '../../components/Transactions/transactions';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};


