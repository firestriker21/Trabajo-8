function recall(){
const { ipcRenderer } = require('electron');
//import {ipcRenderer} from 'electron'
//const ipcRenderer = require('electron').ipcRenderer;

  const form = document.querySelector('form');


    const nameProduct = document.querySelector('#name').value;
    const priceProduct = document.querySelector('#price').value;
    const descProduct = document.querySelector('#description').value;
    console.log(nameProduct,priceProduct,descProduct);
    const newProduct = {
      name: nameProduct,
      price: priceProduct,
      description: descProduct
    };

    //ipcRenderer.send('product:new', newProduct);
}
