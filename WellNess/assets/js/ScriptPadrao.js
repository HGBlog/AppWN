// TODAS AS FUNÇÕES DAS PÁGINAS

// FUNÇÕES EXCLUSIVAS PARA EFEITO DE PROTÓTIPO
	// FUNÇÃO ABAIXO PARA REDIRECIONAR PARA A PÁGINA DE LOGIN
function LoadingPage () {
	$(".Pcarregando").addClass('hidden');
	setTimeout(function () {
		$(".Pcarregando").addClass('show');
		$(".Pcarregando").removeClass('hidden');
	}, 2000);
	setTimeout(function () {
		window.open('Login.html', '_self');
	}, 5000);
};
	/* FUNÇÃO PARA FAZER O BOTÃO VOLTAR NO TOPO 
	   DAS PÁGINAS VOLTAR UMA PÁGINA DO HISTÓRICO
	*/
$(function () {
	$(".Voltar").click(function() {
    	history.back()
	});
	// POPOVER E TOOLTIPS ATIVOS
	$("[data-toggle='popover']").popover();
	$('[data-toggle="tooltip"]').tooltip()

	// EFEITO LOADING PARA ALGUNS BOTÕES
	$(".btnLoading").on("click", function () {
    	var $btn = $(this).button("loading");    	
    	// O TIMEOUT ABAIXO É DEMONSTRATIVO PARA O PROTÓTIPO
    	setTimeout(function () {
    		$btn.button("reset");
    	}, 2000);
  	});
  	$(".AddAmigos").on("click", function () {
  		$(this).toggleClass( "active" );
  	});
});
