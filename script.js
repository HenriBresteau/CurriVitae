// NAVBAR
let lastscrollTop= 0;
navbar = window.document.getElementById('navbar');

window.addEventListener('scroll',function(){
    const scrollTop = window.pageYOffset || this.document.documentElement.scrollTop;
    if (scrollTop > lastscrollTop) {
        navbar.style.top="-50px";
    } else {
        navbar.style.top="0";
    }
    lastscrollTop = scrollTop;
})
// TYPED
var typed = new Typed('.typed', {
    strings: [ "Bonjour à tous !","Je me présente, je m appelle Henri. Je voudrais bien réussir ma vie, être aimé , être beau, gagner de l argent. Puis surtout être intelligent Mais pour tout ça il faudrait que je bosse à plein temps . Je suis chanteur, je chante pour mes copains .Je veux faire des tubes et que ça tourne bien, tourne bien. Je veux écrire une chanson dans le vent. Un air gai, chic et entraînant. Pour faire danser dans les soirées de Monsieur Durand"],
    typeSpeed: 40,
  });

// COMPTEUR LIVE
let compteur =0;

$(window).scroll(function(){
    const top = $('.counter').offset().top - window.innerHeight;

    if (compteur ==0 && $(window).scrollTop() > top) {
        $('.counter-value').each(function () {
            let $this = $(this),
                $countTo = $this.attr('data-count');
            $({
                countNum: $this.text()
            }).animate({
                countNum: $countTo
            },{
                duration:10000,
                easing:'swing',
                step: function () {
                    $this.text(Math.floor(this.countNum));
                },
                complete: function () {
                    $this.text(this.countNum);
                }
            });
        });
        compteur = 1;
    }
});

// AOS
AOS.init();
