const asyncHandler=(requestHandler) =>{
    (req,res,next) =>{
        Promise.resolve(requestHandler(req,res,next)).catch((err)=>next(err))
    }
}
    /* The asyncHandler function is a higher-order function that takes a request handler function 
    as an argument and returns a new function. This new function wraps the original request handler i
    n a Promise, allowing it to handle asynchronous operations and catch any errors that may occur 
    during execution. If an error occurs, it is passed to the next middleware function using the 
    next(err) call, which is a standard way to handle errors in Express.js applications. 
    This approach helps to keep the code clean and ensures that errors are properly managed in 
    asynchronous request handlers. */
export {asyncHandler};
// export default asyncHandler;
/* default export means this file is exporting this  variable as default 
    and can be imported in the new file with any name
    named export means this file is exporting this variable with this name 
    and can be imported in the new file only with this name using {} */

/* This is an alternative implementation of the asyncHandler function that uses async/await 
syntax. */

// const asyncHandler =(fn) => asyn (req, res, next) => {
//     try {
//         await fn(req, res, next);
//     } catch (error) {
//         req.status( err.code ||500).json({
//             success:false,
//             message:err.message 
//         });
//     }
// };