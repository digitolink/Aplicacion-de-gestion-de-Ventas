import { validate } from "jsonschema";

export function validatorFactory(schema){
    return function JSONValidator(req,res,next){
        try{
            
            const validacion = validate(req.body,schema);
        if(validacion.valid) next();
        else{
            console.error("Los datos enviados no siguen el esquema");
            res.sendStatus(500);
        }

        }catch(error){
            console.log(error);
        }
}
}