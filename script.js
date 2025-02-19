// var initializeFormValidation = function () {
//     var formEmail = document.getElementById("formEmail");
//     var inputEmail = document.getElementById("inputEmail");
//     if (!formEmail || !inputEmail) {
//         console.warn("Email form not found");
//         return;
//     }
//     var message = document.createElement("p");
//     message.style.marginTop = "10px";
//     message.style.opacity = "0";
//     message.style.transition = "opacity 0.5s ease-in-out";
//     formEmail.appendChild(message);
//     function isValidEmail(email) {
//         var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         return emailRegex.test(email);
//     }
//     formEmail.addEventListener("submit", function (event) {
//         event.preventDefault();
//         var email = inputEmail.value.trim();
//         if (isValidEmail(email)) {
//             message.textContent = "Valid email. Successfully subscribed.";
//             message.style.color = "green";
//         }
//         else {
//             message.textContent =
//                 "Invalid email. Please enter a valid email address.";
//             message.style.color = "red";
//         }
//         message.style.opacity = "1";
//         setTimeout(function () {
//             message.style.opacity = "0";
//             setTimeout(function () {
//                 message.textContent = "";
//             }, 100);
//         }, 3000);
//     });
// };


// // Função para enviar o email
// async function subscribeToNewsletter(event) {
//     event.preventDefault(); // Impede o envio do formulário

//     const email = document.getElementById('email').value;
//     const messageDiv = document.getElementById('message');

//     // Validação simples do email
//     if (!email || !email.includes('@')) {
//         messageDiv.textContent = 'Por favor, insira um email válido.';
//         messageDiv.classList.add('error');
//         return;
//     }

//     // Simulação de envio para um backend
//     try {
//         const response = await fetch('https://seuservidor.com/api/subscribe', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({ email }),
//         });

//         const data = await response.json();

//         if (response.ok) {
//             messageDiv.textContent = 'Inscrição realizada com sucesso!';
//             messageDiv.classList.remove('error');
//         } else {
//             messageDiv.textContent = data.message || 'Erro ao se inscrever. Tente novamente.';
//             messageDiv.classList.add('error');
//         }
//     } catch (error) {
//         messageDiv.textContent = 'Erro de conexão. Tente novamente mais tarde.';
//         messageDiv.classList.add('error');
//     }
// }


var initializeFormValidation = function () {
    var formEmail = document.getElementById("formEmail");
    var inputEmail = document.getElementById("inputEmail");
    if (!formEmail || !inputEmail) {
        console.warn("Email form or input not found!");
        return;
    }
    var message = document.createElement("p");
    message.style.marginTop = "10px";
    message.style.opacity = "0";
    message.style.transition = "opacity 0.5s ease-in-out";
    formEmail.appendChild(message);
    function isValidEmail(email) {
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    formEmail.addEventListener("submit", function (event) {
        event.preventDefault();
        var email = inputEmail.value.trim();
        if (isValidEmail(email)) {
            message.textContent = "✔ Valid email! You have successfully subscribed.";
            message.style.color = "green";
        }
        else {
            message.textContent =
                "✖ Invalid email. Please enter a correct email address.";
            message.style.color = "red";
        }
        message.style.opacity = "1";
        setTimeout(function () {
            message.style.opacity = "0";
            setTimeout(function () {
                message.textContent = "";
            }, 100);
        }, 3000);
    });
};