import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "your_secret_key"; // Use strong secret in .env.local
const JWT_EXPIRES_IN = "7d";

// Generate token
export function generateToken(payload: any) {
  console.log("secret key: ", JWT_SECRET);
  const token = jwt.sign(payload, JWT_SECRET);
  console.log("token : ", token);
  return token;
}

// Verify token
export function verifyToken(token: any) {
  try {
    console.log("sercet key from verify: ", JWT_SECRET);
    console.log("recieved token: ", token);
    const decoded = jwt.verify(token, JWT_SECRET);
    console.log("decoded rtoken: ", decoded);
    return decoded;
  } catch (error) {
    console.log(error);
    return null;
  }
}
