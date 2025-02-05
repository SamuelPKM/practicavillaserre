export type Usuario = {
    idusuario: number;
    nombre: string;
    paterno: string;
    materno: string;
    correo: string;
    estatus: number;
    fecharegistro: string;
};

type Producto = {
    idproducto: number;
    nombre: string;
    categoria: string;
    moneda: string;
    estatus: number;
};