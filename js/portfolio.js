$(function(){
    $('.mobile').click(function(){
        $('.mobile ul').slideToggle();
    })
})
$(function(){
    $('nav a').click(function(){
        var href = $(this).attr('href');
        var offSetTop = $(href).offSet().top;
        $('html,body').animate('scrollTop' + offSetTop);
        return false
    })
})
$(function(){var words=['Aplicável','Responsivo','Rápido', 'Prático'];
    var indexWord=0;
    var indexChar=0;
    var interval;
    var elInput=$('.apresentacao input[type=text]');
    elInput.focus();$(window).scrollTop(0);run();
    function run(){
        interval=setInterval(function(){
        if(indexChar<words[indexWord].length){
                indexChar++;elInput.val(words[indexWord].substr(0,indexChar));
            }else if(indexWord<words.length-1){
            indexWord++;indexChar=0;
            }else{
                indexWord=0;indexChar=0;
            }
        },200);
    }
})
$(function(){
    $('form').submit(function(){
        if(formularioPreenchido()){
                var form = $('form');
                $('form').ajaxSubmit({
                    beforeSubmit:function(){
                        form.find('input[type=submit]').attr('disabled','true');
                        form.find('input[type=submit]').animate({'opacity':'0.4'})
                        form.find('input[type=submit]').attr('value','Carregando');
                    },
                    success:function(data){
                        //Aqui você pode inserir uma div, por exemplo.
                        //Qualquer mensagem de sucesso, após o formulario ter sido enviado.
                        alert('Formulário foi enviado com sucesso!');
                        form.find('input[type=submit]').removeAttr('disabled');
                        form.find('input[type=submit]').animate({'opacity':'1'})
                        form.find('input[type=submit]').attr('value','Enviar');
                        form[0].reset();
                    }
                });
        }else{
            alert("Campos Vázios não são permitidos!");
        }
        return false;
    })
    function formularioPreenchido(){
        var nome = $('[name=nome]').val();
        var email = $('[name=email]').val();
        var telefone = $('[name=telefone]').val();
        var mensagem = $('[name=mensagem]').val();
        if(nome === '' || email === '' || telefone === '' || mensagem === ''){
            return false;
        }else{
            return true;
        }
    }
})