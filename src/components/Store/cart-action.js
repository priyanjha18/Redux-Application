import { uiAction } from "./ui-slice";
import {cartAction} from "./cart-slice";
export const fetchCartData=()=>{
    return async(dispatch)=>{
        const fetchData=async()=>{
            const response=await fetch("https://realtime-database-c8b45-default-rtdb.firebaseio.com/cart.json");
            if(!response.ok){
                throw new Error("Could not fetch Cart data");
            }
            const resData=await response.json();
            return resData;
        }
        try{
            const data=await fetchData();
            dispatch(cartAction.replaceCart({
                items:data.items || [],
                totalQuantity:data.totalQuantity,
                totalAmount:data.totalAmount
            }))
        }catch(error){
            dispatch(
                uiAction.showNotification({
                  status: "error",
                  title: "error...",
                  message: error.message,
                })
              )

        }

    }

}
export const sendCartData = (cart) => {
    return async (dispatch) => {
      dispatch(
        uiAction.showNotification({
          status: "pending",
          title: "sending",
          message: "sending cart data",
        })
      );
     const sendRequest=async ()=>{
      const response = await fetch(
          "https://realtime-database-c8b45-default-rtdb.firebaseio.com/cart.json",
          {
            method: "PUT",
            body: JSON.stringify(cart),
          }
        );
        if (!response.ok) {
          throw new Error("error failed to sent data");
        }
     }
     try{
      
     await sendRequest();
     dispatch(
      uiAction.showNotification({
        status: "success",
        title: "success...",
        message: "sent Cart data Successfully",
      })
    )
  
     }
     catch(error){
      dispatch(
          uiAction.showNotification({
            status: "error",
            title: "error...",
            message: error.message,
          })
        )
      
      
     }
    };
  };