import * as React from 'react'
import {convert} from '../cards'

interface ICardShowProps {
  name: string,
  description: string
}

interface markupHtml {
  __html: string | undefined
}

const CardShow: React.FC<ICardShowProps> = ({name, description}: ICardShowProps): JSX.Element => {
  let converted: string = description || ''
  converted = convert(converted)

  return (
    <div>
      <p>{name}</p>
      <div dangerouslySetInnerHTML={{__html: converted}} />
    </div>
  )
}

export default CardShow;
