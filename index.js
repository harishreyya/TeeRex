var products = (function () {
    function init() {
        var productsResponse;
      function getapi(){
        $.get({
            url: "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json",
            processData: false,
            contentType: false
          }).done(function (response) {
            productsResponse = response;
            console.log(response);
            $.each(response, function (index) {
                   var products = '<div class="product-'+ response[index].id +' products"><img src ="'+ response[index].imageURL +'"/><p>₹' + response[index].price + '</p><button id="'+ response[index].id +'">add to cart</button><p class="">'+ response[index].gender +'</p><p class="color-tee">'+ response[index].color +'</p><p class="">'+ response[index].type +'</p><p class="id-num d-none">'+ response[index].id +'</p></div>'
                    $('.product-wrapper').append(products);
                  });
          }).catch(function (error) {
            console.log(error);
          });
      }

      getapi();


     $(document).on('click','.apply-filter',function(){
       
        if($(".green-color").is(":checked")){
       var greenResponse = productsResponse.filter(function(i){
          return i.color == "Green";
       })
   
    $('.product-wrapper').html("");
    $.each(greenResponse, function (index) {
    var greenproducts = '<div class="product-'+ greenResponse[index].id +' products"><img src ="'+ greenResponse[index].imageURL +'"/><p>₹' + greenResponse[index].price + '</p><button id="'+ greenResponse[index].id +'">add to cart</button><p class="">'+ greenResponse[index].gender +'</p><p class="color-tee">'+ greenResponse[index].color +'</p><p class="">'+ greenResponse[index].type +'</p><p class="id-num d-none">'+ greenResponse[index].id +'</p></div>'
    $('.product-wrapper').append(greenproducts);
    });
    }
     })
      

    //  response = $(jsonSample).filter(function(i, n)
    //         {
    //             return   n.isImportant !== false;
    //         });

    //         $.each(response, function(i) {
    //             alert(response[i].commentText);
    //         });
      
    };
    return {
      init: init
    }
  })();