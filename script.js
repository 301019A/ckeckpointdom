$(document) .ready(function() {
    update_amounts();
    $(' .Qts, .prix').on('keyup keypress blur change' ,
    function(e) {
        update_amounts();
        
    });
    
});
function update_amounts() {
    var sum = 0.0
    $('#myTable > tbody > tr') .each(function(){
        var Qts = $(this).find(' .Qts').val();
        var prix = $(this).find('.prix').val();
        var amount = (Qts*prix)
        sum+=amount;
        $(this).find(' .amount').text(''+amount);


    });
    
}
$(' .total').text(sum);

var incrementQts;
var decrementQts;
var plusBtn = $(" .plus");
var minusBtn = $ (" .moins");
var incrementQts = plusBtn.click(function() {
    var $n = $(this)
    .parent(" .button-container")
    .find(".Qts");
    $n.val(Number($n.val())+1);
    update_amounts();
});
var decrementQts =minusBtn.click(function() {
var $n = $(this)
    .parent(" .button-container")
    .find(" .Qts");
     var QtsVal = Number($n.val());
    if (QtsValVal >0){
        $n.val(QtsVal -1)
    }
    update_amounts();
});