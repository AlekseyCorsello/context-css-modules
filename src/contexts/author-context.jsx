import { createContext } from "react";
import { author } from "./author"

const AuthorContext = createContext('');

function AuthorProvider({children}) {
    return (
        <AuthorContext.Provider value={author}>
            {children}
        </AuthorContext.Provider>
    )
}

export {AuthorContext, AuthorProvider}