from flask import Flask, Blueprint, render_template, request
import smtplib
import os

app = Flask(__name__)
bp = Blueprint('app',__name__)

@bp.route('/')
def index():
	return render_template('index.html')

@bp.route('/send', methods=['POST'])
def send():
	nome = request.form.get('nome')
	email = request.form.get('email')
	mensagem = request.form.get('mensagem')

	my_email = "joaorodriguesdiasneto@gmail.com"
	msg = "Recebi seu email! Entrarei em contato em breve!"
	server = smtplib.SMTP('smtp.gmail.com', 587)
	server.starttls()
	server.login(my_email, os.environ.get('EMAIL_PASS'))
	server.sendmail(my_email, email, msg.encode('utf-8'))
	server.sendmail(my_email, my_email, f'João, você recebeu um novo contato de {nome}, {email} e com a seguinte mensagem: {mensagem}'.encode('utf-8'))
	

	if not nome or not email or not mensagem:
		status_sent = False
		return render_template('index.html', 
				status_sent=status_sent, 
				nome=nome, 
				email=email, 
				mensagem=mensagem)
	else:
		status_sent = True
		return render_template('index.html', status_sent=status_sent)
		

app.register_blueprint(bp)

#Habilitando o hot reload (execução via python app.py ao invés de flask run):
if __name__ == '__main__':
	app.run(debug=True)