import { NatroliteClient } from "./natroliteWebApi";

const natroliteClient = new NatroliteClient(import.meta.env.VITE_NATROLITE_WEBAPI_URL);

export default natroliteClient;
