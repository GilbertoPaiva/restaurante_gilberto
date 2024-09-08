$(document).ready(function () {
	// Aplicando máscara no campo de telefone
	$('#tel').mask('(00) 00000-0000');

	// Configurando a validação do formulário
	$('form').validate({
		onfocusout: function(element) {
			this.element(element); // Valida ao sair do campo
		},
		rules: {
			nome: {
				required: true,
				minlength: 3
			},
			email: {
				required: true,
				email: true
			},
			telefone: {
				minlength: 14 // Formato da máscara
			},
			mensagem: {
				required: true,
				minlength: 10
			}
		},
		messages: {
			nome: {
				required: "Por favor, insira seu nome",
				minlength: "Seu nome deve ter pelo menos 3 caracteres"
			},
			email: {
				required: "Por favor, insira seu e-mail",
				email: "Por favor, insira um e-mail válido"
			},
			telefone: {
				minlength: "Por favor, insira um número de telefone válido"
			},
			mensagem: {
				required: "Por favor, insira sua mensagem",
				minlength: "Sua mensagem deve ter pelo menos 10 caracteres"
			}
		},
		errorPlacement: function(error, element) {
			error.insertAfter(element); // Coloca a mensagem de erro logo abaixo do campo
		},
		highlight: function(element) {
			$(element).addClass('error'); // Adiciona a classe 'error' ao campo
		},
		unhighlight: function(element) {
			$(element).removeClass('error'); // Remove a classe 'error' ao corrigir o erro
		},
		submitHandler: function(form) {
			// Só envia o formulário se todos os campos estiverem válidos
			alert("Formulário enviado com sucesso!");
			form.submit();
		}
	});
});