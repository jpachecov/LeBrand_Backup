$(document).ready(function() {
      var controller = $.superscrollorama({
            triggerAtTop: false
      });
      controller.addTween('#linea2', TweenMax.from( $('#linea2'), .25, {css:{left:'-1000px'}, ease:Quad.easeInOut}),0,-400,false);
      controller.addTween('#linea3', TweenMax.from( $('#linea3'), .25, {css:{opacity:0,left:'600px'}, ease:Quad.easeInOut}),0,-400,false);
      controller.addTween('#idea', TweenMax.from( $('#idea'), .25, {css:{opacity:0,top:'100px'}, ease:Quad.easeInOut}),0,-400,false);
      controller.addTween('#comportamiento', TweenMax.from( $('#comportamiento'), .25, {css:{left:'-1000px'}, ease:Quad.easeInOut}),0,-400,false);
      controller.addTween('#personalidad', TweenMax.from( $('#personalidad'), .25, {css:{opacity:0,left:'600px'}, ease:Quad.easeInOut}),0,-400,false);
      controller.addTween('#linea4', TweenMax.from( $('#linea4'), .25, {css:{left:'-1000px'}, ease:Quad.easeInOut}),0,-400,false);
      controller.addTween('#linea5', TweenMax.from( $('#linea5'), .25, {css:{opacity:0,left:'600px'}, ease:Quad.easeInOut}),0,-400,false);
      controller.addTween('#relaciones', TweenMax.from( $('#relaciones'), .25, {css:{left:'-1000px'}, ease:Quad.easeInOut}),0,-400,false);
      controller.addTween('#valoresymetas', TweenMax.from( $('#valoresymetas'), .25, {css:{opacity:0,left:'600px'}, ease:Quad.easeInOut}),0,-400,false);
      controller.addTween('#linea6', TweenMax.from( $('#linea6'), .25, {css:{opacity:0, rotation: 720}, ease:Quad.easeOut},2000),0,-400,false);
      controller.addTween('#dna', TweenMax.from( $('#dna'), .5, {css:{opacity: 0}}),0,-400,false);
      controller.addTween('#linea7', TweenMax.from( $('#linea7'), .25, {css:{left:'-1000px'}, ease:Quad.easeInOut}),0,-400,false);
      controller.addTween('#identidad', TweenMax.from( $('#identidad'), .25, {css:{opacity:0,left:'600px'}, ease:Quad.easeInOut}),0,-400,false);
      controller.addTween('#linea8', TweenMax.from( $('#linea8'), .5, {css:{opacity: 0}}),0,-400,false);
      controller.addTween('#texto1', TweenMax.from( $('#texto1'), .5, {css:{opacity: 0}}),0,-400,false);
      controller.addTween('#linea9', TweenMax.from( $('#linea9'), .5, {css:{opacity: 0}}),0,-400,false);
      controller.addTween('#imagen', TweenMax.from( $('#imagen'), .5, {css:{opacity: 0}}),0,-400,false);
      controller.addTween('#linea10', TweenMax.from( $('#linea10'), .5, {css:{opacity: 0}}),0,-400,false);
      controller.addTween('#texto2', TweenMax.from( $('#texto2'), .5, {css:{opacity: 0}}),0,-400,false);
      controller.addTween('#linea11', TweenMax.from( $('#linea11'), .5, {css:{opacity: 0}}),0,-400,false);
      controller.addTween('#marca', TweenMax.from( $('#marca'), .25, {css:{opacity:0,left:'600px'}, ease:Quad.easeInOut}),0,-400,false);
      controller.addTween('#linea12', TweenMax.from( $('#linea12'), .5, {css:{opacity: 0}}),0,-400,false);
      controller.addTween('#tono', TweenMax.from( $('#tono'), .25, {css:{opacity:0,top:'100px'}, ease:Quad.easeInOut}),0,-400,false);
      controller.addTween('#linea13', TweenMax.from( $('#linea13'), .25, {css:{left:'-1000px'}, ease:Quad.easeInOut},2000),0,-400,false);
      controller.addTween('#linea14', TweenMax.from( $('#linea14'), .25, {css:{opacity:0,left:'600px'}, ease:Quad.easeInOut},2000),0,-400,false);
      controller.addTween('#diseno', TweenMax.from( $('#diseno'), .25, {css:{left:'-1000px'}, ease:Quad.easeInOut},2000),0,-400,false);
      controller.addTween('#logotipo', TweenMax.from( $('#logotipo'), .25, {css:{opacity:0,left:'600px'}, ease:Quad.easeInOut}),0,-400,false);
      controller.addTween('#linea15', TweenMax.from( $('#linea15'), .25, {css:{left:'-1000px'}, ease:Quad.easeInOut},2000),0,-400,false);
      controller.addTween('#linea16', TweenMax.from( $('#linea16'), .25, {css:{opacity:0,left:'600px'}, ease:Quad.easeInOut},2000),0,-400,false);
      controller.addTween('#tipografia', TweenMax.from( $('#tipografia'), .25, {css:{left:'-1000px'}, ease:Quad.easeInOut},2000),0,-400,false);
      controller.addTween('#recursos', TweenMax.from( $('#recursos'), .25, {css:{opacity:0,left:'600px'}, ease:Quad.easeInOut},2000),0,-400,false);
      controller.addTween('#linea17', TweenMax.from( $('#linea17'), .25, {css:{left:'-1000px'}, ease:Quad.easeInOut},2000),0,-400,false);
      controller.addTween('#linea18', TweenMax.from( $('#linea18'), .25, {css:{opacity:0,left:'600px'}, ease:Quad.easeInOut},2000),0,-400,false);
      controller.addTween('#estilo', TweenMax.from( $('#estilo'), .25, {css:{left:'-1000px'}, ease:Quad.easeInOut},2000),0,-400,false);
      controller.addTween('#paleta', TweenMax.from( $('#paleta'), .25, {css:{opacity:0,left:'600px'}, ease:Quad.easeInOut},2000),0,-400,false);
      controller.addTween('#linea19', TweenMax.from( $('#linea19'), .25, {css:{left:'-1000px'}, ease:Quad.easeInOut},2000),0,-400,false);
      controller.addTween('#linea20', TweenMax.from( $('#linea20'), .25, {css:{opacity:0,left:'600px'}, ease:Quad.easeInOut},2000),0,-400,false);
      controller.addTween('#foto', TweenMax.from( $('#foto'), .25, {css:{left:'-1000px'}, ease:Quad.easeInOut},2000),0,-400,false);
      controller.addTween('#icono', TweenMax.from( $('#icono'), .25, {css:{opacity:0,left:'600px'}, ease:Quad.easeInOut},2000),0,-400,false);
      controller.addTween('#linea21', TweenMax.from( $('#linea21'), .25, {css:{opacity:0, rotation: 720}, ease:Quad.easeOut},2000),0,-400,false);
      controller.addTween('#linea22', TweenMax.from( $('#linea22'), .5, {css:{opacity: 0}}),0,-400,false);
      controller.addTween('#texto3', TweenMax.from( $('#texto3'), .5, {css:{opacity: 0}}),0,-400,false);
      controller.addTween('#linea23', TweenMax.from( $('#linea23'), .5, {css:{opacity: 0}}),0,-400,false);
      controller.addTween('#bran', TweenMax.from( $('#bran'), .5, {css:{opacity: 0}}),0,-400,false);
      controller.addTween('#linea24', TweenMax.from( $('#linea24'), .5, {css:{opacity: 0}}),0,-400,false);
      controller.addTween('#texto4', TweenMax.from( $('#texto4'), .5, {css:{opacity: 0}}),0,-400,false);
      controller.addTween('#linea25', TweenMax.from( $('#linea25'), .5, {css:{opacity: 0}}),0,-400,false);
      controller.addTween('#experiencia', TweenMax.from( $('#experiencia'), .5, {css:{opacity: 0}}),0,-400,false);
      controller.addTween('#texto5', TweenMax.from( $('#texto5'), .5, {css:{opacity: 0}}),0,-400,false);

    });