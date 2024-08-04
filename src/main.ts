import './style.css'
import Alpine from 'alpinejs'

window.Alpine = Alpine

Alpine.store('shop', {
  name: 'Alpine-Shop',
  products: ['Swiss Alp Chocolate', 'Car Alpine A110'],
})

import habilities from '../habilidades.json'
  Alpine.data('hab', () => ({
    search: '',
    showDescription(name: string) {
      const i = habilities.findIndex((hability) => {
        return hability.name === name;
      });

      alert(habilities[i].description);
    },
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

Alpine.start()
