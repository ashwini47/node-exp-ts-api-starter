import { config } from "../../env/dev.env";
import jwt from 'express-jwt';

//https://stackoverflow.com/questions/62665636/if-options-algorithms-throw-new-erroralgorithms-should-be-set-error-alg
const authenticate = jwt({
  secret: config.jwtSecret,
  algorithms: ['HS256']//Default algorithm
});

export default authenticate;