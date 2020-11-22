export class Datum {
  private _name: string
  private _startDate: Date
  private _endDate: Date = null
  private _description: string


  constructor(name: string, startDate: string, description: string, endDate?: string) {
    this._name = name;
    this._startDate = new Date(startDate);
    this._endDate = new Date(endDate);
    this._description = description;
  }

  getDutchMonth(): string{
    let comp: Date = this.startDate
    if (this.endDate.getMonth()>-1)
      comp = this.endDate
    switch (comp.getMonth()){
      case 0: return 'Januari'
      case 1: return 'Februari'
      case 2: return 'Maart'
      case 3: return 'April'
      case 4: return 'Mei'
      case 5: return 'Juni'
      case 6: return 'Juli'
      case 7: return 'Augustus'
      case 8: return 'September'
      case 9: return 'Oktober'
      case 10: return 'November'
      case 11: return 'December'
      default: return ''
    }
  }

  isOneDay(): boolean {
    if (this._endDate===null)
      return true
    else return false
  }

  get name(): string {
    return this._name;
  }

  get startDate(): Date {
    return this._startDate;
  }

  get endDate(): Date {
    return this._endDate;
  }

  get description(): string {
    return this._description;
  }
}
