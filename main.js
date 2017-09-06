
    var map;
    var table;
    //cnpj	raiz	tipo	abertura	razao	logra	num	compl	bairro	cep	cod_ibge	uf	cidade	dddcel	
    //cel	dddcel2	cel2	dddcel3	cel3	dddfone	fone	dddfone2	fone2	dddfone3	fone3	dddfone4	
    //fone4	dddfone5	fone5	dddfax	fax	dddP	foneP	dddO	foneO	TC	cnae	cnae_descricao	cnae_s	
    //COD_NATJUR	nat_jur_desc_r	nat_jur_desc	COD_NATJU_S	CO_CEI_VIN	func	funcg	PORTE	
    //fx_func	FX_FUNC2	fx	mei	cpf		socioP	rm	tc	NIXIE	REGIAO	divisao	grupo	classe	
    //latitude	longitude	Status
    
    
    function preload() {
      //my table is comma separated value "csv"
      //and has a header specifying the columns labels
      table = loadTable("testetab.txt", "tsv", "header");
      //the file can be remote
      //table = loadTable("http://p5js.org/reference/assets/mammals.csv",
      //                  "csv", "header");
      console.log('on preload');
    }

    function setup() {
      //count the columns
      console.log('on setup');
      print(table.getRowCount() + " total rows in table");
      print(table.getColumnCount() + " total columns in table");
      
     
      print(table.getColumn("cnpj")[0]);
      //["Goat", "Leopard", "Zebra"]
    
      //cycle through the table
      // for (var r = 0; r < table.getRowCount(); r++)
      //   for (var c = 0; c < table.getColumnCount(); c++) {
      //     print(table.getString(r, c));
      //   }

      var map = new GMaps({
            div: '#map',
            lat: -15.77972,
            lng: -47.92972,
            zoom: 6
        });
      
        var styles = {
          default: null,
          hide: [
            {
              featureType: 'poi',
              stylers: [{visibility: 'off'}]
            },
            {
              featureType: 'transit',
              elementType: 'labels.icon',
              stylers: [{visibility: 'off'}]
            }
          ]
        };  

      //remove os indicadores padrao do google maps
      map.setOptions({styles: styles['hide']});
      //adiciona os marcadores de local
        for (var r = 0; r < table.getRowCount(); r++) {
              var mapLatitude = table.getColumn("latitude")[r].replace(",", ".");
              var mapLongitude = table.getColumn("longitude")[r].replace(",", ".");
              var mapMarkTitle = table.getColumn("razao")[r];
             
              if(mapLatitude && mapLongitude){ 
                  map.addMarker({
                    lat: mapLatitude,
                    lng: mapLongitude,
                    title: mapMarkTitle,
                    click: function(e) {
                      alert('Voce esta acessando ' + e.title);
                    }
                  });
              }
        }  


    }
    


    
            
            
            
              
            
            // GMaps.geocode({
            //   address: "Alameda santos, 734 São paulo",
            //   callback: function(results, status) {
            //  // alert(status);
            //     if (status == 'OK') {
            //       var latlng = results[0].geometry.location;
            //       map.setCenter(latlng.lat(), latlng.lng());
            //       map.setOptions({styles: styles['hide']});
                  
            //       map.addMarker({
            //         lat: latlng.lat(),
            //         lng: latlng.lng(),
            //         title: 'Office',
            //         click: function(e) {
            //           alert('You clicked in this marker');
            //         }
            //       });
            //     }else{
            //     alert('error');
            //     }
            //   }
              
            // });
    //});
  
