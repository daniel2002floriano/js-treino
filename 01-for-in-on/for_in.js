// FOR IN
// Percorre as CHAVES/ÍNDICES (não os valores)
// Ideal para objetos
// Funciona com arrays, mas dá os índices


// For clássico - Geralmente com iteráveis (array ou strings)
// For in - Retorna o índice ou chave (string, array ou objetos)
// For of - Retorna o valor em si (iteráveis, arrays ou strings)


const apps = ['Mimo', 'Coddy', 'WhatsApp', 'Facebook', 'Instagram', 'Telegram', 'TikTok', 'YouTube',]
// Quando é um array ele PERCORRE os índices deles.

for (let i in apps) {
    //  console.log(i); // indice de cada valor no array
    // console.log(apps[i]) // os valores do array
    console.log(`${i}: ${apps[i]}`) // exibe o indice junto com o valor
}


const setup = {
    processador: 'Ryzen 5 5600X',
    placaDeVideo: 'RTX 4060 8GB GDDR6',
    placaMae: 'B450M Aorus Elite V2',
    MemoriaRam: 'DDR4 32gb 3200Mhz (16x2)',
    ssd: 'SSD 1TB PCIe 4.0 6000MB',
    fonte: '650W 80 Plus'
}
// Quando é um object ele PERCORRE(iterar) as chaves (propriedades do objeto)

for (let i in setup) {
    // console.log(i);  propriedades
    // console.log(setup[i])  valores (oque está guardado na propriedade)
    console.log(`${i}: ${setup[i]}`)
    //

}


const pacientes = [
    { id: 1, nome: "João Silva", idade: 35, sexo: "Masculino", diagnostico: "Hipertensão", internado: true },
    { id: 2, nome: "Maria Oliveira", idade: 42, sexo: "Feminino", diagnostico: "Diabetes tipo 2", internado: false },
    { id: 3, nome: "Carlos Souza", idade: 28, sexo: "Masculino", diagnostico: "Fratura no braço", internado: true }
];
// Objects de Pacientes, tendo como pai um array.

for (let i in pacientes) {
    //  console.log(i);  PERCORRE e retorna os indices de cada object
    //   console.log(pacientes[i]);//  PERCORRE(iterar) e retorna cada objeto
    console.log(`${i}: ${pacientes[i]}`); // retorna -> indice: object object 
    console.log(i, pacientes[i])  // desse jeito mostra o objeto
}
//Quando você tenta inserir um objeto complexo (como { id: 1, nome: "João Silva", ... })
//  dentro de uma string de template (as crases `), o JavaScript não sabe como exibir todas
//  as propriedades dele. Então, ele usa uma representação genérica, que é a string "[object Object]".

// Para percorrer os valores de um array (no seu caso, cada objeto paciente),
// a ferramenta moderna recomendada é o for...of ou o método .forEach().


const objectArray = {
    pessoas: ["Daniel", 'Milena', 'Roberta'],
    idade: [22, 55, 66]
}

for (let i in objectArray) {
    // console.log(i) //  Retorna: "pessoas", "idade" (as chaves)
    // console.log(objectArray[i]) // array
    // ele retorna linha por linha, por isso quando usamos esses dois acima juntos, retorna pessoas [] idade []
    // console.log(`${i}: ${objectArray[i]}`)
}