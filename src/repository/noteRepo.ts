import client from "../../database";

const getNotesRepo = (): unknown => {
  const notes = client.query("select * from notes", (err, result) => {
    if (!err) {
      return result;
    } else {
      console.log(err);
    }
  });
  return notes;
};

export default { getNotesRepo };
