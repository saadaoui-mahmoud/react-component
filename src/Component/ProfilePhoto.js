import profil from '../profil.jpg';
function PhotoDeProfile(){
    return(
        <div className='container-img' style={{
            display:'flex',
            justifyContent:'center',
            marginTop:20
        }}>
            <img src={profil} style={{
                height:250,
                width:250,
                borderRadius:'50%',
                border:'2px solid black'
            }}></img>
         
        </div>
    )
}
export default PhotoDeProfile;