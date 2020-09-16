import React from 'react'


export const deleteButtonContext = React.createContext()
const DeleteProvider = deleteButtonContext.Provider
const DeleteConsumer = deleteButtonContext.Consumer

export {DeleteProvider,DeleteConsumer}