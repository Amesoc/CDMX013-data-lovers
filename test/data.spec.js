import dataPotter from "../src/data/harrypotter/harry.json";
import {sortArray,filterAll} from "../src/data.js";
describe('dataPotter', () => {
  it('Should be an object', () => {
    expect(typeof dataPotter).toBe('object');

  });
  it('debe tener la propiedad characters', () => {
    expect( Object.prototype.hasOwnProperty.call  (dataPotter,"characters")).toBe(true);
  });

  it('probar si es characters es un arreglo', () => {
    expect(typeof dataPotter).toBe('object');
  });
});

  
describe('sortArray', () => {
  it('is a function', () => {
    expect(typeof sortArray).toBe('function');
  });

  it("returns arreglo vacio cuando se le llama con arreglo vacio", () => {
    expect(sortArray("ascendente", [])).toEqual([]);
  });
  it("nos regresa el array de manera ascendente", () => {
    const arrayDatos = [{name:"uled"},{name:"ol"},{name:"ol"},{name:"alydis"}]
    const arrayResultado= [{name:"alydis"},{name:"ol"},{name:"ol"},{name:"uled"}]
    expect(sortArray("ascendente",arrayDatos)).toEqual(arrayResultado);
  });
  it("nos regresa el array de manera descendente", () => {
    const arrayDatos = [{name:"alydis"},{name:"ol"},{name:"ol"},{name:"uled"}]
    const arrayResultado= [{name:"uled"},{name:"ol"},{name:"ol"},{name:"alydis"}]
    expect(sortArray("descendente",arrayDatos)).toEqual(arrayResultado);
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



