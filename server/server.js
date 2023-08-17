import express from 'express';
import limiterExpress from 'express-rate-limit';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';
import path from 'path';
import { fileURLToPath } from 'url';
dotenv.config()


const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const app = express()
const port = process.env.PORT
const limiterGlobal = limiterExpress({
    windowMs: 15 * 60 * 1000,
    max: 1000
})
const allowedClients = process.env.ALLOWED_PORTS.split(',')
const corsOptions = {
    origin: function (origin, callback) {
        if (allowedClients.includes(origin) || !origin) {
            callback(null, true)
        } else {
            callback(new Error('Client not allowed'))
        }
    }
}


app.use(helmet())
app.use(cors(corsOptions))
app.use(limiterGlobal)
app.use(express.json({ limit: "30mb" }))