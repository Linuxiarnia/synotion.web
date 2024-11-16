import React from 'react';

export interface UserElementProps {
    img: string;
    name: string;
    message: string;
}

export const UserElement = ({ img, name, message }:UserElementProps) => {
    return (
        <div style={{
            display:'flex', justifyContent:'left', alignItems:'flex-start' 
        }}>
            <div style={{ width:'5rem' }}>
                <img alt='profile' src={img} style={{
                    borderRadius:'100%',height:'5rem',width:'5rem', margin:'1rem' 
                }}/>
            </div>
            <div style={{ marginLeft:'3rem' }}>
                <h1 style={{ marginBottom:0 }}>Hi {name}!</h1>
                <h2 style={{ marginTop:0 }}>{message}</h2>
            </div>

        </div>
    );
};