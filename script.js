// script com base em 
// https://codepen.io/FelixLuciano/pen/PoqdMKP

async function init () {
    const texto = document.querySelector("#msgHercules");
  
    await sleep(1000)
    texto.text = ""
    await texto.type('Hercules, ')
    
    while (true) {
      await texto.type('parabéns!!!')
      await sleep(2000)
      await texto.delete('parabéns!!!')
      await texto.type('Como se sente com 9 anos?')
      await sleep(2000)
      await texto.delete('Como se sente com 9 anos?')
      await texto.type('Divirta-se no seu dia!!!!')
      await sleep(2000)
      await texto.delete('Divirta-se no seu dia!!!!')
      await texto.type('Nós te amamos!!!!')
      await sleep(2000)
      await texto.delete('Nós te amamos!!!!')
    }
  }
  
  
  // Source code 🚩
  
  const sleep = time => new Promise(resolve => setTimeout(resolve, time))
  
  class TypeAsync extends HTMLSpanElement {
    get text () {
      return this.innerText
    }
    set text (value) {
      return this.innerHTML = value
    }
    
    get typeInterval () {
      const randomMs = 100 * Math.random()
      return randomMs < 50 ? 10 : randomMs
    }
    
    async type (text) {
      for (let character of text) {
        this.text += character
        await sleep(this.typeInterval)
      }
    }
    
    async delete (text) {
      for (let character of text) {
        this.text = this.text.slice(0, this.text.length -1)
        await sleep(this.typeInterval)
      }
    }
  }
  
  customElements.define('type-async', TypeAsync, { extends: 'span' })
  
  
  init()
  