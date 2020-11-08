var articulosArray = [ ];
// Declaro la variable donde estará el array convertido del getJSONdata


function showCart(array){
let htmlContentToAppend = "";
for (let i = 0; i < array.articles.length; i++) {
    var producto = array.articles[i];

            htmlContentToAppend += `
            <tr>
              <td style="width:10%"><img width="100%" src="` + producto.src + `"></td>
              <td>`+ producto.name +`</td>
              <td>` + producto.currency + `</td>
              <td>` + producto.unitCost + `</td>
              <td style="width: 15%"><input onchange="subtotales()" min="1" id="cantidadesmuchas" style="width: 43%; border: 1px solid lightgray; border-radius:0.2rem;" type="number" value="` + producto.count + `"></td>
              <td id="valortotal" style="width: 1%">  </td>
            </tr>
          `
            document.getElementById("articlesWrapper").innerHTML = htmlContentToAppend;
            document.getElementById("productCostText").innerHTML=document.getElementById("valortotal").innerHTML;
        
        }

}

function subtotales() {
   var precio = articulosArray.articles[0].unitCost;
   var cantidades = document.getElementById("cantidadesmuchas").value;
   var calculo = precio*cantidades;
   


   document.getElementById("valortotal").innerHTML = calculo; 

   let unitProductCostHTML = document.getElementById("productCostText");
   let comissionCostHTML = document.getElementById("comissionText");
   let totalCostHTML = document.getElementById("totalCostText");

   let unitCostToShow =  calculo;
   let comissionToShow = parseInt(calculo*comissionPercentage);
   let totalCostToShow = MONEY_SYMBOL + (calculo+calculo*comissionPercentage);


   unitProductCostHTML.innerHTML = unitCostToShow;
   comissionCostHTML.innerHTML = comissionToShow;
   totalCostHTML.innerHTML = totalCostToShow;

  
}
        



//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(CART_INFO_URL).then(function(resultObj){
    if (resultObj.status === "ok") {

        articulosArray = resultObj.data;
        showCart(articulosArray);
        subtotales();
    }
})
});

let productCost = 0;
let productCount = 0;
let comissionPercentage = 0.15;
let MONEY_SYMBOL = "$";
let DOLLAR_CURRENCY = "Dólares (USD)";
let PESO_CURRENCY = "Pesos Uruguayos (UYU)";
let DOLLAR_SYMBOL = "USD ";
let PESO_SYMBOL = "UYU ";
let PERCENTAGE_SYMBOL = '%';
let SUCCESS_MSG = "¡Se ha realizado la publicación con éxito! :)";
let ERROR_MSG = "Ha habido un error :(, verifica qué pasó.";



//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
    
    

    document.getElementById("goldradio").addEventListener("change", function(){
        comissionPercentage = 0.15;
        subtotales();
    });
    
    document.getElementById("premiumradio").addEventListener("change", function(){
        comissionPercentage = 0.07;
       subtotales();
    });

    document.getElementById("standardradio").addEventListener("change", function(){
        comissionPercentage = 0.05;
        subtotales();


           
});
});


function finalizado(){
   
        alert("Gracias por realizar tu compra");

}