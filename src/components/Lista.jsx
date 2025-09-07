import ListGroup from "react-bootstrap/ListGroup";
import ItemLista from "./ItemLista";

const Lista = ({ listaTareas, borrarItem }) => {
  return (
    <div className="d-flex justify-content-center my-4">
      <ListGroup className="w-75">
        {listaTareas.map((tarea, indice) => <ItemLista key={indice} datosTarea={tarea} borrarItem={borrarItem}></ItemLista> )}
      </ListGroup>
    </div>
  );
};

export default Lista;
