import { data as superheroes } from '../../../api/db.json';

const HEROES_ENDPOINT = 'http://localhost:1337/superheroes?name_like=batman';

module.exports = {
  get: jest.fn((url) => {
    switch (url) {
      case HEROES_ENDPOINT:
        return Promise.resolve({
          data: superheroes
        });
    }
  })
};