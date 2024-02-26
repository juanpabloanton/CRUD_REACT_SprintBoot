import React, { useEffect, useState } from "react";
import { Button, Input, Modal, Form, Select } from "antd";
import { useCreateTask } from "../services/tareas.services";
import { useDispatch } from "react-redux";
import { AlumnoServices } from "../../src/services/AlumnoServices";

function ModalNuevoAlumno(props) {
    const [form] = Form.useForm();
    const [combomateria, setcombomateria] = useState([]);
    const dispatch = useDispatch();



 

    const onFinish = async (values) => {
        console.log(values);
        let obj = {
            direccion: values.direccion,
            nombre: values.nombre,
            matricula: values.matricula,
            edad: values.edad,
            telefono: values.telefono,
            id_materia: values.materias
        }
        console.log("objjjjjjjjj");
        console.log(obj);
        AlumnoServices.GuardarAlumno(obj).then((response) => {
            console.log(response);
            reset();
            props.listarAlumno();
        }).finally(() => { 

        });
    };




    useEffect(() => {
        comboMaterias();
    }, [])
    const comboMaterias = () => {
        //Utilservice.mostrarCargando();
        AlumnoServices.comboMaterias().then((response) => {
            //console.log(response);
            setcombomateria(response);
        }).finally(() => {
            //Utilservice.ocultarCargando();
        })
    }
    const reset = () => {
        form.resetFields();
        props.toggle?.();
    }

    return (
        <Modal
            open={props.modalIsOpen}
            onCancel={props.toggle?.bind(null)}
            title={props.Accion === "Editar" ? "Editar" : "Nuevo"}
            footer={null}
            destroyOnClose={true}
            width={400}
        >
            <Form onFinish={onFinish} form={form}>
                <Form.Item
                    label={<span className="text-primary">Nombre Completo</span>}
                    name="nombre"
                    rules={[
                        {
                            required: true,
                            message: "Campo obligatorio",
                        },
                    ]}
                >
                    <Input style={{ width: '100%' }} placeholder="Escribe Nombre" />
                </Form.Item>

                <Form.Item
                    label={<span className="text-primary">Dirección</span>}
                    name="direccion"
                >
                    <Input style={{ width: '100%' }} placeholder="Escribe Dirección" />
                </Form.Item>

                <Form.Item
                    label={<span className="text-primary">Teléfono/Celular</span>}
                    name="telefono"
                >
                    <Input style={{ width: '100%' }} placeholder="Escribe Teléfono" />
                </Form.Item>

                <Form.Item
                    label={<span className="text-primary">Matricula</span>}
                    name="matricula"
                >
                    <Input style={{ width: '100%' }} placeholder="Escribe Matricula" />
                </Form.Item>
                <Form.Item
                    label={<span className="text-primary">Edad</span>}
                    name="edad"
                >
                    <Input style={{ width: '100%' }} placeholder="Escribe edad" />
                </Form.Item>




                <Form.Item
                    label={<span className="text-primary">Materias</span>}
                    name="materias"
                >
                    <Select
                        mode="tags"
                        style={{ width: '100%' }}
/*                         onChange={handleChange}
 */                     tokenSeparators={[',']}
                        options={combomateria}
                    />
                </Form.Item>

                <Button htmlType="button" onClick={() => form.submit()} className="primary">
                    Guardar
                </Button>
            </Form>
        </Modal>
    );
}

export default ModalNuevoAlumno;
