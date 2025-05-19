const Userstatus=(props)=>{
    if(props.loggedIn && props.isAdmin){
        return <h1>Welcome Admin</h1>
    }
    else{return <h1>welcome user</h1> }
}


export default Userstatus;