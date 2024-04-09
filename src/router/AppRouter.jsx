import { Navigate, Route, Routes } from "react-router-dom"
import { LoginPage } from "../auth/pagesA/LoginPage";
import { CalendarPage } from "../calendar/pagesC/CalendarPage";
import { getEnvVariables } from "../helpers";
import { useAuthStore } from "../hooks";
import { useEffect } from "react";


export const AppRouter = () => {

  const { status, checkAuthToken } = useAuthStore()

  useEffect (() => {
    checkAuthToken()
  },[])
  

  if ( status === 'checking' ) {
      return(
        <h3>Cargando...</h3>
      )
  }


    const authStatus = 'not-authenticated';

  return (
    <Routes>
        {
            (status === 'not-authenticated') //Si no esta autenticado
            ?(
              <>
                <Route path="/auth/*" element={ <LoginPage /> } />
                <Route path="/*" element={ <Navigate to="/auth/login" /> } />
              </>
            ) //Hacer esto
            :(
              <> 
                <Route path="/" element={ <CalendarPage /> } />   
                <Route path="/*" element={ <Navigate to="/" /> } />
              </>
            ) //si no hace esto
        }

        
    </Routes>
  )
}
