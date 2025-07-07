       const fullText = "Temos landing pages prontas para você + domínio personalizado!";
            const shortText = "Bem-vindo à Tec Pereira BH!";
            const typingElement = document.getElementById("typing-effect");
            let i = 0;
            let text = fullText;

            function updateTextForScreen() {
            if (window.innerWidth <= 500) {
                text = shortText;
            } else {
                text = fullText;
            }
            }

            function typeWriter() {
            if (i < text.length) {
                typingElement.innerHTML += text.charAt(i);
                i++;
                setTimeout(typeWriter, 90);
            } else {
                setTimeout(() => {
                typingElement.innerHTML = "";
                i = 0;
                updateTextForScreen();
                typeWriter();
                }, 1200);
            }
            }

            window.addEventListener('resize', () => {
            updateTextForScreen();
            typingElement.innerHTML = "";
            i = 0;
            });

            updateTextForScreen();
            typeWriter();



                    function enviarWhatsApp(servico) {
                    const numero = "5531920048260";
                    const mensagem = encodeURIComponent(`Olá! Tenho interesse em ${servico}.`);
                    window.open(`https://wa.me/${numero}?text=${mensagem}`, "_blank");
                }
