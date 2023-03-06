import { UniqueIdService } from "./unique-id.service";

// Descrevemos que faremos testes com o serviço UniqueIdService
describe(UniqueIdService.name, () => {

  // alguma coisa DEVE fazer algo QUANDO determinada condições estiverem presentes ===>
  // a função de gerar id único com prefixo DEVE gerar um id único QUANDO chamada com prefixo
  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} should generate id when called with prefix`, () => {

    // criamos uma instância do serviço de UniqueId
    const service = new UniqueIdService()

    // Geramos um id e passamos um prefixo chamado 'app'
    const id = service.generateUniqueIdWithPrefix('app');

    // Aqui utilizamos a função do Jasmine chamada expect para testar a espectativa. 
    // A função expect recebe como primeiro parâmetro o valor que desejamos comparar com o valor esperado.
    // Passaremos como parâmetro o id e utilizaremos a função toContain() para dizer que 
    // nossa espectativa é que o retorno contenha o texto "app-"
    expect(id).toContain('app-')
  });
});
