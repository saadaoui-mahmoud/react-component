import { BsFillEnvelopeFill } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import { GoMarkGithub } from "react-icons/go";
import 'bootstrap/dist/css/bootstrap.min.css';
function Adresse(){
    return(
        <div>
            <h4 style={{
                textAlign:'center',
                color:'red',
                marginTop:50
            }}> 
            Send me a message</h4>
            <div className='container'>
                <div className='row'>
                    <div className='col-4' style={{color:'red'}}>
                        <BsFillEnvelopeFill />
                        <p>saadaoui@mail.com</p>
                    </div>
                    <div className='col-4'>
                        <GoMarkGithub />
                        <p>https://github.com/saadaoui-mahmoud</p>
                    </div>
                    <div className='col-4' style={{color:'blue'}}>
                        <FaFacebookSquare />
                        <p>https://www.facebook.com/saadaoui/</p>
                    </div>
                </div>

            </div>

        </div>

    )
};
export default Adresse;