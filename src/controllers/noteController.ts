// import { RequestHandler } from 'express';
import { Request, Response } from 'express';

// import {getNotesRepo} from '../repository/noteRepo';
import client from "../../database";


export const getNotes = async (req: Request, res: Response) =>{
    const notes = client.query("select * from notes", (err, result) => {
        if (!err) {
          return result;
        } else {
          console.log(err);
        }
      });

      res.status(200).send(notes)
}
