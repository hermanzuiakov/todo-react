import React from 'react';

const Layout = ({children}) => {
    return (
        <div className="bg-zinc-900 min-h-screen text-white py-10 font-mono">
            {children}
        </div>
    );
};

export default Layout;