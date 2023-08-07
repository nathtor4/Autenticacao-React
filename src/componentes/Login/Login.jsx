import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import Botao from "../Botao/Botao";
import {mensagemError} from "../Mensagem/Mensagem";

export default function Login({onLogin}) {

    const navigate = useNavigate();

    const schemaDeValidacao = yup.object({
        login: yup.string().required("Campo obrigatório").min(4,"Mínimo de 04 caracteres"),
        senha: yup.string().required("Campo obrigatório").min(5, "Mínimo de 05 caracteres"),
    })

    const { handleSubmit, register, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schemaDeValidacao)
    })


    const autenticacao = async (variaveis) => {

        const dados = {
            "login": variaveis.login,
            "senha": variaveis.senha
        }

        console.log(dados);

        try {
            const response = await axios.post('https://contratos.smedtecnologia.com.br/contratos-service/usuarios/logar', dados);

            const token = response.data.token;

            sessionStorage.setItem('token', token);

            if (onLogin) {
                onLogin();
            }

            navigate("projeto-piloto");                   

            reset({
                login: '',
                senha:'',
            });

        } catch (error) {

            console.log(error);

            mensagemError(error);

        }
    }

    const save = (data) => {
        console.log(data);

        autenticacao(data);
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md w-96">
                <h2 className="text-2xl text-center font-semibold mb-4 text-padrao-azul">Autenticação</h2>
                <form onSubmit={handleSubmit(save)}>
                    <div className="mb-4 ">
                        <label htmlFor="login" className="block mb-1 mr-2">Login:</label>
                        <input 
                          type="text" 
                          id="login" 
                          {...register("login")}
                          className={`padrao-input-form  w-full px-3 py-2 border rounded ${errors.login ? "padrao-input-error" : ""}`}
                        />
                        {errors?.login && <p className="padrao-msg-error">{errors?.login?.message}</p>  }
                    </div>
                    <div className="mb-4 ">
                        <label htmlFor="senha" className="block mb-1 mr-2">Senha:</label>
                        <input 
                          type="password" 
                          id="senha" 
                          {...register("senha")}
                          autoComplete="off"
                          className={` padrao-input-form  w-full px-3 py-2 border rounded ${errors.senha ? "padrao-input-error" : ""}`}
                        />
                        {errors?.senha && <p className="padrao-msg-error">{errors?.senha?.message}</p>  }
                    </div>
                    <Botao 
                        type="submit"
                        texto="Entrar"
                        className = "mr-0"
                    />
                </form>
            </div>
        </div>
    );
}


