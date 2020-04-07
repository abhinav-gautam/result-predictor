import React from 'react';
import MessengerCustomerChat from 'react-messenger-customer-chat';

const Messenger =({isLoggedIn})=>{
  if (isLoggedIn === true) {
    return(
      <div>
        <MessengerCustomerChat
          pageId="100459791623073"
          appId="230283921423735"
        />
      </div>
  );
  }else{
    return null;
  }
}
export default Messenger;