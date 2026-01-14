class ApiError extends Error{
    constructor(message="Something went wrong",statusCode,errors=[],stack=""){
    super(message);
    this.statusCode=statusCode;
    this.data=null;
    this.success=false;
    this.errors=errors;
    if(stack){
        this.stack=stack;   
        }
    else{
        Error.captureStackTrace(this,this.constructor);
        }
    }
}
/* we use the super(message) to call the constructor of the parent Error class,
    as the parent class Error also has a constructor that takes a message parameter. */
export {ApiError};