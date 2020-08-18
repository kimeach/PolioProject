/**
 * 2020년 04월 29일 최초 생성
 */

				$(function(){
					$("#TitleMenu").click(function(){
						location.href ="index";
					})
					
					var $root = $('html, body');

					$('#MainMenu_Intro').click(function() {
					
					    $root.animate({
					
					        scrollTop: $( $.attr(this, 'href') ).offset().top
					
					    }, 500);
					
					    return false;
					
					});
					
//					
//					$("#MainMenu_MainMenu_Carrer").click(function(){
//						location.href ="#Carrer";
//					})
//					
//					$("#MainMenu_Etc").click(function(){
//						location.href ="#Etc";
//						
//					})
//					
//					$("#MainMenu_Comment").click(function(){
//						location.href ="comment";
//					})
//					
//					$("#MainMenu_History").click(function(){
//						location.href ="history";
//					})
					
					$('#searchCloseBtn').click(function(){
						$('#search').slideUp("slow");
					})
					
					$("#searchBtn-search").click(function(){
						$("#search").slideToggle("slow");
						
					})
					
					$("#menu_login").click(function(){
						location.href = "Login"
					})
				
					$("#menu_logout").click(function(){
						$.ajax({
							url : "./Logout",
							type : "get",
							data : "",
							success : function(){
								alert("로그아웃되었습니다.");
								location.reload(true);
							},
							error : function(){
							}
						})
					})
					
					
				});	
				
			$(function(){
				$('#sidebarBtnCover').click(function(){
					console.log("sidebarBtnCover 누름")
					$('#sidebarBtn').html('<i class="fa fa-angle-double-left fa-lg" aria-hidden="true"></i>')
					$('.iconName').css("display","block");
					
					if(parseInt($('#sidebarCover').css("width")) === parseInt((innerWidth*0.07)*0.5)){
						console.log("50일 때 들어옴")
						$('.iconName').css("display","block");
						$('#sidebarCover').animate({
							width : '70%'
						},
						200);
					}else if(parseInt($('#sidebarCover').css("width")) === parseInt((innerWidth*0.07)*0.7)){
						console.log("70일 때 들어옴")
						$('.iconName').css("display","none");
						$('#sidebarCover').animate({
							width : '50%'
						},
						200);
						$('#sidebarBtn').html('<i class="fa fa-angle-double-right fa-lg" aria-hidden="true"></i>')
					}
				})
			});	
			
			$(function(){
				$("#menu_inst").click(function(){
					location.href ="myPortPolio";
				})
				
				$("#menu_travel").click(function(){
					location.href ="myPortPolio";
				})
				
				$("#menu_shopping").click(function(){
					location.href ="myPortPolio";
				})
				
				$("#menu_blog").click(function(){
					location.href ="myPortPolio";
				})
			});