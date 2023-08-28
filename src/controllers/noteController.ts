// import {getNotesRepo, getNoteRepo} from '../repository/noteRepo';
import client from "../../database";
import { Request, Response } from "express";


export const getNotes = (req: Request, res: Response) => {
  try {
    client.query("select * from notes", (error, results) => {
      if (!error) {
        res.status(200).send(results.rows);
      } else {
        throw error;
      }
    });
  } catch (error) {
    res.status(401).send(error);
  }
};

export const createNote = (req: Request, res: Response) => {
  console.log(req.body);
  const {title, description} = req.body
  try {
    client.query(
      "INSERT INTO notes (title,description) VALUES ($1,$2) returning *",
      [title, description],
      (error, results) => {
        if (error) {
          console.log(error);
          throw error;
        }
        res.status(200).send(results.rows);
      }
    );
  } catch (error) {
    res.status(401).send(error);
  }
};

export const updateNote = (req: Request, res: Response) => {
    console.log(req.body);
    const id:string = req.params.id;
    const {title, description} = req.body;
    try {
      client.query(
        "UPDATE notes SET title=$1, description=$2 where id=$3 returning *",
        [title, description,id],
        (error, results) => {
          if (error) {
            console.log(error);
            throw error;
          }
          res.status(200).send(results.rows);
        }
      );
    } catch (error) {
      res.status(401).send(error);
    }
  };
  