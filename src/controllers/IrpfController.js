export default class IrpfController {
  constructor() {
    this.irpfDriver = null;
  }

  async prepare() {
    if (!this.irpfDriver) {
      const { default: IrpfDriver } = await import('../drivers/IrpfDriver');
      this.irpfDriver = new IrpfDriver();
    }

    return this;
  }


  async calculate(person) {
    const instance = await this.prepare();
    return instance
      .irpfDriver
      .calculate(person);
  }
}
