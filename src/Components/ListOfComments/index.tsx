import { Comment } from '../Comment'
import { commentList, commentListItem } from './listOfComments.css'

export const ListOfComments = ({ ids }: { ids: number[] }) => {
  return (
    <ul className={commentList}>
      {ids?.map((id: number) => (
        <li key={id} className={commentListItem}>
          <Comment id={id} />
        </li>
      ))}
    </ul>
  )
}
