try {
    // É executada quando não há erros
    console.log()
    console.log('Abre um arquivo');
    console.log('Minupulei o arquivo e gerou erro');
    console.log('Fechei o arquivo');
} catch (e) {
    console.log('Tratando o erro');
    // É executada quando há erros
} finally {
    console.log('FINALLY: Eu sempre sou executado')
    // É executado sempre
}

// O bloco try serve para tentar executar um código que pode gerar erro.
// O bloco catch captura o erro se algo der errado no try.
// O bloco finally sempre é executado, independente de ter erro ou não.

// Se não houver erro: try → finally
// Se houver erro: try → catch → finally

// Use try...catch para evitar que seu programa pare por causa de erros inesperados.
// O finally é útil para limpar ou finalizar tarefas, mesmo que tenha ocorrido erro ou não.
// O erro capturado no catch pode ser usado para mostrar detalhes do problema.

function retornaHora(data) {
    if (data && !(data instanceof Date)) {
        throw new Error("Esperando instância de Date.");
    }

    if (!data) {
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });

}

try {
    const data = new Date('01/01/1999 12:48:14')
    const hora = retornaHora();
    console.log(data.toLocaleString('pt-BR'));

} catch (e) {
    // Tratar erro
    console.log(e)

} finally {
    console.log('Tenha um bom dia.')
}


