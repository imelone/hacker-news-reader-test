//css
import "../../styles/loader.css";

//assets
import spinnerImg from "../../assets/spinnerImg.svg";

function Spinner(props:any){
      return(
       
                <div className="container-spinner" >
                    <div className="loader" >
                        <img src={spinnerImg} className="spinner" alt="spinner"/>
                    </div>
                </div> 
    )
}

export default Spinner;