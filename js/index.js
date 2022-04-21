// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector(".price span").innerText
  const quantity = product.querySelector("input").value
  let total = price * quantity
  product.querySelector(".subtotal span").innerText = total
  return total
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  let subtotal = 0
  const singleProduct = Array.from(document.getElementsByClassName("product"));
  // Array.from(singleProduct).forEach(product=>{
    //  subtotal+=
   singleProduct.forEach(prod=>{
      updateSubtotal(prod);
      subtotal +=updateSubtotal(prod)
   });
  
  document.querySelector("#total-value span").innerText =  subtotal
 
  // end of test
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  target.parentElement.parentElement.parentElement.removeChild(target.parentElement.parentElement);
  calculateAll()
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  const productName = document.getElementById("product-name")
  const productQuant = document.getElementById("product-quant")

  if(productName.value !== "" && productQuant.value !== ""){

  const newProduct = document.createElement("tr")
  newProduct.classList.add("product")
  document.querySelector("tbody").appendChild(newProduct)

  const newTD = document.createElement("td")
  newTD.classList.add("name")
  newProduct.appendChild(newTD)

  const newSpan = document.createElement("span")
  newTD.appendChild(newSpan)
  newSpan.innerText = productName.value


  const newTD2 = document.createElement("td")
  newTD2.classList.add("price")
  newProduct.appendChild(newTD2)
  newTD2.innerText = "$"

  const newSpan2 = document.createElement("span")
  newTD2.appendChild(newSpan2)
  newSpan2.innerText = productQuant.value

  const newTDquant = document.createElement("td")
  newTDquant.classList.add("quantity")
  newProduct.appendChild(newTDquant)

  const newInput = document.createElement("input")
  newInput.type = "number"
  newInput.value = 0
  newInput.min = 0
  newInput.placeholder = "Quantity"
  newTDquant.appendChild(newInput)
  
  const newTD3 = document.createElement("td")
  newTD3.classList.add("subtotal")
  newProduct.appendChild(newTD3)
  newTD3.innerText = "$"

  const newSpan3 = document.createElement("span")
  newTD3.appendChild(newSpan3)
  newSpan3.innerText = 0

  const newTD4 = document.createElement("td")
  newTD4.classList.add("action")
  newProduct.appendChild(newTD4)

  const newButton = document.createElement("button")
  newButton.classList.add("btn")
  newButton.classList.add("btn-remove")
  newTD4.appendChild(newButton)
  newButton.innerText = "Remove"
 
  productName.value=""
  productQuant.value=""
  } else {
    productName.style.borderColor = "red"
    productQuant.style.borderColor = "red"
  }
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  Array.from(document.getElementsByClassName("btn-remove")).forEach(button=>{
    button.addEventListener('click', removeProduct)
  })
  document.getElementById("create").addEventListener('click', createProduct)
  });
