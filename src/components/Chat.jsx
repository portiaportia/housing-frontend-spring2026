
import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

const Chat = () => {
    useEffect(() => {
        Crisp.configure("916056ab-301d-4f55-9acc-7ad8464d82f8");
        
        Crisp.chat.show();
    }, []);

    return null;
};

export default Chat;