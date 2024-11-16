import React from 'react';
interface UserElementProps {
    img: string;
    name: string;
    message: string;
}

export const UserElement = (props:UserElementProps) => {
    return (
        <div style={{
            display:'flex', justifyContent:'left', alignItems:'flex-start' 
        }}>
            <div style={{ width:'5rem' }}>
                <img alt='profile' src={props.img} style={{
                    borderRadius:'100%',height:'5rem',width:'5rem', margin:'1rem' 
                }}/>
            </div>
            <div style={{ marginLeft:'3rem' }}>
                <h1 style={{ marginBottom:0 }}>Hi {props.name}!</h1>
                <h2 style={{ marginTop:0 }}>{props.message}</h2>
            </div>

        </div>
    );
};