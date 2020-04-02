export default class CaughtPokemon {
    constructor(data) {
        this.id = data._id || ''
        this.img = data.img || ''
        this.name = data.name || ''
        this.weight = data.weight || ''
        this.height = data.height || ''

    }

    get Template() {
        return /*html*/ `
        <div class="col-4 justify-content-center">
        <img src="${this.img}" alt="">
        <h5 class="text-capitalize">${this.name}</h5>
            <p>Weight: ${this.weight}</p>
            <p>Height: ${this.height}</p>
            <button class="btn btn-block btn-danger" onclick="app.pokemonController.release('${this.id}')">Release?</button>
        </div>
        `
    }
}