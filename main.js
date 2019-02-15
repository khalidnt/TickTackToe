$(document).ready(function() {
    console.log('jQ ready!');

    var turn1 = "X";
    var turn2 = "O";
    
    var turnplayed = 0;

    document.querySelector(".squre").addEventListener('click',function(paintTurn){},)

   function paintTurn() {
        if ( turnplayed  % 2 === 0 ) {
        $( ".squre" ).append( $( turn1 ) );
        }
        else {
        $( ".squre" ).append( $( turn2 ) );
        }
        turnplayed++;

        //check :odd Selector
    }
    if(turnplayed == 9) {
        checkWinner()
    }
function checkWinner(){

}

})