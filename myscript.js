var cantidadDeSecciones = 5;
var seccion = 0;
var altoPantalla = $(window).height() / cantidadDeSecciones;
var greenColor = "#97c03d";
var whiteColor = "#fff"
var GREENCOLOR = "#97c03d";
var WHITECOLOR = "#fff";
var ancho = $(window).width();

$("#b" + seccion).css({
    'background-color': greenColor,
    'border-color': greenColor
});



/*-----Scroll----*/
$(document).ready(function () {
    $('a[rel="relativeanchor"]').click(function () {
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 1000);
        return false;
    });
});





{
    
    var particulas=["particles-js","particles-js-end"]
    
    for(var i=0;i<particulas.length;i++){
particlesJS(particulas[i], {
  "particles": {
    "number": {
      "value": 80,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 4
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 2,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 176.3753266952075,
      "color": "#ffffff",
      "opacity": 0.5,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 6,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "window",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": true,
        "mode": "repulse"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 182.71737276780266,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});
    }
    

}






var iconosCode = ["img/icon-java.svg", "img/icon-android.svg", "img/icon-html.svg", "img/icon-css.svg", "img/icon-javascript.svg", "img/icon-nodejs.svg", "img/icon-csharp.svg", "img/icon-python.svg", "img/icon-mysql.svg", "img/icon-unity.svg", "img/icon-arduino.svg"];

var iconosUxUi = ["img/icon-photoshop.svg", "img/icon-illustrator.svg", "img/icon-xd.svg", "img/icon-invision.svg", "img/icon-marvel.svg", "img/icon-balsamiq.svg"];

var iconosPersonal = ["img/icon-team-working.svg", "img/icon-working-under-the-preassure.svg", "img/icon-perseverance.svg", "img/icon-perfectionism.svg", "img/icon-autonomous-learning.svg", "img/icon-proactive.svg"
];

//estos no los hice por arreglos porque me era mas fácil sin partir los nombres
var stringsPersonal = ["icon-team-working.svg", "icon-working-under-the-preassure.svg", "icon-perseverance.svg", "icon-perfectionism.svg", "icon-autonomous-learning.svg", "icon-proactive.svg"
];


var textCode = [];
for (var i = 0; i < iconosCode.length; i++) {
    textCode.push(iconosCode[i].split("-")[1].split(".")[0]);
};

var textUxUi = [];
for (var i = 0; i < iconosUxUi.length; i++) {
    textUxUi.push(iconosUxUi[i].split("-")[1].split(".")[0]);
};


iconosPersonal.sort(function (a, b) {
    // ASC  -> a.length - b.length
    // DESC -> b.length - a.length
    return b.length - a.length;
});

stringsPersonal.sort(function (a, b) {
    // ASC  -> a.length - b.length
    // DESC -> b.length - a.length
    return b.length - a.length;
});


var textPersonal = [];
for (var i = 0; i < iconosPersonal.length; i++) {
    textPersonal.push("");
    /*
      textPersonal.push(stringsPersonal[i].split("-")[1].split(".")[0]);
   */

    for (var j = 1; j < stringsPersonal[i].split("-").length; j++) {

        textPersonal[i] += stringsPersonal[i].split("-")[j].split(".")[0] + " ";

    }

};



for (var i = 0; i < iconosCode.length; i++) {
    $(".contenedor-icon-code").append("<div class='chip'</div>");
}

for (var i = 0; i < iconosUxUi.length; i++) {
    $(".contenedor-icon-uxui").append("<div class='chip'</div>");
}

for (var i = 0; i < iconosPersonal.length; i++) {
    $(".contenedor-icon-personal").append("<div class='chip'</div>");
}



$(".contenedor-icon-code>.chip").each(function (i) {
    $(this).append("<img src=" + iconosCode[i] + ">" + textCode[i]);
});

$(".contenedor-icon-uxui>.chip").each(function (i) {
    $(this).append("<img src=" + iconosUxUi[i] + ">" + textUxUi[i]);
});


$(".contenedor-icon-personal>.chip").each(function (i) {
    $(this).append("<img src=" + iconosPersonal[i] + ">" + textPersonal[i]);
});




var altoContenedorIconCode = (210) * -1;

var marginContenedorIconCode = "0em";

if (ancho > 992) {
    marginContenedorIconCode = "-2em";
} else {
    marginContenedorIconCode = "-2em";
}






/* ---- Evaluaciones con el scroll ---- */
$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    // Do something


    for (var i = 0; i < cantidadDeSecciones; i++) {
        if (scroll >= ((altoPantalla * i) - altoPantalla / 2)) {
            seccion = i;
            if (seccion % 2 == 0) {
                whiteColor = "#fff"
            } else {
                whiteColor = "#000"
            }

            $("#b" + seccion).css({
                'background-color': greenColor,
                'border-color': greenColor
            });
            $("#b" + seccion).mouseout(function () {
                $(this).css({
                    'background-color': greenColor,
                    'border-color': greenColor
                });
            });



            $("#b" + seccion).mouseover(function () {
                $(this).css({
                    'background-color': greenColor,
                    'border-color': greenColor
                });
            });




            for (var j = 0; j < cantidadDeSecciones; j++) {

                if (seccion != j) {

                    $("#b" + j).css({
                        'background-color': 'transparent',
                        'border-color': whiteColor
                    });

                    $("#b" + j).mouseout(function () {
                        $(this).css({
                            'background-color': 'transparent',
                            'border-color': whiteColor
                        });
                    });

                    $("#b" + j).mouseover(function () {
                        $(this).css({
                            'background-color': whiteColor,
                            'border-color': whiteColor
                        });
                    });
                }
            }


        }

    }

});



/* ---- Evaluaciones con el click de los botones ---- */
for (var i = 0; i < cantidadDeSecciones; i++) {

    $("#b" + i).click(function () {

        if (seccion % 2 == 0) {
            whiteColor = "#fff"
        } else {
            whiteColor = "#000"
        }

        for (var j = 0; j < cantidadDeSecciones; j++) {

            if (this.id.split("b")[1] != j) {

                $("#b" + j).css({
                    'background-color': 'transparent',
                    'border-color': whiteColor
                });

                $("#b" + j).mouseout(function () {
                    $(this).css({
                        'background-color': 'transparent',
                        'border-color': whiteColor
                    });
                });

                $("#b" + j).mouseover(function () {
                    $(this).css({
                        'background-color': whiteColor,
                        'border-color': whiteColor
                    });
                });
            }
        }

        $(this).mouseout(function () {
            $(this).css({
                'background-color': greenColor,
                'border-color': greenColor
            });
        });



        $(this).mouseover(function () {
            $(this).css({
                'background-color': greenColor,
                'border-color': greenColor
            });
        });


        $(this).css({
            'background-color': greenColor,
            'border-color': greenColor
        });

    });
}







//metodo de texto letra por letra
var intro = "/*Hi, \n I’m Jhon Osorio \n Interactive Media Designer*/";
var showText = function (target, message, index, interval) {
    if (index < message.length) {
        if (message[index] == ('\n')) {
            $(target).append('<br>');
        }
        $(target).append(message[index++]);
        setTimeout(function () {
            showText(target, message, index, interval);
        }, interval);
    }
};




var skillActivado = [false, false, false];



$(".skill-titulo").each(function (i) {

    $(this).click(function () {
        
        
        
        
        if (!skillActivado[i]) {
            
                 $('html, body').animate({
        scrollTop: $("#skills").offset().top
    }, 500);
            
            
            
            skillActivado[i] = true;
            $(this).css({
                "transform": "translateY(" + altoContenedorIconCode + "px)",
                "margin": "inherit",
            });



            $($(".contenedor-icon")[i]).css({
                "opacity": "1",
                "transform": "translateY(" + marginContenedorIconCode + ")",

            });

            $("." + $(".contenedor-icon")[i].classList[1] + ">.chip").each(function (j) {

                setTimeout(
                    function () {
                        $($("." + $(".contenedor-icon")[i].classList[1] + ">.chip")[j]).animate({
                            opacity: 1,

                        }, 0)
                    }, 200 * j);


            })


            for (var l = 0; l < $(".skill-titulo").length; l++) {
                if (this != $(".skill-titulo")[j]) {
                    skillActivado[j] = false;
                    $($(".skill-titulo")[j]).css({
                        "position": "absolute",
                        "transform": "translateY(-50%)",
                        "top": "50%",
                        "margin": "auto"
                    });
                }
            }


        } else if (skillActivado[i]) {
            skillActivado[i] = false;
            $(this).css({
                "position": "absolute",
                "transform": "translateY(-50%)",
                "top": "50%",
                "margin": "auto"
            });

            $("." + $(".contenedor-icon")[i].classList[1] + ">.chip").css({
                "opacity": "0"
            });

            $($(".contenedor-icon")[i]).css({
                "opacity": "0",
                "transform": "translateY(-50%)",
            });

        }

        for (var j = 0; j < $(".skill-titulo").length; j++) {
            if (this != $(".skill-titulo")[j]) {
                skillActivado[j] = false;
                $($(".skill-titulo")[j]).css({
                    "position": "absolute",
                    "transform": "translateY(-50%)",
                    "top": "50%",
                    "margin": "auto"
                });



                $("." + $(".contenedor-icon")[j].classList[1] + ">.chip").css({
                    "opacity": "0"
                });

                $($(".contenedor-icon")[j]).css({
                    "opacity": "0",
                    "transform": "translateY(-50%)",
                });
            }
        }

    })
});




var skillsResponsive = function (ancho) {

    if (ancho <= 992) {
        $(".skill-titulo").each(function (i) {
            $(this).click(function () {
                if (skillActivado[i]) {
                    $(this).css({
                        "font-size": "2em",
                        "transform": "translateY(-50%)",
                        "opacity": "0"
                    })
                    $(".contenedor-icon").css({
                        "transform": "translateY(-50%)",
                    });
                } else if (!skillActivado[i]) {
                    $(this).css({
                        "font-size": "4em",
                        "opacity": "1"
                    });
                    $(".contenedor-icon").css({
                        "transform": "translateY(-50%)",
                    });
                }
                for (var j = 0; j < $(".skill-titulo").length; j++) {
                    if (this != $(".skill-titulo")[j]) {

                        $($(".skill-titulo")[j]).css({
                            "font-size": "4em",
                            "opacity": "1",
                        });
                    }
                }
            })
        })
    };
}


skillsResponsive(ancho);



//section my work



var covers = [
    "url(img/cover-app-hed.jpg)",
    "url(img/cover-app-eule.png)",
    "url(img/cover-app-tonelist.png)",
    "url(img/cover-app-who.png)",
    "url(img/cover-desktop-pixel.png)",
    "url(img/cover-app-topotapp.png)"]

var backgrounds = [
    "img/pattern.png",
    "img/pattern.png",
    "img/pattern.png",
    "img/pattern.png",
    "img/pattern.png",
    "img/pattern-topotapp.jpg"
];

var trabajos = [
    ["https://mir-s3-cdn-cf.behance.net/project_modules/1400/63959756457739.59af8a5896928.jpg", "https://mir-s3-cdn-cf.behance.net/project_modules/1400/c0b75056457739.59af8a589643d.gif", "https://mir-s3-cdn-cf.behance.net/project_modules/1400/2d9f3e56457739.59af8a58960cf.jpg", "https://mir-s3-cdn-cf.behance.net/project_modules/1400/90028956457739.59af8a5897439.jpg"],
    ["https://mir-s3-cdn-cf.behance.net/project_modules/1400/61992b58434185.59fbf39cd228a.png"],
    ["https://mir-s3-cdn-cf.behance.net/project_modules/1400/c0a09958026619.59ed471fe089b.png", "https://mir-s3-cdn-cf.behance.net/project_modules/1400/27407c58026619.59ed471fe048d.png", "https://mir-s3-cdn-cf.behance.net/project_modules/1400/7bbf6658026619.59ed471fdff7c.png", "https://mir-s3-cdn-cf.behance.net/project_modules/1400/c4634658026619.59ed471fdfaab.png"],
    ["https://mir-cdn.behance.net/v1/rendition/project_modules/1400/b8bf2d63922377.5ac1840555d27.png"],
    ["https://mir-s3-cdn-cf.behance.net/project_modules/1400/d633f158026119.59ed40a013bf7.png", "https://mir-s3-cdn-cf.behance.net/project_modules/1400/61cd1558026119.59ed40a01384f.png", "https://mir-s3-cdn-cf.behance.net/project_modules/1400/4bb3ba58026119.59ed40a014675.png", "https://mir-s3-cdn-cf.behance.net/project_modules/1400/62f65d58026119.59ed40a0140fc.png"],
    ["https://mir-s3-cdn-cf.behance.net/project_modules/1400/7d2d4756357879.59ed28d2d2f25.jpg", "https://mir-s3-cdn-cf.behance.net/project_modules/1400/4a41c056357879.59ed28d2d366f.jpg", "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/c2c32456357879.59ed3d4346d7e.gif"]
]


var titulos = [
    "HED",
    "Eule",
    "Tonelist",
    "Who",
    "Pixel eater",
    "Topotapp"
];

var descripciones = [
    "HED es la aplicación oficial del evento Hoy es Diseño 2017-1, con es esta aplicación se pueden ver con detalle los talleres, conferencias del evento con su respectivo ponente, fecha y lugar, también puedes poner una foto el marco oficial del evento, ver el mapa del lugar o inscribirse. En esta versión de Hoy es Diseño también tuve la oportunidad de desarrollar ",
    "Eule es una aplicación pensada en y para los estudiantes de Universidades o Colegios que estén dispuestos a donar materiales de estudio que ya no necesitan, también se puede solicitar esas donaciones por la misma aplicación.",
    "Tonelist is an Android Application that improves the DJ - Costumer communication in an Event. It’s easy! The DJ can create an event and people can access to it with a unique code, The DJ will add sogns to a list and you vote for the songs you want to be played. The DJ will know what songs are being the most voted.",
    "Who es una Aplicación o videojuego programado en Android que conecta múltiples jugadores a través de un servidor TCP programado en Java, el juego consiste en destapar cartas pares, el último que termine en destaparlas perderá y tendrá que pagar la apuesta o cualquier cosa acordada.",
    "Pixel eater is a simple java aplication made in the designing with algorithms class. It uses processing library to create a graphic interface and manipulate the pixels in the image. Little automaton creatures start moving across the screen and eating the pixels in one side of the screen and those pixels start apearing on the other side of the screen.",
    "TopoTapp is a mini video game made for the network programming class, this mini game uses a desktop screen controlled by Android device, I programmed this video game on java using Processing library and Android SDK, Android device gets connected to the server through UDP protocol. TopoTapp was inspired in a game for a fair event and the Pokémon character Diglett."
];

var tags = [
    ["html", "css","javascript","java","android"],
    ["java","android","illustrator","firebase"],
    ["java","android","illustrator","firebase"],
    ["java","android","illustrator","photoshop"],
    ["java"],
    ["java","android","photoshop","illustrator"]
];




var links = [
    ["https://www.behance.net/gallery/56457739/Aplicacion-evento-Hoy-Es-Diseno","https://play.google.com/store/apps/details?id=it.save.hed","portfolio/hoy-es-diseno/index.html"],
    ["https://www.behance.net/gallery/58434185/Eule","https://drive.google.com/open?id=1uqBHagi1HYAfjKg80pjwv8WfrclnbVny"],
    ["https://github.com/jacksonjao/ToneList","https://www.behance.net/gallery/58026619/Tonelist","https://play.google.com/store/apps/details?id=it.save.tonelist"],
    ["https://www.behance.net/gallery/63922377/WHO","https://github.com/jacksonjao/Who-server"],
    ["https://github.com/jacksonjao/PixelEater","https://www.behance.net/gallery/58026119/Pixel-Eater"],
    ["https://github.com/jacksonjao/TopoTapp_server-game","https://www.behance.net/gallery/56357879/Topotapp"]
];


var paginas=[
    ["behance","playstore","internet"],
    ["behance","playstore"],
    ["github","behance","playstore"],
    ["behance","playstore"],
    ["github","behance"],
    ["github","behance"]
]





var numX = 3;
var numY = 2;
var numXCel = 2;
var numYCel = 3;
var anchoTrabajos = ancho;
var altoTrabajos = $("#my-work").height();






for (var i = 0; i < covers.length; i++) {
    $(".section-mywork").append("<div  class='trabajo' ><div  class='trabajo-cover'></div></div>");
}
/*
 $(".section-mywork").append("<div  class='trabajo' ></div>");
*/




$(".trabajo").each(function (i) {

    $(this).css({

        'width': anchoTrabajos / numX,
        'height': altoTrabajos / numY
    });


    $($(".trabajo-cover")[i]).css({
        'background-image': covers[i],
    })

//esto es lo mismo que el click, lo pongo para que carguen primero las imágenes antes de darles click;
for (var j = 0; j < trabajos[i].length; j++) {
            $(".contenido-trabajo").append("<img src=" + trabajos[i][j] + ">");

            $(".contenido-trabajo").css({
                'background-image': 'url(' + backgrounds[i] + ')'
            })

        }


    $(this).click(function () {
        
       
        
        
   $("body").css({
            'overflow-y': 'hidden'
        })
        
            $( ".contenido-trabajo" ).scrollTop(0);
          $(".contenido-trabajo").empty();
              $(".chipsTag").empty();
            $(".section-links").empty();
        
        
          $('html, body').animate({
        scrollTop: $("#my-work").offset().top
    }, 500);
        
        
    
            if(ancho>768){
            $(".contenido-trabajo-descripcion").css({'width':'322px'})
                
                $(".contenido-trabajo").css({'width':ancho-322})
        } else{
            $(".contenido-trabajo-descripcion").css({'width':'0'})
                
                $(".contenido-trabajo").css({'width':'100%'})  
            
            $(".contenedor-icon-info").css({'height':'80px'})
         
            $(".contenedor-icon-info").empty();
            
            $(".contenedor-icon-info").append("<div class='icon-info'></div>")
        }

        
        
        for (var j = 0; j < trabajos[i].length; j++) {
            $(".contenido-trabajo").append("<img src=" + trabajos[i][j] + ">");

            $(".contenido-trabajo").css({
                'background-image': 'url(' + backgrounds[i] + ')'
            })

        }


        $(".work-titulo").text(titulos[i]);
        $(".work-descripcion").text(descripciones[i])
        if(i==0){
              $(".work-descripcion").append("<a class='link-web-trabajo' href='portfolio/hoy-es-diseno' target='_blank' > La página web del evento.</a>")
        }
        ;
        
        
      for (var j = 0; j < tags[i].length; j++) {
          $(".chipsTag").append("<div class='chipTag chip'> <img class='work-skill' src='img/icon-"+tags[i][j]+".svg'>"+tags[i][j]+"</div>")
      }
        
        
           
      for (var j = 0; j < links[i].length; j++) {
          $(".section-links").append("<a href="+links[i][j]+" target='_blank'><i class='icon-"+paginas[i][j]+"'></i></a>")
      }
        
        

        $(".contenido-trabajo").css({
            'height': '100%'
        })

        $(".contenido-trabajo-descripcion").css({
            'height': '100%'
        })

        $("body").css({
            'overflow': 'hidden'
        })
        

        setTimeout(
            function () {
                $(".icon-close").css({
                    'width': '100px'
                })
            }, 500)


    });



});



$(".icon-close").click(function () {
    
     $("body").css({
        'overflow': 'visible'
    })

    
    $(".contenido-trabajo").css({
        'height': '0'
    })

    $(".contenido-trabajo-descripcion").css({
        'height': '0'
    })
    $(this).css({
        'width': '0'
    })


   $(".contenedor-icon-info").css({
            'height':'0',
         
     })
   

});



var trabajoResponsive = function (ancho, alto, numX, numY) {
    $(".trabajo").each(function (i) {
        $(this).css({
            'width': ancho / numX,
            'height': alto / numY
        });
    });
}

var infoTrabajos=false;


$(".icon-close").click(function(){
    infoTrabajos=false;
    
})


$(".contenedor-icon-info").click(function(){

    if(infoTrabajos==false){
    $(".contenido-trabajo-descripcion").css({'width':'100%'})
     $(".contenido-trabajo").css({'width':'0'})
        
        
            $(".contenedor-icon-info").empty();
        
         $(".contenedor-icon-info").append("<div class='icon-chevron-circle-right'></div>")
        
       
       
       
    }else{
        $(".contenido-trabajo-descripcion").css({'width':'0'})
     $(".contenido-trabajo").css({'width':'100%'})
          $(".contenedor-icon-info").empty();
        
            $(".contenedor-icon-info").append("<div class='icon-info'></div>")
       
       
    }
    
    infoTrabajos=!infoTrabajos;
});


    



$(".learn-more>a>p").mouseover(function () {
    $(".learn-more>a>p").css("color", GREENCOLOR);

    $(".home-icon-down>a>i").css("color", GREENCOLOR);
});

$(".learn-more").mouseout(function () {
    $(".learn-more>a>p").css("color", WHITECOLOR);

    $(".home-icon-down>a>i").css("color", WHITECOLOR);
});


$(".home-icon-down>a>i").mouseover(function () {
    $(".learn-more>a>p").css("color", GREENCOLOR);

    $(".home-icon-down>a>i").css("color", GREENCOLOR);
});

$(".home-icon-down>a>i").mouseout(function () {
    $(".learn-more>a>p").css("color", WHITECOLOR);

    $(".home-icon-down>a>i").css("color", WHITECOLOR);
});




if (ancho <= 600) {
    alto = $("#my-work").height();
    trabajoResponsive(ancho, alto, numXCel, numYCel);
}


//aquí van los que necesitan ser redimensionados
$(window).resize(function () {
    ancho = $(window).width();
    alto = $("#my-work").height();
    skillsResponsive(ancho);

 
            if(ancho>768){
            $(".contenido-trabajo-descripcion").css({'width':'322px'})
                
                $(".contenido-trabajo").css({'width':ancho-322})
        } else{
            $(".contenido-trabajo-descripcion").css({'width':'0'})
                
                $(".contenido-trabajo").css({'width':'100%'})  }
    

    if (ancho > 600) {
        trabajoResponsive(ancho, alto, numX, numY);
        
        
        
    } else {

        trabajoResponsive(ancho, alto, numXCel, numYCel);
    }


});






var iniciar = function(){
         
     $("#loading").css({
         'opacity':'0'
     });
        
       
        
        //inicia con opacidad y animación del logo


setTimeout(
    function () {
          $("#loading").remove();
        
         $("body").css({
            'overflow-y': 'visible'
        })
        
        
        $(".logo-uno").css({
            'padding': '0',
            'opacity': '1'
        })

      }, 500);



setTimeout(
    function () {
        $(".logo-tres").css({
            'transition': '1s',
            'transform': 'translate(0em,0em) rotate(-0deg)',
            'opacity': '1',
            'background-position': 'left'
        });

    }, 1000);


setTimeout(
    function () {
        $(".logo-dos").css({
            'transform': 'translateX(0)',
            'opacity': '1'
        });

    }, 2000);

setTimeout(
    function () {
        $(".logo-cuatro").css({
            'transform': 'translateX(0)',
            'opacity': '1'
        });
    }, 3000);

setTimeout(
    function () {

        showText(".introduccion", intro, 0, 60);
    }, 4000);

setTimeout(
    function () {
        $(".rect-see-my-work").css({
            'opacity': '1'
        });


    }, 8000);

        
        
}

setTimeout(
    function () {
        
       
        $(".titulo-loading").css({
            'opacity': '1',
            'visibility':'visible'
        });


    }, 10000);



window.onload = function() {
    if (window.jQuery) {  
        // jQuery is loaded   
 iniciar();   
    } else {
        // jQuery is not loaded
        alert("Refresh page");
    }
}

$(".titulo-loading>p").click(function(){
    iniciar();  
})
