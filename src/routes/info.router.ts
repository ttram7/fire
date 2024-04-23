// External Dependencies
import express, { Request, Response } from "express";
import { ObjectId } from "mongodb";
import { collections } from "../services/database.service";
import City from "../models/cities";

//Global Config
export const infoRouter = express.Router();

infoRouter.use(express.json());

//GET
infoRouter.get("/", async (_req: Request, res: Response) => {
    try{
        const info = (await collections?.info?.find({}).toArray()) as unknown as City[];

        res.status(200).send(info);
    } catch (error) {  
        let errorMessage = "Failed to do something exceptional";
        if (error instanceof Error) {
          errorMessage = error.message;
          res.status(500).send(error.message);
    }
    }
});

infoRouter.get("/:id", async (req: Request, res: Response) => {
    const id = req?.params?.id;

    try {
        const query = {_id: new ObjectId(id) };
        const info = (await collections?.info?.findOne(query)) as unknown as City;

        if(info) {
            res.status(200).send(info);
        }
    }
    catch (error) {
        res.status(404).send(`Unable to find matching document with id: ${req.params.id}`);
    }
    
});


//POST

//PUT

//DELETE