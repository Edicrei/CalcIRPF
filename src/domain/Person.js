export default class Person {
  constructor(theSalary, theDependents) {
    this.totalSalary = theSalary;
    this.dependentsNumber = theDependents;
    this.irpf = null;
  }

  isValid() {
    return this.totalSalary && this.dependentsNumber;
  }

  get totalSalary  () {
    return this._totalSalary;
  }

  get dependentsNumber() {
    return this._dependentsNumber;
  }

  get irpf() {
    return this._irpf;
  }

  set totalSalary  (theSalary) {
    console.log('setting salary');
    this._totalSalary = theSalary;
  }

  set dependentsNumber(theDependents) {
    console.log('setting depents');
    this._dependentsNumber = theDependents;
  }

  set irpf(theIrpf)  {
    console.log('setting irpf');
    this._irpf = theIrpf;
  }

  toObject() {
    return {
      totalSalary: this._totalSalary,
      dependentsNumber: this._dependentsNumber,
      irpf: this._irpf
    };
  }
}
