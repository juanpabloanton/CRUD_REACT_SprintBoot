import React, { useState, useEffect, Suspense } from "react";
import { Button, Row, Col, Card, Table, Checkbox, Tooltip } from "antd";
import { DeleteTwoTone } from "@ant-design/icons";
import { PersonaServices } from "../../services/PersonaServices"

function Persona() {

  const listarpersonas = () => {
    PersonaServices.listarPersonas().then((response) => {
      console.log("response");
      console.log(response);
    })
  }

  useEffect(() => {
    listarpersonas();
  }, [])
  const columns = [
    {
      title: () => { return <span className="text-warning">Nro</span> },
      dataIndex: "nro",
      key: "nro",
      align: "center",
    },
    {
      title: () => { return <span className="text-warning">Nombre</span> },
      dataIndex: "nombre",
      key: "nombre",
      align: "center",
    },
    {
      title: () => { return <span className="text-warning">Direccion</span> },
      dataIndex: "direccion",
      key: "direccion",
      align: "center",
    },
    {
      title: () => { return <span className="text-warning">Edad</span> },
      dataIndex: "edad",
      key: "edad",
      align: "center",
    },
  ];


  return (
    <>

      <Row gutter={[16, 16]} style={{ marginTop: '16px' }}>
        <Col span={24}>
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
/*             datPersonaaSource={datatable}
 */          />
        </Col>
      </Row>
    </>
  );
}

export default Persona;
