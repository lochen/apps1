 function doRequest(){
    var httpOptions = {
            trustAll: true
        };
        var params = {
            q: 'phonegap',
            type: 'post'// note this is a GET request post refers to the facebook wall posts
        };

        var apiUrl = 'https://graph.facebook.com/search?';

        window.plugins.HttpRequest.execute(apiUrl,'get',params, httpOptions,
                function(response) {

                    var code = response.code;
                    var message = response.message;
                    var body = response.body;
                    
                    alert(JSON.stringify(body));
                    
                    return;
                },
                function(response) {
              
                    var code = response.code;
                    var message = response.message;
                    var body = response.body;

                    alert('Request : ' + message + ' code ' + code);
                });
}

function searchFacebook(){
	var url = 'https://graph.facebook.com/search?q=phonegap&type=post';
	$.ajax({
		url: url,
		success: function(response){
			//var tmp = $.parseJSON(response);
            /*console.log(JSON.stringify(response));
			//console.log(JSON.parse(response));
			var tmp = $.parseJSON(JSON.stringify(response));
			*console.log(tmp);*/
            var str = JSON.stringify(response);
            var tmp = $.parseJSON(str);
			console.log(tmp.data.length);
            if(tmp.data.length!=0){
                $.each(tmp.data,function(i,d){
                    var html = '';
                    html+='<div class="name">'+d.from.name+'</div>';
                    html+='<div class="message">'+d.message+'</div>';
                    console.log(html);
                    $('<div/>').addClass('box').html(html).appendTo($("#main"));

                });
            }
		},
		error: function(xhr,status,err){
			console.log(err);
		}
	});
}