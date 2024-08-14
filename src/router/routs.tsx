
import Seen from "../components/Seen";
import Watchlist from "../components/Watchlist";
import Main from "../components/Main";
import UserProfile from "../components/UserProfile";

export const privateRoutes = [
  {path: '', element: <Main />},
  {path: '/seen', element: <Seen />},
  {path: '/watchlist', element: <Watchlist />},
  {path: '/userProfile', element: <UserProfile />}
];

// export const publicRoutes = [
//   {path: '/login', element: Login},
// ];