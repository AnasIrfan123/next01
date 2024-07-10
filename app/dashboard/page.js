export default async function Dashboard() {
    const res = await fetch('https://dummyjson.com/products')
    const result = await res.json()
    console.log('result', result)

    return <h1>Hello Dashboard!

    {result.products.map(item => {
        return <div>
            <h3>{item.title}</h3>
            <img width="100" height="100" src={item.thumbnail} />
        </div>
    })}

    </h1>
}