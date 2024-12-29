import "@/css/header.css"

interface Iprops {
    text : string
}

export default function header(props:Iprops){
    return(
        <div className="main">
            <span className="logo">{props.text}</span>

        </div>
    )
}