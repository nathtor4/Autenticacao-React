import { useEffect, useState } from "react";

export const AcessoToken = () => {
    const [existeToken, setExisteToken] = useState(false); 

    useEffect(() => {
        const token = sessionStorage.getItem('token');
        setExisteToken(token !== null);
    }, []);

    
    return existeToken
};
