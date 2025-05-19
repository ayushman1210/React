const Part1=()=>{
    const name="ayushmaan";
    const multiply=(a,b)=> a*b;
    const greet="hello";
    const date=new Date();
  const product={
    name:"laptop",
    year:"2years",
    available:"stock"
  }
    return (
        <section>
            <p>2+2={2+2}</p>
            <h1>{name}</h1>
            <p>friend list :{["aysuh","ashd","aksl"]}</p>
            <p>2*2={multiply(2,2)}</p>
        <h1>{greet}</h1>
        <p>{date.getFullYear()}</p>

        <p>Name:{product.name}</p>
        <p>price:${product.year}</p>
        <p>avilable:{product.available}</p>
        </section>
    )
}

export default Part1;