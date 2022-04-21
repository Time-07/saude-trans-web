export const conselhoMask = value => {
  return value
    .replace(/\D+/g, '') // não deixa ser digitado nenhuma letra
    .replace(/(\d{2})(\d)/, '$1/$2') // captura 2  numeros e adicioanr no final  /
    .replace(/(\d{6})\d+?$/, '$1'); // captura 6 numeros seguidos e não deixa ser digitado mais nada
};

export const conselhoCelular = value => {
  return value
    .replace(/\D+/g, '')
    .replace(/(\d{2})(\d)/, '$1 $2')
    .replace(/(\d{5})(\d)/, '$1-$2')
    .replace(/(-\d{4})\d+?$/, '$1');
};

export function currency(value) {
  return value
    .replace(/\D/g, '')
    .replace(/(\d)(\d{2})$/, '$1,$2')
    .replace(/(?=(\d{3})+(\D))\B/g, '.');
}

export const cpfMask = value => {
  return value
    .replace(/\D/g, '') // substitui qualquer caracter que nao seja numero por nada
    .replace(/(\d{3})(\d)/, '$1.$2') // captura 2 grupos de numero o primeiro de 3 e o segundo de 1, apos capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo de numero
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})/, '$1-$2')
    .replace(/(-\d{2})\d+?$/, '$1'); // captura 2 numeros seguidos de um traço e não deixa ser digitado mais nada
};
