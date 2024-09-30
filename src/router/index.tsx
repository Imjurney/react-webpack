import { Switch, Route } from "react-router-dom";
import HomePage from "src/container/Home";
import ListPage from "src/container/List";
import MyPage from "src/container/Mypage";

const RouterComponent = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/list" component={ListPage} />
      <Route exact path="/mypage" component={MyPage} />
    </Switch>
  );
};

export default RouterComponent;
