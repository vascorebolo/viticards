const SummerCards = {
  agriculturist: {
    name: 'agrónoma',
    description: 'Plante <vine>. Se depois disso você tiver ao menos 3 tipos diferentes de <vine> plantadas nesse campo, ganhe 2 <points>.'
  },
  architect: {
    name: 'arquitecto',
    description: 'Construa uma estrutura com um desconto de 3<lira> OU ganhe 1<lira> para cada estrutura de 4<lira> que você tem.'
  },
  'uncertified broker': {
    name: 'corrector clandestino',
    description: 'Perca 3<points> para ganhar 9<lira> OU pague 6<lira> para ganhar 2<points>.'
  }
}

const types = [
  'vine',
  'lira',
  'points',
  'wine',
  'grapes'
]

export const convert = (text) => {
  let converted = text

  types.forEach(element => {
    converted = converted.replace(new RegExp(`\<${element}\>`, 'g'), `<span class="icon icon-${element}"></span>`)
  });

  console.log(converted)
  return converted
}

export default SummerCards