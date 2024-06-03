import React, { useState } from 'react'
import socket from '../socket';

const useUserType = () => {
    const [userType, setUserType] = useState("pending")
    socket.on("connect", (data) => {
      socket.emit("isThereSomeOneInTheRoom");
      socket.on("userType", (type) => {
        setUserType(type)
  
      });
    });
return {userType}
}

export default useUserType