import './BotonExample.css'

function BotonExample({nombre , userName}) {
const nombreFinal = nombre || "nombre no disponible";
const userNameFinal = userName || "username"; 

  return (
    <div className='Section'>
        <img src="https://cdn-icons-png.flaticon.com/512/6326/6326055.png" ></img>
        <div className='text-content'>
          <h1>{nombreFinal}</h1>
          <p><h2>@{userNameFinal}</h2></p>
        </div>

        <button>Following</button>
    </div>
  
  );
}

export default BotonExample