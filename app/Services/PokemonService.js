import store from "../store.js";
import Pokemon from "../Models/Pokemon.js";



// @ts-ignore
let _pokemonApi = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/',
    timeout: 10000
})

// @ts-ignore
let _sandboxApi = axios.create({
    baseURL: '//bcw-sandbox.herokuapp.com/api/brandon/pokemon',
    timeout: 10000
})


class PokemonService {
    catchActivePokemon() {
        _sandboxApi.post('', store.State.activePokemon)
            .then(res => {
                console.log("caught pokemon", res.data)
                this.getMyPokemon()
            }).catch(err => console.error(err))
    }
    getMyPokemon() {
        _sandboxApi.get()
            .then(res => {
                console.log("caught pokemon!", res.data)
            })
    }
    getDetails(pokemonName) {
        _pokemonApi.get('pokemon/' + pokemonName)
            .then(res => {
                console.log("getDetails!", res.data)
                let pokemon = new Pokemon(res.data)
                store.commit("activePokemon", pokemon)
            }).catch(err => console.error(err))
    }

    constructor() {
        this.getWildPokemon()
    }

    getWildPokemon() {
        _pokemonApi.get('pokemon?offset=40&limit=40')
            .then(res => {
                console.log('wild pokemon', res.data.results)
                store.commit('wildPokemon', res.data.results)
            }).catch(err => console.error(err))

    }

}

const Pokemonservice = new PokemonService();
export default Pokemonservice;