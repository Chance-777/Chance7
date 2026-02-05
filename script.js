/* Case Clicker 2 - V2.19 Core Logic */
import { Cases } from "./js/cases.js";
import { Inventory } from "./js/inventory.js";

const game = {
    money: 0,
    inventory: [],
    
    init() {
        console.log("Case Clicker 2 Initializing...");
        this.loadSave();
        this.render();
        
        // The main clicker logic
        document.getElementById('clicker').addEventListener('click', () => {
            this.money += 0.01;
            this.updateUI();
        });
    },

    updateUI() {
        document.getElementById('money').innerText = `$${this.money.toFixed(2)}`;
    },

    loadSave() {
        const saved = localStorage.getItem('csc2_save');
        if (saved) {
            const data = JSON.parse(saved);
            this.money = data.money;
        }
    }
};

window.onload = () => game.init();
