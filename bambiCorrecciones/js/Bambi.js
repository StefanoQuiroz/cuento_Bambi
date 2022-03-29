//archivo de configuración
let JSON_CUENTO = {
    nombre: 'Bambi',
    tipo: 'Cuentos clásicos',
    descripcion:
      'Cada año el bosque recibe pequeños animales que comienzan el camino de la vida. Bambi, un tímido cervatillo, es uno de ellos. Junto a su madre y a sus amigos de todas las especies, va enfrentando aventuras, peligros y pérdidas que lo convertirán en un ciervo seguro y protector del bosque junto a su fiel amiga Felina. <br> Este relato es una adaptación libre de la novela <b><i>Bambi, una vida en el bosque</i></b>, escrita por el austríaco Felix Salten en 1923, y mundialmente difundida por la versión cinematográfica de Walt Disney. ',   
    
    creditos: [
      ['Autor:', 'Félix Salten'],
      ['Ilustraciones:', 'Copec'],
      ['Narración:', 'Andrés Montero'],
      ['Edición a cargo de:', 'Copec'],
      ['Montaje y desarrollo web:', 'Agencia Match'],
      ['Créditos de sonidos:', "Revise detalles <a href='#' target='_blank'>aquí</a>"],
    ],
    ID: 0,
    imagenes: [
      'img/bambi/esc_0_fondo.jpg',
      'img/bambi/esc_1_fondo.jpg',
      'img/bambi/esc_2_fondo.jpg',
      'img/bambi/esc_3_fondo.jpg',
      'img/bambi/esc_4_fondo.jpg',
      'img/bambi/esc_5_fondo.jpg',
      'img/bambi/esc_6_fondo.jpg',
      'img/bambi/esc_7_fondo.jpg',
      'img/bambi/esc_8_fondo.jpg',
    ],
    fx_sonido: [
      {
        nombre: 'animales_bosque_seco',
        url: 'audio/bambi/fx/animales_bosque_seco.mp3',
      },
      {
        nombre: 'animales_corriendo',
        url: 'audio/bambi/fx/animales_corriendo.mp3',
      },
      {
        nombre: 'animales_patinando',
        url: 'audio/bambi/fx/animales_patinando.mp3',
      },
      {
        nombre: 'bosque_de_noche',
        url: 'audio/bambi/fx/bosque_de_noche.mp3',
      },
      {
        nombre: 'bosque_en_primavera',
        url: 'audio/bambi/fx/bosque_en_primavera.mp3',
      },
      {
        nombre: 'buho',
        url: 'audio/bambi/fx/buho.mp3',
      },
      {
        nombre: 'caida_de_hielo',
        url: 'audio/bambi/fx/caida_de_hielo.mp3',
      },
      {
        nombre: 'copia_de_animales_corriendo',
        url: 'audio/bambi/fx/copia_de_animales_corriendo.mp3',
      },
      {
        nombre: 'copia_de_musica_de_bosque_2',
        url: 'audio/bambi/fx/copia_de_musica_de_bosque_2.mp3',
      },
      {
        nombre: 'copia_de_musica_de_bosque',
        url: 'audio/bambi/fx/rcopia_de_musica_de_bosque.mp3',
      },
      {
        nombre: 'disparo',
        url: 'audio/bambi/fx/disparo.mp3',
      },
      {
        nombre: 'incendio_de_bosqueo',
        url: 'audio/bambi/fx/incendio_de_bosque.mp3',
      },
      {
        nombre: 'musica_de_bosque_2',
        url: 'audio/bambi/fx/musica_de_bosque_2.mp3',
      },
      {
        nombre: 'musica_de_bosque',
        url: 'audio/bambi/fx/musica_de_bosque.mp3',
      },
      {
        nombre: 'suspenso_vertiginoso',
        url: 'audio/bambi/fx/suspenso_vertiginoso.mp3',
      },
      {
        nombre: 'suspenso_corto_piano',
        url: 'audio/bambi/fx/suspenso_corto_piano.mp3',
      },
      {
        nombre: 'rio',
        url: 'audio/bambi/fx/rio.mp3',
      }
    ],
    n_escena: 0,
    escenas: [
      {
        nombre: 'Escena 1',
        miniatura: 'img/bambi/mini_0.jpg',
        audio: 'audio/bambi/escena_01.mp3',
        parrafos: [
          {
            texto:
              'La primavera llegó con sus colores y olores a cada rincón del bosque.',
            tiempo: [0, 5.9, 11.5],
          },
          {
            texto:
              'Y también trajo a nuevos integrantes del reino animal.',
            tiempo: [6.4, 9.9, 0.5],
          },
          {
            texto:
              'Entre ellos, nació un pequeño cervatillo llamado Bambi.',
            tiempo: [10.4, 15.4, 0.5],
          }
        ],
      },
      {
        nombre: 'Escena 2',
        miniatura: 'img/bambi/mini_1.jpg',
        audio: 'audio/bambi/escena_02.mp3',
        parrafos: [
          {
            texto:
              'Bambi creció, transformándose en un joven lleno de energía.',
            tiempo: [0, 4.0, 10.0],
          },
          {
            texto: 'Una de sus mejores amigas era Falina, <br> una cierva como él con quien jugaba y compartía aventuras.',
            tiempo: [4.5, 11.6, 0.5], // 11.6 => 5.5
          }
        ],
      },
      {
        nombre: 'Escena 3',
        miniatura: 'img/bambi/mini_2.jpg',
        audio: 'audio/bambi/escena_03.mp3',
        parrafos: [
          {
            texto:
              'Un día de invierno, Bambi y sus amigos fueron a jugar al lago congelado.',
            tiempo: [0, 4.6, 0.5],
          },
          {
            texto: 'Algunos se deslizaban patinando sobre el hielo, <br> pero para Bambi resultaba muy difícil.',
            tiempo: [5.1, 11.4, 0.5],
          }
        ],
      },
      {
        nombre: 'Escena 4',
        miniatura: 'img/bambi/mini_3.jpg',
        audio: 'audio/bambi/escena_04.mp3',
        parrafos: [
          {
            texto:
              'Una tarde Bambi vio que muchos animales corrían asustados, <br> como escapando de algo. ',
            tiempo: [0, 6.3, 0.5],
          },
  
          {
            texto: 'Su madre le gritó: <br> Bambi, huye rápido y corre lo más lejos que puedas.',
            tiempo: [6.8, 12.0, 0.5],//12.0 => 7.5
          }
        ],
      },
      {
        nombre: 'Escena 5',
        miniatura: 'img/bambi/mini_4.jpg',
        audio: 'audio/bambi/escena_05.mp3',
        parrafos: [
          {
            texto:
              'Bambi corrió con todas sus fuerzas, escapando de algo que no comprendía.',
            tiempo: [0, 4.9, 7.0],
          },
          {
            texto:
              'Cruzó ríos, quebradas y cercos, hasta que sintió que estaba a salvo.',
            tiempo: [5.4, 9.9, 0.5],
          },
          {
            texto:
              'A salvo, pero sin su madre.',
            tiempo: [10.4, 12.7, 0.5],
          },
          {
            texto:
              'Su padre, el gran príncipe del bosque, <br> le dijo:',
            tiempo: [13.2, 16.7, 0.5],
          },
          {
            texto:
              'Debes ser fuerte. El cariño y las enseñanzas de tu madre siempre estarán en tu corazón.',
            tiempo: [17.2, 23.3, 0.5],
          }
        ],
      },
      {
        nombre: 'Escena 6',
        miniatura: 'img/bambi/mini_5.jpg',
        audio: 'audio/bambi/escena_06.mp3',
        parrafos: [
          {
            texto: 'Bambi se transformó en un ciervo grande y fuerte.',
            tiempo: [0, 3.2, 5.0],
          },
          {
            texto:
              'Se reencontró con Falina, su antigua compañera de juegos, y se enamoraron.',
            tiempo: [3.7, 8.7, 0.5],
          }
        ],
      },
      {
        nombre: 'Escena 7',
        miniatura: 'img/bambi/mini_6.jpg',
        audio: 'audio/bambi/escena_07.mp3',
        parrafos: [
          {
            texto:
              'Al llegar el verano, un gran incendio devoró el bosque, <br> consumiendo árboles y gran parte de los hogares de los animales.',
            tiempo: [0, 8.2, 0.5],
          },
          {
            texto: 'Bambi y Falina corrieron ayudando a muchos animales para que huyeran al río.',
            tiempo: [8.7, 13.4, 0.5],
          }
        ],
      },
      {
        nombre: 'Escena 8',
        miniatura: 'img/bambi/mini_7.jpg',
        audio: 'audio/bambi/escena_08.mp3',
        parrafos: [
          {
            texto:'Con la llegada de una nueva primavera, <br> Bambi y Falina se convirtieron en padres de dos hermosos cervatillos.',
            tiempo: [0, 7.4, 11.5],
          },
          {
            texto: 'La buena noticia se esparció, <br>y todos en el bosque se pusieron muy alegres.',
            tiempo: [7.9, 13.2, 0.5]
          }
        ],
      },
      {
        nombre: 'Escena 9',
        miniatura: 'img/bambi/mini_8.jpg',
        audio: 'audio/bambi/escena_09.mp3',
        parrafos: [
          {
            texto:'Un día, el ciervo sabio apareció y le dijo:',
            tiempo: [0, 4.1, 0.5],
          },
          {
            texto: 'Bambi, yo estoy viejo y necesito descansar. <br> Ahora tú debes cuidar a todos los animales del bosque.',
            tiempo: [4.6, 11.6, 0.5]
          },
          {
            texto: 'Bambi se convirtió en el nuevo Príncipe del Bosque <br> y todos los animales celebraron la noticia.',
            tiempo: [12.1, 19.0, 0.5]
          },
          {
            texto: 'Y colorín colorado, este cuento se ha acabado.',
            tiempo: [19.5, 23.8, 0.5]
          }
        ],
      }
    ],
  };
  //CREA Y GESTIONA TODAS LAS ANIMACIONES DEL CUENTO, TIENE FUNCIONES Y UN main_tl => timeline principal
  //timeline, es secuencia de de elementos => animaciones, funciones y timelines en un periodo de tiempo.
  let ANIM = {
    /* ↓↓↓↓↓ HOLA CATA - COPIA DESDE LA LÍNEA SIGUIENTE ↓↓↓↓↓ */
    main_tl: undefined,
    creapartes: () => {
      // PONER ACÁ LO QUE SE VAYA A CREAR "ON THE FLY"
    },
    //reducir volumen
    fadeVolume: (cual, desde = 1, hasta = 0.2, t = 1) => {
      //nombre_sonido, volumen_inicio, volumen_final, tiempoDeFade
      let o = { vol: desde };
      let fade = new TimelineMax({
        onUpdate: function () {
          Player.cambiaVolume(cual, o.vol);
        },
      });
      //reducir volumen
      fade.to(o, t, { vol: hasta });
      fade.play(); //ejecutar el fade
    },
  
    arrWaitSounds: [], //contenedor de timelines, contraladores del sonido "especial"
    waitForSound: (
      cual,
      waitFor = 4,
      cuantoDura = 14,
      cuantasVeces = 1,
      cuantoDejoAlFinal = 0,
      volume = 1,
      fade = false,
      fadeFrom = 12,
      volFadeTo = 0
    ) => {
      if (!ANIM[`wait_sound_${cual}`]) {
        //no existe o es nuevo
        ANIM[`wait_sound_${cual}`] = new TimelineMax({
          repeat: cuantasVeces - 1,
        }); // reproducción inicial + 1 repetición => condiciona a repetir  n veces exacto
        //
        let o = { val: 0 };
        let waitTL = `+=${waitFor}`; //4 segundos despues de la TimeLine
        ANIM[`wait_sound_${cual}`]
  
          .addLabel('inicio') //inicio
          .addCallback(function () {
            Player.playSoundFX(cual); //ejecutar el efecto de sonido "musica_" inifinitas veces
            Player.cambiaVolume(cual, volume);
          }, waitTL)
          .to(o, cuantoDura + cuantoDejoAlFinal, { val: 100 })
          .addLabel('final'); //final
  
        //            ANIM[`wait_sound_${cual}`].add(TweenMax.to(o, cuantoDura+cuantoDejoAlFinal,{val:100}),waitFor);
  
        if (fade) {
          ANIM[`wait_sound_${cual}`].addCallback(function () {
            ANIM.fadeVolume(cual, volume, volFadeTo, cuantoDura - fadeFrom);
          }, waitFor + fadeFrom);
        }
  
        ANIM.arrWaitSounds.push(ANIM[`wait_sound_${cual}`]);
      }
      ANIM[`wait_sound_${cual}`].play(0);
    },
    //paussar sonido de espera
    pauseWaitSound: () => {
      ANIM.arrWaitSounds.map((item, i) => {
        item.pause();
      });
    },
  
    pauseAnimaciones: () => {
      try {
        ANIM.anim_interact_7_feliz.pause(0);
      } catch (err) {}
    },
  
    init: () => {
        ANIM.creapartes();
          
        Player.creaMainTL();


        /* Escena00 */
        //ANIM.main_tl.add(TweenMax.set("escena_01 .casaEsc1", {scale:1, x:0, y:0}), 'escena_0+=0.01')
        let preAnimacion1 = new TimelineMax();
        preAnimacion1
            .from('#escena_00 .pajaro2OjoEsc00', 1.6, {autoAlpha: 0,repeat:9,ease:Power3.easeOut})
            .fromTo('#escena_00 .pajaro1Esc00', 2, {backgroundPosition:'0% 0%'},{backgroundPosition:'200% 0%', ease: SteppedEase.config(2),repeat:-1},0)
            .from('#escena_00 .mapache1OjoEsc00', 1.5, {autoAlpha: 0,repeat:9,ease:Power3.easeOut})
            .from('#escena_00 .conejoOjoEsc00', 1.3, {autoAlpha: 0,repeat:9,ease:Power3.easeOut},1.2)
            .from('#escena_00 .ardillaOjoEsc00', 1.3, {autoAlpha: 0,repeat:9,ease:Power3.easeOut},1.4)
            .to('#escena_00 .mapache2OjoEsc00', .8, {autoAlpha: 1,repeat:9,ease:Power3.easeOut})
            .from('#escena_00 .bambiOjoEsc00',1,{opacity:0, ease:Power4.easeInOut,repeat:13},0)
        ANIM.main_tl.add(preAnimacion1,'0_0+=0');


        /* Escena01 */
        const bambi= [
          '#escena_01 .cuerpoBambiEsc01',
          '#escena_01 .ojoBambiEsc01',
          '#escena_01 .colaBambiEsc01'
        ];

        const pezPreAnim = ["#escena_01 .ojoPezEsc01","#escena_01 .pezEsc01"];

        let preAnimacion2_0 = new TimelineMax();
        preAnimacion2_0
          //.to('#escena_01 .ojoConejoEsc01',2.5,{opacity:0, ease:Power3.easeInOut,repeat:4},0)
          .from('#escena_01 .ojoConejoEsc01',.9,{opacity:0, ease:Power4.easeInOut,repeat:-1},0)
          .to('#escena_01 .pajaroVolandoEsc01', 10, {x:2500, ease:Power3.easeInOut},3.5)
          .fromTo('#escena_01 .pajaroVolandoEsc01', .5, {backgroundPosition:'0% 0%'},{backgroundPosition:'200% 0%', ease: SteppedEase.config(2),repeat:10},3.75)         
          .from(pezPreAnim,2,{x:50,ease:Circ.easeInOut,repeat:3,yoyo:true},0.1) 
        ANIM.main_tl.add(preAnimacion2_0, '1_0-=10');

        let preAnimacion2 = new TimelineMax();
        preAnimacion2
          .to(bambi, 12, {x:-1050, ease:Power1.easeInOut},0)
          //.to("#escena_01 .ojoBambiEsc01",2.5,{opacity:0, ease:Power3.easeInOut,repeat:4},0)
          .to('#escena_01 .ojoBambiEsc01',1,{opacity:0, ease:Power4.easeInOut,repeat:15}, 0)
          //.to('#escena_01 .ojoConejoEsc01',2.5,{opacity:0, ease:Power3.easeInOut,repeat:4},0)
          .to('#escena_01 .ojoConejoEsc01',.9,{opacity:1, ease:Power4.easeInOut,repeat:15},0)
          .to('#escena_01 .pajaroVolandoEsc01', 10, {x:2500, ease:Power3.easeInOut},3.5)
          .fromTo('#escena_01 .pajaroVolandoEsc01', .5, {backgroundPosition:'0% 0%'},{backgroundPosition:'200% 0%', ease: SteppedEase.config(2),repeat:10},3.75)

          .from(pezPreAnim,2,{x:50,ease:Circ.easeInOut,repeat:3,yoyo:true}, 0) //3s
          //.to('#escena_01 .pajaroVolandoEsc01', 10, {x:2600, ease:Power4.easeInOut},0)
          //.fromTo('#escena_01 .pajaroVolandoEsc01', .5, {backgroundPosition:'0% 0%'},{backgroundPosition:'200% 0%', ease: SteppedEase.config(2),repeat:10},0.1)  
        ANIM.main_tl.add(preAnimacion2, '1_1-=4');

        /* Escena02 */
        
        let preAnimacion3 = new TimelineMax();
        preAnimacion3
            .fromTo('#escena_02 .buhoEsc02', 2, {backgroundPosition:'0% 0%'},{backgroundPosition:'200% 0%', ease: SteppedEase.config(2),repeat:10})
            .from('#escena_02 .ojosZorroEsc02', 1, {autoAlpha: 0,repeat:12,ease:Power4.easeOut},0)
            .from('#escena_02 .ojosConejoEsc02', 1, {autoAlpha: 0,repeat:12,ease:Power4.easeOut},0)
        ANIM.main_tl.add(preAnimacion3, '2_0+=1');

        
        /* Escena 05*/
        let preAnimacion6 = new TimelineMax();
        preAnimacion6
            
          .from('#escena_05 .conejoOjoEsc05', 1.5, {autoAlpha: 0,repeat:9,ease:Power4.easeOut},0)
          .from('#escena_05 .ardillaOjoEsc05', 1.5, {autoAlpha: 0,repeat:9,ease:Power4.easeOut},0.5)

        ANIM.main_tl.add(preAnimacion6, '5_0+=0');



        /* Escena 06 */
        const incendio = ['#escena_06 .fuegoLomaEsc06','#escena_06 .fuegoArbolEsc06','#escena_06 .fuegoArbol2Esc06','#escena_06 .fuegoFrontalEsc06'];
        let preAnimacion7_0 = new TimelineMax();
        preAnimacion7_0
          .addCallback(function(){
            Player.playSoundFX('incendio_de_bosqueo');
            Player.cambiaVolume('incendio_de_bosqueo', 0.1);
          })

          .fromTo(incendio,.8,{backgroundPosition:'0% 0%'},{backgroundPosition:'200% 0%', ease: SteppedEase.config(2),repeat:30})         
        ANIM.main_tl.add(preAnimacion7_0, '6_0+=0');
        
        let preAnimacion7_1 = new TimelineMax();
        preAnimacion7_1
          .addCallback(function(){
            Player.playSoundFX('incendio_de_bosqueo');
            ANIM.fadeVolume('incendio_de_bosqueo',0.2,0,7);
          })

          .fromTo(incendio,.8,{backgroundPosition:'0% 0%'},{backgroundPosition:'200% 0%', ease: SteppedEase.config(2),repeat:30})         
        ANIM.main_tl.add(preAnimacion7_1, '6_1+=0');



        /* Escena 07 */
        let preAnimacion8_0 = new TimelineMax();
        preAnimacion8_0
          /* .addCallback(function(){
            Player.playSoundFX('musica_de_bosque');
            Player.cambiaVolume('musica_de_bosque', 0.9);
          }) */
          .from('#escena_07 .ardillaDerEsc07', 2, {autoAlpha: 0,repeat:9,ease:Power4.easeOut},0)
          .from('#escena_07 .ardillaIzqEsc07', 2, {autoAlpha: 0,repeat:9,ease:Power4.easeOut},0.3)
          .from('#escena_07 .mapacheDerEsc07', 1.3, {autoAlpha: 0,repeat:9,ease:Power4.easeOut},0.6)
          .from('#escena_07 .mapacheIzqEsc07', 1.3, {autoAlpha: 0,repeat:9,ease:Power4.easeOut},0.9)

          
        ANIM.main_tl.add(preAnimacion8_0, '7_0+=0');

        let preAnimacion8_1 = new TimelineMax();
        preAnimacion8_1
          /* .addCallback(function(){
            Player.playSoundFX('musica_de_bosque');
            ANIM.fadeVolume('musica_de_bosque',0.9,0,9);
          }) */
        ANIM.main_tl.add(preAnimacion8_1, '7_1+=0');
        const ojosAnimales = ['#escena_08 .ojoMapacheEsc08','#escena_08 .ojoArdilla2Esc08','#escena_08 .ojoConejoEsc08'];

        const ojosAnimales2 = ['#escena_08 .ojoMapache2Esc08','#escena_08 .ojoArdillaEsc08'];

        /* Escena 08 */
        let preAnimacion9_0 = new TimelineMax();
        preAnimacion9_0
            
        .from(ojosAnimales, 1, {autoAlpha: 0,repeat:11,ease:Power2.easeOut},0)
        .from(ojosAnimales2, 1, {autoAlpha: 0,repeat:11,ease:Power2.easeOut},0.5)


        ANIM.main_tl.add(preAnimacion9_0, '8_0+=0');

        ANIM.main_tl.addLabel('0_0_audio', 'escena_0+=0.1');
        ANIM.main_tl.addLabel('0_0_audio_fade', '0_0-=2');
        ANIM.main_tl.addCallback(function () {
            Player.playSoundFX('musica_de_bosque');
            //Player.cambiaVolume('copia_de_musica_flauta_magica_Esc01', 0.3);
        }, '0_0_audio');
        ANIM.main_tl.addCallback(function () {
            ANIM.fadeVolume('musica_de_bosque',1,0,2);
        }, "0_0_audio_fade");

        ANIM.main_tl.addLabel('1_0_audio', 'escena_1+=0.1');
        ANIM.main_tl.addLabel('1_0_audio_fade', '1_0-=2');
        ANIM.main_tl.addCallback(function () {
            Player.playSoundFX('musica_de_bosque_2');
            //Player.cambiaVolume('copia_de_musica_flauta_magica_Esc01', 0.3);
        }, '1_0_audio');
        ANIM.main_tl.addCallback(function () {
            ANIM.fadeVolume('musica_de_bosque_2',1,0,2);
        }, "1_0_audio_fade");

        ANIM.main_tl.addLabel('4_0_audio', 'escena_4+=0.1');
        ANIM.main_tl.addLabel('4_0_audio_fade', '4_0-=2');
        ANIM.main_tl.addCallback(function () {
            Player.playSoundFX('suspenso_corto_piano');
            //Player.cambiaVolume('copia_de_musica_flauta_magica_Esc01', 0.3);
        }, '4_0_audio');
        ANIM.main_tl.addCallback(function () {
            ANIM.fadeVolume('suspenso_corto_piano',1,0,2);
        }, "4_0_audio_fade");

        ANIM.main_tl.addLabel('5_0_audio', 'escena_5+=0.1');
        ANIM.main_tl.addLabel('5_0_audio_fade', '5_0-=2');
        ANIM.main_tl.addCallback(function () {
            Player.playSoundFX('bosque_de_noche');
            //Player.cambiaVolume('copia_de_musica_flauta_magica_Esc01', 0.3);
        }, '5_0_audio');
        ANIM.main_tl.addCallback(function () {
            ANIM.fadeVolume('bosque_de_noche',1,0,2);
        }, "5_0_audio_fade");

        ANIM.main_tl.addLabel('7_0_audio', 'escena_7+=0.1');
        ANIM.main_tl.addLabel('7_0_audio_fade', '7_0-=2');
        ANIM.main_tl.addCallback(function () {
            Player.playSoundFX('musica_de_bosque');
            //Player.cambiaVolume('copia_de_musica_flauta_magica_Esc01', 0.3);
        }, '7_0_audio');
        ANIM.main_tl.addCallback(function () {
            ANIM.fadeVolume('musica_de_bosque',1,0,2);
        }, "7_0_audio_fade");

        /*INICIO*/
        /*LLAMADAS Y FUNCIONES ESCENA 0*/ //<-----------------------------------------------------
        ANIM.main_tl.addCallback(function () {
            Player.hideOthersBut('escena_00');
        }, "escena_0"); 
     
        ANIM.main_tl.addCallback(function () {
            Player.activaBtnSiguiente(); 
            ANIM.main_tl.pause(); 
            ANIM.interactividad(0); 
            Player.tooglePlayPauseIco();
            Player.resetSubtitulos();
            Player.playSoundFX('bosque_en_primavera');
            ANIM.fadeVolume('bosque_en_primavera',1,0,22);
        }, "fin_escena_0"); 

        ANIM.main_tl.addCallback(function () {
            Player.hideOthersBut('escena_01');
        }, "escena_1");

        ANIM.main_tl.addCallback(function () {
            ANIM.main_tl.pause();
            Player.activaBtnSiguiente();
            ANIM.interactividad(1);
            //ANIM.interactividad(1,undefined,'secundario');
            Player.tooglePlayPauseIco();
            Player.resetSubtitulos();
            Player.playSoundFX('paso_tiempo');
            Player.cambiaVolume('paso_tiempo', 0.2);
        }, "fin_escena_1");
        
        /*LLAMADAS Y FUNCIONES ESCENA 2*/ //<-----------------------------------------------------
        ANIM.main_tl.addCallback(function () {
            Player.hideOthersBut('escena_02');
        }, "escena_2");
        
        ANIM.main_tl.addCallback(function () {
            ANIM.main_tl.pause();
            ANIM.interactividad(2);
            Player.activaBtnSiguiente();
            Player.tooglePlayPauseIco();
            Player.resetSubtitulos();
            Player.playSoundFX('musica_de_bosque');
            Player.cambiaVolume('musica_de_bosque', 0.7);
        }, "fin_escena_2");
        
       
        /*LLAMADAS Y FUNCIONES ESCENA 3*/ //<-----------------------------------------------------
        ANIM.main_tl.addCallback(function (){ 
            Player.hideOthersBut('escena_03');
            /* if(!ANIM.tl_manada_03){
                ANIM.tl_manada_03 = new TimelineMax();
                ANIM.tl_manada_03
                .fromTo("#escena_03 .fondo",60,{backgroundPosition:'300%'},{backgroundPosition:'0%', ease:Power1.easeInOut}, 0)
            
                .fromTo('#escena_03 .bambiMamaEsc03',0.4,{backgroundPosition:'0% 0%'},{backgroundPosition:'-200% 0%', ease: SteppedEase.config(2), repeat: 80}, 1.1)
                .fromTo('#escena_03 .bambiEsc03',0.4,{backgroundPosition:'0% 0%'},{backgroundPosition:'-200% 0%', ease: SteppedEase.config(2), repeat: 80}, 1.1)
                .fromTo('#escena_03 .conejoEsc03',0.4,{backgroundPosition:'0% 0%'},{backgroundPosition:'-200% 0%', ease: SteppedEase.config(2), repeat: 80}, 1.1)
                .fromTo('#escena_03 .pajaroEsc03',0.2,{backgroundPosition:'0% 0%'},{backgroundPosition:'-200% 0%', ease: SteppedEase.config(2), repeat: 160}, 1.1)
                
            }; */
        }, "escena_3");
      
        ANIM.main_tl.addCallback(function () {
            ANIM.main_tl.pause();
            ANIM.interactividad(3);
            Player.activaBtnSiguiente();
            Player.tooglePlayPauseIco();
            Player.resetSubtitulos();
            Player.playSoundFX('suspenso_vertiginoso', true);
            Player.cambiaVolume('suspenso_vertiginoso', 1.0);
        }, "fin_escena_3");

        
        /*LLAMADAS Y FUNCIONES ESCENA 4*/ //<-----------------------------------------------------
        ANIM.main_tl.addCallback(function () {
            Player.hideOthersBut('escena_04');
        }, "escena_4");

        ANIM.main_tl.addCallback(function () {
            ANIM.main_tl.pause();
            ANIM.interactividad(4);
            Player.activaBtnSiguiente();
            Player.tooglePlayPauseIco();
            Player.resetSubtitulos();
        }, "fin_escena_4");
        
        
        /*LLAMADAS Y FUNCIONES ESCENA 5*/ //<-----------------------------------------------------
        ANIM.main_tl.addCallback(function () {
            Player.hideOthersBut('escena_05');
        }, "escena_5");
        
        ANIM.main_tl.addCallback(function () {
            ANIM.main_tl.pause();
            ANIM.interactividad(5);
            Player.activaBtnSiguiente();
            Player.tooglePlayPauseIco();
            Player.resetSubtitulos();
            Player.playSoundFX('musica_de_bosque_2');
            ANIM.fadeVolume('musica_de_bosque_2',1,0,15);
        }, "fin_escena_5");
        
        
        /*LLAMADAS Y FUNCIONES ESCENA 6*/ //<-----------------------------------------------------
        ANIM.main_tl.addCallback(function () {
            Player.hideOthersBut('escena_06');
        }, "escena_6");

        ANIM.main_tl.addCallback(function () {
            ANIM.main_tl.pause();
            ANIM.interactividad(6);
            Player.activaBtnSiguiente();
            Player.tooglePlayPauseIco();
            Player.resetSubtitulos();
            Player.playSoundFX('suspenso_vertiginoso');
            Player.cambiaVolume('suspenso_vertiginoso', 1.0);            
        }, "fin_escena_6");
        
        /*LLAMADAS Y FUNCIONES ESCENA 7*/ //<-----------------------------------------------------
        ANIM.main_tl.addCallback(function () {
            Player.hideOthersBut('escena_07');
        }, "escena_7");
        
        ANIM.main_tl.addCallback(function () {
            ANIM.main_tl.pause();
            ANIM.interactividad(7);
            Player.activaBtnSiguiente();
            Player.tooglePlayPauseIco();
            Player.resetSubtitulos();
        }, "fin_escena_7");

        /*LLAMADAS Y FUNCIONES ESCENA 8*/ //<-----------------------------------------------------
        ANIM.main_tl.addCallback(function () {
          Player.hideOthersBut('escena_08');
      }, "escena_8");
      
      ANIM.main_tl.addCallback(function () {
          ANIM.main_tl.pause();
          ANIM.interactividad(8);
          Player.playSoundFX('musica_de_bosque_2', true);
          Player.cambiaVolume('musica_de_bosque_2', 0.6); 
          Player.activaBtnSiguiente();
          Player.tooglePlayPauseIco();
          Player.resetSubtitulos();
      }, "fin_escena_8");
            
      ANIM.creaAnimInteractividad();
      ANIM.main_tl.pause();
    },
    //timelines de interaccion
    creaAnimInteractividad: () => {
      /********ESCENA 00 *********/
        ANIM.anim_interact_ojosBambi = new TimelineMax(); // creo la interacción
        ANIM.anim_interact_ojosBambi
          .addLabel('inicio')
          .from('#escena_00 .bambiOjoEsc00',1,{opacity:1, ease:Power4.easeInOut,repeat:15},0)
          .addLabel('final');
        ANIM.anim_interact_ojosBambi.pause(); 


        ANIM.anim_interact_madreYbambi = new TimelineMax({repeat:4}); // creo la interacción
        ANIM.anim_interact_madreYbambi
            .addLabel('inicio')
            /* .addCallback(function(){
               
            }) */
            //.to('#escena_00 .mamaCuelloEsc00',1.6,{rotation:35,ease: 'power4.out',yoyo:true},0.5)
            .to('#escena_00 .mamaCuelloEsc00',1.6,{rotation:35, repeatDelay: 2,ease: 'power2.out', duration: 1},0.5)
            .to('#escena_00 .mamaCuelloEsc00',1.6,{rotation:-20, repeatDelay: 2,ease: 'power2.out', duration: 1}, '+=0')
            .addLabel('final');
        ANIM.anim_interact_madreYbambi.pause();


        ANIM.anim_interact_pajaro = new TimelineMax(); // creo la interacción
        ANIM.anim_interact_pajaro
            .addLabel('inicio')
            .addCallback(function(){  })  

            .to('#escena_00 .colaEsc00',.6,{rotation:13,ease: 'power4.out',yoyo:true,repeat:14},0)
            //.from('#escena_00 .bambiOjoEsc00',1,{opacity:1, ease:Power4.easeInOut,repeat:20},0)
            .to('#escena_00 .pajaroVolandoEsc00', 10, {x:2500, ease:Power4.easeInOut},5)
            .fromTo('#escena_00 .pajaroVolandoEsc00', .5, {backgroundPosition:'0% 0%'},{backgroundPosition:'200% 0%', ease: SteppedEase.config(2),repeat:10},5.01)

            .addLabel('final');
        ANIM.anim_interact_pajaro.pause();


        const pez = ["#escena_01 .ojoPezEsc01","#escena_01 .pezEsc01"];
  
        /********ESCENA 01 *********/
        ANIM.anim_interact_lago = new TimelineMax(); // creo la interacción
        ANIM.anim_interact_lago
            .addLabel('inicio')
            .addCallback(function(){
                Player.playSoundFX('rio');
                //Player.cambiaVolume('martilleo_de_madera', 0.5);
                ANIM.fadeVolume('rio',1,0,27);
            })
            .set('#escena_01 .ojoConejoEsc01',{alpha:1})
            .set('#escena_01 .ojoConejoEsc01',{alpha:0},'+=0.2')
            .set('#escena_01 .ojoConejoEsc01',{alpha:1},'+=0.35')
            .set('#escena_01 .ojoConejoEsc01',{alpha:0},'+=0.2')
            .set('#escena_01 .ojoConejoEsc01',{alpha:1},'+=0.35')
            .set('#escena_01 .ojoConejoEsc01',{alpha:0},'+=0.2')
            .set('#escena_01 .ojoConejoEsc01',{alpha:1},'+=0.35')
            .set('#escena_01 .ojoConejoEsc01',{alpha:0},'+=0.2')
            .set('#escena_01 .ojoConejoEsc01',{alpha:1},'+=0.35')
            .set('#escena_01 .ojoConejoEsc01',{alpha:0},'+=0.2')
            .set('#escena_01 .ojoConejoEsc01',{alpha:1},'+=0.35')
            .set('#escena_01 .ojoConejoEsc01',{alpha:0},'+=0.2')
            .set('#escena_01 .ojoConejoEsc01',{alpha:1},'+=0.35')
            //.from('#escena_01 .ojoConejoEsc01',.9,{opacity:0, ease:Power4.easeInOut,repeat:15},0)
            //.to('#escena_01 .ojoConejoEsc01',2.5,{opacity:1, ease:Power3.easeInOut,repeat:7},0)

            .set('#escena_01 .ojoBambiEsc01',{alpha:1})
            .set('#escena_01 .ojoBambiEsc01',{alpha:0},'+=0.2')
            .set('#escena_01 .ojoBambiEsc01',{alpha:1},'+=0.35')
            .set('#escena_01 .ojoBambiEsc01',{alpha:0},'+=0.2')
            .set('#escena_01 .ojoBambiEsc01',{alpha:1},'+=0.35')
            .set('#escena_01 .ojoBambiEsc01',{alpha:0},'+=0.2')
            .set('#escena_01 .ojoBambiEsc01',{alpha:1},'+=0.35')
            .set('#escena_01 .ojoBambiEsc01',{alpha:0},'+=0.2')
            .set('#escena_01 .ojoBambiEsc01',{alpha:1},'+=0.35')
            .set('#escena_01 .ojoBambiEsc01',{alpha:0},'+=0.2')
            .set('#escena_01 .ojoBambiEsc01',{alpha:1},'+=0.35')
            .set('#escena_01 .ojoBambiEsc01',{alpha:0},'+=0.2')
            .set('#escena_01 .ojoBambiEsc01',{alpha:1},'+=0.35')

            .to('#escena_01 .colaFalinaEsc01',0.6,{rotation:27,ease:Power4.out,yoyo:true,repeat:10},0)

            //.to('#escena_01 .cabezaFalinaEsc01',1,{rotation:-15,ease: 'power4.out',yoyo:true,repeat:5},0)
            .fromTo('#escena_01 .cabezaFalinaEsc01', 3, {rotation:0}, {rotation:"+=50", yoyo:true, repeat:1, transformOrigin:"28px 268px"}, 0)
            
            .fromTo('#escena_01 .colaBambiEsc01',0.6,{backgroundPosition:'0% 0%'},{rotation:-15,ease:Power4.out,yoyo:true,repeat:16},5)
            
            //.to("#escena_01 .ojoBambiEsc01",2.5,{opacity:1, ease:Power3.easeInOut,repeat:7},0)
            //.from('#escena_01 .ojoBambiEsc01',1,{opacity:1, ease:Power4.easeInOut,repeat:9}, 1)

            .from("#escena_01 .ojoPezEsc01",1,{autoAlpha:0, delay:1.0, immediateRender:false, repeat:10},1)
            .from(pez,3,{x:100,ease:Circ.easeInOut,repeat:4,yoyo:true},1)
      
            .to('#escena_01 .pajaroVolandoEsc01', 10, {x:2500, ease:Power3.easeInOut},3.5)
            .fromTo('#escena_01 .pajaroVolandoEsc01', .5, {backgroundPosition:'0% 0%'},{backgroundPosition:'200% 0%', ease: SteppedEase.config(2),repeat:10},3.75)

            .addLabel('final');
        ANIM.anim_interact_lago.pause(); 
    


        const cuerpoEntero = ['#escena_02 .bambiCabezaEsc02','#escena_02 .bambiCuerpoEsc02','#escena_02 .bamPierDelDerEsc02','#escena_02 .bamPierDelIzqEsc02','#escena_02 .bamPierTrasDerEsc02','#escena_02 .bamPierTrasIzqEsc02'];

        const cuerpoEntero2 = ['#escena_02 .bambiCabezaEsc02','#escena_02 .bambiCuerpoEsc02','#escena_02 .bamPierDelDerEsc02','#escena_02 .bamPierDelIzqEsc02','#escena_02 .bamPierTrasDerEsc02'];

        /********ESCENA 02 *********/
        ANIM.anim_interact_patinaje = new TimelineMax(); // creo la interacción
        ANIM.anim_interact_patinaje
            .addLabel('inicio')
            .addCallback(function(){
              Player.playSoundFX('animales_patinando');
              Player.cambiaVolume('animales_patinando', 0.5);
              //ANIM.fadeVolume('rio',1,0,27);
            }, "-=2")
            .addCallback(function(){
              Player.playSoundFX('buho');
              Player.cambiaVolume('buho', 0.5);
              //ANIM.fadeVolume('rio',1,0,27);
            }, 4)

            .to('#escena_02 .conejoTornadoEsc02',5.3,{bezier: {
              type: "thru",
              values:[
                /*p1*/{ x: 0, y: 0 }, { x: -400, y: -40 }, { x: -1400, y: -130 },
                /*p2*/{ x: -1800, y: -30 } ,{ x: -2500, y: -10 }],
                 autoRotate: false
            },},0)
            .fromTo('#escena_02 .conejoTornadoEsc02',2.2,{backgroundPosition:'0% 0%'},{backgroundPosition:'200% 0%', ease: SteppedEase.config(2)},.2)


            .to('#escena_02 .ardillaEsc02',5.7,{x:-2500},.7)
            .fromTo('#escena_02 .ardillaEsc02',2.2,{backgroundPosition:'0% 0%'},{backgroundPosition:'200% 0%', ease: SteppedEase.config(2)},.9)


            .to('#escena_02 .patoEsc02',5.7,{bezier: {
              type: "thru",
              values:[
                /*p1*/{ x: 0, y: 0 }, { x: 400, y: 40 }, { x: 1400, y: 130 },
                /*p2*/{ x: 1800, y: 30 } ,{ x: 2500, y: 10 }],
                 autoRotate: false
            },},1.4)
            .fromTo('#escena_02 .patoEsc02',2.2,{backgroundPosition:'0% 0%'},{backgroundPosition:'200% 0%', ease: SteppedEase.config(2)},1.6)
           
            .to('#escena_02 .bambiCabezaEsc02',2,{x:-400, yoyo:true,repeat:5},1.8)
            .to('#escena_02 .bambiCuerpoEsc02',2,{x:-400, yoyo:true,repeat:5},1.8)

            .to('#escena_02 .bamPierDelDerEsc02',.3,{rotation:-8,transformOrigin:"center top", yoyo:true,repeat:34},1.8)
            .to('#escena_02 .bamPierDelDerEsc02',2,{x:-400, yoyo:true,repeat:5},1.8)

            .to('#escena_02 .bamPierDelIzqEsc02',.3,{rotation:8,transformOrigin:"center top", yoyo:true,repeat:34},1.8)
            .to('#escena_02 .bamPierDelIzqEsc02',2,{x:-400, yoyo:true,repeat:5},1.8)

            .to('#escena_02 .bamPierTrasDerEsc02',.3,{rotation:-8,transformOrigin:"center top", yoyo:true,repeat:34},1.8)
            .to('#escena_02 .bamPierTrasDerEsc02',2,{x:-400, yoyo:true,repeat:5},1.8)

            .to('#escena_02 .bamPierTrasIzqEsc02',.3,{rotation:8,transformOrigin:"center top", yoyo:true,repeat:34},1.8)
            .to('#escena_02 .bamPierTrasIzqEsc02',2,{x:-400, yoyo:true,repeat:5},1.8)

            //CAIDA DE BAMBI

            .to(cuerpoEntero2, .4, {y:150},13.8)
            .to('#escena_02 .bamPierTrasIzqEsc02', .4, {y:150,x:-30},13.8)
            .addCallback(function(){
              Player.playSoundFX('caida_de_hielo');
              Player.cambiaVolume('caida_de_hielo', 0.5);
              //ANIM.fadeVolume('rio',1,0,27);
            }, 13.8)
            //.to('#escena_02 .bamPierTrasDerEsc02',.7,{y:500},13.8)
            

            .to('#escena_02 .bamPierDelDerEsc02',.3,{rotation:105,transformOrigin:"center top"},14)

            .to('#escena_02 .bamPierDelIzqEsc02',.3,{rotation:-55,transformOrigin:"center top"},14)

            .to('#escena_02 .bamPierTrasDerEsc02',.3,{rotation:90,transformOrigin:"center top"},14)

            .to('#escena_02 .bamPierTrasIzqEsc02',.3,{rotation:-55,transformOrigin:"center top"},14)

            .to(cuerpoEntero,2,{x:-130, yoyo:true,repeat:2},14.3)
            .to('#escena_02 .bamPierTrasIzqEsc02',2,{x:-140, yoyo:true,repeat:2},14.3)


            .addLabel('final');
        ANIM.anim_interact_patinaje.pause();




        /********ESCENA 03 *********/
        ANIM.anim_interact_cazador = new TimelineMax(); // creo la interacción
        ANIM.anim_interact_cazador
            .addLabel('inicio')
            .addCallback(function(){
              Player.playSoundFX('disparo');
              Player.cambiaVolume('disparo', 1.0);    
            }, "-=3")
            .fromTo('#escena_03 .cazadorEsc03',1,{rotation:0}, {rotation:"+=20", yoyo:true, repeat:1}, 0)
            .to('#escena_03 .cazadorEsc03', 1, {x:600,y:0, ease:Power1.easeInOut}, 2.1)
            
            .addCallback(function(){
              Player.playSoundFX('animales_corriendo');
              //Player.cambiaVolume('animales_corriendo', 1.0);
              ANIM.fadeVolume('animales_corriendo',1,0,13);    
            }, 2.5)

            /* .fromTo("#escena_03 .fondo",60,{backgroundPosition:'100%'},{backgroundPosition:'0%', ease:Power1.easeInOut}, 0)
            
            .fromTo('#escena_03 .bambiMamaEsc03',0.4,{backgroundPosition:'0% 0%'},{backgroundPosition:'-200% 0%', ease: SteppedEase.config(2), repeat: 150}, 1.1)
            .fromTo('#escena_03 .bambiEsc03',0.4,{backgroundPosition:'0% 0%'},{backgroundPosition:'-200% 0%', ease: SteppedEase.config(2), repeat: 137}, 1.1)
            .fromTo('#escena_03 .conejoEsc03',0.4,{backgroundPosition:'0% 0%'},{backgroundPosition:'-200% 0%', ease: SteppedEase.config(2), repeat: 150}, 1.1)
            .fromTo('#escena_03 .pajaroEsc03',0.2,{backgroundPosition:'0% 0%'},{backgroundPosition:'-200% 0%', ease: SteppedEase.config(2), repeat: 600}, 1.1) */

            .fromTo("#escena_03 .fondo",15,{backgroundPosition:'50%'},{backgroundPosition:'0%', ease:Power1.easeInOut}, 0)
            //.fromTo("#escena_03 .fondo",15,{backgroundPosition:'27%'},{backgroundPosition:'0%', ease:Power1.easeInOut}, 0)
            
            .fromTo('#escena_03 .bambiMamaEsc03',0.4,{backgroundPosition:'0% 0%'},{backgroundPosition:'-200% 0%', ease: SteppedEase.config(2), repeat: 20}, 1.1)
            .fromTo('#escena_03 .bambiEsc03',0.4,{backgroundPosition:'0% 0%'},{backgroundPosition:'-200% 0%', ease: SteppedEase.config(2), repeat: 30}, 1.1)
            .fromTo('#escena_03 .conejoEsc03',0.4,{backgroundPosition:'0% 0%'},{backgroundPosition:'-200% 0%', ease: SteppedEase.config(2), repeat: 20}, 1.1)
            .fromTo('#escena_03 .pajaroEsc03',0.2,{backgroundPosition:'0% 0%'},{backgroundPosition:'-200% 0%', ease: SteppedEase.config(2), repeat: 40}, 1.1)

            .to('#escena_03 .conejoEsc03', 3, {x:-300,y:0, ease:Power1.easeInOut}, 4)
            .to('#escena_03 .conejoEsc03', 3, {x:0,y:0, ease:Power1.easeInOut}, 4)

            .to('#escena_03 .bambiMamaEsc03', 3, {x:1300,y:0, ease:Power1.easeInOut}, 6)
            .to('#escena_03 .conejoEsc03', 3, {x:1300,y:0, ease:Power1.easeInOut}, 6)
            .to('#escena_03 .pajaroEsc03', 3, {x:1000,y:0, ease:Power1.easeInOut}, 6)
            .to('#escena_03 .bambiEsc03', 5, {x:-150,y:0, ease:Power1.easeInOut}, 5.5)
            
            /* .fromTo('#escena_03 .loboEsc4',2,{backgroundPosition:'400% 0%'},{backgroundPosition:'300% 0%', ease: SteppedEase.config(1)}, 0)
            .fromTo('#escena_03 .vientoEsc4',0.6,{backgroundPosition:'300% 0%'},{backgroundPosition:'100% 0%',ease: SteppedEase.config(3), opacity:1}, 1)
            .fromTo('#escena_03 .casaEsc4',0.1,{backgroundPosition:'200% 0%'},{backgroundPosition:'100% 0%',ease: SteppedEase.config(1)}, 2)
            .to('#escena_03 .casaEsc4',1.7,{rotation:360,x:1300,ease: Power2.easeInOut}, "-=0.1")
            .to('#escena_03 .vientoEsc4',0.1,{opacity:0}, 2)
            .fromTo('#escena_03 .loboEsc4',0.5,{backgroundPosition:'0% 0%'},{backgroundPosition:'0% 0%', ease: SteppedEase.config(1)}, 3) */
            .addLabel('final');
        ANIM.anim_interact_cazador.pause();
    
        /********ESCENA 04 *********/
        ANIM.anim_interact_papaBambi = new TimelineMax(); // creo la interacción
        ANIM.anim_interact_papaBambi
            .addLabel('inicio')
            .addCallback(function(){
              Player.playSoundFX('bosque_de_noche');
              //Player.cambiaVolume('martilleo_de_madera', 0.5);
              ANIM.fadeVolume('bosque_de_noche',1,0,13);
            }, 0)
            .addCallback(function(){
              Player.playSoundFX('buho');
              Player.cambiaVolume('buho', 1.0);
            }, 3)
            

            .fromTo('#escena_04 .buhoEsc04',2,{backgroundPosition:'0% 0%'},{backgroundPosition:'200% 0%',ease: SteppedEase.config(2),repeat:5})
            .from('#escena_04 .reyCabezaEsc04',2,{rotation:-13,yoyo:true,repeat:5},0)
            .to('#escena_04 .reyColaEsc04',.6,{rotation:2,y:5,ease: 'power4.out',yoyo:true,repeat:14},0)
            .fromTo('#escena_04 .bambiEsc04',1.5,{backgroundPosition:'100% 0%'},{backgroundPosition:'0% 0%',ease: SteppedEase.config(1)},4)

            
            .addLabel('final');    
        ANIM.anim_interact_papaBambi.pause();
    
    
      const luciernagas = ['#escena_05 .luciernagaEsc05','#escena_05 .luciernaga2Esc05','#escena_05 .luciernaga3Esc05','#escena_05 .luciernaga4Esc05','#escena_05 .luciernaga5Esc05','#escena_05 .luciernaga6Esc05','#escena_05 .luciernaga7Esc05'];

      const particulas = ['#escena_05 .particulaEsc05','#escena_05 .particula2Esc05','#escena_05 .particula3Esc05','#escena_05 .particula4Esc05','#escena_05 .particula5Esc05','#escena_05 .particula6Esc05','#escena_05 .particula7Esc05'];
    
        /********ESCENA 05 *********/
       ANIM.anim_interact_enamoramiento = new TimelineMax(); // creo la interacción
       ANIM.anim_interact_enamoramiento
            .addLabel('inicio')
            .addCallback(function(){
                
            })
            .from('#escena_05 .cabezaBambiEsc05',1.5,{rotation:-10,yoyo:true,repeat:7},0)
            .to('#escena_05 .cabezaFalinaEsc05',1.5,{rotation:-6,transformOrigin:"left top",yoyo:true,repeat:7},0)
            .to(luciernagas, 5, {
              x: Math.floor( Math.random() * $(window).width()/2 ),
              y: Math.floor( Math.random() * $(window).height()/4 ),
              onComplete: function(){
                                      this.vars.css.x = Math.floor( Math.random() * $(window).width()/5 )
                                      this.vars.css.y = Math.floor( Math.random() * $(window).height()/3 )
                        
                                    },yoyo:true,repeat:2
              },0)

              .to(particulas, 5, {
                x: Math.floor( Math.random() * $(window).width()/3 ),
                y: Math.floor( Math.random() * $(window).height()/3 ),
                onComplete: function(){
                                        this.vars.css.x = Math.floor( Math.random() * $(window).width()/2 )
                                        this.vars.css.y = Math.floor( Math.random() * $(window).height()/4 )
                          
                                      },yoyo:true,repeat:2
                },0)

            .addLabel('final');
       ANIM.anim_interact_enamoramiento.pause();
    
    
       /*  ANIM.anim_interact_jadeoLobo = new TimelineMax(); // creo la interacción
        ANIM.anim_interact_jadeoLobo
            .addLabel('inicio')
            .to('#escena_05 .casaLadrilloEsc6', 0.8, { rotation: -1},5.2)
            .to('#escena_05 .vientoEsc6', 0.1, { opacity: 0 }) 
            .to('#escena_05 .loboEsc6',0.1,{opacity:0})
            .to('#escena_05 .loboJadea',0.1,{opacity:1})
            .to('#escena_05 .loboJadea',1,{scaleX:1.04, scaleY:1.04, yoyo:true, repeat:5}, 5)
            .addCallback(function(){
              Player.playSoundFX('aliento_de_lobo');
              Player.cambiaVolume('aliento_de_lobo', 1);    
            }, 5.2)
            .addLabel('final');
        ANIM.anim_interact_jadeoLobo.pause(); */



        /********ESCENA 06 *********/

        const incendio = ['#escena_06 .fuegoLomaEsc06','#escena_06 .fuegoArbolEsc06','#escena_06 .fuegoArbol2Esc06','#escena_06 .fuegoFrontalEsc06'];

        ANIM.anim_interact_incendio = new TimelineMax(); // creo la interacción
        ANIM.anim_interact_incendio
            .addLabel('inicio')
            .addCallback(function(){
              Player.playSoundFX('incendio_de_bosqueo');
              //Player.cambiaVolume('incendio_de_bosqueo', 0.5);
              ANIM.fadeVolume('incendio_de_bosqueo',0.6,0,7);
            })
            
            .fromTo(incendio,.8,{backgroundPosition:'0% 0%'},{backgroundPosition:'200% 0%', ease: SteppedEase.config(2),repeat:11})

            .fromTo('#escena_06 .cabezaBambiEsc06',1.5,{backgroundPosition:'0% 0%'},{backgroundPosition:'200% 0%', ease: SteppedEase.config(2),repeat:4},.5)
            .fromTo('#escena_06 .cabezaFalinaEsc06',1.5,{backgroundPosition:'0% 0%'},{backgroundPosition:'200% 0%', ease: SteppedEase.config(2),repeat:4},.8)
            .addCallback(function(){
              Player.playSoundFX('animales_corriendo');
              //Player.cambiaVolume('incendio_de_bosqueo', 0.5);
              ANIM.fadeVolume('animales_corriendo',1,0,7);
            }, 0.9)
            .to('#escena_06 .pajaroEsc06', 9, {x:-2800, ease:Power2.easeInOut},.5)
            .fromTo('#escena_06 .pajaroEsc06', .3, {backgroundPosition:'0% 0%'},{backgroundPosition:'200% 0%', ease: SteppedEase.config(2),repeat:33},.45) //73

            .to('#escena_06 .ardillaEsc06', 9.5, {x:-2800, ease:Power2.easeInOut},.7)
            .fromTo('#escena_06 .ardillaEsc06', .5, {backgroundPosition:'0% 0%'},{backgroundPosition:'200% 0%', ease: SteppedEase.config(2),repeat:10},.65) //50

            .to('#escena_06 .conejoEsc06', 9.5, {x:-2800, ease:Power2.easeInOut},.9)
            .fromTo('#escena_06 .conejoEsc06', .5, {backgroundPosition:'0% 0%'},{backgroundPosition:'200% 0%', ease: SteppedEase.config(2),repeat:10},.85) //50
            .addLabel('final');
        ANIM.anim_interact_incendio.pause();



        /********ESCENA 07 *********/
        ANIM.anim_intercat_familia = new TimelineMax(); // creo la interacción
        ANIM.anim_intercat_familia
            .addLabel('inicio')
            .addCallback(function(){
              Player.playSoundFX('musica_de_bosque');
              //Player.cambiaVolume('musica_de_bosque', 0.5);
              ANIM.fadeVolume('musica_de_bosque',0.9,0,12);
            })
            .fromTo('#escena_07 .parejaEsc07', 2.5, {backgroundPosition:'0% 0%'},{backgroundPosition:'200% 0%',repeat:2, ease: SteppedEase.config(2)})
            .fromTo('#escena_07 .cria1Esc07', 1, {backgroundPosition:'200% 0%'},{backgroundPosition:'100% 0%', ease: SteppedEase.config(1)},0)
            .fromTo('#escena_07 .cria2Esc07', 1, {backgroundPosition:'200% 0%'},{backgroundPosition:'100% 0%', ease: SteppedEase.config(1)},0)

            .addLabel('final');
        ANIM.anim_intercat_familia.pause();
    
    
    
        /********ESCENA 07 *********/
        ANIM.anim_interact_huidaLobo = new TimelineMax(); // creo la interacción
        ANIM.anim_interact_huidaLobo
            .addLabel('inicio')
            .addCallback(function(){
                  
            })
            
            .addLabel('final')
        ANIM.anim_interact_huidaLobo.pause();


        /********ESCENA 08 *********/

         
        const mariposasRojas = ["#escena_08 .mariposaRoja","#escena_08 .mariposaRoja2","#escena_08 .mariposaRoja3","#escena_08 .mariposaRoja4"];

        const mariposasAmarillas = ["#escena_08 .mariposaAmarilla","#escena_08 .mariposaAmarilla2","#escena_08 .mariposaAmarilla3","#escena_08 .mariposaAmarilla4"];

        const mariposasAzules = ["#escena_08 .mariposaAzul","#escena_08 .mariposaAzul2","#escena_08 .mariposaAzul3","#escena_08 .mariposaAzul4"];

        ANIM.anim_interact_escenaFinal = new TimelineMax(); // creo la interacción
         ANIM.anim_interact_escenaFinal
            .addLabel('inicio')
            .addCallback(function(){
              //Player.playSoundFX('musica_de_bosque_2');
              //Player.cambiaVolume('musica_de_bosque', 0.5);
              //ANIM.fadeVolume('musica_de_bosque_2',1.0,0,31);
            })
          
            .to(mariposasRojas, 5, {
              x: Math.floor( Math.random() * $(window).width()/2.5 ),
              y: Math.floor( Math.random() * $(window).height()/2.5 ),
              onComplete: function(){
                                      this.vars.css.x = Math.floor( Math.random() * $(window).width()/2.5 )
                                      this.vars.css.y = Math.floor( Math.random() * $(window).height()/2.5 )
                        
                                    },yoyo:true,repeat:3
              },0)
            .fromTo(mariposasRojas, .5, {backgroundPosition:'0% 0%'},{backgroundPosition:'200% 0%',repeat:40, ease: SteppedEase.config(2)},0)


            .to(mariposasAmarillas, 5, {
                x: Math.floor( Math.random() * $(window).width()/4 ),
                y: Math.floor( Math.random() * $(window).height()/4 ),
                onComplete: function(){
                                        this.vars.css.x = Math.floor( Math.random() * $(window).width()/4 )
                                        this.vars.css.y = Math.floor( Math.random() * $(window).height()/4)
                                       
                                      },yoyo:true,repeat:3
                },0)

            .fromTo(mariposasAmarillas, .5, {backgroundPosition:'0% 0%'},{backgroundPosition:'200% 0%',repeat:40, ease: SteppedEase.config(2)},0)

            .to(mariposasAzules, 5, {
              x: Math.floor( Math.random() * $(window).width()/5 ),
              y: Math.floor( Math.random() * $(window).height()/5 ),
              onComplete: function(){
                                      this.vars.css.x = Math.floor( Math.random() * $(window).width()/5 )
                                      this.vars.css.y = Math.floor( Math.random() * $(window).height()/5 )
                                     
                                    },yoyo:true,repeat:3
              },0)

          .fromTo(mariposasAzules, .5, {backgroundPosition:'0% 0%'},{backgroundPosition:'200% 0%',repeat:40, ease: SteppedEase.config(2)},0)

            .from('#escena_08 .cabezaBambiEsc_08',2,{rotation:-5,yoyo:true,repeat:8},1)
            .from('#escena_08 .ojoConejoEsc08', 1, {autoAlpha: 0,repeat:11,ease:Power2.easeOut},2.5)
            .addLabel('final')
         ANIM.anim_interact_escenaFinal.pause(); 




    
        //Array de anin interacts
        ANIM.arr_interacts = [
            ANIM.anim_interact_madreYbambi,
            ANIM.anim_interact_ojosBambi,
            ANIM.anim_interact_pajaro,
            ANIM.anim_interact_lago,
            ANIM.anim_interact_patinaje,
            ANIM.anim_interact_cazador,
            ANIM.anim_interact_papaBambi,
            ANIM.anim_interact_enamoramiento, //escena_05
            ANIM.anim_interact_incendio,
            ANIM.anim_intercat_familia, //escena_07
            ANIM.anim_interact_escenaFinal,
            
        ];

      
        ANIM.setIniciales();
        },
    
        pausaInteractividad: () => {
        ANIM.arr_interacts.map((anim) => {
            // y como la interacción está acá las pauso todas al mismo tiempo a voluntad
            anim.pause();
            anim.eventCallback('onComplete', null); //<--- para matar los eventos de onComplete para evitar que muestren los botones en otra escenas
        });
    
        ANIM.setIniciales();
        },
        setIniciales:() => {
            //estado inicial
            //TweenMax.killTweensOf("#escena_00 .stuff");
            //TweenMax.set('#escena_00 .interact',{scale:1, transformOrigin:'1280px 395px'});
            TweenMax.set('#escena_03 .bambiMamaEsc03',{x:0,y:0, backgroundPosition:'0% 0%'})
            TweenMax.set('#escena_03 .conejoEsc03',{x:0,y:0, backgroundPosition:'0% 0%'})
            TweenMax.set('#escena_03 .pajaroEsc03',{x:0,y:0, backgroundPosition:'0% 0%'})
            TweenMax.set('#escena_03 .bambiEsc03',{x:0,y:0, backgroundPosition:'0% 0%'})
            TweenMax.set('#escena_03 .cazadorEsc03',{x:0,y:0})
            TweenMax.set('#escena_03 .fondo',{css: {backgroundPosition: "50%"}})
           
            ANIM.pauseWaitSound();
            ANIM.pauseAnimaciones();
            $('.indicador_interactividad').css({'display':'none'});
            
        },
        displayInteract: (cualEscena) => {
        $(cualEscena + ' .interact').css({ display: 'block' });
        },
    
        interactividad: (
        nEscena,
        callback = undefined,
        btn_especifico = 'primario'
        ) => {
        let i_st = nEscena > 9 ? nEscena : `0${nEscena}`;
    
        //        console.log(i_st);
    
        var btn = $('#escena_' + i_st + ' .btn_interact.' + btn_especifico);
        var cb = callback;
        btn.css({ display: 'block' });
        TweenMax.fromTo(btn, 1, { alpha: 0 }, { alpha: 1 });
        let muestralo = (div, cbb) => {
            if (cbb !== undefined) {
            cbb();
            }
            div.css({ display: 'block' });
        };
        switch (nEscena) { 
            case 0:

            if (btn.hasClass('primario')) {
                btn.click(function () {
                $(this).css({ display: 'none' });
                ANIM.anim_interact_ojosBambi.eventCallback('onComplete', muestralo, [
                    $(this),
                    cb,
                ]);
                ANIM.anim_interact_ojosBambi.play(0);
                });
            }

            if (btn.hasClass('primario')) {
                btn.click(function () {
                $(this).css({ display: 'none' });
                ANIM.anim_interact_madreYbambi.eventCallback('onComplete', muestralo, [
                    $(this),
                    cb,
                ]);
                ANIM.anim_interact_madreYbambi.play(0);
                });
            }


            if (btn.hasClass('primario')) {
              btn.click(function () {
              $(this).css({ display: 'none' });
              ANIM.anim_interact_pajaro.eventCallback('onComplete', muestralo, [
                  $(this),
                  cb,
              ]);
              ANIM.anim_interact_pajaro.play(0);
              });
          }
            break;
    
            case 1:
            if (btn.hasClass('primario')) {
                btn.click(function () {
                $(this).css({ display: 'none' });
                ANIM.anim_interact_lago.eventCallback(
                    'onComplete',
                    muestralo,
                    [$(this), cb]
                );
                ANIM.anim_interact_lago.play(0);
                });
            }
            break;
    
            case 2:
            if (btn.hasClass('primario')) {
                btn.click(function () {
                $(this).css({ display: 'none' });
                ANIM.anim_interact_patinaje.eventCallback('onComplete', muestralo, [
                    $(this),
                    cb,
                ]);
                ANIM.anim_interact_patinaje.play(0);
                });
            }
    
            break;
    
            case 3:
                if(btn.hasClass('primario')){
                    btn.click(function(){
                        $(this).css({"display":"none"});
                        ANIM.anim_interact_cazador.eventCallback("onComplete", muestralo, [$(this), cb]);   
                        ANIM.anim_interact_cazador.play(0);
                    });
                    }
                    
                    break;
    
            case 4:
            if (btn.hasClass('primario')) {
                btn.click(function () {
                $(this).css({ display: 'none' });
                ANIM.anim_interact_papaBambi.eventCallback('onComplete', muestralo, [
                    $(this),
                    cb,
                ]);
                ANIM.anim_interact_papaBambi.play(0);
                });
            }
    
            break;
    
            case 5:
            if (btn.hasClass('primario')) {
                btn.click(function () {
                $(this).css({ display: 'none' });
               ANIM.anim_interact_enamoramiento.eventCallback('onComplete', muestralo, [
                    $(this),
                    cb,
                ]);
               ANIM.anim_interact_enamoramiento.play(0);
                });
            }
    
            break;

            case 6:
            if (btn.hasClass('primario')) {
                btn.click(function () {
                $(this).css({ display: 'none' });
                ANIM.anim_interact_incendio.eventCallback('onComplete', muestralo, [
                    $(this),
                    cb,
                ]);
                ANIM.anim_interact_incendio.play(0);
                });
            }  
            break;

            case 7:
              if (btn.hasClass('primario')) {
                  btn.click(function () {
                  $(this).css({ display: 'none' });
                  ANIM.anim_intercat_familia.eventCallback('onComplete', muestralo, [
                      $(this),
                      cb,
                  ]);
                  ANIM.anim_intercat_familia.play(0);
                  });
              }  
              break;

              case 8:
              if (btn.hasClass('primario')) {
                  btn.click(function () {
                  $(this).css({ display: 'none' });
                  ANIM.anim_interact_escenaFinal.eventCallback('onComplete', muestralo, [
                      $(this),
                      cb,
                  ]);
                  ANIM.anim_interact_escenaFinal.play(0);
                  });
              }  
              break;
        }
        },
        compensaEscenas: (d) => {
        // ESTA FUNCIÓN HAY QUE CONFIGURARLA A MANO POR CADA ESCENA QUE LO NECESITE
        // (EN ESTE CASO LA ILUSTRACIÓN SE PERDÍA POR ARRIBA, POR ESO ESE COMPENSA POR TOP,
        // SI FUESE AL REVÉS COMPENSARÍA POR BOTTOM)
        let dif = Math.abs(d);
        //        $('#escena_00').css({'bottom':dif+'px'});
        //        $('#escena_01').css({'top':dif+'px'});
        //        $('#escena_02').css({'bottom':dif+'px'});
        //        $('#escena_03').css({'bottom':dif+'px'});
        //        $('#escena_04').css({'bottom':dif+'px'});
        //        $('#escena_05').css({'bottom':dif+'px'});
        //        $('#escena_07').css({'bottom':dif+'px'});
        //        $('#escena_08').css({'bottom':dif+'px'});
        //        $('#escena_09').css({'bottom':dif+'px'});
        //        $('#escena_10').css({'bottom':dif+'px'});
        },
        /*↑↑↑↑ HASTA LA ANTERIOR ↑↑↑↑↑*/
    };
    