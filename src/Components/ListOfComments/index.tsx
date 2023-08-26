// Styles
import { list, item } from './listOfComments.css'

// Components
import { Comment } from '../Comment'

export const ListOfComments = ({ ids }: { ids: number[] }) => {
  return (
    <>
      <ul className={list}>
        {ids?.map((id: number) => (
          <li key={id} className={item}>
            <Comment id={id} />
          </li>
        ))}
      </ul>
    </>
  )
}
