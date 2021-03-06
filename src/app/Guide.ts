export class Guide {
  static fromJson(json: any): Guide {
    return new Guide(
      json.GuideDTOId,
      json.title,
      json.description,
      json.imgurl);
  }

  constructor(public id: number, public title: string, public description: string, public imgurl: string) {}
}
