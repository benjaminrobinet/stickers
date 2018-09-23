export class Sticker {
  constructor(data) {
    data.author ? (this.author = data.author) : null;
    data.img ? (this.img = data.img) : null;
    data.alt ? (this.alt = data.alt) : null;
    console.log(data);
  }
}
