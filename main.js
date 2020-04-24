customElements.define('exp-card',
  class extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
      let template = document.createElement('template');
      template.innerHTML = `<style>
                                .card {
                                    margin-left: 200px;
                                    height: 350px;
                                    width: 350px;
                                    border-left: 1px solid #88888894;
                                    border: 1px solid #88888894;
                                    box-shadow: 5px 5px 5px #88888894;
                                    margin-top: 200px;
                                }

                                .input-container {
                                    margin-top: 30px;
                                }
                                
                                .input-field {
                                    margin-top: 60px;
                                    margin-left: 40px;
                                    width: 200px;
                                    border: 0px;
                                    border-bottom: 1px solid;
                                    outline: none;
                                }

                                .btn {
                                  margin-top: 30px;
                                  margin-left: 40px;
                                }
                            </style>
                            <div class="card">
                                <div class="input-container">
                                <input id="date" class="input-field" placeholder="Date"/>
                                <input id="category" class="input-field" placeholder="Category"/>
                                <input id="amount" class="input-field" placeholder="Amount"/>
                                <div>
                                  <button class="btn">Save</button>
                                </div>
                                </div>
                            </div>`;
      let templateContent = template.content;

      const shadowRoot = this.attachShadow({mode: 'open'})
        .appendChild(templateContent.cloneNode(true));
      document.querySelector('exp-card').shadowRoot.querySelector('.btn').addEventListener('click', this.addC);
    }

    addC(e) {
      const data = {
        date : document.querySelector('exp-card').shadowRoot.querySelector('#date').value,
        category : document.querySelector('exp-card').shadowRoot.querySelector("#category").value,
        amount : document.querySelector('exp-card').shadowRoot.querySelector("#amount").value

      }
      fetch('http://localhost:8080/', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }).then((response) => response.json()).then((data) => console.log(data)).catch((error) => console.log(error));
      console.log("ss")
    }
  }
);

customElements.define('exp-card1',
  class extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback(){
      let template = document.createElement('template');
      template.innerHTML = `
                           <style>
                                .card {
                                    margin-left: 200px;
                                    height: 350px;
                                    width: 350px;
                                    border-left: 1px solid #88888894;
                                    border: 1px solid #88888894;
                                    box-shadow: 5px 5px 5px #88888894;
                                    margin-top: 200px;
                                }

                                .input-container {
                                    margin-top: 30px;
                                }
                                
                                .input-field {
                                    margin-top: 60px;
                                    margin-left: 40px;
                                    width: 200px;
                                    border: 0px;
                                    border-bottom: 1px solid;
                                    outline: none;
                                }
                            </style>
                            <div class="card">
                                <button class="bu">Add</button>
                                <div class="input-container">
                                <input id="date" class="input-field" placeholder="Date"/>
                                <input id="category" class="input-field" placeholder="Category"/>
                                <input id="amount" class="input-field" placeholder="Amount"/>
                                </div>
                            </div>`;
      let templateContent = template.content;
                        
      const shadowRoot = this.attachShadow({mode: 'open'})
        .appendChild(templateContent.cloneNode(true));

        document.querySelector('exp-card1').shadowRoot.querySelector('.bu').addEventListener('click', this.addC);
    }
    
    addC(e) {
      const data = {
        "date" : document.querySelector("#date"),
        "category" : document.querySelector("#category"),
        "amount" : document.querySelector("#amount")

      }
      fetch('http://localhost:8080/addExpense1', {
        method: 'POST',
        body: JSON.stringify(data)
      }).then((response) => response.json()).then((data) => console.log(data)).catch((error) => console.log(error));
      console.log("ss")
    };
  }
);

// customElements.define('grid1',
// class extends HTMLElement {
//   constructor() {
//     super();
//     let template = document.createElement('template');
//       template.innerHTML = `
//       <div id="mains"></div>`;
      
//       let templateContent = template.content;

//       const shadowRoot = this.attachShadow({mode: 'open'})
//         .appendChild(templateContent.cloneNode(true));
//     }
//   }
// );