import { counterActions } from "./counter";

export const sendCardData = (items) => {
  return async (dispatch) => {
    dispatch(
      counterActions.showNotification({
        status: "pending",
        title: "sending data",
        message: "sending cart data",
      })
    );
    const sendRequest = async () => {
      const response = await fetch(
        "https://test-udemy-course-da768-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json",
        {
          method: "PUT",
          body: JSON.stringify({
            cart: items,
          }),
        }
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      dispatch(
        counterActions.showNotification({
          status: "success",
          title: "Successs",
          message: "sent successfully.",
        })
      );
    };

    try {
      await sendRequest();
      counterActions.showNotification({
        status: "success",
        title: "Successs",
        message: "sent successfully.",
      });
    } catch (error) {
      dispatch(
        counterActions.showNotification({
          status: "err",
          title: "Error",
          message: `failed - ${error.message}.`,
        })
      );
    }
  };
};

export const getCardData = () => {
  return async (dispatch) => {
    const sendRequest = async () => {
      const response = await fetch(
        "https://test-udemy-course-da768-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json"
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const data = await response.json();

      dispatch(counterActions.setInitialState(data?.cart || []));
    };

    try {
      await sendRequest();
    } catch (error) {
      dispatch(
        counterActions.showNotification({
          status: "err",
          title: "Error",
          message: `failed while fetching data- ${error.message}.`,
        })
      );
    }
  };
};
