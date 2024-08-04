import habilities from '../habilidades.json'
import Alpine from 'alpinejs'

console.log(({ habilities }))
console.log('--------------------')

  Alpine.store('habilities', habilities)
  console.log('.........................')
  Alpine.data('hab', () => ({
    search: '',

    allData: habilities,
    get filteredHabilities() {
      if (this.search === '') {
        return this.allData;
      }
      return this.allData.filter((hability) => {
        return hability.name
          .replace(/ /g, '')
          .toLowerCase()
          .includes(this.search.replace(/ /g, '').toLowerCase());
      });
    }
  }))
