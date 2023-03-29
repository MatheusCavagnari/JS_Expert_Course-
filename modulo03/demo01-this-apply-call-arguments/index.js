"use strict";

const {
  watch,
  promises: { readFile },
} = require("fs");

class File {
  watch(event, filename) {
    this.showContent(filename);
  }
  async showContent(filename) {
    console.log((await readFile(filename)).toString());
  }
}

const file = new File();
// dessa forma, ele ignora o this da classe File
//herda o this do watch!
//watch(__filename, file.watch);

/*
watch(__filename, async (event, filename) => {
  console.log((await readFile(filename)).toString());
});*/

//podemos deixar explicito qual é o contexto que a função deve seguir
// obind retorna uma função com o this que se mantém de file, ignorando o contecto do watch
//watch(__filename, file.watch.bind(file));d

file.watch.call(
  { showContent: () => console.log("call: hey sinon!") },
  null,
  __filename
);

file.watch.apply({ showContent: () => console.log("call: hey sinon!") }, [
  null,
  __filename,
]);
