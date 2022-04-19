
import { useState, useEffect,useRef } from 'react';


export const useFetch = (url) => {

      const isMounted = useRef(true);
    const [state, setState] = useState({data: null, loading: true, error: null});

      useEffect(() => {
    return () => {
        isMounted.current = false;
    }
    }, []);
    
    useEffect(() => {
        if(isMounted.current){
            
            setState({data: null, loading: true, error: null});
                fetch(url)
                .then(response => response.json())
                .then(data => setState({data, loading: false, error: null}))
                .catch(() => setState({data: null, loading: false, error: 'No se logro obtener la información'}));
        } else {
            console.log('no se ejecuta');
        }
    }, [url]);

    return state;

}
