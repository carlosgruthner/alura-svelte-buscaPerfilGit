import type IRepositorio from "./Irepositorios";

export default interface IUsuario{
    login: string;
    nome: string;
    avatar_url: string;
    perfil_url: string;
    repositorios_publicos: number;
    seguidores: number;
    repositorios_recentes: IRepositorio[]
    
}