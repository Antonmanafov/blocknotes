import { useParams } from "react-router";
import TagsForCardsList from "./TagsForCardsList";
import { useDispatch } from "react-redux";
import { sagaDeleteCard, sagaEditCardBody, sagaEditCardHead } from "../../redux/actions/actions";
import { fetchCreator } from "../fetchCreator";

export default function Card({ info }) {
  const { id } = useParams();
  const dispatch = useDispatch()

async function deleteThisCard() {
  dispatch(sagaDeleteCard(fetchCreator('/deleteCard', 'DELETE', {id: info.id , pageId: id})))
}

async function editCardBody(e) {
  dispatch(sagaEditCardBody(fetchCreator('/editCardBody', 'PUT', {id: info.id, pageId: id, newInfo: e.target.value})))
}

async function editCardHead(e) {
  dispatch(sagaEditCardHead(fetchCreator('/editCardHead', 'PUT', {id: info.id, pageId: id, newInfo: e.target.value})))
}

  return (
    <div className="cardBlock">
      <input defaultValue={info.head} name="cardHead" onBlur={editCardHead} />
      <textarea defaultValue={info.text} onBlur={editCardBody} />
      <TagsForCardsList
        key={info.id}
        info={{
          tags: info.tags,
          id: info.id,
        }}
      />
      <div className="buttonsBlock">
        <button className="deleteCardButton" onClick={() => deleteThisCard()}>
          Удалить
        </button>
      </div>
    </div>
  );
}
