import Header from "./components/Header";
import {FC} from "react";
import {Outlet} from 'react-router-dom';

const App: FC = () =>  {
  return (
    <div className="App">
        <Header/>
        <Outlet />
    </div>
  );
}

export default App;
