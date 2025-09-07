import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Lista from "./Lista";

const Formulario = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const tareasLocalstorage = JSON.parse(localStorage.getItem("tareasKey")) || [];
  const [tareas, setTareas] = useState(tareasLocalstorage);

  useEffect(() => {
    localStorage.setItem("tareasKey", JSON.stringify(tareas));
  }, [tareas]);

  const agregarTarea = (datos) => {
    setTareas([...tareas, datos.tarea]);
    reset();
  };

  const borrarItem = (nombreTarea) => {
    const tareasFiltradas = tareas.filter((item) => item !== nombreTarea);
    setTareas(tareasFiltradas);
  };

  return (
    <div className="d-flex flex-column align-items-center mt-4 pt-5 bg-primary-subtle" style={{ minHeight: "80vh" }}>
      <Form
        className="w-75 p-3 shadow rounded bg-body-tertiary"
        onSubmit={handleSubmit(agregarTarea)}
      >
        <div className="d-flex justify-content-between align-items-start gap-2">
          <Form.Group className="flex-grow-1">
            <Form.Control
              type="text"
              placeholder="✍️ Escribe tu tarea aquí..."
              {...register("tarea", {
                required: "⚠️ La tarea es obligatoria",
                minLength: {
                  value: 2,
                  message: "La tarea debe tener al menos 2 caracteres",
                },
                maxLength: {
                  value: 50,
                  message: "La tarea debe tener como máximo 50 caracteres",
                },
              })}
              isInvalid={!!errors.tarea}
            />
            <Form.Control.Feedback type="invalid">
              {errors.tarea?.message}
            </Form.Control.Feedback>
          </Form.Group>

          <Button variant="primary" type="submit" className="fw-bold">
            Agregar
          </Button>
        </div>
      </Form>

      <div className="w-75 mt-4">
        <Lista listaTareas={tareas} borrarItem={borrarItem} />
      </div>
    </div>
  );
};

export default Formulario;
