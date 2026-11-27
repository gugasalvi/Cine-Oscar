
import type { FilmeEmBreve } from './types'

import jardimDeVidro from './assets/posters/o-jardim-de-vidro.png'
import rota66Sul from './assets/posters/rota-66-sul.png'
import sombrasDoCerrado from './assets/posters/sombras-do-cerrado.png'

export const filmesEmBreve: FilmeEmBreve[] = [
  {
    id: 1,
    titulo: 'O Jardim de Vidro',
    genero: 'Drama',
    dataLancamento: '12/11/2026',
    imagem: jardimDeVidro,
  },
  {
    id: 2,
    titulo: 'Rota 66 Sul',
    genero: 'Aventura',
    dataLancamento: '19/11/2026',
    imagem: rota66Sul,
  },
  {
    id: 3,
    titulo: 'Sombras do Cerrado',
    genero: 'Mistério',
    dataLancamento: '26/11/2026',
    imagem: sombrasDoCerrado,
  },
]
