import { ErrorRequestHandler } from "express";
import { ValidationError } from "yup";

// Handle Valdation Errors Props
interface ValidationErrors {
  [key: string]: string[];
}

// Error Handler
const errorHandler: ErrorRequestHandler = (error, req, res, next) => {
  if (error instanceof ValidationError) {
    let errors: ValidationErrors = {};

    error.inner.forEach((err) => {
      errors[err.path!] = err.errors;
    });

    return res.status(400).json({ message: "Validation Fails", errors });
  }

  console.error(error);

  return res.status(500).json({ message: "Internal server error" });
};

export default errorHandler;