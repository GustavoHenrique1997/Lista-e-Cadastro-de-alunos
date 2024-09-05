
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elems, {
        edge: 'left',
        draggable: true
    });
});

    var botaolixeira = document.querySelector('#botaolixeira');
    var botaolista = document.querySelector('#lista');
    var botaocadastro = document.querySelector('#cadastro');
    var form = document.querySelector('#formulario');
    var lista = document.querySelector('#listar');
    var lixeira = document.querySelector('#lixeira');
    var areacep = document.querySelector('#cep');
    var respostaCep = document.querySelector('#respostaCep');
    var botaocep = document.querySelector('#calcularcep');
    var novoCadastro = document.querySelector('#novoCadastro');


    botaolixeira.onclick = function() {
      form.style.display="none";
      lista.style.display="none";
      areacep.style.display="none";
      lixeira.style.display="block";
      botaocadastrar.style.display="none";
      listaLixeira2();

    }
    botaolista.onclick = function() {
      form.style.display="none";
      areacep.style.display="none";
      lista.style.display="block";
      lixeira.style.display="none";
      botaocadastrar.style.display="none";
      listaAlunos();

    }

    botaocadastro.onclick = function() {
      form.style.display="block";
      areacep.style.display="block";
      botaocadastrar.style.display="none";
      lista.style.display="none";
      lixeira.style.display="none";
      
    }

    
    //        Calculando CEP

    botaocep.onclick = function(){  
    botaocadastrar.style.display="block";    
    var dadosCep = document.querySelector('#campoCEP');
    var dados =dadosCep.value
    var req = new XMLHttpRequest();    
    req.onloadend = function(){
        resp = req.responseText;
        resp_obj = JSON.parse(resp);
        CEPpronto = ('<br>' + 'Rua: '  + resp_obj.logradouro + '<br>' + 'Bairro: ' + resp_obj.bairro + '<br>' +
        'Cidade: ' + resp_obj.localidade + '<br>' + 'Estado: ' + resp_obj.uf + '<br>');
        //respostaCep.style.display="";
        respostaCep.innerHTML =  CEPpronto;
        }
    req.open('GET', 'https://viacep.com.br/ws/' + dados + '/json');
    req.send(null);
    return false;
    }


///                 BIBLIOTECA


var biblioteca = {
'alunos':[
  {'nome': 'Gustavo Henrique' , 'idade': 27 ,'curso':'Técnico em informática','turno':'Noite','matriculado':'sim',
  'rua':'Morumbi','bairro':'Novo Horizonte','cidade':'Barbacena','estado':'MG','valorCep':'36204047'},

  {'nome': 'Maria Eduarda' , 'idade': 26 ,'curso':'Técnico em informática','turno':'Noite','matriculado':'sim',
  'rua':'Morumbi','bairro':'Novo Horizonte','cidade':'Barbacena','estado':'MG','valorCep':'36204047'},
]}
var biblioteca1 = {
'lixeira':[
  {'nome': 'Eduardo' , 'idade': 20 ,'curso':'Técnico em informática','turno':'manha','matriculado':'sim',
    'rua':'Morumbi','bairro':'Novo Horizonte','cidade':'Barbacena','estado':'MG','valorCep':'36204047'},
]};



//                    LISTAR ALUNOS


  function listaAlunos(){ 
   
     
    novoCadastro.innerHTML= '';

            for (i = 0; i < biblioteca.alunos.length; i++) {
                aluno=" "; 
                aluno = '<li>' + '<div class="collapsible-header" id="div_' + i +'">' + '<i class="large material-icons">account_circle</i>' 
                + biblioteca.alunos[i].nome + '</div>' + '<div class="collapsible-body">' +
                '<span>' + 'Idade: ' + biblioteca.alunos[i].idade + '<br>' + 'Curso: ' + biblioteca.alunos[i].curso + '<br>' + 'Turno: ' + biblioteca.alunos[i].turno +
                '<br>' + 'Matriculado: ' + biblioteca.alunos[i].matriculado + '<br>' + 'Rua: ' + biblioteca.alunos[i].rua +
                '<br>Bairro: ' + biblioteca.alunos[i].bairro + '<br>Cidade: ' + biblioteca.alunos[i].cidade + '<br>Estado: ' + biblioteca.alunos[i].estado + '<br>' +
                '<button id="Excluir" type="button" onclick="excluir1('+i+')"> <i class="material-icons" >delete</i> </button>' + 
                '<button id="Editar" type="button" onclick="editar1('+i+')"> <i class="material-icons" >edit</i> </button>'  + '<br>' + '<br>'+ '</span>' + '</div>' + '</li>';
                novoCadastro.innerHTML += aluno;}
}

      //            CADASTRANDO NOVO ALUNO


  var botaocadastrar = document.querySelector('#botaocadastrar'); 
  var n = document.querySelector('#campoNome');
  var I = document.querySelector('#campoIdade');
  var c= document.querySelector('#campoCurso');
   var C= document.querySelector('#campoCEP');
  
  botaocadastrar.onclick=function(){

    $(document).ready(function() {
                const turnoResp = $('input[name="campoTurno"]:checked').val();
                const matriculaResp = $('input[name="campoMatriculado"]:checked').val();
    
    nome=n.value;
    idade=parseInt(I.value);
    curso=c.value;
const temDuasPalavras = nome.split(/\s+/).length >= 2;
if(nome.length > 9 && parseInt(idade) > 0 && parseInt(idade) < 151 && curso.length > 2 && temDuasPalavras) {


    let novoAluno = {
        'nome': nome,
        'idade': idade,
        'curso': curso,
        'turno': turnoResp,
        'matriculado':matriculaResp,
        'rua':resp_obj.logradouro,
        'bairro':resp_obj.bairro,
        'cidade':resp_obj.localidade,
        'estado':resp_obj.uf,
        'valorCep':C,
    };

     biblioteca.alunos.push(novoAluno);
     alert("Cadastrado");
     

}else 
      alert("Verifique os dados");
    
 })
  };

  
//                     EDITAR

function editar1(i) {
    form.style.display = "none";
    areacep.style.display = "none";
    lixeira.style.display = "none";
    botaocadastrar.style.display = "none";
    novoCadastro.style.display = "none";

    var editarCadastro = document.querySelector('#editarCadastro');
    var idadeconv = biblioteca.alunos[i].idade;
    var local = i;

    editarCadastro.innerHTML = `
        <h1>Editar Cadastro</h1><br>
        <label id="nome">Nome:</label>
        <input type="text" id="nomeedit" class="validate" value="${biblioteca.alunos[i].nome}" required minlength="10"><br>
        <span class="helper-text" data-error="O nome deve conter no mínimo 10 caracteres e duas palavras"></span><br>
        <label id="idade">Idade:</label>
        <input type="text" id="idadeedit" class="validate" value="${idadeconv}"><br>
        <span class="helper-text" data-error="A idade deve ser entre 1 e 150 anos"></span><br>
        <label id="curso">Curso:</label>
        <input type="text" id="cursoedit" class="validate" value="${biblioteca.alunos[i].curso}"><br>
        <span class="helper-text" data-error="O curso deve conter no mínimo 3 caracteres"></span><br>
        <form action="#">
            <label id="turno">Turno:</label>
            <p><label><input class="with-gap" name="campoTurnoEdit" type="radio" value="manha" ${biblioteca.alunos[i].turno === 'manha' ? 'checked' : ''} checked/>
            <span>Manhã</span></label></p>
            <p><label><input class="with-gap" name="campoTurnoEdit" type="radio" value="tarde" ${biblioteca.alunos[i].turno === 'tarde' ? 'checked' : ''} />
            <span>Tarde</span></label></p>
            <p><label><input class="with-gap" name="campoTurnoEdit" type="radio" value="noite" ${biblioteca.alunos[i].turno === 'noite' ? 'checked' : ''} />
            <span>Noite</span></label></p>
            <label id="matriculado">Matriculado:</label>
            <p><label><input class="with-gap" name="campoMatriculadoEdit" type="radio" value="sim" ${biblioteca.alunos[i].matriculado === 'sim' ? 'checked' : ''} />
            <span>SIM</span></label></p>
            <p><label><input class="with-gap" name="campoMatriculadoEdit" type="radio" value="nao" ${biblioteca.alunos[i].matriculado === 'nao' ? 'checked' : ''} />
            <span>NÃO</span></label></p>
        </form>
        <label id="CAMPOCEP">CEP:</label>
        <input type="text" id="campoCEPEdit" value="${biblioteca.alunos[i].valorCep}"><br><br>
        <button id="calcularcepEdit">Calcular</button>
        <div id="respostaCepEdit"> </div>
        <button class="botao" id="salvar" type="button">Salvar</button>
    `;

    var botaoSalvar = document.querySelector('#salvar');
    var botaocep2 = document.querySelector('#calcularcepEdit');
    salvar.style.display="none";

    botaocep2.onclick = function(f) {
    
    salvar.style.display="block";    
    var dadosCepEdit = document.querySelector('#campoCEPEdit');
    var respostaCepEdit = document.querySelector('#respostaCepEdit');
    var dados1 =dadosCepEdit.value
    var req = new XMLHttpRequest();    
    req.onloadend = function(){
        resp = req.responseText;
        resp_obj = JSON.parse(resp);
        CEPpronto = ('<br>' + 'Rua: '  + resp_obj.logradouro + '<br>' + 'Bairro: ' + resp_obj.bairro + '<br>' +
        'Cidade: ' + resp_obj.localidade + '<br>' + 'Estado: ' + resp_obj.uf + '<br>');
        respostaCepEdit.innerHTML =  CEPpronto;
        }
        req.open('GET', 'https://viacep.com.br/ws/' + dados1 + '/json');
        req.send(null);
        return false; 
    };

    botaoSalvar.onclick = function() {
        var nomeEdit = document.querySelector('#nomeedit').value;
        var idadeEdit = document.querySelector('#idadeedit').value;
        var cursoEdit = document.querySelector('#cursoedit').value;
        var turnoRespEdit = $('input[name="campoTurnoEdit"]:checked').val();
        var matriculaRespEdit = $('input[name="campoMatriculadoEdit"]:checked').val();
        var cepData = JSON.parse(botaoSalvar.dataset.cepData || '{}');

       
        if (nomeEdit.length >= 10 && idadeEdit >= 1 && idadeEdit <= 150 && cursoEdit.length >= 3) {
            biblioteca.alunos[local].nome = nomeEdit;
            biblioteca.alunos[local].idade = idadeEdit;
            biblioteca.alunos[local].curso = cursoEdit;
            biblioteca.alunos[local].matriculado = matriculaRespEdit;
            biblioteca.alunos[local].turno = turnoRespEdit;
            biblioteca.alunos[local].rua = resp_obj.logradouro || '';
            biblioteca.alunos[local].bairro = resp_obj.bairro || '';
            biblioteca.alunos[local].cidade = resp_obj.localidade || '';
            biblioteca.alunos[local].estado = resp_obj.uf || '';
            biblioteca.alunos[local].valorCep = document.querySelector('#campoCEPEdit').value;

            editarCadastro.style.display = "none";
            novoCadastro.style.display = "block";
            novoCadastro.innerHTML = '';

            for (var i = 0; i < biblioteca.alunos.length; i++) {
                var aluno = `
                    <li>
                        <div class="collapsible-header" id="div_${i}">
                            <i class="large material-icons">account_circle</i> ${biblioteca.alunos[i].nome}
                        </div>
                        <div class="collapsible-body">
                            <span>
                                Idade: ${biblioteca.alunos[i].idade}<br>
                                Curso: ${biblioteca.alunos[i].curso}<br>
                                Turno: ${biblioteca.alunos[i].turno}<br>
                                Matriculado: ${biblioteca.alunos[i].matriculado}<br>
                                Rua: ${biblioteca.alunos[i].rua}<br>
                                Bairro: ${biblioteca.alunos[i].bairro}<br>
                                Cidade: ${biblioteca.alunos[i].cidade}<br>
                                Estado: ${biblioteca.alunos[i].estado}<br>
                                <button id="Excluir" type="button" onclick="excluir1(${i})">
                                    <i class="material-icons">delete</i>
                                </button>
                                <button id="Editar" type="button" onclick="editar1(${i})">
                                    <i class="material-icons">edit</i>
                                </button><br><br>
                            </span>
                        </div>
                    </li>
                `;
                novoCadastro.innerHTML += aluno;
            }
        } else {
            alert("Verifique os dados");
        }
    };
}


   document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems, {
    accordion: false});
  
 });



  //               LIXEIRA
 
  function excluir1(i){
    nome=biblioteca.alunos[i].nome;
    idade=biblioteca.alunos[i].idade;
    curso=biblioteca.alunos[i].curso;
    turno=biblioteca.alunos[i].turno;
    rua=biblioteca.alunos[i].rua;
    let novoAluno1 = {
        'nome': nome,
        'idade': idade,
        'curso': curso,
        'Turno': turno,
        'Matriculado': biblioteca.alunos[i].matriculado,
        'Rua': rua,
        'Bairro':biblioteca.alunos[i].bairro,
        'Cidade':biblioteca.alunos[i].cidade,
        'Estado':biblioteca.alunos[i].estado,
    };
     biblioteca1.lixeira.push(novoAluno1);
     biblioteca.alunos.splice(i,1);
     listaAlunos();
   
  }
     function listaLixeira2(){ 
      var listaLixeira= document.querySelector('#listaLixeira');
      listaLixeira.innerHTML= '';

                  for (i = 0; i < biblioteca1.lixeira.length; i++) {
                     var aluno1 = `
                    <li>
                        <div class="collapsible-header" id="div_${i}">
                            <i class="large material-icons">account_circle</i> ${biblioteca1.lixeira[i].nome}
                        </div>
                        <div class="collapsible-body">
                            <span>
                                Idade: ${biblioteca1.lixeira[i].idade}<br>
                                Curso: ${biblioteca1.lixeira[i].curso}<br>
                                Turno: ${biblioteca1.lixeira[i].turno}<br>
                                Matriculado: ${biblioteca1.lixeira[i].matriculado}<br>
                                Rua: ${biblioteca1.lixeira[i].rua}<br>
                                Bairro: ${biblioteca1.lixeira[i].bairro}<br>
                                Cidade: ${biblioteca1.lixeira[i].cidade}<br>
                                Estado: ${biblioteca1.lixeira[i].estado}<br>
                                <button id="Excluir" type="button" onclick="excluir3(${i})">
                                    <i class="material-icons">delete</i>
                                </button>
                                <button id="restaurar" type="button" onclick="restaurar(${i})">
                                    <i class="material-icons">autorenew</i>
                                </button>
                            </span>
                        </div>
                    </li>
                `;
                listaLixeira.innerHTML += aluno1;}}
  
function excluir3(i){
    biblioteca1.lixeira.splice(i,1);
    listaLixeira2();}
 

var esvaziar = document.querySelector('#Esvaziar');
esvaziar.onclick = function() {
    var total = biblioteca1.lixeira.length;
    biblioteca1.lixeira.splice(0,total);
    listaLixeira2();}

function restaurar(i){
    
    let novoAluno1= {
        'nome': biblioteca1.lixeira[i].nome,
        'idade': biblioteca1.lixeira[i].idade,
        'curso': biblioteca1.lixeira[i].curso,
        'turno': biblioteca1.lixeira[i].turno,
        'matriculado':biblioteca1.lixeira[i].matriculado,
        'rua':biblioteca1.lixeira[i].rua,
        'bairro':biblioteca1.lixeira[i].bairro,
        'cidade':biblioteca1.lixeira[i].cidade,
        'estado':biblioteca1.lixeira[i].estado,
        
    };

     biblioteca.alunos.push(novoAluno1);
     biblioteca1.lixeira.splice(i,1);
     alert("Restaurado");
     listaLixeira2();

   }
