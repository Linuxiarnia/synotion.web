import { NavBar } from '@components/Navigation';
import React, { PropsWithChildren } from 'react';

export const Layout: React.FC<PropsWithChildren> = ({ children }) => {
    return<>
        <NavBar></NavBar>
        {children}
    </>;
};