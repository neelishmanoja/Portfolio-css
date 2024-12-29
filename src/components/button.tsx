 import "@/css/button.css"
 
 interface Iprops{
    test:string
}


export default function Button(props:Iprops){
    return(
        <div className="button">{props.test}
        </div>
    )
}