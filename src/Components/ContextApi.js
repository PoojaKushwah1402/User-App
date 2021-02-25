import React from "react";

const UsersContext = React.createContext();

const Provider = UsersContext.Provider;
const Consumer = UsersContext.Consumer;

export {Provider, Consumer, UsersContext}
