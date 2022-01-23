import { api } from "../../services/api";
import Router from 'next/router'
import { findUser } from "../../queries/UserQueries";

export const getStaticProps = async () => {
    const response = await api.post('/', { query: findUser })
    const data = await response.data.data
    return {
        props: {data: data}
    }
}

const Auth = ({data, children}) => {
    if (data.user){
        return <div>{children}</div>
    }else{
        return Router.push("/User/Login")
    }
}

export default Auth