const Window =({pic,title})=>{
    return(
        <div className="flex flex-col items-center justify-center h-[300px] w-[500px] rounded-2xl border-border border-2 shadow-4">
            <img src={pic} className="h-4/5 w-full object-cover"/>
            <div className="font-bold text-lg">{title}</div>
        </div>
    )

}

export default Window;