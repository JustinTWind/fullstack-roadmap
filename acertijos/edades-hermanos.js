function getOldestSiblingAge(youngerSibling) {
  console.log(`
    If Double Age
    Younger Broder Age: ${youngerSibling - 2}
    Older Broder Age: ${(youngerSibling - 2) * 2}

    If Triple Age
    Younger Broder Age: ${youngerSibling - 3}
    Older Broder Age: ${(youngerSibling - 3) * 3}
    `);
}

getOldestSiblingAge(10);
