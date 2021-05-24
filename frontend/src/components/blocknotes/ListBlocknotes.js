import { useSelector } from "react-redux"
import BlocknoteCard from "./BlocknoteCard"


export default function ListBlocknotes() {

  const state = useSelector((store) => store.user.blocknotes)

  return state ? (
    <div className="blocknotesList" >
      {state.map(blocknote => {
        return <BlocknoteCard key={blocknote.id} id={blocknote.id} />
      })}
    </div>
  ) : null
}
