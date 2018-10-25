



$(document).ready(function () {
    $('.divLettre').hide();
    $('#randomBtn').hide();
    shuffleElements( $('.lettre'));
})

$('#startBtn').on('click', function () {
    $(this).hide();
    $('.divLettre').show();
    $('#randomBtn').show();
})

$(document).on('click', '.lettre', function () {
    $(this).siblings().removeClass("sel");
    $(this).addClass("sel");

})

$(document).keydown(function(e) {
    if(e.which == 37) {
        $('.sel').insertBefore($('.sel').prev());
    }else if (e.which == 39)
    {
        $('.sel').insertAfter($('.sel').next());

    }
    if($('.lettre').eq(0).hasClass("L") && $('.lettre').eq(2).hasClass("U") && $('.lettre').eq(3).hasClass("R")){
        alert('You did it ! omg !');
    }
});


$('#randomBtn').click(function() {
    shuffleElements( $('.lettre') );
});

function shuffleElements($elements) {
    var i, index1, index2, temp_val;

    var count = $elements.length;
    var $parent = $elements.parent();
    var shuffled_array = [];


    // populate array of indexes
    for (i = 0; i < count; i++) {
        shuffled_array.push(i);
    }

    // shuffle indexes
    for (i = 0; i < count; i++) {
        index1 = (Math.random() * count) | 0;
        index2 = (Math.random() * count) | 0;

        temp_val = shuffled_array[index1];
        shuffled_array[index1] = shuffled_array[index2];
        shuffled_array[index2] = temp_val;
    }

    // apply random order to elements
    $elements.detach();
    for (i = 0; i < count; i++) {
        $parent.append( $elements.eq(shuffled_array[i]) );
    }
}

if($('.lettre').eq(0).hasClass("A")){
    alert('omg');
}