
import Seen from "../components/Seen";
import Watchlist from "../components/Watchlist";
import Main from "../components/Main";

export const privateRoutes = [
  {path: '', element: <Main />},
  {path: '/seen', element: <Seen />},
  {path: '/watchlist', element: <Watchlist />}
];

// export const publicRoutes = [
//   {path: '/login', element: Login},
// ];