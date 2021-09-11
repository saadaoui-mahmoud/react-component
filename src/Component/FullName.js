

function FullName(){
    const fullName={
        firstName: 'Saadaoui',
        lastName: 'Mahmoud'
    }
    return(
        <div style={{
            display:'flex',
            flexDirection:'column',
            alignItems:'center',
            marginTop:20
        }}>
            <h1>Hey I'm {fullName.firstName} {fullName.lastName}</h1>
            <h3>I'm a FrontEnd developper</h3>
        </div>
    )
}

export default FullName;