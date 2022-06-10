import Tema from "./Tema";

interface Postagem{
    id: number;
    titulo: string;
    texto: string;
    midia: string;
    data: string;
    regioes: string;
    curtir: number;
    tema?: Tema | null
}


export default Postagem;