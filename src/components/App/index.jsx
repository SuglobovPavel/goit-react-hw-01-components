import dataProfile from "data/user.json";
import dataStatistics from "data/statistics.json";
import dataFriends from "data/friends.json";
import dataTransactions from "data/transactions.json";
import { Profile } from "components/Profile";
import { Statistics } from "components/Statistics";
import { FriendList } from "components/FriendList";
import { Transactions } from "components/Transactions";


const {avatar, username, tag, location, stats} = dataProfile;

export default function App(){
   return <>
      <Profile 
      avatar={avatar}
      username={username}
      tag={tag}
      location={location}
      stats={stats}
   ></Profile>
   <Statistics
      title="Upload stats" 
      stats={dataStatistics}
   ></Statistics>
   <FriendList
      friends={dataFriends}
   ></FriendList>
   <Transactions
      transactions={dataTransactions}
   ></Transactions>
   </>;
} 