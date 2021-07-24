from flask import Flask, Blueprint, render_template, request
import smtplib

app = Flask(__name__)
bp = Blueprint('app',__name__)

@bp.route('/')
def index():
	return render_template('index.html')

app.register_blueprint(bp)

#Habilitando o hot reload (execução via python app.py ao invés de flask run):
if __name__ == '__main__':
	app.run(debug=True)