export class FAQ {
  static fromJson(json: any): FAQ {
    return new FAQ(
      json.id,
      json.question,
      json.answer);
  }

  constructor(public id: number, public question: string, public answer: string) {}
}
