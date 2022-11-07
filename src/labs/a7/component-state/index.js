const ComponentState = () => {
    let count = 123
    const up = () =>{
        count ++;
        console.log(count)
    }
    const down = () =>{
        count --
        console.log(count)
    }
    return(
        <>
            <h2>assignment 7</h2>
            count = {count}
            <button onClick={up}>up</button>
            <button onClick={down}>down</button>
        </>
    )

}
export default ComponentState