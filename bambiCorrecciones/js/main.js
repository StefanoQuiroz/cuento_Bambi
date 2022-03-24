const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const lenguaje = urlParams.get('lenguaje');
//let lenguaje = 'EN';
let IDIOMA;
try{
    IDIOMA = lenguaje ? `_${lenguaje.toLowerCase()}` : '';
    if(IDIOMA === '_es'){IDIOMA = '';}
} catch(err){
    lenguaje = '';
    IDIOMA = lenguaje ? `_${lenguaje.toLowerCase()}` : '';
    console.log('IDIOMA:',IDIOMA, 'LENGUAJE:',lenguaje);
}
console.log('IDIOMA:',IDIOMA,"_");

let touchstartX = 0;
let touchstartY = 0;
let touchendX = 0;
let touchendY = 0;
let umbralX = 75;
let umbralY = 75;
const gestureZone = document.getElementById('tutorial');

gestureZone.addEventListener('touchstart', function(event) {
    touchstartX = event.changedTouches[0].screenX;
    touchstartY = event.changedTouches[0].screenY;
}, false);

gestureZone.addEventListener('touchend', function(event) {
    touchendX = event.changedTouches[0].screenX;
    touchendY = event.changedTouches[0].screenY;
    handleGesture();
}, false);

let handleGesture = () => {

    if(Math.abs(touchendX - touchstartX) > umbralX){
        if (touchendX < touchstartX) {
            Tutorial.moveSlider('l');
        }
        if (touchendX > touchstartX) {
            Tutorial.moveSlider('r');
        }
    }

    if(Math.abs(touchendY - touchstartY) > umbralY){
        if (touchendY < touchstartY) {
//            console.log('Swiped up');
        }
        if (touchendY > touchstartY) {
//           console.log('Swiped down');
        }
    }

    if (touchendY === touchstartY) {
//       console.log('Tap');
    }
}

let Front = {
    w:0,
    h:0,
    resizeListener : (w = 1920, h = 1080) => {
        this.w = w;
        this.h = h;
        document.getElementById("cuento").style.height = `${this.h}px`;
       
        var a = 1920,
        b = 1080,
        c = w > h ? w : h,
        d;
        d = c*(b/a);
        
        let s =  w / a;
        let dif = (h-(b*s))/2;
        TweenMax.to("#escenario",0.3,{scale:s,transformOrigin:"top left"});
        
        try{  
            if(!Player.senaOculta){
                TweenMax.to("#senas_container",0.3,{scale:s,transformOrigin:"bottom right"});
            }
        } catch (err){}
        
        if(Utils.isMobile && w <= 823){
            try{
                TweenMax.to('.controllers_container',0.3,{scale:1.4,transformOrigin:'bottom center'});
            } catch (err){}
        } else {
            try{
                TweenMax.to('.controllers_container',0.3,{scale:1,transformOrigin:'bottom center'});
            } catch (err){}
        }
        
        $('#escenario').css({'top':dif+'px'});

        try{
            if(h<b*s){
                ANIM.compensaEscenas(dif);
            } else {
                ANIM.compensaEscenas(0);
            }
        } catch (err){
            
        }
//        console.log('RESIZE LISTENER');
    },
    lookFullScreen:(e) => {
        let doc = window.document;
        let docEl = doc.documentElement;

        let requestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
        if(!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
            $('.btn_fullscreen .ir_full').css({'display':"block"});
            $('.btn_fullscreen .volver_full').css({'display':"none"});
            $('.btn_fullscreen').attr('data_tooltip','Ir a Pantalla Completa');
        } else {
            $('.btn_fullscreen .ir_full').css({'display':"none"});
            $('.btn_fullscreen .volver_full').css({'display':"block"});
            $('.btn_fullscreen').attr('data_tooltip','Salir de Pantalla Completa');
        }
    },
    toogleFullScreen:() => {
        let doc = window.document;
        let docEl = doc.documentElement;

        let requestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;

        if(!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
            requestFullScreen.call(docEl);

        } else {
            if (doc.exitFullscreen) {
                doc.exitFullscreen();
              } else if (doc.mozCancelFullScreen) { /* Firefox */
                doc.mozCancelFullScreen();
              } else if (doc.webkitExitFullscreen) { /* Chrome, Safari and Opera */
                doc.webkitExitFullscreen();
              } else if (doc.msExitFullscreen) { /* IE/Edge */
                doc.msExitFullscreen();
              }

        }

    }
};

let Utils = {
    isMobile: () => {
        let isMobile = false; //initiate as false
        if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))){isMobile = true;}

        return isMobile;
    },
    randomInt:(min=100, max=500) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    hasClass:(div, clase) => {
        let bol =  div.classList.contains(clase);
        return bol;
    }
}

let Player = {
    escena_actual:0,
    parrafo_actual:0,
    audios_parrafo:[],
    audios_fx:[],
    conAudio:true,
    conVideo:false,
    senasVisible:false,
    onPlayer:true,
    senaOculta:false,
    MAX_SCALE_VIDEO_SENAS:1.2,
    MIN_SCALE_VIDEO_SENAS:0.6,
    DEFAULT_ALPHA_VIDEO_SENAS:70,
    MIN_ALPHA_VIDEO_SENAS:20,
    MAX_ALPHA_VIDEO_SENAS:100,
    TIEMPO_CIERRE_ALPHA_VIDEO:2,
    POS_VIDEO_SENAS:{x:0,y:0},
    setTooltip:(text, div, cual='bajo') => {
        if(!Utils.isMobile()){
            Front.resizeListener(window.innerWidth, window.innerHeight);
            let pos = div.offset();
            let tt = document.getElementById(`tooltip_${cual}`);
            tt.getElementsByTagName('p')[0].innerHTML = text;
            tt.style.display = 'block';
            let w = tt.offsetWidth - div.width();
            let x = pos.left - (w *0.5);
            let y = pos.top - 40;
            let triangulito = tt.getElementsByClassName('triangulito')[0];
            let xTriangulito = 0;

            if(x+tt.offsetWidth > window.innerWidth){
                let xant = x;
                x = window.innerWidth - tt.offsetWidth;
                xTriangulito = (xant-x);
            }

            if(cual === 'alto'){
                let img = div.attr('data_miniatura');
                document.getElementById('image_tooltip').src = img;
            }
            TweenMax.fromTo(tt,0.5,{alpha:0, left:x, top:y+5},{alpha:1,left:x, top:y});
            TweenMax.to(triangulito,0.5,{x:xTriangulito});
            $("#player_container").css({"z-index":"5"});
            $("#subtitulos").css({"z-index":"4"});
        }
    },
    hideToolTip:() => {
        let tt = document.getElementsByClassName('tooltip');
        for(let i = 0; i < tt.length;i++){
            tt[i].style.display = 'none';
        }
        $("#subtitulos").css({"z-index":"5"});
    },
    forceClosePlayer:() => {
        Player.temp = {n:0};
        TweenMax.killTweensOf(Player.temp);
        TweenMax.to(Player.temp, 1, {n:1, onComplete:function(){
            Player.tooglePlayer('close');
        }});
    },
    tooglePlayer:(accion = 'open') => {
        TweenMax.killTweensOf("#btn_abrir_player");
        TweenMax.killTweensOf("#player");
        TweenMax.killTweensOf("#subtitulos");
        TweenMax.killTweensOf("#marcador_escena");
        if(accion == "open"){
            let w = window.innerWidth;
            let bt = w > 822 ? 100 : 60;
            TweenMax.to("#subtitulos",0.3,{bottom:bt});
            TweenMax.to("#btn_abrir_player",0.1,{bottom:-32});
            TweenMax.to("#player",0.3,{marginTop:0});
            TweenMax.to("#marcador_escena",0.3,{alpha:0});
            if(Utils.isMobile()){
                Player.forceClosePlayer();
            }
        } else {
            TweenMax.to("#subtitulos",1.3,{bottom:40, delay:1});
            TweenMax.to("#btn_abrir_player",0.3,{bottom:0, delay:1.4});
            TweenMax.to("#player",1.7,{marginTop: 183, delay:1, onStart:function(){
                Player.toogleListadoEscena('close');
                Player.toogleConfigurador('close');
                TweenMax.to("#marcador_escena",0.3,{alpha:1});
            }});
        }
    },
    toogleListadoEscena:(accion = 'open') => {
        TweenMax.killTweensOf("#container_desplegable");
        TweenMax.killTweensOf(Player.temp);
        switch (accion){
            case 'open':
                if($('#desplegable_escenas_container').hasClass('close')){
                    $('#desplegable_escenas_container').removeClass('close').addClass('open');
                }
                if(!$('#title_container').hasClass('open')){
                    $('#title_container').addClass('open');
                }
                break;
            case 'close':
                $("#container_desplegable").css({"z-index":"4"});
                $("#subtitulos").css({"z-index":"5"});
                if($('#desplegable_escenas_container').hasClass('open')){
                    $('#desplegable_escenas_container').removeClass('open').addClass('close');
                }
                if($('#title_container').hasClass('open')){
                    $('#title_container').removeClass('open');
                }
                TweenMax.to("#container_desplegable", 0.1,{height:0,delay:0.6, transformOrigin:"center bottom"});
                if(Utils.isMobile()){
                    Player.forceClosePlayer();
                }
                break;
            case 'toogle':

                if($('#desplegable_escenas_container').hasClass('close')){
                    $("#container_desplegable").css({"z-index":"5"});
                    $("#subtitulos").css({"z-index":"4"});
                    $('#desplegable_escenas_container').removeClass('close').addClass('open');
                    if(!$('#title_container').hasClass('open')){
                        $('#title_container').addClass('open');
                    }
                    TweenMax.to("#container_desplegable", 0.1,{height:515, transformOrigin:"center bottom"});
                    if(Utils.isMobile()){
                        Player.forceClosePlayer();
                    }
                } else if($('#desplegable_escenas_container').hasClass('open')){
                    $("#container_desplegable").css({"z-index":"4"});
                    $("#subtitulos").css({"z-index":"5"});
                    $('#desplegable_escenas_container').removeClass('open').addClass('close');
                    if($('#title_container').hasClass('open')){
                        $('#title_container').removeClass('open');
                    }
                    TweenMax.to("#container_desplegable", 0.1,{height:0,delay:0.6, transformOrigin:"center bottom"});

                }
                break;
        }
    },
    toogleConfigurador:(accion = 'open') => {
        switch (accion){
            case 'open':
                if($('#configurador').hasClass('close')){
                    $('#configurador').removeClass('close').addClass('open');
                }
                if($('#container_configurador').hasClass('close')){
                    $('#container_configurador').removeClass('close').addClass('open');
                }
                break;
            case 'close':
                if($('#configurador').hasClass('open')){
                    $('#configurador').removeClass('open').addClass('close');
                }
                if($('#container_configurador').hasClass('open')){
                    $('#container_configurador').removeClass('open').addClass('close');
                }
                break;
            case 'toogle':
                if($('#configurador').hasClass('close')){
                    $('#configurador').removeClass('close').addClass('open');
                } else if($('#configurador').hasClass('open')){
                    $('#configurador').removeClass('open').addClass('close');
                }
                if($('#container_configurador').hasClass('close')){
                    $('#container_configurador').removeClass('close').addClass('open');
                } else if($('#container_configurador').hasClass('open')){
                    $('#container_configurador').removeClass('open').addClass('close');
                }
                break;
        }
    },
    checkCheck:(nombre, chequeado) => {
        if(!chequeado){
            if(nombre === 'check_subtitulos'){
                $('#check_relato').prop("checked",true);
            } else {
                $('#check_subtitulos').prop("checked",true);
            }
        }

        let con_audio = $('#check_relato').is(':checked');
        let con_subtitulos = $('#check_subtitulos').is(':checked');

//        console.log(con_subtitulos,con_audio);
        Player.toogleSubtitulos(con_subtitulos);
        Player.toogleAudio(con_audio);
    },
    toogleSubtitulos:(ver) => {
        if(ver){
           $('#subtitulos').show();
        }  else {
           $('#subtitulos').hide();
        }
    },
    toogleAudio:(ver) => {
        Player.conAudio = ver;
        Player.stopAudioParrafo();
    },
    creaListadoEscenas:(arr) => {
        let newArr = arr.map((item, i) => {
            let i_st = i > 8 ? (i+1) : `0${(i+1)}`;
            return `<div class="item_listado_escena" data_escena="${i}" data_nombre="${item.nombre}">
                        <div class="img_cont">
                            <img src="${item.miniatura}" alt="miniatura">
                        </div>
                        <div class="play"></div>
                        <span class="n_escena">${i_st}.</span>
                        <p class="titulo_escena">${item.nombre}</p>
                    </div>`;
        });
        return newArr.join("");
    },
    creaPuntosEscenas: (arr) => {
        let newArr = arr.map((item, i) => {
            let i_st = i > 8 ? (i+1) : `0${(i+1)}`;
            return `<div class="punto" data_escena="${i}" data_nombre="${item.nombre}" data_miniatura="${item.miniatura}" data_tooltip="${i_st} ${item.nombre}">
                        <div class="borde"></div>
                        <div class="centro"></div>
                    </div>`;
        });

        return newArr.join("");
    },
    setCurrent: (nEscena, nombreEscena) => {
        $(".item_listado_escena").each(function(){
            if($(this).hasClass('current')){
                $(this).removeClass('current');
            }
            if($(this).attr('data_escena') == nEscena){
              $(this).addClass('current');
            }
        });
        $("#punto_escena_container .punto").each(function(){
            if($(this).hasClass('current')){
                $(this).removeClass('current');
            }
            if($(this).attr('data_escena') == nEscena){
              $(this).addClass('current');
            }
        });

        $("#title_container .nombre_escena").text(nombreEscena);

        let i_st = nEscena > 8 ? (nEscena+1) : `0${(nEscena+1)}`;
        $("#marcador_escena .actual p").text(i_st);
    },
    nextScene:() => {
        let arrEscenas = JSON_CUENTO.escenas;
        if(Player.escena_actual < arrEscenas.length-1){
            let i = Player.escena_actual + 1;
            Player.setScene( i, arrEscenas[i].nombre);
            Player.playSoundParrafo(i,0,true);
        } else {
            //console.log("FIN");
        }
        ANIM.pausaInteractividad();
        Player.tooglePlayPauseIco();
    },
    prevScene:() => {
        let arrEscenas = JSON_CUENTO.escenas;
        if(Player.escena_actual > 0){
            let i = Player.escena_actual - 1;
            Player.setScene( i, arrEscenas[i].nombre);
            Player.playSoundParrafo(i,0,true);
        }
        ANIM.pausaInteractividad();
        Player.tooglePlayPauseIco();
    },
    nextParrafo:() => {
        let arrEscenas = JSON_CUENTO.escenas;
        let arrParrafos = arrEscenas[Player.escena_actual][`parrafos${IDIOMA}`];
        Player.desActivaBtnSiguiente();
        Player.resetBotonesInteraccion();
        if(Player.parrafo_actual < arrParrafos.length-1){
//            console.log("NEXT actual es", Player.parrafo_actual);
            let i = Player.parrafo_actual + 1;
            Player.setParrafo( i );
            Player.putSubtitulos(Player.escena_actual, Player.parrafo_actual);
            let label = `${Player.escena_actual}_${Player.parrafo_actual}`;
            
            Player.playVideo(Player.getTimeVideoFromLabel(label));
           
            ANIM.main_tl.pause();
            ANIM.main_tl.resume(label, false);
        }
        ANIM.pausaInteractividad();
        Player.tooglePlayPauseIco();
    },
    prevParrafo:() => {
        let arrEscenas = JSON_CUENTO.escenas;
        
        Player.desActivaBtnSiguiente();
        Player.resetBotonesInteraccion();
        if(Player.parrafo_actual > 0){
//            console.log("PREV actual es", Player.parrafo_actual);
            let i = Player.parrafo_actual - 1;
            Player.setParrafo( i );
            Player.putSubtitulos(Player.escena_actual, Player.parrafo_actual);
             let label = `${Player.escena_actual}_${Player.parrafo_actual}`;
            
            Player.playVideo(Player.getTimeVideoFromLabel(label));
            
            ANIM.main_tl.pause();
            ANIM.main_tl.resume(label, true);
        }
        ANIM.pausaInteractividad();
        Player.tooglePlayPauseIco();
    },
    setScene:(nEscena, nombreEscena, seteando=false) => {
//        console.log("SETEANDO ESCENA");
        Player.stopAudioParrafo();
        Player.resetSubtitulos();
        Player.resetBotonesInteraccion();
        Player.escena_actual = nEscena;
        Player.setCurrent(nEscena, nombreEscena);
        Player.setParrafo(0);
        Player.desActivaBtnSiguiente();
        if(Player.conVideo){
            Player.ponVideo(nEscena);
            Player.playVideo();
        }
        if(!seteando){
            let label = 'escena_'+nEscena.toString();
            ANIM.main_tl.play(label);
        }
        Player.onPlayer = true;
        try{
            dataLayer.push({ nombreCuento: JSON_CUENTO[`nombre${IDIOMA}`] }, { nombreEscena: nombreEscena }, { event: "cambio de escena" });
        } catch (err){
            console.log('DATALAYER',err.message);
        }
    },
    setParrafo:(nParrafo = 0) => {
        Player.parrafo_actual = nParrafo;
    },
    playSoundParrafo: (i, j, muted = false) => {
        Player.escena_actual = i;
        Player.setParrafo(j);
        Player.stopAudioParrafo();
        if(Player.conAudio){
            try{
               let sound = createjs.Sound.play(`audio_${i}_${j}`);
                if(muted){
                    sound.volume = 0;
                } else {
                    sound.volume = 1;
                }
            }  catch (err){
                console.log(err);
            }
        }
    },
    stopAudioParrafo:() => {
      createjs.Sound.stop();
        ///// CREAR UN "DISCRIMINADOR" DE AUDIOS DE TEXTO Y DE FX
    },
    arr_SOUNDS_FX:[],
    playSoundFX: (cual, loop = false) => {
        let sound;
        if(loop){
            sound = createjs.Sound.play(cual, {interrupt: createjs.Sound.INTERRUPT_ANY, loop:-1});
        } else {
            sound = createjs.Sound.play(cual); 
        }
        Player.arr_SOUNDS_FX.push({sound:sound, id : cual});
    },
    cambiaVolume:(cual = 'musica_', vol = 0.1) => {
        let todasLasVeces = Player.arr_SOUNDS_FX.filter(id => id.id === cual);
        try{   
            let miAudio = todasLasVeces[todasLasVeces.length-1].sound;
            miAudio.volume = vol;
        } catch(err){
            console.log(err.message);
        }    
    },
    putSubtitulos: (nEscena, nParrafo) => {
        let st = JSON_CUENTO.escenas[nEscena][`parrafos${IDIOMA}`][nParrafo].texto;
        console.log("SUBS", nEscena, nParrafo, st);
        $("#subtitulos p").html(st);
    },
    resetSubtitulos:() => {
        $("#subtitulos p").html('');
    },
    resetBotonesInteraccion:() => {
        $('.btn_interact').css({'display':'none'});
    },
    tooglePlayPauseIco:() => {
         if(ANIM.main_tl.paused()){
            $('#player_btn_play_pause .play').css({'display':"block"});
            $('#player_btn_play_pause .pause').css({'display':"none"});
        } else {
            $('#player_btn_play_pause .play').css({'display':"none"});
            $('#player_btn_play_pause .pause').css({'display':"block"});
         }
    },
    tooglePlayPause:() => {
        if(ANIM.main_tl.paused()){
            let label = ANIM.main_tl.getLabelBefore();
            let esFin = label.indexOf('fin');
            if(esFin === -1){
                Player.playVideo(Player.getTimeVideoFromLabel(label));
                ANIM.main_tl.play(label);
            } else {
                Player.nextScene();
            }
        } else {
            Player.pauseVideo();
            ANIM.main_tl.pause();
            Player.stopAudioParrafo();
            Player.resetSubtitulos();
        }
        Player.tooglePlayPauseIco();
    },
    loadAudioImages:(arr, arrfx, arrImg) => {
        let tmp = arr.map((item, i) => {
//            console.log('wat:',item);
             return  {
                        src:item[`audio${IDIOMA}`], data: {
                            audioSprite: item[`parrafos${IDIOMA}`].map((obj,j) => {
                                let duration = (obj.tiempo[1] - obj.tiempo[0])*1000;
                                return {id:`audio_${i}_${j}`, startTime:(obj.tiempo[0]*1000), duration:duration}
                            })
                    }
            };
        });
        
//        console.log('TMP:',tmp);
        
        let tmp2 = arr.filter((item, i) => {
//            console.log(item.video);
             if(item[`video${IDIOMA}`] !== undefined){
                return item;
             }
        });
        
        let arrVideos = tmp2.map((item,i) => {
             return  {src:item.video, id:`video_${i}`,type : createjs.AbstractLoader.BINARY};
        });
        
//        console.log('ARR VIDEOS',arrVideos);
        if(arrVideos.length > 0){
            Player.conVideo = true;
            Player.openSenas();
            let valores = {
                value:Player.DEFAULT_ALPHA_VIDEO_SENAS-Player.MIN_ALPHA_VIDEO_SENAS,
                maxValue:Player.MAX_ALPHA_VIDEO_SENAS-Player.MIN_ALPHA_VIDEO_SENAS,
                w:110,
                h:12,
                decimales:0,
                hknob:18,
                colorknob:'#ffffff',
                colorfondo:'#ffffff',
                colorbarra:'#4C6172'
            };
            Slider.init("#alpha_slider", valores, Player.alphaVideoListener);
            Player.setAlphaVideo(Player.DEFAULT_ALPHA_VIDEO_SENAS-Player.MIN_ALPHA_VIDEO_SENAS, `${Player.DEFAULT_ALPHA_VIDEO_SENAS}%`);
            App.setSenasControllers();
        } else {
            Player.closeSenas();
        }

        Player.audios_parrafo = tmp.map((item, i) => {
             return createjs.Sound.registerSound(item);
        });
        
       

        Player.audios_fx = arrfx.map((item) => {
            return createjs.Sound.registerSound(item.url, item.nombre);
        });

        let arrCompleto = Player.audios_parrafo.concat(Player.audios_fx,arrImg, arrVideos);
//        console.log('arrCompleto',arrCompleto);
        
        let noload = false;
        let queue = new createjs.LoadQueue(true, null, true);
        Player.queue = queue;

        queue.loadManifest(arrCompleto);

        queue.on("fileload", function(event){
//            console.log("fileload", event);
        });

        queue.on("progress", function(event) {
//            console.log("progress " + event.progress);
            $('#barra_preload .barra').css({'width':Math.trunc(event.progress*100)+'%'});
            $('#cargador .indicador_porcentaje p').html(Math.trunc(event.progress*100)+'%');
        });

        queue.on("fileprogress", function(event) {
//            console.log("file progress " + event.progress, event);
        });

        queue.on("error", function(event) {
//            console.log("file error",event);
            if(!noload){
                queue.loadManifest(arrCompleto);
            }
            noload = true;
        });

        queue.on("complete", function(event) {
            $('#cargador').css({'display':'none'});
            $('#btn_init').css({'display':'flex'});
        });

        queue.load();

    },
    desActivaBtnSiguiente:() => {
        $('#btn_adelante').css({'display':'none'});
    },
    activaBtnSiguiente:() => {
        $('#btn_adelante').css({'display':'flex'});
        TweenMax.fromTo('#btn_adelante',1, {alpha:0}, {alpha:1});
    },
    onBlur:() => {
        if(Player.onPlayer){
            ANIM.main_tl.pause();
            Player.stopAudioParrafo();
            Player.resetSubtitulos();
            Player.tooglePlayPauseIco();
            Player.pauseVideo();
            try{ANIM.pauseWaitSound();} catch (err){}
        }
    },
    hideOthersBut:(id) => {
        $('.escena').css({'display': 'none'});
        $('#'+id).css({'display': 'block'});
    },
    ponVideo:(i) =>{
        let videosTarget = Player.queue.getResult(`video_${i}`);
//        console.log('videosTarget',videosTarget);
        var $video = $(`<video no-controls muted id="video_${i}" width="450px" height="560px"/>`);
        var $source = $('<source type="video/mp4"/>');
        var src = videosTarget;
        var blob = new Blob( [ src ], { type: "video/mp4" } );
        var urlCreator = window.URL || window.webkitURL;
        var objUrl = urlCreator.createObjectURL( blob );
        $source.attr('src', objUrl);
        $video.append($source);
        $('.video_container').html($video);
        TweenMax.set('#senas_container',{alpha:0});
        
        let vid = document.getElementById(`video_${i}`);
        try{
            vid.removeEventListener("ended", Player.hideSenasOnEnd);
        } catch (err){ console.log('Señas On END NO',err.message);}
        vid.addEventListener("ended", Player.hideSenasOnEnd);
    },
    hideSenasOnEnd:(e) => {
        Player.senaOculta = true;
//        console.log("OnEndListener",Utils.randomInt(0,99999));
        TweenMax.to("#senas_container",0.7,{scale:0, y:80, x:0, transformOrigin:'bottom right', ease:Back.easeIn.config(1.7)});
    },
    showSenas:() => {
        Player.senaOculta = false;
        TweenMax.to("#senas_container",0.5,{
            scale:Player.getEscalaEscenario(),
            y:Player.POS_VIDEO_SENAS.y,
            x:Player.POS_VIDEO_SENAS.x
        });
    },
    forcePlayVideoCurrentTime:() => {
        let cual = Player.escena_actual;
        let vid = document.getElementById(`video_${cual}`);
//        console.log(vid.paused);
        if(vid.paused){
            Player.playVideo(Player.getTimeVideoFromCurrentPosition());
        }  
    },
    playVideo:(tiempo = 0)=>{
        let cual = Player.escena_actual;
//        console.log(cual,Player.senasVisible);
        if(Player.conVideo){
            try{ 
                if(Player.senasVisible){
                    let vid = document.getElementById(`video_${cual}`);
                    vid.currentTime = tiempo;
                    vid.play();
                    TweenMax.to('#senas_container',0.2,{alpha:1});
                    if(Player.senaOculta){
                        Player.showSenas();
                    }
                }
            } catch (err){}
        }
    },
    pauseVideo:()=>{
        let cual = Player.escena_actual;
        if(Player.conVideo){
            try{
                let vid = document.getElementById(`video_${cual}`);
                vid.pause();
            } catch (err){}
        }
    },
    alphaVideoListener:(e)=>{
//        console.log(e);
        
        if(e.type === 'ON_DRAG' || e.type === 'START_DRAG'){
            Draggable.get("#senas_container").disable();
            Player.killForceCloseBarraAlphaVideo();
        } else {
            Draggable.get("#senas_container").enable();
            Player.forceCloseBarraAlphaVideo();
        }
        let val = parseInt(e.detail.valor)+Player.MIN_ALPHA_VIDEO_SENAS;
        let st = `${val}%`;
        Player.setAlphaVideo(val,st);
        Player.forceZindexSenas();
    },
    setAlphaVideo:(val,st) => {
        $("#senas_container .controllers_container .alpha_controller .porcentaje").html(st);
        TweenMax.to("#senas_container .bg",0.2,{borderColor:`rgba(237,241,252,${val/100})`});
        TweenMax.to("#senas_container .bg",0.2,{backgroundColor:`rgba(237,241,252,${val/100})`});
        TweenMax.to(".video_container",0.2,{alpha:val/100});
    },
    getTimeOfScene:(nEscena) => {
        return ANIM.main_tl.getLabelTime(`escena_${nEscena}`)
    },
    getTimeVideoFromLabel:(label) =>{
        let t1 = Player.getTimeOfScene(Player.escena_actual);
        let t2 = ANIM.main_tl.getLabelTime(label);
        return t2-t1;
    },
    getTimeVideoFromCurrentPosition:() =>{
        let t1 = Player.getTimeOfScene(Player.escena_actual);
        let t2 = ANIM.main_tl._time;
        return t2-t1;
    },
    killForceCloseBarraAlphaVideo:() =>{
        TweenMax.killTweensOf(Player.tempAVB);
        Player.tempAVB = {n:0};
    },
    forceCloseBarraAlphaVideo:() => {
        Player.killForceCloseBarraAlphaVideo();
        TweenMax.to(Player.tempAVB, Player.TIEMPO_CIERRE_ALPHA_VIDEO, {n:1, onComplete:function(){
            Player.toogleBarraAlphaVideo('close');
        }});
    },
    toogleBarraAlphaVideo:(accion = 'toogle') =>{
        Player.killForceCloseBarraAlphaVideo();
        switch (accion){
            case 'open':
                    if($("#alpha_slider").hasClass("close")){
                        $("#alpha_slider").removeClass("close").addClass("open");
                        TweenMax.to("#senas_container .controllers_container .alpha_controller .flecha",0.5,{rotation:180});
                        Player.forceCloseBarraAlphaVideo();
                    }
                break;
            case 'close':
                    if($("#alpha_slider").hasClass("open")){
                        $("#alpha_slider").removeClass("open").addClass("close");
                        TweenMax.to("#senas_container .controllers_container .alpha_controller .flecha",0.5,{rotation:0});
                    }
                break;
            case 'toogle':
                    if($("#alpha_slider").hasClass("open")){
                        $("#alpha_slider").removeClass("open").addClass("close");
                        TweenMax.to("#senas_container .controllers_container .alpha_controller .flecha",0.5,{rotation:0});
                    } else if($("#alpha_slider").hasClass("close")){
                        $("#alpha_slider").removeClass("close").addClass("open");
                        TweenMax.to("#senas_container .controllers_container .alpha_controller .flecha",0.5,{rotation:180});
                        Player.forceCloseBarraAlphaVideo();
                    }
                break;
        }
        TweenMax.set('#senas_container .controllers_container',{z:10});
        
    },
    getEscalaEscenario:() => {
        return window.innerWidth == 1920 ? 1 :document.getElementById('escenario')._gsTransform.scaleX;  
    },
    escalaVideoSenas:(que = '+') => {
        let bg = document.getElementById('senas_container').getElementsByClassName('bg')[0];
//        console.log('bg',bg);
        onUpdate = () => {
//            console.log('DURANTE',bg._gsTransform.scaleX);
            let scala = bg._gsTransform.scaleX;
            let dif = scala - 1;
            let val = parseInt(scala*100);
            let st = `${val}%`;
            
            TweenMax.set('#senas_container .cerrar',{x:dif*230,y:dif*580*-1,z:10});
            
            $("#senas_container .controllers_container .scale_controller .porcentaje").html(st);
        }
        onComplete = (updateMe, me) => {
//            console.log('COMPLETE',bg._gsTransform.scaleX);
            let scala = bg._gsTransform.scaleX;
            let dif = scala - 1;
            let val = parseInt(scala*100);
            let st = `${val}%`;
            if(scala > Player.MAX_SCALE_VIDEO_SENAS){
                TweenMax.to(bg,0.2,{scale:Player.MAX_SCALE_VIDEO_SENAS, transformOrigin:'bottom center', onUpdate:updateMe, onComplete:me});
            } else if(scala < Player.MIN_SCALE_VIDEO_SENAS){
                TweenMax.to(bg,0.2,{scale:Player.MIN_SCALE_VIDEO_SENAS, transformOrigin:'bottom center', onUpdate:updateMe, onComplete:me});
            }
            
            let w = 448+40; //tamaño real del contenedor
            let h = 560+40; //tamaño real del contenedor
            let escalaEscenario =  Player.getEscalaEscenario();
            let t = (0-h*dif*-1)*escalaEscenario;//no lo multiplico *0.5 porque se escala desde un borde en y
            let l = (0-((w*dif)*0.5)*-1)*escalaEscenario; // lo multiplico *0.5 porque se escala desde el centro en x;
            
            Draggable.get("#senas_container").vars.bounds = {
                top:t,
                left: l,
                width:window.innerWidth-(l*2), //*2 por que se escala desde el centro en x
                height:window.innerHeight-t // no es *2 por que se escala desde un borde en y
            };
        }
        TweenMax.to(bg,0.2,{scale:`${que}=.05`, transformOrigin:'bottom center', onUpdate:onUpdate, onComplete:onComplete, onCompleteParams:[onUpdate, onComplete]});
        Player.forceZindexSenas();
    },
    forceZindexSenas:() => {
        $("#senas_container").css({'z-index':'1'});
    },
    toogleSenas:() => {
        if(Player.senaOculta){
            Player.showSenas();
        } else {
          if($("#senas_container").css('display') == 'block'){
              Player.closeSenas();
          } else {
              Player.openSenas();
          }  
        }
          
    },
    openSenas:() => {
//        console.log('OPEN señas');
        Player.senasVisible = true;
        $("#senas_container").css({'display':'block'});
        TweenMax.fromTo("#senas_container",0.2,{alpha:0},{alpha:1});
        try{
            if(!ANIM.main_tl.paused()){
                Player.forcePlayVideoCurrentTime();
            }
        } catch (err){ console.log(err.message);}
    },
    closeSenas:() => {
//        console.log('CLOSE señas');
        Player.senasVisible = false;
        $("#senas_container").css({'display':'none'});
    },
    creaMainTL:() => {
        ANIM.main_tl = new TimelineMax({});
        
        ANIM.main_tl
        .set('.escena',{left:"-1920px"}) // <-- al comenzar envío a todas las escenas a left -1920
        ;
        
        let _arr = JSON_CUENTO.escenas; // defino las escenas con el archivo de configuración
        let tiempo = 0.01; // tiempo inicial muy bajito, para que no se solape nada con el evento "onStart"
        let posicion = 0; // posición inicial de tiempo del timeline, sirve para definir cuando van los labels y callbacks
        let delayAcumulado = 0; // valor de retraso inicial del tiempo
        let espacioEntreEscenas = 2; // segundos para que no se solapen las escenas una sobre la otra
        
        _arr.map((item, i) => { // el método map de array hace un recorrido por cada item del array
            
            let i_st = i > 9 ? i.toString() : `0${i.toString()}`;
            ANIM.main_tl.add( TweenMax.set(`#escena_${i_st}`, {left:0}) , tiempo); // <-- pongo la escena en 0 left en el tiempo que le corresponde
            
            if(i > 0){
                let i_stanterior = i > 9 ? (i-1).toString() : `0${(i-1).toString()}`;
                ANIM.main_tl.add( TweenMax.set(`#escena_${i_stanterior}`, {left:-1920}) , tiempo-0.01); // <-- pongo la escena anterior en -1920 left 
            }
            
            ANIM.main_tl.addLabel(`escena_${i}`, tiempo); // le digo que la escena comienza en este tiempo 
            
            item[`parrafos${IDIOMA}`].map((parrafo, j) => {
                let delay = parrafo.tiempo[2] ? parrafo.tiempo[2] : 0; // veo si hay que retrasar el tiempo de aparición del párrafo o no
                delayAcumulado += delay; // asigno la cantidad de tiempo de retraso de párrafo acumulado
                let duracion = parrafo.tiempo[1]-parrafo.tiempo[0]; // cuanto dura el párrafo en particular
                let desfase = (posicion+delayAcumulado); // momento exacto en que el párrafo debe aparecer
//                console.log(posicion, delay, `${i}_${j}`, desfase, delayAcumulado, tiempo);
                 
                ANIM.main_tl.addLabel(`${i}_${j}`, desfase); // acá le pongo el label correspondiente al párrafo el formato es "numeroEscena_numeroParrafo" quedan así: 0_0, 0_1, 0_2, 0_3, 1_0, 1_1, 1_2, etc
                posicion += duracion; // reasigno posicion del siguiente con la duración del actual
            });
            tiempo = posicion+delayAcumulado; // le digo al tiempo que se sume todo lo anterior
            ANIM.main_tl.addLabel(`fin_escena_${i}`, tiempo); // así le asigno el final de la escena || quedan así: "fin_escena_0", "fin_escena_1", etc
            tiempo += espacioEntreEscenas; // dejo un par de segundos para que las escenas no se monten una arriba de otra
            delayAcumulado += espacioEntreEscenas; // y obviamnete se lo tengo que sumar al delay acumulado
            
        });
        
        /*CREADOR DE callbacks para visualización de subtítulos */
        _arr.map((item, i) => {
             item.parrafos.map((parrafo, j) => {
                 ANIM.main_tl.addCallback(function(){
                    Player.playSoundParrafo(i, j);
                    Player.putSubtitulos(i, j);
                },`${i}_${j}`);
            });    
        });
    }
};

let App = {
    init:function(){
        let w, h;
            w = window.innerWidth;
            h = window.innerHeight;
        TweenMax.set('body',{backgroundColor:'#000000'});
        Front.resizeListener(w, h);
        this.start();
        Player.hideToolTip();
        ANIM.init();
        if(!Player.conVideo){
            $('.player_btn.btn_lengua').hide();
        }
        if (
              document.fullscreenEnabled || /* Standard syntax */
              document.webkitFullscreenEnabled || /* Chrome, Safari and Opera syntax */
              document.mozFullScreenEnabled ||/* Firefox syntax */
              document.msFullscreenEnabled/* IE/Edge syntax */
        ) {
            //nada
        } else {
            $('.player_btn.btn_fullscreen').hide();
            
            if(Utils.isMobile()){
                if(Player.conVideo){
                    $('#marcador_escena').css({'top':'-50px'});
//                    $('#player_btn_config').css({'margin-left':'auto'}); 
                } else {
                    $('#marcador_escena').css({'top':'-10px'});
                    $('#player_btn_config').css({'margin-left':'auto'}); 
                }
            }
        }
    },
    start:function(){
        this.createPlayerParts();
        this.setButtons();
    },
    createPlayerParts:function(){
//        console.log(JSON_CUENTO);
        let nombreCuento = JSON_CUENTO[`nombre${IDIOMA}`];
        let arrEscenas = JSON_CUENTO.escenas;
        let nCurrentEscena = JSON_CUENTO.n_escena;
        let arrFxSonido = JSON_CUENTO.fx_sonido;
        let arrImagenes = JSON_CUENTO.imagenes;

        $("#desplegable_escenas_container h2").text(nombreCuento);
        $("#desplegable_escenas_container h3").text(arrEscenas.length + ' escenas');

        let stListado = Player.creaListadoEscenas(arrEscenas);
        $("#listado_escenas .masked").html(stListado);

        let ptListado = Player.creaPuntosEscenas(arrEscenas);
        $("#punto_escena_container").html(ptListado);

        let i_st = arrEscenas.length > 9 ? (arrEscenas.length) : `0${(arrEscenas.length)}`;
        $("#marcador_escena .total p").text(i_st);

        $("#title_container .nombre_cuento").text(nombreCuento);

        Player.setScene(nCurrentEscena, arrEscenas[nCurrentEscena].nombre, true); //<--- true porque no quiero que suene el audio altiro

        Player.loadAudioImages(arrEscenas,arrFxSonido,arrImagenes);
        window.addEventListener("blur", Player.onBlur, false);

    },
    setButtons:function(){
        /*Relativos al player*/
        $("#btn_abrir_player").click(function(){
//            console.log();
            Player.tooglePlayer("open");
        });

        $("#player").hover(
            function(){
                Player.tooglePlayer("open");
            },
            function(){
                Player.tooglePlayer("close");
            }
        );

        ///***///


        const elPlayer = document.getElementById('player');

        elPlayer.addEventListener('touchstart', function(event) {
            Player.tooglePlayer("open");
        }, false);

        elPlayer.addEventListener('touchend', function(event) {
             Player.tooglePlayer("close");
        }, false);


        ///***///

        $(".player_btn").hover(
            function(){
                Player.setTooltip($(this).attr("data_tooltip"), $(this), "bajo");
            },
            function(){
                Player.hideToolTip();
            }
        );


        $('#player_btn_play_pause').click(function(){
            Player.tooglePlayPause();
        });

        $('#player_btn_escena_ant').click(function(){
            Player.prevScene();
        });

        $('#player_btn_escena_sig').click(function(){
            Player.nextScene();
        });

        $('#player_btn_parrafo_ant').click(function(){
            Player.prevParrafo();
        });

        $('#player_btn_parrafo_sig').click(function(){
            Player.nextParrafo();
        });

        $('.btn_fullscreen').click(function(){
            Front.toogleFullScreen();
        });

        $('#player_btn_config').click(function(){
            Player.toogleConfigurador('toogle');
        });

        $('.btn_ocultar').click(function(){
            Player.toogleListadoEscena('close');
        });

        $('#title_container').click(function(){
            Player.toogleListadoEscena('toogle');
        });

        //cheks del configurador
        $('.checks').click(function(){
            Player.checkCheck($(this).attr('id'), $(this).is(':checked'));
        });

        //para setear current al listado
        $(".item_listado_escena").click(function(){
            let i = $(this).attr('data_escena');
            let nombre = $(this).attr('data_nombre');
            Player.setScene(parseInt(i), nombre);
        });

        $("#punto_escena_container .punto").hover(
            function(){
                Player.setTooltip($(this).attr("data_tooltip"), $(this), "alto");
            },
            function(){
                Player.hideToolTip();
            }
        ).click(function(){
            let i = $(this).attr('data_escena');
            let nombre = $(this).attr('data_nombre');
            Player.setScene(parseInt(i), nombre);
        });

        // el botón que sale al terminar la escena
        $('#btn_adelante .interior').click(function(){
            let arrEscenas = JSON_CUENTO.escenas;
            if(Player.escena_actual < arrEscenas.length-1){
                Player.nextScene();
            } else {
               // console.log("FIN");
                Player.onPlayer = false;
                Creditos.final();
            }

        });
    },
    setSenasControllers:() => {
        
        $("#senas_container .cerrar")
            .hover(
                function(){
                    Player.forceZindexSenas();
                },
                function(){
                    //nada
                }
                )
            .click(function(){
            Player.closeSenas();
        });
        $("#btn_lengua").click(function(){
            Player.toogleSenas();
        });
        $("#player_btn_lengua").click(function(){
            Player.toogleSenas();
        });
        
        $("#senas_container .controllers_container .alpha_controller .flecha").click(function(){
            Player.toogleBarraAlphaVideo();
        });
        $("#senas_container .controllers_container .scale_controller .btn_scale").click(function(){
            Player.escalaVideoSenas($(this).attr('data-accion'));
        });
        Draggable.create("#senas_container",{
                                dragClickables:false,
                                onDragEnd:function(){
                                    Player.forceZindexSenas();
                                    Player.POS_VIDEO_SENAS.x =  Draggable.get("#senas_container").x;
                                    Player.POS_VIDEO_SENAS.y =  Draggable.get("#senas_container").y;
                                },
                                bounds: document.getElementById("cuento")
                                            }
                        );
    }
};

let Creditos = {
    init:() => {
        $('.btn_principal').click(function(e){
           e.preventDefault();
           e.stopPropagation();
        });

        Creditos.creaPortadayContra();
    },
    creaPortadayContra:() => {
        let arrCreditos = JSON_CUENTO[`creditos${IDIOMA}`];
        $(".creditos .titulo h1").html(JSON_CUENTO[`nombre${IDIOMA}`]);
        $(".creditos .titulo h2").html(JSON_CUENTO[`tipo${IDIOMA}`]);
        $(".creditos .descripcion").html(JSON_CUENTO[`descripcion${IDIOMA}`]);
        $(".creditos table tbody").html(Creditos.getTable(arrCreditos));

        $("#preload_tutorial_modal .title .img_cont img").attr('src',JSON_CUENTO.escenas[0].miniatura);
        $("#preload_tutorial_modal .title h2").html(JSON_CUENTO[`nombre${IDIOMA}`]);
        $("#preload_tutorial_modal .title p").html(JSON_CUENTO[`tipo${IDIOMA}`]);
    },
    getTable:(arr) => {
        let newArr = arr.map((item, i) => {
            return `<tr><td>${item[0]}</td><td>${item[1]}</td></tr>`;
        });
        return newArr.join("");
    },
    leerEscuchar:() => {
        $('#portada_cuento').css({'display': 'none'});
        Tutorial.init();
    },
    leer:() => {
        $('#check_relato').prop("checked",false);
        Player.toogleAudio(false);
        $('#portada_cuento').css({'display': 'none'});
        Tutorial.init();
    },
    final:() => {
        TweenMax.set('body',{backgroundColor:'#E9EDF5'});
        $('#final_cuento').css({'display':'block'});
        $('#cuento').css({'display':'none'});
        $('#escenario').css({'display':'none'});
        $('#btn_adelante').css({'display':'none'});
        $('body').css({'overflow':'auto'});
        Player.stopAudioParrafo();
        ANIM.pausaInteractividad();
        try{
            
            var cuento = JSON_CUENTO.ID
            var fd = new FormData();
            fd.append('cuento', cuento )
            fd.append('action', 'delete_guardar_cuento');
            $.ajax({
                type: 'POST',
                action: 'delete_guardar_cuento',
                url: ajaxurl,
                data: fd,
                processData: false,
                contentType: false
            }).done(function(data) {
                //console.log('borrar avances continuar')
            });
        } catch (err) {
//            console.log('FORMDATA',err.message);
        }

    }
};

let Tutorial = {
    slideActual:0,
    init:() => {
        App.init();

        $('#preload_tutorial_modal').css({'display': 'flex'});

        $('.btn_flecha_tutorial.izq').click(function(){
            Tutorial.moveSlider("l");
        });
        $('.btn_flecha_tutorial.der').click(function(){
            Tutorial.moveSlider("r");
        });

        $("#punto_tuto_container .punto").click(function(){
            Tutorial.gotoSlider($(this).attr('data_escena'));
        });

        $('#btn_init').click(function(){
            $('#preload_tutorial_modal').css({'display': 'none'});
            $('#cuento').css({'display':'block'});
            $('#escenario').css({'display':'block'});
            $('body').css({'overflow':'hidden'});


            var continuar_escena = $(this).data('escena');
            let arrEscenas = JSON_CUENTO.escenas;

//            console.log('escena cont: ' + continuar_escena);

            if(continuar_escena){

              Player.setScene(parseInt(continuar_escena), arrEscenas[continuar_escena].nombre);
              ANIM.main_tl.play();

//              console.log('continuar escena');

            } else {
              Player.playSoundParrafo(0,0,true);
              Player.setScene(0, arrEscenas[0].nombre);
              ANIM.main_tl.play();
            }


        });
        $('#btn_volver_leer').click(function(){
            TweenMax.set('body',{backgroundColor:'#000000'});
            $('#final_cuento').css({'display': 'none'});
            $('#cuento').css({'display':'block'});
            $('#escenario').css({'display':'block'});
            $('body').css({'overflow':'hidden'});

            let arrEscenas = JSON_CUENTO.escenas;
            Player.setCurrent(0, arrEscenas[0].nombre);
            Player.setScene(0);
            ANIM.main_tl.play(0);

        });
        
        $('#tutorial #tut01').css({'margin-left':'0px'});
        TweenMax.set("#tut04 .icono .player_btn",{scale:1.5});

    },
    gotoSlider:(i) => {
        if(parseInt(i) != Tutorial.slideActual){
            let old = Tutorial.slideActual;
            let nuevo = parseInt(i);
            let w = 800;

            let slideactual = `#tut0${(old+1)}`;
            let slidenueva  = `#tut0${(nuevo+1)}`;

            TweenMax.set(slideactual,{marginLeft:0});
            TweenMax.set(slidenueva,{marginLeft:w*-1});
            TweenMax.to(slideactual,1,{marginLeft:w});
            TweenMax.to(slidenueva,1,{marginLeft:0, ease:Back.easeOut.config(1)});

            Tutorial.slideActual = nuevo;
            Tutorial.setCurrent(Tutorial.slideActual);
        }
    },
    moveSlider:(dir = "l") => {
        let cant = $('#tutorial .tut').length;
//        console.log(cant);
        let w = 800;

        let actual = `#tut0${(Tutorial.slideActual+1)}`;
        if( dir === "r"){
            if(Tutorial.slideActual < cant-1){
                Tutorial.slideActual++;
            } else {
                Tutorial.slideActual = 0;
            }
        } else {
            if(Tutorial.slideActual === 0){
                Tutorial.slideActual = cant-1;
            } else {
                Tutorial.slideActual--;
            }
        }

        let nuevo = `#tut0${(Tutorial.slideActual+1)}`;
        if(dir == "l"){
            TweenMax.set(actual,{marginLeft:0});
            TweenMax.set(nuevo,{marginLeft:w});
            TweenMax.to(actual,1,{marginLeft:(w*-1)});
        } else {
            TweenMax.set(actual,{marginLeft:0});
            TweenMax.set(nuevo,{marginLeft:(w*-1)});
            TweenMax.to(actual,1,{marginLeft:w});
        }
        TweenMax.to(nuevo,1,{marginLeft:0, ease:Back.easeOut.config(1)});
        Tutorial.setCurrent(Tutorial.slideActual);
    },
    setCurrent: (i) => {
        $("#punto_tuto_container .punto").each(function(){
            if($(this).hasClass('current')){
                $(this).removeClass('current');
            }
            if($(this).attr('data_escena') == i){
              $(this).addClass('current');
            }
        });
    }
};

var Slider = {
    count:0,
    init:function(div, o, callback){
        this.creaSlider(div, o, this.count, callback);
        this.count++;
    },
    creaSlider:function(div, o, id, callback){
        //definir valores
        o = (o !== undefined) ? o : {};
        o.w = (o.w !== undefined) ? o.w : 100;
        o.h = (o.h !== undefined) ? o.h : 16;
        o.wknob = (o.wknob !== undefined) ? o.wknob : 14;
        o.hknob = (o.hknob !== undefined) ? o.hknob : 14;
        o.rknob = (o.rknob !== undefined) ? o.rknob : 7;
        o.colorknob = (o.colorknob !== undefined) ? o.colorknob : "#f00";
        o.colorfondo = (o.colorfondo !== undefined) ? o.colorfondo : "#dfdfdf";
        o.colorbarra = (o.colorbarra !== undefined) ? o.colorbarra : "#848484";
        o.rfondo = (o.rfondo !== undefined) ? o.rfondo : 7;
        o.value = (o.value !== undefined) ? o.value : 0;
        o.decimales = (o.decimales !== undefined) ? o.decimales : 2;
        o.maxValue = (o.maxValue !== undefined) ? o.maxValue : 100;
        o.marginBottom = (o.marginBottom !== undefined) ? o.marginBottom : 10;
       
//        console.log(callback, typeof(callback));
        if(callback == undefined || typeof(callback) != "function"){
            callback = this.onStopDrag;
        } 
        //crear divs
        var st = '<div id="slide'+id+'" class="slider">\
                            <div class="fondo">\
                        <div class="barra"></div>\
                        <p class="value">'+o.value+'</p>\
                        <a class="knob btn"></a>\
                    </div>\
                </div>';

        if(o.h < o.hknob){
            st = '<div id="slide'+id+'" class="slider">\
                    <div class="fondo">\
                        <div class="barra"></div>\
                        <p class="value">'+o.value+'</p>\
                    </div>\
                    <div class="knob"></div>\
                </div>';
        }
        $(div).append(st);

        //csssear
        var slider = $(div+" #slide"+id);
        var value = $(div+" #slide"+id+" .value");
        var knob = $(div+" #slide"+id+" .knob");
        var fondo = $(div+" #slide"+id+" .fondo");
        var barra = $(div+" #slide"+id+" .barra");

        var vcenter = o.h*0.5-o.hknob*0.5;

        var min = 0;
        var max = o.w-o.wknob;
        var porcentaje;
        var fp = (o.value*max)/o.maxValue + o.wknob*0.5;

        

        slider.css({"width":o.w+"px", "height":o.h+"px", "margin-bottom":o.marginBottom+"px"});
        knob.css({"width":o.wknob+"px","height":o.hknob+"px","border-radius":o.rknob+"px", "position":"absolute", "background-color":o.colorknob, "margin-top":vcenter+"px", "transform":"translate3d("+(fp - o.wknob*0.5)+"px, 0px, 0px)"});
        fondo.css({"width":o.w+"px","height":o.h+"px", "position":"absolute", "background-color":o.colorfondo, "border-radius":o.rfondo+"px", "overflow":"hidden", "transform":"translate3d(0px, 0px, 0px)"});
        barra.css({"width":o.w+"px","height":o.h+"px", "position":"absolute", "background-color":o.colorbarra});
        value.css({"font-size":o.h+"px", "position":"absolute", "margin":"0px", "padding":"0px", "width":"auto"});

        barra.css("width",fp+"px"); //reseteo la barra.
        if(o.value == o.maxValue){
            TweenMax.to(barra,0.1,{width:o.w});
        } else if(o.value === 0){
            TweenMax.to(barra,0.1,{width:0});
        }
        var wSlider = parseInt(fondo.css("width"))-parseInt(knob.css("width"));
        this.setValue(value, o.value, o);
        //funcionalidades
        fondo.click(function(e){
            var minx = false;
            var maxx = false;
            var x = e.offsetX;
            if (e.target.className == "value") {
                x = e.offsetX + e.target.offsetLeft;
            }
            porcentaje = ((o.maxValue*(x-o.wknob*0.5))/max).toFixed(o.decimales);
            if(x < o.wknob*0.5){
                x = o.wknob*0.5;
                minx = true;
            } else if(x>o.w-o.wknob*0.5){
                x = o.w-o.wknob*0.5;
                maxx = true;
            }
            if(minx){porcentaje = 0;}
            if(maxx){porcentaje = o.maxValue;}

            var despachaClick = new CustomEvent("STOP_DRAG",{
                "detail":{
                    valor: porcentaje,
                    id:id
                }
            });
            this.setValue(value, porcentaje,o);
            TweenMax.to(barra, 0.1,{width:x, onComplete:function(bar, por){
                if(por === 0){
                    TweenMax.to(bar, 0.1,{width:min});
                }
                if(por === o.maxValue){
                    TweenMax.to(bar, 0.1,{width:o.w});
                }
                document.getElementById(div.substring(1)).addEventListener("STOP_DRAG", callback, false);
                document.getElementById(div.substring(1)).dispatchEvent(despachaClick);
            }, onCompleteParams:[barra,porcentaje]});
            TweenMax.to(knob, 0.1,{x:x-o.wknob*0.5});
        }.bind(this));
        Draggable.create(knob,
            {
                type:"x",
                bounds:{minX:min, maxX:max},
                edgeResistance:1,
                onDragStart:function(){
                    barra.css("width",(this.x+o.wknob*0.5)+"px"); //tamaño barra indicadora 
                    porcentaje = ((o.maxValue*(this.x))/max).toFixed(o.decimales);
                    
                    Slider.setValue(value, porcentaje,o);
                    var despacha = new CustomEvent("START_DRAG",{
                        "detail":{
                            valor: porcentaje,
                            id:id
                        }
                    });
                    Slider.setValue(value, porcentaje,o);
                    document.getElementById(div.substring(1)).addEventListener("START_DRAG", callback, false);
                    document.getElementById(div.substring(1)).dispatchEvent(despacha);
                },
            onDrag:function(){
                    barra.css("width",(this.x+o.wknob*0.5)+"px"); //tamaño barra indicadora 
                    porcentaje = ((o.maxValue*(this.x))/max).toFixed(o.decimales);
                    
                    Slider.setValue(value, porcentaje,o);
                    var despacha = new CustomEvent("ON_DRAG",{
                        "detail":{
                            valor: porcentaje,
                            id:id
                        }
                    });
                    Slider.setValue(value, porcentaje,o);
                    document.getElementById(div.substring(1)).addEventListener("ON_DRAG", callback, false);
                    document.getElementById(div.substring(1)).dispatchEvent(despacha);
                },
                onDragEnd:function(){
                    porcentaje = ((o.maxValue*(this.x))/max).toFixed(o.decimales);
                    if(porcentaje == o.maxValue){
                        TweenMax.to(barra,0.1,{width:o.w});
                    } else if(porcentaje === 0){
                        TweenMax.to(barra,0.1,{width:0});
                    }
                    var despacha = new CustomEvent("STOP_DRAG",{
                        "detail":{
                            valor: porcentaje,
                            id:id
                        }
                    });
                    Slider.setValue(value, porcentaje,o);
                    document.getElementById(div.substring(1)).addEventListener("STOP_DRAG", callback, false);
                    document.getElementById(div.substring(1)).dispatchEvent(despacha);
                }
            }
        );
    },
    setValue:function(value, valor, o){
        value.html(valor);
        var wvalue = value.width();
        if(valor > o.maxValue*0.5){
            value.css({"text-align":"left"});
            TweenMax.to(value, 0.2,{marginLeft:0, color:o.colorfondo});
        }else{
            value.css({"text-align":"right"});
            TweenMax.to(value, 0.2,{marginLeft:o.w-wvalue, color:o.colorbarra});
        }
    },
    onStopDrag:function(e){
//        console.log("valor: ",e.detail.valor);
//        console.log("id: ",e.detail.id);
    }
};

(function () {
    window.onresize = function(){
        let w, h;
            w = window.innerWidth;
            h = window.innerHeight;
        Front.resizeListener(w, h);
    };
    let w, h;
    w = window.innerWidth;
    h = window.innerHeight;

    Front.resizeListener(w, h);


    /* Standard syntax */
    document.addEventListener("fullscreenchange", (e) => {Front.lookFullScreen(e);});

    /* Firefox */
    document.addEventListener("mozfullscreenchange", (e) => {Front.lookFullScreen(e);});

    /* Chrome, Safari and Opera */
    document.addEventListener("webkitfullscreenchange", (e) => {Front.lookFullScreen(e);});

    /* IE / Edge */
    document.addEventListener("msfullscreenchange", (e) => {Front.lookFullScreen(e);});

    if (typeof JSON_CUENTO === 'undefined' || JSON_CUENTO === null) {
        setTimeout(function(){Creditos.init();}, 3000);
    } else {
        Creditos.init();
    }
})();