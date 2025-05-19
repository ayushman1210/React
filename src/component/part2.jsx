const Part2=()=>{
    const Userlist=
    [
    {id:"1",  name:"ayush", age:"25",},
    {id:"2",  name:"aajay", age:"24"},
    {id:"3",  name:"samriddh", age:"26"}
];

const Products=[
        {id:"1",  name:"phone", price:"2500",},
    {id:"2",  name:"laptop", price:"240000"},
    {id:"3",  name:"headphone", price:"260"}
]

return (
    <div>
        {Userlist.map((user)=>(
            <ul key={Math.random()}> 
                <li>{user.name}</li>
                <li>{user.id}</li>
                <li>{user.age}</li>
            </ul>
        ))}

    {Products.map((product)=>(
        <ul key={product.id}>
            <li >{product.id}</li>
            <li>{product.name}</li>
            <li>{product.price}</li>
        </ul>
    ))}
    </div>
)
}

export default Part2;

