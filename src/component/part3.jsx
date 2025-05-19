const Part3=()=>{
return <div>
<User  name="ayush" age="18"/>
<Product pro_name="laptop" pro_price="1800$"/>
</div>
}

const User=(props)=>{
return (
    <div>
    <h1>{props.name}</h1>
    <p>{props.age}</p>
    </div>
)
}

const Product=({pro_name,pro_price})=>{
    return (
        <div>
            <h2>{pro_name}</h2>
            <p>{pro_price}</p>
        </div>
    )
}




export default Part3;