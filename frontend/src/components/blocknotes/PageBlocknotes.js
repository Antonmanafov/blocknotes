import FormBlocknotes from "./FormBlocknotes";
import ListBlocknotes from "./ListBlocknotes";

export default function PageBlocknotes() {
  return (
    <div className="blocknotesPage" >
      <FormBlocknotes />
      <ListBlocknotes />
    </div>
  )
}
