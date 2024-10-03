
export interface Car {
    id: number,
    fabricante: string,
    modelo: string,
    detalhes: string,
    ano: number,
    preco:number,
    disponivel?: boolean
    imgUrl: string
}
 
const cars: Car[] = [
    {
        id: 1,
        fabricante: 'CHEVROLET',
        modelo: 'PRISMA',
        detalhes: 'LT 1.0',
        ano: 2015,
        preco: 85000,
        imgUrl: 'https://www.lionsseminovos.com.br/assets/uploads/nt_seminovos_imagens/16327-IMG_2718_16_11zon.jpg?v=3',
      },
      {
        id: 2,
        fabricante: 'HYUNDAI',
        modelo: 'HB20',
        detalhes: 'Comfort Style 1.6',
        ano: 2013,
        preco: 78000,
        imgUrl: 'https://www.lionsseminovos.com.br/assets/uploads/nt_seminovos_imagens/53187-IMG_3127_17_11zon.jpg?v=3',
      },
      {
        id: 3,
        fabricante: 'VOLKSWAGEN',
        modelo: 'NIVUS',
        detalhes:'200 TSI Comfortline AT',
        ano: 2024,
        preco: 95000,
        imgUrl: 'https://www.lionsseminovos.com.br/assets/uploads/nt_seminovos_imagens/15704-IMG_9355.JPG?v=3',
      },
      {
        id: 4,
        fabricante: 'CHEVROLET',
        modelo: 'PRISMA',
        detalhes: 'LT 1.0',
        ano: 2015,
        preco: 85000,
        imgUrl: 'https://www.lionsseminovos.com.br/assets/uploads/nt_seminovos_imagens/16327-IMG_2718_16_11zon.jpg?v=3',
      },
      {
        id: 5,
        fabricante: 'HYUNDAI',
        modelo: 'HB20',
        detalhes: 'Comfort Style 1.6',
        ano: 2013,
        preco: 78000,
        imgUrl: 'https://www.lionsseminovos.com.br/assets/uploads/nt_seminovos_imagens/53187-IMG_3127_17_11zon.jpg?v=3',
      },
      {
        id: 6,
        fabricante: 'VOLKSWAGEN',
        modelo: 'NIVUS',
        detalhes:'200 TSI Comfortline AT',
        ano: 2024,
        preco: 95000,
        imgUrl: 'https://www.lionsseminovos.com.br/assets/uploads/nt_seminovos_imagens/15704-IMG_9355.JPG?v=3',
      },
      {
        id: 7,
        fabricante: 'CHEVROLET',
        modelo: 'PRISMA',
        detalhes: 'LT 1.0',
        ano: 2015,
        preco: 85000,
        imgUrl: 'https://www.lionsseminovos.com.br/assets/uploads/nt_seminovos_imagens/16327-IMG_2718_16_11zon.jpg?v=3',
      },
      {
        id: 8,
        fabricante: 'HYUNDAI',
        modelo: 'HB20',
        detalhes: 'Comfort Style 1.6',
        ano: 2013,
        preco: 78000,
        imgUrl: 'https://www.lionsseminovos.com.br/assets/uploads/nt_seminovos_imagens/53187-IMG_3127_17_11zon.jpg?v=3',
      },
      {
        id: 9,
        fabricante: 'VOLKSWAGEN',
        modelo: 'NIVUS',
        detalhes:'200 TSI Comfortline AT',
        ano: 2024,
        preco: 95000,
        imgUrl: 'https://www.lionsseminovos.com.br/assets/uploads/nt_seminovos_imagens/15704-IMG_9355.JPG?v=3',
      },
     
  
];


export { cars };