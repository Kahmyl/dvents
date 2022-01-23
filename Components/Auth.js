import { api } from '../services/api';
import Router from 'next/router'
import { findUser } from '../queries/UserQueries';
import { useState, useEffect, useContext } from "react";

export const getStaticProps = async () => {
    const response = await api.post('/', { query: findUser })
    const data = await response.data.data
    if (data && !data.user){
        return Router.push("/User/Login")
    }
    return {
        props: {data: data}
    }
}

const Auth = ({data, children}) => {
    if (data && data.user){
        return <div>{children}</div>
    }
    return (
        <div>{children}</div>
    )
}

export default Auth