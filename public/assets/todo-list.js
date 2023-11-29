$(document).ready(function(){
    $('form').on('submit',function(){
        var item = $('form input');
        var todo = {item: item.val()};

        $.$.ajax({
            type: "POST",
            url: "/todo",
            data: "todo",
            dataType: "dataType",
            success: function (response) {
                // do something with the frontend framework
                location.reload();
            }
        });

        return false;
    });

    $('li').on('click', function(){
        var item = $(this).text().replace(/ /g, "-");
        $.ajax({
            type: 'DELETE',
            url: '/todo/' + item,
            success: function(data){
                // do something with the data via front-end framework
                location.reload();
            }
        });
    }); 
});