import { Switch, Route } from "react-router-dom";
import HomePage from "@/container/Home";
import ListPage from "@/container/List";
import MyPage from "@/container/Mypage";

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
