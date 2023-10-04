import { createContext } from "react";

const UserContext = createContext({
    user: {
        name: "yogi",
        email: "yogi@gmail.com"
    }
})

export default UserContext;