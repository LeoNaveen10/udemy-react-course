import { useDispatch, useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useEffect, Fragment } from "react";
import { getCardData, sendCardData } from "./store/cartActions";
import Notification from "./components/Notification";

let isInitial = true;

function App() {
  const items = useSelector((state) => state.counter.items);
  const dispatch = useDispatch();
  const notification = useSelector((state) => state.counter.notification);
  const isChanged = useSelector((state)=>state.counter.changed);

  useEffect(() => {
    if (isInitial) {
      dispatch(getCardData());
      isInitial = false;
      return;
    }

    //send only when state have been changed by user
    //this is to prevent the app to send the request to update items when item loaded for the first time
    //coz we have items in this dependency
    if (isChanged) dispatch(sendCardData(items)); 
  }, [items, dispatch]); //but dispatch is not needed

  return (
    <Fragment>
      {notification && <Notification {...notification} />}
      <Layout>
        <Cart />
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
