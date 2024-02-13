import { mockRaw } from '@data/user.mock';
import { OrderListPipe } from './order-list.pipe';
import * as dataRaw from '@data/dataCity.json'
import { City } from '@core/models/city.model';

describe('OrderListPipe', () => {
  let pipe: OrderListPipe;
  let mockCities: City[];

  beforeEach(() => {
    pipe = new OrderListPipe();

    mockCities = [
      {
        "ciudad": "Cartagena",
        "descripcion": "Cartagena es una ciudad portuaria en la costa caribeña de Colombia, famosa por su historia, su arquitectura colonial y sus playas paradisíacas.",
        "urlImagen": "https://cdn.colombia.com/images/v2/turismo/sitios-turisticos/cartagena/ciudad-cartagena-800.jpg"
      },
      {
        "ciudad": "Medellín",
        "descripcion": "Conocida como la 'Ciudad de la Eterna Primavera' por su clima agradable, Medellín ofrece una mezcla vibrante de cultura, arte y innovación.",
        "urlImagen": "https://www.triviantes.com/wp-content/uploads/2022/08/guia-turistica-de-medellin-1.jpg"
      },
      {
        "ciudad": "Bogotá",
        "descripcion": "La capital de Colombia, ubicada en el altiplano andino, es una ciudad de contrastes con una rica oferta cultural, histórica y gastronómica.",
        "urlImagen": "https://cdn.colombia.com/images/v2/turismo/sitios-turisticos/bogota/ciudad-bogota-800.jpg"
      },
      {
        "ciudad": "Cali",
        "descripcion": "Conocida como la 'Capital de la Salsa', Cali ofrece una vibrante vida nocturna, deliciosa gastronomía y es la puerta de entrada al Valle del Cauca.",
        "urlImagen": "https://cdn.colombia.com/images/v2/turismo/sitios-turisticos/cali/Iglesia-Ermita-cali-800.jpg"
      },
      {
        "ciudad": "Santa Marta",
        "descripcion": "Esta ciudad costera es famosa por sus hermosas playas, el Parque Nacional Tayrona y la Sierra Nevada de Santa Marta, la montaña costera más alta del mundo.",
        "urlImagen": "https://www.griceltravel.com/wp-content/uploads/2017/02/cartagenaPORTADA.jpg"
      },
      {
        "ciudad": "Villa de Leyva",
        "descripcion": "Este pintoresco pueblo colonial es famoso por su plaza mayor empedrada, rodeada de magníficas construcciones blancas, y su atmósfera tranquila y relajante.",
        "urlImagen": "https://lanotapositiva.com/wp-content/uploads/2019/11/iasdiao-haosdma.jpg"
      }
    ];
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('test input and output of values', () => {
    // Usando mockCities definido en beforeEach
    const result: City[] = pipe.transform(mockCities);
    expect(result).toEqual(mockCities);
  });

  it('ascending order test', () => {
    const result: City[] = pipe.transform(mockCities, 'ciudad', 'asc');
    // Verificar que 'Bogotá' sea la primera ciudad en el resultado ordenado
    expect(result[0].ciudad).toEqual('Bogotá');
    // Verificar que 'Villa de Leyva' sea la última ciudad en el resultado ordenado
    expect(result[result.length - 1].ciudad).toEqual('Villa de Leyva');
  });
  
  it('descending order test', () => {
    // Act: Aplicar el pipe para transformar mockCities en orden descendente
    const result: City[] = pipe.transform(mockCities, 'ciudad', 'desc');
  
    // Assert: Verificar que el resultado esté ordenado correctamente en orden descendente
    // Esperar que 'Villa de Leyva' sea la primera ciudad en el resultado ordenado
    expect(result[0].ciudad).toEqual('Villa de Leyva');
    // Esperar que 'Bogotá' sea la última ciudad en el resultado ordenado
    expect(result[result.length - 1].ciudad).toEqual('Bogotá');
  });
  

  


});

