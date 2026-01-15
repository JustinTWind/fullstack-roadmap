export class ApiError extends Error {
  public readonly statusCode: number;

  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
  }
}

export class badRequestError extends ApiError {
  constructor(message = "Los Query Parameters están mal, güeva") {
    super(message, 400);
  }
}
