import React, { useState, useEffect, useContext } from "react";
import Popup from "reactjs-popup";
import { useCookies } from "react-cookie";
import { v4 as uuidv4 } from "uuid";

function GeneroToken() {
  const [name, setName] = useState("name");
  const [idConsultor, setIdConsultor] = useState("idConsultor");
  const [email, setEmail] = useState("email");
  const [cookie, setCookie] = useCookies(["name"]);

  const [show, setShow] = useState(false);

  // imprimirCosas(cookie);

  useEffect(() => {
    if (Object.keys(cookie).length <= 0) {
      setShow(true);
    }
  }, []);

  function handleEvent() {
    setCookie("name", name, { path: "/" });
    setCookie("idConsultor", idConsultor, { path: "/" });
    setCookie("email", email, { path: "/" });
    setCookie("token", uuidv4(), { path: "/" });
  }

  return (
    <>
      <div suppressHydrationWarning={true}>
        {process.browser && (
          <Popup
            open={show}
            // trigger={<button className="button"> Popup </button>}
            modal
          >
            {(close) => (
              <div className="modal container">
                <div className="content">
                  Esta página usa cookies para mejorar la experiencia de
                  usuario.
                  {/* <h1>Formulario</h1>
                        <form className="row" onSubmit='#'>
                            <div className="col-md-3">
                                <input type="text" placeholder="Nombre" className="form-control" onChange={(e)=> setName(e.target.value)} name="nombre"></input>
                            </div>
                            <div className="col-md-3">
                                <input type="text" placeholder="ID Consultor/a" className="form-control" onChange={(e)=> setIdConsultor(e.target.value)} name="apellido"></input>
                            </div>
                            <div className="col-md-3">
                                <input type="email" placeholder="E-mail" className="form-control" onChange={(e)=> setEmail(e.target.value)} name="email"></input>
                            </div>
                        </form> */}
                </div>
                <div className="actions">
                  <button
                    className="button"
                    onClick={() => {
                      handleEvent();
                      close();
                    }}
                  >
                    Aceptar
                  </button>
                </div>
              </div>
            )}
          </Popup>
        )}
      </div>
    </>
  );
}

export default GeneroToken;
