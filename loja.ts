export class Loja {

    constructor(public nome_loja: string, public logradouro: string, public numero: number, public complemento: string,
        public bairro: string, public municipio: string, public estado: string, public cep: string,
        public telefone: string, public observacao: string, public cnpj: string, public inscricao_estadual: string) { }

    public dados_loja(): string {

		this.validar_campos_obrigatorios();
        
		var _numero = (!this.numero)? "s/n" : String(this.numero)
		
		var _complemento = (this.complemento)? " " + this.complemento : ""	

		var _bairro = (this.bairro)? this.bairro + " - " : ""

		var _cep = (this.cep)? "CEP:" + this.cep : ""
		
		var _telefone = (this.telefone)? "Tel " + this.telefone : ""
		
		_telefone = ( this.cep && this.telefone)? " " + _telefone : _telefone

		var _observacao = (this.observacao)? this.observacao : ""

		var nota = `${this.nome_loja}\n`
		nota += `${this.logradouro}, ${_numero}${_complemento}\n`
		nota += `${_bairro}${this.municipio} - ${this.estado}\n`
		nota += `${_cep}${_telefone}\n`
		nota += `${_observacao}\n`
		nota += `CNPJ: ${this.cnpj}\n`
		nota += `IE: ${this.inscricao_estadual}\n`

		return nota;
    }
	public validar_campos_obrigatorios(): void {
		if (!this.nome_loja) {
		throw new Error(`O campo nome da loja é obrigatório`);
		}
		if (!this.logradouro){
			throw new Error(`O campo logradouro do endereço é obrigatório`)
		}		
		if (!this.municipio){
			throw new Error(`O campo município do endereço é obrigatório`)
		}
		if (!this.estado){
			throw new Error(`O campo estado do endereço é obrigatório`)
		} 
		if (!this.cnpj){
			throw new Error(`O campo CNPJ da loja é obrigatório`)
		} 
		if (!this.inscricao_estadual){
			throw new Error(`O campo inscrição estadual da loja é obrigatório`)
		}
	}
}