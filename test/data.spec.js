import dataPotter from "../src/data/harrypotter/harry.json";
import {sortArray} from "../src/data.js";
describe('dataPotter', () => {
  it('Should be an object', () => {
    expect(typeof dataPotter).toBe('object');

  });
  it('debe tener la propiedad characters', () => {
    expect( Object.prototype.hasOwnProperty.call  (dataPotter,"characters")).toBe(true);
  });

  it('probar si es characters es un arreglo', () => {
    expect( Array.isArray (dataPotter.characters)).toBe(true);
  });
});

  
describe('sortArray', () => {
  it('is a function', () => {
    expect(typeof sortArray).toBe('function');
  });

  it("returns arreglo vacio cuando se le llama con arreglo vacio", () => {
    expect(sortArray("ascendente", [])).toEqual([]);
  });
});
