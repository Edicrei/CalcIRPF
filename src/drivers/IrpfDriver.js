import HttpUtil from '../http/HttpUtil.js';

export default class IrpfDriver {
  constructor() {
    this.xhr = new HttpUtil();
    this.get = new Proxy(this.xhr.get, {
      apply: function(target, thisArg, args) {

        return target(...args);
      }
    });
  }



  /**
   * 
   * @param {Person} person 
   */
  async calculate(person) {
    const response = await this.xhr
      .post('http://localhost:8080', '/irpf/calculate', person);

    return await response.json();
  }
}
