const filterAll = {
  houses: function (characters, house) {
    const filterCharacters = characters.filter((character) => {
      return character.house === house
    });
    return filterCharacters;
  },
  spells: function (spells, spellType) {
    const filterSpells = spells.filter((spells) => {
      return spells.spell_type === spellType
    })
    return filterSpells;
  }
};
//console.log(filterAll);
function sortArray(order, hparray) {
  // console.log(hparray)
  if (order === "ascendente") {
    hparray.sort((a, b) => {
      if (a.name < b.name) {
        return -1
      }
      if (a.name > b.name) {
        return 1
      }
      return 0
    })
  }
  else {
    hparray.sort((a, b) => {
      if (a.name < b.name) {
        return 1
      }

      if (a.name > b.name) {
        return -1
      }
      return 0
    })
   
  }
  return (hparray);


}

export {filterAll, sortArray };

