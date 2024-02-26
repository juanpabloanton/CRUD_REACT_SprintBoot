import React, { useState, useEffect, Suspense } from "react";
import { Button, Row, Col, Table } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { AlumnoServices } from "../../services/AlumnoServices";
import { Utilservice } from "../../services/Utilservices";
import Spinner from "../../componentes/spinner/Spinner";
import '../../assets/scss/estilosPersonalizados.css';
import ModalNuevoAlumno from "../../componentes/ModalNuevoAlumno";

function Alumno() {
  const [jsonData, setJsonData] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [accion, setAccion] = useState("Editar");
  const [obj, setObj] = useState({});
  const [titulo, setTitulo] = useState("Alumnos");

  const toggle = () => {
    setObj({});
    setModalIsOpen(!modalIsOpen);
  };

  const abrirModalNuevo = () => {
    setModalIsOpen(!modalIsOpen);
    setAccion("Nuevo");
    setObj([]);
  };



  useEffect(() => {
    listarAlumno();
  }, []);


  const listarAlumno = () => {
    //Utilservice.mostrarCargando();
    AlumnoServices.listarAlumno().then((response) => {
     // console.log(response);
      setJsonData(response);
    }).finally(() => {
      //Utilservice.ocultarCargando();
    })
  }


  const datatable = jsonData.map((props, key) => {

    return {
      key: key,
      nro: key + 1,
      nombre: props.nombre,
      matricula: props.matricula,
      telefono: props.telefono,
      direccion: props.direccion,
      materias_asignadas: props.materiasAsignadas,
      edad: props.edad,
    }
  })
  

  const columns = [
    {
      title: <span className="text-warning">Nro</span>,
      dataIndex: "nro",
      key: "nro",
      align: "center",
    },
    {
      title: <span className="text-warning">Nombre</span>,
      dataIndex: "nombre",
      key: "nombre",
      align: "center",
    },
    {
      title: <span className="text-warning">Telefono</span>,
      dataIndex: "telefono",
      key: "telefono",
      align: "center",
    },
    {
      title: <span className="text-warning">Materias</span>,
      dataIndex: "materias_asignadas",
      key: "materias_asignadas",
      align: "center",
    },
    {
      title: <span className="text-warning">Matricula</span>,
      dataIndex: "matricula",
      key: "matricula",
      align: "center",
    },
    {
      title: <span className="text-warning">Dirección</span>,
      dataIndex: "direccion",
      key: "direccion",
      align: "center",
    },
    {
      title: <span className="text-warning">Edad</span>,
      dataIndex: "edad",
      key: "edad",
      align: "center",
    },
  ];

  return (
    <div className="container" style={{ margin: "50px" }}>
      <ModalNuevoAlumno
        modalIsOpen={modalIsOpen}
        toggle={toggle}
        accion={accion}
        listarAlumno={listarAlumno}
      />
      <div style={{ textAlign: "center" }}>
        <Row>
          <Col span={24}>
            <div className="w-100 px-2 px-xl-5 separador confiCuenta">
              <div className="w-100 h-100 d-flex text-center align-items-center justify-content-center">
                <h1
                  className=" bg-white text-secondary"
                  style={{
                    fontSize: "50px",
                    fontWeight: "600",
                  }}
                >
                  {titulo}
                </h1>
              </div>
            </div>
          </Col>
        </Row>

        <Row gutter={[16, 16]} style={{ marginBottom: "16px" }}>
          <Col>
            <Button
              className="primary-button"
              onClick={abrirModalNuevo}
              type="primary"
              icon={<PlusOutlined />}
              size="large"
            >
              Nuevo Alumno
            </Button>
          </Col>
        </Row>
        <div style={{ maxWidth: "150%", margin: "0 auto" }}>
          <Suspense fallback={<Spinner />}>
            <Table
              columns={columns}
              size="middle"
              pagination={{
                position: ["none", "bottomCenter"],
                defaultPageSize: 20,
                hideOnSinglePage: true,
                pageSizeOptions: [50, 100, 200, 300],
              }}
              showSizeChanger={false}
              dataSource={datatable}
            />
          </Suspense>
        </div>
      </div>
    </div>
  );
}

export default Alumno;
