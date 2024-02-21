import { BehaviorSubject } from "rxjs";
import { Url } from './UrlBackServices';
import { HandleResponse } from "../services/helpers";

export const PersonaServices = {
    listarPersonas,
    GuardarPersona,
    EliminarPersona,
    ActualizarPersona

};

function listarPersonas() {
    const requestOptions = {
        method: "GET",
       // headers: { "Content-Type": "application/json" },
    };
    return fetch(`${Url}v1/persona`, requestOptions)
        .then(HandleResponse)
        .then((response) => {
            return response;
        });
}


function GuardarPersona(data) {
    const requestOptions = {
        method: "POST",
      //  headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    };
    return fetch(`${Url}v1/persona/store`, requestOptions)
        .then(HandleResponse)
        .then((response) => {
            return response;
        });

};

function EliminarPersona(id_persona) {
    const requestOptions = {
        method: "DELETE",
       // headers: { "Content-Type": "application/json" },
        // body: JSON.stringify(data),
    };
    return fetch(`${Url}v1/persona/delete/${id_persona}`, requestOptions)
        .then(HandleResponse)
        .then((response) => {
            return response;
        });
}

function ActualizarPersona(data) {
    const requestOptions = {
        method: "PUT",
        //headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    };
    return fetch(`${Url}/v1/persona/update`, requestOptions)
        .then(HandleResponse)
        .then((response) => {
            return response;
        });
}


