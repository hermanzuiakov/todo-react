import React from 'react';

const Layout = ({children}) => {
    return (
        <div className={`font-mono`}>
            {children}
        </div>
    );
};

export default Layout;