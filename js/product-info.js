//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
getJSONData(PRODUCT_INFO_URL).then(function(resultObj){
    if (resultObj.status === "ok") {
            product = resultObj.data;

        let productNameHTML = document.getElementById("productName");
        let productDescriptionHTML = document.getElementById("productDescription");
        let productSoldCountHTML = document.getElementById("productSoldCount");
        let productCategoryHTML = document.getElementById("productCategory");

        productNameHTML.innerHTML = product.name;
        productDescriptionHTML.innerHTML = product.description;
        productSoldCountHTML.innerHTML = product.soldCount ;
        productCategoryHTML.innerHTML = product.category ;
        productRelatedProductsHTML = product.relatedProducts;

    showgaleria(product.images);

    }   
});

   function showgaleria(galeria) {
     let htmlContentToAppend = "" ;
     //var galeria = product.images ;
     var activar;

for(let i = 0; i < galeria.length; i++) {
 let foto = galeria[i];
 if(i == 0) {
     activar = "active" ;
} else {
    activar = "";
}
 
htmlContentToAppend += `
  
    <div class="carousel-item `+ activar + `">
      <img src="`+ foto + `" class="d-block w-100" alt="">
      </div>
    
`
document.getElementById("carrussell").innerHTML = htmlContentToAppend;
}


  }
});




document.addEventListener("DOMContentLoaded", function(e){
getJSONData(PRODUCTS_URL).then(function(resultObj) {
        if(resultObj.status === "ok") {
            let arreglo = resultObj.data;
            
            productosRelacionados(arreglo);
            
        
    }
});
function productosRelacionados(arreglo){

    let htmlContentToAppend = "";
        let productpos = arreglo[1];  
        let productpos2 = arreglo[3]; 

            htmlContentToAppend += `
            <div style="display:flex; margin-bottom: 1rem;">
            <div style="width: 250px; margin-right: 0.5rem">
                ` + productpos.name + `<br> <img class="img-fluid img-thumbnail" width="100%" src="` + productpos.imgSrc + `" alt=""></img>
            </div>
            <div style="width: 250px">
                ` + productpos2.name + `<br> <img class="img-fluid img-thumbnail" width="100%" src="` + productpos2.imgSrc + `" alt=""></img>
            </div>
            </div>
            `
        document.getElementById("productRelationated").innerHTML = htmlContentToAppend;


            }

           
        
      
});

//comentarios

getJSONData(PRODUCT_INFO_COMMENTS_URL).then(function(resultObj){
    if (resultObj.status === "ok") {
              comment = resultObj.data
        opiniones(comment);
       
    }

    function opiniones(array){

        let htmlContentToAppend = "";
    
        for(let i = 0; i < array.length; i++){
            let comment = array[i];
            let stars = "";
    
            for (let i=0; i<comment.score; i++){
                stars += `
                    <span class="fa fa-star checked"></span>
                `;
            }
            for (let i=comment.score; i<5; i++){
                stars += `
                    <span class="fa fa-star"></span>
                `;
            }   
    
                htmlContentToAppend += `
                <ul>
                <li class="list-group-item">
                <div class="list-group list-group-flush">
                    <div class="row">
                        <div class="col-3">
                        <i class="fas fa-user"></i>`+ " " + comment.user +`
                        </div>
                        <div class="col">
                            <div class="d-flex w-100 justify-content-between">
                                <h5 class="mb-1">`+ stars +`</h5>
                                <small class="text-muted">` + comment.dateTime + ` </small>
                            </div>
                            <p class="mb-1">` + comment.description + `</p>
                        </div>
                    </div>
                </div>
                </li>
                </ul>
                `
                document.getElementById("productComments").innerHTML = htmlContentToAppend;    
        
    }
   
}
    
});

// caja de comentarios

function comentar(){


   
     document.getElementById("nombreousuario");
    document.getElementById("calificacion");
    document.getElementById("comentario")
    alert("gracias por comentar");
    

}

