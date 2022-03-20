const data = {
  users: [
    {
      nombre: "Denice",
      apellido: "Afzal-khan",
      correo: "rick.bhide@doublelab.com",
      celular: "(111) 647-3700",
      direccion: "Sherwood Drive 141, Oklahoma City"
    },
    {
      nombre: "Vincent",
      apellido: "Isome",
      correo: "minnie.lomeli@keyphase.com",
      celular: "(506) 998-3090",
      direccion: "Queen Street 82, Aurora"
    },
    {
      nombre: "Minnie",
      apellido: "Sheahan",
      correo: "jerold.kinnaman@tonruntone.com",
      celular: "(316) 727-9012",
      direccion: "Hawthorne Lane 335, Chicago"
    },
    {
      nombre: "Valda",
      apellido: "Schleifer",
      correo: "cordell.chiogna@zonice.com",
      celular: "(729) 636-5320",
      direccion: "Union Street 106, Miami"
    },
    {
      nombre: "Theo",
      apellido: "Wegman",
      correo: "minnie.bator@funholding.com",
      celular: "(983) 116-4485",
      direccion: "Union Street 266, St. Louis"
    },
    {
      nombre: "Marcela",
      apellido: "Rhoades",
      correo: "concetta.franci@opencare.com",
      celular: "(636) 430-9621",
      direccion: "Sherwood Drive 218, Colorado Springs"
    },
    {
      nombre: "Rosalina",
      apellido: "Pieraccini",
      correo: "marylouise.casteris@tonruntone.com",
      celular: "(356) 236-3669",
      direccion: "Wood Street 173, Reno"
    },
    {
      nombre: "Laci",
      apellido: "Corgain",
      correo: "esther.daboni@zaamtechno.com",
      celular: "(886) 514-9117",
      direccion: "Clark Street 477, Memphis"
    },
    {
      nombre: "Jennie",
      apellido: "Levin",
      correo: "yuko.imamoglu@mediaplanet.com",
      celular: "(928) 343-8975",
      direccion: "Route 100 176, Lubbock"
    },
    {
      nombre: "Earnestine",
      apellido: "Dongoski",
      correo: "nadia.lipshutz@zoozooplus.com",
      celular: "(960) 304-5871",
      direccion: "Olive Street 251, Wichita"
    }
  ],
  categories: [
    {
      "nombre": "res"
    },
    {
      "nombre": "pollo"
    },
    {
      "nombre": "pavo"
    },
    {
      "nombre": "cerdo"
    },
    {
      "nombre": "venado"
    },
    {
      "nombre": "pato"
    },
    {
      "nombre": "cordero"
    }
  ],

  newProducts: [
    { 
      id: 'bc35eabd-2caa-423a-afd6-1237ee2527a0',
     categoria: 'res',
     nombre: 'Lomo de res - Nacional',
     precio: '117800',
     presentacion: ['Limpio entero', 'Medallones', 'Baby Beef', 'Mariposa; Julianas', 'Molido'],
     descripcion: 'Lomo de res también conocido como lomo fino, lomito, tenderloin o filete, es un corte de poca grasa y fibra que proviene de la parte superior de la res. Suave y tierno es un corte versátil el cual se puede preparar entero, tipo lomo al trapo, o filetear para obtener baby beef, medallones, tajadas para asar, filet mignon, goulash, tartar, entre otros.Nuestros lomos de res son semilimpios con cabeza y cordón, estos se limpian y se arreglan según requerimientos del cliente. Nuestra carne nacional proviene de ganado Brangus de alimentación de pastoreo, melaza y sal, y tiene una maduración de entre 5 y 8 días.Este es uno de nuestor cortes nacionales mas vendidos, por su suavidad y sabor, lo recomendamos a ojo cerrado', 
     fotos: ['https://static.wixstatic.com/media/91fc24_a77b0a2a33c24d3a8bb5d5f237615a9d~mv2.png/v1/fill/w_335,h_335,al_c,q_85,usm_0.66_1.00_0.01/91fc24_a77b0a2a33c24d3a8bb5d5f237615a9d~mv2.webp', 'https://static.wixstatic.com/media/91fc24_69bbc618815040eeb04c3274cbc1b68f~mv2.png/v1/fill/w_750,h_750,al_c,q_90,usm_0.66_1.00_0.01/91fc24_69bbc618815040eeb04c3274cbc1b68f~mv2.webp'],
     stock: 1000,
     },
    { id: '2f9f71fa-6701-4b22-b47e-729782fb6a89',
    categoria: 'res',
    nombre: 'Chatas / Bife angosto - Nacional',
    precio: '23250',
    presentacion: ['Bloque', 'Bife', 'Mariposa'],
    descripcion: 'Este corte corresponde a la parte media del lomo excluyendo el hueso y de un músculo que no trabaja mucho, por ello, su particularidad principal es ser carne tierna. Tambien conocido como bife angosto, se recomienda cocinar en un término 3/4 para que no pierda su jugo. Nuestra carne nacional proviene de ganado Brangus de alimentación de pastoreo, melaza y sal, y tiene una maduración de entre 5 y 8 días. Uno de los cortes más populares en La Nacional Carnicería', 
    fotos: ['https://static.wixstatic.com/media/91fc24_8b6b6cd3d7ad49ed9695daa84257494a~mv2.png/v1/fill/w_750,h_750,al_c,q_90,usm_0.66_1.00_0.01/91fc24_8b6b6cd3d7ad49ed9695daa84257494a~mv2.webp'],
    stock: 1000,
  },
    { id: 'bc35eabd-2caa-423a-afd6-1237ee2527a0',
    categoria: 'res',
    nombre: 'Chatas / Bife ancho / Ojo de bife - Nacional',
    precio: '22000',
    presentacion: ['Bloque; bife', 'Mariposa'],
    descripcion: 'El bife ancho es un corte ubicado en el dorso del animal a la altura de la cuarta a décima vértebra torácica. Su moderado recubrimiento graso y su infiltración por finas vetas de grasa intramuscular, le brindan la combinación perfecta que resaltan el sabor y la jugosidad buscado en un corte de carne. Es un corte muy versátil, caracterizado por su gran sabor, terneza y poder de saciedad, que se adapta a todas las preparaciones culinarias, pero la preparación en parrilla o a la plancha son las que mejor resaltan sus bondades. Nuestra carne nacional proviene de ganado Brangus de alimentación de pastoreo, melaza y sal, y tiene una maduración de entre 5 y 8 días.', 
    fotos: ['https://static.wixstatic.com/media/91fc24_0f0eac19064b4292907ab96345b53c06~mv2.png/v1/fill/w_750,h_750,al_c,q_90,usm_0.66_1.00_0.01/91fc24_0f0eac19064b4292907ab96345b53c06~mv2.webp'],
    stock: 1000,
  },
    { id: '2f9f71fa-6701-4b22-b47e-729782fb6a89',
    categoria: 'res',
    nombre: 'Rib Eye Angus Especial - Nacional',
    precio: '52500',
    presentacion: ['Bloque'],
    descripcion: 'El Rib Eye no tiene hueso, tiene un gran marmoleo y contiene grasa natural, esto lo hace jugoso y de gran sabor, ideal para asar a la parrilla o a la plancha.   corte de carne muy popular debido a su suavidad y delicioso sabor. La traducción literal al español es "Ojo de Costilla", nombrado así por salir del costillar de la res. Cortado en la parte superior de las costillas entre la sexta y la décimo segunda se recomienda cocinar en un término " A Punto" entre 1/2 y 3/. Este corte es nacional con 35 dias de Maduracion, Absolutamente espectacular.', 
    fotos: ['https://static.wixstatic.com/media/91fc24_95d2296542a249a9b6554dab1464e6d7~mv2.png/v1/fill/w_750,h_750,al_c,q_90,usm_0.66_1.00_0.01/91fc24_95d2296542a249a9b6554dab1464e6d7~mv2.webp'],
    stock: 1000,
  },
    { id: 'f74f519b-0944-40d6-9b24-6e2d14d7a708',
    categoria: 'res',
    nombre: 'Punta de anca - Nacional',
    precio: '66000',
    presentacion: ['Punta entera', 'Bife', 'Mariposa'],
    descripcion: 'Corte ubicado en la cadera del animal, reconocido principalmente por su cobertura de grasa subcutánea de gran sabor y terneza media. Por ser un corte brangus presenta mayor proporción de marmoleo lo cual le confiere jugosidad y terneza superiores. Corte muy Colombiano, en Argentina tambien llamado Tapa de Cuadril o Picanha en Brasil. Maduración de 7 a 10 días.', 
    fotos: ['https://static.wixstatic.com/media/91fc24_994bf9337e7e475b92f44528c7352b69~mv2.png/v1/fill/w_750,h_750,al_c,q_90,usm_0.66_1.00_0.01/91fc24_994bf9337e7e475b92f44528c7352b69~mv2.webp', 'https://static.wixstatic.com/media/91fc24_3efbb30d5a7d4c93aa734211e155aa09~mv2.png/v1/fill/w_750,h_750,al_c,q_90,usm_0.66_1.00_0.01/91fc24_3efbb30d5a7d4c93aa734211e155aa09~mv2.webp'],
    stock: 1000,
  },
    { id: '054d179e-493d-4f8e-8b32-0413ab52d04f',
    categoria: 'res',
    nombre: 'Asado de tira - Nacional',
    precio: '38000',
    presentacion: ['Bife'],
    descripcion: 'Asado de tira también conocido como short rib o tira de asado es un corte de cocción lenta. Proviene de la parte más carnuda de la costilla de la res, diferenciándose de la costilla común. Es ideal para sopas, sancochos, estofados y se recomienda cocinarla antes de ponerla parrilla. Nuestra carne nacional proviene de ganado Brangus de alimentación de pastoreo, melaza y sal, y tiene una maduración de entre 5 y 8 días.', 
    fotos: ['https://static.wixstatic.com/media/91fc24_5f23a236e4944b4c9c6ffd984eb7768a~mv2.png/v1/fill/w_750,h_750,al_c,q_90,usm_0.66_1.00_0.01/91fc24_5f23a236e4944b4c9c6ffd984eb7768a~mv2.webp', 'https://static.wixstatic.com/media/91fc24_19475171c42949e9ae4d2b9dd3555a24~mv2.png/v1/fill/w_750,h_750,al_c,q_90,usm_0.66_1.00_0.01/91fc24_19475171c42949e9ae4d2b9dd3555a24~mv2.webp'],
    stock: 1000,
  },
    { id: 'ac004428-b3da-4d80-bec2-8fac44c06a95',
    categoria: 'res',
    nombre: 'Bola de pierna - Nacional',
    precio: '18000',
    presentacion: ['Bloque', 'Milanesa', 'Goulash'],
    descripcion: 'La bola de pierna es un corte de cocción lenta proveniente del cuarto trasero de la res. Este es un corte muy bajo en grasa, y su contenido magro es de un 90% aproximadamente. Es ideal para carne molida, goulash, o milanesas. Nuestra bola de pierna completa pesa entre 4 y 5 kg aproximadamente, pero porcionamos y preparamos según los requerimientos del cliente. Nuestra carne nacional proviene de ganado Brangus de alimentación de pastoreo, melaza y sal, y tiene una maduración de entre 5 y 8 días.', 
    fotos: ['https://static.wixstatic.com/media/91fc24_cf24316f95194dc0a18c732d8fb0c1df~mv2.png/v1/fill/w_750,h_750,al_c,q_90,usm_0.66_1.00_0.01/91fc24_cf24316f95194dc0a18c732d8fb0c1df~mv2.webp'],
    stock: 1000,
  },
    { id: 'f99ecaf7-601e-4ff7-85ca-2649ef95360c',
    categoria: 'res',
    nombre: 'Goulash - Bola de pierna Nacional',
    precio: '18000',
    presentacion: ['Guisar'],
    descripcion: 'aproximadamente. Es ideal para carne molida, goulash, o milanesas. Nuestra bola de pierna completa pesa entre 4 y 5 kg aproximadamente, pero porcionamos y preparamos según los requerimientos del cliente. Nuestra carne nacional proviene de ganado Brangus de alimentación de pastoreo, melaza y sal, y tiene una maduración de entre 5 y 8 día', 
    fotos: ['https://static.wixstatic.com/media/91fc24_2a740b76255b49f0b7dc6f4bd857bb38~mv2.png/v1/fill/w_750,h_750,al_c,q_90,usm_0.66_1.00_0.01/91fc24_2a740b76255b49f0b7dc6f4bd857bb38~mv2.webp'],
    stock: 1000,
  },
    { id: '31febce2-2028-4ca0-ae0d-74f58d06d2ee',
    categoria: 'res',
    nombre: 'Tomahawk Angus Especial - Nacional',
    precio: '144500',
    presentacion: [''],
    descripcion: '', 
    fotos: ['https://static.wixstatic.com/media/91fc24_36916da6d458431f8cd6b08cd5ec8594~mv2.png/v1/fill/w_750,h_750,al_c,q_90,usm_0.66_1.00_0.01/91fc24_36916da6d458431f8cd6b08cd5ec8594~mv2.webp', 'https://static.wixstatic.com/media/91fc24_d19847bbf1b9461f90468ee3444343f2~mv2.png/v1/fill/w_750,h_750,al_c,q_90,usm_0.66_1.00_0.01/91fc24_d19847bbf1b9461f90468ee3444343f2~mv2.webp'],
    stock: 1000,
  },
    { id: 'a1bfac51-4f49-4eee-983d-785a55fa868d',
    categoria: 'res',
    nombre: 'Carne molida - Nacional',
    precio: '18000',
    presentacion: ['Molida'],
    descripcion: 'Carne molida de bola de pierna es un corte de cocción lenta proveniente del cuarto trasero de la res. Este es un corte muy bajo en grasa, y su contenido magro es de un 90% aproximadamente. Empacamos y preparamos según los requerimientos del cliente. Nuestra carne nacional proviene de ganado Brangus de alimentación de pastoreo, melaza y sal, y tiene una maduración de entre 5 y 8 días', 
    fotos: ['https://static.wixstatic.com/media/91fc24_f12704a302f74b7587b6c7eeaf66bc7a~mv2.png/v1/fill/w_750,h_750,al_c,q_90,usm_0.66_1.00_0.01/91fc24_f12704a302f74b7587b6c7eeaf66bc7a~mv2.webp'],
    stock: 1000,
  },
    { id: '31eee247-c36a-4aee-b4ce-c965db19dbd3',
    categoria: 'res',
    nombre: 'Roastbeef - Res',
    precio: '74000',
    presentacion: ['Bife'],
    descripcion: 'El roast beef es un corte de carne de vacuno, originario de la gastronomía inglesa, aunque este alimento también es común en países como Irlanda, Nueva Zelanda, Australia y Estados Unidos. Es muy popular en la preparación de sandwiches o baguettes gourmet.', 
    fotos: ['https://static.wixstatic.com/media/91fc24_ac90414ca69f43d39cecbee2f33d0509~mv2.png/v1/fill/w_750,h_750,al_c,q_90,usm_0.66_1.00_0.01/91fc24_ac90414ca69f43d39cecbee2f33d0509~mv2.webp'],
    stock: 1000,
  },
    { id: '89423513-abc4-45b9-bc39-9e8fa43d4a6f',
    categoria: 'res',
    nombre: 'Muchacho - Nacional',
    precio: '36000',
    presentacion: ['Bloque'],
    descripcion: 'Muchacho de res es una pieza entera tomada de la parte trasera de la res. Una carne gustosa para realizar recetas tradicionales como la posta cartagenera. Uso gastronómico: Al horno, sudar y para rellenar.', 
    fotos: ['https://static.wixstatic.com/media/91fc24_cb64a4b9bbf14e2ba5b67773dceae08b~mv2.png/v1/fill/w_750,h_750,al_c,q_90,usm_0.66_1.00_0.01/91fc24_cb64a4b9bbf14e2ba5b67773dceae08b~mv2.webp'],
    stock: 1000,
  },
    { id: '99184c54-93a8-43b7-ae10-f0f4641e9c38',
    categoria: 'res',
    nombre: 'Bife de Paleta - Nacional',
    precio: '74100',
    presentacion: ['Bife'],
    descripcion: 'Muchacho de res es una pieza entera tomada de la parte trasera de la res. Una carne gustosa para realizar recetas tradicionales como la posta cartagenera. Uso gastronómico: Al horno, sudar y para rellenar.', 
    fotos: ['https://static.wixstatic.com/media/91fc24_f7aefd9c56c94e08a95442198796f13a~mv2.png/v1/fill/w_750,h_750,al_c,q_90,usm_0.66_1.00_0.01/91fc24_f7aefd9c56c94e08a95442198796f13a~mv2.webp'],
    stock: 1000,
  },
    { id: 'c1f19145-4bb2-4ebf-8f14-6f2af5682ac2',
    categoria: 'res',
    nombre: 'Milanesa de res - Nacional',
    precio: '36000',
    presentacion: ['Milanesa'],
    descripcion: 'La milanesa es un corte que  proveniente del cuarto trasero de la res. Este es un corte muy bajo en grasa, y su contenido magro es de un 90% aproximadamente. Es ideal paraapanar en milanesa.   Empacamos y preparamos según los requerimientos del cliente. Nuestra carne nacional proviene de ganado Brangus de alimentación de pastoreo, melaza y sal, y tiene una maduración de entre 5 y 8 días.', 
    fotos: ['https://static.wixstatic.com/media/91fc24_fd98454015bb4ab2aa4d74dc8d28aeb9~mv2.png/v1/fill/w_750,h_750,al_c,q_90,usm_0.66_1.00_0.01/91fc24_fd98454015bb4ab2aa4d74dc8d28aeb9~mv2.webp'],
    stock: 1000,
  },
    { id: '212676f2-a458-4baf-b416-124c284e770e',
    categoria: 'res',
    nombre: 'Pecho / sobrebarriga / palomilla - Nacional',
    precio: '30000',
    presentacion: [''],
    descripcion: 'el pecho, paletilla o sobrebarriga de la res, es una de las piezas más duras de la res ya que al no tener clavícula , el pecho sostiene aproximadamente el 60% del peso del animal. Sin embargo es un corte con mucho sabor, perfecto para cocion lenta, salen cortes como la sobrebarriga gruesa o delgada y tambien especial para carne para desmechar. Nuestra carne nacional proviene de ganado Brangus de alimentación de pastoreo, melaza y sal, y tiene una maduración de entre 7 y 10 días.', 
    fotos: ['https://static.wixstatic.com/media/91fc24_665a087f14c34336bebb8d27920dc084~mv2.png/v1/fill/w_750,h_750,al_c,q_90,usm_0.66_1.00_0.01/91fc24_665a087f14c34336bebb8d27920dc084~mv2.webp'],
    stock: 1000,
  },
    { id: '8b624788-06a1-4aac-813c-d9ce4640ed6e',
    categoria: 'cerdo',
    nombre: 'Lomo de Cerdo - USA',
    precio: '38800',
    presentacion: ['Bloque', 'Bife', 'Mariposa'],
    descripcion: 'Es un Corte magro, bajo en grasa, suave y tierno. Especial para horneaor o asar. Con una pequena capa de grasa enn la parte superior. Es un producto de cerdos americanos de altísima calidad. El filete de lomo proviene del lomo entero. Como su nombre lo indica, el filete es uno de los cortes más tiernos de la carne de cerdo. Por lo general, el filete de cerdo pesa entre 3/4 y 1 1/2 libras.', 
    fotos: ['https://static.wixstatic.com/media/91fc24_f473f84aabe3432ca1bba3ff1e62becf~mv2.png/v1/fill/w_750,h_750,al_c,q_90,usm_0.66_1.00_0.01/91fc24_f473f84aabe3432ca1bba3ff1e62becf~mv2.webp'],
    stock: 1000,
  },
    { id: 'c330169f-ad63-49ca-8084-266d2cea5e3a',
    categoria: 'cerdo',
    nombre: 'Chuleta de Cerdo - Pork chop USA',
    precio: '31000',
    presentacion: ['Chuleta'],
    descripcion: 'Las chuletas de cerdo son el corte más popular proveniente del lomo de cerdo, el cual es la tira de carne que va desde la cadera del cerdo hasta la paleta. Dependiendo de donde se originan, puedes encontrar una variedad de nombres para las chuletas de cerdo incluyendo las chuletas de lomo, de costilla, de solomillo, del extremo superior y de espaldilla.', 
    fotos: ['https://static.wixstatic.com/media/91fc24_c82df4f6efb4451cb54517403d4f7f7c~mv2.png/v1/fill/w_750,h_750,al_c,q_90,usm_0.66_1.00_0.01/91fc24_c82df4f6efb4451cb54517403d4f7f7c~mv2.webp'],
    stock: 1000,
  },
    { id: 'c11e8338-8519-41a7-a651-b5ab3374a125',
    categoria: 'cerdo',
    nombre: 'Baby Back Ribs - USA',
    precio: '37200',
    presentacion: ['Costillas'],
    descripcion: 'Las costillas traseras se cortan desde donde la costilla se encuentra con la columna vertebral después de que se retira el lomo. Las costillas superiores se llaman Baby Back Ribs, pero no porque vienen de un cerdobebé, Sino porque son más cortas en relación con las costillas más grandes.', 
    fotos: ['https://static.wixstatic.com/media/91fc24_b24b8b2d8ceb42e9a49a6695f3683d5f~mv2.png/v1/fill/w_750,h_750,al_c,q_90,usm_0.66_1.00_0.01/91fc24_b24b8b2d8ceb42e9a49a6695f3683d5f~mv2.webp'],
    stock: 1000,
  },
    { id: 'cb84150c-5e38-4b03-812b-32829f12887d',
    categoria: 'cerdo',
    nombre: 'Saint Louis Ribs - USA',
    precio: '34000',
    presentacion: ['Costillas'],
    descripcion: 'Estas son conocidas por su sabor tan especial. Traen menos carne que las Baby pero mucho más sabor.   Las costillitas al estilo St. Louis son las costillas de cerdo pero sin las puntas de hueso, cartílago ni esternón, lo que crea un “rack” de forma rectangular', 
    fotos: ['https://static.wixstatic.com/media/91fc24_cc44fc057f4e45e99b300efda9e5cc40~mv2.png/v1/fill/w_750,h_750,al_c,q_90,usm_0.66_1.00_0.01/91fc24_cc44fc057f4e45e99b300efda9e5cc40~mv2.webp'],
    stock: 1000,
  },
    { id: '72bbca07-03e2-4446-b7a8-23a414461b33',
    categoria: 'cerdo',
    nombre: 'Pescaditos de cerdo - Nacional',
    precio: '16800',
    presentacion: ['Bloque'],
    descripcion: 'Este delicioso corte se saca del lomo fino, uno de los cortes más magros del cerdo y además es tierno y jugoso. Se recomienda cocinar a la parrilla, el horno o sartén.', 
    fotos: ['https://static.wixstatic.com/media/91fc24_a7941075a4064d41855285ca07579b5e~mv2.png/v1/fill/w_750,h_750,al_c,q_90,usm_0.66_1.00_0.01/91fc24_a7941075a4064d41855285ca07579b5e~mv2.webp'],
    stock: 1000,
  },
    { id: 'dd1df065-c577-4a0c-baaa-029aed6d263e',
    categoria: 'cerdo',
    nombre: 'Bondiola - Pork shoulder - Nacional',
    precio: '27800',
    presentacion: ['Bloque'],
    descripcion: 'La Bondiola, aguja de cerdo o Cabeza de Lomo como también se llama, es la parte superior del lomo del cerdo, se caracteriza por su jugosidad y sabor ya que posee grasa entreverada que hace que esta tenga un sabor espectacular. Hoy en día se usa mucho para el Pulled Pork.', 
    fotos: ['https://static.wixstatic.com/media/91fc24_3f74453cd7304d82bd0eddd99bf1eaf0~mv2.png/v1/fill/w_750,h_750,al_c,q_90,usm_0.66_1.00_0.01/91fc24_3f74453cd7304d82bd0eddd99bf1eaf0~mv2.webp'],
    stock: 1000,
  },
    { id: '8aca95d2-ee22-4426-91db-0c182cad2c3f',
    categoria: 'cerdo',
    nombre: 'Carne de cerdo molida - Nacional',
    precio: '26700',
    presentacion: ['Molida'],
    descripcion: 'La carne de cerdo molida es carne de cerdo que ha sido finamente picada o molida. Se encuentra sin sazonar y generalmente está disponible fresca, con una proporción promedio de 70 por ciento de carne magra, 30 por ciento de grasa.', 
    fotos: ['https://static.wixstatic.com/media/91fc24_f6d1ebfc504d403984360746ce095792~mv2.png/v1/fill/w_750,h_750,al_c,q_90,usm_0.66_1.00_0.01/91fc24_f6d1ebfc504d403984360746ce095792~mv2.webp'],
    stock: 1000,
  },
    { id: '12249c7c-9217-4710-9969-ae09b4e70523',
    categoria: 'cerdo',
    nombre: 'Roastbeef - Cerdo',
    precio: '70000',
    presentacion: ['Rebanado'],
    descripcion: 'El roast beef es un corte de carne de cerdo, originario de la gastronomía inglesa, aunque este alimento también es común en países como Irlanda, Nueva Zelanda, Australia y Estados Unidos. Es muy popular en la preparación de sandwiches o baguettes gourmet', 
    fotos: ['https://static.wixstatic.com/media/91fc24_cdce37c196794b9a887421bf07971a59~mv2.png/v1/fill/w_750,h_750,al_c,q_90,usm_0.66_1.00_0.01/91fc24_cdce37c196794b9a887421bf07971a59~mv2.webp'],
    stock: 1000,
  },
    { id: '6c5a38e3-746c-478c-8ffd-a3c9c51b7c67',
    categoria: 'cordero',
    nombre: 'Chuleta de rack de cordero',
    precio: '43300',
    presentacion: ['Chuleta'],
    descripcion: 'Las chuletas pueden ser de varios cortes primordiales. Las chuletas de “rack” o de “costilla” son parte del costillar; estas son las chuletas más tiernas y más apetecidas junto con las chuletas de lomo, no solo por su sabor y textura sino por su agradable impacto visual en platos gourmet', 
    fotos: ['https://static.wixstatic.com/media/91fc24_d1eee47aeae948e3a3b1bb05f2b352df~mv2.png/v1/fill/w_750,h_750,al_c,q_90,usm_0.66_1.00_0.01/91fc24_d1eee47aeae948e3a3b1bb05f2b352df~mv2.webp'],
    stock: 1000,
  },
    { id: '36ca1354-6b6b-4a5a-8ed1-175fce57e142',
    categoria: 'cordero',
    nombre: 'Rack de cordero',
    precio: '84000',
    presentacion: ['Costillas'],
    descripcion: 'A lo largo del lomo del cordero nos encontramos el costillar, donde están las famosas chuletas. Las hay de tres tipos: de badal, que son las que están pegadas al cuello; las de riñonada, que no se encuentran pegadas a las costillas; y las de palo, que están pegadas a la costilla y tienen fama de ser las más sabrosas.', 
    fotos: ['https://static.wixstatic.com/media/91fc24_8bbb8254060d478da548626385832555~mv2.png/v1/fill/w_750,h_750,al_c,q_90,usm_0.66_1.00_0.01/91fc24_8bbb8254060d478da548626385832555~mv2.webp'],
    stock: 1000,
  },
    { id: 'bf4e09f3-34df-4bac-bd79-ed996a39af83',
    categoria: 'cordero',
    nombre: 'Albóndigas de cordero',
    precio: '21900',
    presentacion: ['Albondigas'],
    descripcion: 'Nuestras albondigas tienen la mezcla exacta de carne y grasa, generando así un sabor inigualable. Perfectas para guisos, fritos, asados, horno, etc. Su sabor y suavidad han dado de que hablar, perfectas para combinar con una salsa de yogurt. Nuestras albondigas tienen la mezcla exacta de carne y grasa, generando así un sabor inigualable. Perfectas para guisos, fritos, asados, horno, etc. Su sabor y suavidad han dado de que hablar, perfectas para combinar con una salsa de yogurt.', 
    fotos: ['https://static.wixstatic.com/media/91fc24_a6b7113148924d9288935739276812fc~mv2.png/v1/fill/w_750,h_750,al_c,q_90,usm_0.66_1.00_0.01/91fc24_a6b7113148924d9288935739276812fc~mv2.webp'],
    stock: 1000,
  },
    { id: '90d3b60d-f837-42e4-8c0b-560b40dab945',
    categoria: 'cordero',
    nombre: 'Pernil de cordero con hueso',
    precio: '42000',
    presentacion: ['Pierna'],
    descripcion: 'Son las piernas traseras. Este trozo suculento, simplemente asado con hueso, es uno de los mejores cortes de carne. Se pueden sacar de este trozo bistecs. Despojada de todas las membranas y cortada en cubos, esta carne jugosa es especial para pinchitos. De cualquier forma, este corte da un asado delicioso.', 
    fotos: ['https://static.wixstatic.com/media/91fc24_9f50cb89bcaf4c36b421aa1f9975830a~mv2.png/v1/fill/w_750,h_750,al_c,q_90,usm_0.66_1.00_0.01/91fc24_9f50cb89bcaf4c36b421aa1f9975830a~mv2.webp'],
    stock: 1000,
  },
    { id: '92c3b626-5494-4207-82a8-42baf467124a',
    categoria: 'cordero',
    nombre: 'Pernil de cordero deshuesado',
    precio: '59800',
    presentacion: ['Pierna'],
    descripcion: 'Se trata de las patas traseras deshuesadas. El pernil deshuesado o bola de pierna es un corte muy versátil para preparaciones que requieren de carne pulpa y tierna.', 
    fotos: ['https://static.wixstatic.com/media/91fc24_6f8853b0257a4f57a959cea430b6561a~mv2.png/v1/fill/w_750,h_750,al_c,q_90,usm_0.66_1.00_0.01/91fc24_6f8853b0257a4f57a959cea430b6561a~mv2.webp'],
    stock: 1000,
  },
    { id: 'e64a1016-98aa-46ec-9740-84a7192b28e7',
    categoria: 'cordero',
    nombre: 'Chuletas de pierna de cordero',
    precio: '47300',
    presentacion: ['Chuleta'],
    descripcion: 'La chuleta de pierna quizás sea la pieza más versátil de todo el cordero ya que se pueden preparar infinidad de recetas con ella. Todas rápidas y sencillas. Las chuletas se pueden hacer a la plancha acompañadas con una salsa o guarnición de verduras.', 
    fotos: ['https://static.wixstatic.com/media/91fc24_16f138a2ce504dc6aa373792f74e6a21~mv2.png/v1/fill/w_750,h_750,al_c,q_90,usm_0.66_1.00_0.01/91fc24_16f138a2ce504dc6aa373792f74e6a21~mv2.webp'],
    stock: 1000,
  },
    { id: '66b041e0-6ded-4857-a1cc-f726b918e2e1',
    categoria: 'cordero',
    nombre: 'Medallones de cuello de cordero',
    precio: '34700',
    presentacion: ['Medallones'],
    descripcion: 'Los medallones son rodajas de cuello, con hueso, no muy gruesas. Es una pieza rica y sabrosa ya que el cuello es la parte del animal que más grasa infiltra. Este es un corte económico y muy apropiado para hacer guisos, estofados, fondos… proporciona un exquisito sabor al conjunto y es muy jugoso y tierno.', 
    fotos: ['https://static.wixstatic.com/media/91fc24_b94982b336ff4663971022c3d30c1f11~mv2.png/v1/fill/w_750,h_750,al_c,q_90,usm_0.66_1.00_0.01/91fc24_b94982b336ff4663971022c3d30c1f11~mv2.webp'],
    stock: 1000,
  },
    { id: 'ccb9b180-c104-4154-8b86-bdd830e13712',
    categoria: 'cordero',
    nombre: 'Chorizo de Cordero',
    precio: '35800',
    presentacion: ['Empaque'],
    descripcion: 'Nuestros chorizos de cordero son un espectaculo, una opción diferente pero fenomenal. Hechos a base de 100% carne de cordero, empacados en tripa natural. Son perfectos para parrilla o sartén. Definitivamente una muy buena opción', 
    fotos: ['https://static.wixstatic.com/media/91fc24_1b4054e8b82b46fb9a59568fe6e70e55~mv2.png/v1/fill/w_750,h_750,al_c,q_90,usm_0.66_1.00_0.01/91fc24_1b4054e8b82b46fb9a59568fe6e70e55~mv2.webp'],
    stock: 1000,
  },
    { id: '27b8de41-fca3-4dd6-80b6-d8cbfbd6c4d3',
    categoria: 'pollo',
    nombre: 'Pollo Pierna Pernil',
    precio: '11800',
    presentacion: ['Pierna'],
    descripcion: 'Pieza conformada por muslo y contramuslo. Se caracteriza por su jugosidad y terneza. Ideal para freir y saltear.', 
    fotos: ['https://static.wixstatic.com/media/91fc24_b865b1c29b48481493adeb3ad5cdccad~mv2.png/v1/fill/w_750,h_750,al_c,q_90,usm_0.66_1.00_0.01/91fc24_b865b1c29b48481493adeb3ad5cdccad~mv2.webp'],
    stock: 1000,
  },
    { id: '809ceb2d-a2d1-4139-8b7f-2f831cd79b54',
    categoria: 'pollo',
    nombre: 'Pollo Pechuga',
    precio: '17000',
    presentacion: ['Pieza'],
    descripcion: 'Pieza corte delantero del ave. Lleva hueso y piel . Se caracteriza por se la pieza mas magra. Ideal para asar, guisar, marinar o freir.', 
    fotos: ['https://static.wixstatic.com/media/91fc24_22abd7bc07284f2d9e00e62397151d3e~mv2.png/v1/fill/w_750,h_750,al_c,q_90,usm_0.66_1.00_0.01/91fc24_22abd7bc07284f2d9e00e62397151d3e~mv2.webp'],
    stock: 1000,
  },
    { id: 'eaa20282-f1c7-4c18-b88c-9b89e517ff79',
    categoria: 'pollo',
    nombre: 'Pollo Muslos',
    precio: '10500',
    presentacion: ['Pieza'],
    descripcion: 'Pieza de la parte trasera e inferor del ave. De agradable ternesa y levemente grasosa. Ideal para guisar, freir o marinar.', 
    fotos: ['https://static.wixstatic.com/media/91fc24_86f46a8006ca475585b52a0e289e160c~mv2.png/v1/fill/w_750,h_750,al_c,q_90,usm_0.66_1.00_0.01/91fc24_86f46a8006ca475585b52a0e289e160c~mv2.webp'],
    stock: 1000,
  },
    { id: '31272ca3-a157-444d-92a9-06fb18649577',
    categoria: 'pollo',
    nombre: 'Pollo filete de contramuslo',
    precio: '13400',
    presentacion: ['Filete'],
    descripcion: 'Pieza corte delantero del ave. Sin hueso ni piel . Se caracteriza por se la pieza mas magra. Ideal para asar, guisar, marinar o freir.', 
    fotos: ['https://static.wixstatic.com/media/91fc24_8599e46dc41a4c32bd6103a0d100f3d0~mv2.png/v1/fill/w_750,h_750,al_c,q_90,usm_0.66_1.00_0.01/91fc24_8599e46dc41a4c32bd6103a0d100f3d0~mv2.webp'],
    stock: 1000,
  },
    { id: '406eabd4-8b89-4779-862f-6e75eb263b82',
    categoria: 'pollo',
    nombre: 'Pollo pechuga deshuesada sin piel',
    precio: '26000',
    presentacion: ['Pieza'],
    descripcion: 'Pieza corte delantero del ave. Sin hueso ni piel . Se caracteriza por se la pieza mas magra. Ideal para asar, guisar, marinar o freir.', 
    fotos: ['https://static.wixstatic.com/media/91fc24_cd3fe23977ab4df288229c246bafd11f~mv2.png/v1/fill/w_750,h_750,al_c,q_90,usm_0.66_1.00_0.01/91fc24_cd3fe23977ab4df288229c246bafd11f~mv2.webp'],
    stock: 1000,
  },
    { id: 'b53bf093-9029-4c94-a4e4-830829bfdde7',
    categoria: 'pollo',
    nombre: 'Bombones de alas de pollo',
    precio: '7800',
    presentacion: ['Pieza'],
    descripcion: 'Pieza especial del pollo, de facil preparación. Ideal para menus infantiles.', 
    fotos: ['https://static.wixstatic.com/media/91fc24_bb99ef544d4547ba95f179629f541371~mv2.png/v1/fill/w_750,h_750,al_c,q_90,usm_0.66_1.00_0.01/91fc24_bb99ef544d4547ba95f179629f541371~mv2.webp'],
    stock: 1000,
  },
    { id: 'd5d4efb5-bfc1-4d99-ba46-2d31c0f428d8',
    categoria: 'pollo',
    nombre: 'Pollo chuletas',
    precio: '13000',
    presentacion: ['Chuleta'],
    descripcion: 'Pollo criado sin antibióticos.', 
    fotos: ['https://static.wixstatic.com/media/91fc24_160b923b551a43029de9d416cc24219a~mv2.png/v1/fill/w_750,h_750,al_c,q_90,usm_0.66_1.00_0.01/91fc24_160b923b551a43029de9d416cc24219a~mv2.webp'],
    stock: 1000,
  },
    { id: '661e8450-56be-4193-a624-0d68393354e8',
    categoria: 'pollo',
    nombre: 'Medio Pollo Campesino',
    precio: '17920',
    presentacion: ['Entero'],
    descripcion: 'Ave de crecimiento lento , carne firme , de piel con pigmentación amarilla, menor grasa y delicioso sabor criollo.', 
    fotos: ['https://static.wixstatic.com/media/91fc24_19dc541248914f04bc415bff9a99ec96~mv2.png/v1/fill/w_750,h_750,al_c,q_90,usm_0.66_1.00_0.01/91fc24_19dc541248914f04bc415bff9a99ec96~mv2.webp'],
    stock: 1000,
  },
    { id: 'a1759fe8-cd4d-47bc-834d-cb73241742b3',
    categoria: 'pollo',
    nombre: 'Pollo Campesino',
    precio: '12900',
    presentacion: ['Entero'],
    descripcion: 'Ave de crecimiento lento , carne firme , de piel con pigmentación amarilla, menor grasa y delicioso sabor criollo.', 
    fotos: ['https://static.wixstatic.com/media/91fc24_19dc541248914f04bc415bff9a99ec96~mv2.png/v1/fill/w_750,h_750,al_c,q_90,usm_0.66_1.00_0.01/91fc24_19dc541248914f04bc415bff9a99ec96~mv2.webp'],
    stock: 1000,
  },
    { id: 'f6f293dc-5929-4237-afaf-a3809f061aed',
    categoria: 'pato',
    nombre: 'Medallones de Foie Gras - Canadá',
    precio: '33600',
    presentacion: ['Medallones'],
    descripcion: 'El foie gras o fuagrás, ​ es un producto alimenticio del hígado hipertrofiado de un pato o ganso que ha sido especialmente sobrealimentado. Según la ley francesa, se llama foie gras al hígado de un pato cebado por sonda, aunque, fuera de Francia, en ocasiones se produce foie gras mediante la alimentación natural. Producto procendente del hígado graso de un pato macho de 15 semanas, convertido en medallones de calidad extra. Facil y rapido de hacer, realmente un bocado excepcional', 
    fotos: ['https://static.wixstatic.com/media/91fc24_4612d189fbbd434bbc7cab9b92cd60ba~mv2.png/v1/fill/w_750,h_750,al_c,q_90,usm_0.66_1.00_0.01/91fc24_4612d189fbbd434bbc7cab9b92cd60ba~mv2.webp'],
    stock: 1000,
  },
    { id: '5260a18e-2b1c-450b-af51-6a70e5f60585',
    categoria: 'pato',
    nombre: 'Pechuga de pato Pekín',
    precio: '114750',
    presentacion: ['Pieza'],
    descripcion: 'La carne proveniente de la pierna se caracteriza por tener un sabor mas rico y es más adecuada para cocciones prolongadas. Perfecta para cocción a fuego lento, rostizar o confitar.', 
    fotos: ['https://static.wixstatic.com/media/91fc24_8fa3c4fa211a47e69a9c9d61a2d12310~mv2.png/v1/fill/w_750,h_750,al_c,q_90,usm_0.66_1.00_0.01/91fc24_8fa3c4fa211a47e69a9c9d61a2d12310~mv2.webp'] ,
    stock: 1000,
  },
    { id: '102182a8-7ecb-4cc4-92fd-c47bfa3417cf',
    categoria: 'pato',
    nombre: 'Pierna-pernil pato Moulard - USA',
    precio: '120000',
    presentacion: ['Pieza'],
    descripcion: 'La carne proveniente de la pierna se caracteriza por tener un sabor mas rico y es más adecuada para cocciones prolongadas. Perfecta para cocción a fuego lento, rostizar o confitar.', 
    fotos: ['https://static.wixstatic.com/media/91fc24_8e2172c7fd964c74981a0dd6f896de97~mv2.png/v1/fill/w_750,h_750,al_c,q_90,usm_0.66_1.00_0.01/91fc24_8e2172c7fd964c74981a0dd6f896de97~mv2.webp'],
    stock: 1000,
  },
    { id: '8c6e1a06-1892-4bef-98dc-76d309f9902c',
    categoria: 'pato',
    nombre: 'Pato Moulard - Canadá',
    precio: '241500',
    presentacion: ['Entero'],
    descripcion: 'El pato moulard tiene carne abundante y menos fibrosa, su piel se torna crujiente al cocinar. Es proveniente de Estados Unidos, certificado como 100% pato por el proceso de air- chilled al que son sometidos.', 
    fotos: ['https://static.wixstatic.com/media/91fc24_a957b4626306469494f3f92fde0292de~mv2.png/v1/fill/w_750,h_750,al_c,q_90,usm_0.66_1.00_0.01/91fc24_a957b4626306469494f3f92fde0292de~mv2.webp'],
    stock: 1000,
  },
  ],

 products: [
    {
      nombre: "carne de pollo",
      precio: 108755,
      descripcion: "descripcion de 'carne de pollo'",
      stock: 5980,
      fotos: [
        "http://www.keyelectrics.com//product/fc336bf6-1d82-48ad-9a22-caeb2a7508f9.png",
        "http://www.y-com.com//product/464d7a90-7e52-4936-b93e-9f8cc0e66f1f.png",
        "http://www.donfase.com//product/ea8e0fc4-aef9-4d51-9f97-27f393820057.jpg",
        "http://www.zoozooplus.com//product/af02e41a-9141-427f-b394-12f39b01e4f4.jpg"
      ]
    },
    {
      nombre: "carne de cordero",
      precio: 104642,
      descripcion: "descripcion de 'carne de cordero'",
      stock: 8326,
      fotos: [
        "http://www.opencare.com//product/0d83efac-d553-4f21-b897-05778f1cb07e.png",
        "http://www.gravejob.com//product/0a8d2678-dad3-46b6-a9e4-399312a6ada2.jpg",
        "http://www.soloelectrics.com//product/774c38f1-fdb9-4254-99d4-3c6a494f4908.jpg",
        "http://www.zaamtechno.com//product/8ae99fd2-5087-4dd0-8cbf-ea89843ee95a.jpg"
      ]
    },
    {
      nombre: "carne de cerdo",
      precio: 133745,
      descripcion: "descripcion de 'carne de cerdo'",
      stock: 8374,
      fotos: [
        "http://www.tanlax.com//product/16ba2c95-78ac-458f-8bb2-7bf6aa9bcf60.raw",
        "http://www.unala.com//product/5988f7eb-9d73-4e65-a35c-0a88207dd6c6.raw",
        "http://www.quadtech.com//product/492584b8-5272-4f67-b674-1cc0f595ed72.jpg",
        "http://www.j-find.com//product/3a367a9d-fb4f-4f04-8bc2-e87fb1157090.jpg"
      ]
    },
    {
      nombre: "carne de res",
      precio: 130543,
      descripcion: "descripcion de 'carne de res'",
      stock: 8013,
      fotos: [
        "http://www.ranlax.com//product/d80fcdd6-1b5e-4138-99e5-711a8df2678f.jpg",
        "http://www.zooelectrics.com//product/1a5e679c-1d5b-4b80-8ca4-2d5d24935e1c.png",
        "http://www.soloelectrics.com//product/24fa918e-9959-4f84-beab-ff8b6d353c13.jpg",
        "http://www.hare-comics.com//product/9a78c107-c64f-421d-8d45-23aae4b4bda3.raw"
      ]
    },
    {
      nombre: "carne de pavo",
      precio: 100107,
      descripcion: "descripcion de 'carne de pavo'",
      stock: 8495,
      fotos: [
        "http://www.kintech.com//product/617fd9f9-5758-4f00-9a93-02afbb813c34.jpg",
        "http://www.villalane.com//product/af0ba206-f268-45cb-9941-4448b67fa47b.jpg",
        "http://www.zenhigh.com//product/6b1a6473-c09d-4693-9d8b-caf9326ca475.png",
        "http://www.howranfase.com//product/1ac9f41b-46df-4902-a5a8-94a4db376342.raw"
      ]
    },
    {
      nombre: "carne de cerdo",
      precio: 129296,
      descripcion: "descripcion de 'carne de cerdo'",
      stock: 8736,
      fotos: [
        "http://www.beta-taxon.com//product/f4fb8908-5bfc-4089-9465-9034cb256628.png",
        "http://www.zooelectrics.com//product/b4cdc305-9240-4792-97e4-d20dedfc1329.jpg",
        "http://www.zenhigh.com//product/32a776f7-6803-44c6-9a27-21f949a75ad5.png",
        "http://www.soloity.com//product/db284364-0a69-4440-b011-fe33f9d20665.png"
      ]
    },
    {
      nombre: "carne de venado",
      precio: 106997,
      descripcion: "descripcion de 'carne de venado'",
      stock: 5667,
      fotos: [
        "http://www.aptrax.com//product/cf46840e-efcb-465d-bc5b-c0f775654072.png",
        "http://www.ranktrans.com//product/aa4c5c17-b37f-44dc-b096-509846f3c404.jpg",
        "http://www.treefix.com//product/5ed132e6-a78f-4a45-bdfd-7290507e07c5.raw",
        "http://www.gravejob.com//product/548709c1-be8e-4d13-bb5d-16e7896eeadb.jpg"
      ]
    },
    {
      nombre: "carne de cordero",
      precio: 123438,
      descripcion: "descripcion de 'carne de cordero'",
      stock: 9430,
      fotos: [
        "http://www.howranfase.com//product/0c5a836c-7af1-4762-8eb6-d9bc4f56474b.raw",
        "http://www.funtinin.com//product/0918daeb-2014-4106-8a30-f73cdcebf301.raw",
        "http://www.tanlax.com//product/a89e82b7-a554-42a0-99e7-193e335553ff.jpg",
        "http://www.y-com.com//product/cc6b88cd-f2e8-4be1-9dd9-ed824d655e68.raw"
      ]
    },
    {
      nombre: "carne de pato",
      precio: 116725,
      descripcion: "descripcion de 'carne de pato'",
      stock: 5381,
      fotos: [
        "http://www.silvercode.com//product/e9ccdf21-31d2-45f6-b5cf-1220dd2b2938.raw",
        "http://www.truetam.com//product/08f2ef51-f1a3-433d-ac11-8b11223408d7.jpg",
        "http://www.grooveholding.com//product/38f1e78e-63fd-49b1-84ae-e9c2b499db9e.raw",
        "http://www.ranktrans.com//product/2ccaf9ac-308b-44f9-9078-8325d20f71f6.raw"
      ]
    },
    {
      nombre: "carne de res",
      precio: 105633,
      descripcion: "descripcion de 'carne de res'",
      stock: 5448,
      fotos: [
        "http://www.beta-taxon.com//product/04627978-2b9a-4594-b082-28dce6948537.png",
        "http://www.donfase.com//product/41580dfb-64d4-490a-ae5b-f13774022334.jpg",
        "http://www.opencare.com//product/14dac383-0fae-468c-b29a-6966d949e2dd.jpg",
        "http://www.biostreet.com//product/8338cdfa-285a-4cc1-b3ca-ec8364d94930.jpg"
      ]
    },
    {
      nombre: "carne de venado",
      precio: 107448,
      descripcion: "descripcion de 'carne de venado'",
      stock: 6473,
      fotos: [
        "http://www.funholding.com//product/c1c83537-fb22-4081-9fad-bb72c2f09448.jpg",
        "http://www.y-dom.com//product/b91cc19d-7852-43a4-8a7e-82afab82bde8.jpg",
        "http://www.silvercode.com//product/cdcd34c3-9702-40c0-9ade-89886cecbb27.jpg",
        "http://www.bamcon.com//product/66cb02f4-2479-47f2-acd2-5cc08df6c821.jpg"
      ]
    },
    {
      nombre: "carne de res",
      precio: 123079,
      descripcion: "descripcion de 'carne de res'",
      stock: 5471,
      fotos: [
        "http://www.ranlax.com//product/03f25187-bad6-4813-986b-cdc312b806f7.png",
        "http://www.physcone.com//product/7bd4914c-22c6-4b3a-9842-7766e3087131.png",
        "http://www.doublelab.com//product/6e78fc23-a7d2-4bce-94f0-9391aa492bfe.raw",
        "http://www.vivaholding.com//product/9df0e181-7907-4665-b7f4-9391619067c9.raw"
      ]
    },
    {
      nombre: "carne de res",
      precio: 126003,
      descripcion: "descripcion de 'carne de res'",
      stock: 5429,
      fotos: [
        "http://www.freetone.com//product/8dc88f23-b067-47be-8d4a-839bef5555c9.raw",
        "http://www.truetam.com//product/732cae4e-8bc2-40d5-b56a-e50a762a8161.png",
        "http://www.good-zoom.com//product/08a0efbf-1f1e-4be1-91f5-a8924d718d7c.jpg",
        "http://www.doublelab.com//product/dd93a31b-7296-4a7f-9acc-2f80ab98931b.png"
      ]
    },
    {
      nombre: "carne de pavo",
      precio: 105698,
      descripcion: "descripcion de 'carne de pavo'",
      stock: 6276,
      fotos: [
        "http://www.keyelectrics.com//product/3edac6cb-70d8-4ccf-9c08-e93f7b7bba7f.jpg",
        "http://www.y-dom.com//product/eb931063-95f3-457a-9b2d-af1bc4629344.jpg",
        "http://www.kintech.com//product/e6897e4b-c302-44d6-b7ec-657b176d7089.jpg",
        "http://www.aptrax.com//product/a3371b23-757b-43f2-9b5c-3ab4ed061813.raw"
      ]
    },
    {
      nombre: "carne de pollo",
      precio: 133149,
      descripcion: "descripcion de 'carne de pollo'",
      stock: 8690,
      fotos: [
        "http://www.aptrax.com//product/a7c3f5f3-e551-4611-81e4-a485c7c1276b.png",
        "http://www.quadtech.com//product/ed71e10e-9288-4ad7-9a51-9126ec300a37.png",
        "http://www.beta-taxon.com//product/251d6a92-5db7-4082-95c2-46da086a1d5e.png",
        "http://www.zaamtechno.com//product/eca1a33d-ca8f-4467-a0d9-105ebd018b0b.png"
      ]
    },
    {
      nombre: "carne de res",
      precio: 126301,
      descripcion: "descripcion de 'carne de res'",
      stock: 6526,
      fotos: [
        "http://www.gravejob.com//product/ee540ec7-4b35-4579-98d0-66573f69eee7.jpg",
        "http://www.doublelab.com//product/2d542dd9-1b90-40cc-b612-196aaed298e1.png",
        "http://www.physcone.com//product/1cdc208e-07ae-4e06-8738-b8966effe505.raw",
        "http://www.hare-comics.com//product/fb3db2f0-6552-437f-86b4-4c567def235c.raw"
      ]
    },
    {
      nombre: "carne de cerdo",
      precio: 133734,
      descripcion: "descripcion de 'carne de cerdo'",
      stock: 6093,
      fotos: [
        "http://www.grooveholding.com//product/d91ff5cf-9a04-40ac-88b7-a003470ce66f.jpg",
        "http://www.zenhigh.com//product/d969c550-e002-4ee8-818a-bf1bcfa12ff2.raw",
        "http://www.zaamtechno.com//product/94a870b6-d868-4159-9af6-0a0d58b02388.png",
        "http://www.movetam.com//product/dec76770-0368-483a-ac9e-1f0f14bf3ac8.jpg"
      ]
    },
    {
      nombre: "carne de res",
      precio: 114260,
      descripcion: "descripcion de 'carne de res'",
      stock: 9038,
      fotos: [
        "http://www.unala.com//product/5269db37-1a3d-4836-8391-df894651db47.jpg",
        "http://www.hare-comics.com//product/7534cd38-c085-4675-b061-db6ff4566b0a.png",
        "http://www.fasela.com//product/d39276f5-a426-4dc9-a0ef-d32dda817c78.raw",
        "http://www.y-dom.com//product/80bac166-5709-4b57-887b-a295b8cee346.jpg"
      ]
    },
    {
      nombre: "carne de pato",
      precio: 104114,
      descripcion: "descripcion de 'carne de pato'",
      stock: 8149,
      fotos: [
        "http://www.vivaholding.com//product/7f2a78a8-4f36-454a-b8d6-88b948a7efaf.jpg",
        "http://www.biostreet.com//product/6ef18c12-7aed-4cb4-b064-b7d92a380467.jpg",
        "http://www.mediaplanet.com//product/78f819c4-ed71-411a-bf47-2aa268c0c46d.png",
        "http://www.soloity.com//product/64aae546-debe-4f4a-b662-f41da292d5b5.png"
      ]
    },
    {
      nombre: "carne de res",
      precio: 116712,
      descripcion: "descripcion de 'carne de res'",
      stock: 6760,
      fotos: [
        "http://www.y-dom.com//product/fa007390-215f-4967-9723-ee9674145d57.raw",
        "http://www.tonruntone.com//product/06a9f60c-0c29-4608-85e7-0c72f20aab1a.raw",
        "http://www.hare-comics.com//product/17f8715d-4be6-45b5-a02c-46f075190e72.png",
        "http://www.ventostreet.com//product/4fb9876b-817d-4ebf-bc97-5e240b54dfbd.jpg"
      ]
    },
    {
      nombre: "carne de cerdo",
      precio: 122702,
      descripcion: "descripcion de 'carne de cerdo'",
      stock: 6395,
      fotos: [
        "http://www.opencare.com//product/6ead1164-3443-4c43-951e-97b35fe1941e.jpg",
        "http://www.golden-lane.com//product/9b9ce383-9f93-47d0-8c0f-7d357cf5ae1d.raw",
        "http://www.funholding.com//product/f54a1352-ba24-4e17-9646-b3987a36d721.jpg",
        "http://www.zenhigh.com//product/b5e50512-3e26-4e20-b574-3b436dfacdf4.raw"
      ]
    },
    {
      nombre: "carne de pollo",
      precio: 112047,
      descripcion: "descripcion de 'carne de pollo'",
      stock: 8259,
      fotos: [
        "http://www.funtinin.com//product/41f16e07-56da-4178-b03e-db667aa86734.raw",
        "http://www.freetone.com//product/ddb25492-fe46-4bf3-9c5d-fc644d1a3a60.raw",
        "http://www.ventostreet.com//product/ae1c8c36-3d36-4e49-b881-79275d9d5ec2.png",
        "http://www.keyphase.com//product/906f21c4-b5b8-4b74-8d22-1ef757d4bd06.raw"
      ]
    },
    {
      nombre: "carne de pollo",
      precio: 129660,
      descripcion: "descripcion de 'carne de pollo'",
      stock: 9199,
      fotos: [
        "http://www.freetone.com//product/a469f263-6e1b-41ef-bcbd-f924c82a2a56.png",
        "http://www.zenhigh.com//product/5ca78400-68c7-436f-a67b-8e2da6d668b9.raw",
        "http://www.keyphase.com//product/24540235-45de-4cc7-88fa-f6ab680a4ec5.png",
        "http://www.keyphase.com//product/4bd6e338-5234-4ed5-806c-c295a9fc4d56.png"
      ]
    },
    {
      nombre: "carne de res",
      precio: 128516,
      descripcion: "descripcion de 'carne de res'",
      stock: 5629,
      fotos: [
        "http://www.zonice.com//product/512b5de4-41af-4eff-bcc2-148657e169e3.jpg",
        "http://www.mediaplanet.com//product/aa4ad2f7-16b2-4640-9d4b-5bf0c50f3f8d.raw",
        "http://www.ranlax.com//product/be0dcd86-5ef4-4b00-860e-d2fc7f74255e.png",
        "http://www.fasela.com//product/7d09d24e-ee4c-425f-b2ba-106c3fc84749.png"
      ]
    },
    {
      nombre: "carne de cordero",
      precio: 124874,
      descripcion: "descripcion de 'carne de cordero'",
      stock: 7371,
      fotos: [
        "http://www.y-dom.com//product/faf2963f-d21b-4c04-8d96-47ae2f30644f.raw",
        "http://www.ventostreet.com//product/dbb498f1-2895-48d0-b11e-73a27416c7ab.jpg",
        "http://www.silvercode.com//product/17f41309-9e9e-43ff-bf5a-732608b48200.raw",
        "http://www.movetam.com//product/85cce717-600d-4a38-bfb1-17ae33bc172d.raw"
      ]
    },
    {
      nombre: "carne de pollo",
      precio: 126399,
      descripcion: "descripcion de 'carne de pollo'",
      stock: 6382,
      fotos: [
        "http://www.biostreet.com//product/ca52e503-51b0-4d92-a619-7309472cd9dd.raw",
        "http://www.y-dom.com//product/a2630a47-623e-4c07-8d5a-140e3c762e7b.jpg",
        "http://www.vivaholding.com//product/580513db-dbeb-4d24-b3d8-0fc7160ec94b.png",
        "http://www.waredex.com//product/568840a7-56a9-45fc-9fa6-9ab584e32245.png"
      ]
    },
    {
      nombre: "carne de pollo",
      precio: 127673,
      descripcion: "descripcion de 'carne de pollo'",
      stock: 6622,
      fotos: [
        "http://www.treefix.com//product/0e075e54-cb51-4b48-8b88-3eb5e750129a.raw",
        "http://www.zooelectrics.com//product/a84104b1-9605-4514-ba11-322a23b87f92.raw",
        "http://www.good-zoom.com//product/7afdf78f-3b89-444d-87d1-a6d9e6dfce0c.jpg",
        "http://www.truetam.com//product/cc746a88-fd33-4c18-a5be-748273333d0d.jpg"
      ]
    },
    {
      nombre: "carne de pavo",
      precio: 113531,
      descripcion: "descripcion de 'carne de pavo'",
      stock: 6271,
      fotos: [
        "http://www.zenhigh.com//product/467efc4d-7054-4906-8058-c977c5771527.jpg",
        "http://www.y-dom.com//product/864d907c-36a8-4de6-8125-3314a5a14566.jpg",
        "http://www.funholding.com//product/d6de4692-f3b9-4c6d-abb3-b3e8dd4eb2c0.png",
        "http://www.funholding.com//product/7dcb958b-0356-426a-8d1f-432c98d570c1.png"
      ]
    },
    {
      nombre: "carne de venado",
      precio: 108978,
      descripcion: "descripcion de 'carne de venado'",
      stock: 5628,
      fotos: [
        "http://www.tantech.com//product/d13fbe6a-792b-4ec5-8ece-3d8275dc8161.png",
        "http://www.unala.com//product/664bc24c-7ded-434f-a27c-9c031367170e.jpg",
        "http://www.freetone.com//product/f5b220e2-fcb4-4101-8bfa-e480031ee5fb.png",
        "http://www.mediaplanet.com//product/d0844163-4007-4499-b990-cebf0b7560b1.raw"
      ]
    },
    {
      nombre: "carne de pollo",
      precio: 99718,
      descripcion: "descripcion de 'carne de pollo'",
      stock: 9153,
      fotos: [
        "http://www.doublelab.com//product/eb551c82-9cf0-4163-a899-d1fef4a2e83f.png",
        "http://www.gravejob.com//product/b1268dc3-c150-4d35-9b50-2806c86e48fc.raw",
        "http://www.unala.com//product/7005a890-bfba-43aa-8867-d4eab441fff8.png",
        "http://www.ventostreet.com//product/326ad062-7db0-4cbc-93a1-a6c143f5bd8f.png"
      ]
    },
    {
      nombre: "carne de venado",
      precio: 113594,
      descripcion: "descripcion de 'carne de venado'",
      stock: 8907,
      fotos: [
        "http://www.truetam.com//product/4c8183f7-300b-4a95-8817-08c0d052bd58.raw",
        "http://www.vivaholding.com//product/708ad212-46ab-4843-af9c-c7ae088e8394.png",
        "http://www.ranktrans.com//product/e44f37fd-d0ac-40e8-90c2-5d758afd5ecd.raw",
        "http://www.hare-comics.com//product/cb8bc56b-4d44-4cf6-8b78-a12b5cf97db4.png"
      ]
    },
    {
      nombre: "carne de pavo",
      precio: 124640,
      descripcion: "descripcion de 'carne de pavo'",
      stock: 5342,
      fotos: [
        "http://www.unala.com//product/9c681fd7-9323-4a29-b94e-0ef993fadd81.jpg",
        "http://www.tanlax.com//product/28880ccb-e4b4-4b93-9e6a-278d2b464603.raw",
        "http://www.zooelectrics.com//product/56b6f974-75e6-4b6a-8a6e-7383d9ca4420.png",
        "http://www.biotechi.com//product/c7fc9d75-e005-4037-a850-5df6aa8c706c.png"
      ]
    },
    {
      nombre: "carne de cordero",
      precio: 100777,
      descripcion: "descripcion de 'carne de cordero'",
      stock: 6681,
      fotos: [
        "http://www.zenhigh.com//product/e8f47c9f-d544-4e72-a489-c10226d3ce4c.raw",
        "http://www.zenhigh.com//product/e5b610d5-b740-493a-97a2-4050fbbd9efd.raw",
        "http://www.ventostreet.com//product/e708e1dc-1afd-4587-b118-3ac909281090.raw",
        "http://www.funtinin.com//product/0685a432-308d-40b6-a30b-86854277a472.raw"
      ]
    },
    {
      nombre: "carne de pollo",
      precio: 106845,
      descripcion: "descripcion de 'carne de pollo'",
      stock: 5455,
      fotos: [
        "http://www.hare-comics.com//product/f87e4b1c-b89f-4f5f-89c7-2eaee4eab2a1.png",
        "http://www.truetam.com//product/6023df5e-8a6b-46f1-9cf1-9b2d90705f63.raw",
        "http://www.grooveholding.com//product/6e39e508-0c55-45c9-be59-25830a59d120.png",
        "http://www.good-zoom.com//product/65a45bdb-37a9-4dd7-aca0-31a0e9e73ced.jpg"
      ]
    },
    {
      nombre: "carne de pato",
      precio: 127385,
      descripcion: "descripcion de 'carne de pato'",
      stock: 8817,
      fotos: [
        "http://www.biostreet.com//product/38fd5b8c-b9f0-43d2-a708-9b466d3cb688.jpg",
        "http://www.hare-comics.com//product/63aa7f18-56fe-4ffa-89a5-daa7f5799560.png",
        "http://www.keyphase.com//product/896847ea-bc98-42e8-ae27-b36b21e1b943.png",
        "http://www.waredex.com//product/0fa718fc-5c0e-4417-b0e7-5f108b91be65.jpg"
      ]
    },
    {
      nombre: "carne de venado",
      precio: 111603,
      descripcion: "descripcion de 'carne de venado'",
      stock: 8645,
      fotos: [
        "http://www.ventostreet.com//product/000fec35-ad45-4210-9908-c67f877f018e.jpg",
        "http://www.physcone.com//product/62fa1de8-9f28-4f90-84a4-91bd809df9d3.png",
        "http://www.good-zoom.com//product/f9132756-98de-4cac-a403-c60d67ab9004.png",
        "http://www.biostreet.com//product/33de197c-5676-4e59-8760-e3bf4c2fcca7.jpg"
      ]
    },
    {
      nombre: "carne de venado",
      precio: 131908,
      descripcion: "descripcion de 'carne de venado'",
      stock: 6789,
      fotos: [
        "http://www.funtinin.com//product/7f621169-11c3-4723-bac3-d65a99b97a68.jpg",
        "http://www.gravejob.com//product/38e787d5-b7e7-4972-a659-76b9926749da.png",
        "http://www.y-dom.com//product/7a36b9f0-e367-4f43-8279-ea6ad4ae4ee7.jpg",
        "http://www.donfase.com//product/e3c7d890-5318-4817-9edd-d7eda228ecbb.jpg"
      ]
    },
    {
      nombre: "carne de pollo",
      precio: 103240,
      descripcion: "descripcion de 'carne de pollo'",
      stock: 7999,
      fotos: [
        "http://www.zenhigh.com//product/09ca1119-53ff-4492-b71d-8e03f73796e5.png",
        "http://www.ranlax.com//product/abcbec6e-9a40-4834-861d-40e16405e1b6.raw",
        "http://www.silvercode.com//product/c848fc5a-207d-4a7c-bee2-5fb272d69606.png",
        "http://www.bamcon.com//product/1b0572bf-4782-475a-b5fe-5590c74bb2f8.raw"
      ]
    },
    {
      nombre: "carne de pollo",
      precio: 100623,
      descripcion: "descripcion de 'carne de pollo'",
      stock: 9098,
      fotos: [
        "http://www.mediaplanet.com//product/dac640f5-e8bd-4ad2-b8ca-4bdbba02bda7.raw",
        "http://www.grooveholding.com//product/a5154326-26d4-4dd1-897b-8bdfc0961a70.jpg",
        "http://www.ventostreet.com//product/ba151aa0-f97c-4835-adb6-148980bca2b9.png",
        "http://www.aptrax.com//product/41cfaa82-7992-4ca5-92b2-747e4651c672.png"
      ]
    },
    {
      nombre: "carne de pollo",
      precio: 133921,
      descripcion: "descripcion de 'carne de pollo'",
      stock: 7065,
      fotos: [
        "http://www.hare-comics.com//product/e810c7a2-46a8-4525-8d96-a3e5acf11a07.png",
        "http://www.zonice.com//product/a5048e2f-3e6e-4d56-8bfa-c79ca4c4cf9f.raw",
        "http://www.bamcon.com//product/18cffba4-6dec-4cb8-a0dd-1578ac1afea7.jpg",
        "http://www.opencare.com//product/797a1914-1cb7-4bea-b98c-a46be43ebf0f.raw"
      ]
    }
  ],
  reviews: [
    {
      comentario: "Lorem ipsum dolor sit amet....",
      evaluacion: 5
    },
    {
      comentario: "Lorem ipsum dolor sit amet....",
      evaluacion: 3
    },
    {
      comentario: "Lorem ipsum dolor sit amet....",
      evaluacion: 3
    },
    {
      comentario: "Lorem ipsum dolor sit amet....",
      evaluacion: 1
    },
    {
      comentario: "Lorem ipsum dolor sit amet....",
      evaluacion: 2
    },
    {
      comentario: "Lorem ipsum dolor sit amet....",
      evaluacion: 2
    },
    {
      comentario: "Lorem ipsum dolor sit amet....",
      evaluacion: 5
    },
    {
      comentario: "Lorem ipsum dolor sit amet....",
      evaluacion: 2
    },
    {
      comentario: "Lorem ipsum dolor sit amet....",
      evaluacion: 3
    },
    {
      comentario: "Lorem ipsum dolor sit amet....",
      evaluacion: 4
    },
    {
      comentario: "Lorem ipsum dolor sit amet....",
      evaluacion: 2
    },
    {
      comentario: "Lorem ipsum dolor sit amet....",
      evaluacion: 4
    },
    {
      comentario: "Lorem ipsum dolor sit amet....",
      evaluacion: 1
    },
    {
      comentario: "Lorem ipsum dolor sit amet....",
      evaluacion: 5
    },
    {
      comentario: "Lorem ipsum dolor sit amet....",
      evaluacion: 1
    },
    {
      comentario: "Lorem ipsum dolor sit amet....",
      evaluacion: 2
    },
    {
      comentario: "Lorem ipsum dolor sit amet....",
      evaluacion: 4
    },
    {
      comentario: "Lorem ipsum dolor sit amet....",
      evaluacion: 5
    },
    {
      comentario: "Lorem ipsum dolor sit amet....",
      evaluacion: 3
    },
    {
      comentario: "Lorem ipsum dolor sit amet....",
      evaluacion: 4
    },
    {
      comentario: "Lorem ipsum dolor sit amet....",
      evaluacion: 4
    },
    {
      comentario: "Lorem ipsum dolor sit amet....",
      evaluacion: 3
    },
    {
      comentario: "Lorem ipsum dolor sit amet....",
      evaluacion: 1
    },
    {
      comentario: "Lorem ipsum dolor sit amet....",
      evaluacion: 4
    },
    {
      comentario: "Lorem ipsum dolor sit amet....",
      evaluacion: 4
    },
    {
      comentario: "Lorem ipsum dolor sit amet....",
      evaluacion: 3
    },
    {
      comentario: "Lorem ipsum dolor sit amet....",
      evaluacion: 3
    },
    {
      comentario: "Lorem ipsum dolor sit amet....",
      evaluacion: 1
    },
    {
      comentario: "Lorem ipsum dolor sit amet....",
      evaluacion: 1
    },
    {
      comentario: "Lorem ipsum dolor sit amet....",
      evaluacion: 4
    },
    {
      comentario: "Lorem ipsum dolor sit amet....",
      evaluacion: 3
    },
    {
      comentario: "Lorem ipsum dolor sit amet....",
      evaluacion: 2
    },
    {
      comentario: "Lorem ipsum dolor sit amet....",
      evaluacion: 2
    },
    {
      comentario: "Lorem ipsum dolor sit amet....",
      evaluacion: 3
    },
    {
      comentario: "Lorem ipsum dolor sit amet....",
      evaluacion: 4
    },
    {
      comentario: "Lorem ipsum dolor sit amet....",
      evaluacion: 4
    },
    {
      comentario: "Lorem ipsum dolor sit amet....",
      evaluacion: 5
    },
    {
      comentario: "Lorem ipsum dolor sit amet....",
      evaluacion: 3
    },
    {
      comentario: "Lorem ipsum dolor sit amet....",
      evaluacion: 3
    },
    {
      comentario: "Lorem ipsum dolor sit amet....",
      evaluacion: 2
    }
  ]
  // pedidos: [
  //   {
  //     direccion: "West Avenue 330, St. Louis",
  //     status: "Proceso",
  //     f_pedido: new Date(),
  //     f_entrega: new Date(f_pedido.getMonth() + '/' + (f_pedido.getDate() + 1) + '/' +f_pedido.getFullYear()),
  //   },
  //   {
  //     direccion: "Maple Street 467, Lexington-Fayette",
  //     status: "Proceso",
  //     f_pedido: new Date(),
  //     f_entrega: new Date(f_pedido.getMonth() + '/' + (f_pedido.getDate() + 1) + '/' +f_pedido.getFullYear()),
  //   },

  // ],
};

module.exports = data;