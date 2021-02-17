const SummerCards = {
  agriculturist: {
    name: 'agrónoma',
    description: 'Plante <vine>. Se depois disso você tiver ao menos 3 tipos diferentes de <vine> plantadas nesse campo, ganhe 2 <points>.'
  },
  architect: {
    name: 'arquitecto',
    description: 'Construa uma estrutura com um desconto de 3 <lira> OU ganhe 1 <lira> para cada estrutura de 4 <lira> que você tem.'
  },
  'uncertified broker': {
    name: 'corrector clandestino',
    description: 'Perca 3 <points> para ganhar 9 <lira> OU pague 6 <lira> para ganhar 2 <points>.'
  },
  artisan: {
    name: 'artesã',
    description: 'Escolha 1: Ganhe 3 <lira> , construa uma estrutura com desconto de 1 <lira>, ou plante até 2  <vine>.'
  },
  auctioneer: {
    name: 'leiloeiro',
    description: 'Descarte 2 <card> para ganhar 4 <lira> ou descarte 4 <card> para ganhar 3 <points>.'
  },
  banker: {
    name: 'banqueiro',
    description: 'Ganhe 5 <lira>. Cada oponente pode perder 1 <points> para ganhar 3 <lira>.'
  },
  blacksmith: {
    name: 'ferreiro',
    description: 'Construa uma estrutura com desconto de 2 <lira>. Se for uma estrutura de valor 5 <lira> ou 6 <lira>, ganhe 1<points>.'
  },
  broker: {
    name: 'corretor',
    description: 'Pague 9 <lira> para ganhar 3 <points> OU perca 2 <points> para ganhar 6 <lira>.'
  },
  buyer: {
    name: 'comprador',
    description: 'Pague 2 <lira> para colocar 1 <grapes> de valor 1 no esmagador OU descarte 1 <grapes> para ganhar 2 <lira> e 1 <points>.'
  }

}

const types = [
  'vine',
  'lira',
  'points',
  'wine',
  'grapes',
  'card'
]

export const convertToHtml = (text) => {
  let convertedHtml = text

  types.forEach(element => {
    convertedHtml = convertedHtml.replace(new RegExp(`\<${element}\>`, 'g'), `<span class="icon icon-${element}"></span>`)
  });

  return convertedHtml
}

export default SummerCards