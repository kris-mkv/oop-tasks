class Dictionary {
  #name;
  #words;

  constructor(name) {
    this.#name = name;
    this.#words = {};
  }

  get mainName() {
    return this.#name;
  }

  set setMainName(name) {
    this.#name = name;
  }

  get allWords() {
    return this.#words;
  }

  addNewWord(wordKey, wordObj) {
    this.#words[wordKey] = wordObj;
  }

  add(word, description) {
    if (!this.#words[word]) {
      this.addNewWord(word, { word, description });
    }
  }

  remove(word) {
    delete this.#words[word];
  }

  get(word) {
    return this.#words[word];
  }

  showAllWords() {
    Object.values(this.#words).forEach((wordEl) => {
      console.log(`${wordEl.word} - ${wordEl.description}`);
    });
  }
}

class HardWordsDictionary extends Dictionary {
  constructor(name) {
    super(name);
  }

  add(word, description) {
    if (!this.allWords[word]) {
      this.addNewWord(word, { word, description, isDifficult: true });
    }
  }
}

const hardWordsDictionary = new HardWordsDictionary('Сложные слова');

hardWordsDictionary.add(
  'дилетант',
  'Тот, кто занимается наукой или искусством без специальной подготовки, обладая только поверхностными знаниями.'
);
hardWordsDictionary.add(
  'неологизм',
  'Новое слово или выражение, а также новое значение старого слова.'
);
hardWordsDictionary.add(
  'квант',
  'Неделимая часть какой-либо величины в физике.'
);
hardWordsDictionary.remove('неологизм');
hardWordsDictionary.showAllWords();

console.log(hardWordsDictionary.mainName); // Сложные слова
hardWordsDictionary.setMainName = 'Новый Словарь';
console.log(hardWordsDictionary.mainName); // Новый Словарь
console.log(hardWordsDictionary.allWords); // Выводит объект, в котором есть слова дилетант и квант
