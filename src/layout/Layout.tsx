import React, { PropsWithChildren } from 'react';

export const Layout: React.FC<PropsWithChildren> = ({ children }) => {
    return<>
        <nav></nav>
        {children}
    </>;
};