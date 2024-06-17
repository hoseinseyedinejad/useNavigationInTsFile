import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


declare global{
    interface Window {
        myNavigate: (path: string) => void;
    }
}

// This is the middleware that enables us to use react hook (useNavigation) in the non-react components
export default function NavigationMiddleware() {
    const navigate = useNavigate();

    useEffect(() => {
        // Expose the navigate function to the global scope -- Not recommended in normal routines.
        window.myNavigate = (path) => {
            navigate(path);
        };
    }, [navigate]);

    //This components doesn't render anything
    return null;
}