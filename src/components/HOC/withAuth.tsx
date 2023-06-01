import React, { useEffect, useState } from 'react'

const withAuth = <T extends object>(WrappedComponent: React.ComponentType<T>) => {



    const WithAuth: React.FC<T> = (props) => {
        const [isLoggedIn, setIsLoggedIn] = useState(false);

        useEffect(() => {
            console.log("Fetch any api to see if the user is logged in");
            setTimeout(() => {
                setIsLoggedIn(true);
            }, 2000)

            return () => {
                console.log("Unsubscribe apis");
            }
        }, [])

        if (!isLoggedIn) {
            return <p>You have no permissions</p>
        }

        return <WrappedComponent {...props} />
    }

    return WithAuth;
}

export default withAuth;

