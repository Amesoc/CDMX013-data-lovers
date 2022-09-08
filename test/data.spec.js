import {sortArray,filterAll} from "../src/data.js";

describe('sortArray', () => {
  it('Is a function', () => {
    expect(typeof sortArray).toBe('function');
  });
  it("Return empty array when an empty array is entered", () => {
    expect(sortArray("ascendente", [])).toEqual([]);
  });
  it("Returns the array in ascending order", () => {
    const arrayData = [{name:"uled"},{name:"ol"},{name:"ol"},{name:"alydis"}]
    const arrayResults= [{name:"alydis"},{name:"ol"},{name:"ol"},{name:"uled"}]
    expect(sortArray("ascendente",arrayData)).toEqual(arrayResults);
  });
  it("Returns the array in descending order", () => {
    const arrayData = [{name:"alydis"},{name:"ol"},{name:"ol"},{name:"uled"}]
    const arrayResults= [{name:"uled"},{name:"ol"},{name:"ol"},{name:"alydis"}]
    expect(sortArray("descendente",arrayData)).toEqual(arrayResults);
});
});

describe('filterAll', () => {
  it('Is a function', () => {
    expect(typeof filterAll.houses).toBe('function');
  });
    it('debe retornar filtrado de characters gryffindor', () => {
    const arrayCasas= [{house:"Hufflepuff"},{house:"Gryffindor"},{house:"Slytherin"},{house:"Ravenclaw"}]
    const resultadosCasas = [{house:"Gryffindor"}]
    expect( filterAll.houses(arrayCasas,"Gryffindor")).toEqual(resultadosCasas);
  });
  it('debe retornar filtrado de characters Slytherin', () => {
    const arrayCasas= [{house:"Hufflepuff"},{house:"Hufflepuff"},{house:"Gryffindor"},{house:"Slytherin"},{house:"Ravenclaw"}]
    const resultadosCasas = [{house:"Slytherin"}]
    expect( filterAll.houses(arrayCasas,"Slytherin")).toEqual(resultadosCasas);
  });
  it('debe retornar filtrado de characters Ravenclaw', () => {
    const arrayCasas= [{house:"Gryffindor"},{house:"Hufflepuff"},{house:"Gryffindor"},{house:"Slytherin"},{house:"Ravenclaw"}]
    const resultadosCasas = [{house:"Ravenclaw"}]
    expect(filterAll.houses(arrayCasas,"Ravenclaw")).toEqual(resultadosCasas);
  });
  it('is a function', () => {
    expect(typeof filterAll.spells).toBe('function');
  });
  it('must return "hex" spells', () => {
    const arraySpells= [{spell_type: "Charm"},{spell_type: "Jinx"}, {spell_type: "Curse"}, {spell_type: "Charm"},{spell_type: "Hex"}]
    const resultSpells=[{spell_type: "Hex"}]
    expect(filterAll.spells(arraySpells,"Hex")).toEqual(resultSpells);
  });
  it('must return "Curse" spells', () => {
    const arraySpells= [{spell_type: "Charm"},{spell_type: "Jinx"}, {spell_type: "Curse"}, {spell_type: "Charm"},{spell_type: "Hex"}]
    const resultSpells=[{spell_type: "Curse"}]
    expect(filterAll.spells(arraySpells,"Curse")).toEqual(resultSpells);
  });
});

describe('filterAll', () => {
  it('is a function', () => {
    expect(typeof filterAll.houses).toBe('function');
  });
  it('is a function', () => {
    expect(typeof filterAll.spells).toBe('function');
  });
  it('debe retornar filtrado de chacarters gryffindor', () => {
    const arrayCasas= [{house:"Hufflepuff"},{house:"Gryffindor"},{house:"Slytherin"},{house:"Ravenclaw"}]
    const resultadosCasas = [{house:"Gryffindor"}]
    expect( filterAll.houses(arrayCasas,"Gryffindor")).toEqual(resultadosCasas);
  });
  it('debe retornar filtrado de chacarters Slytherin', () => {
    const arrayCasas= [{house:"Hufflepuff"},{house:"Hufflepuff"},{house:"Gryffindor"},{house:"Slytherin"},{house:"Ravenclaw"}]
    const resultadosCasas = [{house:"Slytherin"}]
    expect( filterAll.houses(arrayCasas,"Slytherin")).toEqual(resultadosCasas);
  });
  it('debe retornar filtrado de Spells Hex', () => {
    const arrayCasas= [{house:"Hufflepuff"},{house:"Hufflepuff"},{house:"Gryffindor"},{house:"Slytherin"},{house:"Ravenclaw"}]
    const resultadosCasas = [{house:"Slytherin"}]
    expect( filterAll.houses(arrayCasas,"Slytherin")).toEqual(resultadosCasas);
  });
});



