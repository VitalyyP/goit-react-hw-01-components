import Container from "./components/Container";
import Profile from "./components/Profile";
import user from "./jsons/user.json";
import Statistics from "./components/Statistics";
import statisticalData from "./jsons/statistical-data.json";
import FriendList from "./components/FriendList";
import friends from "./jsons/friends.json";
import TransactionHistory from "./components/TransactionHistory";
import transactions from "./jsons/transactions.json";

const { avatar, name, tag, location, stats } = user;
const { followers, views, likes } = stats;

export default function App() {
  return (
    <Container>
      <Profile
        avatar={avatar}
        name={name}
        tag={tag}
        location={location}
        followers={followers}
        views={views}
        likes={likes}
      />
      <Statistics stats={statisticalData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </Container>
  );
}
