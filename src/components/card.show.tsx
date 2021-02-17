import * as React from 'react'
import { convertToHtml } from '../cards'

interface ICardShowProps {
  name: string,
  description: string
}

const CardShow: React.FC<ICardShowProps> = ({name, description = ''}: ICardShowProps): JSX.Element => {
  let convertedHtml: string = description
  convertedHtml = convertToHtml(convertedHtml)

  return (
    <div>
      <p>{name}</p>
      <div dangerouslySetInnerHTML={{__html: convertedHtml}} />
    </div>
  )
}

export default CardShow;
