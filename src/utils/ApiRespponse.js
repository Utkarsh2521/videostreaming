class ApiResponse{
    constructor(statusCode,message="Success"){
        this.statusCode=statusCode;
        this.message=message;
        this.success=statusCode>=200 && statusCode<300;
        this.data=null;
    }
}
