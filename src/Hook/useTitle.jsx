import { useEffect } from "react"


const useTitle = title => {
    useEffect( () => {
        document.title = `${title} - Brain Booster Toys`;
    }, [title])
};

export default useTitle;