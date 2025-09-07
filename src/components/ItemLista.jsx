import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";

const ItemLista = ({datosTarea, borrarItem} ) => {
  return (
    <div className="d-flex justify-content-center">
      <ListGroup.Item className="w-75 d-flex justify-content-between align-items-center rounded-2">
        {datosTarea} 
        <Button className="btn btn-danger" onClick = {() => borrarItem(datosTarea) }>Borrar</Button>
      </ListGroup.Item>
    </div>
  );
};

export default ItemLista;
