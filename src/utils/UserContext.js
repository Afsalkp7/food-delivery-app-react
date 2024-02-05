const { createContext } = require("react");

const UserContext = createContext({
    loggedUser : "default user"
}) 

export default UserContext