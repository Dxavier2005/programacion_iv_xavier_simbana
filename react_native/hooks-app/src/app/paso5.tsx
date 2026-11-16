import {
    createContext,
    useContext,
    useState,
    type ReactNode,
} from 'react';


interface UsuarioContextType {
 usuario: string;
 setUsuario: (usuario: string) => void;
}


const UsuarioContext = createContext<
 UsuarioContextType | undefined
>(undefined);


interface UsuarioProviderProps {
 children: ReactNode;
}


export function UsuarioProvider({
 children,
}: UsuarioProviderProps) {
 const [usuario, setUsuario] = useState<string>(
   'Francisco'
 );


 return (
   <UsuarioContext.Provider
     value={{ usuario, setUsuario }}
   >
     {children}
   </UsuarioContext.Provider>
 );
}


// 4. Hook personalizado para consumir el contexto
export function useUsuario(): UsuarioContextType {
 const context = useContext(UsuarioContext);


 if (context === undefined) {
   throw new Error(
     'useUsuario debe utilizarse dentro de UsuarioProvider'
   );
 }


 return context;
}
