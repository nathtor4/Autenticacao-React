import { useNavigate } from "react-router-dom"

export default function Cabecalho(){
    const navigate = useNavigate()

    const aoSair = () => {
        sessionStorage.removeItem('token');
        navigate("/");
    }

    return(
        <div className="flex justify-between p-6 max-h-20 border-b items-center">
            <h1 className="flex-1 text-padrao-azul text-center sm:text-2xl md:text-3xl lg:text-4xl">Projeto Piloto - Tailwind</h1>
            <button 
                type="button" 
                className="m-0 p-3  rounded-lg hover:border-padrao-azul hover:bg-padrao-azul fill-current hover:text-padrao-contraste"
                onClick={aoSair}
            >
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                    <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 192 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128zM160 96c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 32C43 32 0 75 0 128L0 384c0 53 43 96 96 96l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l64 0z"/>
                </svg> 
            </button>
        </div>
    )
}