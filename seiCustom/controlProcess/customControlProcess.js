var SeiCustom = SeiCustom || {}
SeiCustom.ControlProccess = SeiCustom.ControlProccess || {};
SeiCustom.ControlProccess.CustomControlProcess = class {
    constructor() {
        let receivedProcess = document.querySelector('table#tblProcessosRecebidos');
        let generatedProcess = document.querySelector('table#tblProcessosGerados');
        
        this.receivedProcess = new SeiCustom.ControlProccess.Table(receivedProcess);
        this.generatedProcess  = new SeiCustom.ControlProccess.Table(generatedProcess);
    }

    customize = function () {
        this.receivedProcess.customize();
        this.generatedProcess.customize();
    }
}