export default class Marketing {
  update({ id, userName }) {
    // import lembrarb que o update é responsavel por gerenciar seus erros/exceptions
    // não deve-se ter await no notify porque a responsabilida do notity e so emitir eventos
    //  so notificar todo mundo
    console.log(`[${id}]: [marketing] will send an welcome to email [${userName}]`)
  }
}