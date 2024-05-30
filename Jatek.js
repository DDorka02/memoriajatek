import Kartya from "./KArtya.js";

export default class Jatek {
  #KEPLISTA = [];
  #kivalasztottak = []
  constructor(KEPLISTA) {
    this.#KEPLISTA = KEPLISTA;
    this.jatekterOszzeAllit();
    $(window).on("kapcsol", (event) => {
    console.log(event.detail)
    this.#kivalasztottak.push(event.detail)
    this.#ellenoriz()
})
  }

  #ellenoriz(){
    if (this.#kivalasztottak.length === 2){
        if(this.#kivalasztottak[0]===this.#kivalasztottak[1]){
            

            this.#kivalasztottak.pop()
            this.#kivalasztottak.pop()
        }
    }
    
  }

  jatekterOszzeAllit() {
    this.#KEPLISTA.forEach((elem) => {
      new Kartya(elem, $(".jatekter"));
    });
  }
}
