//= require "jquery-3.1.1.js"
//= require "jquery.xdomainajax.js"

/**
 * RSSを取得し、指定idの要素に相互RSSを追加するスクリプト
 * Shigotano, Medium
 * 動作にはjQueryと、カスタムのCSSが必要
 */ 
 $.ajax({
        type: 'GET',
        url: "http://cyblog.jp/modules/weblogs/author/nokiba/feed",
        dataType: 'xml',
        success: function(data) {
            var htmlstr = "";

		//htmlstr += data.responseText;	
		htmlstr += '<div class="all_body">';
			
		var xmlDoc = $.parseXML(data.responseText);
		
		    $(xmlDoc).find("item").each(function (i) {
		        var el = $(this);
		        
				var d=new Date(el.find("pubDate").text());
htmlstr += (d.getFullYear()+'/'+(d.getMonth()+1)+'/'+d.getDate());
				
				htmlstr += ' <a href="' + el.find("link").text() + '" title="' + el.find("title").text() + '" rel="nofollow" target="_blank">' + el.find("title").text() + '</a></br>';
				htmlstr += el.find("description").text();
				
				return false;
});

        htmlstr += '</div>';

		var container = document.getElementById("shi_feed");
		container.innerHTML = htmlstr;
        }, error:function(e) {
		var container = document.getElementById("shi_feed");
		container.innerHTML = '';
        }
    });

    $.ajax({
        type: 'GET',
        url: "https://medium.com/feed/@nokiba",
        dataType: 'xml',
        success: function(data) {
            var htmlstr = "";

		//htmlstr += data.responseText;	
		htmlstr += '<div class="all_body">';
			
		var xmlDoc = $.parseXML(data.responseText);
		
		    $(xmlDoc).find("item").each(function (i) {
		        var el = $(this);
		        
				var d=new Date(el.find("pubDate").text());
htmlstr += (d.getFullYear()+'/'+(d.getMonth()+1)+'/'+d.getDate());
				
				htmlstr += ' <a href="' + el.find("link").text() + '" title="' + el.find("title").text() + '" rel="nofollow" target="_blank">' + el.find("title").text() + '</a></br>';
				
				var xmlDesc = $.parseHTML(el.find("description").text());
				$(xmlDesc).find(".medium-feed-snippet").each(function (d){
				htmlstr += $(this).text();
				return false;
				});
				
				return false;
});

        htmlstr += '</div>';

		var container = document.getElementById("med_feed");
		container.innerHTML = htmlstr;
        }, error:function(e) {
		var container = document.getElementById("med_feed");
		container.innerHTML = '';
        }
    });
    
    $.ajax({
        type: 'GET',
        url: "http://nokiba.hatenablog.jp/rss",
        dataType: 'xml',
        success: function(data) {
            var htmlstr = "";

		//htmlstr += data.responseText;	
		htmlstr += '<div class="all_body">';
			
		var xmlDoc = $.parseXML(data.responseText);
		
		    $(xmlDoc).find("item").each(function (i) {
		        var el = $(this);
		        
				var d=new Date(el.find("pubDate").text());
htmlstr += (d.getFullYear()+'/'+(d.getMonth()+1)+'/'+d.getDate());
				
				htmlstr += ' <a href="' + el.find("link").text() + '" title="' + el.find("title").text() + '" rel="nofollow" target="_blank">' + el.find("title").text() + '</a></br>';
				
				
				return false;
});

        htmlstr += '</div>';

		var container = document.getElementById("hatena_feed");
		container.innerHTML = htmlstr;
        }, error:function(e) {
		var container = document.getElementById("hatena_feed");
		container.innerHTML = '';
        }
    });
 
    $.ajax({
        type: 'GET',
        url: "https://www.newshack.info/feed/",
        dataType: 'xml',
        success: function(data) {
            var htmlstr = "";

		//htmlstr += data.responseText;	
		htmlstr += '<div class="all_body">';
			
		var xmlDoc = $.parseXML(data.responseText);
		
		    $(xmlDoc).find("item").each(function (i) {
		        var el = $(this);
		        
				var d=new Date(el.find("pubDate").text());
htmlstr += (d.getFullYear()+'/'+(d.getMonth()+1)+'/'+d.getDate());
				
				htmlstr += ' <a href="' + el.find("link").text() + '" title="' + el.find("title").text() + '" rel="nofollow" target="_blank">' + el.find("title").text() + ' by ' + el.find("dc\\:creator").text() + '</a></br>';
				
				
				if(i === 2) { // 表示件数の設定
                        return false;
                        };
});

        htmlstr += '</div>';

		var container = document.getElementById("newshack_feed");
		container.innerHTML = htmlstr;
        }, error:function(e) {
		var container = document.getElementById("newshack_feed");
		container.innerHTML = '';
        }
    });

    $.ajax({
        type: 'GET',
        url: "https://note.mu/nokiba/m/m3221b02820a1/rss",
        dataType: 'xml',
        success: function(data) {
            var htmlstr = "";

		//htmlstr += data.responseText;	
		htmlstr += '<div class="all_body">';
			
		var xmlDoc = $.parseXML(data.responseText);
		
		    $(xmlDoc).find("item").each(function (i) {
		        var el = $(this);
		        
				var d=new Date(el.find("pubDate").text());
htmlstr += (d.getFullYear()+'/'+(d.getMonth()+1)+'/'+d.getDate());
				
				htmlstr += ' <a href="' + el.find("link").text() + '" title="' + el.find("title").text() + '" rel="nofollow" target="_blank">' + el.find("title").text();
				
				if ( ~el.find("link").text().indexOf('nokiba')) {
					htmlstr += ' by 佐々木正悟'+ '</a></br>';
				} else if(~el.find("link").text().indexOf('rashita')) {
					htmlstr += 'by 倉下忠憲'+ '</a></br>';
				}
				else {
					htmlstr += '</a></br>';
				}
				
				
				if(i === 1) { // 表示件数の設定
                        return false;
                        };
});

        htmlstr += '</div>';

		var container = document.getElementById("note_feed");
		container.innerHTML = htmlstr;
        }, error:function(e) {
		var container = document.getElementById("note_feed");
		container.innerHTML = '';
        }
    });