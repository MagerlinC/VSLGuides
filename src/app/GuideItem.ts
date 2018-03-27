export class GuideItem {
  static fromJson(json: any): GuideItem {
    return new GuideItem (
      json.GuideItemId,
      json.title,
      json.pdfUrl,
      json.guideRefId);
  }

  constructor(public id: number, public title: string, public pdfUrl: string, public guideRefId: number) {}
}
