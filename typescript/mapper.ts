// mapper to map from API contract to APP contract

type PersonAPI = {
  id: number,
  nome: string,
  email: string,
  ativo: boolean
};

type Person = {
  id: number,
  name: string,
  email: string,
  active: boolean
};

const fromAPI = (person: PersonAPI): Person => ({
  id: person.id,
  name: person.nome,
  email: person.email,
  active: person.ativo
});
