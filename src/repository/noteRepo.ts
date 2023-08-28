// import client from "../../database";

// export const getNotesRepo = async () => {
//   const notes = await client.query("select * from notes", (err, result) => {
//     if (!err) {
//       return result;
//     } else {
//       console.log(err);
//     }
//   });
//   return notes;
// };

// export const getNoteRepo = async (id: number) => {
//   const notes = await client.query(
//     "select * from notes where id = $1 "[id],
//     (err, result) => {
//       if (!err) {
//         return result;
//       } else {
//         console.log(err);
//       }
//     }
//   );
//   return notes;
// };

// export const createNoteRepo =  (title:string,  description:string ) => {
  
//   const note =  client.query(
//     "INSERT INTO notes (title, description) VALUES ($1, $2) RETURNING *"[title, description],
//     (err, result) => {
//       if (!err) {
//         return result;
//       } else {
//         console.log(err);
//       }
//     }
//   );
//   return note;
// };
