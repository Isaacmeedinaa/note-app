import INote from "../contracts/INote";

class Note implements INote {
  id: string;
  text: string;

  constructor(id: string, text: string) {
    this.id = id;
    this.text = text;
  }
}

export default Note;
