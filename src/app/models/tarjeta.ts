/*
ng g i nombreinterfaz
ng generate interface nombre de la interfaz
interfaz: modelo de clases u objetos, donde se definen las 
propiedades (caracteristicas) y que nos permiten estructurarlas con sus tipos

tipo
-string: alfa numericos*/

export interface Tarjeta {
    id: number;
    titulo: string //string <-- valores alfanumericos (letras y números)
    descripción: string
    precio: number //number <-- valores numericos 
    img:string
    alt:string

}
