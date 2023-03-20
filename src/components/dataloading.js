

// this animation component is rendered when products are loading.
const DataLoading = () => {

    const mydigits = [1, 2, 3, 4,
    5, 6, 7, 8, 9, 10];

    return(
        <section className="flex flex-wrap 
        gap-2 p-4 animate-pulse  " >
            {mydigits.map(item => (
                <div key={item.toString()} 
                className="p-2 flex flex-col
                item-center ">
                    <p className="h-40 w-48
                    rounded-md bg-slate-400 mb-2"></p>
                    <span className="inline-block
                    w-40 bg-slate-400 mb-2 rounded h-4"></span>
                    <span className="inline-block
                    w-32 bg-slate-400 mb-2 rounded h-4"></span>
                </div>
            ))}
        </section>
    )
}

export default DataLoading;