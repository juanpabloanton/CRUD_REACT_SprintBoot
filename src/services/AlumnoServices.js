import { BehaviorSubject } from "rxjs";
import { Url } from './UrlBackServices';
import { HandleResponse } from "./helpers";

export const AlumnoServices = {
    listarAlumno,
    GuardarAlumno,
    EliminarAlumno,
    ActualizarAlumno,
    comboMaterias,

};

function listarAlumno() {
    const requestOptions = {
        method: "GET",
       // headers: { "Content-Type": "application/json" },
    };
    return fetch(`${Url}v1/alumno`, requestOptions)
        .then(HandleResponse)
        .then((response) => {
            return response;
        });
}

function comboMaterias() {
    const requestOptions = {
        method: "GET",
       // headers: { "Content-Type": "application/json" },
    };
    return fetch(`${Url}v1/materia`, requestOptions)
        .then(HandleResponse)
        .then((response) => {
            return response;
        });
}



function GuardarAlumno(data) {
    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    };
    return fetch(`${Url}v1/alumno/store`, requestOptions)
        .then(HandleResponse)
        .then((response) => {
            return response;
        });

};

function EliminarAlumno(id_Alumno) {
    const requestOptions = {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        // body: JSON.stringify(data),
    };
    return fetch(`${Url}v1/alumno/delete/${id_Alumno}`, requestOptions)
        .then(HandleResponse)
        .then((response) => {
            return response;
        });
}

function ActualizarAlumno(data) {
    const requestOptions = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    };
    return fetch(`${Url}/v1/alumno/update`, requestOptions)
        .then(HandleResponse)
        .then((response) => {
            return response;
        });
}


