import { Injectable } from '@angular/core';
import { Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HttpUtilService {

	private API_URL: string = 'http://localhost:8084/EscolaWebService/webresources/';

	url(path: string) {
		return this.API_URL + path;
	}

	headers() {
		let headersParams = { 'Content-Type': 'application/json'};
		// if (localStorage['token']) {
		// 	headersParams['Authorization'] = localStorage['token'];
		// }
		let headers = new Headers(headersParams);
    	let options = new RequestOptions({ headers: headers });
		//alert('logado');
		//console.log(options);
		//console.log(headers);
    	return options;
	}

	extrairDados(response: Response): String {
    	let data = response.json();
    	return data || {};
  	}

  	processarErros(erro: any) {
	    return Observable.throw('Erro acessando servidor remoto.');
	}
}